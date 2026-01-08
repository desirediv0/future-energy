"use client";

import Image from "next/image";
import React from "react";

const WhatsAppButton = () => {
    const phoneNumber = "919871228880"; // Format: CountryCodePhoneNumber (no + or -)
    const message = "Hello! I would like to know more about Future Energy products.";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            <Image src="/whats.png" alt="WhatsApp" width={24} height={24} />
            <span className="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300">
                Chat with us
            </span>
        </button>
    );
};

export default WhatsAppButton;
