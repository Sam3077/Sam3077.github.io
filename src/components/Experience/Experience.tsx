import React, { useContext, useEffect, useState } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Tilt from 'react-tilt';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Experience = () => {
  const { experiences } = useContext(PortfolioContext);

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

  const buildTimelineCard = (isLeft: boolean, position?: string, location?: string, info?: string, info2?: string, img?: string, url?: string, start?: string, end?: string) => (
    <Fade
        right={isDesktop && !isLeft}
        left={isDesktop && isLeft}
        bottom={isMobile}
        duration={500}
        delay={250}
        distance="30px"
    >
        <Tilt
            options={{
            reverse: false,
            max: 8,
            perspective: 1000,
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            reset: true,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
            }}
        >
            <Card className="experience-wrapper__card">
                {img != null &&
                    <a href={url} target="__blank"> <ProjectImg filename={img}/> </a>
                }
                <Card.Body className="experience-wrapper__text">
                    <Card.Title className="experience-wrapper__text-title" >{position} {location != null &&<a className="experience-wrapper__text-location" href={url} target="__blank">{'@ ' + location}</a>}</Card.Title>
                    {start != null && <Card.Text><em>{`${start} - ${end || 'Present'}`}</em></Card.Text>}
                    <Card.Text>{info != null && <span dangerouslySetInnerHTML={{__html: info}}/>}</Card.Text>
                    <Card.Text>{info2 != null && <span dangerouslySetInnerHTML={{__html: info2}} />}</Card.Text>
                </Card.Body>
            </Card>
        </Tilt>
    </Fade>
  );

  return (
    <section id="experience">
      <Container style={{maxWidth: '1500px'}}>
        <div className="experience-wrapper">
          <Title title="Experience" />
          <div id="timeline_bar" />
          {experiences.map((experience: any, index: number) => {
            const { position, location, info, info2, img, id, url, start, end } = experience;
            const isLeft = index % 2 === 1;
            return (
              <Row key={id}>
                <Col lg={4} md={isLeft ? 4 : 0}>
                {isLeft && buildTimelineCard(isLeft, position, location, info, info2, img, url, start, end)}
                </Col>
                <Col 
                    lg={4}
                    sm={0}
                    md={0}
                >   
                    <span className="line"></span>
                    <span className="dot"><span className="inner-dot"></span></span>
                </Col>
                <Col lg={4} md={isLeft ? 0 : 4}>
                  {!isLeft && buildTimelineCard(isLeft, position, location, info, info2, img, url, start, end)}
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
