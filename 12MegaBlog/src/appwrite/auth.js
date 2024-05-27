import conf from '../conf';
import { Client, Account, ID } from "appwrite";

//// you can use whole code for any authentication for future
 
export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account (this.client);
    }

    async createAccount({email, password, name}){
        try {
         const userAccount = await this.account.create(ID.unique(), email, password, name);
         if (userAccount) {
              //call another method
              return this.login({email, password});
         }else{
            return userAccount;
         }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}) {
        try{
           return await this.account.createEmailPasswordSession(email, password);
        }catch (error) {
            throw error;

        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser");
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout");
        }
        return null;
    }
}

const authService = new AuthService();



export default AuthService