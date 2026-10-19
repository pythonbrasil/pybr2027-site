// Família de pictogramas da identidade Python Brasil 2027.
// Cinco temas: Python e comunidade (laranja), Rios e deslocamento (azul),
// Belém vivida (creme), Natureza (verde) e Movimento cultural (vermelho).

export type Pictograma = {
    src : string,
    alt : string,
    tema : "python_e_comunidade" | "rios_e_deslocamento" | "belem_vivida" | "natureza" | "movimento_cultural",
}

const P = "/img/pictogramas/"

export const PICTOGRAMAS = {
    cobra: { src: P + "cobra_claro.png", alt: "Serpente", tema: "python_e_comunidade" },
    cobraEscuro: { src: P + "cobra_escuro.png", alt: "Serpente", tema: "python_e_comunidade" },
    comunidade: { src: P + "comunidade.png", alt: "Pessoas em roda", tema: "python_e_comunidade" },
    comunidadeClaro: { src: P + "comunidade_claro.png", alt: "Pessoas em roda", tema: "python_e_comunidade" },
    rio: { src: P + "rio_claro.png", alt: "Encontro dos rios", tema: "rios_e_deslocamento" },
    barco: { src: P + "barco_claro.png", alt: "Barco", tema: "rios_e_deslocamento" },
    acai: { src: P + "acai.png", alt: "Cumbuca de açaí", tema: "belem_vivida" },
    acaiClaro: { src: P + "acai_claro.png", alt: "Cumbuca de açaí", tema: "belem_vivida" },
    belemVivida: { src: P + "belem_vivida.png", alt: "Belém vivida", tema: "belem_vivida" },
    belemVividaClaro: { src: P + "belem_vivida_claro.png", alt: "Belém vivida", tema: "belem_vivida" },
    belemVividaEscuro: { src: P + "belem_vivida_escuro.png", alt: "Belém vivida", tema: "belem_vivida" },
    garca: { src: P + "garca_claro.png", alt: "Garça", tema: "natureza" },
    sol: { src: P + "sol_claro.png", alt: "Sol sobre o rio", tema: "natureza" },
    carimbo: { src: P + "carimbo.png", alt: "Saia de carimbó", tema: "movimento_cultural" },
    carimboClaro: { src: P + "carimbo_claro.png", alt: "Saia de carimbó", tema: "movimento_cultural" },
    carimboEscuro: { src: P + "carimbo_escuro.png", alt: "Saia de carimbó", tema: "movimento_cultural" },
    fitas: { src: P + "fitas.png", alt: "Fitas", tema: "movimento_cultural" },
    fitasClaro: { src: P + "fitas_claro.png", alt: "Fitas", tema: "movimento_cultural" },
} satisfies Record<string, Pictograma>
