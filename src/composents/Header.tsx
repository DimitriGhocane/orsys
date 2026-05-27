import type React from "react";

const Header: React.FC<any> = () => {
    return (
        <>
            <header>
                <div>
                    <h1>My thread application</h1>
                    <h2>Module 2 - Qualité du code : TypeScript et test</h2>
                </div>

                <nav>
                    <a href="/">Home</a>
                    <a href="/Dashboard">Dashboard</a>
                    <select id="lang-select">
                        <option value="fr">FR</option>
                        <option value="en">EN</option>
                    </select>
                </nav>

            </header>

        </>
    )
}

export default Header;