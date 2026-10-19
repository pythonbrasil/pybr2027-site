import "../styles/Home.Section1.css"
import { useTranslation } from "react-i18next";
import { PICTOGRAMAS } from "../../../data/pictogramas"
import useScrollToId from "../../../hooks/useScrollToId"

export default function Home_Section1() {
    const { t } = useTranslation();
    const scrollToId = useScrollToId();

    return(
        <section className="Home_Section1" id="HOME">
            <div className="Home_Section1_conteudo secao_conteudo">
                <div className="Home_Section1_texto">
                    <p className="Home_Section1_data">{t("home.section1.data")} · {t("home.section1.local")}</p>
                    <h1>{t("home.section1.titulo")}</h1>
                    <p className="Home_Section1_slogan">{t("home.section1.slogan")}</p>
                    <div className="Home_Section1_botoes">
                        <button className="botao botao_laranja" onClick={() => scrollToId("O_EVENTO")}>
                            {t("home.section1.conhecaOEvento")}
                        </button>
                        <button className="botao botao_contorno Home_Section1_botao_contorno" onClick={() => scrollToId("BELEM")}>
                            {t("home.section1.conhecaBelem")}
                        </button>
                    </div>
                </div>

                <div className="Home_Section1_modulos" aria-hidden="true">
                    <img className="modulo" src={PICTOGRAMAS.comunidadeClaro.src} alt="" />
                    <div className="modulo modulo_2x1 modulo_palavra modulo_laranja modulo_linha_vertical">
                        {t("home.section1.moduloBelem")}
                    </div>

                    <img className="modulo" src={PICTOGRAMAS.fitasClaro.src} alt="" />
                    <img className="modulo" src={PICTOGRAMAS.acai.src} alt="" />
                    <img className="modulo" src={PICTOGRAMAS.carimboEscuro.src} alt="" />

                    <div className="modulo modulo_2x1 modulo_palavra modulo_creme modulo_linha_horizontal">
                        {t("home.section1.moduloComunidade")}
                    </div>
                    <img className="modulo" src={PICTOGRAMAS.belemVividaEscuro.src} alt="" />

                    <div className="modulo modulo_2x1 modulo_info">
                        <span>{t("home.section1.moduloInfoTitulo")}</span>
                        <strong>{t("home.section1.local")}</strong>
                        <p>{t("home.section1.moduloInfoTexto")}</p>
                    </div>
                    <img className="modulo" src={PICTOGRAMAS.cobraEscuro.src} alt="" />
                </div>
            </div>
        </section>
    )
}
