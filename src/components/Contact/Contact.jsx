import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact">

      <motion.p
        className="contact-tag"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        • LET'S WORK TOGETHER •
      </motion.p>

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Ready to reach the <span>right audience?</span>
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Whether you're launching a startup or growing an established
        brand, Funngro helps you connect with India's largest verified
        youth community.
      </motion.p>

      <motion.div
        className="contact-buttons"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <button className="primary-btn">
          Get Started →
        </button>

        <button className="secondary-btn">
          hello@funngro.com
        </button>
      </motion.div>

    </section>
  );
}

export default Contact;