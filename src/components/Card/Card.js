import { useNavigate, useParams } from "react-router-dom"
import { ThemeContext } from "../../App"
import { useContext } from "react"


export default function Card() {
    const { id } = useParams()

    const { datas } = useContext(ThemeContext)

    const card = datas.find(item => item.id === Number(id))

    const navigate = useNavigate()

    const ShowCard = () => {
        return (
            <div className=" d-flex justify-content-center align-items-center" >
                <div className="card w-100">
                    <div className="card-body row" >

                        <div className="d-flex justify-content-between">
                            <h1 className="card-title">{card.name}</h1>
                            <button type="button" className="border-0 my-2 mx-3 fas fa-reply fs-6"
                                style={{ fontSize: '16px', backgroundColor: 'unset' }}
                                aria-label="Close"
                                onClick={() => navigate(-1)}
                            ></button>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className="col-md-5">
                            <p className="card-text text-break text-capitalize w-100" style={{ marginRight: '2rem' }}><span className="fw-bold"> Information: </span> </p>
                            <p className=""><span className="">• Nation: {card.nation}</span> </p>
                            <p className=""><span className="">• Date: {card.releaseDate}</span> </p>
                            <p className=""><span className="">• Duration: {card.duration}'</span> </p>
                            <p className=""><span className="">• Director: {card.director}</span> </p>
                            <p className=""><span className="">• Actor:{card.actor}</span> </p>
                            
                            <p className="card-text text-break text-capitalize w-100" style={{ marginRight: '2rem' }}><span className="fw-bold">Description:</span> {card.description}</p>
                        </div>
                        <div className="col-md-7">
                        <iframe src={card.trailer}
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: '100%', height: '480px' }}
                        />
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }


    return (
        <ShowCard />


    )
}