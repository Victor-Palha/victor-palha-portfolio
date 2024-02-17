import IWeather from "../../assets/projects/IWeather.png";
import YTAi from "../../assets/projects/YT-AI.png";
import medieval from "../../assets/projects/medieval.png";
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
    title: "Medieval Tavern",
    image: medieval,
    description: "API for recipes of medieval fantasy food",
    completDescription: "This API was built in Node.js and Express.js to provide recipes of medieval fantasy food. The API uses the MongoDB database to store the recipes and the Mongoose library to interact with the database. The API is hosted on Microsoft Azure.",
    tags: "Back-end Project",
    api: "",
    link_project: "https://medieval-tavern-api.azurewebsites.net/",
    link_repository: "https://github.com/Victor-Palha/Medieval-Tavern",
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