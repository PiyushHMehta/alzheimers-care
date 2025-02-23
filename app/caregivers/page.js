export default function Caregivers() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-blue-700">Support for Caregivers</h1>
        <p className="text-gray-600 mt-4">Caring for someone with Alzheimer's can be overwhelming. Here are some tips to help.</p>
  
        <section className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card">
            <h2 className="text-xl font-semibold text-blue-700">Patience & Understanding</h2>
            <p className="text-gray-600 mt-2">Speak calmly, use simple words, and provide reassurance.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold text-blue-700">Join a Support Group</h2>
            <p className="text-gray-600 mt-2">Connect with other caregivers for advice and emotional support.</p>
          </div>
        </section>
      </div>
    );
  }
  