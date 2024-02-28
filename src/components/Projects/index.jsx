import { BoxProject } from "./BoxProject";
import { ProjectsContainer, ProjectsName } from "./styles";

// Images
import coffeDelivery from "../../assets/projects/coffeDelivery.png";
import dtMoney from "../../assets/projects/dtMoney.png";
import medieval from "../../assets/projects/medieval-client.png";
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
    title: "Medieval Tavern",
    image: medieval,
    description: "Full-stack project for recipes of medieval fantasy food",
    completDescription: "This application was built in Node.js and Express.js to provide recipes of medieval fantasy food. The API uses the MongoDB database to store the recipes and the Mongoose library to interact with the database. The API is hosted on Microsoft Azure. The front end was made on React.js and with Tailwind to style the components and to make the application responsive.",
    tags: "Full-stack Project",
    api: "https://medieval-tavern-api.azurewebsites.net/",
    link_project: "https://medieval-tavern.onrender.com/",
    link_repository: "https://github.com/Victor-Palha/Medieval-Tavern",
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