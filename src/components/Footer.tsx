
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="text-xl font-serif font-bold inline-block mb-4">
              Portfolio<span className="text-blue-600">.</span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs">
              Creating meaningful digital experiences through thoughtful design and development.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/work" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Work</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/NaugainTushar" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-colors" aria-label="Twitter">
                X
              </a>
              <a href="https://www.instagram.com/_tushar_naugain_/" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-colors" aria-label="Instagram">
                IG
              </a>
              <a href="https://www.linkedin.com/in/tushar-kumar-aa3152292/" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-colors" aria-label="LinkedIn">
                IN
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
