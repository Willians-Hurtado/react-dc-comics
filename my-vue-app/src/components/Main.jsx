export default function Main({ comics }) {


    return (
        <main className="bg-dark ">
            <section className="contain ">
                <div className="row ">

                    {comics.map((comic, index) => (
                        <div key={index} className="col-2">
                            <div className="brave">
                                <img src={comic.thumb} alt={comic.title} />
                            </div>
                            <span className="title">{comic.title}</span>
                        </div>
                    ))}

                </div>

                <div className="d-flex justify-content-center pt-5">
                    <a class="btn btn-primary btn rounded-0 px-5" href="#" role="button">LOAD MORE</a>
                </div>

            </section>


        </main >
    )

}