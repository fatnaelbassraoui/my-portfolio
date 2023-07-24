import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CV } from "../Assets";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const containerContactVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2, //2 second is the duration of transition
      delay: 0.6,
      ease: "easeInOut",
    },
  },
};
//DFPKQHNibV-dbbDbV   public key
//template_zibkfxy    template id
//service_h4zr6yc  service id

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_h4zr6yc",
        "template_zibkfxy",
        {
          form_name: form.name,
          to_name: "Fatna",
          form_email: form.email,
          to_email: "elbassraouifatna@gmail.com",
          message: form.message,
        },
        "DFPKQHNibV-dbbDbV"
      )
      .then(
        () => {
          setLoading
            ? alert("thank you i will get back to you as soon as possible ")
            : alert("Sorry an error is occurred");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

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
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-between
      `}
    >
      <motion.div
        ref={ref}
        animate={controls}
        variants={containerContactVariants}
        initial="hidden"
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        variants={containerContactVariants}
        initial="hidden"
        className="flex justify-center items-center"
      >
        <button className="rounded-full bg-tertiary w-36 h-12">
          <a href={CV} download>
            Download CV
          </a>
        </button>
      </motion.div>

      {/* <motion.div
        ref={ref}
        animate={controls}
        variants={containerContactVariants}
        initial="hidden"
        className="flex  justify-center  items-center gap-10"
      >
        {socialContacts.map((social) => (

          <img
            src={social.image}
            className="w-12 h-12"
            alt="tech" />

        ))}
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
