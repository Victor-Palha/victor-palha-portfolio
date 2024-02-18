import styled from "styled-components";

export const ContactContainer = styled.section`
    display: flex;
    background-color: var(--secundary-color);
    justify-content: space-evenly;
    padding-bottom: 5rem;
    flex-wrap: wrap;
    @media(max-width: 831px){
        justify-content: center;
        align-items: center;
    }
`

export const ContactImage = styled.div`
    img{
        width: 30rem;

        @media(max-width: 831px){
            margin-bottom: 3rem;
            width: 20rem;
        }
    }

`
export const ContactForm = styled.form`
    h2{
        color: white;
        text-shadow: 0px 0px 10px var(--icon-color);
        font-size: 3rem;
        @media(max-width: 831px){
            text-align: center;
            font-size: 2.5rem;
        }
    }
`

export const ContactEmail = styled.div`
    margin-top: 2rem;
    width: 100%;
    padding: 1rem 5rem;
    text-align: center;
    background-color: var(--primary-color);
    border-radius: 8px;
    span{
        color: white;
        text-shadow: 0px 0px 10px var(--icon-color);
        font-size: 1.5rem;
    }
    @media(max-width: 831px){
        padding: 1rem 2rem;
    }
`

export const CopyEmail = styled.div`
    margin-top: 5px;
    width: 100%;
    padding: 1rem 5rem;
    text-align: center;
    cursor: pointer;
    transition: 0.3s all;
    border: 1px solid white;
    border-radius: 8px;
    &&:hover{
        background-image: none;
        background-color: white;
        span{
            color: var(--primary-color);
            text-shadow: none;
        }
        span svg{
            opacity: 1;
        }
    }
    span{
        display: flex;
        justify-content: center;
        gap: 5px;
        color: white;
        text-shadow: 0px 0px 10px var(--icon-color);
        font-size: 1.25rem;
        align-items: center;
        svg{
            transition: 0.3s;
            opacity: 0;
        }
    }

`