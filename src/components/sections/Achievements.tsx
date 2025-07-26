import React from 'react';
import { Award, Clock, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import MetricCard from '../ui/MetricCard';

const Achievements: React.FC = () => {
  const metrics = [
    {
      icon: <Award size={24} />,
      value: 2,
      suffix: '',
      label: 'Best Employee Awards'
    },
    {
      icon: <Users size={24} />,
      value: 10,
      suffix: '+',
      label: 'Leadership Positions'
    },
    {
      icon: <Clock size={24} />,
      value: 5,
      suffix: '+',
      label: 'Certifications Completed'
    },
    {
      icon: <Award size={24} />,
      value: 15,
      suffix: '+',
      label: 'Projects Completed'
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-dark-400">
      <div className="container-custom">
        <SectionTitle 
          title="Key Achievements"
          subtitle="Recognition and accomplishments throughout my academic and professional journey."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={index}
            />
          ))}
        </div>
        
        <div className="mt-16 card">
          <h3 className="text-xl font-bold mb-6 gradient-text">Notable Accomplishments</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-primary-400">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Early Warning System Development</h4>
                <p className="text-slate-400">
                  Developed a real-time early warning system using rule-based logic and AI modules, 
                  integrating TimescaleDB for efficient time-series data handling.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-primary-400">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">PCB Design Excellence</h4>
                <p className="text-slate-400">
                  Recognized as Best Employee at Pakistan Detector Technologies for excellence in PCB design, 
                  optimization, and documentation of complex circuit boards.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-primary-400">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Robotics & AI Innovation</h4>
                <p className="text-slate-400">
                  Implemented advanced navigation algorithms for robotics, including Bug algorithms, 
                  Potential Field methods, and RRT with Kalman Filtering for trajectory optimization.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-primary-400">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Leadership & Community Impact</h4>
                <p className="text-slate-400">
                  Founded Rafsan e Subh Foundation and served as General Secretary at IEEE IST, 
                  demonstrating strong leadership and community engagement abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;