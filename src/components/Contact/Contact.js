
import './contact.css'

export default function Contact() {
    return (
        <div className="container border border-2 ">
            <div className="bg-light">
                <div className="row ">
                    <div className="col-lg-8 col-md-12 p-5 bg-white">
                        <div className="d-flex mb-3 flex-column">
                            <h1 className="h5 text-capitalize my-4">CONTACT US</h1>
                            
                        </div>
                        <form className="row mb-3">
                            <div className="col-md-6 p-3">
                                <input required placeholder="first name" type="text" name id />
                            </div>
                            <div className="col-md-6 p-3">
                                <input required placeholder="last name" type="text" name id />
                            </div>
                            <div className="col-md-6 p-3">
                                <input required placeholder="E-mail" type="email" name id />
                            </div>
                            <div className="col-md-6 p-3">
                                <input required placeholder="phone" type="tel" name id />
                            </div>
                            <div className="col-md">
                                <textarea required name placeholder="write your message" id cols={30} rows={1} defaultValue={""} />
                            </div>
                            <div className="text-end mt-4">
                                <input className="btn px-4 py-3 btn-outline-dark" type="submit" defaultValue="Send Message" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-12 text-white aside px-4 py-5">
                        <div className="mb-5">
                            <h1 className="h3">Contact Information</h1>
                            <p className="opacity-50">
                                <small>
                                    Fill out the from and we will contact to you whitin 24 hours
                                </small>
                            </p>
                        </div>
                        <div className="d-flex flex-column px-0">
                            <ul className="m-0 p-0">
                                <li className="d-flex justify-content-start align-items-center mb-4">
                                    <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                                        <i class="fa-solid fa-phone-volume"></i>
                                    </span>
                                    <span>+84 393021140</span>
                                </li>
                                <li className="d-flex align-items-center r mb-4">
                                    <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                                        <i class="fa-regular fa-envelope"></i>
                                        {/* <i class="fa-regular fa-envelope fa-shake"></i> */}
                                    </span>
                                    <span>Anhkiet307@gmail.com</span>
                                </li>
                                <li className="d-flex justify-content-start align-items-center mb-4">
                                    <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                                        {/* <i class="fa-sharp fa-solid fa-location-dot fa-bounce "></i> */}
                                    </span>
                                    <span>Làng đại học, Đại học quốc gia HCM
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}