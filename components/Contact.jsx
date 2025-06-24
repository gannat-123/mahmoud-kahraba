import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="flex flex-col items-center mt-8 w-11/12 max-w-3xl mx-auto h-screen justify-center gap-4">
                <h1 className='text-3xl sm:text-3xl lg:text-[66px] font-black'>📞 تواصل معى</h1>
                {/* Contact Me Link */}
                <a
                    href="tel:+201060945667"
                    className="mt-2 mb-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 font-bold"
                >
                    اتصل بي : +20 106 094 5667
                </a>
                <p className='max-w-2xl mx-auto font-black'> يمكنك التواصل معى من خلال وسائل التواصل الاجتماعى او من خلال البريد الالكترونى </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a href="mailto:eng.mahmoud.mohamed0001@gmail.com" className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                        📧 البريد الالكترونى
                    </a>
                    <a
                        href="https://wa.me/201060945667"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.19-.44-2.27-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.23.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                        </svg>
                        واتساب: +20 123 456 7890
                    </a>
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/share/19X5BPbznb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition duration-300"
                    >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/>
                        </svg>
                        فيسبوك
                    </a>
                    {/* Telegram */}
                    <a
                        href="https://t.me/fakeprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-500 transition duration-300"
                    >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.707 7.293l-2.829 10.607c-.214.803-.633 1.003-1.285.625l-3.547-2.617-1.711 1.646c-.189.189-.348.348-.713.348l.255-3.609 6.584-5.953c.287-.255-.063-.398-.447-.143l-8.137 5.117-3.5-1.094c-.763-.237-.776-.763.159-1.094l13.653-5.263c.635-.237 1.192.143.99 1.093z"/>
                        </svg>
                        تليجرام
                    </a>
                    {/* TikTok */}
                    <a
                        href="https://www.tiktok.com/@mahmoodabumohamme?_t=ZS-8xTqxbyHknY&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition duration-300"
                    >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.75 0h3.375a.375.375 0 0 1 .375.375v3.375a.375.375 0 0 0 .375.375 5.25 5.25 0 0 0 5.25 5.25.375.375 0 0 1 .375.375v3.375a.375.375 0 0 1-.375.375A8.625 8.625 0 0 1 13.5 5.25v8.625a5.25 5.25 0 1 1-5.25-5.25.375.375 0 0 1 .375.375v3.375a.375.375 0 0 0 .375.375 1.5 1.5 0 1 0 1.5 1.5V0z"/>
                        </svg>
                        تيك توك
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
