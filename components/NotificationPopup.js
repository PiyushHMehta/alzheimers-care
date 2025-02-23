export default function NotificationPopup({ message, onClose }) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md animate-bounce">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white font-bold">X</button>
      </div>
    );
  }
  