"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown, Search, Activity, Calendar, FileText, Pill } from "lucide-react";

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
    // Splits the path and replaces the first segment (the language code)
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
            
            <div className="relative">
              <button 
                className={`flex items-center justify-between w-full lg:w-auto gap-1 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors ${activeDropdown === 'products' ? 'text-teal-600 font-medium bg-slate-50' : 'text-slate-600'}`}
                onClick={() => toggleDropdown('products')}
              >
                {dict?.nav?.products || "Products"} <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'products' && dict?.megaMenu && (
                <div className="lg:absolute lg:top-full lg:-left-24 lg:mt-2 w-full lg:w-[600px] bg-slate-50 lg:bg-white lg:border border-gray-100 lg:shadow-2xl rounded-lg p-5 lg:p-6 z-50 flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.featuredApps}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/emr`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-teal-50 text-teal-600 rounded group-hover:bg-teal-100"><Activity size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-teal-600">{dict.megaMenu.clinical.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.clinical.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/diagnostics`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded group-hover:bg-purple-100"><FileText size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-purple-600">{dict.megaMenu.diagnostics.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.diagnostics.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.operations}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/inventory`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-orange-50 text-orange-600 rounded group-hover:bg-orange-100"><Pill size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">{dict.megaMenu.inventory.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.inventory.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/scheduling`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded group-hover:bg-blue-100"><Calendar size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">{dict.megaMenu.appointments.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.appointments.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

                        
            <div className="relative">
              <button 
                className={`flex items-center justify-between w-full lg:w-auto gap-1 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors ${activeDropdown === 'solutions' ? 'text-teal-600 font-medium bg-slate-50' : 'text-slate-600'}`}
                onClick={() => toggleDropdown('solutions')}
              >
                {dict?.nav?.solutions || "Solutions"} <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'solutions' && dict?.megaMenu && (
                <div className="lg:absolute lg:top-full lg:-left-24 lg:mt-2 w-full lg:w-[600px] bg-slate-50 lg:bg-white lg:border border-gray-100 lg:shadow-2xl rounded-lg p-5 lg:p-6 z-50 flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-2">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.featuredApps}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/emr`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-teal-50 text-teal-600 rounded group-hover:bg-teal-100"><Activity size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-teal-600">{dict.megaMenu.digitalHealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.digitalHealth.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/diagnostics`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded group-hover:bg-purple-100"><FileText size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-purple-600">{dict.megaMenu.ElectronicHealthRecords.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.ElectronicHealthRecords.desc}</p>
                        </div>
                      </a>

                      
                      <a href={`/${lang}/emr`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-teal-50 text-teal-600 rounded group-hover:bg-teal-100"><Activity size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-teal-600">{dict.megaMenu.femaleHealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.femaleHealth.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/diagnostics`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded group-hover:bg-purple-100"><FileText size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-purple-600">{dict.megaMenu.Healthcare.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.Healthcare.desc}</p>
                        </div>
                      </a>

                      
                      <a href={`/${lang}/emr`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-teal-50 text-teal-600 rounded group-hover:bg-teal-100"><Activity size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-teal-600">{dict.megaMenu.Healthservices.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.Healthservices.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/diagnostics`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded group-hover:bg-purple-100"><FileText size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-purple-600">{dict.megaMenu.hcit.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.hcit.desc}</p>
                        </div>
                      </a>


                      
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.operations}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/inventory`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-orange-50 text-orange-600 rounded group-hover:bg-orange-100"><Pill size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">{dict.megaMenu.healthinsurance.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.healthinsurance.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/scheduling`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded group-hover:bg-blue-100"><Calendar size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">{dict.megaMenu.mentalhealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.mentalhealth.desc}</p>
                        </div>
                      </a>

                      
                      <a href={`/${lang}/inventory`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-orange-50 text-orange-600 rounded group-hover:bg-orange-100"><Pill size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">{dict.megaMenu.mobilehealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.mobilehealth.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/scheduling`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded group-hover:bg-blue-100"><Calendar size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">{dict.megaMenu.personalhealth.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.personalhealth.desc}</p>
                        </div>
                      </a>

                      
                    </div>
                  </div>
                </div>
              )}
            </div>

            
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
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.featuredApps}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/emr`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-teal-50 text-teal-600 rounded group-hover:bg-teal-100"><Activity size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-teal-600">{dict.megaMenu.stories.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.stories.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/diagnostics`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded group-hover:bg-purple-100"><FileText size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-purple-600">{dict.megaMenu.community.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.community.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b pb-2">{dict.megaMenu.operations}</h3>
                    <div className="space-y-4">
                      <a href={`/${lang}/inventory`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-orange-50 text-orange-600 rounded group-hover:bg-orange-100"><Pill size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">{dict.megaMenu.programs.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.programs.desc}</p>
                        </div>
                      </a>
                      <a href={`/${lang}/scheduling`} className="flex items-start gap-3 group">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded group-hover:bg-blue-100"><Calendar size={20}/></div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">{dict.megaMenu.training.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{dict.megaMenu.training.desc}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

                   

            {['partners', 'resources'].map((key) => (
              <div className="relative" key={key}>
                <button 
                  className={`flex items-center justify-between w-full lg:w-auto gap-1 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors ${activeDropdown === key ? 'text-teal-600 font-medium bg-slate-50' : 'text-slate-600'}`}
                  onClick={() => toggleDropdown(key)}
                >
                  {dict?.nav?.[key]} <ChevronDown size={14} className={`transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === key && dict?.megaMenu && (
                  <div className="lg:absolute lg:top-full lg:left-0 lg:mt-2 w-full lg:w-48 bg-slate-50 lg:bg-white lg:border border-gray-100 lg:shadow-xl rounded-lg py-2 z-50 mt-1">
                    <a href={`/${lang}/${key}/overview`} className="block px-6 lg:px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-teal-600">{dict.megaMenu.links.overview}</a>
                    <a href={`/${lang}/${key}/enterprise`} className="block px-6 lg:px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-teal-600">{dict.megaMenu.links.enterprise}</a>
                  </div>
                )}
              </div>
            ))}
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
