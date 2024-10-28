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
    completDescription: "A dynamic web application developed using React that allows users to consult the weather conditions for any city worldwide. This application leverages the OpenWeatherMap API to provide real-time weather data, enabling users to access accurate and up-to-date information. With a focus on user experience, the application features an intuitive interface that facilitates easy city search and weather retrieval. The project demonstrates a commitment to responsive design and efficient data handling, ensuring a seamless experience across various devices.",
    tags: "Front-end Project",
    api: "",
    link_project: "https://victor-palha.github.io/weather/",
    link_repository: "https://github.com/Victor-Palha/weather",
  },{
    id: 5,
    title: "Youtube Transcript AI",
    image: YTAi,
    description: "Full-stack application for generating subtitles for youtube videos using AI",
    completDescription: "A comprehensive full-stack application developed using Vanilla JavaScript and Node.js designed to generate subtitles for YouTube videos using AI technology. This application integrates with the YouTube API to retrieve video information, while utilizing the xenova/transformers Speech-to-Text AI model to accurately generate subtitles. The project exemplifies a seamless interaction between the front-end and back-end, showcasing the ability to harness powerful APIs and machine learning capabilities to enhance accessibility and user experience for video content creators and viewers alike.",
    tags: "Full-stack Project",
    api: "https://github.com/Victor-Palha/Server-YT-AI",
    link_project: "",
    link_repository: "https://github.com/Victor-Palha/Youtube-Transcription-AI",
  },{
    id: 6,
    title: "DT Money",
    image: dtMoney,
    description: "Full-stack financial control application",
    completDescription: "A robust full-stack application designed as a financial management tool, developed with Node.js for the back end and React.js for the front end. This application empowers users to effectively track and calculate their income and expenses, promoting better financial awareness and management. The back end is built with TypeScript, utilizing Knex for database querying and PostgreSQL for secure and scalable data storage. The application is rigorously tested using Vitest to ensure reliability and performance. On the front end, React and TypeScript work together to create a dynamic user interface, while styled-components enhances the styling and responsiveness of the application. This project exemplifies a commitment to delivering a seamless and user-friendly financial management experience.",
    tags: "Full-stack Project",
    api: "https://github.com/Victor-Palha/dt-money-api",
    link_project: "",
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