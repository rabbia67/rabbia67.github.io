import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import SectionTitle from '../ui/SectionTitle';
import { Server, Cloud, Database, GitBranch, LineChart, Shield } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertise = [
    {
      icon: <Cloud size={24} />,
      title: 'Cloud & Infrastructure',
      description: 'AWS, Azure, GCP, Linux, Windows Server, VMware ESXi, Hyper-V'
    },
    {
      icon: <Server size={24} />,
      title: 'Containerization',
      description: 'Docker, Singularity, Virtualization, System Administration'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'CI/CD & MLOps',
      description: 'Azure DevOps, GitHub Actions, GitLab CI/CD, MLflow, LLM Deployment'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Monitoring & Security',
      description: 'Prometheus, Grafana, ELK Stack, SSL/TLS, McAfee, Kaspersky'
    },
    {
      icon: <Database size={24} />,
      title: 'Automation & IaC',
      description: 'Ansible, Terraform, Configuration Management, Scripting (Python, Bash)'
    },
    {
      icon: <Shield size={24} />,
      title: 'Web & Network',
      description: 'Apache, Nginx, Litespeed, TCP/IP, DNS, Load Balancing, DHCP'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-400">
      <div className="container-custom">
        <SectionTitle 
          title="About Me"
          subtitle="DevOps Engineer specializing in Linux system administration, cloud platforms, and infrastructure automation."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="order-2 lg:order-1"
          >
            <div className="space-y-4 text-slate-300">
              <p>
                As a DevOps Engineer with solid expertise in Linux system administration, Windows Server, VMware ESXi, and cloud platforms 
                such as Azure and AWS, I bring comprehensive skills to streamline operations and maintain infrastructure.
              </p>
              <p>
                I'm proficient in automating CI/CD pipelines using GitHub Actions and Azure DevOps, with a strong emphasis on infrastructure 
                as code, system reliability, and cloud scalability. My experience includes supporting AI/ML workflows, including model 
                deployment, monitoring, and GPU-accelerated environments.
              </p>
              <p>
                Currently based in Rawalpindi, Pakistan, I'm focused on streamlining operations while maintaining performance, security, 
                and efficiency across infrastructure. My goal is to leverage cutting-edge technologies to solve complex problems and 
                improve system reliability.
              </p>
              
              <div className="pt-4">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="btn-primary inline-block cursor-pointer"
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="text-primary-400 mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;