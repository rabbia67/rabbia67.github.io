import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import ProgressBar from '../ui/ProgressBar';
import TerminalEffect from '../ui/TerminalEffect';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { label: 'Python & C++', percentage: 95 },
    { label: 'Machine Learning & Deep Learning', percentage: 90 },
    { label: 'Computer Vision & OpenCV', percentage: 90 },
    { label: 'GIS & QGIS Development', percentage: 85 },
    { label: 'ROS & Robotics', percentage: 85 },
    { label: 'SQL & TimescaleDB', percentage: 85 },
  ];

  const tools = [
    { label: 'TensorFlow & PyTorch', percentage: 90 },
    { label: 'Scikit-learn & NumPy', percentage: 90 },
    { label: 'Git & GitHub', percentage: 85 },
    { label: 'PCB Design Tools', percentage: 85 },
    { label: 'Power BI & Tableau', percentage: 80 },
    { label: 'Qt Framework & PyQt', percentage: 85 },
  ];

  const terminalCommands = [
    'python train_model.py --model cnn',
    'rosrun robot_nav path_planning',
    'pytest test_algorithms.py',
    'python process_timeseries.py',
    'qgis --python process_data.py'
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionTitle 
          title="Technical Skills"
          subtitle="Frontend development expertise and tools I use to create engaging web experiences."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">Core Competencies</h3>
              {technicalSkills.map((skill, index) => (
                <ProgressBar 
                  key={index}
                  label={skill.label}
                  percentage={skill.percentage}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">Tools & Technologies</h3>
              {tools.map((tool, index) => (
                <ProgressBar 
                  key={index}
                  label={tool.label}
                  percentage={tool.percentage}
                  color="from-secondary-500 to-primary-500"
                />
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 gradient-text">DevOps Expertise</h3>
              <div className="card">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Linux & Windows Server Administration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Cloud Infrastructure Design & Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Containerization & Virtualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Automated CI/CD Pipeline Configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Infrastructure as Code (IaC) Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Monitoring, Logging & Alerting Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>LLM Deployment with GPU Acceleration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Security Implementation & Compliance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">Daily Command Line</h3>
              <TerminalEffect commands={terminalCommands} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;