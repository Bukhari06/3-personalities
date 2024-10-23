import React from "react";
import Image from "next/image";


const MyPage = () => {
    return (
        <div className="hero h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 relative">
           
            <Image
                src="/bro.bmp" // Replace with your image path
                alt=""
                width={500}  // Set width to 300 pixels
                height={400} // Set height to 300 pixels
                className="object-cover"
            />

<div className="text-center text-red-200 bg-red-900 bg-opacity-20 p-9 text-3xl m-10 
            box-border h-100 w-100 p-4 border-4 border-dotted border-pink-300 rounded-lg">
                <h1 className="text-4xl font-bold ">
                ​☆ I ℓｏνε 𝐲𝑜ᵘ 𝓑𝓻𝕠𝓉𝓱𝔢ⓡ ☆ </h1>
                <p className="mt-4 text-lg text-ellipsis  ">𝕄𝕪 𝕓𝕚𝕘 𝕓𝕣𝕠𝕥𝕙𝕖𝕣 𝕚𝕤 𝕞𝕪 𝕥𝕣𝕦𝕖 𝕙𝕖𝕣𝕠.</p>
                <br />
                <div className="text-left">
                 <p>Beyond a father’s love, a brother’s affection is the purest</p>
                <p> filled with kindness and unwavering loyalty.</p>
                <p>Dear brother, your support has been my anchor through every moment.</p>
                <p> You are not just my sibling; you are my closest friend.</p>
                <p> I pray that Allah showers you with His blessings,</p>
                <p> granting you every desire and dream you hold in your heart. </p>
                <p>
                  <br />
                رَبِّ ٱغۡفِرۡ لِي وَلِأَخِي وَأَدۡخِلۡنَا فِي رَحۡمَتِكَۖ وَأَنتَ أَرۡحَمُ ٱلرَّـٰحِمِينَ.</p>
                <br />
                <p>Allah Taala , fₒᵣgᵢᵥₑ ₘₑ ₐₙd ₘy bᵣₒₜₕₑᵣ ₐₙd ₐdₘᵢₜ ᵤₛ ᵢₙₜₒ Yₒᵤᵣ ₘₑᵣcy,</p> <p>  fₒᵣ Yₒᵤ ₐᵣₑ ₜₕₑ ₘₒₛₜ ₘₑᵣcᵢfᵤₗ ₒf ₜₕₑ ₘₑᵣcᵢfᵤₗ..</p>


                </div>
     
      </div>
    </div>
    
  );
};

export default MyPage;





