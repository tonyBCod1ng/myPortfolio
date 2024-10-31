import menuItems from "./menuItems";
function Header() {
    

        return (
            <header>
            <h1 className="nav-logo" style={{padding:"10px 0px 0px 0px"}}>Anthony&nbsp;Brown <br/> Software Developer </h1>
            <ul style={{margin:"15px 0px 0px 0px"}}>
                {menuItems.map((item, index) => {
                      return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                               {"<"}{item.title}{"/>"}
                            </a>
                        </li>
                    )
                })}
            </ul>
            </header>
            
        )
}

export default Header;
