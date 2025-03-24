export default function Header({ links }) {


    return (
        <header>
            <div className="nav-bar d-flex justify-content-center align-items-center justify-content-between ">
                <img src="/dc-logo.png" alt="" />

                {links.map((link, index) => (
                    <ul>
                        <li>
                            <a key={index} href={`#${link.toLowerCase()}`} className={index === 1 ? "nav-link special-link" : "nav-link"}>{link}</a>
                        </li>
                    </ul>

                ))}
            </div>

            <section>
                <div className="jumbotron">

                </div>
            </section>
        </header>
    )

}