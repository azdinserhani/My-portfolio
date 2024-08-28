import "./Skills.scss";
import react from "../../public/react.png";
import css from "../../public/css.png";
import sass from "../../public/sass.png";
import js from "../../public/js.png";
import html from "../../public/html.png";
import bootstrap from "../../public/bootstrap.png";
import pg from "../../public/pg.png";
import jwt from "../../public/jwt.png";
import node from "../../public/node.png";
import mon from "../../public/mon.png";
import express from "../../public/express.png";
import { motion } from "framer-motion";
const frontEnd = [
  {
    name: "React Js",
    img: react,
  },
  {
    name: "Css",
    img: css,
  },
  {
    name: "Html",
    img: html,
  },
  {
    name: "Javascript",
    img: js,
  },
  {
    name: "Sass",
    img: sass,
  },
  {
    name: "Bootstrap",
    img: bootstrap,
  },
];
const backEnd = [
  {
    img: node,
  },
  {
    img: pg,
  },
  {
    img: jwt,
  },
  {
    img: js,
  },
  {
    img: mon,
  },
  {
    img: express,
  },
];
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
                  <img src={item.img} alt="" />
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
                  <img src={item.img} alt="" />
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
