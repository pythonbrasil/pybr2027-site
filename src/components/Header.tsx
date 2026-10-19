import "./styles/Header.css"
import "./styles/Menu.css"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/img/marca/logo.png"
import { LINK_COMPRAR_INGRESSO, LINK_PLANO_DE_PATROCINIO } from "../links"
import { PICTOGRAMAS } from "../data/pictogramas"
import useScrollToId from "../hooks/useScrollToId"
import BotaoLink from "./BotaoLink"

const LINGUAS = [
    { codigo: "br", rotulo: "BR" },
    { codigo: "en", rotulo: "EN" },
    { codigo: "es", rotulo: "ES" },
]

const PICTOGRAMAS_MENU = [
    PICTOGRAMAS.cobraEscuro,
    PICTOGRAMAS.acai,
    PICTOGRAMAS.carimbo,
    PICTOGRAMAS.comunidade,
    PICTOGRAMAS.belemVivida,
    PICTOGRAMAS.fitas,
]

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const scrollToId = useScrollToId();

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "";
        const fecharComEsc = (e : KeyboardEvent) => e.key === "Escape" && setIsModalOpen(false);
        window.addEventListener("keydown", fecharComEsc);
        return () => window.removeEventListener("keydown", fecharComEsc);
    }, [isModalOpen]);

    useEffect(() => {
        document.documentElement.lang = i18n.language === "br" ? "pt-br" : i18n.language;
    }, [i18n.language]);

    const irPara = (id : string) => {
        setIsModalOpen(false);
        scrollToId(id);
    };

    const fechar = () => setIsModalOpen(false);

    return (<header className="Header">
        <div className="Header_itens">
            <nav className="Header_menu_esquerdo">
                <button className="Header_botao_menu" onClick={() => setIsModalOpen(true)} aria-expanded={isModalOpen} aria-controls="menu-principal">
                    <span className="Header_hamburguer" aria-hidden="true"><span></span><span></span><span></span></span>
                    <span>{t("header.menu.abrir")}</span>
                </button>
                <button className="Header_link Header_menu_desktop" onClick={() => irPara("O_EVENTO")}>{t("header.OEvento")}</button>
                <button className="Header_link Header_menu_desktop" onClick={() => irPara("BELEM")}>{t("header.Belem")}</button>
            </nav>

            <div className="Header_logo">
                <Link to='/' aria-label="Python Brasil 2027 · Belém, Pará"><img src={logo} alt="Python Brasil 27 · Belém, Pará" /></Link>
            </div>

            <div className="Header_menu_direito">
                <ul className="Header_linguagem">
                    {LINGUAS.map((lingua) => (
                        <li key={lingua.codigo}>
                            <button
                                className={i18n.language === lingua.codigo ? "lingua_selecionada" : ""}
                                aria-pressed={i18n.language === lingua.codigo}
                                onClick={() => i18n.changeLanguage(lingua.codigo)}
                            >
                                {lingua.rotulo}
                            </button>
                        </li>
                    ))}
                </ul>
                <BotaoLink href={LINK_COMPRAR_INGRESSO} className="botao_laranja Header_botao_ingresso">
                    {LINK_COMPRAR_INGRESSO ? t("header.ComprarIngresso") : t("header.emBreve")}
                </BotaoLink>
            </div>
        </div>

        <div id="menu-principal" className={`Menu ${isModalOpen ? "aberto" : ""}`} role="dialog" aria-modal="true" aria-hidden={!isModalOpen}>
            <div className="Menu_itens">
                <div className="Menu_itens_botoes">
                    <div className="Menu_itens_botoes_linha1">
                        <img src={logo} alt="Python Brasil 27 · Belém, Pará" />
                        <button className="Menu_fechar" onClick={fechar}>
                            <span aria-hidden="true">✕</span>
                            <span>{t("header.menu.fechar")}</span>
                        </button>
                    </div>
                    <nav className="Menu_itens_botoes_linha2">
                        <Link to='/' onClick={() => irPara("HOME")}>{t("header.menu.inicio")}</Link>
                        <Link to='/' onClick={() => irPara("O_EVENTO")}>{t("header.menu.oEvento")}</Link>
                        <Link to='/programacao' onClick={fechar}>{t("header.menu.programacao")}</Link>
                        <Link to='/keynotes' onClick={fechar}>{t("header.menu.keynotes")}</Link>
                        <Link to='/guia_da_cidade' onClick={fechar}>{t("header.menu.guiaDaCidade")}</Link>
                        <Link to='/patrocinadores' onClick={fechar}>{t("header.menu.patrocinadores")}</Link>
                        <Link to='/perguntas_frequentes' onClick={fechar}>{t("header.menu.faq")}</Link>
                        <button onClick={() => irPara("CONTATO_footer")}>{t("header.menu.contato")}</button>
                    </nav>
                    <div className="Menu_itens_botoes_linha3">
                        <BotaoLink href={LINK_COMPRAR_INGRESSO} className="botao_laranja" emBreve={t("header.menu.emBreve")} onClick={fechar}>
                            {t("header.menu.ComprarIngresso")}
                        </BotaoLink>
                        <BotaoLink href={LINK_PLANO_DE_PATROCINIO} className="botao_contorno" emBreve={t("header.menu.emBreve")} onClick={fechar}>
                            {t("header.menu.planoDePatrocinio")}
                        </BotaoLink>
                    </div>
                </div>
                <div className="Menu_pictogramas" aria-hidden="true">
                    {PICTOGRAMAS_MENU.map((p) => <img key={p.src} src={p.src} alt="" />)}
                </div>
            </div>
        </div>
    </header>)
}
