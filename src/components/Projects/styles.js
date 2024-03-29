import { styled } from "styled-components";

export const ProjectsName = styled.h2`
    background-color: var(--primary-color);
    color: white;
    text-shadow: 0px 0px 10px var(--icon-color);
    font-size: 2rem;
    text-align: center;
`

export const ProjectsContainer = styled.div`
    /* box-shadow: inset 0px 0px 40px #000; */
    background-image: linear-gradient(var(--primary-color), var(--secundary-color));
    padding: 10rem 10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 1024px){
        padding: 10rem 2rem;
    }
`

