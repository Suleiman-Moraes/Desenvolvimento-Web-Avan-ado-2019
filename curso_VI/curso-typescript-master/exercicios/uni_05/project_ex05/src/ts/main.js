import CategoriaCursos from './utils/CategoriaCurso';
class CursoApp {
    constructor(element) {
        this.listaCursos = [
            { nome: 'Typescript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, local: 'Recife', vagas: 20 },
            { nome: 'JavaScript', cargaHoraria: 40, categoria: CategoriaCursos.DESENVOLVIMENTO_WEB, link: 'http://imediabrasil.com.br' }
        ];
        this.element = element;
        this.init();
    }
    init() {
        this.element.innerHTML = '<ul>';
        this.listaCursos.forEach(item => {
            this.element.innerHTML += `<li>${item.nome}</li>`;
        });
        this.element.innerHTML += '</ul>';
    }
}
let target = document.getElementById('app');
let app = new CursoApp(target);
