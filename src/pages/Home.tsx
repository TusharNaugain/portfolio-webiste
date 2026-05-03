import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import img1 from "@/assets/multifind.png";
import img2 from "@/assets/ocr.png";
import img3 from "@/assets/react-api.png";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "MultiFinder",
      category: "Bulk Media Analysis Engine",
      summary:
        "Python + Flask engine processing 2000+ URLs concurrently with keyword filtering and live Google News RSS aggregation.",
      imageUrl: img1,
      liveUrl: "https://multifinder.vercel.app/",
    },
    {
      id: 2,
      title: "OCR Model",
      category: "Computer Vision",
      summary:
        "Tesseract-powered OCR with an OpenCV preprocessing pipeline and scalable APIs for batch document processing.",
      imageUrl: img2,
      liveUrl: "https://frontend-ten-mu-17.vercel.app/",
    },
    {
      id: 3,
      title: "React API Web App",
      category: "Full-stack (MERN)",
      summary:
        "Production MERN application with optimized REST APIs and a polished React frontend for dynamic data interactions.",
      imageUrl: img3,
      liveUrl: "https://react-apoi.netlify.app/",
    },
  ];

  const skills = [
    "Python",
    "JavaScript",
    "Java",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "Pandas",
    "NumPy",
    "Tesseract / OpenCV",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-4 animate-fade-in">
              Full-Stack Developer · AI / ML Engineer
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in">
              Hi, I'm <span className="text-blue-600">Tushar Kumar</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
              I design and ship production-grade web platforms and AI systems
              from MERN applications to data-driven analytics tools used by real
              teams.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in delay-400">
              <Button asChild className="rounded-full px-8 py-6 text-base">
                <Link to="/work">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full px-8 py-6 text-base"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="mt-12 flex justify-center gap-6 animate-fade-in delay-500">
              <a
                href="https://github.com/TusharNaugain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-n-aa3152292/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:naugaintushar@gmail.com"
                aria-label="Email"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
              Toolkit
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Technologies I work with
            </h2>
            <p className="text-lg text-gray-600">
              A focused stack covering both ends of modern product engineering,
              from data pipelines to polished user interfaces.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm shadow-sm hover:bg-blue-100 transition-colors"
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
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Selected Projects
            </h2>
            <p className="text-lg text-gray-600">
              A few things I've built recently, each shipped end-to-end and
              optimized for real-world use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                  isLoaded ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium tracking-wider uppercase text-blue-600 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-14">
            <Button variant="ghost" asChild className="group">
              <Link to="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
            I'm currently open to freelance work, internships, and full-time
            opportunities. Let's build something worth shipping.
          </p>
          <Button
            asChild
            className="rounded-full px-8 py-6 text-base bg-white text-blue-600 hover:bg-blue-50"
          >
            <Link to="/contact">Let's Connect</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
