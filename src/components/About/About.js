
import './about.css'

export default function About() {
    return (
        <section className="text-center about" style={{ marginTop: 'auto ', marginBottom: 'auto' }}>
            <h1>About US</h1>
            <div className="container" >
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span className="fa fa-file" />
                        <h2>Filmshop 1.0</h2>
                        <p className="lead">Filmshop was built with HTML, CSS, JS and Bootstrap The website was still not deployed. Simple design and not responsive</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span className="fa fa-info" />
                        <h2>Filmshop 2.0</h2>
                        <p className="lead">Filmshop was rebuilt with ReactJS and Material UI
                            The website was deployed on Vercel
                            Responsive design and more features</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span className="fa fa-file" />
                        <h2>Filmshop 3.x</h2>
                        <p className="lead">Filmshop will be rebuilt with NextJS and Chakra UI
                            The static data will be replaced by dynamic data from MongoDB
                            More features and better design</p>
                    </div>
                </div>
            </div>
        </section>

    )
}