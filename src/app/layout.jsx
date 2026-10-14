import "./globals.css";

export const metadata = {
  title: "Abdullah Fahad | MERN Stack Developer Portfolio",
  description: "Portfolio of Abdullah Fahad - MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full font-sans antialiased text-slate-800 bg-[#FAFDFC]">
        {children}
      </body>
    </html>
  );
}
