import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'DevOps Engineer',
      company: 'National Science & Technology Park',
      period: 'Mar 2023 - Present',
      description: [
        'Designed and maintained secure cloud infrastructure across Azure and AWS',
        'Automated CI/CD pipelines with Azure DevOps and GitHub Actions',
        'Managed infrastructure as code using Terraform and Ansible',
        'Deployed and optimized machine learning/LLM workflows in GPU environments',
        'Integrated MLflow for model tracking and end-to-end MLOps support',
        'Focused on automation, configuration management, and cloud-native practices'
      ]
    },
    {
      position: 'System Administrator',
      company: 'National Science & Technology Park',
      period: 'Nov 2021 - Mar 2023',
      description: [
        'Managed Linux and Windows server infrastructure for 500+ users',
        'Implemented virtualization solutions using VMware ESXi and Hyper-V',
        'Configured and maintained networking services (DHCP, DNS, Active Directory)',
        'Deployed and managed web servers (Apache, Nginx, Litespeed)',
        'Implemented security measures and handled system backups',
        'Provided technical support and troubleshooting for IT infrastructure'
      ]
    },
    {
      position: 'IT Support Specialist',
      company: 'Freelance',
      period: 'Jan 2020 - Oct 2021',
      description: [
        'Provided technical support and IT solutions for various clients',
        'Set up and configured small business networks and systems',
        'Performed hardware and software troubleshooting',
        'Implemented basic security measures and data backup solutions',
        'Assisted with website hosting and management'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-400">
      <div className="container-custom">
        <SectionTitle 
          title="Work Experience"
          subtitle="My professional journey and key responsibilities in previous roles."
        />
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              position={exp.position}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              isLast={index === experiences.length - 1}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;