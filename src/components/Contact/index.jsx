import { useState } from "react";
import chatbot from "../../assets/Chatbot.gif";
import { ContactContainer, ContactEmail, ContactForm, ContactImage, CopyEmail } from "./styles";
import { FaCopy } from "react-icons/fa";

export function Contact(){

    const [copied, setCopied] = useState(false);

    const email = "jv.palha@gmail.com";

    async function handleCopyEmail() {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy: ', err)
        }

        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }

    return (
        <ContactContainer>
            <ContactImage>
                <img src={chatbot}/>
            </ContactImage>
            <ContactForm>
                <h2>Get in touch</h2>
                <ContactEmail>
                    <span id="myEmail">{email}</span>
                </ContactEmail>
                <CopyEmail onClick={()=>handleCopyEmail()}>
                    {copied ? <span>Copied! <FaCopy color="green"/></span> : <span>Copy Email <FaCopy/></span>}
                </CopyEmail>
            </ContactForm>
        </ContactContainer>
    )
}