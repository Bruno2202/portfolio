import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <motion.div
            id="contact"
            className="flex flex-col items-center justify-center w-full mb-40"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true }}
        >
            <p className="text-center font-thin mb-3 text-lg w-full">Quer criar algo?</p>
            <p className="text-center text-5xl w-full font-sfpro-bold">Vamos desenvolver juntos!</p>
            <ContactForm />
        </motion.div>
    );
}