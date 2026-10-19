import { useNavigate, useLocation } from "react-router-dom";

// Navega para a home (se necessário) e rola suavemente até a âncora informada.
export default function useScrollToId() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (id : string) => {
        const rolar = () => document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth" });

        if (pathname !== "/") {
            navigate("/");
            setTimeout(rolar, 100);
            return;
        }

        rolar();
    };
}
