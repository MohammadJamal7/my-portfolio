'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { name: 'Flutter', icon: '🎯', color: 'from-blue-400 to-blue-600' },
    { name: 'Laravel', icon: '🔴', color: 'from-red-400 to-red-600' },
    { name: 'Express.js', icon: '🚀', color: 'from-green-400 to-green-600' },
    { name: '.NET Core', icon: '🔷', color: 'from-purple-400 to-purple-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-400 to-blue-600' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      {/* Enhanced Floating Elements with mouse interaction */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-pink-500/30 to-blue-500/30 rounded-full blur-2xl animate-float delay-1000"
        style={{
          transform: `translate(${-mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-float delay-2000"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.01}px)`
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center container-spacing max-w-7xl mx-auto pt-32 pb-20">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Greeting Badge */}
         

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block mb-2">{t('hero.greeting')}</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              {t('hero.title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
            <br />
            {t('hero.subtitle2')}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 button-spacing">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center space-x-2">
                <span>{t('hero.viewWork')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="group px-8 py-6 text-lg font-semibold border-2 border-white/30 text-white bg-white/10 hover:border-purple-400 hover:bg-purple-400/20 rounded-2xl transition-all duration-500 transform hover:scale-110 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <span>{t('hero.getInTouch')}</span>
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Tech Stack Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {techStack.map((tech, index) => (
              <Card
                key={tech.name}
                className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <span className="text-sm text-white/80 font-medium">{tech.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-medium">{t('hero.scrollToExplore')}</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
