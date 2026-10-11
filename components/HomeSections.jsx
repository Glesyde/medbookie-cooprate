"use client";

import { Activity, FileText, Pill, Calendar, Users, Stethoscope, ChevronRight, HeartPulse, Layers3, Quote } from "lucide-react";

export function HeroSection({ dict }) {
  const featuredApps = [
    { title: dict.apps.app1.title, desc: dict.apps.app1.desc, icon: <Activity size={28} className="text-primary" /> },
    { title: dict.apps.app2.title, desc: dict.apps.app2.desc, icon: <FileText size={28} className="text-primary" /> },
    { title: dict.apps.app3.title, desc: dict.apps.app3.desc, icon: <Pill size={28} className="text-primary" /> },
    { title: dict.apps.app4.title, desc: dict.apps.app4.desc, icon: <Calendar size={28} className="text-primary" /> },
    { title: dict.apps.app5.title, desc: dict.apps.app5.desc, icon: <Users size={28} className="text-primary" /> },
    { title: dict.apps.app6.title, desc: dict.apps.app6.desc, icon: <Stethoscope size={28} className="text-primary" /> }
  ];

  return (
    <section className="bg-[#f9fafb] pt-20 pb-24 lg:pt-32 lg:pb-32 px-6 md:px-12 lg:px-24 w-full min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        <div className="w-full lg:w-1/2 max-w-2xl">
          <h1 className="text-slate-900 text-[2.75rem] md:text-5xl lg:text-[4rem] font-normal leading-[1.15] tracking-tight">
            {dict.titleLine1}<br />{dict.titleLine2}
          </h1>
          <div className="w-10 h-[2px] bg-primary my-8" />
          <p className="text-slate-700 text-lg lg:text-xl leading-relaxed mb-10 font-light pr-4">
            {dict.description} <span className="border-b border-dotted border-slate-400 pb-0.5">{dict.descriptionHighlight}</span>
          </p>
          <button className="bg-primary  hover:bg-[#e11d48] text-white font-medium py-3.5 px-8 rounded flex items-center gap-2 transition-colors text-sm uppercase tracking-wider shadow-sm">
            {dict.cta} <ChevronRight size={18} />
          </button>
        </div>

        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-[11px] font-semibold text-slate-800 uppercase tracking-widest">{dict.featuredLabel}</h3>
            <div className="w-6 h-[1.5px] bg-red-600 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {featuredApps.map((app, index) => (
              <div key={index} className="flex items-start gap-4 group cursor-pointer">
                <div className="mt-1 flex-shrink-0">{app.icon}</div>
                <div>
                  <h4 className="text-[1.35rem] font-normal text-slate-900 mb-1">{app.title}</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#all-products" className="inline-flex items-center gap-1 text-[13px] font-medium text-[#0284c7] hover:text-blue-800 transition-colors uppercase tracking-widest">
              {dict.exploreAll} <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


export function SuiteSection({ dict }) {
  return (
    // REMOVED: mt-32 from the section below so it touches the hero section
    <section className="relative w-full !bg-black" id="suite">
      
      {/* 
        The -top-32 here will now perfectly pull this card UP into the bottom 
        padding of the Hero section, creating the overlap effect without a gap.
      */}
      <div className="lg:absolute -top-32 left-0 right-0 z-10 w-[95%] max-w-7xl mx-auto bg-transparent pt-12 pb-8 px-6 md:px-12 lg:px-16 rounded-2xl shadow-2xl">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary rounded-lg p-10 flex flex-col items-center text-center relative overflow-hidden border border-blue-50/50">
            <div className="lg:absolute top-0 left-0 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-br-lg">{dict.clinicalLabel}</div>
            <div className="flex items-center justify-center gap-2 mb-6 mt-4">
              <HeartPulse size={28} className="text-white" />
              <span className="text-xl font-bold text-slate-800 tracking-tight">{dict.clinicalTitle.split(' ')[0]} <span className="font-light">{dict.clinicalTitle.split(' ')[1]}</span></span>
            </div>
            <h3 className="text-3xl font-normal text-slate-900 mb-4 tracking-tight">{dict.clinicalHeadline1} <span className="text-white">{dict.clinicalHeadline2}</span></h3>
            <p className="text-slate-600 font-light mb-8 max-w-sm">{dict.clinicalDesc}</p>
            <button className="border border-white text-white hover:bg-black hover:text-primary transition-colors font-medium text-sm px-6 py-2.5 rounded-full flex items-center gap-1 uppercase tracking-wide">{dict.clinicalCta} <ChevronRight size={16} /></button>
          </div>

          <div className="bg-primary rounded-lg p-10 flex flex-col items-center text-center relative overflow-hidden border border-purple-50/50">
            <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-br-lg">{dict.opsLabel}</div>
            <div className="flex items-center justify-center gap-2 mb-6 mt-4">
              <Layers3 size={28} className="text-white" />
              <span className="text-xl font-bold text-slate-800 tracking-tight">{dict.opsTitle.split(' ')[0]} <span className="font-light">{dict.opsTitle.split(' ')[1]}</span></span>
            </div>
            <h3 className="text-3xl font-normal text-slate-900 mb-4 tracking-tight">{dict.opsHeadline1}<span className="text-white">{dict.opsHeadline2}</span></h3>
            <p className="text-slate-600 font-light mb-8 max-w-sm">{dict.opsDesc}</p>
            <button className="border border-white text-white hover:bg-black hover:text-primary transition-colors font-medium text-sm px-6 py-2.5 rounded-full flex items-center gap-1 uppercase tracking-wide">{dict.opsCta} <ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      <div className="bg-black w-full lg:pt-56 pb-24 px-6 md:px-12 lg:px-24 lg:min-h-[100vh] flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-0">
          <div className="w-full lg:w-1/2 lg:pr-16 flex flex-col items-start">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center"><Activity size={32} className="text-primary" /></div>
              <div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-2">{dict.workspaceLabel}</h4>

                <a className="flex items-center font-bold text-[30px] mb-4">
                <span className="text-orange-500 font-bold">M</span>
                <span className="text-orange-500 font-bold">e</span>
                <span className="text-orange-500 font-bold">d</span>
                <span className="text-white font-normal">bookie</span>
                </a>
              </div>
            </div>
            <div className="ml-0 lg:ml-22">
              <h3 className="text-2xl font-normal !text-primary mb-3">{dict.workspaceHeadline}</h3>
              <p className="text-white font-light leading-relaxed mb-10 max-w-md">{dict.workspaceDesc}</p>
              <button className="bg-primary hover:bg-white text-black hover:text-primary font-bold py-3.5 px-8 rounded flex items-center gap-2 transition-colors text-sm uppercase tracking-wide shadow-sm">{dict.workspaceCta} <ChevronRight size={18} /></button>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-white/10" />

          <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col justify-center border-t lg:border-t-0 border-white/10 pt-12 lg:pt-0">
            <div className="w-12 h-12 flex items-center justify-center mb-8"><Quote size={20} className="text-white fill-current" /></div>
            <p className="text-[1.35rem] lg:text-2xl font-light text-white leading-snug mb-10">{dict.testimonialQuote}</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-300 overflow-hidden"><img src="/assets/images/Testimonial/placeholder.png" alt={dict.testimonialAuthor} className="w-full h-full object-cover grayscale opacity-80" /></div>
              <div>
                <h5 className="text-base font-bold text-white">{dict.testimonialAuthor}</h5>
                <p className="text-sm font-light text-white">{dict.testimonialRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function TrustSection({ dict }) {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-center">
      <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-3">{dict.label}</h3>
      <div className="w-8 h-[2px] bg-red-600 mx-auto mb-12" />
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-90 mb-16 max-w-5xl mx-auto">
        <span className="text-3xl font-bold tracking-tighter text-red-600 flex items-center gap-1"><span className="text-black">@</span>thnos</span>
        <span className="text-2xl font-bold tracking-tight text-green-600">farmkart</span>
        <span className="text-2xl font-bold tracking-tight text-blue-800 flex items-center gap-1"><span className="bg-blue-500 text-white px-1 rounded-sm text-lg">F</span> flexisaf</span>
        <span className="text-2xl font-bold tracking-tighter text-slate-800 flex items-center gap-1"><span className="text-emerald-500 text-3xl">☗</span> Infinity<br/><span className="font-light">Health</span></span>
        <span className="text-2xl font-light tracking-widest text-slate-900">zedcrest</span>
      </div>
      <a href="#customer-stories" className="inline-flex items-center gap-1 text-[13px] font-medium text-[#0284c7] hover:text-blue-800 transition-colors uppercase tracking-widest">
        {dict.cta} <ChevronRight size={16} />
      </a>
    </section>
  );
}

export function EnterpriseSection({ dict }) {
  return (
    <section className="bg-[#f9fafb] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-[2.75rem] font-normal text-slate-900 leading-tight mb-6 tracking-tight">{dict.title}</h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-md">{dict.desc}</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-[1.35rem] lg:text-2xl font-light text-slate-900 leading-snug mb-8">{dict.quote}</p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-300 overflow-hidden shrink-0"><img src="/assets/images/Testimonial/placeholder.png" alt={dict.author} className="w-full h-full object-cover grayscale opacity-90" /></div>
            <div>
              <h5 className="text-base font-bold text-slate-900">{dict.author}</h5>
              <p className="text-sm font-light text-slate-600 leading-tight mt-1" dangerouslySetInnerHTML={{ __html: dict.role.replace(", ", ",<br />") }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}