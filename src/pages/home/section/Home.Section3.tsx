import "../styles/Home.Section3.css"
import { useTranslation } from "react-i18next";
import { PICTOGRAMAS } from "../../../data/pictogramas"

type Card = { titulo : string, texto : string }

const PICTOGRAMAS_CARDS = [
    PICTOGRAMAS.barco,
    PICTOGRAMAS.cobra,
    PICTOGRAMAS.comunidadeClaro,
    PICTOGRAMAS.acaiClaro,
]

export default function Home_Section3() {
    const { t } = useTranslation();
    const cards = t("home.section3.cards", { returnObjects: true }) as Card[];

    return(<section className="Home_Section3" id="BELEM">
        <div className="secao_conteudo">
            <div className="Home_Section3_cabecalho">
                <div>
                    <p className="secao_subtitulo">{t("home.section3.subtitulo")}</p>
                    <h2>{t("home.section3.titulo")}</h2>
                </div>
                <p>{t("home.section3.descricao")}</p>
            </div>
            <div className="Home_Section3_cards">
                {cards.map((card, indice) => (
                    <article className="Home_Section3_card" key={card.titulo}>
                        <img src={PICTOGRAMAS_CARDS[indice % PICTOGRAMAS_CARDS.length].src} alt="" />
                        <h3>{card.titulo}</h3>
                        <p>{card.texto}</p>
                    </article>
                ))}
            </div>
            <div className="Home_Section3_faixa" aria-hidden="true">
                <img src={PICTOGRAMAS.garca.src} alt="" />
                <img src={PICTOGRAMAS.sol.src} alt="" />
                <img src={PICTOGRAMAS.rio.src} alt="" />
                <img src={PICTOGRAMAS.belemVividaEscuro.src} alt="" />
                <img src={PICTOGRAMAS.carimboClaro.src} alt="" />
                <img src={PICTOGRAMAS.fitasClaro.src} alt="" />
            </div>
        </div>
    </section>)
}
