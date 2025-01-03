import "./globals.css"; // Importa el CSS desde la carpeta `src/app/`
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="mt-*">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
