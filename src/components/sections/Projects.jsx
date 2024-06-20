import React, { useMemo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../cards/ProjectCard';
import { FixedSizeList as List } from 'react-window';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 16px;
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

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight 500;
    margin: 22px 0;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.primary + 20};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
    ${({ active, theme }) => active && `background: ${theme.primary + 20};`}
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = () => {

    const [toggle, setToggle] = useState("all");

    const filteredProjects = useMemo(() => {
        return toggle === "all" ? projects : projects.filter(project => project.category === toggle);
    }, [toggle]);

    const handleToggle = useCallback((category) => {
        setToggle(category);
    }, []);

    return (
        <Container id="Projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc style={{ marginBottom: "40px" }}>I have worked on a wide range of projects, primarily focusing on web applications. <br />Here are some of my key projects.</Desc>

                <ToggleButtonGroup>
                    <ToggleButton
                        active={toggle === "all"}
                        onClick={() => handleToggle("all")}
                    >All
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === "web app"}
                        onClick={() => handleToggle("web app")}
                    >Web App's
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === "ui"}
                        onClick={() => handleToggle("ui")}
                    >UI
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === "dashboard"}
                        onClick={() => handleToggle("dashboard")}
                    >Dashboard
                    </ToggleButton>
                </ToggleButtonGroup>

                <CardContainer>
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects
