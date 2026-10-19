import "./styles/Contador.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DATA_DO_EVENTO } from "../links";

const calcularTempoRestante = () => {
    const diferenca = Math.max(new Date(DATA_DO_EVENTO).getTime() - Date.now(), 0);

    return {
        dias: Math.floor(diferenca / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferenca / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diferenca / (1000 * 60)) % 60),
        segs: Math.floor((diferenca / 1000) % 60),
    };
};

const doisDigitos = (valor : number) => String(valor).padStart(2, "0");

export default function Contador() {
    const { t } = useTranslation();
    const [tempo, setTempo] = useState(calcularTempoRestante);

    useEffect(() => {
        const intervalo = setInterval(() => setTempo(calcularTempoRestante()), 1000);
        return () => clearInterval(intervalo);
    }, []);

    const unidades = [
        { valor: tempo.dias, rotulo: t("contador.dias") },
        { valor: tempo.horas, rotulo: t("contador.horas") },
        { valor: tempo.mins, rotulo: t("contador.mins") },
        { valor: tempo.segs, rotulo: t("contador.segs") },
    ];

    return (
        <div className="contador" id="contador-home">
            <div className="contador_itens" role="timer" aria-live="off">
                <p className="contador_rotulo">{t("contador.faltam")}</p>
                {unidades.map((unidade, indice) => (
                    <div className="contador_grupo" key={unidade.rotulo}>
                        {indice > 0 && <div className="separador">:</div>}
                        <div className="tempo">
                            <span>{doisDigitos(unidade.valor)}</span>
                            <p>{unidade.rotulo}</p>
                        </div>
                    </div>
                ))}
                <p className="contador_rotulo contador_rotulo_final">{t("contador.dataProvisoria")}</p>
            </div>
        </div>
    );
}
