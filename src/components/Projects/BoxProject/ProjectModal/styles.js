import { styled } from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const ModalContainer = styled(Dialog.Portal)``

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`
export const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CloseButton = styled(Dialog.Close)`
    background: transparent;
    border: none;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;

    cursor: pointer;
`

export const Content = styled(Dialog.Content)`
    min-width: 40rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: var(--modal-color);
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media(max-width: 831px){
        min-width: 15rem;
        padding: 2rem 1rem;
    }
`

export const ModalContent = styled.div`
    display: flex;
    margin-top: 2rem;
    img{
        width: 20rem;
    }

    @media(max-width: 831px){
        display: block;
        img{
            width: 10rem;
            margin: 0px 5rem 2rem 5rem;
        }
    }
`

export const DescriptionModal = styled.div`
    margin-left: 2rem;
    p{
        font-size: 1.10rem;
        font-weight: bold;
        color: white;
        text-shadow: 0px 0px 10px var(--icon-color);
    }

    @media(max-width: 831px){
        p{
            font-size: 1rem;
        }
        margin: 0rem 1rem;
    }
`

export const IconsModal = styled.div`
    text-align: center;
    margin: 1.5rem 0 0 0;
    color: var(--icon-color);
    svg{
        margin: 0 0.5rem;
    }
`

export const LinksModal = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        padding: 1rem 1.5rem;
        border-radius: 6px;
        background-color: var(--tags-background);
        text-decoration: none;
        color: var(--tags-color);
        transition: 0.3s;
        &:hover{
            background-color: var(--tags-color);
            color: var(--tags-background);
        }
    }
`