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
      title: 'Frontend Development',
      description: 'HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js'
    },
    {
      icon: <Server size={24} />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design, User Experience, Wireframing'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Version Control',
      description: 'Git, GitHub, GitLab, Collaborative Development'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Web Performance',
      description: 'Performance Optimization, SEO, Web Vitals, Analytics'
    },
    {
      icon: <Database size={24} />,
      title: 'State Management',
      description: 'Redux, Context API, React Query, Local Storage'
    },
    {
      icon: <Shield size={24} />,
      title: 'Modern Tools',
      description: 'Tailwind CSS, Material-UI, Styled Components, Modern Web APIs'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-400">
      <div className="container-custom">
        <SectionTitle 
          title="About Me"
          subtitle="Frontend Developer passionate about creating beautiful and intuitive web experiences"
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
                As an Electrical Engineer turned AI Developer, I bring a unique blend of hardware and software expertise 
                to complex technical challenges. With a strong foundation in machine learning, deep learning, and robotics, 
                I develop innovative solutions that push the boundaries of artificial intelligence.
              </p>
              <p>
                My expertise spans across implementing intelligent algorithms, developing GIS applications, and creating 
                real-time early warning systems. I'm proficient in multiple programming languages including Python, C++, 
                and working with frameworks like TensorFlow, PyTorch, and ROS for robotics development.
              </p>
              <p>
                Currently based in Islamabad, Pakistan, I combine my electrical engineering background with cutting-edge AI 
                technologies to create impactful solutions. My experience includes PCB design, robotics simulation, and 
                developing AI-powered applications for real-world challenges.
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