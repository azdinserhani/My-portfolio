import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <a>
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </a>
        <a>
          <Link
            activeClass="active"
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </a>
        <a>
          <Link
            activeClass="active"
            to="project"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </a>
        <a>
          <Link
            activeClass="active"
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </a>
        <a>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Say Hello
          </Link>
        </a>
        <a onClick={() => setOpen(true)} className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </a>
      </div>

      <motion.div
        className="sideBar"
        style={{ display: open && "flex", transformOrigin: "right" }}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, scaleX: 0, transition: { duration: 1 ,ease:"easeInOut"} }}
      >
        <a onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </a>
        <a>
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </a>
        <a>
          <Link
            activeClass="active"
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </a>
        <a>
          <Link
            activeClass="active"
            to="project"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </a>
        <a>
          <Link
            activeClass="active"
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </a>
        <a>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Say Hello
          </Link>
        </a>
      </motion.div>
    </div>
  );
};

export default Navbar;
