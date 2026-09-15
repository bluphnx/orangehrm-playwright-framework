import dotenv from "dotenv"

dotenv.config({
    path:".env.qa",
    override:true
})

export class ConfigManager
{
    private static required(name: string): string {
        const value = process.env[name];
        if (!value) {
            throw new Error(`Missing required environment variable: ${name}`);
        }
        return value;
    }

    static get BaseURL(){
        return this.required("BASE_URL");
    }
    static get userName(){
        return this.required("USERNAME");
    }
    static get password(){
        return this.required("PASSWORD");
    }
}