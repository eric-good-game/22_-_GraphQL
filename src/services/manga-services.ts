import mangaDao from "../daos/mongodb/manga-dao";

class MangaServices {

    private mangaDao = mangaDao;
    
    public async getAllMangas(limit:number) {
        try {
            return await this.mangaDao.getAllMangas(limit);
        } catch (err) {
            console.log(err);
        }
    }
    public async getManga(id:string) {
        try {
            return await this.mangaDao.getManga(id);
        } catch (err) {
            console.log(err);
        }
    }
    public async addManga(data:MangaInput) {
        try {
            return await this.mangaDao.addManga(data);
        } catch (err) {
            console.log(err);
        }
    }
    public async updateManga(id:string,data:MangaInput) {
        try {
            return await this.mangaDao.updateManga(id,data);
        } catch (err) {
            console.log(err);
        }
    }
    public async deleteManga(id:string) {
        try {
            return await this.mangaDao.deleteManga(id);
        } catch (err) {
            console.log(err);
        }
    }
}

const mangaServices = new MangaServices();
export default mangaServices;