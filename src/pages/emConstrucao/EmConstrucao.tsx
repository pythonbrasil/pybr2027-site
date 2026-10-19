import "./styles/EmConstrucao.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PICTOGRAMAS } from "../../data/pictogramas"

type Props = {
    secao : "programacao" | "keynotes" | "guiaDaCidade" | "patrocinadores" | "faq" | "paginaNaoEncontrada",
}

export default function EmConstrucao({ secao } : Props) {
    const { t } = useTranslation();

    return (<section className="EmConstrucao">
        <div className="EmConstrucao_conteudo secao_conteudo">
            <div className="EmConstrucao_modulos" aria-hidden="true">
                <img src={PICTOGRAMAS.cobraEscuro.src} alt="" />
                <img src={PICTOGRAMAS.belemVivida.src} alt="" />
            </div>
            <div className="EmConstrucao_texto">
                <span className="EmConstrucao_selo">{t("emConstrucao.titulo")}</span>
                <h1>{t(`emConstrucao.secoes.${secao}`)}</h1>
                <p>{t("emConstrucao.texto")}</p>
                <Link to="/" className="botao botao_verde">{t("emConstrucao.voltar")}</Link>
            </div>
        </div>
    </section>)
}
