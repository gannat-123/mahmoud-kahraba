import React from 'react'
import Image from 'next/image'

const Work = () => {
return (
    <div  id='work' className="py-8 bg-white">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">شغلى</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-gray-50">
                <Image src="/img1.jpeg" alt="صورة الفني" width={400} height={300} className="object-cover w-full h-64" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-gray-50">
                <Image src="/img6.jpeg" alt="صورة الفني" width={400} height={300} className="object-cover w-full h-64" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-gray-50">
                <Image src="/img3.jpeg" alt="صورة الفني" width={400} height={300} className="object-cover w-full h-64" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-gray-50">
                <Image src="/img4.jpeg" alt="صورة الفني" width={400} height={300} className="object-cover w-full h-64" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-gray-50">
                <Image src="/img5.jpeg" alt="صورة الفني" width={400} height={300} className="object-cover w-full h-64" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-gray-50">
                <Image src="/img7.jpeg" alt="صورة الفني" width={400} height={300} className="object-cover w-full h-64" />
            </div>
        </div>
    </div>
)
}

export default Work
