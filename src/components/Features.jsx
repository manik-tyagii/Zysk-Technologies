import React from "react";

const features = [
  {
    icon: "/assets/icons/Featuredicon.png",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: "/assets/icons/Featuredicon1.png",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: "/assets/icons/Featuredicon2.png",
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
  },
  {
    icon: "/assets/icons/Featuredicon3.png",
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: "/assets/icons/Featuredicon4.png",
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: "/assets/icons/Featuredicon5.png",
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

const Features = () => {
  return (
    <section className="py-12 sm:py-16 text-center bg-white px-4 sm:px-6">
      
      <h2 className="text-red-500 font-semibold text-sm uppercase">Features</h2>
      <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900">
        Analytics that feels like it’s from the future
      </h1>
      <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base sm:text-lg">
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </p>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-12 mt-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl shadow-md">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mt-4 text-lg sm:text-xl text-gray-800">{feature.title}</h3>
            <p className="text-gray-500 mt-2 max-w-xs text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
