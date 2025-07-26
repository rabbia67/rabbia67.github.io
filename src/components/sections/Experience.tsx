import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI Developer',
      company: 'Center of Artificial Intelligence and Computing, NASTP',
      period: 'July 2023 - Present',
      description: [
        'Developed real-time early warning system using rule-based logic and AI modules',
        'Designed and implemented PostgreSQL database with TimescaleDB for time-series data',
        'Built GIS-based application interface for visualizing alerts and real-time data overlays',
        'Collaborated on full-cycle development from data ingestion to deployment',
        'Integrated AI modules with existing systems for enhanced functionality',
        'Implemented robust testing and validation procedures for AI systems'
      ]
    },
    {
      title: 'PCB Design Engineer',
      company: 'Pakistan Detector Technologies Pvt. Ltd',
      period: 'August 2022 - July 2023',
      description: [
        'Designed and developed optimized PCB layouts for performance and manufacturability',
        'Conducted design reviews and implemented revisions based on feedback',
        'Generated comprehensive documentation for PCB fabrication and assembly',
        'Performed detailed routing and layout using industry-standard EDA tools',
        'Analyzed and resolved design-related issues during development',
        'Supported functional testing and troubleshooting of PCBs'
      ]
    },
    {
      title: 'Sales Coordinator',
      company: 'Zeests.com',
      period: 'Oct 2021 - July 2022',
      description: [
        'Analyzed customer shopping data to identify potential leads',
        'Managed website and social media accounts for product visibility',
        'Responded to customer inquiries and resolved product issues',
        'Wrote product descriptions for Shopify-based storefront',
        'Collected feedback and prepared feasibility reports'
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