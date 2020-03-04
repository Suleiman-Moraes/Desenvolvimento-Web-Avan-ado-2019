var CategoriaCursos;
(function (CategoriaCursos) {
    CategoriaCursos["DESENVOLVIMENTO"] = "desenvolvimento";
    CategoriaCursos["DESENVOLVIMENTO_WEB"] = "desenvolvimento_web";
    CategoriaCursos["DESIGN"] = "design";
    CategoriaCursos["MARKETING"] = "marketing";
})(CategoriaCursos || (CategoriaCursos = {}));
class Curso {
    constructor(nome, cargaHoraria, categoria) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.categoria = categoria;
    }
}
// online - link
class CursoOnline extends Curso {
    constructor(nome, cargaHoraria, categoria, link = 'http://www.imediabrasil.com.br') {
        super(nome, cargaHoraria, categoria);
        this.link = link;
    }
}
// presencial - local
class CursoPresencial extends Curso {
    constructor(nome, cargaHoraria, categoria, local = 'em breve', vagas = 99) {
        super(nome, cargaHoraria, categoria);
        this.local = local;
        this.vagas = vagas;
    }
}
let cursoPresencialTS = new CursoPresencial('Typescript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB, 'Recife', 20);
let cursoPresencialJS = new CursoPresencial('JavaScript', 40, CategoriaCursos.DESENVOLVIMENTO_WEB);
let cursoOnlinePS = new CursoOnline('PhotoShop', 40, CategoriaCursos.DESIGN, 'http://www.imediabrasil.com.br');
