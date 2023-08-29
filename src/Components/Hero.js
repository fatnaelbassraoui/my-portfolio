import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { CV } from "../Assets";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 2, //2 second is the duration of transition
                        delay: 0.7,
                    }}
                    whileHover={{ opacity: 0.4 }}
                    className="flex flex-col justify-center items-center mt-5"
                >
                    <div className="w-5 h-5 rounded-full bg-[#ee4da8]" />
                    <div className="w-1 sm:h-80 h-40  pink-gradient" />
                </motion.div>
                <div>
                    <motion.h1
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 2, //2 second is the duration of transition
                            delay: 0.5,
                        }}
                        whileHover={{ opacity: 0.4 }}
                        className={`${styles.heroHeadText} text-white`}
                    >
                        Hi, I'm &nbsp;
                        {/*&nbsp serve per creare spazio fra gli elementi*/}
                        <span className="text-[#ee4da8]">Fatna</span>
                    </motion.h1>
                    <motion.p
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 2, //2 second is the duration of transition
                            delay: 0.5,
                        }}
                        whileHover={{ opacity: 0.4 }}
                        className={`${styles.heroSubText} mt-2 mb-2 text-white-100`}
                    >
                        I'm a junior full-stack developer
                        <br />
                        and looking for a junior dev position.
                    </motion.p>
                    <motion.div
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 2, //2 second is the duration of transition
                            delay: 0.5,
                        }}
                        whileHover={{ opacity: 0.7 }}
                        className="flex justify-start items-center mt-20"
                    >
                        <button className="rounded-full heroBtn w-36 h-12">
                            <a href={CV} download>
                                Download CV
                            </a>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/*creo il button per lo scroll */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
