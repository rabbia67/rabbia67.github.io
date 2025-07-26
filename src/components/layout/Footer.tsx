import React from 'react';
import { Link } from 'react-scroll';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronUp 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 border-t border-slate-800">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Rabbia Waheed</h2>
            <p className="text-slate-400 max-w-md">
              A highly skilled Electrical Engineer turned AI Developer with expertise in machine learning, deep learning, and innovative technical solutions. Specializing in intelligent algorithms, GIS applications, and robotics development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/rabbia67" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rabbia-waheed-02b96921a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rabbiawaheed67@gmail.com" 
                className="text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <span>Back to top</span>
              <ChevronUp size={16} />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mb-4 md:mb-0">
            <div className="flex items-center gap-1">
              <Phone size={16} className="text-slate-400" />
              <span>(+92) 317-5422867</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} className="text-slate-400" />
              <span>rabbiawaheed67@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-slate-400" />
              <span>Rawalpindi, Pakistan</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Developed by <a href="https://www.linkedin.com/in/jahangir-a-45886428a/" className="text-primary-400 hover:text-primary-300" target="_blank" rel="noopener noreferrer">Jahangir</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;