"use client";

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import "./CircularCarousel.css";

const wrapAngle = (deg) => ((((deg + 180) % 360) + 360) % 360) - 180;
const clamp = (val, min, max) => Math.min(max, Math.max(min, val));
const rotateX = ([x, y, z], deg) => {
  const rad = (deg * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  return [x, y * c - z * s, y * s + z * c];
};
const rotateY = ([x, y, z], deg) => {
  const rad = (deg * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  return [x * c + z * s, y, -x * s + z * c];
};
const TILES = 4;
const OVERLAP = 2.5;

export default function CircularCarousel({
  items = [],
  cardWidth = 240,
  aspectRatio = 1,
  gap = 25,
  tilt = -5,
  curve = 1,
  perspective = 2500,
  scale = 1,
  speed = 14,
  direction = "left",
  draggable = true,
  momentum = 0.6,
  pauseOnHover = true,
  focusOnClick = true,
  depthFade = 0.55,
  cornerRadius = 16,
  captions = true,
  className = "",
  style,
  inView = true,
  onCardHover,
  onCardClick,
}) {
  const [active, setActive] = useState(0);
  const [ready] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setEntered(true);
      }, items.length * 60 + 800);
      return () => clearTimeout(timer);
    }
  }, [inView, items.length]);

  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const cameraRef = useRef(null);
  const ringRef = useRef(null);
  const cardRefs = useRef([]);
  const wakeRef = useRef(() => {});
  const measureRef = useRef(() => {});

  const count = Math.max(items.length, 1);
  const step = 360 / count;
  const cardW = Math.max(40, cardWidth);
  const cardH = cardW / clamp(aspectRatio, 0.2, 5);
  const along = cardW;

  const radius = useMemo(() => {
    const n = Math.max(count, 3);
    const pitch = cardW + gap;
    const chord = pitch / (2 * Math.sin(Math.PI / n));
    const arc = (n * pitch) / (2 * Math.PI);
    return Math.max(chord + (arc - chord) * curve, cardW * 0.6);
  }, [count, cardW, gap, curve]);

  const tiles = useMemo(() => {
    const total = curve > 0.001 ? TILES : 1;
    const length = along / total;
    const bend = curve > 0.001 ? radius / curve : 0;
    return Array.from({ length: total }, (_, index) => {
      const start = index * length - (index > 0 ? OVERLAP / 2 : 0);
      const end = (index + 1) * length + (index < total - 1 ? OVERLAP / 2 : 0);
      const center = (start + end) / 2 - along / 2;
      const alpha = bend ? center / bend : 0;
      const shift = bend ? bend * Math.sin(alpha) : center;
      const sink = bend ? bend * (1 - Math.cos(alpha)) : 0;
      const depth = -sink;
      const turn = (alpha * 180) / Math.PI;
      const move = "translate3d(" + shift + "px, 0px, " + depth + "px) rotateY(" + turn + "deg)";
      return { index, total, start, end, size: end - start, move };
    });
  }, [along, curve, radius]);

  const stateRef = useRef({
    angle: 0,
    velocity: 0,
    target: null,
    dir: direction === "right" ? 1 : -1,
    press: null,
    drag: false,
    hover: false,
    holdUntil: 0,
    last: 0,
    fit: 1,
    shift: 0,
  });

  const settingsRef = useRef({});
  useLayoutEffect(() => {
    settingsRef.current = {
      count,
      step,
      radius,
      tilt,
      perspective,
      cardW,
      cardH,
      speed,
      draggable,
      momentum: clamp(momentum, 0, 1),
      pauseOnHover,
      depthFade: clamp(depthFade, 0, 1),
      captions,
      scale,
    };
    measureRef.current();
  });

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const camera = cameraRef.current;
    const ring = ringRef.current;
    if (!root || !stage || !camera || !ring) return undefined;

    let raf = 0;
    let visible = true;
    const state = stateRef.current;

    const advance = (s, dt, now) => {
      const paused = (s.pauseOnHover && state.hover) || state.drag || now < state.holdUntil;
      const cruise = !paused ? s.speed * state.dir : 0;
      let busy = state.drag;

      if (state.drag) {
        state.velocity = 0;
      } else if (state.target !== null) {
        const diff = state.target - state.angle;
        state.velocity += diff * 12 * dt;
        state.velocity *= Math.pow(0.001, dt);
        state.angle += state.velocity * dt;
        if (Math.abs(diff) < 0.05 && Math.abs(state.velocity) < 0.1) {
          state.angle = state.target;
          state.velocity = 0;
          state.target = null;
        }
        busy = true;
      } else {
        const tau = 0.18 + s.momentum * 1.5;
        state.velocity += (cruise - state.velocity) * (1 - Math.exp(-dt / tau));
        state.angle += state.velocity * dt;
        busy = busy || Math.abs(state.velocity) > 0.01;
      }
      return busy;
    };

    const measure = () => {
      const s = settingsRef.current;
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const room = s.captions ? 64 : 0;
      const width = rect.width * 0.94;
      const height = (rect.height - room) * 0.92;
      const P = s.perspective;
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;
      const corners = [
        [-s.cardW / 2, -s.cardH / 2],
        [s.cardW / 2, -s.cardH / 2],
        [-s.cardW / 2, s.cardH / 2],
        [s.cardW / 2, s.cardH / 2],
      ];
      const limit = 180;
      for (let a = -limit; a <= limit; a += limit / 24) {
        for (const [cx, cy] of corners) {
          const pRot = rotateX(rotateY([cx, cy, s.radius], a), s.tilt);
          const p = [pRot[0], pRot[1], pRot[2] - s.radius];
          if (p[2] >= P * 0.95) continue;
          const k = P / (P - p[2]);
          minX = Math.min(minX, p[0] * k);
          maxX = Math.max(maxX, p[0] * k);
          minY = Math.min(minY, p[1] * k);
          maxY = Math.max(maxY, p[1] * k);
        }
      }
      const spanX = Math.max(maxX - minX, 1);
      const spanY = Math.max(maxY - minY, 1);
      const fit = Math.min(1, width / spanX, height / spanY) * (s.scale || 1);
      state.fit = fit;
      state.shift = -((minY + maxY) / 2) * fit - room / 2;
      stage.style.perspective = P + "px";
      stage.style.transform = "translate3d(0, " + state.shift + "px, 0) scale(" + fit + ")";

      for (let i = 0; i < s.count; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;
        const base = i * s.step;
        card.style.transform = "rotateY(" + base + "deg) translateZ(" + s.radius + "px)";
      }
    };
    measureRef.current = measure;

    const render = (s) => {
      camera.style.transform = "translate3d(0, 0, " + (-s.radius) + "px) rotateX(" + s.tilt + "deg)";
      ring.style.transform = "rotateY(" + state.angle + "deg)";

      for (let i = 0; i < s.count; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;
        const base = i * s.step;
        const world = wrapAngle(base + state.angle);
        const facing = Math.cos((world * Math.PI) / 180);
        const fade = s.depthFade * Math.pow((1 - facing) / 2, 1.25);
        card.style.setProperty("--cc-depth", fade.toFixed(3));
      }

      const activeIdx = ((Math.round(-state.angle / s.step) % s.count) + s.count) % s.count;
      if (state.activeIdx !== activeIdx) {
        state.activeIdx = activeIdx;
        setActive(activeIdx);
      }
    };

    const frame = (now) => {
      raf = 0;
      const s = settingsRef.current;
      const dt = state.last ? Math.min((now - state.last) / 1000, 0.05) : 1 / 60;
      state.last = now;

      const busy = advance(s, dt, now);
      render(s);

      if ((busy || !state.hover) && visible && !document.hidden) {
        raf = requestAnimationFrame(frame);
      } else {
        state.last = 0;
      }
    };

    const wake = () => {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };
    wakeRef.current = wake;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
      else {
        cancelAnimationFrame(raf);
        raf = 0;
        state.last = 0;
      }
    });
    io.observe(root);

    const ro = new ResizeObserver(() => {
      measure();
      wake();
    });
    ro.observe(root);

    measure();
    wake();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  const handlePointerDown = (e) => {
    if (!draggable || e.button !== 0) return;
    const state = stateRef.current;
    state.press = {
      x: e.clientX,
      angle: state.angle,
      lastX: e.clientX,
      lastTime: performance.now(),
    };
  };

  const handlePointerMove = (e) => {
    const state = stateRef.current;
    if (!state.press) return;
    const delta = e.clientX - state.press.x;
    if (Math.abs(delta) > 4 && !state.drag) {
      state.drag = true;
      state.target = null;
      setDragging(true);
    }
    if (state.drag) {
      const perPixel = 180 / (Math.PI * radius);
      state.angle = state.press.angle + delta * perPixel;
      const now = performance.now();
      const dt = (now - state.press.lastTime) / 1000;
      if (dt > 0.01) {
        state.velocity = ((e.clientX - state.press.lastX) / dt) * perPixel * 0.15;
        state.press.lastX = e.clientX;
        state.press.lastTime = now;
      }
      wakeRef.current();
    }
  };

  const handlePointerUp = () => {
    const state = stateRef.current;
    if (state.press) {
      state.press = null;
      if (state.drag) {
        state.drag = false;
        setDragging(false);
        const s = settingsRef.current;
        state.target = Math.round((state.angle + state.velocity * 0.3) / s.step) * s.step;
      }
      wakeRef.current();
    }
  };

  const focusIndex = useCallback((index) => {
    const state = stateRef.current;
    const s = settingsRef.current;
    let target = -index * s.step;
    target += 360 * Math.round((state.angle - target) / 360);
    state.target = target;
    state.holdUntil = performance.now() + 2500;
    wakeRef.current();
  }, []);

  const current = items[active] || items[0];

  const renderTile = (item, tile, index) => {
    const first = tile.index === 0;
    const last = tile.index === tile.total - 1;
    const r = "var(--cc-radius)";
    const frameRadius = (first ? r : "0") + " " + (last ? r : "0") + " " + (last ? r : "0") + " " + (first ? r : "0");
    const offset = tile.start;
    const size = tile.size;
    const box = { left: -size / 2, top: -cardH / 2, width: size, height: cardH };
    const photoStyle = { left: -offset, top: 0, width: cardW, height: cardH };

    return (
      <div
        key={tile.index}
        className="circular-carousel__tile pointer-events-auto"
        style={{ ...box, transform: tile.move }}
        aria-hidden="true"
        onMouseEnter={() => {
          stateRef.current.hover = true;
          wakeRef.current();
          if (onCardHover) onCardHover(item);
        }}
        onMouseLeave={() => {
          stateRef.current.hover = false;
          wakeRef.current();
          if (onCardHover) onCardHover(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (stateRef.current.drag) return;
          if (onCardClick) {
            onCardClick(item);
          } else if (item.link) {
            window.open(item.link, "_blank", "noopener,noreferrer");
          }
        }}
      >
        <div
          className="circular-carousel__frame relative overflow-hidden pointer-events-auto"
          style={{
            height: cardH,
            borderRadius: frameRadius,
            transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 90px, 0)",
            opacity: inView ? 1 : 0,
            filter: entered ? "none" : (inView ? "blur(0px)" : "blur(16px)"),
            transitionProperty: entered ? "none" : "transform, opacity, filter",
            transitionDuration: entered ? "0s" : "0.7s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: entered ? "0ms" : `${index * 60}ms`,
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={photoStyle}>
            <Image
              src={item.src}
              alt={item.title || item.alt || ""}
              fill
              sizes={cardW + "px"}
              className="object-cover pointer-events-none"
              draggable={false}
            />
          </div>
          <div className="circular-carousel__shade pointer-events-none" />
        </div>
      </div>
    );
  };

  return (
    <div
      ref={rootRef}
      className={("circular-carousel " + className).trim()}
      style={{
        ...style,
        "--cc-radius": cornerRadius + "px",
      }}
      data-ready={ready ? "" : undefined}
      data-dragging={dragging ? "" : undefined}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="circular-carousel__view">
        <div
          ref={stageRef}
          className="circular-carousel__stage"
          style={{
            perspective: perspective + "px",
          }}
        >
          <div ref={cameraRef} className="circular-carousel__camera">
            <div
              ref={ringRef}
              className="circular-carousel__ring"
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="circular-carousel__card cursor-pointer"
                  data-cc-index={index}
                  onClick={() => {
                    if (stateRef.current.drag) return;
                    if (onCardClick) {
                      onCardClick(item);
                    } else if (item.link && (active === index || !focusOnClick)) {
                      window.open(item.link, "_blank", "noopener,noreferrer");
                    } else if (focusOnClick) {
                      focusIndex(index);
                    }
                  }}
                  style={{ width: 0, height: 0 }}
                >
                  {tiles.map((tile) => renderTile(item, tile, index))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {captions && current && (
        <div className="circular-carousel__caption">
          <span className="circular-carousel__title">
            {current.title || current.alt}
            {current.subtitle && <span className="circular-carousel__subtitle">{current.subtitle}</span>}
          </span>
          <span className="circular-carousel__count">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span className="circular-carousel__slash">/</span>
            <span>{String(count).padStart(2, "0")}</span>
          </span>
        </div>
      )}
    </div>
  );
}

