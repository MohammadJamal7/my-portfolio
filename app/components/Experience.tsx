'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award,
  GraduationCap,
  BookOpen,
  Star
} from 'lucide-react';

// Type definitions for translation data
interface WorkExperienceData {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string;
  keyAchievements: string;
}

interface EducationData {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  achievements: string[];
}

interface CertificationData {
  id?: number;
  title: string;
  issuer: string;
  period: string;
  description: string;
}


export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, tObject } = useTranslation();

  // Get data from translations
  const freelanceData = tObject('experience.freelance') as WorkExperienceData;
  const internshipData = tObject('experience.internship') as WorkExperienceData;
  
  const workExperience = [
    {
      id: 1,
      title: freelanceData.title,
      company: freelanceData.company,
      location: freelanceData.company,
      period: freelanceData.period,
      description: freelanceData.description,
      achievements: freelanceData.achievements,
      technologies: ['Flutter', 'Laravel', 'Node.js', 'Firebase', 'Payment Gateways', 'Google Maps API', 'Mux DRM', 'Aramex API'],
      type: 'Freelance'
    },
    {
      id: 2,
      title: internshipData.title,
      company: internshipData.company,
      location: internshipData.location,
      period: internshipData.period,
      description: internshipData.description,
      achievements: internshipData.achievements,
      technologies: ['C#', '.NET Core', 'HTML', 'CSS', 'JavaScript', 'SQL', 'MVC', 'ASP.NET Identity', 'Figma', 'Miro'],
      type: 'Internship'
    }
  ];

  const educationData = tObject('experience.education') as EducationData;
  const education = [
    {
      id: 1,
      degree: educationData.degree,
      institution: educationData.institution,
      location: educationData.location,
      period: educationData.period,
      gpa: educationData.gpa,
      achievements: educationData.achievements
    }
  ];

  const certifications = tObject('experience.certifications') as CertificationData[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section-spacing bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto container-spacing relative z-10">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">{t('experience.subtitle')}</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              {t('experience.title')}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Work Experience */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                <Briefcase className="w-8 h-8 text-purple-400" />
                <span>{t('experience.workExperience')}</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <Card 
                  key={job.id} 
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-semibold">{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`px-4 py-2 text-sm font-semibold ${
                          job.type === 'Freelance' 
                            ? 'bg-green-500/20 text-green-400 border-green-400/30' 
                            : 'bg-blue-500/20 text-blue-400 border-blue-400/30'
                        }`}
                      >
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">{job.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-400" />
                        <span>{t('experience.freelance.keyAchievements')}</span>
                      </h4>
                      <ul className="space-y-3">
                        {Array.isArray(job.achievements) && job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">{t('experience.freelance.technologies')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-slate-600/50 text-gray-300 border-white/10 hover:bg-slate-500/50 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                  <span>{t('experience.educationTitle')}</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </div>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{education[0].degree}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-semibold">{education[0].institution}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{education[0].location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{education[0].period}</span>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-400/30 px-3 py-1">
                      GPA: {education[0].gpa}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {Array.isArray(education[0].achievements) && education[0].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Star className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-400" />
                  <span>{t('experience.certificationsTitle')}</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                {certifications && Array.isArray(certifications) && certifications.length > 0 && certifications.map((cert: CertificationData, index: number) => (
                  <Card 
                    key={cert.id || index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">{cert.issuer}</span>
                          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-400/30">
                            {cert.period}
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-sm">{cert.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
