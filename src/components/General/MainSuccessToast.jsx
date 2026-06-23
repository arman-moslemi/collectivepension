import { useEffect, useState } from "react";

const MainSuccessToast = ({ message, show, onClose, duration = 3000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (show) {
      setProgress(100);
      const interval = 10; 
      const step = 100 / (duration / interval);
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            onClose();
            return 0;
          }
          return prev - step;
        });
      }, interval);
      return () => clearInterval(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "20px 2px 2px 2px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        zIndex: 9999,
        fontWeight: "bold",
        minWidth: "300px",
        textAlign: "center",
        fontFamily: "IRANYekan, sans-serif",
        userSelect: "none",
      }}
    >
      <div className="mx-[20px] mb-[20px]">{message}</div>
      <div
        style={{
          height: "3px",
          backgroundColor: "rgba(255,255,255,0.5)",
          borderRadius: "2px",
          marginTop: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "white",
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  );
};

export default MainSuccessToast;
