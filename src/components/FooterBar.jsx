import useTheme from "../hooks/useTheme";
import { useContext } from "react";
import {ThemeContext} from "../contexts/ThemeContext";

function FooterBar() {

    const {theme} = useContext(ThemeContext);
    return (
        <footer
            className={`footer ${
                theme === "light"
                    ? "has-background-light"
                    : "has-background-dark"
            }`}
        >
            <div className="content has-text-centered">
                <a className="icon" href="https://facebook.com">
                    <i
                        className={`fab fa-facebook ${
                            theme === "light"
                                ? "has-text-dark"
                                : "has-text-light"
                        }`}
                    ></i>
                </a>
                <a className="icon" href="https://twitter.com">
                    <i
                        className={`fab fa-twitter ${
                            theme === "light"
                                ? "has-text-dark"
                                : "has-text-light"
                        }`}
                    ></i>
                </a>
                <a className="icon" href="https://instagram.com">
                    <i
                        className={`fab fa-instagram ${
                            theme === "light"
                                ? "has-text-dark"
                                : "has-text-light"
                        }`}
                    ></i>
                </a>
                <p
                    className={`${
                        theme === "light" ? "has-text-dark" : "has-text-light"
                    }`}
                >
                    &copy; 2024 TODO App. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default FooterBar;