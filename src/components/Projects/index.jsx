import { BoxProject } from "./BoxProject";
import { ProjectsContainer, ProjectsName } from "./styles";

// Images
import coffeDelivery from "../../assets/projects/coffeDelivery.png";
import dtMoney from "../../assets/projects/dtMoney.png";
import aspop from "../../assets/projects/aspop.png";

const projects = [{
    id: 1,
    title: "Coffe Delivery",
    image: coffeDelivery,
    description: "Web application for coffee delivery",
    completDescription: "A web application built in React to create a sleek and interactive design for a fictional coffee delivery store. TypeScript and styled-components were utilized as complementary technologies to enhance the development process.",
    tags: "Front-end Project",
    api: "",
    link_project: "https://coffe-delivery-r8e9.onrender.com",
    link_repository: "https://github.com/Victor-Palha/Coffe-Delivery",
}, {
    id: 2,
    title: "Aspop Web Site",
    image: aspop,
    description: "Full-stack application for the Aspop organization",
    completDescription: "The Association of Official Forensic Experts of Pará is an entity directly linked to the activities of the Pará Scientific Police. At ASPOP, we strive to enhance the recognition of the criminal forensic official career, promoting unity and integration among experts.",
    tags: "Full-stack Project",
    api: "",
    link_project: "https://aspop-pa.com",
    link_repository: "",
}, {
    id: 3,
    title: "DT Money",
    image: dtMoney,
    description: "Full-stack financial control application",
    completDescription: "A full-stack project developed in Node.js for the back-end and React.js for the front-end. This application serves as a financial management tool, assisting users in tracking and calculating their income and expenses. The back-end utilizes TypeScript, Knex, PostgreSQL, Vitest, while the front-end is built with React, TypeScript, and styled-components.",
    tags: "Full-stack Project",
    api: "https://github.com/Victor-Palha/dt-money-api",
    link_project: "https://dt-money-client.onrender.com/",
    link_repository: "https://github.com/Victor-Palha/dt-money-api",
}]

export function Projects(){
    return (
        <>
        <ProjectsName>Main Projects</ProjectsName>
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
        </>
    )
}