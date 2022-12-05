import { buildSchema } from "graphql";
import Product from "./models/product-model";

export const schema = buildSchema(`
    type Product {
        id: ID!
        name: string
        effect: string
        class: string
        origin: string
        category: string
        price: number
        stock: number
        description: string
    },
    input ProductInput {
        name: string
        effect: string
        class: string
        origin: string
        category: string
        price: number
        stock: number
        description: string
    },
    type Query {
        getManga(id: ID!): Manga
        getMangas: [Manga!]!
    },
    type Mutation {
        addManga(manga: MangaInput!): Manga
        updateManga(id: ID!, manga: MangaInput!): Manga
        deleteManga(id: ID!): Manga
    }
`);

export const root = {
    getManga: async ({ id }:{id:number}) => {
        try {
            return await Product.findById(id);
        } catch (err) {
            console.log(err);
        }
    },
    getMangas: async () => {
        try {
            return await Product.find();
        } catch (err) {
            console.log(err);
        }
    },
    addManga: async (manga:ProductInput) => {
        try {
            const newManga = new Product(manga);
            return await newManga.save();
        } catch (err) {
            console.log(err);
        }
    },
    updateManga: async ({ id, manga }:{id:number, manga:ProductInput}) => {
        try {
            const updatedManga = await Product.findByIdAndUpdate(id, manga, { new: true });
            return updatedManga;
        } catch (err) {
            console.log(err);
        }
    },
    deleteManga: async ({ id }:{id:number}) => {
        try {
            const deletedManga = await Product.findByIdAndDelete(id);
            return deletedManga;
        } catch (err) {
            console.log(err);
        }
    }
};