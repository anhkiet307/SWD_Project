import React from "react";

import './home.css'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../App'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";

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
            <div>
                <h4 style={{
                    textAlign:"center",
                    justifyItems:"center",
                    paddingTop:"15px",
                    
                }}>
                    Hotline: 0393021140
                </h4>
            </div>
            <Grid item md={3} style={{ paddingLeft: "10px", padding: "10px" }}>
                    <hr className="mt-0 mb-4" />
                    <div className="d-flex justify-content-center">
                      <a
                        href="#!"
                        className="btn text-white btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: "#3b5998", size:"20px" }}
                        role="button"
                      >
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                      </a>
                      <a
                        href="#!"
                        className="btn text-white btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: "rgb(85, 172, 238)" }}
                        role="button"
                      >
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                      <a
                        href="#!"
                        className="btn text-white btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: "#dd4b39" }}
                        role="button"
                      >
                        <FontAwesomeIcon icon={["fab", "google"]} />
                      </a>
                      <a
                        href="#!"
                        className="btn text-white btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: "#ac2bac" }}
                        role="button"
                      >
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                      <a
                        href="#!"
                        className="btn text-white btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: "#0082ca" }}
                        role="button"
                      >
                        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                      </a>
                      <a
                        href="#!"
                        className="btn text-white btn-floating m-1 rounded-circle"
                        style={{ backgroundColor: "#333333" }}
                        role="button"
                      >
                        <FontAwesomeIcon icon={["fab", "github"]} />
                      </a>
                    </div>
            </Grid>
        </div>
    )
}