import "./globals.css"
import Link from "next/link";

export const metadata = {
  title: "Alzheimer's Support",
  description: "Support and resources for Alzheimer's patients and caregivers.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container flex justify-between">
            <Link href="/" className="text-lg font-bold">Alzheimer's Care</Link>
            <div>
              <Link href="/patients" className="mx-2 hover:underline">Patients</Link>
              <Link href="/caregivers" className="mx-2 hover:underline">Caregivers</Link>
              <Link href="/resources" className="mx-2 hover:underline">Resources</Link>
              <Link href="/contact" className="mx-2 hover:underline">Contact</Link>
              <Link href="/about" className="mx-2 hover:underline">About</Link>
            </div>
          </div>
        </nav>
        <main className="container py-6">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-6">
          &copy; 2025 Alzheimer's Support
        </footer>
      </body>
    </html>
  );
}
