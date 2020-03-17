import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import hero_background from "../static/hero-background.png";

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 180px;
  @media (max-width: 800px) {
        flex-direction: column;
        padding-left: 26px;
        padding-right: 26px;
        margin-top: 35px;
  }
`;

const HeroContentWrapper= styled.div`
  margin-top: 38px;
  margin-left: 155px;
  font-family: NotoSansCJKkr;
  font-size: 45px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.29px;
  text-align: left;
  width: 100%;
  color: #ffffff;
  @media (max-width: 800px) {
        order: 1;
        font-size: 18px;
        margin-left: 0px;
  }
`;


const TemplateWrapper = ({ children }) => {

  const HeroContents = (
    <HeroContentWrapper>
      자주 묻는 질문
    </HeroContentWrapper>
  );

  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.ico`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.ico`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>

      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${hero_background})`,
          backgroundSize: `cover`,
          // backgroundPosition: `50% 50%`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Navbar2 />
        <HeroContent>
          {HeroContents}
        </HeroContent>
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
