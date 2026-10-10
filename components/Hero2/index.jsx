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
// import Image from "next/image";
// import Link from "next/link";
// import DonationCard from "../Donation/DonationCard";

// const Hero2 = () => {
//   return (
//     <section
//       id="hero"
//       className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between pt-24 "
//     >
//       {/* ================= BACKGROUND IMAGE ================= */}
//       <motion.div className="absolute inset-0 z-0">

//         <Image
//           src="/assets/images/New/hero/IMG-20260821-WA0031.jpg"
//           alt="Medical professionals performing surgery"
//           fill
//           priority
//           quality={100}
//           sizes="100vw"
//           className="object-cover object-[top_100%] md:object-[left_50%] lg:object-[left_50%]"
//           // className="object-cover object-[center_15%] md:object-[center_25%] transition-all duration-700"
//         />

//         {/* <Image
//           src="/assets/images/New/hero/IMG-20260821-WA0031.jpg"
//           alt="Surgery background"
//           fill
//           // Changed to object-[center_15%] to lift the image up and show the human element
//           className="object-cover object-[top_100%] md:object-[left_75%] lg:object-[left_75%]"
//           priority
//         /> */}
//       </motion.div>

//       {/* ================= OVERLAY (Dark Blue/Purple Tint) ================= */}
//       <div className="absolute inset-0 bg-[#161240]/85 bg-[#161240]/30 mix-blend-multiply z-0" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/45 via-[#161240]/70 to-transparent z-0" />

//       {/* ================= MAIN CONTENT (Text + Card) ================= */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-5 flex-grow flex flex-col md:flex-row items-center justify-between gap-12 pt-[4rem] pb-[4rem] md:pt-[6rem] ">
        
//         {/* LEFT COLUMN: Text Content */}
//         <div className="w-full md:w-[55%] flex flex-col justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="space-y-6 w-full"
//           >
//             {/* Small Gold Accent Line */}
//             <motion.div 
//               initial={{ scaleX: 0 }} 
//               animate={{ scaleX: 1 }} 
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
//             />

//             {/* Main Heading (Serif Font) */}
//             <div className="lg:space-y-3">
//               <motion.h1
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 1 }}
//                 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-[1.3] md:leading-[1.5] text-white"
//                 style={{ fontFamily: "Georgia, serif" }} 
//               >
//                 Open heart surgery,<br/>
//               </motion.h1>
              
//               <motion.h1
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 1 }}
//                 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-[1.3] md:leading-[1.5] text-white"
//                 style={{ fontFamily: "Georgia, serif" }} 
//               >
//                 performed in Nigeria,<br/>
//               </motion.h1>
              
//               <motion.h1
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 1 }}
//                 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-[1.3] md:leading-[1.5] text-white"
//                 style={{ fontFamily: "Georgia, serif" }} 
//               >
//                 for people who could<br/>
//               </motion.h1>
              
//               <motion.h1
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 1 }}
//                 className="text-3xl md:text-4xl lg:text-[52px] font-medium leading-[1.3] md:leading-[1.5] text-white"
//                 style={{ fontFamily: "Georgia, serif" }} 
//               >
//                 never have paid for it.
//               </motion.h1>
//             </div>

//             {/* Subtext Paragraph (Changed from motion.p to motion.div to prevent HTML nesting errors) */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 1 }}
//               className="text-sm md:text-base lg:text-[17px] text-gray-200 mt-6 max-w-[620px] leading-relaxed"
//             >
//               <div className="hidden lg:grid space-y-1">
//                 <p className="text-justify">
//                   The Gold Star Cardiac Surgery Initiative funds open heart surgery for 
//                 </p>
//                 <p>
//                   Nigerians — children born with heart defects and adults with acquired 
//                 </p>
//                 <p>
//                   heart disease — whose families cannot meet the cost of care. Surgery 
//                 </p>
//                 <p>
//                   takes place at Gracespring Hospitals in Lagos, performed by a permanent,
//                 </p>
//                 <p>
//                   locally based cardiac team.
//                 </p>
//               </div>

//               <div className="lg:hidden grid">
//                 <p className="max-w-3xl text-white text-base md:text-lg leading-relaxed text-justify w-full">
//                   The Gold Star Cardiac Surgery Initiative funds open heart surgery for Nigerians — children born with heart defects and adults with acquired heart disease — whose families cannot meet the cost of care. Surgery takes place at Gracespring Hospitals in Lagos, performed by a permanent, locally based cardiac team.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Action Buttons */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 1 }}
//               className="flex flex-wrap gap-4 pt-6"
//             >
//               <Link
//                 href="/sponsor-a-patient"
//                 className="bg-[#E3BE50] text-[#161240] font-bold py-3 px-6 text-sm lg:text-[15px] hover:bg-[#d4ae42] transition-colors flex items-center justify-center"
//               >
//                 Sponsor a patient
//               </Link>
//               <Link
//                 href="/the-gold-star-initiative"
//                 className="bg-transparent border border-white text-white font-bold py-3 px-6 text-sm lg:text-[15px] hover:bg-white hover:text-[#161240] transition-colors flex items-center justify-center"
//               >
//                 How the programme works
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* RIGHT COLUMN: Donation Card */}
//         <div className="w-full md:w-[45%] flex justify-center md:justify-end mt-8 md:mt-0 z-20">
//           <div className="w-full max-w-md">
//             <DonationCard />
//           </div>
//         </div>
//       </div>

//       {/* ================= STATS BANNER (Bottom part) ================= */}
//       <div className="relative z-20 w-full bg-primary border-t border-white/10 mt-auto py-10">
//         <div className="px-6 md:px-12 lg:px-24 xl:px-32 mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
//             {/* Stat 1 */}
//             <div className="p-6 lg:p-0 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
//               <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>3</span>
//               <p className="text-white text-xs lg:text-sm leading-snug">open heart operations completed</p>
//               <p className="text-white text-xs lg:text-sm leading-snug">in our first surgical series</p>
//             </div>

//             {/* Stat 2 */}
//             <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
//               <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>100%</span>
//               <p className="text-white text-xs lg:text-sm leading-snug">of those operations funded</p>
//               <p className="text-white text-xs lg:text-sm leading-snug">by charitable sponsors</p>
//             </div>

//             {/* Stat 3 */}
//             <div className="p-6 lg:p-8 border-b md:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
//               <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>₦0</span>
//               <p className="text-white text-xs lg:text-sm leading-snug">asked of the families of</p>
//               <p className="text-white text-xs lg:text-sm leading-snug">sponsored patients</p>
//             </div>

//             {/* Stat 4 */}
//             <div className="p-6 lg:p-8 flex flex-col justify-center">
//               <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>₦15m</span>
//               <p className="text-white text-xs lg:text-sm leading-snug">the full documented cost of</p>
//               <p className="text-white text-xs lg:text-sm leading-snug">sponsoring one patient</p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero2;


// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";

// // const Hero2 = () => {
// //   return (
// //     <section
// //       id="hero"
// //       className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between pt-24 "
// //     >
// //       {/* ================= BACKGROUND IMAGE ================= */}
// //       <motion.div className="absolute inset-0 z-0 ">
// //         <Image
// //           // src="/assets/images/New/hero/1/2.png"
// //           src="/assets/images/New/hero/2.png"
// //           // src="/assets/images/hero/care-03.png" // Replace with actual surgery image path
// //           alt="Surgery background"
// //           fill
// //           className="object-cover object-center"
// //           priority
// //         />
// //       </motion.div>

// //       {/* ================= OVERLAY (Dark Blue/Purple Tint) ================= */}
// //       <div className="absolute inset-0 bg-[#161240]/85 md:bg-[#161240]/70 mix-blend-multiply z-0 " />
// //       <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/95 via-[#161240]/70 to-transparent z-0 " />

// //        {/* ================= CONTENT (Top part) ================= */}
// //        <div className="relative z-10 text-white px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl w-full flex-grow flex flex-col justify-center  pt-[10rem] py-[12rem]">
// //          <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1, ease: "easeOut" }}
// //           className="space-y-6 max-w-2xl"
// //         >
// //           {/* Small Gold Accent Line */}
// //           <motion.div 
// //             initial={{ scaleX: 0 }} 
// //             animate={{ scaleX: 1 }} 
// //             transition={{ delay: 0.5, duration: 0.8 }}
// //             className="w-12 h-[3px] bg-[#E3BE50] mb-6 origin-left" 
// //           />

// //           {/* Main Heading (Serif Font) */}

// //           <div className=" lg:space-y-3">
      
// //             <motion.h1
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.2, duration: 1 }}
// //               className="text-2xl md:text-5xl lg:text-[52px] font-medium leading-[1.5]"
// //               style={{ fontFamily: "Georgia, serif" }} 
// //             >
// //               Open heart surgery,<br/>
// //             </motion.h1>
            
// //             <motion.h1
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.2, duration: 1 }}
// //               className="text-2xl md:text-5xl lg:text-[52px] font-medium leading-[1.5]"
// //               style={{ fontFamily: "Georgia, serif" }} 
// //             >
// //               performed in Nigeria,<br/>
// //             </motion.h1>
            
// //             <motion.h1
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.2, duration: 1 }}
// //               className="text-2xl md:text-5xl lg:text-[52px] font-medium leading-[1.5]"
// //               style={{ fontFamily: "Georgia, serif" }} 
// //             >
// //               for people who could<br/>
// //             </motion.h1>
            
// //             <motion.h1
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.2, duration: 1 }}
// //               className="text-2xl md:text-5xl lg:text-[52px] font-medium leading-[1.5]"
// //               style={{ fontFamily: "Georgia, serif" }} 
// //             >
// //               never have paid for it.
// //             </motion.h1>

// //           </div>

// //           {/* Subtext Paragraph */}
// //           <motion.p 
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.6, duration: 1 }}
// //             className="text-sm md:text-base lg:text-[17px] text-gray-200 mt-6 max-w-[620px] leading-relaxed"
// //           >
// //             <div className="hidden lg:grid ">


// //               <p className="text-justify">
// //                 The Gold Star Cardiac Surgery Initiative funds open heart surgery for 
// //               </p>
              
// //               <p>
// //                 Nigerians — children born with heart defects and adults with acquired 
// //               </p>
              
// //               <p>
// //                 heart disease — whose families cannot meet the cost of care. Surgery 
// //               </p>
              
// //               <p>
// //                 takes place at Gracespring Hospitals in Lagos, performed by a permanent,
// //               </p>

// //               <p>
// //               locally based cardiac team.
// //               </p>



// //             </div>



// //             <div className="lg:hidden grid">

// //               {/* 
// //               <p className=" w-[90%] word-wrap">
// //                 The Gold Star Cardiac Surgery Initiative funds open heart surgery for 
              
// //                 Nigerians — children born with heart defects and adults with acquired 
              
// //                 heart disease — whose families cannot meet the cost of care. Surgery 
             
// //                 takes place at Gracespring Hospitals in Lagos, performed by a permanent,
// //                 locally based cardiac team.
// //               </p> */}

// //               {/* Option 1: Standard Left Aligned (Most readable for web) */}


// //               {/* Option 2: Justified (Straight edges on both the left and right sides) */}
// //               <p className="max-w-3xl text-white text-base md:text-lg leading-relaxed text-justify w-[90%]">
// //                 The Gold Star Cardiac Surgery Initiative funds open heart surgery for Nigerians — children born with heart defects and adults with acquired heart disease — whose families cannot meet the cost of care. Surgery takes place at Gracespring Hospitals in Lagos, performed by a permanent, locally based cardiac team.
// //               </p>



// //             </div>



// //           </motion.p>

// //           {/* Action Buttons */}
// //           <motion.div 
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.8, duration: 1 }}
// //             className="flex flex-wrap gap-4 pt-6"
// //           >
// //             <Link
// //               href="/sponsor-a-patient"
// //               className="bg-[#E3BE50] text-[#161240] font-bold py-3 px-6 text-sm lg:text-[15px] hover:bg-[#d4ae42] transition-colors flex items-center justify-center"
// //             >
// //               Sponsor a patient
// //             </Link>
// //             <Link
// //               href="/the-gold-star-initiative"
// //               className="bg-transparent border border-white text-white font-bold py-3 px-6 text-sm lg:text-[15px] hover:bg-white hover:text-[#161240] transition-colors flex items-center justify-center"
// //             >
// //               How the programme works
// //             </Link>
// //           </motion.div>

// //         </motion.div>
// //       </div>

// //       {/* ================= STATS BANNER (Bottom part) ================= */}
// //       <div className="relative z-20 w-full bg-primary border-t border-white/10 mt-auto  py-10">
// //         <div className="px-6 md:px-12 lg:px-24 xl:px-32 mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
// //             {/* Stat 1 */}
// //             <div className="p-6 lg:p-0 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
// //               <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>3</span>
// //               <p className="text-white text-xs lg:text-sm leading-snug">open heart operations completed</p>
// //               <p className="text-white text-xs lg:text-sm leading-snug">in our first surgical series</p>
// //             </div>

// //             {/* Stat 2 */}
// //             <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
// //               <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>100%</span>
// //               <p className="text-white text-xs lg:text-sm leading-snug">of those operations funded</p>
// //               <p className="text-white text-xs lg:text-sm leading-snug">by charitable sponsors</p>
// //             </div>

// //             {/* Stat 3 */}
// //             <div className="p-6 lg:p-8 border-b md:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
// //               <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>₦0</span>
// //               <p className="text-white text-xs lg:text-sm leading-snug">asked of the families of</p>
// //               <p className="text-white text-xs lg:text-sm leading-snug">sponsored patients</p>
// //             </div>

// //             {/* Stat 4 */}
// //             <div className="p-6 lg:p-8  flex flex-col justify-center">
// //               <span className="text-[#E3BE50] text-5xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: "Georgia, serif" }}>₦15m</span>
// //               <p className="text-white text-xs lg:text-sm leading-snug">the full documented cost of</p>
// //               <p className="text-white text-xs lg:text-sm leading-snug">sponsoring one patient</p>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero2;




// // // "use client";

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import Image from "next/image";

// // // const Hero2 = () => {
// // //   return (
// // //     <section
// // //       id="hero"
// // //       className="relative w-full h-screen overflow-hidden flex items-center justify-start pt-20"
// // //     >
// // //       {/* ================= BACKGROUND IMAGE ================= */}
// // //       <motion.div className="absolute inset-0">
// // //         <Image
// // //           src="/assets/images/hero/care-03.png" // Replace with actual surgery image path
// // //           alt="Surgery background"
// // //           fill
// // //           className="object-cover object-center"
// // //           priority
// // //         />
// // //       </motion.div>

// // //       {/* ================= OVERLAY (Dark Blue/Purple Tint) ================= */}
// // //       <div className="absolute inset-0 bg-[#161240]/85 md:bg-[#161240]/75 mix-blend-multiply" />
// // //       <div className="absolute inset-0 bg-gradient-to-r from-[#161240]/90 to-transparent" />

// // //        {/* ================= CONTENT ================= */}
// // //        <div className="relative z-10 text-white px-6 md:px-16 lg:px-24 xl:px-32 max-w-7xl w-full">
// // //          <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 1, ease: "easeOut" }}
// // //           className="space-y-6 max-w-2xl"
// // //         >
// // //           {/* Small Gold Accent Line */}
// // //           <motion.div 
// // //             initial={{ scaleX: 0 }} 
// // //             animate={{ scaleX: 1 }} 
// // //             transition={{ delay: 0.5, duration: 0.8 }}
// // //             className="w-12 h-1 bg-[#E3BE50] mb-8 origin-left" 
// // //           />

// // //           {/* Main Heading (Serif Font) */}
// // //           <motion.h1
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ delay: 0.2, duration: 1 }}
// // //             className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight font-serif tracking-wide"
// // //             style={{ fontFamily: "Georgia, serif" }} // Optional: Use a specific serif web font here if installed
// // //           >
// // //             Open heart surgery,<br/>
// // //             performed in Nigeria,<br/>
// // //             for people who could<br/>
// // //             never have paid for it.
// // //           </motion.h1>

// // //           {/* Subtext Paragraph */}
// // //           <motion.p 
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ delay: 0.6, duration: 1 }}
// // //             className="text-sm md:text-base lg:text-lg text-gray-200 mt-6 max-w-[600px] leading-relaxed"
// // //           >
// // //             The Gold Star Cardiac Surgery Initiative funds open heart surgery for 
// // //             Nigerians — children born with heart defects and adults with acquired 
// // //             heart disease — whose families cannot meet the cost of care. Surgery 
// // //             takes place at Gracespring Hospitals in Lagos, performed by permanent staff.
// // //           </motion.p>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero2;
