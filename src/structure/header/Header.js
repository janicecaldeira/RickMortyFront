import React from "react";

import "./Header.css";

export function Header() {
    return (
        <header className="header">
            <a href="/">
                <img src="/assets/logo-rick.gif" alt="Rick and Morty" width = "30%" height = "auto"/></a>
            <a href="/">Listar Personagens</a>
            <a href="/add">Incluir</a>
        </header>
    );
}
