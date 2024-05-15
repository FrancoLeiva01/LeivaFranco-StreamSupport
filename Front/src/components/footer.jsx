import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`

.imgmaps {
    width: 300px;
    object-fit: cover;
    padding: 20px;
  }

.pie-pagina {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-right-width: 5px;
    margin-right: 10px;
    margin-left: 10px;
  }
  
  .footer {
    background: url(../img/escritorio.jpg) no-repeat center;
    border: 5px solid #000;
    background-color: #cbc0d3;
  }
  
  .footer-a {
    color: rgb(255, 255, 255);
    border-color: #2d2b2f;
  }
  
  .titulo-pie {
    font-size: 50px;
    color: white;
  }
  
  .donde-encontrarnos {
    margin-left: 10px;
    color: white;
  }
  
  .contact {
    color: white;
  }

  @media (min-width: 1024px) {
    .imgmaps {
        width: 600px;
      }
    }

    @media (max-width: 768px) {
        .pie-pagina {
            flex-direction: column;
          }
        }
        
        .ubicacion {
          padding: 20px;
        }
    }

`;

function Footer() {
  return (
    <FooterContainer>
      <footer className="footer">
        <div className="titulo-pie">Sobre nosotros</div>
        <footer className="pie-pagina">
          <div className="contact">
            Contactanos:{" "}
            <a className="footer-a" href="#">
              {" "}
              +54 3834123456
            </a>
          </div>
          <div className="contact">
            Correo:{" "}
            <a className="footer-a" href="#">
              MatiSiLeesEstoAprobame@gmail.com
            </a>
          </div>
          <div>
            <a className="footer-a" href="#">
              Terminos y condiciones
            </a>
          </div>
          <div>
            <a className="footer-a" href="#">
              Trabaja con nosotros
            </a>
          </div>
        </footer>
        <div className="donde-encontrarnos">Donde encontrarmos:</div>
        <img
          className="imgmaps"
          src="https://storage.googleapis.com/support-forums-api/attachment/thread-9014924-11470506657998028469.JPG"
          alt=""
        />
      </footer>
    </FooterContainer>
  );
}

export default Footer;
