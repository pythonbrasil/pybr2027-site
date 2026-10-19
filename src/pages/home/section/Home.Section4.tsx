import "../styles/Home.Section4.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PICTOGRAMAS } from "../../../data/pictogramas"

const PROXIMAS_SECOES = [
    { rota: "/programacao", chave: "programacao", pictograma: PICTOGRAMAS.carimbo },
    { rota: "/keynotes", chave: "keynotes", pictograma: PICTOGRAMAS.comunidade },
    { rota: "/guia_da_cidade", chave: "guiaDaCidade", pictograma: PICTOGRAMAS.acai },
    { rota: "/patrocinadores", chave: "patrocinadores", pictograma: PICTOGRAMAS.belemVivida },
]

export default function Home_Section4() {
    const { t } = useTranslation();

    return(<section className="Home_Section4" id="EM_CONSTRUCAO">
        <div className="secao_conteudo">
            <p className="secao_subtitulo Home_Section4_subtitulo">{t("home.section4.subtitulo")}</p>
            <h2>{t("home.section4.titulo")}</h2>
            <p className="Home_Section4_texto">{t("home.section4.texto")}</p>

            <div className="Home_Section4_itens">
                {PROXIMAS_SECOES.map((secao) => (
                    <Link to={secao.rota} className="Home_Section4_item" key={secao.rota}>
                        <img src={secao.pictograma.src} alt="" />
                        <div>
                            <h3>{t(`emConstrucao.secoes.${secao.chave}`)}</h3>
                            <span>{t("home.section4.emConstrucao")}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>)
}
