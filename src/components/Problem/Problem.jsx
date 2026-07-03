import "./Problem.css";
import { motion } from "framer-motion";

function Problem() {
  return (
    <section className="problem">

      <motion.p
        className="problem-tag"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        • THE CHALLENGE •
      </motion.p>

      <motion.h2
        className="problem-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Reach is <span>everywhere.</span>
        <br />
        Real action is <span>rare.</span>
      </motion.h2>

      <motion.p
        className="problem-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .4 }}
        viewport={{ once: true }}
      >
        Brands spend millions getting views, but real engagement is
        difficult. Funngro connects businesses with verified young
        Indians who actually participate, promote, test products and
        share genuine feedback.
      </motion.p>

      <div className="problem-cards">

        <motion.div
          className="problem-card"
          whileHover={{ y: -10, scale: 1.03 }}
        >
          <h3>📢 Ads</h3>
          <p>Millions of impressions</p>
          <small>Very low interaction</small>
        </motion.div>

        <motion.div
          className="problem-card"
          whileHover={{ y: -10, scale: 1.03 }}
        >
          <h3>👥 Influencers</h3>
          <p>Large audience</p>
          <small>Limited trust & action</small>
        </motion.div>

        <motion.div
  className="problem-card"
  whileHover={{ y: -10, scale: 1.03 }}
>
          <h3>⚡ Funngro</h3>
          <p>Verified Teen Community</p>
          <small>Real campaigns. Real engagement.</small>
        </motion.div>

      </div>

    </section>
  );
}

export default Problem;