import './styles/ButtonPrincipal.css'
import { useTranslation } from "react-i18next";
import { LINK_COMPRAR_INGRESSO, LINK_FORMULARIO_CDC } from "../links"

export default function ButtonPrincipal() {
    const { t } = useTranslation();

    return(
    <div className='ButtonPrincipal'>
        <div className='ButtonPrincipal_itens'>
            {LINK_COMPRAR_INGRESSO ? (
                <a href={LINK_COMPRAR_INGRESSO} target='_blank' rel="noreferrer noopener">
                    {t("buttonPrincipal.ingressos")}
                </a>
            ) : (
                <span className='ButtonPrincipal_em_breve' aria-disabled="true">
                    {t("buttonPrincipal.ingressos")} <small>{t("buttonPrincipal.emBreve")}</small>
                </span>
            )}
            <a href={LINK_FORMULARIO_CDC} target='_blank' rel="noreferrer noopener">
                {t("buttonPrincipal.acionarCDC")}
            </a>
        </div>
    </div>
    )
}
