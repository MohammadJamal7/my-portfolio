'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code, 
  Briefcase, 
  Mail,
  Sparkles
} from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleScrollToSection = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollToSection);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollToSection);
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-spacing">
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <div className="flex items-center space-x-6 group cursor-pointer px-4 py-2" onClick={() => scrollToSection('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mohammad Abu Arra
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                className={`relative !px-12 !py-5 font-medium transition-all duration-300 group rounded-lg ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg shadow-purple-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5 hover:scale-105'
                }`}
              >
                <span className="relative z-10">
                  <span className="text-sm font-medium">{item.label}</span>
                </span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block ml-8">
            <Button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="text-sm font-medium">Let's Talk</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            className="lg:hidden text-white hover:bg-white/10 p-4 ml-4"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-8 space-y-10">
            {navItems.map((item, index) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                className={`w-full justify-start !px-12 !py-8 font-medium transition-all duration-300 group relative rounded-lg ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/5 hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">
                  <span className="text-base font-medium">{item.label}</span>
                </span>
                
                {/* Active indicator for mobile */}
                {activeSection === item.id && (
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                )}
              </Button>
            ))}
            
            <div className="pt-8 border-t border-white/10">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full px-8 py-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <span className="flex items-center space-x-3">
                  <span className="text-base font-medium">Let's Talk</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
