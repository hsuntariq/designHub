import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllToolsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const tools = [
    {
      id: "color-generator",
      link: "/palette-generator",
      name: "Color Palette Generator",
      description:
        "Create beautiful, harmonious color schemes with mathematical precision. Perfect for branding and UI design.",
      icon: "🎨",
      category: "colors",
      popularity: 95,
      difficulty: "beginner",
      lastUpdated: "2024-01-15",
      features: [
        "Complementary colors",
        "Analogous schemes",
        "Triadic palettes",
        "CSS export",
      ],
      gradient: "from-purple-500 to-pink-500",
      proTip:
        "Start with your brand primary color and generate complementary shades.",
    },
    {
      id: "typography-scale",
      link: "/typography-scale",
      name: "Typography Scale Generator",
      description:
        "Build perfect typography systems with modular scales and proper line heights. Export ready-to-use CSS.",
      icon: "🔤",
      category: "typography",
      popularity: 88,
      difficulty: "beginner",
      lastUpdated: "2024-01-12",
      features: [
        "Mathematical ratios",
        "Live preview",
        "CSS variables",
        "Responsive scales",
      ],
      gradient: "from-blue-500 to-cyan-500",
      proTip: "Use the Golden Ratio (1.618) for harmonious type scaling.",
    },
    {
      id: "spacing-scale",
      link: "/spacing-scale-generator",
      name: "Spacing Scale Generator",
      description:
        "Create consistent spacing systems for margins, padding, and layout harmony across your projects.",
      icon: "📐",
      category: "layout",
      popularity: 82,
      difficulty: "beginner",
      lastUpdated: "2024-01-10",
      features: [
        "Base unit control",
        "Scale ratios",
        "Utility classes",
        "CSS export",
      ],
      gradient: "from-green-500 to-emerald-500",
      proTip: "Start with 8px base unit for optimal divisibility.",
    },

    {
      id: "gradient-generator",
      link: "/css-gradient-generator",
      name: "CSS Gradient Generator",
      description:
        "Design beautiful CSS gradients with intuitive controls and real-time preview. Perfect for backgrounds and UI elements.",
      icon: "🔄",
      category: "colors",
      popularity: 91,
      difficulty: "beginner",
      lastUpdated: "2024-01-08",
      features: [
        "Linear & radial",
        "Color stops",
        "Angle control",
        "Popular presets",
      ],
      gradient: "from-orange-500 to-red-500",
      proTip:
        "Use subtle gradients for backgrounds to add depth without distraction.",
    },
    {
      id: "component-showcase",
      link: "/component-showcase",
      name: "UI Component Showcase",
      description:
        "Copy-paste ready components built with Tailwind CSS. Perfect for rapid prototyping and production use.",
      icon: "📱",
      category: "components",
      popularity: 87,
      difficulty: "intermediate",
      lastUpdated: "2024-01-05",
      features: [
        "Buttons & forms",
        "Cards & layouts",
        "Responsive design",
        "Production ready",
      ],
      gradient: "from-indigo-500 to-purple-500",
      proTip:
        "Customize components with your design tokens for brand consistency.",
    },

    {
      id: "content-generator",
      link: "/para-generator",
      name: "Design Content Generator",
      description:
        "Generate beautiful placeholder content for your designs and prototypes. Multiple formats and lengths available.",
      icon: "📝",
      category: "content",
      popularity: 84,
      difficulty: "beginner",
      lastUpdated: "2024-01-18",
      features: [
        "Words & paragraphs",
        "Custom length",
        "Design-focused text",
        "Multiple formats",
      ],
      gradient: "from-teal-500 to-blue-500",
      proTip:
        "Use realistic content to test your designs in real-world scenarios.",
    },
  ];

  const categories = [
    { id: "all", name: "All Tools", count: tools.length, icon: "🛠️" },
    {
      id: "colors",
      name: "Colors",
      count: tools.filter((t) => t.category === "colors").length,
      icon: "🎨",
    },
    {
      id: "typography",
      name: "Typography",
      count: tools.filter((t) => t.category === "typography").length,
      icon: "🔤",
    },
    {
      id: "layout",
      name: "Layout",
      count: tools.filter((t) => t.category === "layout").length,
      icon: "📐",
    },
    {
      id: "components",
      name: "Components",
      count: tools.filter((t) => t.category === "components").length,
      icon: "📱",
    },
    {
      id: "system",
      name: "Design Systems",
      count: tools.filter((t) => t.category === "system").length,
      icon: "🎯",
    },
    {
      id: "content",
      name: "Content",
      count: tools.filter((t) => t.category === "content").length,
      icon: "📝",
    },
  ];

  const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  };

  const filteredTools = tools
    .filter(
      (tool) =>
        (activeFilter === "all" || tool.category === activeFilter) &&
        (tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.popularity - a.popularity;
        case "name":
          return a.name.localeCompare(b.name);
        case "recent":
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        case "usage":
          return parseInt(b.usage) - parseInt(a.usage);
        default:
          return b.popularity - a.popularity;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Design Tools
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              For Modern Creators
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Everything you need to design, prototype, and build amazing digital
            experiences. All tools are completely free and production-ready.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            {[
              { number: "12+", label: "Powerful Tools" },
              { number: "100%", label: "Free Forever" },
              { number: "24/7", label: "Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Ad */}
        <AdPlaceholder size="large" />

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            {/* Search */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                  🔍
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm font-medium">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="name">Alphabetical</option>
                <option value="recent">Recently Updated</option>
                <option value="usage">Most Used</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeFilter === category.id
                      ? "bg-purple-500"
                      : "bg-gray-300"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Tool Header */}
              <div
                className={`bg-gradient-to-r ${tool.gradient} p-6 relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl bg-white/20 rounded-xl p-2">
                      {tool.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          difficultyColors[tool.difficulty]
                        }`}
                      >
                        {tool.difficulty}
                      </span>
                      <div className="bg-black/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {tool.popularity}%
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-white/90 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {/* Tool Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {tool.features.slice(0, 3).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                    {tool.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{tool.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 mb-4 border border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <span className="text-lg">💡</span>
                    <div>
                      <div className="text-sm font-semibold text-amber-900 mb-1">
                        Pro Tip
                      </div>
                      <div className="text-amber-800 text-sm">
                        {tool.proTip}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-sm text-gray-500"></div>

                  <Link
                    to={tool.link}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 group-hover:shadow-purple-200"
                  >
                    Use Tool →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No tools found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Show All Tools
            </button>
          </div>
        )}

        {/* Middle Ad */}
        <AdPlaceholder size="medium" title="RECOMMENDED TOOLS" />

        {/* Popular Tools Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Most Popular Tools
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tools
              .filter((tool) => tool.popularity >= 85)
              .slice(0, 4)
              .map((tool, index) => (
                <div
                  key={tool.id}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center text-2xl text-white flex-shrink-0`}
                    >
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {tool.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {tool.popularity}% Popular
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          📊 {tool.usage} • {tool.difficulty}
                        </div>
                        <Link
                          to={tool.link}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          Try Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Ad */}
        {/* <AdPlaceholder size="large" title="UPGRADE YOUR WORKFLOW" /> */}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-center text-white mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Supercharge Your Design Workflow?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of designers and developers who are creating amazing
            work faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={"/css-gradient-generator"}
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            >
              🚀 Start with Most Popular Tool
            </Link>
            <Link
              to="/documentation"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              📚 Browse Documentation
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Are these tools really free?",
                answer:
                  "Yes! All tools are completely free forever. We believe great design tools should be accessible to everyone.",
              },
              {
                question: "Do I need to create an account?",
                answer:
                  "No account required. All tools work immediately in your browser with no sign-up needed.",
              },
              {
                question: "Can I use the generated code commercially?",
                answer:
                  "Absolutely! All generated code is yours to use in any project, personal or commercial.",
              },
              {
                question: "How often are tools updated?",
                answer:
                  "We constantly update and improve our tools based on user feedback and industry best practices.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToolsPage;
