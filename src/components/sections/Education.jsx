import React from 'react'
import styled from 'styled-components';
import { education } from '../../data/constants';
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationCard from '../cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
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
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
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

const Education = () => {
    return (
        <Container id="Education">
            <Wrapper>
                <Title>Education</Title>
                <Desc style={{ marginBottom: "40px" }}> My education has been a journey of self-discovery and growth. My
                    educational details are as follows.</Desc>

                <VerticalTimeline>
                    {education.map((education, index) => (
                        <EducationCard key={`education-${index}`} education={education} />
                    ))}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Education
