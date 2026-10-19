import "./styles/Footer.css"
import logo from "/img/marca/logo.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LINK_APYB, LINK_CODIGO_DE_CONDUTA, LINK_COMPRAR_INGRESSO, LINK_PLANO_DE_PATROCINIO, REDES_SOCIAIS } from "../links"
import useScrollToId from "../hooks/useScrollToId"
import BotaoLink from "./BotaoLink"

export default function Footer() {
    const { t } = useTranslation();
    const scrollToId = useScrollToId();

    return (<footer className="Footer" id="CONTATO_footer">
        <div className="Footer_linhas" aria-hidden="true">
            <span className="Footer_linha Footer_linha_a"></span>
            <span className="Footer_linha Footer_linha_b"></span>
        </div>
        <div className="Footer_conteudo">
            <div className="Footer_logo">
                <img src={logo} alt="Python Brasil 27 · Belém, Pará" />
            </div>
            <div className="Footer_links">
                <div className="Footer_links_site">
                    <h4>{t("footer.site")}</h4>
                    <ul>
                        <li><button onClick={() => scrollToId("HOME")}>{t("footer.inicio")}</button></li>
                        <li><button onClick={() => scrollToId("O_EVENTO")}>{t("footer.oEvento")}</button></li>
                        <li><button onClick={() => scrollToId("BELEM")}>{t("footer.belem")}</button></li>
                        <li><Link to="/programacao">{t("footer.programacao")}</Link></li>
                        <li><Link to="/keynotes">{t("footer.keynotes")}</Link></li>
                        <li><Link to="/guia_da_cidade">{t("footer.guiaDaCidade")}</Link></li>
                        <li><Link to="/patrocinadores">{t("footer.patrocinadores")}</Link></li>
                        <li><Link to="/perguntas_frequentes">{t("footer.faq")}</Link></li>
                    </ul>
                </div>
                <div className="Footer_links_nossas_redes">
                    <h4>{t("footer.nossasRedes")}</h4>
                    <ul>
                        {REDES_SOCIAIS.map((rede) => (
                            <li key={rede.nome}><a href={rede.link} target="_blank" rel="noreferrer noopener">{rede.nome}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="Footer_links_da_apyb">
                    <h4>{t("footer.linksDaAPyB")}</h4>
                    <ul>
                        <li><a href={LINK_APYB} target="_blank" rel="noreferrer noopener">APyB</a></li>
                        <li><a href={LINK_CODIGO_DE_CONDUTA} target="_blank" rel="noreferrer noopener">{t("footer.codigoDeConduta")}</a></li>
                    </ul>
                </div>
                <div className="Footer_links_botoes">
                    <BotaoLink href={LINK_COMPRAR_INGRESSO} className="botao_laranja" emBreve={t("footer.emBreve")}>
                        {t("footer.comprarIngressos")}
                    </BotaoLink>
                    <BotaoLink href={LINK_PLANO_DE_PATROCINIO} className="botao_contorno" emBreve={t("footer.emBreve")}>
                        {t("footer.planoDePatrocinio")}
                    </BotaoLink>
                </div>
            </div>
        </div>
        <p className="Footer_direitos">{t("footer.direitos")}</p>
    </footer>)
}
