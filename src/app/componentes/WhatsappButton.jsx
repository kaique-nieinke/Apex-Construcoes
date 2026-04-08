"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/351936924097?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#D24825] text-white shadow-xl"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaWhatsapp size={30} />
      </motion.div>
    </motion.a>
  );
}
