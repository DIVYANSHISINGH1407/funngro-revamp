import "./Services.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Brand Promotion",
    icon: "📢",
    bg: "PROMOTION",
    desc: "Reach thousands of verified young Indians through authentic campaigns that create real engagement.",
    features: [
      "Social Media Campaigns",
      "Campus Marketing",
      "Teen Influencers",
      "Brand Awareness",
    ],
  },
  {
    id: "02",
    title: "Product Testing",
    icon: "🧪",
    bg: "TESTING",
    desc: "Get genuine feedback before your product reaches the market.",
    features: [
      "Beta Testing",
      "User Feedback",
      "Real Devices",
      "Analytics",
    ],
  },
  {
    id: "03",
    title: "Content Creation",
    icon: "🎥",
    bg: "CONTENT",
    desc: "UGC, reels and social media content created by real users.",
    features: [
      "Instagram Reels",
      "Short Videos",
      "Photography",
      "Creative Posts",
    ],
  },
  {
    id: "04",
    title: "Surveys & Insights",
    icon: "📊",
    bg: "SURVEYS",
    desc: "Understand customer opinions using structured surveys.",
    features: [
      "Consumer Insights",
      "Polls",
      "Research",
      "Analytics",
    ],
  },
  {
    id: "05",
    title: "Referral Programs",
    icon: "🤝",
    bg: "REFERRAL",
    desc: "Grow faster through trusted peer-to-peer recommendations.",
    features: [
      "Invite Rewards",
      "Referral Tracking",
      "Higher Reach",
      "Organic Growth",
    ],
  },
  {
    id: "06",
    title: "Campus Ambassadors",
    icon: "🎓",
    bg: "CAMPUS",
    desc: "Build awareness across colleges with student ambassadors.",
    features: [
      "College Campaigns",
      "Campus Events",
      "Brand Presence",
      "Offline Reach",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="services">
      <div className="serviceHeading">
        <p>OUR SERVICES</p>
        <h2>
          Choose what your <span>brand needs.</span>
        </h2>
        <h5>
          From promotion to product testing, Funngro helps brands connect with verified young Indians.
        </h5>
      </div>

      <div className="serviceContainer">
        <div className="serviceList">
          {services.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`serviceItem ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              <span>{item.id}</span>
              <div>
                <h3>{item.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <div className="cardStack">
          <AnimatePresence mode="wait">
            <motion.h1
              key={services[active].bg}
              className="bgText"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 0.03, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {services[active].bg}
            </motion.h1>
          </AnimatePresence>

          {services.map((service, index) => {
            const order = (index - active + services.length) % services.length;

            const isActive = order === 0;

            // how far behind
            const depth = order;

            // ACTIVE CARD
            const x = isActive ? 120 : 145 + depth * 18;

            const y = isActive ? 10 : 8 + depth * 4;

            const rotate = isActive ? 0 : 4 + depth * 3;

            const scale = isActive ? 1 : 0.985;

            const opacity = isActive ? 1 : 0.65;

            // active always on top
            const zIndex = 100 - depth;

            return (
              <motion.div
                    key={service.id}
                    className={`serviceCard ${isActive ? "activeCard" : ""}`}
                    initial={false}
                    animate={{
                            x,
                            y,
                            rotate,
                            scale,
                            opacity
                        }}

                        style={{
                            zIndex
                        }}

                        transition={{
                            duration:0.55,
                            ease:[0.22,1,0.36,1]
                        }}
                >
                <div className="serviceCardHeader">
                  <div className="serviceIcon">{service.icon}</div>
                  <div className="serviceTitle">
                    <span>{service.id}</span>
                    <h2>{service.title}</h2>
                  </div>
                </div>
                <p>{service.desc}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <button type="button">Learn More →</button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
