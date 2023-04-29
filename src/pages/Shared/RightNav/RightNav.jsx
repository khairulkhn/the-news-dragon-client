import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import {FaGoogle, FaGithub,FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button variant="Outline-primary"> <> <FaGoogle/> </>Login with Google</Button>
            <Button variant="Outline-secondary"> <FaGithub/> Login with GitHub</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;