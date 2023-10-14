import React, { useEffect } from "react";
import {
    useAnimation,
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tilt } from "react-tilt";
import { skills } from "../constants/links";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const containerVariants = {
    hidden: { x: 400, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 2.5, //2.5 second is the duration of transition
            delay: 0.5,
        },
    },
};

const About = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [100, -100], [-30, 30]);

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
        <motion.section
            ref={ref}
            animate={controls}
            variants={containerVariants}
            initial="hidden"
        >
            <div className="ml-2 flex flex-col justify-center">
                <p className={`${styles.sectionHeadText} `}>Introduction</p>
            </div>
            <p className=" mt-4 ml-2 text-secondary text-[17px] max-w-3xl leading-[30px]">
                A few years ago I discovered the world of programming and bought Jon Duckett's manual and started writing my first code, and it was love at first  tag. In love with the world of development and the incredible opportunities it offers, I decided to turn my life around and turn my passion into a career by enrolling in Epicode's intensive bootcamp.
                I have excellent interpersonal and communication skills gained from my experience in the administrative field, as well as excellent interpersonal, teamwork and problem-solving skills.
                I am currently looking for a work environment that will allow me to cultivate this passion and grow professionally.
            </p>
            <div className=" mt-20 flex flex-wrap justify-center items-center gap-10">
                <div className="mt-20 flex flex-wrap  md:flex-row gap-10 justify-center items-center">
                    {skills.map((skill, index) => (
                        <Tilt
                            key={index}
                            className="xs:w-[250px]"
                            style={{ prospective: 2000 }}
                        >
                            <motion.div
                                style={{ x, y, rotateX, rotateY }}
                                whileTap={{ cursor: "grabbing" }}
                                className="w-[250px]  green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                            >
                                <div className="skills rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                    <img
                                        src={skill.icon}
                                        alt="web-development"
                                        className="w-16 h-16 object-contain"
                                    />

                                    <h3 className="text-white text-[20px] font-bold text-center">
                                        {skill.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SectionWrapper(About, "about");
