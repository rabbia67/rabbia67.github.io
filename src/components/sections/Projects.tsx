import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Local LLM Deployment Platform',
      description: 'Deployed GPU-accelerated local LLM infrastructure using LLaMA.cpp, NVIDIA CUDA, and OpenWebUI for efficient on-premises AI capabilities.',
      techStack: ['NVIDIA CUDA', 'LLaMA.cpp', 'OpenWebUI', 'Docker', 'Python', 'Linux'],
      year: '2024',
      githubUrl: 'https://github.com/jahangir842/llm-deployment'
    },
    {
      title: 'Multi-Cloud Infrastructure as Code',
      description: 'Developed comprehensive IaC templates for AWS and Azure using Terraform and Ansible for consistent, version-controlled infrastructure deployment.',
      techStack: ['Terraform', 'Ansible', 'AWS', 'Azure', 'GitHub Actions', 'Bash'],
      year: '2023',
      githubUrl: 'https://github.com/jahangir842/multi-cloud-iac'
    },
    {
      title: 'MLOps Pipeline for AI Research',
      description: 'Built end-to-end MLOps workflow with MLflow for model tracking, experiment management, and automated deployment of machine learning models.',
      techStack: ['MLflow', 'Python', 'Docker', 'GitHub Actions', 'GPU Acceleration', 'Prometheus'],
      year: '2023'
    },
    {
      title: 'High-Performance Computing Cluster',
      description: 'Configured and maintained Apache Spark cluster for high-performance computing with optimized resource allocation and monitoring.',
      techStack: ['Apache Spark', 'Linux', 'Grafana', 'Ansible', 'Bash', 'HDFS'],
      year: '2022'
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