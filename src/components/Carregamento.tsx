import './styles/Carregamento.css'
import { useTranslation } from "react-i18next";
import cobra from "/img/marca/cobra.png"

export default function Carregamento() {
    const { t } = useTranslation();

    return (
        <div className='Carregamento' role="status">
            <div className='Carregamento_cobra'>
                <img src={cobra} alt="" />
            </div>
            <div className='Carregamento_linha' aria-hidden="true"></div>
            <h4>{t("carregamento.carregando")}</h4>
        </div>
    )
}
