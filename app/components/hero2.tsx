import React from "react";
import Image from "next/image";

const MyPage = () => {
  return (
    <div className="hero h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 relative">
      {/* Image */}
      <Image
        src="/bro.bmp" // Replace with your image path
        alt="Brother Image"
        width={500}  // Set width to 500 pixels
        height={400} // Set height to 400 pixels
        className="object-cover rounded-lg md:w-96 md:h-80 w-72 h-56"  // Responsive width & height
      />
      {/* Text Content */}
      <div className="text-center text-red-200 bg-red-900 bg-opacity-20 p-6 md:p-9 text-xl md:text-3xl m-6 md:m-10 
        box-border h-auto w-auto md:w-4/5 p-4 border-4 border-dotted border-pink-300 rounded-lg">
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-bold">
          ​☆ I ℓｏνε 𝐲𝑜ᵤ 𝓑𝓻𝓸𝓉𝓱𝓮Ⓡ ☆
        </h1>
        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-lg text-ellipsis">
          𝕄𝕪 𝕓𝕚𝕘 𝕓𝕣𝕠𝕥𝕙𝕖𝕣 𝕚𝕤 𝕞𝕪 𝕥𝕣𝕦𝕖 𝕙𝕖𝕣𝕠.
        </p>
        <br />
        {/* Paragraph Text */}
        <div className="text-left space-y-2 text-sm md:text-lg">
          <p>Beyond a father’s love, a brother’s affection is the purest</p>
          <p>Filled with kindness and unwavering loyalty.</p>
          <p>Dear brother, your support has been my anchor through every moment.</p>
          <p>You are not just my sibling; you are my closest friend.</p>
          <p>I pray that Allah showers you with His blessings,</p>
          <p>Granting you every desire and dream you hold in your heart.</p>

          <br />
          {/* Arabic Text */}
          <p className="text-base md:text-lg text-black">
            رَبِّ ٱغۡفِرۡ لِي وَلِأَخِي وَأَدۡخِلۡنَا فِي رَحۡمَتِكَۖ وَأَنتَ أَرۡحَمُ ٱلَّـٰحِمِينَ.
          </p>
          <br />
          {/* Additional Text */}
          <p className="text-xs md:text-sm">
            Allah Taala , fₒᵣgᵢᵥₑ ₘₑ ₐₙd ₘy bᵣₒₜₕₑᵣ ₐₙd ₐdₘᵢₜ ᵤₛ ᵢₙₜₒ Yₒᵤᵣ ₘₑᵣcy,
          </p>
          <p className="text-xs md:text-sm">
            fₒᵣ Yₒᵤ ₐᵣₑ ₜₕₑ ₘₒₛₜ ₘₑᵣcᵢfᵤₗ ₒf ₜₕₑ ₘₑᵣcᵢfᵤₗ..
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
