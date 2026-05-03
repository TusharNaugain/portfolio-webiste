import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code } from "lucide-react";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailto = `mailto:naugaintushar@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi Tushar,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    setTimeout(() => {
      window.location.href = mailto;
      toast.success("Opening your email client. I'll reply as soon as I can.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/TusharNaugain",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tushar-n-aa3152292/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://x.com/NaugainTushar",
      icon: Twitter,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/naugaintushar/",
      icon: Code,
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 ${
            isLoaded ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's build something together.
          </h1>
          <p className="text-xl text-gray-600">
            Whether it's a freelance build, an internship, or just a hello,
            drop a note and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div
            className={`lg:col-span-3 ${
              isLoaded ? "animate-fade-in delay-300" : "opacity-0"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
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
                    placeholder="you@example.com"
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
                  placeholder="Tell me a bit about your project, timeline, and what you'd like to build..."
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
          <div
            className={`lg:col-span-2 ${
              isLoaded ? "animate-fade-in delay-500" : "opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl h-full text-white">
              <h2 className="text-2xl font-serif font-bold mb-2">
                Contact Information
              </h2>
              <p className="text-blue-100 mb-8 text-sm">
                Prefer the direct route? Reach me through any of these channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:naugaintushar@gmail.com"
                      className="font-medium hover:underline"
                    >
                      naugaintushar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+918178788995"
                      className="font-medium hover:underline"
                    >
                      +91 81787 88995
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">
                      Location
                    </p>
                    <p className="font-medium">New Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 mt-8 pt-6">
                <p className="text-xs uppercase tracking-wider text-blue-200 mb-4">
                  Connect
                </p>
                <div className="flex gap-3">
                  {socials.map((platform) => {
                    const Icon = platform.icon;
                    return (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={platform.name}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 mt-6 pt-6">
                <p className="text-xs uppercase tracking-wider text-blue-200 mb-2">
                  Availability
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="font-medium">Open to new projects</p>
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
