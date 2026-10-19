import type { ReactNode } from "react";

type Props = {
    href : string,
    className ?: string,
    emBreve ?: string,
    children : ReactNode,
    onClick ?: () => void,
}

// Botão-link externo. Quando o link ainda não existe (""), exibe o botão desabilitado (com o aviso "em breve", se informado).
export default function BotaoLink({ href, className = "", emBreve, children, onClick } : Props) {
    if (!href) {
        return (
            <span className={`botao botao_desabilitado ${className}`} aria-disabled="true">
                {children} {emBreve && <small>{emBreve}</small>}
            </span>
        )
    }

    return (
        <a className={`botao ${className}`} href={href} target="_blank" rel="noreferrer noopener" onClick={onClick}>
            {children}
        </a>
    )
}
