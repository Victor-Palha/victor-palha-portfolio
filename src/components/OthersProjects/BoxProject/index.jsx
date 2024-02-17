import { ProjectModal } from "./ProjectModal";
import { BoxProjectContainer, BoxProjectDescription } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

export function BoxProject({image, description, tags, title, completeDescription, link_repository, link_project, id, api}){
    return (
        <BoxProjectContainer>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <img src={image}/>
                </Dialog.Trigger>
                <ProjectModal 
                    title={title} 
                    image={image} 
                    description={completeDescription} 
                    link_project={link_project} 
                    link_repository={link_repository}
                    id={id}
                    api={api}
                />
            </Dialog.Root>
            <BoxProjectDescription>
                <span>{tags}</span>
                <p>{description}</p>
            </BoxProjectDescription>
        </BoxProjectContainer>
    )
}