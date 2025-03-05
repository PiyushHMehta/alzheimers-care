'use client'

import NotificationPopup from "../components/NotificationPopup";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex flex-col items-center justify-center p-8 gap-10">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to Alzheimer Support</h1>
        <p className="mt-4 text-gray-600 text-lg text-center max-w-3xl">
          A platform designed to assist Alzheimer's patients and their caregivers.
          Stay organized, find helpful resources, and get notified about important tasks.
        </p>

        {/* Introduction Section */}
        <div className="mt-8 max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Why Use This Platform?</h2>
          <p className="mt-3 text-gray-600">
            Alzheimer's can make daily life challenging, but with proper planning and assistance,
            patients and caregivers can manage routines effectively. This platform provides:
          </p>
          <ul className="mt-4 text-gray-700 text-lg">
            <li>✔️ A simple <b>daily planner</b> for managing tasks.</li>
            <li>✔️ <b>Timely notifications</b> to remind patients of important activities.</li>
            <li>✔️ A <b>resource hub</b> with articles, tips, and support materials.</li>
            <li>✔️ A <b>contact system</b> for staying in touch with caregivers or loved ones.</li>
          </ul>
        </div>
/*
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800">The Hardest in the Scene Chatbot</h2>
          <p className="text-gray-600 mt-2">
            Meet the toughest AI assistant in Alzheimer care. Fast, smart, and built to help—no nonsense.
            Whether you need guidance or quick info, it's got you covered.
          </p>
          <a
            href="https://amcb1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 mt-4 rounded hover:bg-blue-700 transition shadow-lg"
          >
            Open Chatbot Now
          </a>
        </div>
  */

        {/* Features Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg max-w-xs">
            <h3 className="text-xl font-semibold text-blue-700">📅 Daily Timetable</h3>
            <p className="mt-2 text-gray-600">Plan daily activities and get notified at the right time.</p>
            <Link href="/timetable" className="text-blue-600 font-bold mt-3 inline-block">Try It →</Link>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg max-w-xs">
            <h3 className="text-xl font-semibold text-blue-700">📚 Resources</h3>
            <p className="mt-2 text-gray-600">Access helpful guides, articles, and care tips.</p>
            <Link href="/resources" className="text-blue-600 font-bold mt-3 inline-block">Explore →</Link>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg max-w-xs">
            <h3 className="text-xl font-semibold text-blue-700">📞 Contact Support</h3>
            <p className="mt-2 text-gray-600">Need assistance? Reach out to caregivers and experts.</p>
            <Link href="/contact" className="text-blue-600 font-bold mt-3 inline-block">Contact Us →</Link>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Start Organizing Today</h2>
          <p className="text-gray-600 mt-2">Join our platform and make daily life easier for Alzheimer's patients and caregivers.</p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/timetable" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700">
              Plan Your Day
            </Link>
            <Link href="/resources" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
              View Resources
            </Link>
          </div>
        </div>
      </div>

      {showPopup && <NotificationPopup message="Reminder: Stay hydrated and take your medicine!" onClose={() => setShowPopup(false)} />}
    </div>
  );
}
