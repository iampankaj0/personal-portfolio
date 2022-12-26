import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0" }}>
          <Frontend />
        </motion.div>
        <motion.div initial={{ x: "100%" }} whileInView={{ x: "0" }}>
          <Backend />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
