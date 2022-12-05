import { Request } from "express";
import Manga from "../models/manga-model";
import mangaServices from "../services/manga-services";

export const types = `
    type Manga {
        id: String!
        title: String
        cover: String
        year: Int
        type: String
        price: Int
        author: String
        genres: [String]
    },
    input MangaInput {
        title: String
        cover: String
        price: Int
        year: Int
        type: String
        author: String
        genres: [String]
    },
    extend type Query {
        getAllMangas(limit:Int): [Manga]
        getManga(id: String!): Manga
    }
    extend type Mutation {
        addManga(manga: MangaInput!): Manga
        updateManga(id: String!, manga: MangaInput!): Manga
        deleteManga(id: String!): Manga
    }
`

export const resolvers = {
    getAllMangas: async (args:any,req:Request) => {
        const {limit} = args;
        try {
            const mangas = await mangaServices.getAllMangas(limit);
            return mangas;
        } catch (err) {
            console.log(err);
            
        }
    },
    getManga: async (args:{id:string},req:Request) => {
        try {
            const {id} = args;
            const manga = await mangaServices.getManga(id);
            return manga;
        } catch (err) {
            console.log(err);
        }
    },
    addManga: async (args:{manga:MangaInput},req:Request) => {
        try {
            const {manga:data} = args;            
            const manga = await mangaServices.addManga(data);
            return manga;
        } catch (err) {
            console.log(err);
        }
    },
    updateManga: async (args:{id:string,manga:MangaInput},req:Request) => {
        try {
            const {id,manga:data} = args;
            const manga = await mangaServices.updateManga(id,data);
            
            return manga;
        } catch (err) {
            console.log(err);
        }
    },
    deleteManga: async (args:any,req:Request) => {
        try {
            const {id} = args;
            const manga = await mangaServices.deleteManga(id);
            return manga;
        } catch (err) {
            console.log(err);
        }
    }
}