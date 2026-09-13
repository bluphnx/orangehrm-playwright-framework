import dotenv from "dotenv"

dotenv.config({
    path:".env.qa"
})

export class ConfigManager
{
    static get BaseURL(){
        return process.env.BASE_URL!;
    }
    static get userName(){
        return process.env.USERNAME!;
    }
    static get password(){
        return process.env.PASSWORD!;
    }
}