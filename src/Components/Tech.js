import React, { useEffect } from "react";
import { useAnimation, motion, useMotionValue, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";
import { technologies } from "../constants/links";
import { useInView } from "react-intersection-observer";

const containerTechVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2.5, //2.5 second is the duration of transition
            delay: 0.5,
        }
    }
}
const techVariants = {
    start: {
        opacity: 0,
        pathLength: 0
    },
    finished: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 16,
            delay: 1,
            ease: "easeInOut"
        }
    }
}

const Tech = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [100, -100], [-30, 30])

    const controls = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            variants={containerTechVariants}
            initial="hidden"
            className="flex md:flex-row flex-wrap justify-center items-center gap-10 mt-20 sm:px-16 px-6 sm:py-16 py-10 ">
            {technologies.map((technology, index) => (
                <Tilt
                    key={index}
                    style={{ prospective: 2000 }}
                >
                    <motion.div
                        variants={techVariants}
                        initial="start"
                        animate="finished"
                        style={{ x, y, rotateX, rotateY }}
                        whileTap={{ cursor: 'grabbing' }}
                        key={technology.name}
                        className=" flex justify-center items-center
                     rounded-full w-28 h-28 green-pink-gradient">
                        <div
                            className="skills flex justify-center items-center rounded-full w-[110px] h-[110px]"
                        >
                            <img
                                src={technology.icon}
                                className="w-24 h-24"
                                alt="tech" />
                        </div>
                    </motion.div>
                </Tilt>
            ))}
        </motion.div >

    )
}

export default Tech