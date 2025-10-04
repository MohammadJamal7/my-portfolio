'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const skills = [
  {
    category: 'Languages & Frameworks',
    icon: '💻',
    technologies: [
      { name: 'Dart', level: 95, color: 'from-blue-400 to-blue-600', icon: '⚡' },
      { name: 'PHP', level: 90, color: 'from-purple-400 to-purple-600', icon: '🐘' },
      { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600', icon: '🟨' },
      { name: 'C#', level: 85, color: 'from-blue-500 to-blue-700', icon: '🔷' },
      { name: 'Flutter', level: 95, color: 'from-cyan-400 to-cyan-600', icon: '🎯' },
      { name: 'Laravel', level: 90, color: 'from-red-400 to-red-600', icon: '🔴' },
      { name: 'Node.js/Express', level: 88, color: 'from-green-400 to-green-600', icon: '🚀' },
      { name: '.NET Core', level: 85, color: 'from-purple-400 to-purple-600', icon: '🔷' }
    ]
  },
  {
    category: 'Databases & APIs',
    icon: '🗄️',
    technologies: [
      { name: 'MySQL', level: 90, color: 'from-orange-400 to-orange-600', icon: '🐬' },
      { name: 'PostgreSQL', level: 85, color: 'from-blue-400 to-blue-600', icon: '🐘' },
      { name: 'SQL Server', level: 80, color: 'from-blue-500 to-blue-700', icon: '🗃️' },
      { name: 'SQLite', level: 85, color: 'from-gray-400 to-gray-600', icon: '📱' },
      { name: 'MongoDB', level: 80, color: 'from-green-400 to-green-600', icon: '🍃' },
      { name: 'Firestore', level: 85, color: 'from-yellow-400 to-orange-500', icon: '🔥' },
      { name: 'REST APIs', level: 90, color: 'from-blue-400 to-purple-500', icon: '🔗' },
      { name: 'Payment Gateways', level: 88, color: 'from-green-400 to-teal-500', icon: '💳' }
    ]
  },
  {
    category: 'Authentication & Services',
    icon: '🔐',
    technologies: [
      { name: 'Firebase Auth', level: 90, color: 'from-yellow-400 to-orange-500', icon: '🔥' },
      { name: 'SADQ', level: 85, color: 'from-green-400 to-green-600', icon: '🛡️' },
      { name: 'ASP.NET Identity', level: 80, color: 'from-blue-500 to-blue-700', icon: '🔷' },
      { name: 'DRM Video (Mux)', level: 75, color: 'from-purple-400 to-pink-500', icon: '🎬' },
      { name: 'Real-time Sync', level: 85, color: 'from-cyan-400 to-blue-500', icon: '⚡' },
      { name: 'Responsive UI/UX', level: 90, color: 'from-pink-400 to-purple-500', icon: '🎨' }
    ]
  },
  {
    category: 'Tools & Services',
    icon: '🛠️',
    technologies: [
      { name: 'Git/GitHub', level: 90, color: 'from-orange-400 to-red-500', icon: '🌿' },
      { name: 'Postman', level: 85, color: 'from-orange-400 to-orange-600', icon: '📮' },
      { name: 'Figma', level: 80, color: 'from-purple-400 to-pink-500', icon: '🎨' },
      { name: 'Miro', level: 75, color: 'from-blue-400 to-purple-500', icon: '🖼️' },
      { name: 'Android Studio', level: 85, color: 'from-green-400 to-green-600', icon: '🤖' },
      { name: 'AdMob SDK', level: 80, color: 'from-yellow-400 to-orange-500', icon: '📱' },
      { name: 'Aramex API', level: 75, color: 'from-blue-500 to-blue-700', icon: '📦' }
    ]
  }
];

const additionalSkills = [
  { name: 'Microsoft Office', icon: '📊', color: 'from-blue-400 to-blue-600' },
  { name: 'Moyasar', icon: '💳', color: 'from-green-400 to-teal-500' },
  { name: 'PayTabs', icon: '💳', color: 'from-blue-400 to-purple-500' },
  { name: 'Paymob', icon: '💳', color: 'from-green-400 to-green-600' },
  { name: 'Mada', icon: '💳', color: 'from-red-400 to-pink-500' },
  { name: 'Google Maps API', icon: '🗺️', color: 'from-blue-400 to-green-500' },
  { name: 'Play Store', icon: '📱', color: 'from-green-400 to-green-600' },
  { name: 'App Store', icon: '🍎', color: 'from-gray-400 to-gray-600' },
  { name: 'Release Pipelines', icon: '🚀', color: 'from-blue-400 to-cyan-500' },
  { name: 'Deployment', icon: '🌐', color: 'from-purple-400 to-pink-500' },
  { name: 'MVC Patterns', icon: '🏗️', color: 'from-blue-500 to-blue-700' },
  { name: 'UI/UX Design', icon: '🎨', color: 'from-pink-400 to-purple-500' }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill levels with staggered timing
          skills.forEach((category, categoryIndex) => {
            category.technologies.forEach((tech, techIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [tech.name]: tech.level
                }));
              }, (categoryIndex * 200) + (techIndex * 150) + 500);
            });
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['All', 'Languages & Frameworks', 'Databases & APIs', 'Authentication & Services', 'Tools & Services'];
  
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="section-spacing bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto container-spacing relative z-10">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Technical Skills</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across multiple domains, 
              from mobile development to cloud infrastructure
            </p>
          </div>

          {/* Skills Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-white/10 hover:border-purple-400/50 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {filteredSkills.map((category, categoryIndex) => (
              <Card 
                key={category.category} 
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">{category.category}</CardTitle>
                      <p className="text-gray-400">Specialized technologies</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="text-lg font-semibold text-white">{tech.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-purple-400 bg-purple-400/20 border-purple-400/30">
                          {animatedSkills[tech.name] || 0}%
                        </Badge>
                      </div>
                      
                      <Progress 
                        value={animatedSkills[tech.name] || 0} 
                        className="h-3 bg-slate-700/50"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Additional Expertise</h3>
            <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {additionalSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 backdrop-blur-sm cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Skills Summary */}
          <div className="mt-20 text-center">
            <Card className="inline-flex items-center space-x-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-white/10 backdrop-blur-sm">
              <CardContent className="flex items-center space-x-8 px-8 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <Separator orientation="vertical" className="h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">4</div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <Separator orientation="vertical" className="h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">1+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
