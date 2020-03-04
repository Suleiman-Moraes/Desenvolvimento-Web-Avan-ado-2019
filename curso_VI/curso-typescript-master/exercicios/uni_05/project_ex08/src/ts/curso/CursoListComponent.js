import Curso from './Curso';
import CursoOnline from './CursoOnline';
import CursoPresencial from './CursoPresencial';
import TipoCurso from '../utils/TipoCurso';
class CursosListComponent {
    constructor(cursos) {
        this.cursos = [];
        cursos.forEach(element => {
            this.cursos.push(this.factory(element));
        });
    }
    factory(curso) {
        console.log(typeof curso.link !== 'undefined');
        switch (curso.tipo) {
            case TipoCurso.ONLINE:
                return new CursoOnline(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb, curso.link);
            case TipoCurso.PRESENCIAL:
                return new CursoPresencial(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb, curso.local, curso.vagas);
            default:
                return new Curso(curso.nome, curso.cargaHoraria, curso.categoria, curso.thumb);
        }
    }
    render() {
        let listaContent = '<div class="row">';
        this.cursos.forEach(item => {
            listaContent += item.render();
        });
        listaContent += '</div>';
        return listaContent;
    }
}
export default CursosListComponent;
