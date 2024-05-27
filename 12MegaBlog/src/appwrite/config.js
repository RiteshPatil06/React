import conf from '../conf';
import { Client, Databases, Storage, Query, ID } from "appwrite";


export class Service{
   client = new Client();
   databases;
   bucket;

   constructor(){
      this.client
     .setEndpoint(conf.appwriteurl)
     .setProject(conf.appwriteProjectId);
     this.databases = new Databases(this.client);
     this.bucket = new Storage(this.client);
   }

   async createPost({title, slug, content, featuredImage, status, userId}){
    try{
         const post = await this.databases.createDocument(conf.appwriteCollectionId, conf.appwriteCollectionId, 
            slug, {
            title,
            content,
            featuredImage,
            status,
            userId
         });
         return post;
      }catch(error){
         throw error;
      }
   }

   async updatePost(slug, {title, content, featuredImage, status}){
    try {
       return await this.databases.updateDocument(conf.appDatabaseId, conf.appwriteCollectionId, slug, {
            title,
            content,
            featuredImage,
            status
       });
    } catch (error) {
        console.log("Appwrite service :: updatePost", error);
    }
   }

   async deletePost(slug){
    try {
       await this.databases.deleteDocument(conf.appDatabaseId, conf.appwriteCollectionId, slug)
        return true; 
    } catch (error) {
        console.log("Appwrite service :: deletePost", error);
        return false;
    }
    }

    async getPost(slug){
    try {
       return await this.databases.getDocument(conf.appDatabaseId, conf.appwriteCollectionId, slug);
    } catch (error) {
        console.log("Appwrite service :: getPost", error);
        return false  
    }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
    try {
       return await this.databases.listDocuments(conf.appDatabaseId, conf.appwriteCollectionId, queries );
    } catch (error) {
        console.log("Appwrite service :: getPosts", error);
        return false
    }
    }

    //file upload service

    async uploadFile(file){
    try {
       return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
       
    } catch (error) {
        console.log("Appwrite service :: uploadFile", error);
        return false
    }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
        } catch (error) {
            console.log("Appwrite service :: deleteFile", error);
            return false
        }
    }

     getFilePreview(fileID){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileID);
     }
   }


const service = new Service();
export default Service;