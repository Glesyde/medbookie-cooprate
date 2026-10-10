"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Activity, FileText, Pill, Calendar, Users, Stethoscope } from "lucide-react";

export default function PageHero({ 
  title = "Your life's work, powered by our life's work", 
  description = "A unique and powerful software suite to transform the way you deliver care. Designed for health organizations of all sizes, built by a company that values your privacy and data security."
}) {
  
  // Featured Apps mimicking the Zoho grid layout
  const featuredApps = [
    {
      title: "Clinical Care",
      desc: "Comprehensive EMR platform for patient-facing teams.",
      icon: <Activity size={24} className="text-blue-600" />
    },
    {
      title: "Diagnostics",
      desc: "Seamless LIS and imaging workflows for labs.",
      icon: <FileText size={24} className="text-purple-600" />
    },
    {
      title: "Inventory",
      desc: "Powerful pharmacy and resource management.",
      icon: <Pill size={24} className="text-orange-500" />
    },
    {
      title: "Appointments",
      desc: "Smart scheduling to deliver great patient support.",
      icon: <Calendar size={24} className="text-green-600" />
    },
    {
      title: "HR & Workforce",
      desc: "Digital staff management for growing organizations.",
      icon: <Users size={24} className="text-teal-600" />
    },
    {
      title: "Telehealth",
      desc: "Create, schedule, and track virtual visits seamlessly.",
      icon: <Stethoscope size={24} className="text-red-500" />
    }
  ];

  return (
    <section className="bg-slate-50 pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 md:px-12 lg:px-24 w-full min-h-[80vh] flex items-center border-b border-gray-200">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column: Typography and Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 max-w-2xl"
        >
          <h1 className="text-slate-900 text-5xl lg:text-[64px] font-normal leading-[1.1] tracking-tight">
            {title}
          </h1>
          
          {/* Small Red Accent Line */}
          <motion.div 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-12 h-[2px] bg-red-600 my-8 origin-left" 
          />
          
          <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-10 font-light pr-4">
            {description}
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3.5 px-8 rounded flex items-center gap-2 transition-colors text-sm uppercase tracking-wide shadow-sm">
            ACCESS YOUR APPS <ChevronRight size={18} />
          </button>
        </motion.div>

        {/* Right Column: Featured Apps Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 lg:p-12 relative"
        >
          <div className="text-center mb-10">
            <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-widest">FEATURED APPS</h3>
            <div className="w-6 h-[2px] bg-red-600 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {featuredApps.map((app, index) => (
              <div key={index} className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  {app.icon}
                </div>
                <div>
                  <h4 className="text-xl font-normal text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {app.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center pt-8 border-t border-gray-50">
            <a href="#all-products" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wide">
              EXPLORE ALL PRODUCTS <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import DonationCard from "../Donation/DonationCard";

// export default function PageHero({ title, description }) {
//   const pathname = usePathname();

//   // Define the exact routes where the DonationCard should be visible
//   const donationPages = [
//     "/sponsor-a-patient",
//     "/gold-star-stories",
//     "/the-gold-star-initiative"
//   ];

//   // Check if the current URL matches one of the allowed pages
//   const showDonationCard = donationPages.includes(pathname);

//   return (
//     <section className="relative bg-primary pt-40 pb-32 px-6 md:px-12 lg:px-24 xl:px-32 w-full min-h-[60vh] flex flex-col justify-center">
//       <div className="max-w-[1420px] mx-auto w-full py-10 flex lg:flex-row flex-col items-start lg:items-center justify-between gap-8 lg:gap-16">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-4xl"
//         >
//           {/* Small Gold Accent Line */}
//           <motion.div 
//             initial={{ scaleX: 0 }} 
//             animate={{ scaleX: 1 }} 
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
//           />
          
//           {/* Dynamic Title */}
//           <h1 
//             className="text-white text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-wide mb-6 "
//             style={{ fontFamily: "Georgia, serif" }}
//           >
//             {title}
//           </h1>

//           {/* Dynamic Description */}
//           {description && (
//             <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed ">
//               {description}
//             </p>
//           )}
//         </motion.div>

//         {/* Conditionally render the DonationCard wrapper based on the route */}
//         {showDonationCard && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
//             className="mt-10 lg:mt-0"
//           >
//             <DonationCard />
//           </motion.div>
//         )}
//       </div>

//       {/* Bouncing Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, y: [0, 10, 0] }}
//         transition={{
//           opacity: { delay: 1, duration: 1 },
//           y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
//         }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
//         onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
//       >
//         <span className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 group-hover:text-white/80 transition-colors duration-300">
//           Scroll
//         </span>
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           strokeWidth={1.5} 
//           stroke="currentColor" 
//           className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-white/80 transition-colors duration-300"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//         </svg>
//       </motion.div>
//     </section>
//   );
// }


// // "use client";
// // import React from "react";
// // import { motion } from "framer-motion";
// // import DonationCard from "../Donation/DonationCard";

// // export default function PageHero({ title, description }) {
// //   return (
// //     // Added 'relative' to the section to allow absolute positioning of the arrow
// //     <section className="relative bg-primary pt-40 pb-32 px-6 md:px-12 lg:px-24 xl:px-32 w-full min-h-[60vh] flex flex-col justify-center">
// //       <div className="max-w-[1420px] mx-auto w-full py-10 flex lg:flex-row flex-col items-start lg:items-center justify-between gap-8 lg:gap-16">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //           className="max-w-4xl"
// //         >
// //           {/* Small Gold Accent Line */}
// //           <motion.div 
// //             initial={{ scaleX: 0 }} 
// //             animate={{ scaleX: 1 }} 
// //             transition={{ delay: 0.5, duration: 0.8 }}
// //             className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
// //           />
          
// //           {/* Dynamic Title */}
// //           <h1 
// //             className="text-white text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-wide mb-6 "
// //             style={{ fontFamily: "Georgia, serif" }}
// //           >
// //             {title}
// //           </h1>

// //           {/* Dynamic Description */}
// //           {description && (
// //             <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed ">
// //               {description}
// //             </p>
// //           )}
// //         </motion.div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
// //           className="mt-10"
// //         >
// //           <DonationCard />
// //         </motion.div>
// //       </div>

// //       {/* Bouncing Scroll Indicator */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         // y: [0, 10, 0] creates the continuous bouncing effect
// //         animate={{ opacity: 1, y: [0, 10, 0] }}
// //         transition={{
// //           opacity: { delay: 1, duration: 1 },
// //           y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
// //         }}
// //         // Positioned at the bottom center of the hero section
// //         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
// //         // Smoothly scrolls down 500px when clicked
// //         onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
// //       >
// //         <span className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 group-hover:text-white/80 transition-colors duration-300">
// //           Scroll
// //         </span>
// //         <svg 
// //           xmlns="http://www.w3.org/2000/svg" 
// //           fill="none" 
// //           viewBox="0 0 24 24" 
// //           strokeWidth={1.5} 
// //           stroke="currentColor" 
// //           className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-white/80 transition-colors duration-300"
// //         >
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
// //         </svg>
// //       </motion.div>
// //     </section>
// //   );
// // }
