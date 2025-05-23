import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import  img1  from "./picture1.png";
import  img2  from "./Picture2.png";
import  img3  from "./Picture3.png";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "React API APP",
      category: "Full-stack Development",
      imageUrl: img1,
    },
    {
      id: 2,
      title: "Carzuu APP",
      category: "Full-stack Development",
      imageUrl: img2,
    },
    {
      id: 3,
      title: "Prompt Versioning and Management System",
      category: "Full Stack",
      imageUrl: img3,
    },
  ];

  const skills = ["Python", "Java", "JavaScript", "MERN Stack", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 animate-fade-in">
            Hi, I'm Tushar
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto animate-fade-in delay-200">
            I'm a passionate Full-stack Developer and Data Analyst specializing in MERN stack, AI, and visualization tools.
          </p>
          <div className="mt-8 space-x-4 animate-fade-in delay-400">
            <Button asChild className="rounded-full px-6">
              <Link to="/work">My Projects</Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full px-6">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-10">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full bg-blue-100 text-blue-800 font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ${
                  isLoaded ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-500 mb-4">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="ghost" asChild className="group">
              <Link to="/work">
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-serif font-bold mb-6">Interested in collaborating?</h2>
          <p className="text-lg text-blue-100 max-w-lg mx-auto mb-8">
            Whether you have a project idea or just want to chat, I'd love to hear from you.
          </p>
          <Button asChild className="rounded-full px-6 bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">Let's Connect</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;