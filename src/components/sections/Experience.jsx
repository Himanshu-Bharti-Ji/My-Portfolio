import React from 'react'
import styled from 'styled-components';
import { experiences } from '../../data/constants';
import ExperienceCard from '../cards/ExperienceCard';
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    margin-top: 80px;
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 80px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 80px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Experience = () => {
    return (
        <Container id="Experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc style={{ marginBottom: "40px" }}>My Work Experience as a Front-End Developer and Python/R Instructor.</Desc>

                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Experience
