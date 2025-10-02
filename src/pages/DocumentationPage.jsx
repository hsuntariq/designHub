import React, { useState } from "react";
import { Link } from "react-router-dom";

const DocumentationPage = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState("introduction");

  const documentation = {
    "getting-started": {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        {
          id: "introduction",
          title: "Introduction to DesignoHub",
          content: `# Welcome to DesignoHub!

DesignoHub is a comprehensive suite of free, powerful design utilities built for modern designers and developers. Our platform provides everything you need to create beautiful, consistent designs faster than ever before.

## What is DesignoHub?

DesignoHub is a collection of web-based design utilities that help you:
- Generate perfect color palettes
- Create harmonious typography scales
- Build consistent spacing systems
- Design beautiful CSS gradients
- Access ready-to-use UI components
- Create complete design systems

## Why Choose DesignoHub?

<b>🎯 Perfect for Teams</b>
Collaborate seamlessly with tools that produce consistent, production-ready results.

<b>⚡ Lightning Fast</b>
Generate designs and code in seconds, not hours. No more manual calculations.

<b>💸 Completely Free</b>
All tools are free forever. We believe great design tools should be accessible to everyone.

<b>🎨 Professional Results</b>
Every tool follows design best practices and produces pixel-perfect results.`,
        },
        {
          id: "quick-start",
          title: "Quick Start Guide",
          content: `# Quick Start Guide

Get up and running with DesignoHub in just a few minutes.

## Step 1: Choose Your Tool
Browse our collection of design tools and select the one that fits your needs:
- <b>Color Palette Generator</b> - For brand colors and UI themes
- <b>Typography Scale Generator</b> - For perfect text hierarchies
- <b>Spacing Scale Generator</b> - For consistent layouts
- <b>CSS Gradient Generator</b> - For beautiful backgrounds
- <b>UI Component Showcase</b> - For ready-to-use components
- <b>Design System Builder</b> - For complete design systems

## Step 2: Customize Your Design
Use the intuitive controls to customize your design:
- Adjust sliders for precise control
- Choose from preset options
- See live previews instantly

## Step 3: Export and Implement
Copy the generated code and use it in your projects:
- Clean, optimized CSS
- Ready for production
- Framework agnostic

## Pro Tip 💡
Bookmark your favorite tools for quick access! Most tools remember your last settings.`,
        },
        {
          id: "best-practices",
          title: "Best Practices",
          content: `# Design Best Practices

## Color Palette Guidelines

### Choose the Right Color Scheme
- <b>Analogous</b>: Colors next to each other on the color wheel - creates harmonious designs
- <b>Complementary</b>: Opposite colors - creates high contrast and vibrancy
- <b>Triadic</b>: Three evenly spaced colors - balanced and vibrant
- <b>Monochromatic</b>: Variations of a single hue - clean and professional

### Accessibility Matters
- Ensure sufficient color contrast (WCAG AA requires 4.5:1 for normal text)
- Test your colors with color blindness simulators
- Don't rely solely on color to convey information

## Typography Best Practices

### Scale Ratios
- <b>1.125</b> (Major Second) - Subtle, elegant hierarchy
- <b>1.25</b> (Major Third) - Clear, balanced progression
- <b>1.333</b> (Perfect Fourth) - Strong, noticeable hierarchy
- <b>1.414</b> (Augmented Fourth) - Dramatic, impactful scale

### Readability Tips
- Line height should be 1.2-1.5 times the font size
- Limit line length to 50-75 characters
- Use font weights strategically (300 for light, 400 for normal, 600-700 for bold)`,
        },
      ],
    },
    tools: {
      title: "Tools Guide",
      icon: "🛠️",
      articles: [
        {
          id: "color-generator",
          title: "Color Palette Generator Guide",
          content: `# Color Palette Generator

Create beautiful, harmonious color palettes for your designs.

## Features

### Color Schemes
- <b>Complementary</b>: Opposite colors for high contrast
- <b>Analogous</b>: Adjacent colors for harmony
- <b>Triadic</b>: Three evenly spaced colors
- <b>Tetradic</b>: Four colors in a rectangle
- <b>Monochromatic</b>: Shades of a single color

### How to Use

1. <b>Choose Base Color</b>
   - Use the color picker or enter HEX value
   - Start with your brand's primary color

2. <b>Select Palette Type</b>
   - Choose the color relationship that fits your needs
   - Experiment with different schemes

3. <b>Customize Colors<b>
   - Adjust individual color stops
   - Add or remove colors as needed

4. <b>Export</b>
   - Copy HEX values individually
   - Export entire palette as CSS variables

## Use Cases

### Brand Colors
Create primary, secondary, and accent colors that work well together.

### UI Themes
Generate light and dark mode color variations.

### Data Visualization
Ensure accessible color combinations for charts and graphs.`,
        },
        {
          id: "typography-guide",
          title: "Typography Scale Generator Guide",
          content: `# Typography Scale Generator

Create perfect typography hierarchies using mathematical scales.

## Understanding Scale Ratios

### Common Ratios
- <b>1.125</b> (Minor Second): Subtle, elegant progression
- <b>1.25</b> (Major Third): Clear, balanced hierarchy
- <b>1.333</b> (Perfect Fourth): Strong, traditional scale
- <b>1.414</b> (Augmented Fourth): Modern, dramatic contrast
- <b>1.5</b> (Perfect Fifth): Very pronounced hierarchy
- <b>1.618</b> (Golden Ratio): Classic, harmonious progression

## Implementation

### Base Font Size
- Start with 16px as your base (default browser size)
- Adjust based on your design needs (14px-18px recommended)

### Line Height
- Calculated automatically as 1.2 times font size
- Adjust manually if needed for specific use cases

### CSS Output
The generator provides:
- CSS custom properties (variables)
- Utility classes for each step
- REM and PX values

## Best Practices

### Hierarchy
Use the scale to define:
- H1: Step 5-6 (largest)
- H2: Step 4
- H3: Step 3
- H4: Step 2
- Body: Step 0
- Small: Step -1
- Caption: Step -2

### Responsive Typography
Consider using smaller scales for mobile devices.`,
        },
        {
          id: "spacing-guide",
          title: "Spacing Scale Generator Guide",
          content: `# Spacing Scale Generator

Create consistent spacing systems for margins, padding, and layouts.

## Base Unit Principle

### What is a Base Unit?
A base unit is the fundamental spacing measurement that all other spaces are multiples of.

### Recommended Base Units
- <b>8px</b>: Most common, divisible by 4 and 2
- <b>4px</b>: Very precise, good for tight layouts
- <b>6px</b>: Balanced, good for content-heavy designs

## Scale Ratios

### Common Ratios
- <b>1.5</b>: Balanced, predictable progression
- <b>1.618</b>: Golden ratio, harmonious spacing
- <b>1.667</b>: Strong, noticeable steps
- <b>2</b>: Doubling, very pronounced hierarchy

## Implementation

### CSS Variables
The generator creates a complete spacing system:
\`\`\`css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
}
\`\`\`

### Utility Classes
- \`.p-1\` { padding: var(--space-1); }
- \`.m-2\` { margin: var(--space-2); }
- \`.gap-3\` { gap: var(--space-3); }

## Usage Guidelines

### When to Use Which Space
- <b>1-2 units</b>: Micro spacing, icon padding
- <b>3-4 units</b>: Component padding, form spacing
- <b>5-6 units</b>: Section spacing, large margins
- <b>7+ units</b>: Hero sections, major layout divisions`,
        },
      ],
    },
    tutorials: {
      title: "Tutorials",
      icon: "📖",
      articles: [
        {
          id: "design-system",
          title: "Building a Complete Design System",
          content: `# Building a Complete Design System

Learn how to create a comprehensive design system using our tools.

## Step 1: Define Your Colors

### Primary Palette
1. Use the Color Palette Generator to choose your primary color
2. Generate complementary colors for secondary and accent colors
3. Create neutral grays for text and backgrounds

### Example Color System
\`\`\`css
:root {
  --primary-500: #3B82F6;
  --secondary-500: #8B5CF6;
  --accent-500: #06B6D4;
  --gray-50: #F9FAFB;
  --gray-900: #111827;
}
\`\`\`

## Step 2: Establish Typography

### Create Your Scale
1. Use the Typography Scale Generator with ratio 1.25
2. Define heading levels (H1-H6)
3. Set body and caption sizes

### Example Typography
\`\`\`css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
}
\`\`\`

## Step 3: Create Spacing System

### Consistent Spacing
1. Use the Spacing Scale Generator with base 8px
2. Create a 6-step scale for flexibility
3. Define utility classes

## Step 4: Build Components

### Use Component Showcase
1. Browse ready-to-use components
2. Customize to match your brand
3. Copy and implement in your project

## Step 5: Document Everything

### Create Usage Guidelines
- When to use each color
- Typography hierarchy rules
- Spacing best practices
- Component usage examples`,
        },
        {
          id: "responsive-design",
          title: "Creating Responsive Designs",
          content: `# Creating Responsive Designs

Learn how to use our tools to create designs that work on all devices.

## Mobile-First Approach

### Start Small
1. Design for mobile devices first
2. Use smaller typography scales on mobile
3. Optimize spacing for touch interfaces

### Responsive Typography
\`\`\`css
/* Base mobile styles */
html { font-size: 14px; }

/* Tablet */
@media (min-width: 768px) {
  html { font-size: 15px; }
}

/* Desktop */
@media (min-width: 1024px) {
  html { font-size: 16px; }
}
\`\`\`

## Adaptive Spacing

### Responsive Margins and Padding
\`\`\`css
.container {
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding: var(--space-6);
  }
}
\`\`\`

## Flexible Grids

### Using CSS Grid
\`\`\`css
.grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
  }
}
\`\`\`

## Testing Your Designs

### Essential Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large desktop: 1280px+

### Tools for Testing
- Browser developer tools
- Real device testing
- Cross-browser testing`,
        },
      ],
    },
    api: {
      title: "API Reference",
      icon: "🔌",
      articles: [
        {
          id: "integrations",
          title: "Tool Integrations",
          content: `# Tool Integrations

Learn how to integrate DesignoHub with your favorite frameworks and tools.

## React Integration

### Using Generated CSS
\`\`\`jsx
// Import generated CSS
import './design-system.css';

function App() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
      <p className="text-gray-600 mt-2">Using DesignoHub generated styles</p>
    </div>
  );
}
\`\`\`

## Vue.js Integration

### With CSS Variables
\`\`\`vue
<template>
  <div class="card">
    <h2 class="heading">Vue Component</h2>
    <p class="body">Using DesignoHub spacing and colors</p>
  </div>
</template>

<style>
.card {
  padding: var(--space-4);
  background: var(--color-white);
  border-radius: var(--radius-lg);
}

.heading {
  font-size: var(--text-xl);
  color: var(--color-gray-900);
}
</style>
\`\`\`

## Figma Integration

### Using Generated Values
1. Copy color values from Color Generator
2. Paste HEX codes into Figma color styles
3. Use typography scales for text styles
4. Implement spacing system with auto-layout

### Example Workflow
1. Generate palette in DesignoHub
2. Create color styles in Figma
3. Apply to components and frames
4. Maintain consistency across design and code`,
        },
        {
          id: "export-formats",
          title: "Export Formats",
          content: `# Export Formats

Understand the different export formats available across our tools.

## CSS Variables

### Color Palette Export
\`\`\`css
:root {
  --color-primary: #3B82F6;
  --color-secondary: #8B5CF6;
  --color-accent: #06B6D4;
}
\`\`\`

## JavaScript Objects

### Design Tokens
\`\`\`javascript
export const designTokens = {
  colors: {
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    accent: '#06B6D4'
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px'
  }
};
\`\`\`

## Tailwind CSS Config

### Custom Configuration
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    }
  }
}
\`\`\`

## SCSS Variables

### For Sass Projects
\`\`\`scss
$color-primary: #3B82F6;
$color-secondary: #8B5CF6;
$spacing-base: 8px;
$spacing-1: $spacing-base * 0.5;
$spacing-2: $spacing-base;
\`\`\`

## JSON Format

### For Design Tooling
\`\`\`json
{
  "colors": {
    "primary": "#3B82F6",
    "secondary": "#8B5CF6"
  },
  "typography": {
    "fontSizes": {
      "sm": "0.875rem",
      "base": "1rem"
    }
  }
}
\`\`\``,
        },
      ],
    },
  };

  const allArticles = Object.values(documentation).flatMap((category) =>
    category.articles.map((article) => ({
      ...article,
      category: category.title,
      categoryId: Object.keys(documentation).find(
        (key) => documentation[key] === category
      ),
    }))
  );

  const filteredArticles = allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentArticle =
    allArticles.find((article) => article.id === activeArticle) ||
    allArticles[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                </div>
              </div>

              {/* Categories */}
              <nav className="space-y-2">
                {Object.entries(documentation).map(([key, category]) => (
                  <div key={key}>
                    <button
                      onClick={() => setActiveCategory(key)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeCategory === key
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-semibold">{category.title}</span>
                    </button>

                    {activeCategory === key && (
                      <div className="ml-4 mt-2 space-y-1">
                        {category.articles.map((article) => (
                          <button
                            key={article.id}
                            onClick={() => setActiveArticle(article.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                              activeArticle === article.id
                                ? "bg-purple-100 text-purple-700"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                          >
                            {article.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Color Generator", path: "/color-generator" },
                    { label: "Typography Scale", path: "/typography-scale" },
                    { label: "Component Library", path: "/components" },
                    { label: "Design System Builder", path: "/design-system" },
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className="block text-sm text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      → {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Ad */}
            {/* <div className="mt-6">
              <AdPlaceholder size="medium" />
            </div> */}
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Article Header */}
              <div className="border-b border-gray-200 p-6 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {currentArticle.title}
                    </h1>
                    <p className="text-gray-600 mt-2">
                      {documentation[activeCategory]?.title} • Updated recently
                    </p>
                  </div>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                    <span>👍</span>
                    <span>Helpful?</span>
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 lg:p-8">
                <div className="prose prose-lg max-w-none">
                  <div
                    className="markdown-content"
                    dangerouslySetInnerHTML={{
                      __html: currentArticle.content
                        .split("\n")
                        .map((line) => {
                          if (line.startsWith("# ")) {
                            return `<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">${line.substring(
                              2
                            )}</h1>`;
                          } else if (line.startsWith("## ")) {
                            return `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-6">${line.substring(
                              3
                            )}</h2>`;
                          } else if (line.startsWith("### ")) {
                            return `<h3 class="text-xl font-bold text-gray-900 mb-3 mt-4">${line.substring(
                              4
                            )}</h3>`;
                          } else if (
                            line.startsWith("<b>") &&
                            line.endsWith("<b>")
                          ) {
                            return `<strong class="font-semibold text-gray-900">${line.substring(
                              2,
                              line.length - 2
                            )}</strong>`;
                          } else if (
                            line.startsWith("`") &&
                            line.endsWith("`")
                          ) {
                            return `<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">${line.substring(
                              1,
                              line.length - 1
                            )}</code>`;
                          } else if (line.startsWith("```")) {
                            return ""; // Skip code block markers
                          } else if (line.trim() === "") {
                            return '<div class="h-4"></div>';
                          } else {
                            return `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`;
                          }
                        })
                        .join(""),
                    }}
                  />
                </div>

                {/* Code blocks rendering */}
                {currentArticle.content.includes("```") && (
                  <div className="mt-6">
                    <pre className="bg-gray-900 text-gray-200 p-6 rounded-xl overflow-x-auto text-sm">
                      <code>
                        {currentArticle.content
                          .split("```")[1]
                          ?.split("\n")
                          .filter((line) => !line.includes("```"))
                          .join("\n")}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Article Navigation */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    {/* <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
                      <span>←</span>
                      <span>Previous Article</span>
                    </button>
                    <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
                      <span>Next Article</span>
                      <span>→</span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {searchQuery === "" && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documentation[activeCategory]?.articles
                    .filter((article) => article.id !== activeArticle)
                    .slice(0, 4)
                    .map((article) => (
                      <button
                        key={article.id}
                        onClick={() => setActiveArticle(article.id)}
                        className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-200 hover:border-purple-200"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {article.content.substring(0, 100)}...
                        </p>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchQuery !== "" && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Search Results ({filteredArticles.length})
                </h3>
                <div className="space-y-4">
                  {filteredArticles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => {
                        setActiveArticle(article.id);
                        setActiveCategory(article.categoryId);
                        setSearchQuery("");
                      }}
                      className="w-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-200 hover:border-purple-200"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {article.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            {article.category}
                          </p>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {article.content.substring(0, 150)}...
                          </p>
                        </div>
                        <span className="text-purple-600 text-sm font-semibold">
                          Read →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Ad */}
            {/* <div className="mt-8">
              <AdPlaceholder size="large" />
            </div> */}

            {/* Feedback Section */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Was this documentation helpful?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're constantly improving our documentation. Let us know if you
                have any questions or suggestions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hsuntariq@gmail.com&su=Feedback%20Helpful&body=👍%20Yes,%20it%20was%20helpful!"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  👍 Yes, it was helpful
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hsuntariq@gmail.com&su=Feedback%20Could%20be%20better&body=👎%20Could%20be%20better"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-200"
                >
                  👎 Could be better
                </a>

                <Link
                  to={"/support"}
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-200"
                >
                  💬 Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .markdown-content h1:first-child {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
};

export default DocumentationPage;
