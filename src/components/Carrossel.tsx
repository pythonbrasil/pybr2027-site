import "./styles/Carrossel.css";
import cobra from "/img/marca/cobra_verde.png";
import { useTranslation } from "react-i18next";

const REPETICOES = 8;

export default function Carrossel() {
  const { t } = useTranslation();

  const itens = Array.from({ length: REPETICOES }, (_, indice) => (
    <div className="Carrossel_item" key={indice}>
      <p>{t("carrossel.pelaComunidade")}</p>
      <img src={cobra} alt="" />
      <p>{t("carrossel.paraComunidade")}</p>
      <img src={cobra} alt="" />
    </div>
  ));

  return (
    <div className="carrossel-wrapper" aria-label={`${t("carrossel.pelaComunidade")}, ${t("carrossel.paraComunidade")}`}>
      <div className="carrossel-track" aria-hidden="true">
        <div className="Carrossel">{itens}</div>
        <div className="Carrossel">{itens}</div>
      </div>
    </div>
  );
}
