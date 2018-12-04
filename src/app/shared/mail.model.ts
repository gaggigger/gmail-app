export class Mail {
    public sender: string;
    public address: string;
    public subject: string;
    public message: string;
    public time: string;

    constructor(sender: string, address: string, subject: string, message: string, time: string){
        this.sender = sender;
        this.address = address;
        this.subject = subject;
        this.message = message;
        this.time = time;
    }
}
