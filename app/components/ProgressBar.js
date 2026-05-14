export default function ProgressBar({ current, total }) {
  const percent = (current / total) * 100;

  return (
    <div className="w-100 mb-4">
      <div className="bg-gray-800 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-sm mt-1">
        {current} / {total}
      </p>
    </div>
  );
}