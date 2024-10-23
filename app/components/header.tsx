import React from "react";
import Image from "next/image";




const Header = () => {
      return (
        <header className="bg-black text-cyan-400 p-5 ">
<div className= "container mx-auto flex ">
   
                   <Image src="/logo1.png"
                    alt=""
                    width={100}
                    height={400} 
               />
    <h1 className="text-3xl font-bold">Wₑₗcₒₘₑ ₜₒ ₘy Wₑbₚₐgₑ
    </h1>
    
    </div>
</header>
      );

      };

      export default Header;
