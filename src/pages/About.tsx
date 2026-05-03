import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import img4 from "@/assets/profile.png";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const focusAreas = [
    "Full-Stack Development",
    "AI / Machine Learning",
    "Data Analytics",
    "UI / UX Design",
  ];

  const experience = [
    {
      role: "Product Analyst Intern",
      company: "Wizikey",
      period: "Jan 2026 to Apr 2026",
      description:
        "Built a scalable MultiFind system capable of processing 2000+ media links concurrently with automated relevance filtering, significantly reducing manual analysis effort. Designed a real-time news aggregation pipeline using Google News RSS to track emerging trends, and developed interactive dashboards in Apache Superset to convert raw media data into actionable insights for PR and competitive analysis.",
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Independent",
      period: "2026 to Present",
      description:
        "Develop and deploy production-ready web solutions including mjskywayglobal.com, focusing on responsive UI and scalable backend architecture. Deliver end-to-end engagements, from requirement analysis and design to deployment and post-launch optimization, ensuring strong performance and a seamless user experience.",
    },
    {
      role: "AI Intern",
      company: "Miracle Foundation India",
      period: "Apr 2025 to Jun 2025",
      description:
        "Collaborated with the data science team to build and fine-tune machine learning models focused on child welfare tracking. Preprocessed real-world demographic and case data using Python, Pandas, and NumPy to enhance model performance, contributing to data-driven insights that improved interventions and decision-making in child development programs.",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science (AI / ML)",
      school: "Polaris School of Technology, Gurgaon",
      period: "Aug 2023 to Present",
      detail: "Specialization in Artificial Intelligence and Machine Learning.",
    },
    {
      degree: "CBSE Class XII",
      school: "Army Public School, Chennai",
      period: "Apr 2022 to Mar 2023",
      detail: "Scored 78% in the senior secondary board examination.",
    },
    {
      degree: "CBSE Class X",
      school: "Army Public School, Ranikhet",
      period: "Apr 2020 to Mar 2021",
      detail: "Scored 83% in the secondary school board examination.",
    },
  ];

  const openSource = [
    {
      name: "GirlScript Summer of Code 2024",
      detail:
        "Contributed to multiple open-source repositories, improving codebases, fixing bugs, and collaborating with maintainers across the program.",
    },
    {
      name: "Hacktoberfest 2024",
      detail:
        "Completed 5+ successful pull requests across diverse projects, demonstrating consistent open-source collaboration and code quality.",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
            isLoaded ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div>
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Engineer building useful things at the intersection of web and AI.
            </h1>
            <p className="text-lg text-gray-600 mb-5 leading-relaxed">
              I'm Tushar Kumar, a Computer Science (AI / ML) undergraduate at
              Polaris School of Technology, currently working as a Product Analyst
              Intern at Wizikey and freelancing as a full-stack developer.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I enjoy turning ambiguous problems into shipped products, whether
              that's a Flask service crunching 2000+ media links, an OCR pipeline
              automating document workflows, or a polished MERN application built
              for real users. I care about clean architecture, performance, and
              shipping work I'd be happy to use myself.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {focusAreas.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
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
                <a
                  href="https://github.com/TusharNaugain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"></div>
            <div className="absolute inset-0 p-6">
              <img
                src={img4}
                alt="Tushar Kumar"
                className="object-cover w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section
          className={`mb-24 ${
            isLoaded ? "animate-fade-in delay-300" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Where I've worked
            </h2>
          </div>

          <div className="space-y-10">
            {experience.map((job, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 border-b border-gray-100 pb-10"
              >
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {job.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
                  <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section
          className={`mb-24 ${
            isLoaded ? "animate-fade-in delay-500" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Academic background
            </h2>
          </div>

          <div className="space-y-10">
            {education.map((edu, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 border-b border-gray-100 pb-10"
              >
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {edu.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium mb-3">{edu.school}</p>
                  <p className="text-gray-600 leading-relaxed">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section
          className={`mb-24 ${
            isLoaded ? "animate-fade-in delay-500" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
              Open Source
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Community contributions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openSource.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <section
          className={`text-center ${
            isLoaded ? "animate-fade-in delay-700" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-serif font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            I'm currently available for freelance projects, internships, and
            full-time opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 inline-flex items-center gap-2"
          >
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
