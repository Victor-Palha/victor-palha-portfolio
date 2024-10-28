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
    completDescription: "A modern web application developed with React to provide a visually appealing and interactive experience for a fictional coffee delivery store. Leveraging TypeScript for type safety and enhanced code maintainability, and styled-components for modular and reusable styling, this project demonstrates a strong focus on clean, scalable architecture and user-friendly design. The result is an engaging UI that elevates the brand’s online presence while ensuring a smooth, consistent user experience across devices.",
    tags: "Front-end Project",
    api: "",
    link_project: "https://coffe-delivery-r8e9.onrender.com",
    link_repository: "https://github.com/Victor-Palha/Coffe-Delivery",
}, {
    id: 2,
    title: "Aspop Web Site",
    image: aspop,
    description: "Full-stack application for the Aspop organization",
    completDescription: "This is a comprehensive full-stack project leveraging a robust set of technologies to deliver a scalable, high-performance application. The frontend is built with React for a dynamic and responsive user interface, styled with TailwindCSS for a streamlined design process. The backend utilizes Node.js with Fastify for fast and efficient server-side processing, with TypeScript ensuring type safety across the codebase. Data management is handled with PostgreSQL, while Prisma facilitates ORM-based database interaction. The application is containerized using Docker, allowing for seamless deployment and scalability, and is hosted on AWS to ensure reliable cloud infrastructure. Vitest is used for testing, providing confidence in code quality and stability throughout the development process. This stack reflects a commitment to modern, scalable, and maintainable web application architecture.",
    tags: "Full-stack Project",
    api: "",
    link_project: "https://aspop-pa.com",
    link_repository: "",
}, {
    id: 3,
    title: "Medieval Tavern",
    image: medieval,
    description: "Full-stack project for recipes of medieval fantasy food",
    completDescription: "A full-stack social network application designed for sharing medieval-themed food recipes, built entirely within the JavaScript ecosystem. The backend API is powered by Node.js and TypeScript, utilizing MongoDB as a NoSQL database to manage user data and recipe content with flexibility and scalability. The frontend is crafted with React.js and TypeScript, offering type safety and robust data handling to ensure seamless interactions across the application layers. This project emphasizes a strong, cohesive architecture that enables efficient data management and a user-friendly experience for enthusiasts of historical cuisine.",
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