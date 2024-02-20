import React from "react";
import "../Home.css"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import img0 from "../images/1.jpg";
import img3 from "../images/5.jpg";
import img4 from "../images/3.jpg";
import img5 from "../images/4.jpg";
import Points from './Points'

import { Carousel } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="home">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel "
              src={img0}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src={img3}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src={img4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <p className="desc">
        The plight of undertrial prisoners, who often face limited access to
        their legal rights and resources, is an issue that calls for immediate
        attention and reform. These individuals, who are yet to be convicted of
        any crime, deserve to be treated with fairness, dignity, and respect
        under the law. However, the existing challenges and limitations in the
        justice system have left many undertrial prisoners with inadequate legal
        support.
      </p>
      <Points />
      <div class="my-5 mx-5 row row-cols-1 row-cols-sm-1 row-cols-md-3  row-cols-xl-3  text-center gy-3 mcard">
        <Link style={{textDecoration:'none'}} to='/wellbeing'
        ><div class="col">
          <div class="card vcard">
            <h4 className="text-center pt-2"> Courses</h4>
            <div className="card-body">
              <img className="w-100" height="200px" src={img0} />

              <p>
                By offering online legal consultation, it addresses one of the
                most pressing needs of undertrial prisoners – the ability to
                seek professional legal advice, regardless of their location.
              </p>
            </div>
          </div>
        </div></Link>
        <Link style={{textDecoration:'none'}} to='/procedure'>
        <div className="col">
          <div className="card  vcard">
            <h4 className="text-center pt-2">Procedure</h4>
            <div className="card-body">
              <img className="w-100" height="200px" src={img4} />

              <p>
                The app provides legal guides, document templates, and resources
                to help undertrial prisoners navigate self-representation in
                court.
              </p>
            </div>
          </div>
        </div></Link>
        <Link style={{textDecoration:'none'}} to='/videocall'>
        <div className="col">
          <div className="card vcard">
            <h4 className="text-center pt-2">Video Call</h4>
            <div className="card-body">
              <img className="w-100" height="200px" src={img5} />

              <p>
                The app safeguards prisoners' rights by providing legal
                information, access to lawyers, and resources, ensuring fair
                treatment within the justice system.
              </p>
            </div>
          </div>
        </div></Link>
      </div>

      <div>
        <footer className="footer bg-dark" >
          <div>
            <p>Email: courtlaw@gmail.com</p>
            <p>Phone: 555-555-5555</p>
            <div className="social-icons">
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
              <a href="https://facebook.com">
                <FaFacebook />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
