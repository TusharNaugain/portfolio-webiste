
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import img4 from "./image4.png";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    "UI/UX Design", "Full Stack Devloper", "ML Intern"
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 mb-6">
          My name is Tushar, and I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science Engineering (CSE) with a specialization in Artificial Intelligence and Machine Learning (AI/ML) from Polaris School of Technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full px-6">
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href="#" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"></div>
            <div className="absolute inset-0 p-6">
              <img 
                src={img4} 
                alt="Portrait" 
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className={`mb-20 ${isLoaded ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          <h2 className="text-3xl font-serif font-bold mb-10">Experience</h2>
          
          <div className="space-y-12">
            {[
              {
                role: "Full Stack Developer Intern",
                company: "Atraski",
                period: "2025 jan - April",
                description: "Led the design team in creating innovative digital experiences for various clients across different industries."
              },
              {
                role: "AI Intern",
                company: "Miracle Foundation",
                period: "2025 April - june",
                description: "Designed user interfaces and experiences for web and mobile applications, collaborating closely with development teams."
              }

            ].map((job, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 border-b border-gray-100 pb-12">
                <div>
                  <p className="text-gray-400">{job.period}</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">{job.role}</h3>
                  <p className="text-blue-600 mb-3">{job.company}</p>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={`mb-20 ${isLoaded ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
          <h2 className="text-3xl font-serif font-bold mb-10">Education</h2>
          
          <div className="space-y-12">
            {[
              {
  degree: "Class X",
  school: "Army Public School(Ranikhet)",
  period: "2020 - 2021",
  Percentage: "83.4%",
  
},
              {
  degree: "Class XII",
  school: "Army Public School(Chennai)",
  period: "2022 - 2023",
  Percentage: "78.9%",
  
},
          {
  degree: "Bachelor Of Technology Computer Science Engineering(AI/ML)",
  school: "Polaris School of Technology",
  period: "2023 - 2027",
},




            
            ].map((edu, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 border-b border-gray-100 pb-12">
                <div>
                  <p className="text-gray-400">{edu.period}</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                  <p className="text-blue-600 mb-3">{edu.school}</p>
                  {/* <p className="text-gray-600">{edu.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <section className={`text-center ${isLoaded ? 'animate-fade-in delay-700' : 'opacity-0'}`}>
          <h2 className="text-2xl font-serif font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            I'm currently available for freelance work and exciting opportunities.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 flex items-center gap-2 mx-auto">
            <Link to="/contact">
              Let's connect 
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default About;
