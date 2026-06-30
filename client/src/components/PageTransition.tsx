import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    // Start loading animation
    setIsLoading(true);
    
    // End loading animation after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* Loading Bar */}
      <div
        className={`fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 transition-all duration-500 ease-out z-[9999] ${
          isLoading ? "w-full" : "w-0"
        }`}
        style={{
          boxShadow: isLoading ? "0 0 10px rgba(6, 102, 204, 0.6)" : "none",
        }}
      />

      {/* Fade Overlay */}
      <div
        className={`fixed inset-0 bg-white pointer-events-none z-[9998] transition-opacity duration-300 ${
          isLoading ? "opacity-5" : "opacity-0"
        }`}
      />

      {/* Animated Dots */}
      {isLoading && (
        <div className="fixed bottom-8 right-8 flex gap-2 z-[9999]">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
        </div>
      )}
    </>
  );
}
