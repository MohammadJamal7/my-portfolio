'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { 
  Briefcase, 
  Clock, 
  CheckCircle, 
  Headphones, 
  User, 
  Star,
  Award,
  Target
} from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
    support: 0
  });
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          setTimeout(() => {
            setStats({ projects: 20, experience: 1, satisfaction: 100, support: 24 });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-spacing bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto container-spacing relative z-10">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">{t('about.title')}</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              {t('about.subtitle')}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t('about.description1')}
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {t('about.description2')}
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {t('about.description3')}
                </p>
              </div>

              {/* Enhanced Stats Grid with shadcn/ui */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <Card className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{stats.projects}+</h3>
                        <p className="text-gray-400 font-medium text-sm sm:text-base">{t('about.stats.projects')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{stats.experience}+</h3>
                        <p className="text-gray-400 font-medium text-sm sm:text-base">{t('about.stats.experience')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{stats.satisfaction}%</h3>
                        <p className="text-gray-400 font-medium text-sm sm:text-base">{t('about.stats.satisfaction')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{stats.support}/7</h3>
                        <p className="text-gray-400 font-medium text-sm sm:text-base">{t('about.stats.support')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enhanced Photo Section with shadcn/ui */}
            <div className="relative">
              <Card className="relative group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    {/* Avatar with shadcn/ui */}
                    <div className="relative">
                      <Avatar className="w-32 h-32 mx-auto border-4 border-purple-400/30 shadow-2xl">
                        <AvatarImage src="/avatar.jpg" alt={t('hero.name')} />
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white text-2xl font-bold">
                          <User className="w-16 h-16" />
                        </AvatarFallback>
                      </Avatar>
                      
                      {/* Status indicator */}
                      <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-800 animate-pulse"></div>
                    </div>

                    {/* Profile Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t('hero.name')}</h3>
                        <p className="text-gray-300 text-lg">Full-Stack Developer</p>
                      </div>

                      {/* Status Badge */}
                      <Badge className="bg-green-500/20 text-green-400 border-green-400/30 px-4 py-2 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        {t('about.status')}
                      </Badge>

                      <Separator className="bg-white/10" />

                      {/* Skills Badges */}
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                          <Star className="w-3 h-3 mr-1" />
                          Flutter
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                          <Award className="w-3 h-3 mr-1" />
                          Laravel
                        </Badge>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-400/30">
                          <Target className="w-3 h-3 mr-1" />
                          .NET Core
                        </Badge>
                      </div>

                      {/* Experience Progress */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">{t('about.stats.experience')}</span>
                          <span className="text-sm text-white font-medium">Expert</span>
                        </div>
                        <Progress value={90} className="h-2 bg-slate-700" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-24">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Work Philosophy */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Target className="w-5 h-5 text-purple-400" />
                    <span>{t('about.philosophy')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {t('about.philosophyText')}
                  </p>
                </CardContent>
              </Card>

              {/* Core Values */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span>{t('about.values.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{t('about.values.quality')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{t('about.values.satisfaction')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{t('about.values.learning')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span>{t('about.availability')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge className="bg-green-500/20 text-green-400 border-green-400/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      {t('about.status')}
                    </Badge>
                    <p className="text-gray-300 text-sm">
                      {t('about.availabilityText')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
