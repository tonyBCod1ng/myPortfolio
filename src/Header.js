import menuItems from "./menuItems";

function Header() {


    return (
        <header>
            <h1 className="nav-logo" style={{padding: "10px 0px 0px 0px"}}>Anthony&nbsp;Brown <br/> Software Developer
            </h1>
            <ul className={"links"} style={{margin: "15px 0px 0px 0px"}}>
                {menuItems.map((item, index) => {
                    return (
                        <div className={"row"} style={{width:"100%"}}>
                            <div className={"col col-3"}>
                                <li key={index}>
                                    <a href={item.url} className={item.cName} id={item.id}>
                                        {"<"}{item.title}{"/>"}
                                    </a>
                                </li>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </header>

    )
}

export default Header;
