import React, { useState, useEffect } from 'react';
import { 
  Search, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart3, 
  Rocket,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Users,
  Award,
  Globe
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-choose', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Google Ads (PPC Marketing)",
      description: "Reach your customers at the exact moment they are searching for your product or service.",
      details: ["Search Ads", "Display Ads", "Shopping Ads", "Remarketing"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Meta Ads (Facebook & Instagram)",
      description: "Be where your audience spends the most time – social media.",
      details: ["Facebook Campaigns", "Instagram Promotions", "Lead Generation Ads", "Retargeting"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO (Search Engine Optimization)",
      description: "Ranking on Google is not luck – it's strategy.",
      details: ["On-Page SEO", "Off-Page SEO & Link Building", "Local SEO for Indore Businesses", "Technical SEO"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Marketing",
      description: "We don't believe in guesswork. Every rupee you spend is tracked and optimized.",
      details: ["Data-Driven Campaigns", "Conversion Rate Optimization", "Analytics & Tracking", "ROI-focused Marketing"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Growth Hacking",
      description: "Why play safe when you can grow faster? Scale quickly and stand out from competition.",
      details: ["Viral Campaigns", "Funnel Optimization", "Automation Tools", "Experimentation Strategies"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    { icon: <Award className="w-6 h-6" />, text: "Proven Results with 10+ Clients in Different Industries" },
    { icon: <Target className="w-6 h-6" />, text: "ROI-Focused Digital Campaigns" },
    { icon: <Users className="w-6 h-6" />, text: "Custom Strategies for Every Business" },
    { icon: <BarChart3 className="w-6 h-6" />, text: "Transparent Reporting & Analytics" },
    { icon: <MapPin className="w-6 h-6" />, text: "Based in Indore, Trusted Across India" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Technogen
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'services', 'why-choose', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item
                        ? 'text-cyan-400 bg-gray-800'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {['home', 'about', 'services', 'why-choose', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technogen
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-300">
                Digital Marketing Agency
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
              in Indore
            </p>
            <p className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Your Growth Partner in the Digital World
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We don't just run ads – we create growth stories. Turn every click into a customer, 
              and every campaign into measurable growth with data-backed strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Growth Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Performance-Driven Digital Marketing
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Technogen, we don't just run ads – we create growth stories. Based in Indore, 
                we are a performance-driven digital marketing agency helping businesses of all sizes 
                scale faster with data-backed strategies and creative execution.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our mission is simple: turn every click into a customer, and every campaign into 
                measurable growth. Whether you're a startup, a local business, or an established brand, 
                our team ensures you get maximum ROI from your digital presence.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">ROI Focused</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Rocket className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Growth Focused</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Data Driven</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Target className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Result Oriented</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Quality First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Google Ads to Growth Hacking, we offer comprehensive digital marketing solutions 
              tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose Technogen?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your business deserves more than just marketing – it deserves real growth. 
              We focus on sales, leads, and brand authority.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Grow Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's start building your success story with 
              the most result-driven digital marketing agency in Indore.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>
              <div className="space-y-6">
                <a 
                  href="tel:+916265015602"
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Call us</div>
                    <div className="text-lg font-semibold text-white">+91 6265015602</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:akash01dm@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email us</div>
                    <div className="text-lg font-semibold text-white">akash01dm@gmail.com</div>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-lg font-semibold text-white">Indore, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <h4 className="text-xl font-bold mb-6 text-center text-white">
                  Ready to Start Your Growth Journey?
                </h4>
                <div className="text-center">
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Don't stop at clicks, likes, or impressions – let's focus on sales, 
                    leads, and brand authority. Contact us today for a free consultation.
                  </p>
                  <a 
                    href="tel:+916265015602"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now for Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
              Technogen
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p className="mb-2">© 2025 Technogen Digital Marketing Agency</p>
              <p className="flex items-center justify-center md:justify-end">
                <Globe className="w-4 h-4 mr-1" />
                Based in Indore, Trusted Across India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;