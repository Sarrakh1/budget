import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../../img/img.jpg'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import wallet from '../../img/wallet.png'


function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
                <div className="wallet-con">
                <img src={wallet} alt="" />
            </div>

               <div className="user-con">
                <img src={img} alt="" />
                <div className="text">
                    <h2>Sarra</h2>
                    <p>Floussi</p>
                </div>
                </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            {<div className="bottom-nav">
                <li>
                    {signout} Signout
                </li>
            </div> }
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1rem ;
    width: 300px;
    height: 100%;
    background:#333333;
    border: 3px solid #lighgray;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        img{
            
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: none;
            padding: .2rem;
        }
        h2{
            color: white;
        }
       
    }
    .wallet-con{
        height: 100px;
        display: flex;
        align-items: left;
        padding: 0rem 0rem 1rem;
        img{
            align-items: right;
            width: 110px;
            height: 110px;
            border-radius: 50%;
            object-fit: cover;
            border: none;
        }
        p{
            color: LightGray;
            font-size:30px;
            font-family: fantaisie;
            font-weight:30px;


        }
      
    }


    .menu-items{
        
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: LightGray;
            padding-left: 1rem;
            position: relative;
            i{
                color: white;
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .bottom-nav{
        color: white;
    }


    .active{
        color: green!important;
        i{
            color: green !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: white;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation