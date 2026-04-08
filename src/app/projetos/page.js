import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Construção e Remodelação em Lisboa | Apex Construções",
  description:
    "Serviços de construção civil, remodelações e afagamento de madeira em Lisboa. Qualidade, organização e acabamento profissional.",
};

const categorias = [
  {
    id: "afagamentos",
    titulo: "Afagamentos",
    descricao:
      "Recuperação e acabamento de pavimentos em madeira com elevado padrão de qualidade.",
    imagem: "/obras/afagamento-benetton/benetton5.webp",
  },
  {
    id: "remodelacao",
    titulo: "Remodelações",
    descricao:
      "Transformação de espaços com soluções práticas, modernas e acabamento profissional.",
    imagem: "/obras/obra-alcantra/capa1.png",
  },
  // {
  //   id: "construcao",                   !!! Vou deixar como comentario, porque as fotos ainda não estão prontas!!!
  //   titulo: "Construção",
  //   descricao:
  //     "Execução de obras com planeamento, organização e qualidade em cada etapa.",
  //   imagem: "/obras/obra-3/capa.jpg",
  // },
];

export default function Projetos() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D24825]">
            Projetos
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Categorias de trabalhos
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria) => (
            <Link
              key={categoria.id}
              href={`/projetos/${categoria.id}`}
              className="group block overflow-hidden rounded-2xl border border-[#2F2F2F] bg-[#181818] transition duration-300 hover:-translate-y-2 hover:border-[#D24825]"
            >
              <div className="relative">
                <Image
                  src={categoria.imagem}
                  alt={categoria.titulo}
                  width={800}
                  height={500}
                  className="h-64 w-full rounded-xl object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
              </div>

              <div className="p-6 md:p-7">
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {categoria.titulo}
                </h2>
                <p className="text-sm leading-6 text-gray-300 max-w-md">
                  {categoria.descricao}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
