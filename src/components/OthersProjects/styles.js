import {styled} from "styled-components";

export const OthersProjectsContainer = styled.div`
    background-color: var(--secundary-color);
    display: flex;
    flex-direction: column;
`

export const OthersProjectsTitle = styled.h2`
    color: white;
    text-shadow: 0px 0px 10px var(--icon-color);
    font-size: 2rem;
    text-align: center;
`

export const ProjectsContainer = styled.div`
    /* box-shadow: inset 0px 0px 40px #000; */
    /* background-image: linear-gradient(var(--primary-color), var(--secundary-color)); */
    padding: 10rem 10rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media(max-width: 1024px){
        padding: 10rem 2rem;
    }
`