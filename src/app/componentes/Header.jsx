"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const mobileMenuContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const mobileMenuItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function navLinkClass(href) {
    return `text-sm transition ${
      pathname === href
        ? "text-[#D24825]"
        : "text-[#B8B8B8] hover:text-[#D24825]"
    }`;
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0B0B0B]/80 backdrop-blur">
      {" "}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {" "}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          {" "}
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={48}
            className="h-12 w-auto"
          />{" "}
        </Link>{" "}
        <nav className="hidden gap-8 md:flex">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={navLinkClass("/")}
          >
            Início
          </Link>

          <a
            href="/#sobre"
            className="text-sm text-[#B8B8B8] transition hover:text-[#D24825]"
          >
            Sobre
          </a>

          <a
            href="/#servicos"
            className="text-sm text-[#B8B8B8] transition hover:text-[#D24825]"
          >
            Serviços
          </a>

          <Link href="/projetos" className={navLinkClass("/projetos")}>
            Projetos
          </Link>

          <Link href="/contacto" className={navLinkClass("/contacto")}>
            Contacto
          </Link>
        </nav>
        <a
          href="https://wa.me/351936924097?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-[#D24825] px-4 py-2 text-sm font-medium text-[#D24825] transition hover:bg-[#D24825] hover:text-white md:inline-flex"
        >
          {" "}
          Orçamento{" "}
        </a>{" "}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2F2F2F] bg-[#181818] text-lg text-white transition hover:border-[#D24825] md:hidden"
          aria-label="Abrir menu"
        >
          {" "}
          {menuOpen ? "✕" : "☰"}{" "}
        </button>{" "}
      </div>{" "}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border-t border-white/10 bg-[#0B0B0B]/95 px-6 py-4 backdrop-blur md:hidden"
        >
          {" "}
          <motion.nav
            variants={mobileMenuContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4"
          >
            <motion.div variants={mobileMenuItem}>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass("/")}
              >
                Início
              </Link>
            </motion.div>

            <motion.a
              variants={mobileMenuItem}
              href="/#sobre"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#B8B8B8] transition hover:text-[#D24825]"
            >
              Sobre
            </motion.a>

            <motion.a
              variants={mobileMenuItem}
              href="/#servicos"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#B8B8B8] transition hover:text-[#D24825]"
            >
              Serviços
            </motion.a>

            <motion.div variants={mobileMenuItem}>
              <Link
                href="/projetos"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass("/projetos")}
              >
                Projetos
              </Link>
            </motion.div>

            <motion.div variants={mobileMenuItem}>
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass("/contacto")}
              >
                Contacto
              </Link>
            </motion.div>

            <motion.a
              variants={mobileMenuItem}
              href="https://wa.me/351936924097?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#B8B8B8] transition hover:text-[#D24825]"
            >
              Orçamento
            </motion.a>
          </motion.nav>
        </motion.div>
      )}{" "}
    </header>
  );
}
