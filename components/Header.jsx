import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-8 w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center pt-20 ">
        <Image 
          src="/img.jpg" 
          alt="Header Image"
          width={150}
          height={160}
          className="rounded-full w-32"
        />
      </div>
      <h1 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-black">
        محمود محمد
      </h1>
      <h1 className='text-3xl sm:text-3xl lg:text-[66px] font-black'>⚡ مهندس كهرباء ⚡</h1>
      <p className='max-w-2xl mx-auto font-black'> كهربائي محترف خبرة اكثر من 12 سنة - من القاهرة </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
          📞 تواصل معى
        </a>
        <a href="#work" className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          ⚡  شغلى
        </a>
      </div>
    </div>
  );
}

export default Header
