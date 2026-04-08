import Image from "next/image";

export default function ObraAlcantra() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-3xl font-semibold">Loft-Alcantra</h1>

        <div className="grid gap-4 md:grid-cols-2">
          <Image
            src="/obras/obra-alcantra/foto1.jpg"
            alt="Loft Alcântara 1"
            width={800}
            height={500}
            className="w-full h-80 object-cover rounded-xl"
          />
          <Image
            src="/obras/obra-alcantra/foto2.png"
            alt="Loft Alcântara 2"
            width={800}
            height={500}
            className="w-full h-80 object-cover rounded-xl"
          />
          <Image
            src="/obras/obra-alcantra/foto3.png"
            alt="Loft Alcântara 3"
            width={800}
            height={500}
            className="w-full h-80 object-cover rounded-xl"
          />
          <Image
            src="/obras/obra-alcantra/foto4.png"
            alt="Loft Alcântara 4"
            width={800}
            height={500}
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
