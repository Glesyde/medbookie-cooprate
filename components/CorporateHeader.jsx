"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { 
  Menu, X, Globe,  Search, 
  Pill, HeartPulse, FileHeart, Building2, 
  Server, ShieldCheck, Brain, Smartphone, User, 
  Star, Users, Handshake, GraduationCap, 
  Code, BookOpen, Calculator, Library, Newspaper,
  ChevronDown, Stethoscope, Cloud, 
  FlaskConical, Radiation, Leaf, HeartHandshake, SmilePlus, 
  Eye, Baby, CircleDollarSign 
} from "lucide-react";

export default function CorporateHeader({ dict, lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSwitch = (newLangCode) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLangCode; 
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setLangOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setLangOpen(false); 
  };

  const availableLanguages = [
    { code: "en", label: "English" }, { code: "zh", label: "中文 (Mandarin)" },
    { code: "hi", label: "हिन्दी (Hindi)" }, { code: "es", label: "Español" },
    { code: "fr", label: "Français" }, { code: "ar", label: "العربية (Arabic)" },
    { code: "de", label: "Deutsch" }, { code: "pt", label: "Português" },
    { code: "ru", label: "Русский (Russian)" }, { code: "bn", label: "বাংলা (Bengali)" }
  ];
  
  const currentLangLabel = availableLanguages.find(l => l.code === lang)?.label || "English";

  return (
    <>
      <header ref={headerRef} className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-[100] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          <a className="flex items-center gap-1 z-10 shrink-0" href={`/${lang}`} onClick={closeMenu}>
            <img src="/medbookie-logo.png" alt="Medbookie Logo" className="h-12 md:h-20 w-auto" />
          </a>

          <nav className={`
            ${menuOpen ? "flex" : "hidden"} lg:flex 
            absolute lg:static top-full left-0 w-full lg:w-auto 
            bg-white lg:bg-transparent flex-col lg:flex-row 
            shadow-xl lg:shadow-none border-t lg:border-none border-gray-200 
            p-6 lg:p-0 gap-4 lg:gap-2 max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible
          `}>
            
            {/* PRODUCTS */}
            
            <div className="relative">
              <button 
                className={`flex items-center justify-between w-full lg:w-auto gap-1 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors ${activeDropdown === 'products' ? 'text-teal-600 font-medium bg-slate-50' : 'text-slate-600'}`}
                onClick={() => toggleDropdown('products')}
              >
                {dict?.nav?.products || "Products"} <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'products' && dict?.megaMenu?.products && (
                <div className="lg:absolute lg:top-full lg:-left-24 lg:mt-2 w-full lg:w-[900px] bg-slate-50 lg:bg-white lg:border border-gray-100 lg:shadow-2xl rounded-lg p-5 lg:p-6 z-50 flex flex-col lg:grid lg:grid-cols-3 gap-6 mt-2">
                  
                  {/* Column 1: Core & Tech */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.productCategories.core}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/products/hmis`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Building2 size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.hmis.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.hmis.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/emr`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><FileHeart size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.emr.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.emr.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/clinic`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Stethoscope size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.clinic.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.clinic.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/cloud`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Cloud size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.cloud.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.cloud.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/mobility`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Smartphone size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.mobility.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.mobility.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Column 2: Lab & Pharmacy */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.productCategories.lab}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/products/lis`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><FlaskConical size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.lis.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.lis.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/ris`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Radiation size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.ris.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.ris.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/pharmacy`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Pill size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.pharmacy.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.pharmacy.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/environmental`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Leaf size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.environmental.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.environmental.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/homecare`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><HeartHandshake size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.homecare.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.homecare.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Column 3: Specialties & Finance */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.productCategories.specialty}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/products/dental`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><SmilePlus size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.dental.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.dental.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/ophthalmology`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Eye size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.ophthalmology.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.ophthalmology.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/art`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Baby size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.art.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.art.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/products/finance`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><CircleDollarSign size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.products.finance.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.products.finance.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  
                </div>
              )}
            </div>

            {/* SOLUTIONS */}
            <div className="relative">
              <button 
                className={`flex items-center justify-between w-full lg:w-auto gap-1 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors ${activeDropdown === 'solutions' ? 'text-teal-600 font-medium bg-slate-50' : 'text-slate-600'}`}
                onClick={() => toggleDropdown('solutions')}
              >
                {dict?.nav?.solutions || "Solutions"} <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'solutions' && dict?.megaMenu && (
                <div className="lg:absolute lg:top-full lg:-left-24 lg:mt-2 w-full lg:w-[650px] bg-slate-50 lg:bg-white lg:border border-gray-100 lg:shadow-2xl rounded-lg p-5 lg:p-6 z-50 flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.specialties || "Specialties"}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/solutions/digital-health`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Smartphone size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.digitalHealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.digitalHealth.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/solutions/ehr`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><FileHeart size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.ElectronicHealthRecords.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.ElectronicHealthRecords.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/solutions/female-health`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><HeartPulse size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.femaleHealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.femaleHealth.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/solutions/health-services`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Building2 size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.Healthservices.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.Healthservices.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.focus || "Focus Areas"}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/solutions/hcit`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Server size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.hcit.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.hcit.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/solutions/insurance`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><ShieldCheck size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.healthinsurance.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.healthinsurance.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/solutions/mental-health`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Brain size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.mentalhealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.mentalhealth.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/solutions/personal-health`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><User size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.personalhealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.personalhealth.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CUSTOMERS */}
            <div className="relative">
              <button 
                className={`flex items-center justify-between w-full lg:w-auto gap-1 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors ${activeDropdown === 'customers' ? 'text-teal-600 font-medium bg-slate-50' : 'text-slate-600'}`}
                onClick={() => toggleDropdown('customers')}
              >
                {dict?.nav?.customers || "Customers"} <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'customers' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'customers' && dict?.megaMenu && (
                <div className="lg:absolute lg:top-full lg:-left-24 lg:mt-2 w-full lg:w-[600px] bg-slate-50 lg:bg-white lg:border border-gray-100 lg:shadow-2xl rounded-lg p-5 lg:p-6 z-50 flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.success || "Success & Community"}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/customers/stories`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Star size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.stories.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.stories.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/community`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Users size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.community.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.community.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.growth || "Growth"}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/affiliate`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Handshake size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.programs.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.programs.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/training`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><GraduationCap size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.training.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.training.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PARTNERS */}
            <div className="relative">
              <button 
                className={`flex items-center justify-between w-full lg:w-auto gap-1 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors ${activeDropdown === 'partners' ? 'text-teal-600 font-medium bg-slate-50' : 'text-slate-600'}`}
                onClick={() => toggleDropdown('partners')}
              >
                {dict?.nav?.partners || "Partners"} <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'partners' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'partners' && dict?.megaMenu && (
                <div className="lg:absolute lg:top-full lg:-left-24 lg:mt-2 w-full lg:w-[600px] bg-slate-50 lg:bg-white lg:border border-gray-100 lg:shadow-2xl rounded-lg p-5 lg:p-6 z-50 flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.network || "Join Us"}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/partners/join`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary rounded group-hover:bg-primary/10"><Handshake size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.becomeapartner.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.becomeapartner.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.network || "Directory"}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/partners/find`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary rounded group-hover:bg-primary/10"><Users size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.partnersaffilate.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.partnersaffilate.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RESOURCES */}
            <div className="relative">
              <button 
                className={`flex items-center justify-between w-full lg:w-auto gap-1 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors ${activeDropdown === 'resources' ? 'text-teal-600 font-medium bg-slate-50' : 'text-slate-600'}`}
                onClick={() => toggleDropdown('resources')}
              >
                {dict?.nav?.resources || "Resources"} <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources' && dict?.megaMenu && (
                <div className="lg:absolute lg:top-full lg:-left-24 lg:mt-2 w-full lg:w-[600px] bg-slate-50 lg:bg-white lg:border border-gray-100 lg:shadow-2xl rounded-lg p-5 lg:p-6 z-50 flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.developer || "Developers & Tools"}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/resources/api`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary"><Code size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.api.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.api.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/resources/calculators`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary rounded group-hover:bg-primary/10"><Calculator size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.medicalCalculators.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.medicalCalculators.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.learn || "Learning & Insights"}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/resources/knowledge-base`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary rounded group-hover:bg-primary/10"><Library size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.knowledgeBase.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.knowledgeBase.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/resources/brochures`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary rounded group-hover:bg-primary/10"><BookOpen size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.brochure.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.brochure.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/blog`} className="flex items-start gap-3 group">
                        <div className="p-2 text-primary rounded group-hover:bg-primary/10"><Newspaper size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-primary">{dict.megaMenu.blog.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.blog.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center justify-end gap-2 lg:gap-4 shrink-0 z-10">
            <div className="hidden lg:block">
              {searchOpen ? (
                <div className="flex items-center w-64 border border-gray-300 rounded-full px-3 py-1.5 bg-slate-50">
                  <Search size={16} className="text-slate-400 shrink-0" />
                  <input type="text" placeholder={dict?.search || "Search..."} className="bg-transparent border-none outline-none text-sm w-full px-2" autoFocus />
                  <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-slate-600 shrink-0"><X size={16} /></button>
                </div>
              ) : (
                <button onClick={() => {setSearchOpen(true); setActiveDropdown(null);}} className="p-2 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-full transition-colors"><Search size={20} /></button>
              )}
            </div>

            {!searchOpen && (
              <div className="relative">
                <button onClick={() => {setLangOpen(!langOpen); setActiveDropdown(null);}} className="flex items-center gap-1.5 p-2 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-md transition-colors">
                  <Globe size={20} />
                  <span className="text-sm font-medium">{currentLangLabel.split(" ")[0]}</span>
                </button>
                
                {langOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-xl py-2 z-50 h-64 overflow-y-auto">
                    {availableLanguages.map((l) => (
                      <button
                        key={l.code}
                        className={`block w-full text-left px-4 py-2 text-sm ${lang === l.code ? 'bg-teal-50 text-teal-700 font-medium' : 'text-slate-700 hover:bg-slate-50 hover:text-teal-600'}`}
                        onClick={() => handleLanguageSwitch(l.code)}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {!searchOpen && (
              <button className="hidden lg:flex w-8 h-8 rounded-full bg-slate-800 items-center justify-center text-white text-xs font-bold hover:bg-slate-700 transition-colors shrink-0">MB</button>
            )}

            <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-md transition-colors ml-1" onClick={() => {setMenuOpen(!menuOpen); setLangOpen(false);}}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      <div className="h-[60px] md:h-[68px] w-full" aria-hidden="true" />
    </>
  );
}