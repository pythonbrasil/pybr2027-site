import "../styles/Home.Section2.css"
import { useTranslation, Trans } from "react-i18next";
import { PICTOGRAMAS } from "../../../data/pictogramas"

const DESTAQUE = { destaque: <span className="destaque" /> };

export default function Home_Section2() {
    const { t } = useTranslation();

    return(<section className="Home_Section2" id="O_EVENTO">
        <div className="Home_Section2_conteudo secao_conteudo">
            <div className="Home_Section2_parte_esquerda" aria-hidden="true">
                <img className="Home_Section2_modulo_grande" src={PICTOGRAMAS.comunidade.src} alt="" />
                <img src={PICTOGRAMAS.carimbo.src} alt="" />
                <img src={PICTOGRAMAS.belemVivida.src} alt="" />
            </div>
            <div className="Home_Section2_parte_direita">
                <p className="secao_subtitulo">Python Brasil 2027</p>
                <h2>{t("home.section2.titulo")}</h2>
                <div className="Home_Section2_parte_direita_texto">
                    <p><Trans i18nKey="home.section2.paragrafo1" components={DESTAQUE} /></p>
                    <p>{t("home.section2.paragrafo2")}</p>
                    <p><Trans i18nKey="home.section2.paragrafo3" components={DESTAQUE} /></p>
                </div>
                <div className="Home_Section2_conceito">
                    <img src={PICTOGRAMAS.rio.src} alt="" />
                    <div>
                        <h3>{t("home.section2.conceitoTitulo")}</h3>
                        <p>{t("home.section2.conceitoTexto")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
