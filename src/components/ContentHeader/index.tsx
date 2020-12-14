import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

import {
  NavBar,
  InnerNav,
  NavImage,
  LogoDiv,
  ButtonsList,
  WelcomeText
} from './styles';


const ContentHeader: React.FC = () => {
  return (
    <>
      <NavBar>
        <InnerNav>
          <LogoDiv>
            <a href="http://localhost:3000">
              <NavImage />
            </a>
          </LogoDiv>

          <ButtonsList>
            <ul>
              <li>
                <button>
                  Game
                  <FaAngleDown />
                </button>
              </li>
              <li>
                <button>News</button>
              </li>
              <li>
                <button>Forum</button>
              </li>
              <li>
                <button>Shop</button>
              </li>
              <li>
                <button>Support</button>
              </li>
            </ul>
          </ButtonsList>
        </InnerNav>
      </NavBar>

      <WelcomeText>
        Welcome to L2 Rox
      </WelcomeText>
    </>
  );
};

export default ContentHeader;
