import React from "react";
import Navbar from "../components/Navbar";
import ChatbotCard from "../components/ChatbotCard";
import WhyChooseSection from "../components/Whychoosesection";

const SERVICES = [
  {
    id: "harmonyflow",
    title: "HarmonyFlow",
    subtitle: "Personalized Daily Music Therapy",
    blurb: "Experience our flagship AI-powered music therapy system that analyzes your emotional state, stress levels, and personal preferences through comprehensive questionnaires. Receive custom-generated therapeutic music tailored specifically for your daily healing journey.",
    icon: "🎵",
    gradient: "from-red-400 to-red-500",
    url: "xxx"
  },
  {
    id: "mindpal",
    title: "MindPal",
    subtitle: "AI Therapy Avatar & Mental Health Companion",
    blurb: "Connect with our empathetic AI therapy avatar, trained on extensive psychological datasets. Get professional-grade mental health support, coping strategies, and mindfulness guidance available 24/7 to support your emotional wellbeing.",
    icon: "🧠",
    gradient: "from-teal-400 to-teal-600",
    url: "https://your-mindpal-app.com"
  },
  {
    id: "careconnect",
    title: "CareConnect",
    subtitle: "Smart Appointment & Care Coordination",
    blurb: "Seamlessly book appointments with licensed therapists, music therapists, and mental health professionals. Our intelligent chatbot helps you find the right care providers, schedule sessions, and manage your wellness appointments effortlessly.",
    icon: "📅",
    gradient: "from-blue-400 to-blue-600",
    url: "https://your-careconnect-app.com"
  }
];

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main className="hero">
        <h1 className="brand">
          Welcome To SAHAYATA.ai<span className="dot"></span>
        </h1>
        <h2 className="welcome">Your Mental Saathi</h2>

        <section className="grid mb-24">
          {SERVICES.map((service) => (
            <ChatbotCard
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              blurb={service.blurb}
              url={service.url}
              icon={service.icon}
              gradient={service.gradient}
            />
          ))}
        </section>
        {/* Why Choose Section */}
        <WhyChooseSection />

      </main>
    </div>
  );
}
