import Manga from "../../models/manga-model";

class MangaDao {
    public async getAllMangas(limit:number) {
        try {
            return await Manga.find().limit(limit|0);
        } catch (err) {
            console.log(err);
        }
    }
    public async getManga(id:string) {
        try {
            return await Manga.findById(id);
        } catch (err) {
            console.log(err);
        }
    }
    public async addManga(data:MangaInput) {
        try {
            const manga = new Manga(data);
            await manga.save();
            return manga;
        } catch (err) {
            console.log(err);
        }
    }
    public async updateManga(id:string,data:MangaInput) {
        try {
            const manga = await Manga.findByIdAndUpdate(id,data,{new:true});
            return manga;
        } catch (err) {
            console.log(err);
        }
    }
    public async deleteManga(id:string) {
        try {
            const manga = await Manga.findByIdAndDelete(id);
            return manga;
        } catch (err) {
            console.log(err);
        }
    }
}

const mangaDao = new MangaDao();
export default mangaDao;