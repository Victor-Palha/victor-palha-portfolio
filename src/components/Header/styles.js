import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: var(--primary-color);
    /* box-shadow: inset 0px 0px 40px #000; */
    padding: 10rem 10rem;

    @media(max-width: 1567px){
        justify-content: center;
    }
    @media(max-width: 831px){
        padding: 10rem 3rem;
        p{
            font-size: 0.5rem;
        }
    }
`
export const HeaderImage = styled.div`
    img{
        width: 30rem;

        @media(max-width: 831px){
            margin-top: 3rem;
            width: 20rem;
        }
    }
`
export const HeaderContent = styled.div`
    p{
        color: var(--icon-color);
        font-weight: bold;
    }
    color: white;

    text-transform: uppercase;
    h1{
        font-size: 7rem;
        font-weight: bold;
        text-shadow: 0px 0px 10px var(--icon-color);
    
        @media(max-width: 831px){
                font-size: 3rem;
        }
    }
`
export const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    svg{
        cursor: pointer;
        margin-left: 1rem;
        color: var(--icon-color);
        transition: 0.3s;
        &:hover{
            margin-bottom: 0.5rem;
        }
    }
    

    h2{
        font-weight: bold;
        font-size: 5rem;
        text-shadow: 0px 0px 10px var(--icon-color);

        @media(max-width: 831px){
            font-size: 2rem;
        }
    }
    
`

export const HeaderDescription = styled.div`
    width: 40rem;
    margin-left: 8rem;
    display: flex;
    justify-content: space-between;
    div{
        margin-right: 0.75rem;
        width: 20rem;
    }
    p{
        font-size: 0.75rem;
    }
    @media(max-width: 831px){
        
        margin-left: 0rem;
        display: block;
        width: 100%;
        div{
            width: 100%;
        }
        p{
            margin-top: 1rem;
            font-size: 0.75rem;
        }
    }
`