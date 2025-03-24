export default function Header({ links }) {


    return (
        <header>
            <div className="nav-bar d-flex  align-items-center justify-content-between ">
                <img src="/dc-logo.png" alt="" />

                <div className="menu d-flex align-items-center"  >
                    {links.map((link, index) => (
                        <ul>
                            <li>
                                <a key={index} href={`#${link.toLowerCase()}`} className={index === 1 ? "nav-link special-link" : "nav-link"}>{link}</a>
                            </li>
                        </ul>

                    ))}
                </div>

            </div>

            <section>
                <div className="jumbotron">

                </div>
            </section>
        </header>
    )

}