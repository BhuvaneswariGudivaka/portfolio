import React, { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        return old + 2; // speed of loading
      });
    }, 50); // interval speed
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="text-4xl font-bold mb-4">
        <span className="text-cyan-400">&lt;/&gt;</span> Bhuvaneswari
      </div>
      <div className="w-64 bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="bg-cyan-400 h-3 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-gray-300">Loading... {progress}%</p>
    </div>
  );
}
