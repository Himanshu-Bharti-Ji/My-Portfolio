import React, { useRef } from 'react'
import styled from 'styled-components';
import emailjs from "@emailjs/browser"
import { toast } from 'sonner';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 32px;
    border-radius: 12px;
    box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
    margin-top: 28px;
    gap: 12px;
`;

const ContactTitle = styled.div`
    font-size: 28px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;
const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.input`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;

    width: 100%;
    text-align: center;
    padding: 13px 16px;

    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -moz-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -webkit-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    border-radius: 12px;
    border: none;
    font-weight: 600;
    font-size: 18px;
    transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow:  20px 20px 60px #1F2634,
        filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
    cursor: pointer;
`;

const Contact = () => {

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_nyihysa",
            "template_q7ly4yg",
            form.current,
            "QXa_qjH1yhqgdXiLG"
        ).then((result) => {
            toast.success(
                "Message sent successfully!"
            )
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error);
            toast.error(
                "Oops, something went wrong."
            )
        }
        )
    }

    return (
        <Container id="Contact">
            <Wrapper>
                <Title>Contact</Title>
                <Desc style={{ marginBottom: "40px" }}> Feel free to reach out to me for any questions or opportunities!</Desc>

                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput type='email' placeholder='Your Email' name='from_email' required />
                    <ContactInput placeholder="Your Name" name="from_name" required />
                    <ContactInput placeholder="Subject" name="subject" required />
                    <ContactInputMessage placeholder="Message" name="message" rows={4} required />
                    <ContactButton type='submit' value="Send" />
                </ContactForm>
            </Wrapper>

        </Container>
    )
}

export default Contact

