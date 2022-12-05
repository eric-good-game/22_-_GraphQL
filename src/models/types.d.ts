type Product = {
    id: string;
    name: string;
    effect: string;
    class: string;
    origin: string;
    category: string;
    price: number;
    stock: number;
    description: string;
}
type ProductInput = {
    name: string;
    effect: string;
    class: string;
    origin: string;
    category: string;
    price: number;
    stock: number;
    description: string;
}

// export interface IProduct {
//     name: string;
//     price: number;
//     genres_id: Schema.Types.ObjectId[];
//     author_id: Schema.Types.ObjectId;
//     year: number;
//     type: 'manga' | 'manhwa';
//     imgExt:string
// }
// export type MangaInput = {
//     name: String!
//     author: String!
//     year: Int!
//     type: String!
//     imgExt: String!
//     price: Float!
//     stock: Int!
//     genres: [String!]!
// }

// export interface IMessage {
//     name: string;
//     email: string;
//     content: string;
//     timestamp: Date;
// }

// export interface IGeneric {
//     name: string;
// }

// export interface IProductDto {
//     _id: string;
//     name: string;
//     price: number;
//     genres_id: Schema.Types.ObjectId[];
//     author_id: Schema.Types.ObjectId;
//     year: number;
//     type: 'manga' | 'manhwa';
//     imgExt:string
// }