import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DesignoHubLanding = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({ users: 0, palettes: 0, components: 0 });

  // Animated stats counter
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users < 12457 ? prev.users + 47 : 12457,
        palettes: prev.palettes < 89234 ? prev.palettes + 89 : 89234,
        components: prev.components < 45678 ? prev.components + 45 : 45678,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer at TechCorp",
      content:
        "These tools have revolutionized our design workflow. The typography scale generator alone saved us hours of manual calculations.",
      avatar: "👩‍💻",
    },
    {
      name: "Marcus Rodriguez",
      role: "Frontend Developer",
      content:
        "The component library and design system builder helped us maintain consistency across our entire application. Incredible value!",
      avatar: "👨‍💻",
    },
    {
      name: "Emily Watson",
      role: "Creative Director",
      content:
        "Our team's productivity increased by 40% after implementing these design tools. The color palette generator is magical!",
      avatar: "👩‍🎨",
    },
  ];

  const tools = [
    {
      icon: "🎨",
      link: "/palette-generator",
      title: "Color Palette Generator",
      description:
        "Create harmonious color schemes with mathematical precision. Perfect for branding and UI design.",
      features: [
        "Complementary colors",
        "Analogous schemes",
        "Triadic palettes",
        "Monochromatic scales",
      ],
      gradient: "from-purple-500 to-pink-500",
      path: "/color-generator",
    },
    {
      icon: "🔤",
      link: "/typography-scale",
      title: "Typography Scale Generator",
      description:
        "Build perfect typography systems with modular scales and proper line heights.",
      features: [
        "Mathematical ratios",
        "CSS export",
        "Live preview",
        "Responsive scales",
      ],
      gradient: "from-blue-500 to-cyan-500",
      path: "/typography-scale",
    },
    {
      icon: "📐",
      link: "/spacing-scale-generator",
      title: "Spacing Scale Generator",
      description:
        "Create consistent spacing systems for margins, padding, and layout harmony.",
      features: [
        "Base unit control",
        "Scale ratios",
        "CSS variables",
        "Utility classes",
      ],
      gradient: "from-green-500 to-emerald-500",
      path: "/spacing-scale",
    },
    {
      icon: "🔄",
      title: "CSS Gradient Generator",
      link: "/css-gradient-generator",
      description:
        "Design beautiful gradients with intuitive controls and real-time preview.",
      features: [
        "Linear & radial gradients",
        "Color stop controls",
        "Angle adjustment",
        "Popular presets",
      ],
      gradient: "from-orange-500 to-red-500",
      path: "/gradient-generator",
    },
    {
      icon: "📱",
      title: "UI Component Showcase",
      link: "/component-showcase",
      description:
        "Copy-paste ready components built with Tailwind CSS for rapid development.",
      features: [
        "Buttons & forms",
        "Cards & layouts",
        "Responsive design",
        "Production ready",
      ],
      gradient: "from-indigo-500 to-purple-500",
      path: "/components",
    },
    {
      icon: "🎯",
      title: "Design System Builder",
      link: "/design-system-builder",
      description:
        "Create complete design systems with custom tokens, components, and guidelines.",
      features: [
        "Design tokens",
        "Component library",
        "CSS & JS export",
        "Documentation ready",
      ],
      gradient: "from-rose-500 to-pink-500",
      path: "/design-system-builder",
    },
    {
      icon: "📝",
      title: "Content Generator",
      link: "/para-generator",
      description:
        "Generate beautiful placeholder content for your designs and prototypes.",
      features: [
        "Words & paragraphs",
        "Custom length",
        "Design-focused text",
        "Multiple formats",
      ],
      gradient: "from-teal-500 to-blue-500",
      path: "/content-generator",
    },
    {
      icon: "✨",
      title: "More Tools Coming",

      description:
        "We're constantly adding new design tools to help you work faster and smarter.",
      features: [
        "Icon generator",
        "Layout builder",
        "Animation tools",
        "Accessibility checker",
      ],
      gradient: "from-gray-500 to-slate-500",
      path: "/coming-soon",
      tryNow: "disabled",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Build Beautiful Designs
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Faster Than Ever
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              The complete toolkit for modern designers and developers. Create
              stunning designs, generate perfect code, and maintain consistency
              across all your projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/all-tools"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                🚀 Explore All Tools
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                {
                  number: stats.users.toLocaleString(),
                  label: "Designers & Developers",
                },
                {
                  number: stats.palettes.toLocaleString(),
                  label: "Color Palettes Generated",
                },
                {
                  number: stats.components.toLocaleString(),
                  label: "Components Created",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}+
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </section>

      {/* Ad Placement 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

      {/* Tools Grid */}
      <section id="tools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Design Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to design, prototype, and build amazing
              digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {tool.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tool.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tool.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  aria-disabled={tool.tryNow == "disabled"}
                  to={tool.link}
                  className={`w-full ${
                    tool.tryNow == "disabled"
                      ? "bg-gray-500 disabled text-white"
                      : "hover:bg-gradient-to-r bg-gray-100  hover:text-white text-gray-700 hover:from-purple-600 hover:to-blue-600"
                  }  py-3 px-4 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg`}
                >
                  Try Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Designers Love Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with care for the design community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: "⚡",
                    title: "Lightning Fast",
                    description:
                      "Generate designs and code in seconds, not hours. Our tools are optimized for speed and efficiency.",
                  },
                  {
                    icon: "🎯",
                    title: "Pixel Perfect",
                    description:
                      "Every tool produces production-ready, precise results that follow design best practices.",
                  },
                  {
                    icon: "🔄",
                    title: "Real-time Preview",
                    description:
                      "See changes instantly with live previews that update as you adjust settings.",
                  },
                  {
                    icon: "📋",
                    title: "Copy & Paste Ready",
                    description:
                      "Get clean, optimized code that you can directly use in your projects.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Mockup of a tool */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg h-8"></div>
                    <div className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg h-8"></div>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 opacity-80"
                        style={{ opacity: 0.7 + i * 0.05 }}
                      ></div>
                    ))}
                  </div>

                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-sm font-mono text-gray-700">
                      background: linear-gradient(135deg, #667eea, #764ba2);
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold">
                    Copy CSS
                  </button>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement 2 */}

      {/* Testimonials */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Design Workflow?
          </h2>

          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of designers and developers creating amazing work
            with our tools. Everything is completely free forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={"/all-tools"}
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            >
              🚀 Start Creating Now
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              📚 View Documentation
            </button>
          </div>

          <p className="text-purple-200 text-sm mt-6">
            No credit card required • Free forever • Instant access
          </p>
        </div>
      </section>

      {/* Footer */}

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
          <span>🎨</span>
          <Link to={"all-tools"}>Try Tools</Link>
        </button>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default DesignoHubLanding;
