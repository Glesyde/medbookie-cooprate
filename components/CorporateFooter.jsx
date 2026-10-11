"use client";

import { ChevronRight, Twitter, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

export default function CorporateFooter({ dict, lang }) {
  return (
    <footer className="w-full bg-white font-sans text-slate-700">
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center border-b border-gray-100">
        <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-2">{dict?.ctaTitle}</h2>
        <p className="text-2xl md:text-3xl font-light text-slate-600 mb-8">{dict?.ctaDesc}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded flex items-center gap-2 transition-colors">
          {dict?.ctaButton} <ChevronRight size={18} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-normal text-slate-800 mb-6">{dict?.col1}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href={`/${lang}/apps/mobile`} className="hover:text-slate-900">Mobile Apps</a></li>
              <li><a href={`/${lang}/apps/desktop`} className="hover:text-slate-900">Desktop Apps</a></li>
              <li><a href={`/${lang}/developers`} className="hover:text-slate-900">Developer Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-normal text-slate-800 mb-6">{dict?.col2}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href={`/${lang}/announcements`} className="hover:text-slate-900">Announcements Hub</a></li>
              <li><a href={`/${lang}/training`} className="hover:text-slate-900">Training and Certification</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-normal text-slate-800 mb-6">{dict?.col3}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href={`/${lang}/community`} className="hover:text-slate-900">User Community</a></li>
              <li><a href={`/${lang}/stories`} className="hover:text-slate-900">Customer Stories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-normal text-slate-800 mb-6">{dict?.col4}</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href={`/${lang}/about`} className="hover:text-slate-900">About Us</a></li>
              <li><a href={`/${lang}/story`} className="hover:text-slate-900">Our Story</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-black hover:opacity-70"><Twitter size={24} /></a>
          <a href="#" className="text-blue-600 hover:opacity-70"><Facebook size={24} /></a>
          <a href="#" className="text-red-600 hover:opacity-70"><Youtube size={24} /></a>
          <a href="#" className="text-blue-700 hover:opacity-70"><Linkedin size={24} /></a>
          <a href="#" className="text-pink-600 hover:opacity-70"><Instagram size={24} /></a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] font-light text-slate-600 px-4">
          <a href={`/${lang}/contact`} className="hover:text-slate-900">Contact Us</a> <span className="text-gray-300">|</span>
          <a href={`/${lang}/security`} className="hover:text-slate-900">Security</a> <span className="text-gray-300">|</span>
          <a href={`/${lang}/privacy`} className="hover:text-slate-900">Privacy Policy</a>
        </div>
      </div>

      <div className="bg-[#0b1320] w-full py-8 flex flex-col items-center justify-center">
        <a className="flex items-center font-bold text-xl mb-4" href={`/${lang}`}>
          <span className="text-orange-500 font-bold">M</span>
          <span className="text-orange-500 font-bold">e</span>
          <span className="text-orange-500 font-bold">d</span>
          <span className="text-white font-normal">bookie</span>
        </a>
        <p className="text-gray-400 text-sm font-light px-4 py-2 rounded text-center">
          © {new Date().getFullYear()}, {dict?.copyright}
        </p>
      </div>
    </footer>
  );
}

// "use client";

// import { ChevronRight, Twitter, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

// export default function CorporateFooter({ dict }) {
//   return (
//     <footer className="w-full bg-white font-sans text-slate-700">
//       <div className="flex flex-col items-center justify-center py-16 px-6 text-center border-b border-gray-100">
//         <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-2">{dict.ctaTitle}</h2>
//         <p className="text-2xl md:text-3xl font-light text-slate-600 mb-8">{dict.ctaDesc}</p>
//         <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded flex items-center gap-2 transition-colors">
//           {dict.ctaButton} <ChevronRight size={18} />
//         </button>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
//           <div>
//             <h3 className="text-xl font-normal text-slate-800 mb-6">{dict.col1}</h3>
//             {/* Hardcoded links for brevity, but you can move these arrays to JSON too */}
//             <ul className="space-y-4 text-sm font-light">
//               <li><a href="#" className="hover:text-slate-900">Mobile Apps</a></li>
//               <li><a href="#" className="hover:text-slate-900">Desktop Apps</a></li>
//               <li><a href="#" className="hover:text-slate-900">Developer Center</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-normal text-slate-800 mb-6">{dict.col2}</h3>
//             <ul className="space-y-4 text-sm font-light">
//               <li><a href="#" className="hover:text-slate-900">Announcements Hub</a></li>
//               <li><a href="#" className="hover:text-slate-900">Training and Certification</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-normal text-slate-800 mb-6">{dict.col3}</h3>
//             <ul className="space-y-4 text-sm font-light">
//               <li><a href="#" className="hover:text-slate-900">User Community</a></li>
//               <li><a href="#" className="hover:text-slate-900">Customer Stories</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-normal text-slate-800 mb-6">{dict.col4}</h3>
//             <ul className="space-y-4 text-sm font-light">
//               <li><a href="#" className="hover:text-slate-900">About Us</a></li>
//               <li><a href="#" className="hover:text-slate-900">Our Story</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex justify-center gap-6 mb-8">
//           <a href="#" className="text-black hover:opacity-70"><Twitter size={24} /></a>
//           <a href="#" className="text-blue-600 hover:opacity-70"><Facebook size={24} /></a>
//           <a href="#" className="text-red-600 hover:opacity-70"><Youtube size={24} /></a>
//           <a href="#" className="text-blue-700 hover:opacity-70"><Linkedin size={24} /></a>
//           <a href="#" className="text-pink-600 hover:opacity-70"><Instagram size={24} /></a>
//         </div>

//         <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] font-light text-slate-600 px-4">
//           <a href="#" className="hover:text-slate-900">Contact Us</a> <span className="text-gray-300">|</span>
//           <a href="#" className="hover:text-slate-900">Security</a> <span className="text-gray-300">|</span>
//           <a href="#" className="hover:text-slate-900">Privacy Policy</a>
//         </div>
//       </div>

//       <div className="bg-[#0b1320] w-full py-8 flex flex-col items-center justify-center">
//         <a className="flex items-center font-bold text-xl mb-4" href="/">
//           <span className="text-orange-500 font-bold">M</span>
//           <span className="text-orange-500 font-bold">e</span>
//           <span className="text-orange-500 font-bold">d</span>
//           <span className="text-white font-normal">bookie</span>
//         </a>
//         <p className="text-gray-400 text-sm font-light">
//           © {new Date().getFullYear()}, {dict.copyright}
//         </p>
//       </div>
//     </footer>
//   );
// }