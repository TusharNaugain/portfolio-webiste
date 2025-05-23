
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className={`max-w-3xl mx-auto text-center mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isLoaded ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`${isLoaded ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
            <div className="bg-gray-50 p-8 rounded-2xl h-full">
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">naugaintushar@example.com</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="font-medium">+91 8178788995</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Based in</p>
                  <p className="font-medium">
                    New Delhi
                  </p>
                </div>
                
              <div>
  <p className="text-sm text-gray-500 mb-3">Connect</p>
  <div className="flex space-x-4">
    {[
      { name: "Twitter", url: "https://x.com/NaugainTushar" },
      { name: "Instagram", url: "https://www.instagram.com/_tushar_naugain_/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/tushar-kumar-aa3152292/" }
    ].map((platform) => (
      <a
        key={platform.name}
        href={platform.url}
        className="text-sm hover:text-blue-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {platform.name}
      </a>
    ))}
  </div>
</div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Availability</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="font-medium">Available for new projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Contact;
