'use client';

import { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const projects = [
  {
    id: 1,
    title: 'Car Delivery App (Saudi Arabia)',
    description: 'Comprehensive car delivery app with mobile and backend features, Google Maps API integration, and Firebase workflows. Features include real-time tracking, payment integration, and admin dashboard.',
    image: '/api/placeholder/400/300',
    technologies: ['Flutter', 'Laravel', 'Firebase', 'Google Maps API', 'Payment Gateways'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Education Platform with DRM Video',
    description: 'Full education platform using Mux with DRM-protected video streaming for secure content delivery. Features include user authentication, course management, and secure video streaming.',
    image: '/api/placeholder/400/300',
    technologies: ['Flutter', 'Node.js', 'Mux DRM', 'Firebase', 'MongoDB'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Saudi Web Platform',
    description: 'Large-scale Saudi web platform with Express.js, integrating SADQ authentication and Moyasar payments. Features include user management, payment processing, and real-time data sync.',
    image: '/api/placeholder/400/300',
    technologies: ['Express.js', 'Node.js', 'SADQ Auth', 'Moyasar', 'PostgreSQL'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'Laravel-based e-commerce platform with dynamic shipping (Aramex API) and seamless checkout (PayTabs). Features include inventory management, order tracking, and payment processing.',
    image: '/api/placeholder/400/300',
    technologies: ['Laravel', 'PHP', 'Aramex API', 'PayTabs', 'MySQL'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 5,
    title: 'Cross-Platform Mobile Apps',
    description: 'Multiple published apps on Play Store and App Store with Flutter, featuring AdMob integration, Firebase backend, and responsive UI/UX design.',
    image: '/api/placeholder/400/300',
    technologies: ['Flutter', 'Dart', 'AdMob SDK', 'Firebase', 'Google Play'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: '.NET Core Full Stack',
    description: 'Full-stack .NET Core application with responsive front-end interfaces and back-end logic, featuring MVC design patterns and ASP.NET Identity authentication.',
    image: '/api/placeholder/400/300',
    technologies: ['.NET Core', 'C#', 'ASP.NET Identity', 'SQL Server', 'HTML/CSS/JS'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = ['All', 'Mobile', 'Web', 'Backend', 'Frontend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-spacing bg-slate-800/50">
      <div className="max-w-7xl mx-auto container-spacing">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work across different technologies and platforms, 
              featuring real-world solutions and innovative designs
            </p>
          </div>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`!px-12 !py-6 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-white/10 hover:border-purple-400/50 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl overflow-hidden hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer border border-white/10 hover:border-purple-400/50 backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-56 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center relative">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px',
                        animation: 'float 20s ease-in-out infinite'
                      }}></div>
                    </div>
                    
                    <div className="text-white text-center relative z-10">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Project Preview</p>
                    </div>
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Featured
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p className="text-sm font-medium">View Details</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-semibold rounded-full border border-purple-400/30">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-base mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <TooltipProvider key={tech}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="px-3 py-1 bg-slate-600/50 text-gray-300 text-sm rounded-full border border-white/10 hover:bg-slate-500/50 cursor-help transition-colors">
                              {tech}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm">Used in this project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                    {project.technologies.length > 3 && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="px-3 py-1 bg-slate-600/50 text-gray-300 text-sm rounded-full border border-white/10 hover:bg-slate-500/50 cursor-help transition-colors">
                              +{project.technologies.length - 3} more
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm">
                              {project.technologies.slice(3).join(', ')}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                      View Project
                    </button>
                    <button className="px-6 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-slate-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-600 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  View Live Demo
                </button>
                <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
