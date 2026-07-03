import "./Stats.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 70,
    suffix: "L+",
    title: "Verified Young Indians",
  },
  {
    number: 5000,
    suffix: "+",
    title: "Brands",
  },
  {
    number: 1000,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    number: 14,
    suffix: "Cr+",
    title: "Paid to Teens",
  },
];

function Stats() {
  return (
    <section className="stats">

      <motion.p
        className="stats-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        • OUR IMPACT •
      </motion.p>

      <motion.h2
        className="stats-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Trusted by brands across <span>India.</span>
      </motion.h2>

      <motion.p
        className="stats-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Thousands of companies trust Funngro to connect them with
        India's largest verified youth community.
      </motion.p>

      <div className="stats-grid">

        {stats.map((item, index) => (

          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
          >

           <h3>
  {item.number}
  {item.suffix}
</h3>

            <p>{item.title}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Stats;