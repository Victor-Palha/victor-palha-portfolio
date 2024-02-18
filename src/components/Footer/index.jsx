// icons
import { SiJavascript, SiTypescript, SiTailwindcss, SiGraphql, SiPython, SiExpress, SiFastify, SiPostgresql, SiPrisma, SiMongodb  } from "react-icons/si";
import { FaNodeJs, FaDocker, FaReact, FaAws, FaLinux  } from "react-icons/fa";
// styles
import { AbilitiesContainer, KnowledgeBox, KnowledgeContainer } from "./styles";
import { Contact } from "../Contact";

export function Footer() {
    return(
        <>
        <Contact/>
        <AbilitiesContainer>
            <h2>Technologies & Skills</h2>
            <KnowledgeContainer>
                <KnowledgeBox>
                    <FaNodeJs size={50}/>
                    <p>Node.js</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiJavascript size={50}/>
                    <p>JavaScript</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiTypescript size={50}/>
                    <p>TypeScript</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <FaReact size={50}/>
                    <p>React.js</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiTailwindcss size={50}/>
                    <p>Tailwind CSS</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiGraphql size={50}/>
                    <p>GraphQL</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiPython size={50}/>
                    <p>Python</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiExpress size={50}/>
                    <p>Express.js</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiFastify size={50}/>
                    <p>Fastify</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiPostgresql size={50}/>
                    <p>Postgres</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiPrisma size={50}/>
                    <p>Prisma</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <SiMongodb size={50}/>
                    <p>MongoDB</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <FaDocker size={50}/>
                    <p>Docker</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <FaAws size={50}/>
                    <p>AWS</p>
                </KnowledgeBox>
                <KnowledgeBox>
                    <FaLinux size={50}/>
                    <p>Linux</p>
                </KnowledgeBox>
            </KnowledgeContainer>
        </AbilitiesContainer>
        </>
    )
}