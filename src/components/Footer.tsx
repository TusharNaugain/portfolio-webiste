import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Code, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "GitHub", url: "https://github.com/TusharNaugain", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tushar-n-aa3152292/",
      icon: Linkedin,
    },
    { name: "Twitter", url: "https://x.com/NaugainTushar", icon: Twitter },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/naugaintushar/",
      icon: Code,
    },
    { name: "Email", url: "mailto:naugaintushar@gmail.com", icon: Mail },
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link
              to="/"
              className="text-xl font-serif font-bold inline-block mb-4"
            >
              Tushar Kumar<span className="text-blue-600">.</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
              Full-Stack Developer & AI / ML Engineer building thoughtful,
              production-grade products end-to-end.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.name}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-500 mt-4">New Delhi, India</p>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-500">
            © {currentYear} Tushar Kumar. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed & built with React, Tailwind, and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
