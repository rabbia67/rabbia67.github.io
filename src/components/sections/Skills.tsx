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
    { label: 'Linux System Administration', percentage: 95 },
    { label: 'Cloud Platforms (AWS, Azure, GCP)', percentage: 90 },
    { label: 'CI/CD Pipelines', percentage: 90 },
    { label: 'Infrastructure as Code', percentage: 85 },
    { label: 'Virtualization', percentage: 90 },
    { label: 'MLOps & LLM Deployment', percentage: 85 },
  ];

  const tools = [
    { label: 'Docker', percentage: 90 },
    { label: 'Terraform', percentage: 85 },
    { label: 'Ansible', percentage: 90 },
    { label: 'GitHub Actions', percentage: 90 },
    { label: 'Azure DevOps', percentage: 85 },
    { label: 'Prometheus/Grafana', percentage: 80 },
  ];

  const terminalCommands = [
    'ansible-playbook deploy.yml -i inventory',
    'terraform apply -auto-approve',
    'docker run --gpus all -d llama-cpp',
    'az vm list --output table',
    'git push origin main'
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionTitle 
          title="Technical Skills"
          subtitle="A comprehensive overview of my technical expertise and proficiency levels."
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