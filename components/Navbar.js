export default function Navbar() {
    return (
      <nav className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Alzheimer's Support</h1>
          <div>
            <a href="/" className="px-3 hover:text-gray-300">Home</a>
            <a href="/resources" className="px-3 hover:text-gray-300">Resources</a>
            <a href="/contact" className="px-3 hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  