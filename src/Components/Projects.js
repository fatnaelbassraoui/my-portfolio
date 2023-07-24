import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../Assets";
import { browserIcon } from "../Assets";
import { projects } from "../constants/links";
import { projects2 } from "../constants/links";

const containerVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2.5, //2.5 second is the duration of transition
      delay: 0.5,
    },
  },
};

//card progetti con backend

const ProjectCard = ({ index, name, description, image, web_site_link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  return (
    <motion.div style={{ x, y, rotateX, rotateY, z: 50 }}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[340px] sm:h-[500px] relative">
        <div className=" w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-60 rounded-2xl" />
        </div>

        <div className="absolute inset-0 flex flex-col justify- items-end m-6 card-img_hover ">
          <Link to={web_site_link}>
            <div className="blue-gradient mb-1 w-[75px] h-[75px] rounded-full flex justify-center items-center cursor-pointer ">
              <img
                src={browserIcon}
                alt={browserIcon}
                className="w-1/2 h-1/2 object-contain rounded-full"
              />
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-lg mb-2">{name}</h3>
          <p className="text-zinc-300">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

//card progetti senza backend
const ProjectCard2 = ({
  name,
  description,
  image,
  source_code_link,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  return (
    <motion.div style={{ x, y, rotateX, rotateY, z: 50 }}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[340px] sm:h-[500px] relative">
        <div className=" w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-60 rounded-2xl" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-start items-end m-6 card-img_hover ">
          <Link to={source_code_link}>
            <div className="absolute inset-0 flex flex-col justify-start items-end m-6 card-img_hover ">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mb-1">
                <img
                  src={github}
                  alt={github}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-lg mb-2">{name}</h3>
          <p className="text-zinc-300">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  //L'hook useAnimation ti dà accesso ai metodi helper start e stop per darti un maggiore controllo su quando l'animazione inizia e finisce. Utilizzerai il metodo start per impostare quale animazione viene attivata quando l'elemento è in vista.
  const controls = useAnimation();
  //Si usa la destructing dell'array per estrarre ref e inView da useInView return.
  //L'hook useInView restituisce un array con un ref e un inView booleano che controlla se lo stato di un elemento visualizzato è true o false.
  const [ref, inView] = useInView();

  //Trigger Animation with useEffect (Attiva l'animazione con useEffect)
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        variants={containerVariants}
        initial="hidden"
        className="mt-20 ml-2 flex flex-col justify-center "
      >
        <h2 className={`${styles.sectionHeadText} `}>Projects</h2>
        <div className="flex flex-col max-w-[1400px] ">
          {/* card progetti con backend */}
          <div
            style={{ perspective: 2000 }}
            drag="true"
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
            className="mt-20 flex flex-wrap gap-8 justify-center items-center"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
          {/*card progetti senza backend*/}
          <div
            style={{ perspective: 2000 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
            className="mt-20 flex flex-wrap gap-8 justify-center items-center"
          >
            {projects2.map((project, index) => (
              <ProjectCard2
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
