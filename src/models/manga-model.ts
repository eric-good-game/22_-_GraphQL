import { model, Schema } from "mongoose";

const mangaSchema = new Schema<Manga>({
    title: String,
    cover: String,
    price: Number,
    author: String,
    genres: [String],
    year: Number,
    type: String
    
});

const Manga = model('Manga', mangaSchema);

export default Manga;