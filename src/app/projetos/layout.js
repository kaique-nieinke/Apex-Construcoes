import Header from "../componentes/Header";
export const metadata = {
  title: "Apex Construções | Construção e Remodelação em Lisboa",
  description:
    "Empresa de construção civil em Lisboa especializada em remodelações, afagamento de madeira e acabamentos de alta qualidade.",
};

export default function ProjetosLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B0B0B] pt-32">{children}</main>
    </>
  );
}
