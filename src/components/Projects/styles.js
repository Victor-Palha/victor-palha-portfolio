import { styled } from "styled-components";

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

export const AbilitiesContainer = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: var(--primary-color);
    box-shadow: inset 0px 0px 40px #000;
    padding: 10rem 10rem;
    h2{
        color: white;
        text-shadow: 0px 0px 10px var(--icon-color);
        font-size: 2rem;
        text-align: center;
    }

    @media(max-width: 831px){
        padding: 10rem 2rem;
        p{
            font-size: 0.75rem;
        }
    }
    @media(max-width: 425px){
        padding: 5rem 1rem;
    }
`
export const KnowledgeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const KnowledgeBox = styled.div`
    background-color: var(--secundary-color);
    box-shadow: 0px 0px 40px #000;
    border-radius: 10px;
    gap: 10px;
    margin: 10px;
    width: 100px;
    padding: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: 0.3s;
    p{
        font-weight: bold;
        color: var(--primary-color);
    }
    svg{
        transition: 0.3s;
        color: var(--primary-color);
    }
    &&:hover{
        background-color: var(--primary-color);
        border: 1px solid var(--secundary-color);
        svg{
            color: white
        }
        p{
            color: black;
        }
    }
`