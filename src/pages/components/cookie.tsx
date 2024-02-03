import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    console.log("Accepting cookies...");
    setShowBanner(false);
  };

  return (
    showBanner && (
      /**
       * Renders a fixed banner at the bottom of the page to display the cookie consent message.
       */
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            Ce site utilise des cookies pour améliorer l expérience utilisateur.
          </p>
          <button
            onClick={() => handleAccept()}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Accepter
          </button>
        </div>
      </div>
    )
  );
}
