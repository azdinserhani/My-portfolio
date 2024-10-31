import "./Hero.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { motion } from "framer-motion";


const variant = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease:"easeInOut"
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="wrapper"
        variants={variant}
        initial={"initial"}
        animate={"animate"}
      >
        <motion.h1 variants={variant} initial={"initial"} animate={"animate"}>
          Az-eddine Serhani
        </motion.h1>
        <p>Start scrolling to learn more about me.</p>
        <div className="social">
          <a href="https://www.facebook.com/azdine.azdine.52438174/">
            <FacebookIcon fontSize="inherit" />
          </a>
          <a href="https://www.linkedin.com/in/az-eddine-serhani-32033a288/">
            <LinkedInIcon fontSize="inherit" />
          </a>
          <a href="https://github.com/azdinserhani">
            <GitHubIcon fontSize="inherit" />
          </a>
        </div>
        <div>
          <a
            href="../../public/myCv.pdf"
            download="Az-eddine_Serhani_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Download CV</button>
          </a>
        </div>
        <div className="scroll">
          <a href="#about">
            <ArrowCircleDownIcon fontSize="large" />
            <span>scroll Down</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
