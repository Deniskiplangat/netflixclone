import React, { Component } from 'react'
import logo from '../svg/logo.svg'
import { NavLink,Link } from 'react-router-dom'
import {Button} from './Button'
import  styled  from 'styled-components'
import { Icon } from 'react-icons-kit'
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right'


class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className="header-top">
                <Logo src={logo} alt="Netflix logo"/>
                <NavLink to="/signIn" className="signIn-btn">Sign In</NavLink>
                </div>
                {/* Header content */}
                <div className="Header-content">
                    <Title>See what's on</Title>
                    <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
                    <Button className="main-offer-btn" primary>Try it now
                    <Icon classname="Icon" icon={ic_chevron_right} size={37}/>
                    </Button>

                </div>
               
            </HeaderComponent>
        )
    }
}

export default Header;

//logo
const Logo = styled.img`
    width:10rem;
    height:3.5rem;
    position:absolute;
    top:25%;
    left:50%;
    transform:translate(-50%,-50%);

`
//header container
const HeaderComponent = styled.div`
   .signIn-btn{
       right:0;
       margin:1.125rem 3% 0;
       padding:0.4375rem 1.0625rem;
       font-weight:400;
       line-height:normal;
       border-radius: 0.1875rem;
       font-size:1rem;
       background:var(--main-red); 
       position:absolute;
       translate:transform(-50%,-50%);
       cursor:pointer;
       transition: background 0.2s ease-in;
       &:hover{
           background:var(--main-red-hover);
       }
   }

.header-top{
    position:relative;
    height:10rem;
    z-index:1;
}

//header content
.Header-content{
    width:65%;
    position:relative;
    margin:4.5rem auto 0;
    display:flex;
    justify-content:center;
    align-content:center;
    text-align:center;
    flex-direction:column;
    z-index:1;
}
  

  .Icon svg{
      vertical-align:bottom;
      margin-left:1.5rem;

  }

`;

//main title
const Title = styled.h1`
   margin:0 0 1.2rem;
   font-size:5rem;
   font-weight:700;
   line-height:1.1em;



`;

const SubTitle = styled.h2`
   font-weight:400;
   font-size:1.875rem;
   line-height:1.25em;
   margin:0 0 1.875rem;
   text-transform:uppercase;

`;