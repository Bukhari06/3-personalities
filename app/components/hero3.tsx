import React from "react";
import Image from "next/image";

const MyPage = () => {
  return (
    <div className="hero h-screen flex items-center justify-center bg-yellow-500 relative">
      {/* Image */}
      <Image
        src="/mother.bmp" // Replace with your image path
        alt="Mother's Love"
        width={300}  // Set width to 300 pixels
        height={300} // Set height to 300 pixels
        className="object-cover rounded-full md:w-72 md:h-72 w-48 h-48"  // Responsive width & height
      />
      {/* Content Box */}
      <div className="text-center text-white bg-blue-900 bg-opacity-20 p-6 md:p-9 text-xl md:text-3xl m-6 md:m-10 
        box-border h-auto w-auto md:w-4/5 p-4 border-4 border-black rounded-lg">
        
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          𝕀 𝕃𝕠𝕧𝕖 𝕄𝕪 𝔸𝕞𝕞𝕒𝕟
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm md:text-xl">𝓢𝓸𝓶𝓮 𝓫𝓮𝓪𝓾𝓽𝓲𝓯𝓾𝓁 𝓵𝓲𝓷𝓮𝓼 𝓯𝓸𝓻 𝓜𝓸𝓽𝓱𝓮𝓻</p>

        <p className="mt-4 text-sm md:text-lg">A mother’s love is a gentle embrace,</p>
        <p className="text-sm md:text-lg">A sanctuary where hearts find grace.</p>
        <p className="text-sm md:text-lg">In her eyes, the stars softly gleam,</p>
        <p className="text-sm md:text-lg">Whispering hopes and the sweetest dreams.</p>
        <br />
        <p className="text-sm md:text-lg">Her laughter dances like a soft refrain,</p>
        <p className="text-sm md:text-lg">A melody that eases all our pain.</p>
        <p className="text-sm md:text-lg">With every sacrifice, she weaves a thread,</p>
        <p className="text-sm md:text-lg">Binding our lives with the love she spreads.</p>
        <br />
        <p className="text-sm md:text-lg">Through storms and trials, her strength shines bright,</p>
        <p className="text-sm md:text-lg">A guiding beacon in the darkest night.</p>
        <p className="text-sm md:text-lg">In every heartbeat, her essence flows,</p>
        <p className="text-sm md:text-lg">A timeless love that eternally grows.</p>
        {/* Arabic Text */}
        <h1 className="text-black mt-4 text-lg md:text-xl">
          رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا
        </h1>
        {/* Lord's Prayer */}
        <h1 className="text-white mt-4 text-sm md:text-lg">
          <p>"ᴹʸ ᴸᵒʳᵈ,</p>
          ʰᵃᵛᵉ ᵐᵉʳᶜʸ ᵘᵖᵒⁿ ᵗʰᵉᵐ ᵃˢ ᵗʰᵉʸ ᵇʳᵒᵘᵍʰᵗ ᵐᵉ ᵘᵖ [ʷʰᵉⁿ ᴵ ʷᵃˢ] ˢᵐᵃˡˡ. <br />
          <p>&quot; ᴹᵃʸ ᴬˡˡᵃʰ ᵐᵃᵏᵉ ᵘˢ ˡᵒᵒᵏ ᵃᶠᵗᵉʳ ᵒᵘʳ ᵖᵃʳᵉⁿᵗˢ ᵃⁿᵈ ᵗʳᵉᵃᵗ ᵗʰᵉᵐ ʷⁱᵗʰ ᵏⁱⁿᵈⁿᵉˢˢ</p>
        </h1>
      </div>
    </div>
  );
};

export default MyPage;
