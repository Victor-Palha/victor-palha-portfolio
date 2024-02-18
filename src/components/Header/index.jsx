import React from "react";
import { HeaderContainer, HeaderContent, HeaderDescription, HeaderIcons, HeaderImage } from "./styles";
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {GiNotebook} from 'react-icons/gi'
import {BiLogoJavascript, BiLogoTypescript, BiLogoDocker, BiLogoPython} from 'react-icons/bi'
import {IoLogoNodejs} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import gifProgramming from "../../assets/Programming.gif"
import curriculum from "../../assets/Curriculo.pdf"
import { Writter } from "./Writter";


export function Header(){
    return(
        <HeaderContainer>
        <HeaderContent>
            <Writter/>
            <HeaderIcons>
                <h2>Fullstack</h2>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-ferreira-palha-b67736216/" target="_blank" rel="external"><BsLinkedin size={30}/></a>
                <a href="https://github.com/Victor-Palha" target="_blank" rel="external"><BsGithub size={30}/></a>
                <a href={curriculum} download="curriculum"><GiNotebook size={30}/></a>    
            </HeaderIcons>
            <h1>Developer</h1>
            <HeaderDescription>
                <div>
                    <BiLogoJavascript size={25}/>
                    <BiLogoTypescript size={25}/>
                    <IoLogoNodejs size={25}/>
                    <BiLogoDocker size={25}/>
                    <BiLogoPython size={25}/>
                    <FaReact size={25}/>
                </div>
                <p>I am 21 years old, and I am a full-stack developer with 3 years of experience working in companies and as a freelancer.</p>
            </HeaderDescription>
        </HeaderContent>
        <HeaderImage>
            
            <img src={gifProgramming} alt="gifProgramming"/>
        </HeaderImage>
        </HeaderContainer>
    )
}