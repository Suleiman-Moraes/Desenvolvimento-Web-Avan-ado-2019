class FavoriteService {
    constructor(dataBaseName) {
        this.dbName = dataBaseName;
        this.db = window.localStorage;
        this.favorites = this.init();
    }
    init() {
        if (!this.db.getItem(this.dbName)) {
            this.db.setItem(this.dbName, '[{}]');
        }
        return JSON.parse(this.db.getItem(this.dbName));
    }
    getAll() {
        return this.favorites;
    }
    save(curso) {
        this.favorites.push(curso);
        this.db.setItem(this.dbName, JSON.stringify(this.favorites));
    }
    delete(curso) {
        this.favorites = this.favorites.filter(item => item !== curso);
        console.log(this.favorites, curso);
    }
}
export default FavoriteService;
