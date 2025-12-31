"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Features = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const tabs = [
    {
      id: "tab-1",
      title: "Discover",
      icon: "ri:gps-line",
      heading: "Discover",
      description:
        "The objective of the Discover phase is to gain an overview of the overall business, its the technology platforms, and the maturity of its data strategy.",
      image: "/images/featured/features1.png",
    },
    {
      id: "tab-2",
      title: "Define",
      icon: "ri:body-scan-line",
      heading: "Define",
      description:
        "We then collate information gathered from the people and technologies to Define the current state of play and provide actionable insights on how best to collect and use customer and internal data.",
      image: "/images/featured/features-2.png",
    },
    {
      id: "tab-3",
      title: "Develop",
      icon: "ri:sun-line",
      heading: "Develop",
      description:
        "We work closely with all key stakeholders during the Develop phase to define success before mapping the existing technological architecture and developing a plan to improve and scale it.",
      image: "/images/featured/features-3.png",
    },
    {
      id: "tab-4",
      title: "Deliver",
      icon: "ri:store-line",
      heading: "Deliver",
      description:
        "Once we've defined the roadmap development, we begin to Deliver technical solutions, supplying the right level and combination of resources to achieve the required objectives at each stage. Working in two-week sprints allows the development work to iterate in line with the evolving data strategy.",
      image: "/images/featured/features1.png",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section id="features" className="features py-20">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        {/* Tab Navigation */}
        <ul
          className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-700 mb-8"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="w-full"
              role="presentation"
            >
              <button
                className={`w-full flex flex-col items-center justify-center p-4 border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-primary text-primary dark:text-primary"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={tab.id}
              >
                <Icon icon={tab.icon} className="text-2xl mb-2" />
                <h4 className="hidden lg:block text-base font-semibold mt-2">
                  {tab.title}
                </h4>
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane transition-opacity duration-300 ${
                activeTab === tab.id ? "block opacity-100" : "hidden opacity-0"
              }`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1 mt-6 lg:mt-0">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {tab.heading}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    {tab.description}
                  </p>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 text-center">
                  <Image
                    src={tab.image}
                    alt={tab.heading}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

