import "./About.scss";
import { motion } from "framer-motion";
const variant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <div className="left">
          <motion.img
            variants={variant}
            initial={"initial"}
            whileInView={"animate"}
            src="./me.png"
            alt=""
          />
        </div>
        <div className="right">
          <motion.h2
            initial={{ x: 300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
            }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ x: 300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut", delay: 1 },
            }}
          >
            Hi, I'm Az-eddine Serhani, a 20-year-old web developer from Morocco.
            Passionate about technology and problem-solving, I dive into web
            development to tackle challenges and innovate. Whether it's
            front-end design or back-end logic, I thrive on pushing boundaries
            and creating inspiring solutions. Excited for the journey ahead!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
