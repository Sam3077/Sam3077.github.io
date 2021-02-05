import { Helmet } from 'react-helmet';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Particles from 'react-particles-js';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, caption } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const bubbles = {
    particles: {
      number: {
        value: isMobile ? 10 : 15,
      },
      size: {
        random: {
          enable: true,
          minimumValue: isMobile ? 100 : 200
        },
      },
      color: {
        value: "#71a7b2",
      },
      opacity: {
        value: 0.1,
      },
      move: {
        speed: 2.5,
      },
      links: {
        enable: false,
        opacity: 1,
        warp: true,
        color: "#71a7b2"
      }
    },
    interactivity: {
      detectsOn: "canvas" as "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        }
      },
      modes: {
        grab: {
          distance: 500
        }
      }
    }
  }

  return (
    <section id="hero" className="jumbotron">
      <Particles className="particles-js" params={bubbles} />
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            <span id="subtitle">{subtitle || "I'm the Unknown Developer."}</span>
            <br />
            <span id="caption">{caption || "Other thing"}</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
