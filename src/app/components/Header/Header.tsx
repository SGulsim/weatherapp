import '../Header/header.css'

function Header() {
    return (
            <header className="header">
                <div className="header-icons">
                    <select className="header-lang">
                        <option value="Russian" className="header-lang-option" selected>Ru</option>
                        <option value="English" className="header-lang-option">En</option>
                        <option value="France" className="header-lang-option">Fr</option>
                    </select>
                    <div className="header-temp">
                        <button className="header-temp-f">°F</button>
                        <button className="header-temp-c active">°С</button>
                    </div>
                    <div className="header-search">
                        <input type="search" placeholder="Найти город"/>
                    </div>
                </div>
            </header>
    );
}

export default Header;