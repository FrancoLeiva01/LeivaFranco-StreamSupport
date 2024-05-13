import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.header`

header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    width: 100%;
    background-color: white;
    background: url(../img/escritorio.jpg) no-repeat center;
    background-size: cover;
  }

  .title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 60px;
    font-weight: 1000;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
  }

  .btn {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 40px;
    border: 2px solid #0075f2;
    color: white;
    text-decoration: none;
    background: #0075f2;
  }
  
  .btn:hover {
    background: none;
  }
  
  .btn-home {
    display: flex;
  }
  
  .btn-home {
    margin: 0 10px;
  }

  .content {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .head {
        flex-direction: column;
        padding: 20px 0;
      }

      .header {
        width: 100%;
      }
    }

`;

function Header() {
  return (
    <HeaderContainer>
    <header class="content header">
    <h2 class="title">Stream Support</h2>

    <div class="btn-home">
        <a href="#" class="btn">Saber mas</a>

    </div>
</header>
</HeaderContainer>
  );
};

export default Header