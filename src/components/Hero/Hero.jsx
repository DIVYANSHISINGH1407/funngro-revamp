import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <motion.div
          className="hero-left"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-badge">
            ● FOR MARKETING LEADERS • WORK WITH YOUNG INDIA
          </span>

          <h1>
            Work with <span>70 lakh</span> young Indians on the
            things <span>brands actually need.</span>
          </h1>

          <p>
            Promotion, sampling, content, surveys, influencer briefs,
            app testing, ideation and sales support —
            from a verified pool of seventy lakh young Indians
            who already use, follow and care about brands like yours.
          </p>

          <div className="hero-btns">

            <button className="primary">
              Tell us what you need
            </button>

            <button className="secondary">
              See work types
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h2>70L+</h2>
              <span>Young Indians</span>
            </div>

            <div>
              <h2>5000+</h2>
              <span>Brands</span>
            </div>

            <div>
              <h2>1000+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>12+</h2>
              <span>Categories</span>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >

          <div className="phone">

            <div className="hero-right">

  <div className="flip-card">

    <div className="flip-card-inner">

      {/* FRONT */}
      <div className="flip-front">

        <p className="small-text">
          PAID THIS WEEK
        </p>

        <h2>₹14,32,671</h2>

        <p>Hover to see today's tasks</p>

      </div>

      {/* BACK */}

      <div className="flip-back">

        <h3>Today's Tasks</h3>

        <div className="task">
          <span>Survey</span>
          <strong>₹200</strong>
        </div>

        <div className="task">
          <span>Promotion</span>
          <strong>₹350</strong>
        </div>

        <div className="task">
          <span>Referral</span>
          <strong>₹500</strong>
        </div>

        <hr />

        <div className="task">
          <span>Verified Teens</span>
          <strong>70L+</strong>
        </div>

        <div className="task">
          <span>Live Projects</span>
          <strong>1000+</strong>
        </div>

      </div>

    </div>

  </div>

</div>

          </div>


        </motion.div>

      </div>

    </section>
  );
}

export default Hero;