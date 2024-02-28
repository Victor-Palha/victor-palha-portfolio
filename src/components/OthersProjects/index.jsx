import IWeather from "../../assets/projects/IWeather.png";
import YTAi from "../../assets/projects/YT-AI.png";
import dtMoney from "../../assets/projects/dtMoney.png";
import { OthersProjectsContainer, OthersProjectsTitle, ProjectsContainer } from "./styles.js";
import {BoxProject} from "./BoxProject";

export function OthersProjects() {
  const projects = [{
    id: 4,
    title: "IWeather",
    image: IWeather,
    description: "Web application for consulting the weather",
    completDescription: "A Web application built in React to consult the weather of any city in the world. The application uses the OpenWeatherMap API to consult the weather of the cities.",
    tags: "Front-end Project",
    api: "",
    link_project: "https://victor-palha.github.io/weather/",
    link_repository: "https://github.com/Victor-Palha/weather",
  },{
    id: 5,
    title: "Youtube Transcript AI",
    image: YTAi,
    description: "Full-stack application for generating subtitles for youtube videos using AI",
    completDescription: "A fullstack application built in Javascript Vanilla and Node.js to generate subtitles for youtube videos using AI. The application uses the Youtube API to get the video information and the xenova/transformers Speech-to-Text AI to generate the subtitles.",
    tags: "Full-Stack Project",
    api: "https://github.com/Victor-Palha/Server-YT-AI",
    link_project: "https://victor-palha.github.io/Youtube-Transcription-AI/",
    link_repository: "https://github.com/Victor-Palha/Youtube-Transcription-AI",
  },{
    id: 6,
    title: "DT Money",
    image: dtMoney,
    description: "Full-stack financial control application",
    completDescription: "A full-stack project developed in Node.js for the back-end and React.js for the front-end. This application serves as a financial management tool, assisting users in tracking and calculating their income and expenses. The back-end utilizes TypeScript, Knex, PostgreSQL, Vitest, while the front-end is built with React, TypeScript, and styled-components.",
    tags: "Full-stack Project",
    api: "https://github.com/Victor-Palha/dt-money-api",
    link_project: "https://dt-money-client.onrender.com/",
    link_repository: "https://github.com/Victor-Palha/dt-money-api",
}];
  return (
    <OthersProjectsContainer>
      <OthersProjectsTitle>Others Projects</OthersProjectsTitle>
      <ProjectsContainer>
            {projects.map((project)=>{
                return <BoxProject 
                    key={project.id} 
                    image={project.image} 
                    description={project.description} 
                    tags={project.tags} 
                    title={project.title}
                    completeDescription={project.completDescription}
                    link_project={project.link_project}
                    link_repository={project.link_repository}
                    id={project.id}
                    api={project.api}
                />
            })}
        </ProjectsContainer>
    </OthersProjectsContainer>
  );
}