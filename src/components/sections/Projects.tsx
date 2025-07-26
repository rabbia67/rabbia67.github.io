import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Robot Navigation and Path Planning',
      description: 'Implemented multiple navigation algorithms including Bug 1, Bug 2, Tangent Bug, and custom algorithms for robot navigation. Developed advanced path planning using Potential Field methods and RRT with Kalman Filtering.',
      techStack: ['Python', 'ROS', 'Kalman Filter', 'Path Planning', 'Robot Kinematics', 'C++'],
      year: '2024',
      githubUrl: 'https://github.com/rabbia67/robot-navigation'
    },
    {
      title: 'Early Warning System',
      description: 'Developed a real-time early warning system integrating AI modules with GIS visualization. Implemented time-series data handling using PostgreSQL and TimescaleDB.',
      techStack: ['Python', 'PostgreSQL', 'TimescaleDB', 'QGIS', 'AI', 'GIS'],
      year: '2023',
      githubUrl: 'https://github.com/rabbia67/early-warning-system'
    },
    {
      title: 'EgyptianGen',
      description: 'Created an innovative text-to-image generator that produces historic-style images of ancient Egypt from descriptive prompts, utilizing deep learning and computer vision techniques.',
      techStack: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'NLP', 'Image Generation'],
      year: '2023',
      githubUrl: 'https://github.com/rabbia67/egyptiangen'
    },
    {
      title: 'Gesture-Based Volume Control',
      description: 'Developed a real-time hand gesture recognition system using computer vision to control laptop volume, demonstrating practical applications of AI in human-computer interaction.',
      techStack: ['OpenCV', 'Python', 'Machine Learning', 'Computer Vision', 'Real-time Processing', 'Image Recognition'],
      year: '2023',
      githubUrl: 'https://github.com/rabbia67/gesture-control'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionTitle 
          title="Featured Projects"
          subtitle="A showcase of my most significant and impactful projects."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              year={project.year}
              githubUrl={project.githubUrl}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;