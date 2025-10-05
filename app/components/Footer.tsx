'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/lib/hooks/useTranslation';
// import { Card, CardContent } from '@/components/ui/card';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  Heart,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mohammad-abu-arra',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mohammad-abu-arra',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:mohjamal27703@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400'
    },
    {
      name: 'Phone',
      url: 'tel:+962795021746',
      icon: Phone,
      color: 'hover:text-green-400'
    }
  ];

  const quickLinks = [
    { name: t('footer.quickLinks.home'), href: '#home' },
    { name: t('footer.quickLinks.about'), href: '#about' },
    { name: t('footer.quickLinks.skills'), href: '#skills' },
    { name: t('footer.quickLinks.experience'), href: '#experience' },
    { name: t('footer.quickLinks.projects'), href: '#projects' },
    { name: t('footer.quickLinks.contact'), href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto container-spacing py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/avatar.png" alt={t('hero.name')} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t('hero.name')}</h3>
                <p className="text-gray-400">Full-Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>

            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500/20 text-green-400 border-green-400/30 px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                {t('footer.availableForWork')}
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">{t('footer.getInTouch')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">mohjamal27703@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">Irbid, Jordan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 text-sm">+962 79 502 1746</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h5 className="text-sm font-semibold text-white">{t('footer.followMe')}</h5>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 ${link.color} transition-all duration-300 hover:scale-110`}
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>{t('footer.copyright')}</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>{t('footer.madeWith')}</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                {t('footer.backToTop')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
