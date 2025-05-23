
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import  img1  from "./picture1.png";
import  img2  from "./Picture2.png";
import  img3  from "./Picture3.png";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", "Web Design", "UX/UI", , "Full-stack Development"];

  const projects = [
    {
  id: 1,
  title: "React API APP",
  category: "Full-stack Development",
  description: "I developed a fully responsive web application using React.js, designed to handle dynamic user interactions efficiently. Integrated MongoDB for structured data storage, allowing seamless database operations. Implemented RESTful APIs using Node.js and Express, enabling fast and optimized request-response cycles.",
  imageUrl: img1,
  year: "2024"
}
,
    {
      id: 2,
      title: "Carzuu APP",
      category: "Full-stack Development",
      description: "A App where everyone can buy and sell cars. I developed a fully responsive web application using React.JS, designed to handle dynamic user interactions efficiently. Integrate MongoDB for structured data storage, allowing seamless database operations. Implemented RESTful APIs using Nodejs anExpress, enabling fast and optimized request-response cycles.",
      imageUrl: img2,
      year: "2024"
    },
    {
      id: 3,
      title: "Prompt Versioning and Management System",
      category: "Full-stack Development",
      description: "Built a responsive full-stack web application using React.js and Tailwind CSS for an intuitive and clean user interface. Developed backend services with Node.js and Express.js to manage prompt versioning, history tracking, and collaborative updates. Implemented secure user authentication using JWT, and utilized MongoDB Atlas for flexible, cloud-based storage of users, prompts, and version data. Deployed the frontend on Vercel and the backend on Render, ensuring fast and reliable performance.",
      imageUrl: img3,
      year: "2024"
    },
    
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className={`max-w-3xl ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            My Work
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A selection of projects I've worked on across various industries and disciplines.
          </p>
        </div>

        {/* Filter Categories */}
        <div className={`mb-12 flex flex-wrap gap-2 ${isLoaded ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.category}</p>
                </div>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="mailto:contact@example.com">Contact me for more examples</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Work;
