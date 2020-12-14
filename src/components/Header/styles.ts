import styled from 'styled-components';

import L2Logo from '../../assets/images/l2_logo.png';

export const NavBar = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  background: linear-gradient(to right, black 0%, #2a2626 100%);
  background: -moz-linear-gradient(to right, black 0%, #2a2626 100%);
  transform: translateY(0);

  @media (min-width: 1024px) {
    height: 80px;
    background: linear-gradient(to right, #2a2626 0%, rgba(42, 38, 38, 0.5) 100%);
    background: -moz-linear-gradient(to right, #2a2626 0%, rgba(42, 38, 38, 0.5) 100%);
  }
`;

export const InnerNav = styled.div`
  @media (min-width: 1024px){
    position: absolute;
    height: 80px;
    left: auto;
    top: 0;
    padding: 0;
    text-align: left;
    background-image: none;
    transform: translateX(0%);
  }

  display: flex;
  flex-direction: row;
  justify-items: center;

  position: fixed;
  left: 0;
  top: 50px;
  margin: auto;
  padding: 20px;
  width: 100%;
  height: calc(100vh - 50px);
  background-image: linear-gradient(to top, #4d422d, #0c0d14);
  transform: translateX(-100%);
  transition: transform 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export const NavImage = styled.img.attrs({ src: `${L2Logo}` })`
  @media (min-width: 1024px){
    background-image: url(/images/global/l2_logo.png);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 200px;
    margin: 15px 0 0 20px;
    display: inline-block;
    width: 200px;
    height: 45px;
  }
`;

export const LogoDiv = styled.div`
  a {
    display: inline-block;
  }
  padding-left: 30px;
  padding-right: 50px;
`;

export const ButtonsList = styled.div`
  padding-top: 30px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    
    display: flex;

    li{
      margin: 0 20px;
    }

    button{
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      cursor: pointer;
      outline: inherit;
      color: #f0f0f0;
      font-size: 16px;

      display: flex;
      text-decoration: none;
      justify-content: space-between;

      svg {
        margin-left: 5px;
        margin-top: 2px;
      }
    }
    
  }
`;



