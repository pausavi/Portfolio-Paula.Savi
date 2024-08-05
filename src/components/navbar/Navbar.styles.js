import styled from "styled-components";
import { colors } from "../../styles/Colors";

export const ContainerNavbar = styled.div`
max-width: 200vw;
height: 150px;
box-shadow: ${colors.BOX_SHADOW};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
background-color: ${colors.TEXT_WHITE};
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;

    h1, h2 {
    font-weight: 700;
    color: ${colors.TEXT_BLACK};
    margin: 0;
    }
    h1{
    font-size: 2rem;
    }
    h2{
    background: linear-gradient(275deg, rgba(47,71,151,1) 47%, rgba(65,90,119,1) 79%);
    -webkit-background-clip: text; 
    color: transparent;
    margin: 0;
    }

    img{
    width: 120px;
    padding-right: 20px;
    }`;

export const ContainerItems = styled.div`
    display: flex;
    align-items: center;

    p{
    cursor:pointer;
    padding: 0 13px;
    text decoration: none;
    color: ${colors.TEXT_BLACK};
    font-weight: 500 }

  @media(max-width: 768px){
    display:  ${(props) =>(props.showMenuBurger ? 'inline-grid': 'none')};
    position: absolute;
    top: 150px;
    background: ${colors.TEXT_WHITE};
    box-shadow: ${colors.BOX_SHADOW};
    padding: 10px 0 20px 0;
    width: 100%;
    left: 0;

    a{
    padding: 10px 20px;
    };
  }
`;
export const Button = styled.button`
    color: ${colors.TEXT_WHITE};
    box-shadow:${colors.BOX_SHADOW_BUTTON};
    background: linear-gradient(275deg, rgba(47,71,151,1) 47%, rgba(65,90,119,1) 79%);
    padding: 10px 10px;
    border-radius: 99px;
    border:none;
    margin: 10px 0;
    font size: 16px;
    font-weight: 700;
    cursor: pointer;

    @media(max-width: 768px){
    width: 40%;
    margin: 5px 10px 0 10px;}
`;

export const ContainerBurger = styled.div`
    display: none;
    @media(max-width: 768px){
    display: block;
    }
`;

export const BurgerMenu= styled.div`
    width: 35px;
    height: 2px;
    background-color: ${colors.TEXT_BLACK};
    margin: 6px 0;
`