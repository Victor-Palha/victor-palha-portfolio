import styled from 'styled-components';

export const AbilitiesContainer = styled.footer`
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
    @media screen and (max-width: 392px) {
        padding: 5rem 0.5rem;
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
    border: 1px solid var(--primary-color);
    transition: 0.3s;
    p{
        font-size: 0.75rem;
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
    @media screen and (max-width: 392px) {
        width: 50px;
        padding: 0.25rem;
        p{
            font-size: 0.5rem;
        }
        svg{
            width: 30px;
        }
    }
`