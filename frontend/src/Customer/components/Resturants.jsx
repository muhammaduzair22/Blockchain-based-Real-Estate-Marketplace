import React from "react";
import { useState } from "react";
import "./resturants.css";
import { Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


export default function Resturants({ resturant }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <h1 className='abc'>{resturant.title}</h1>
            <div className="zoom" onClick={handleShow}>
                <img src={resturant.imageUrl} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>
            <p className='p'>{resturant.description}</p>
            <div className='m-1 w-100'>
                <p ><b>Price:</b>  {resturant.price} </p>
            </div>
            <div className="m-1 w-100">
                <NavLink to={`/RealEstatePage/${resturant.title}`}>
                    <button className="btn">Proceed</button>
                </NavLink>
            </div>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{resturant.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={resturant.imageUrl} className="img-fluid" style={{ height: '200px', width: '200px' }} />
                    <br />
                    <p>{resturant.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    );

};
