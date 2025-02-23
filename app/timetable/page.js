import Timetable from "@/components/Timetable";

export default function TimetablePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex flex-col items-center p-8">
        <Timetable />
      </div>
    </div>
  );
}
