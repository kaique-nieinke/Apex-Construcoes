"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../componentes/Header";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const [formData, setFormData] = useState({
    from_name: "",
    phone: "",
    reply_to: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setFeedback("");

    try {
      await emailjs.send(
        "service_phgk7lx",
        "template_z9vjlq9",
        formData,
        "ZhfkMZrQYvbrGogp3",
      );

      setFeedback(
        "Recebemos o seu pedido. Vamos entrar em contacto brevemente.",
      );
      setFormData({
        from_name: "",
        phone: "",
        reply_to: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setFeedback("Não foi possível enviar. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0B0B0B] px-6 pb-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div
            className="text-center"
            style={{ marginTop: "220px", marginBottom: "80px" }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D24825]">
              Contato
            </p>

            <h1 className="text-4xl font-semibold md:text-5xl">
              Fale connosco sobre o seu projeto
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300">
              Entre em contacto para pedir orçamento, esclarecer dúvidas ou
              apresentar o seu projeto. O atendimento é feito com rapidez,
              organização e profissionalismo.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#2F2F2F] bg-[#181818] p-6">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  WhatsApp
                </h2>
                <a
                  href="https://wa.me/351936924097?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm leading-7 text-[#D24825] transition hover:opacity-80"
                >
                  +351 936 924 097
                </a>
              </div>

              <div className="rounded-2xl border border-[#2F2F2F] bg-[#181818] p-6">
                <h2 className="mb-4 text-lg font-semibold text-white">Email</h2>
                <a
                  href="mailto:kaiquenieinke@yahoo.com"
                  className="text-sm leading-7 text-[#D24825] transition hover:opacity-80"
                >
                  kaiquenieinke@yahoo.com
                </a>
              </div>

              <div className="rounded-2xl border border-[#2F2F2F] bg-[#181818] p-6">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Horário
                </h2>
                <p className="text-sm leading-7 text-gray-300">
                  Seg a Sex 08:00h – 19:00h
                  <br />
                  Sabado 08:00h – 16:00h
                </p>
              </div>

              <div className="rounded-2xl border border-[#2F2F2F] bg-[#181818] p-6">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Localização
                </h2>
                <p className="text-sm leading-7 text-gray-300">
                  Base em Lisboa.
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Atendimento em Portugal, com análise de deslocação conforme o
                  tipo de projeto e localização.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-[#2F2F2F] bg-[#181818] p-8">
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  Pedido de contacto
                </h2>

                <p className="mb-6 max-w-xl text-sm leading-7 text-gray-300">
                  Preencha o formulário abaixo e entraremos em contacto consigo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="Nome completo"
                      required
                      className="w-full rounded-xl border border-[#2F2F2F] bg-[#111111] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#D24825]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Telefone ou WhatsApp
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="O seu contacto"
                      required
                      className="w-full rounded-xl border border-[#2F2F2F] bg-[#111111] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#D24825]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="reply_to"
                      value={formData.reply_to}
                      onChange={handleChange}
                      placeholder="O seu email"
                      required
                      className="w-full rounded-xl border border-[#2F2F2F] bg-[#111111] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#D24825]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Mensagem
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva resumidamente o que pretende"
                      required
                      className="w-full rounded-xl border border-[#2F2F2F] bg-[#111111] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#D24825]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-full bg-[#D24825] px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#A8371C] disabled:opacity-60"
                  >
                    {sending ? "Enviando..." : "Enviar pedido"}
                  </button>

                  {feedback && (
                    <p className="text-sm text-gray-300">{feedback}</p>
                  )}
                </form>
              </div>

              <div className="rounded-2xl border border-[#2F2F2F] bg-[#181818] p-8">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Localização
                </h2>

                <p className="mb-6 text-sm leading-7 text-gray-300">
                  Localização base em Lisboa, com atendimento e deslocação
                  conforme o tipo de projeto.
                </p>

                <div className="h-[520px] overflow-hidden rounded-2xl border border-[#2F2F2F] bg-[#111111] md:h-[680px] lg:h-[760px]">
                  <iframe
                    title="Mapa de localização"
                    src="https://www.google.com/maps?q=Lisboa&output=embed"
                    className="block h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-sm text-[#D24825] transition hover:opacity-80"
            >
              Voltar à página inicial
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
