import Header from "./componentes/Header";
import WhatsappButton from "./componentes/WhatsappButton";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A]">
      <Header />

      <section className="flex min-h-screen items-center justify-center px-6 pt-28">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D24825]">
            Construção Civil
          </p>

          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
            Construção e remodelação com organização e acabamento de alto nível.
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            A Apex Construções atua em Lisboa com foco em qualidade, organização
            e execução profissional em cada etapa da obra.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#contacto"
              className="rounded-full bg-[#D24825] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#A8371C]"
            >
              Pedir orçamento
            </a>

            <Link
              href="/projetos"
              className="rounded-full border border-[#2F2F2F] bg-[#181818] px-6 py-3 font-semibold text-white transition hover:border-[#D24825]"
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="border-t border-white/10 bg-[#111111] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D24825]">
              Sobre a empresa
            </p>

            <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Experiência em construção com foco em qualidade e execução.
            </h2>

            <p className="mb-4 text-base leading-7 text-gray-300">
              A Apex Construções atua na construção civil com compromisso,
              organização e atenção aos detalhes. Cada projeto é tratado com
              seriedade, desde o planeamento até à entrega final.
            </p>

            <p className="text-base leading-7 text-gray-300">
              O nosso objetivo é oferecer soluções sólidas, funcionais e bem
              executadas, transmitindo confiança ao cliente em cada etapa da
              obra.
            </p>
          </div>

          <div className="rounded-3xl border border-[#2F2F2F] bg-[#181818] p-8 shadow-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-3xl font-semibold text-[#D24825]">+</p>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Compromisso
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                  Trabalhamos com responsabilidade e foco na satisfação do
                  cliente.
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#D24825]">+</p>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Qualidade
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                  Priorizamos acabamento, organização e atenção aos detalhes.
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#D24825]">+</p>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Confiança
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                  Construímos relações transparentes e duradouras com cada
                  cliente.
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#D24825]">+</p>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Execução
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                  Soluções práticas e bem executadas para diferentes tipos de
                  obra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="border-t border-white/10 bg-[#111111] px-6 py-24"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D24825]">
              Serviços
            </p>

            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Soluções completas em construção
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
              Construção, remodelação, cozinhas, pavimentos e afagamento com
              qualidade profissional.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* CARD */}
            <div className="overflow-hidden rounded-2xl border border-[#2F2F2F] bg-[#181818] transition hover:border-[#D24825]">
              <Image
                src="/imagens-home/construcao.PNG"
                alt="Construção"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-white">
                  Construção
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Obras completas com qualidade.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#2F2F2F] bg-[#181818] transition hover:border-[#D24825]">
              <Image
                src="/imagens-home/remodelacao.PNG"
                alt="Remodelação"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-white">
                  Remodelação
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Renovação profissional.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#2F2F2F] bg-[#181818] transition hover:border-[#D24825]">
              <Image
                src="/imagens-home/cozinhas.PNG"
                alt="Cozinhas"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-white">Cozinhas</h3>
                <p className="mt-1 text-sm text-gray-300">Montagem precisa.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#2F2F2F] bg-[#181818] transition hover:border-[#D24825]">
              <Image
                src="/imagens-home/caixilharia.PNG"
                alt="Caixilharias"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-white">
                  Caixilharias
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Acabamentos de qualidade.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#2F2F2F] bg-[#181818] transition hover:border-[#D24825]">
              <Image
                src="/imagens-home/pavimento.PNG"
                alt="Pavimentos"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-white">
                  Pavimentos
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  Instalação perfeita.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#2F2F2F] bg-[#181818] transition hover:border-[#D24825]">
              <Image
                src="/imagens-home/afagamento.PNG"
                alt="Afagamentos"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-white">
                  Afagamentos
                </h3>
                <p className="mt-1 text-sm text-gray-300">Madeira renovada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="border-t border-white/10 bg-[#111111] px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D24825]">
            Contacto
          </p>

          <h2 className="mb-6 text-3xl font-semibold text-white md:text-5xl">
            Vamos conversar sobre o seu projeto
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-gray-300">
            Entre em contacto para orçamento ou mais informações. Respondemos
            com rapidez, organização e profissionalismo.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/351936924097?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#D24825] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#A8371C]"
            >
              WhatsApp
            </a>

            <a
              href="mailto:geral@apexconstrucoes.pt"
              className="rounded-full border border-[#2F2F2F] bg-[#181818] px-8 py-4 font-semibold text-white transition hover:border-[#D24825]"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      <WhatsappButton />

      <footer className="border-t border-white/10 bg-[#080808] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
          <p>© 2026 Apex Construções. Todos os direitos reservados.</p>
          <p>Construção civil com qualidade, detalhe e confiança.</p>
        </div>
      </footer>
    </main>
  );
}
