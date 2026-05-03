import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import img1 from "@/assets/multifind.png";
import img2 from "@/assets/ocr.png";
import img3 from "@/assets/react-api.png";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", "AI / Machine Learning", "Full-stack Development", "Computer Vision"];

  const projects = [
    {
      id: 1,
      title: "MultiFinder: Bulk Media Analysis Engine",
      category: "AI / Machine Learning",
      description:
        "Engineered a high-throughput bulk media analysis platform using Python and Flask, capable of concurrently processing 2000+ URLs to deliver near real-time insights for PR and competitive intelligence teams. Implemented an asynchronous request pipeline with intelligent rate limiting to maximize throughput while respecting source constraints, and built a keyword-based contextual relevance filter that dramatically reduces noise from off-topic articles. Integrated a live Google News RSS aggregation layer to surface emerging trends as they break, and exposed clean, well-documented APIs that downstream dashboards consume to power market sentiment analysis at scale.",
      imageUrl: img1,
      year: "2026",
      stack: ["Python", "Flask", "Google News RSS", "Async Processing"],
      liveUrl: "https://multifinder.vercel.app/",
    },
    {
      id: 2,
      title: "Optical Character Recognition Model",
      category: "Computer Vision",
      description:
        "Designed and shipped an end-to-end OCR system in Python using Tesseract, augmented with a custom OpenCV preprocessing pipeline (binarization, deskew, denoising, adaptive thresholding) that materially boosted recognition accuracy on noisy, low-quality scans. Built scalable REST APIs to support batch document processing for enterprise workloads, and packaged the model behind a clean React frontend so non-technical users can extract structured text from images and PDFs in seconds, eliminating hours of manual data entry per document set.",
      imageUrl: img2,
      year: "2025",
      stack: ["Python", "Tesseract", "OpenCV", "REST APIs", "React"],
      liveUrl: "https://frontend-ten-mu-17.vercel.app/",
    },
    {
      id: 3,
      title: "React API Web App",
      category: "Full-stack Development",
      description:
        "Built a production-grade full-stack web application on the MERN stack (MongoDB, Express, React, Node.js) engineered for efficient data handling and rich, dynamic user interactions. Architected modular, RESTful APIs with proper validation and error handling, optimized MongoDB queries with indexing for fast reads at scale, and implemented a responsive React frontend with smooth state management and lazy-loaded routes for excellent perceived performance. Deployed on Netlify with CI-driven builds, delivering a seamless and reliable experience end-to-end.",
      imageUrl: img3,
      year: "2024",
      stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      liveUrl: "https://react-apoi.netlify.app/",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className={`max-w-3xl ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
            Selected Work
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Projects that ship real impact.
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A curated selection of work spanning AI tooling, computer vision, and
            full-stack engineering, built end-to-end and shipped to production.
          </p>
        </div>

        {/* Filter Categories */}
        <div
          className={`mb-12 flex flex-wrap gap-2 ${
            isLoaded ? "animate-fade-in delay-300" : "opacity-0"
          }`}
        >
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group flex flex-col ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="overflow-hidden rounded-2xl mb-5 bg-gray-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-medium leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 mt-1">{project.category}</p>
                </div>
                <span className="text-sm text-gray-400 shrink-0 mt-1">
                  {project.year}
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Live Demo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-4">
            Want a closer look at the code or want to collaborate on something new?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="mailto:naugaintushar@gmail.com">Get in touch</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <a
                href="https://github.com/TusharNaugain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
