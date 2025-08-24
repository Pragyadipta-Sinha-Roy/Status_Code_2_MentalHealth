import React from "react";

export default function ChatbotCard({ title, subtitle, blurb, url, icon, gradient }) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className="group relative bg-white rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 border border-gray-100 overflow-hidden cursor-pointer backdrop-blur-sm flex flex-col h-full"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        minHeight: "320px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)", // Base soft shadow
      }}
    >
      {/* Hover shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>

      {/* Floating gradient circles */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-20 rounded-full group-hover:animate-spin transition-all duration-1000 pointer-events-none`}
      ></div>
      <div
        className={`absolute -bottom-20 -left-10 w-24 h-24 bg-gradient-to-tr ${gradient} opacity-15 rounded-full group-hover:animate-bounce transition-all duration-700 pointer-events-none`}
      ></div>

      {/* Service Icon */}
      <div
        className={`relative w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-4xl transform group-hover:rotate-180 transition-all duration-500 shadow-lg group-hover:shadow-xl card-icon`}
      >
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-white opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500"></div>
        <div className="absolute -inset-4 rounded-full border-2 border-gray-200 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
        <div className="absolute -inset-6 rounded-full border border-purple-300 opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-700"></div>
        <span className="relative z-10 filter drop-shadow-lg">{icon}</span>
      </div>

      {/* Title with gradient */}
      <h1
        className="text-8xl font-black mb-3 text-center group-hover:scale-102 transition-all duration-300 tracking-tight leading-tight"
        style={{
          background: "linear-gradient(90deg, #D16BA5, #C777B9, #BA83CA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p className="text-sm font-medium text-gray-600 mb-4 text-center group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
        {title === "HarmonyFlow" &&
          "Feeling stressed, anxious, or emotionally overwhelmed? Start your healing journey here."}
        {title === "MindPal" &&
          "Struggling with mental health, depression, anxiety or need someone to talk to? Get support now."}
        {title === "CareConnect" &&
          "Need professional therapy, counseling, or medical appointments? Book your session today."}
        {!["HarmonyFlow", "MindPal", "CareConnect"].includes(title) && subtitle}
      </p>

      {/* Blurb for custom cards */}
      {!["HarmonyFlow", "MindPal", "CareConnect"].includes(title) && (
        <p className="text-gray-600 text-base leading-relaxed mb-6 text-center group-hover:text-gray-700 transition-colors duration-300">
          {blurb}
        </p>
      )}

      {/* CTA Button aligned at bottom */}
      <div className="mt-auto text-center relative z-20 flex justify-center">
        <button className="pill" onClick={handleClick}>
          {title === "HarmonyFlow" && "Start Your Musical Journey"}
          {title === "MindPal" && "Talk to MindPal"}
          {title === "CareConnect" && "Book an Appointment"}
          {!["HarmonyFlow", "MindPal", "CareConnect"].includes(title) &&
            `Open ${title}`}
        </button>
      </div>

      {/* Styles */}
      <style jsx>{`
        .pill {
          border: 0;
          padding: 10px 16px;
          background: linear-gradient(180deg, #e6b6ff, #c08bff);
          color: #201436;
          font-weight: 600;
          border-radius: 999px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: filter 0.2s ease-in-out, transform 0.2s ease-in-out;
          min-width: 200px;
          min-height: 44px;
        }

        .pill:hover {
          filter: brightness(1.05);
          transform: translateY(-2px);
        }

        .pill:active {
          transform: translateY(0);
          filter: brightness(0.98);
        }

        .card-icon {
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
        }

        .group:hover .card-icon {
          filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.4));
          animation: iconRotate 0.7s ease-in-out;
        }

        .group:hover .card-icon > span {
          transform: rotate(360deg) !important;
          transition: transform 0.7s ease-in-out !important;
        }

        @keyframes iconRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Hover Shadow Enhancement */
        .group:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18) !important;
        }
      `}</style>
    </div>
  );
}
