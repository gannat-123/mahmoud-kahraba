import React from 'react'
import Image from 'next/image'
const About = () => {
return (
    <div id='about' className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className='text-center mb-2 text-lg font-black'>مقدمة</h4>
        <h2 className='text-center text-5xl font-black'> عني </h2>
        <div className="flex flex-col items-center pt-20">
            {/* <Image 
                src="/img.jpg" 
                alt="Header Image"
                width={180}
                height={170}
                className="rounded-full w-40 h-40 object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/50  "/> */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
                <Image src="/img.jpg" alt="صورة الفني" width={150} height={150} className="rounded-full" />
                <p className="text-gray-700 max-w-md leading-relaxed">
                    أنا فني كهرباء متخصص في تنفيذ وصيانة الأعمال الكهربائية للمنازل والمحلات والمباني. عندي خبرة أكتر من 12 سنين في المجال، واشتغلت في مشاريع كبيرة وصغيرة، دايمًا حريص على الدقة والسلامة في الشغل.

                    بنفذ كل أعمال الكهرباء من تأسيس، تركيب مفاتيح وبرايز، تركيب لوحات كهربائية، وتشطيب كامل. شغلي دايمًا بيكون حسب المواصفات والمعايير، وهدفي رضا العميل وجودة الشغل.

                    لو بتدور على كهربائي شاطر، ملتزم، وبيفهم شغله كويس — يبقى أنا الشخص المناسب.
                    مش بس شغلي في الكهرباء، كمان بقدّم خدمات تشطيب كاملة للشقق والفلل من البداية للنهاية. عندي خبرة في إدارة وتنفيذ أعمال التشطيب الداخلية، سواء كانت في الشقق السكنية أو الفلل الخاصة.

                    بشتغل على:
                    - تأسيس كامل للكهرباء
                    - تركيب الإضاءة الحديثة والسبوتات
                    - تنفيذ الجبس بورد بكل أنواعه (سقف معلق، ديكورات، إضاءة مخفية)
                    - تركيب مفاتيح وبرايز
                    - تنسيق عام لشغل الدهانات والسباكة والتشطيب النهائي بالتعاون مع باقي التخصصات

                    أنا دايمًا حريص إن العميل يستلم المكان جاهز على أعلى مستوى، من غير تعب أو قلق. الجودة، الالتزام، والنظافة في الشغل هما أولوياتي.
                </p>
            </div>
        </div>
    </div>
)
}

export default About
