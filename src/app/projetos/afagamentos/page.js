"use client";

import { useState } from "react";
import Image from "next/image";

export default function Afagamentos() {
  const [hoverAlbum, setHoverAlbum] = useState(null);
  const [verMais, setVerMais] = useState({});
  const [albumAtivo, setAlbumAtivo] = useState(null);
  const [imagemAtiva, setImagemAtiva] = useState(null);

  const albuns = [
    {
      id: "bambu",
      titulo: "Deck-Bambu",
      pasta: "/obras/deck-bambu",
      imagens: [
        "bambu1.webp",
        "bambu2.webp",
        "bambu3.webp",
        "bambu4.webp",
        "bambu5.webp",
        "bambu6.webp",
        "bambu7.webp",
        "bambu8.webp",
        "bambu9.webp",
      ],
    },
    {
      id: "Pigmentação",
      titulo: "Pigmentação",
      pasta: "/obras/pigmentacao",
      imagens: [
        "pigmentação1.webp",
        "pigmentação2.webp",
        "pigmentação3.webp",
        "pigmentação4.webp",
        "pigmentação5.webp",
        "pigmentação6.webp",
        "pigmentação7.webp",
        "pigmentação8.webp",
        "pigmentação9.webp",
      ],
    },
    {
      id: "Afagamento-Afizélia",
      titulo: "Afagamento-Afizélia",
      pasta: "/obras/afagamento-benetton",
      imagens: [
        "benetton1.webp",
        "benetton2.webp",
        "benetton3.webp",
        "benetton4.webp",
        "benetton5.webp",
        "benetton6.webp",
      ],
    },
    {
      id: "Afagamento-Pinho",
      titulo: "Afagamento-Pinho",
      pasta: "/obras/afagamento-pinho",
      imagens: [
        "pinho1.webp",
        "pinho2.webp",
        "pinho3.webp",
        "pinho4.webp",
        "pinho5.webp",
        "pinho6.webp",
        "pinho7.webp",
        "pinho8.webp",
        "pinho9.webp",
      ],
    },
    {
      id: "Afagamento-Azinho",
      titulo: "Afagamento-Azinho",
      pasta: "/obras/afagamento-azinho",
      imagens: [
        "azinho1.webp",
        "azinho2.webp",
        "azinho3.webp",
        "azinho4.webp",
        "azinho5.webp",
        "azinho6.webp",
        "azinho7.webp",
        "azinho8.webp",
        "azinho9.webp",
      ],
    },
    {
      id: "Afagamento-Assoalho",
      titulo: "Afagamento-Assoalho",
      pasta: "/obras/assoalho",
      imagens: [
        "Assoalho1.webp",
        "Assoalho2.webp",
        "Assoalho3.webp",
        "Assoalho4.webp",
        "Assoalho5.webp",
        "Assoalho6.webp",
        "Assoalho7.webp",
        "Assoalho8.webp",
        "Assoalho9.webp",
      ],
    },
    {
      id: "Afagamento-Taco",
      titulo: "Afagamento-Taco",
      pasta: "/obras/taco",
      imagens: [
        "taco1.webp",
        "taco2.webp",
        "taco3.webp",
        "taco4.webp",
        "taco5.webp",
        "taco6.webp",
        "taco7.webp",
        "taco8.webp",
        "taco9.webp",
      ],
    },
  ];

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

          <h1 className="mb-4 text-3xl font-semibold">
            Afagamento de Pavimentos em Madeira
          </h1>

          <p className="mb-12 max-w-3xl leading-7 text-gray-300">
            Somos especialistas em afagamento de pavimentos de madeira em
            Lisboa. Realizamos recuperação, lixagem e acabamento com alto padrão
            de qualidade, valorizando o aspecto natural da madeira e aumentando
            a durabilidade.
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

              {album.imagens.length > 4 && (
                <div className="mt-4 text-center">
                  <button
                    type="button"
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
            alt={`Imagem ${imagemAtiva + 1}`}
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
