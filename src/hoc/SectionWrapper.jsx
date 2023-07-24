import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../Utils/Motion";

//questo componente finge da wrapper a tutti gli alti componenti permettendoci di dargli lo stesso margine e renderli centrali.
//questo componenete mi ritorna un'altra function. IdName mi pemetterà di navigare nelle varie sezioni(about ecc.)

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
