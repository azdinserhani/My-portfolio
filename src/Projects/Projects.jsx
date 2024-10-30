import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import pharmacy from "../../public/pharmacy.png";
import YumYard from "../../public/YumYard.png";
import Landing from "../../public/Landing.png";
import ecommerce from "../../public/eCommerce.png";

const items = [
  {
    id: 1,
    title: "Yum Yard",
    img: YumYard,
    des: "YumYard is a dynamic web application designed to help users discover, manage, and share recipes. ",
    url: "https://github.com/azdinserhani/YumYard-Client-Side.git",
  },
  {
    id: 2,
    title: "Glyco Vision",
    img: pharmacy,
    des: "Glyco Vision is a comprehensive web application designed to help users track and manage their blood sugar levels. It provides insightful charts and offers personalized advice based on symptoms. Additionally, it includes features for finding pharmacies on duty and giving patient advice.",
    url: "https://github.com/azdinserhani/Glyco-Vision_clients-site.git",
  },
  {
    id: 3,
    title: "Landing Page",
    img: Landing,
    des: "A sleek and modern landing page template for agencies, built with modern web technologies. This template is fully responsive and designed to help agencies showcase their services, portfolios, and team members in a visually appealing way.",
    url: "https://github.com/azdinserhani/landing-page-agency.git",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    img: ecommerce,
    des: "A full-stack e-commerce platform with a React client and an admin panel for managing products, orders, and users. The API supports smooth data handling for a seamless shopping experience.",
    url: "https://github.com/azdinserhani/e-commerce-client-side.git",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.des}</p>
            <a href={item.url}>
              <button>Git Repo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="project">
      <div className="progress">
        <h1>Latest Work</h1>
        <motion.div className="prpgressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Projects;
