type Manga = {
    id: string;
    title: string;
    year: number;
    type: string;
    cover: string;
    price: number;
    author: string;
    genres: string[];
}

type MangaInput = Omit<Manga, 'id'>

type Generic = {
    id: string;
    name: string;
    type: string;
}

type GenericInput = Omit<Generic, 'id'>

