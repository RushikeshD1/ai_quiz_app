export default function ProgressBar({ current, total }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-4">

      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const isActive = i < current;

          return (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-300 border border-gray-700 ${
                isActive ? "bg-green-500 border-0" : "bg-zinc-800"
              }`}
            />
          );
        })}
      </div>

      {/* <p className="text-xs sm:text-sm mt-2 text-center text-gray-400">
        {current} / {total}
      </p> */}
    </div>
  );
}