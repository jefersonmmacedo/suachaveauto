import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LogoImg from '../../assets/images/Logo.png'
import LogoSimbol from '../../assets/images/Simbol.png'
import {IoDocumentTextOutline, IoPersonOutline, IoHeartOutline, IoNotificationsOutline,
  IoLogOutOutline, IoSpeedometerOutline, IoHomeOutline, IoChatboxEllipsesOutline, IoCalendarOutline} from 'react-icons/io5'
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
  background: rgba(255, 255, 255, 0.25);
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
    width: 240px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-weight:600;
    color: var(--Text2);
    text-decoration: none;
    list-style: none;
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
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
    font-size:18px;
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
    margin-right: 110px;
    width: 20%;
    justify-content: center;
  }


  @media (max-width: 650px) {

  .logo a img {
    height: 30px;
  }

  @media (max-width: 600px) {
    .account {
      margin-right: 110px;
      width: 15%;
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


const Navbar2 = () => {
  const Local = localStorage.getItem("suachave");
  const user = JSON.parse(Local);

  return (
    <Nav>
      <div className="logo">
        <a href="/">
      <img src={LogoImg} alt="Logo CPA Educacional" />
        </a>
      </div>
      <Burger />
      <div className="account">
        {user === "" || user === null || user === undefined ?
        <>
                <button onClick={() => HandleOpenLink("/entrar")}>Entrar</button>
                <li className='nav-item'>
                  <Link to='/cadastrar' >
                  Cadastrar
                  </Link>
                </li>
                
        </>
      : user !== "" || user !== null || user !== undefined ?
        <>

{user.type === "company" && user !== null && user !== undefined && user !== "" ?
                <>
                <button className='iconUnic' onClick={() => HandleOpenLink("/painel/novoimovel")} data-tip data-for='Imóveis'><IoHomeOutline/></button>
                <ReactTooltip id='Imóveis' place="bottom" type="dark" effect="solid">
                     <span>Imóveis</span>
                </ReactTooltip>
                <button className='iconUnic' onClick={() => HandleOpenLink("/painel/agendamentos")} data-tip data-for='Agendamentos'><IoCalendarOutline/></button>
                <ReactTooltip id='Agendamentos' place="bottom" type="dark" effect="solid">
                     <span>Agendamentos</span>
                </ReactTooltip>

                <button className='iconUnic' onClick={() => HandleOpenLink("/painel/chat")} data-tip data-for='Chat'><IoChatboxEllipsesOutline/></button>
                <ReactTooltip id='Chat' place="bottom" type="dark" effect="solid">
                     <span>Chat</span>
                </ReactTooltip>

                <button className='iconUnic' onClick={() => HandleOpenLink("/painel/notificacoes")} data-tip data-for='Notificações'><IoNotificationsOutline/></button>
                <ReactTooltip id='Notificações' place="bottom" type="dark" effect="solid">
                     <span>Notificações</span>
                </ReactTooltip>

                {/* <button className='iconUnic' onClick={() => HandleOpenLink("/painel")} data-tip data-for='Painel'><IoSpeedometerOutline /></button>
                <ReactTooltip id='Painel' place="bottom" type="dark" effect="solid">
                     <span>Painel</span>
                </ReactTooltip> */}
                </>
:
               <>
                <button className='iconUnic' onClick={() => HandleOpenLink("/mensagens")} data-tip data-for='Chat'><IoChatboxEllipsesOutline/></button>
                <ReactTooltip id='Chat' place="bottom" type="dark" effect="solid">
                     <span>Chat</span>
                </ReactTooltip>
                <button className='iconUnic' onClick={() => HandleOpenLink("/agendamentos")} data-tip data-for='Agendamentos'><IoCalendarOutline/></button>
                <ReactTooltip id='Agendamentos' place="bottom" type="dark" effect="solid">
                     <span>Agendamentos</span>
                </ReactTooltip>

                <button className='iconUnic' onClick={() => HandleOpenLink("/notificacoes")} data-tip data-for='Notificações'><IoNotificationsOutline/></button>
                <ReactTooltip id='Notificações' place="bottom" type="dark" effect="solid">
                     <span>Notificações</span>
                </ReactTooltip>

                <button className='iconUnic' onClick={() => HandleOpenLink("/favoritos")} data-tip data-for='Favoritos'><IoHeartOutline/></button>
                <ReactTooltip id='Favoritos' place="bottom" type="dark" effect="solid">
                     <span>Favoritos</span>
                </ReactTooltip>
                <button className='iconOut' onClick={() => HandleOpenLink("/minhaconta")} data-tip data-for='Minha conta'><IoPersonOutline /></button>
                <ReactTooltip id='Minha conta' place="bottom" type="dark" effect="solid">
                     <span>Minha conta</span>
                </ReactTooltip>

               </>
                  }

                <button className='iconOut' onClick={() => HandleOpenLink("/entrar")}><IoLogOutOutline /></button>
        </>
        : ""
    }
      </div>
    </Nav>
  )
}

export default Navbar2
