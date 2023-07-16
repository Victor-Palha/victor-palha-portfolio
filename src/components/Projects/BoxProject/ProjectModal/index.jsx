import { CloseButton, Content, DescriptionModal, HeaderModal, IconsModal, LinksModal, ModalContainer, ModalContent, Overlay } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import {GrClose} from 'react-icons/gr';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {SiTypescript, SiStyledcomponents, SiFastify, SiPostgresql, SiPrisma, SiDocker, SiVitest} from 'react-icons/si';

export function ProjectModal({title, image, description, link_repository, link_project, id, api}){
    return (
        <ModalContainer>
            <Overlay/>
            <Content>
                <HeaderModal>
                    <Dialog.Title>{title}</Dialog.Title>
                    <CloseButton>
                        <GrClose size={25}/>
                    </CloseButton>
                </HeaderModal>    
                <ModalContent>
                    <img src={image}/>
                    <DescriptionModal>
                        <p>{description}</p>
                    </DescriptionModal>
                </ModalContent>
                {id === 1 && (
                    <IconsModal>
                        <FaReact size={30}/>
                        <SiTypescript size={30}/>
                        <SiStyledcomponents size={30}/>
                    </IconsModal>
                )}
                {id === 2 && (
                    <IconsModal>
                        <FaNodeJs size={30}/>
                        <SiTypescript size={30}/>
                        <SiFastify size={30}/>
                        <SiPostgresql size={30}/>
                        <SiPrisma size={30}/>
                        <SiDocker size={30}/>
                        <SiVitest size={30}/>
                    </IconsModal>
                )}
                {id === 3 && (
                    <IconsModal>
                        <FaReact size={30}/>
                        <SiTypescript size={30}/>
                        <SiStyledcomponents size={30}/>
                        <FaNodeJs size={30}/>
                        <SiTypescript size={30}/>
                        <SiFastify size={30}/>
                        <SiPostgresql size={30}/>

                    </IconsModal>
                )}
                <LinksModal>
                {id === 1 && (
                    <>
                        <a href={link_project} target="_blank" rel="external">Preview</a>
                        <a href={link_repository} target="_blank" rel="external">Repository</a>
                    </>
                )}
                {id === 2 && (
                    <>
                        <a href={link_repository} target="_blank" rel="external">Repository</a>
                    </>
                )}
                {id === 3 && (
                    <>
                        <a href={link_project} target="_blank" rel="external">Preview</a>
                        <a href={api}  target="_blank" rel="external">API</a>
                        <a href={link_repository} target="_blank" rel="external">Repository</a>
                    </>
                )}
                    
                </LinksModal>
            </Content>
        </ModalContainer>
    )
}