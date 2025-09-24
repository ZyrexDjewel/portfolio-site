import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<string>("languages");

  const tabClasses = (tab: string) => `
    relative text-sm md:text-base lg:text-2xl font-semibold
    ${activeTab === tab ? "text-[#C69749]" : "text-[#F5F5F5]"}
    after:content-[''] after:absolute after:left-0 after:-bottom-2 lg:after:-bottom-4 
    after:h-[3px] lg:after:h-[6px] after:bg-[#C69749] after:transition-all after:duration-800 
    ${activeTab === tab ? "after:w-full" : "after:w-0 hover:after:w-full"}
  `;

  return (
    <div className="flex flex-col">
      {/* Tabs */}
      <div className="flex gap-4 md:gap-6 pt-4 lg:pt-12">
        <button onClick={() => setActiveTab("languages")} className={tabClasses("languages")}>
          Programming Languages
        </button>
        <button onClick={() => setActiveTab("tech-stack")} className={tabClasses("tech-stack")}>
          Tech-stack & Frameworks
        </button>
        <button onClick={() => setActiveTab("tools")} className={tabClasses("tools")}>
          Development Tools
        </button>
        <button onClick={() => setActiveTab("others")} className={tabClasses("others")}>
          Other Skills
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-8 ml-10 text-[#F5F5F5] text-sm md:text-base lg:text-xl text-left">
        {activeTab === "languages" && (
          <ul className="list-disc list-inside space-y-2">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C#</li>
            <li>C</li>
          </ul>
        )}
        {activeTab === "tech-stack" && (
          <ul className="list-disc list-inside space-y-2">
            <li>React</li>
            <li>Next.js</li>
            <li>Astro</li>
            <li>Node.js</li>
            <li>Flutter</li>
            <li>Unity</li>
            <li>Blazor</li>
          </ul>
        )}
        {activeTab === "tools" && (
          <ul className="list-disc list-inside space-y-2">
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>Google Cloud Platform</li>
            <li>Linux (Ubuntu)</li>
            <li>Firebase</li>
            <li>Postman</li>
            <li>Trello</li>
          </ul>
        )}
        {activeTab === "others" && (
          <ul className="list-disc list-inside space-y-2">
            <li>HTML</li>
            <li>CSS (Tailwind)</li>
            <li>MySQL</li>
            <li>RESTful APIs</li>
            <li>Figma (UI/UX Prototyping)</li>
            <li>Agile Development</li>
            <li>Blender (3D Modelling)</li>
          </ul>
        )}
      </div>
    </div>
  );
}
