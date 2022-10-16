import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LogoImg from '../../../assets/images/Logo2.png'
import LogoSimbol from '../../../assets/images/Simbol.png'
import {IoHome, IoNotifications, IoChatboxEllipses, IoCalendar} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 97;
  background-color: #d51942;
  backdrop-filter: blur(4px);
  font-size: 14px;
  color: var(--Description)



  .logo {
    padding: 15px 0;
  }
  .logo a img {
    height: 40px;
  }
  .logo2 {
    display: none;
  }

  .account {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-weight:600;
    color: var(--White);
    text-decoration: none;
    list-style: none;
  }
  .account2 {
    display: none;
  }


  .account li {
    padding: 18px 10px;
    font-weight: 700;
    text-decoration: none;
  }
  .account li a{
    text-decoration: none;
    color: var(--Primary)
    font-weight: 700;
  }
  .account li a:hover{
    color: var(--Primary);
  }

  .account button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    padding: 4px 15px;
    background-color: var(--Button);
    font-weight:600;
    color: var(--White);
}

  .account .iconUnic {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: rgba(238,238,238,0.5);
    font-weight:600;
    color: var(--Primary);
    font-size:20px;
    margin:5px 5px;
}

  .account .iconOut {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: rgba(238,238,238,0.5);
    font-weight:600;
    color: var(--Primary);
    font-size:18px;
    margin:5px 5px;
}


@media (max-width: 900px) {
  padding: 0 10px;
  .account {
    margin: 20px 0;
    width: 100%;
    justify-content: center;
  }

  .account2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-weight:600;
    color: var(--White);
    text-decoration: none;
    list-style: none;
    margin-right: 40px;
    width: 100%;
  }
  .account2 .iconUnic2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: #ed2737;
    font-weight:600;
    color: var(--White);
    font-size:18px;
    margin:5px;
}


  .account button {
    width: 80%;
    background-color: var(--White);
    color: var(--Primary);
}


  @media (max-width: 650px) {

  .logo a img {
    height: 30px;
  }

  @media (max-width: 600px) {
    .account {
      margin-right: 110px;
      justify-content: center;
    }
    .account .iconOut {
      display: none;
  }

  }
  }
}

`

function HandleOpenLink(data) {
  window.open(`${data}`, "_self")
}


const NavbarAdm = () => {

  
  return (
    <Nav>
      <div className="logo">
        <a href="/painel">
      <img src={LogoImg} alt="Logo Sua Chave" />
        </a>
      </div>
      <Burger />
      <div className="account2">


                <button className='iconUnic2' data-tip data-for='Novo Imóvel' onClick={() => HandleOpenLink("/painel/novoimovel")}><IoHome/></button>
                <ReactTooltip id='Novo Imóvel' place="bottom" type="dark" effect="solid">
                     <span>Novo Imóvel</span>
                </ReactTooltip>
                <button className='iconUnic2' data-tip data-for='Chat' onClick={() => HandleOpenLink("/painel/chat")}><IoChatboxEllipses/></button>
                <ReactTooltip id='Chat' place="bottom" type="dark" effect="solid">
                     <span>Chat</span>
                </ReactTooltip>
                <button className='iconUnic2' data-tip data-for='Agendamento' onClick={() => HandleOpenLink("/painel/agendamentos")}><IoCalendar/></button>
                <ReactTooltip id='Agendamento' place="bottom" type="dark" effect="solid">
                     <span>Agendamento</span>
                </ReactTooltip>

                <button className='iconUnic2' data-tip data-for='Notificações' onClick={() => HandleOpenLink("/painel/notificacoes")}><IoNotifications/></button>
                <ReactTooltip id='Notificações' place="bottom" type="dark" effect="solid">
                     <span>Notificações</span>
                </ReactTooltip>

      </div>
    </Nav>
  )
}

export default NavbarAdm
