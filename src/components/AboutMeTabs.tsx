import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<string>("languages");

  return (
    <div className="flex flex-col"> 
      <div className="flex justify-center gap-6 pt-12">
        <button
          onClick={() => setActiveTab("languages")}
          className={`text-base md:text-2xl font-semibold transition ${
            activeTab === "languages"
              ? "text-[#C69749]"
              : "text-[#F5F5F5] hover:text-[#C69749]"
          }`}
        >
          Programming Languages
        </button>
        <button
          onClick={() => setActiveTab("tech-stack")}
          className={`text-base md:text-2xl font-semibold transition ${
            activeTab === "tech-stack"
              ? "text-[#C69749]"
              : "text-[#F5F5F5] hover:text-[#C69749]"
          }`}
        >
          Tech-stack & Frameworks
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`text-base md:text-2xl font-semibold transition ${
            activeTab === "tools"
              ? "text-[#C69749]"
              : "text-[#F5F5F5] hover:text-[#C69749]"
          }`}
        >
          Development Tools
        </button>
        <button
          onClick={() => setActiveTab("others")}
          className={`text-base md:text-2xl font-semibold transition ${
            activeTab === "others"
              ? "text-[#C69749]"
              : "text-[#F5F5F5] hover:text-[#C69749]"
          }`}
        >
          Other Skills
        </button>
      </div>

      {/* Tab Contents */}
      <div className="mt-8 ml-10 text-[#F5F5F5] text-base md:text-2xl  text-left">
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
            <li>Linux(Ubuntu)</li>
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
