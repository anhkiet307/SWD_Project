import { useContext } from 'react'
import './home.css'

import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../App'

export default function Home() {

    const { datas } = useContext(ThemeContext)

    const Item = ({ id, image, name, description }) => {
        return (
            <div className="col-6 col-lg-3 my-2">
                <div className="card">
                    <img src={image} className="card-img-top film-img" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title film-title">{name}</h5>
                        <p className="card-text text-hidden">{description}</p>
                        <NavLink
                            to={`/movie/${id}`}
                            className="btn btn-primary"
                        >
                            Details
                        </NavLink>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='py-8'>
            <div>
                <h1 style={{textAlign:"center", paddingBottom:"25px", fontWeight:"bold"}}>Welcome</h1>
            </div>
            <div className="row">
                {
                    datas.map(item => (
                        <Item
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                        />
                    ))
                }

            </div>
        </div>
    )
}