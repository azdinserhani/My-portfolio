import "./Skills.scss";
import { motion } from "framer-motion";
import {frontEnd,backEnd} from "../mockData"

const Skills = ({ type }) => {
  return (
    <div className="skills">
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,

            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          Skills
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeInOut", delay: 1 },
          }}
        >
          {type}
        </motion.h3>

        <div className="skillsContainer">
          {type === "Front-End" &&
            frontEnd.map((item, index) => {
              return (
                <motion.div
                  className="item"
                  whileHover={{ scale: 1.2 }}
                  key={index}
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                      delay: 0.1 * index,
                    },
                  }}
                >
                  {item.img}
                </motion.div>
              );
            })}
          {type === "Back-End" &&
            backEnd.map((item, index) => {
              return (
                <motion.div
                  className="item"
                  whileHover={{ scale: 1.2 }}
                  key={index}
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      ease: "easeInOut",
                      delay: 0.1 * index,
                    },
                  }}
                >
                  {item.img}
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
