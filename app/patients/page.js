export default function Patients() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-blue-700">Resources for Alzheimer's Patients</h1>
        <p className="text-gray-600 mt-4">Living with Alzheimer's can be challenging. Here are some tips to help manage daily life.</p>
  
        <section className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card">
            <h2 className="text-xl font-semibold text-blue-700">Memory Aids</h2>
            <p className="text-gray-600 mt-2">Use notes, alarms, and reminder apps to help with memory loss.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold text-blue-700">Healthy Lifestyle</h2>
            <p className="text-gray-600 mt-2">Regular exercise, a balanced diet, and mental activities can slow progression.</p>
          </div>
        </section>
      </div>
    );
  }
  