import React, { useState } from 'react';
import { motion } from 'motion/react';
import Input from '../Input';
import Button from '../Button';
import Textarea from '../Textarea';
import { Email } from '../../core/entities/Email';
import { EmailService } from '../../core/services/EmailService';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const emailData: Email = new Email(emailAddress, message, name);
        await EmailService.sendEmail(emailData);
    }

    function openForm() {
        function scrollToElement(elementId: string, offset: number = 0) {
            const element = document.getElementById(elementId);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth',
                });
            }
        }

        setIsOpen(true);
        setTimeout(() => {
            scrollToElement('contact', -100);
        }, 100);
    }

    return (
        isOpen ? (
            <motion.form
                className="flex flex-col items-center justify-center font-semibold mt-8 w-full md:w-1/2 h-auto"
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <Input
                    maxLength={50}
                    label="Nome"
                    placeholder="Fulano de Tal"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <Input
                    maxLength={50}
                    label="Email"
                    placeholder="fulano@email.com"
                    onChange={(e) => setEmailAddress(e.target.value)}
                    value={emailAddress}
                />
                <Textarea
                    label="Mensagem"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    value={message}
                />
                <Button
                    type="submit"
                    text="Enviar email"
                />
            </motion.form>
        ) : (
            <div className='mt-8'>
                <Button
                    text="Entrar em contato"
                    onClick={() => openForm()}
                />
            </div>
        )
    );
}