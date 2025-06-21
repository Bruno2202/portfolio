import toast from "react-hot-toast";
import type { Email } from "../entities/Email";
import emailjs from '@emailjs/browser'

export class EmailService {
    static async sendEmail(email: Email | null) {
        if (
            !email ||
            !email.getName || email.getName.trim().length === 0 ||
            !email.getMessage || email.getMessage.trim().length === 0 ||
            !email.getEmailAddress || email.getEmailAddress.trim().length === 0
        ) {
            toast.error("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: email.getName,
            message: email.getMessage,
            email: email.getEmailAddress,
        }

        toast.promise(async () =>
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ), {
            loading: 'Enviando email',
            success: 'Email enviado com sucesso!',
            error: 'Não foi possível enviar o email',
        });
    }
}

