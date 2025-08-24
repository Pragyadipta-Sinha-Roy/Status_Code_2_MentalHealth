import React from "react";

const features = [
  {
    icon: "🎯",
    title: "Personalized Experience",
    description:
      "Every interaction is tailored to your unique mental health journey and preferences",
  },
  {
    icon: "🧬",
    title: "Science-Based Approach",
    description:
      "Built on proven music therapy and psychological research methodologies",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "Your mental health data is protected with enterprise-grade security",
  },
  {
    icon: "⚡",
    title: "24/7 Availability",
    description:
      "Support and therapeutic resources available whenever you need them",
  },
  {
    icon: "🌍",
    title: "Holistic Wellness",
    description:
      "Comprehensive approach combining music, therapy, and professional care",
  },
  {
    icon: "📱",
    title: "Multi-Platform Access",
    description:
      "Access your wellness tools on web, mobile, and desktop platforms",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
  Why Choose SAHAYATA.ai?
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
