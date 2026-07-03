import "./Industries.css";
import { motion } from "framer-motion";

const industries = [
  "FinTech",
  "EdTech",
  "Gaming",
  "Beauty",
  "FMCG",
  "Food & Beverage",
  "Travel",
  "Commerce",
  "Lifestyle",
  "Healthcare",
  "Wellness",
  "Entertainment"
];

function Industries() {
  return (
    <section className="industries">

      <motion.p
        className="industries-tag"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
    
        • INDUSTRIES WE SERVE •
      </motion.p>
      <motion.div
    className="industry-pill"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
></motion.div>

      <motion.h2
        className="industries-title"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        From <span>FinTech</span> to <span>FMCG.</span>
      </motion.h2>

      <motion.p
        className="industries-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .2 }}
        viewport={{ once: true }}
      >
        Whether you're launching a fintech startup or refreshing an FMCG
        brand, Funngro connects you with the right young audience.
      </motion.p>

      <div className="chips">

        {industries.map((item, index) => (

          <motion.div
            className="chip"
            key={index}
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * .05 }}
            whileHover={{
              scale: 1.08,
              y: -5
            }}
            viewport={{ once: true }}
          >
            {item}
          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Industries;