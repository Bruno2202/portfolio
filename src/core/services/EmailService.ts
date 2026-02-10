import type { AxiosResponse } from "axios";
import api from "../config/ApiConfig";
import type { EmailModel } from "../models/EmailModel";

export class EmailService {
    static async sendEmail(email: EmailModel): Promise<EmailModel> {
        try {
            const res: AxiosResponse<EmailModel> = await api.post("/send-email", {
                ...email
            });

            return res.data;
        } catch (error) {
            console.error(error);
            return {} as EmailModel;
        }
    }
}