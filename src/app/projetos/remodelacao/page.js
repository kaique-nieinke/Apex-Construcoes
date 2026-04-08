"use client";

import { useState } from "react";
import Image from "next/image";

export default function Remodelacao() {
  const albuns = [
    {
      id: "loft-alcantra",
      titulo: "Loft Alcântara",
      pasta: "/obras/obra-alcantra",
      imagens: [
        "foto1.jpg",
        "foto2.png",
        "foto3.png",
        "foto4.png",
        "foto5.png",
        "foto6.png",
        "foto7.png",
        "foto8.png",
        "foto9.png",
        "foto10.png",
        "foto11.png",
        "foto12.png",
        "foto13.png",
        "foto14.png",
      ],
    },
    //{                             !!! Vou deixar como comentario, porque as fotos ainda não estão prontas!!!
    //  id: "vivenda-carcavelos",
    //  titulo: "Vivenda Carcavelos",
    //  pasta: "/obras/obra-carcavelos",
    //  imagens: ["capa.jpg"],
    // },
  ];

  const [albumAtivo, setAlbumAtivo] = useState(null);
  const [imagemAtiva, setImagemAtiva] = useState(null);
  const [verMais, setVerMais] = useState({});
  const [hoverAlbum, setHoverAlbum] = useState(null);

  const abrirImagem = (albumId, index) => {
    setAlbumAtivo(albumId);
    setImagemAtiva(index);
  };

  const fecharImagem = () => {
    setAlbumAtivo(null);
    setImagemAtiva(null);
  };

  const albumAtual = albuns.find((album) => album.id === albumAtivo);

  const imagemAnterior = () => {
    if (!albumAtual) return;

    setImagemAtiva((prev) =>
      prev === 0 ? albumAtual.imagens.length - 1 : prev - 1,
    );
  };

  const proximaImagem = () => {
    if (!albumAtual) return;

    setImagemAtiva((prev) =>
      prev === albumAtual.imagens.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <>
      <main className="min-h-screen bg-[#0B0B0B] px-6 pb-10 text-white">
        <div className="mx-auto max-w-7xl pt-28">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D24825]">
            Projetos
          </p>
          <h1 className="mb-4 text-3xl font-semibold">Remodelações</h1>
          <p className="mb-12 max-w-3xl leading-7 text-gray-300">
            Somos especialistas em remodelação de espaços. Transformamos
            ambientes com soluções práticas e acabamentos de alto nível,
            valorizando cada detalhe e garantindo um resultado final de
            qualidade.
          </p>

          {albuns.map((album, index) => (
            <div key={album.id} className="w-full">
              {index !== 0 && <div style={{ height: "30px" }}></div>}

              <h2 className="mb-4 text-xl">{album.titulo}</h2>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {album.imagens
                  .slice(0, verMais[album.id] ? album.imagens.length : 3)
                  .map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => abrirImagem(album.id, i)}
                      className="relative z-10 overflow-hidden rounded-xl text-left"
                      style={{ height: "300px" }}
                    >
                      <Image
                        src={`${album.pasta}/${img}`}
                        alt={`${album.titulo} ${i + 1}`}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </button>
                  ))}
              </div>

              {album.imagens.length > 3 && (
                <div className="mt-4 text-center">
                  <button
                    onMouseEnter={() => setHoverAlbum(album.id)}
                    onMouseLeave={() => setHoverAlbum(null)}
                    onClick={() =>
                      setVerMais((prev) => ({
                        ...prev,
                        [album.id]: !prev[album.id],
                      }))
                    }
                    className="text-sm text-[#D24825]"
                    style={{
                      textDecoration:
                        hoverAlbum === album.id ? "underline" : "none",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {verMais[album.id] ? "Ver menos" : "Ver mais"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {imagemAtiva !== null && albumAtual && (
        <div
          onClick={fecharImagem}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: "20px",
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              fecharImagem();
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              zIndex: 100000,
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 14px",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              imagemAnterior();
            }}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 100000,
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 16px",
              fontSize: "42px",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <img
            onClick={(e) => e.stopPropagation()}
            src={`${albumAtual.pasta}/${albumAtual.imagens[imagemAtiva]}`}
            alt={`${albumAtual.titulo} ${imagemAtiva + 1}`}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "12px",
              display: "block",
            }}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              proximaImagem();
            }}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 100000,
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 16px",
              fontSize: "42px",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
