import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgb(0,0,0,0);
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 155px;
  padding-right: 165px;
  box-sizing: border-box;
  @media (max-width: 800px) {
        padding-left: 10px;
        padding-right: 10px;
  }
`;

// TODO Refactor with Footer Component
const LogoTextWrapper = styled.div`
  width: 57.5px;
  height: 18px;
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: 0.29px;
  text-align: left;
  color: #FFFFFF;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;


class Navbar2 extends React.Component {

  render() {

    return (
      <NavbarWrapper>
        <Link to="/">
          <LogoTextWrapper>
            ASPEAR
          </LogoTextWrapper>
        </Link>
      </NavbarWrapper>
    )
  }
}
export default Navbar2
