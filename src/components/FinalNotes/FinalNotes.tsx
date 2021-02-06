import React, { useContext, useState, useEffect } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Container, Row, ListGroup } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  return (
    <section id="final-notes">
      <Container>
        <Title title="Final Notes" />
        <Row className="final-wrapper">
        <Fade bottom duration={500} delay={500} distance="30px">
            <div className="final-wrapper__info">
            <p className="final-wrapper__info-text">
                I hope this website gave a good picture of me and what I do! I genuinely love engineering and programming and I'm lucky to be able
                to study my passion. I'd also suggest checking my <a href="https://github.com/Sam3077" target="_blank">GitHub</a> since I've always got new
                projects that I'm working on. I currently have a few fun personal projects up there and a couple open source contributions.
                I'll often take a weekend and decide to make something on a whim so check-in to see what I'm up to!
            </p>
            <ListGroup className="final-wrapper__info-text">
                <ListGroup.Item >
                    <h1>Potential upcoming projects</h1>
                    <p>
                        I have lots of ideas about potential project ideas to pursue next. Feel free to reach out or give advice if any seem interesting!
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="final-wrapper__info-text--important">Autonomous Vehicle P2P Network</p>
                    <p>
                        The idea here is to develop the infrastructure and algorithms required to support a rapidly evolving P2P network that can connect
                        moving vehicles as well as adapting autonomous algorithms to utilize information from nearby vehicles.
                    </p>
                    <p>
                        I am likely going to pursue this project for my senior thesis so check back in for updates later!
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="final-wrapper__info-text--important">Improved Emergency Wilderness Beacon</p>
                    <p>
                        Essentially, I would like to improve on current emergency beacons which are used to send a GPS location to emergency responders
                        in the case of an emergency that requires rescue. The problem is that these beacons don't send much information other than the
                        location so the responders have no idea what to prepare for. A beacon that allows users to pre-program the medical conditions
                        of their party and potentially open up a 2-way communication channel could absolutely save lives.
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="final-wrapper__info-text--important">Open Source EE Lab Kit</p>
                    <p>
                        As an ECE lab TA I've been very frustrated with having to hold online electrical engineering labs. I find that having the students
                        watch a TA perform a lab is not nearly as valuable as having them do it themselves. They could potentially buy a DAQ device like 
                        the NI myDAQ or the Analog Discovery 2. However, those devices are typically very expensive and not accessible for new electrical
                        engineering students.
                    </p>
                    <p>
                        This idea involves developing the code and hardware to make cheap at-home USB DAQ devices.
                        Ideally the device would be useable with consumer grade mico-controllers like a Raspberry Pi and would allow people to build their
                        own or by a cheap pre-fabbed board. 
                    </p>
                </ListGroup.Item>
            </ListGroup>
            </div>
        </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default About;
