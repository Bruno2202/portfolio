export class Email {
    private emailAddress: string;
    private message: string;
    private name: string;
    
    constructor(emailAddress?: string, message?: string, name?: string) {
        this.emailAddress = emailAddress || '';
        this.message = message || '';
        this.name = name || '';
    }
    public get getEmailAddress(): string { return this.emailAddress; }
    public get getMessage(): string { return this.message; }
    public get getName(): string { return this.name; }
}