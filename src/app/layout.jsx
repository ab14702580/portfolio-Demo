import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata = {
  title: "Abdullah Fahad | MERN Stack Developer Portfolio",
  description: "Portfolio of Abdullah Fahad - MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full font-sans antialiased text-slate-800 bg-[#FAFDFC] dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
