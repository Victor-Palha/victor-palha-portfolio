import { styled } from "styled-components";

export const BoxProjectContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1rem 1rem;
    width: 20rem;
    img{
        cursor: pointer;
        width: 20rem;
        transition: all 0.5s ease;
        border-radius: 35px;
        &:hover{
            transform: scale(1.1);
            box-shadow: 0px 5px 10px #000000;
        }
    }

    @media(max-width: 1024px){
        margin: 1rem auto;
    }
    @media(max-width: 831px){
        margin: 2rem auto;
        img{
            width: 15rem;
        }
    }
`

export const BoxProjectDescription = styled.div`
    text-transform: uppercase;
    text-align: center;
    margin-top: 1rem;
    span{
        font-weight: bold;
        font-size: 0.5rem;
        background-color: var(--tags-background);
        padding: 0.5rem 0.75rem;
        border-radius: 10px;
        color: var(--tags-color);
    }
    p{
        color: white;
        text-shadow: 0px 1px 5px var(--icon-color);
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
`