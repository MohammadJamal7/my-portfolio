'use client';

import { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTranslation } from '@/lib/hooks/useTranslation';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { t, tObject } = useTranslation();

  // Get projects from translations
  const projects = (tObject('projects.projects') as any[]) || [];

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
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">{t('projects.subtitle')}</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              {t('projects.title')}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('projects.description')}
            </p>
          </div>

          {/* Selected Projects Header */}
          <div className="text-center mb-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('projects.selectedProjects')}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id || `project-${index}`}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl overflow-hidden hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer border border-white/10 hover:border-purple-400/50 backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  {project.image ? (
                    <div className="w-full h-56 relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ {t('projects.featured')}
                        </div>
                      )}
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <p className="text-sm font-medium">{t('projects.viewDetails')}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
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
                          ⭐ {t('projects.featured')}
                        </div>
                      )}
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <p className="text-sm font-medium">{t('projects.viewDetails')}</p>
                        </div>
                      </div>
                    </div>
                  )}
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
                    {project.technologies.slice(0, 3).map((tech: string) => (
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
                      <TooltipProvider key={`more-${project.id}`}>
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
                    {project.links && project.links.playStore && project.links.appStore && project.links.playStore !== null && project.links.appStore !== null ? (
                      <>
                        <a 
                          href={project.links.playStore} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L12.5 12l5.199-3.291zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z"/>
                          </svg>
                          {t('projects.playStore')}
                        </a>
                        <a 
                          href={project.links.appStore} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          {t('projects.appStore')}
                        </a>
                      </>
                    ) : project.links && project.links.website && project.links.website !== null ? (
                      <a 
                        href={project.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        {t('projects.visitWebsite')}
                      </a>
                    ) : project.links && (project.links.playStore !== null || project.links.appStore !== null || project.links.website !== null) ? (
                      <>
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                          {t('projects.viewProject')}
                        </button>
                        <button className="px-6 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-slate-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </>
                    ) : null}
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

              {selectedProject.image ? (
                <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
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
              )}

              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">{t('projects.technologiesUsed')}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
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
                {selectedProject.links && selectedProject.links.playStore && selectedProject.links.appStore && selectedProject.links.playStore !== null && selectedProject.links.appStore !== null ? (
                  <>
                    <a 
                      href={selectedProject.links.playStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L12.5 12l5.199-3.291zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z"/>
                      </svg>
                      {t('projects.playStore')}
                    </a>
                    <a 
                      href={selectedProject.links.appStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      {t('projects.appStore')}
                    </a>
                  </>
                ) : selectedProject.links && selectedProject.links.website && selectedProject.links.website !== null ? (
                  <a 
                    href={selectedProject.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {t('projects.visitWebsite')}
                  </a>
                ) : selectedProject.links && (selectedProject.links.playStore !== null || selectedProject.links.appStore !== null || selectedProject.links.website !== null) ? (
                  <>
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      {t('projects.viewLiveDemo')}
                    </button>
                    <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                      {t('projects.viewCode')}
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
