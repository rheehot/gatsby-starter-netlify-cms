import React from 'react'
import styled from '@emotion/styled'

const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 155px;
  padding-right: 165px;
  box-sizing: border-box;
  position: absolute;
  @media (max-width: 800px) {
        padding-left: 20px;
        padding-right: 20px;
  }
`;

// TODO Refactor with Footer Component
const LogoTextWrapper = styled.div`
  width: 57.5px;
  height: 18px;
  margin-left: 155px;
  font-size: 25px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: 0.29px;
  text-align: left;
  color: #4b14b6;
  @media (max-width: 800px) {
        margin-left: 0px;
        font-size; 18px;
  }
`;


const Links = styled.div`
  ${props => props.first ? `margin-left: auto;` : null}
  margin-right: 18px;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: 0.16px;
  color: #767676;
`;

class Footer extends React.Component {

  render() {
    return (
      <NavbarWrapper>
        <LogoTextWrapper>
          ASPEAR
        </LogoTextWrapper>
        <Links first>
          (주) Sniper
        </Links>
        <Links>
          서비스 이용 약관
        </Links>
        <Links>
          개인정보 처리방침
        </Links>
      </NavbarWrapper>
    )
  }
}
export default Footer;
