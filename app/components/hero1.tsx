import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Image on the left side */}
      <div className="w-1/2 flex justify-center">
        <Image
          src="/pic.jpg" // Replace with your image path
          alt="Hero Image"
          width={300}  
          height={300}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content Box on the right side */}
      <div className="w-1/2 text-center text-yellow-200 bg-black bg-opacity-50 p-6 sm:p-9 text-lg sm:text-xl box-border border-4 border-dashed border-slate rounded-lg">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-200 mb-4">
          امام احمد رضا خان فاضلِ بَریلویؒ
        </h1>

        {/* Description */}
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
          <p>مُصطفیٰ جانِ رَحمَت پہ لاکھوں سلام</p>
          <p>شمعِ بَزمِ ہِدایَت پہ لاکھوں سلام</p>
          <br />
          <p>مِہرِ چَرخِ نَبُوَّت پہ رَوشن دُرُود</p>
          <p>گُلِ باغِ رِسالَت پہ لاکھوں سلام</p>
          <br />
          <p>شہرِ یارِ اِرَم تاجدارِ حَرَم</p>
          <p>نَو بہارِ شفاعَت پہ لاکھوں سلام</p>
          <br />
          <p>شبِ اَسریٰ کے دُولھا پہ دائم دُرُود</p>
          <p>نَوشہءِ بَزمِ جَنّت پہ لاکھوں سلام</p>
          <br />
          <p>عَرش کی زیب و زِینَت پہ عَرشی دُرُود</p>
          <p>فَرش کی طِیَّب و نُزہَت پہ لاکھوں سلام</p>
          <br />
          <p>سلام نُورِ عینِ لَطافَت پہ اَلطَف دُرُود</p>
          <p>زیب و زَینِ نَظافَت پہ لاکھوں سلام</p>
          <br />
          <p>ایک میرا ہی رَحمَت میں دعویٰ نہیں</p>
          <p>شاہ کی ساری اُمّت پہ لاکھوں سلام</p>
          <br />
          <p>کاش مَحشَر میں جَب اُن کی آمَد ہو</p>
          <p>اور بھیجیں سب اُن کی شَوکَت پہ لاکھوں سلام</p>
          <br />
          <p>مُجھ سے خِدمت کے قُدسی کہیں ہاں رضؔا</p>
          <p>مُصطفیٰ جانِ رَحمَت پہ لاکھوں سلام</p>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
