import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        <main className="bg-black">{children}</main>
      </body>
    </html>
  );
}
