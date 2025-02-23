export default function ContactPage() {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Contact Us</h2>
        <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <label className="block text-textDark font-semibold mb-2">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded mb-4" type="text" />
  
          <label className="block text-textDark font-semibold mb-2">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded mb-4" type="email" />
  
          <label className="block text-textDark font-semibold mb-2">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded mb-4"></textarea>
  
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-indigo-600">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  