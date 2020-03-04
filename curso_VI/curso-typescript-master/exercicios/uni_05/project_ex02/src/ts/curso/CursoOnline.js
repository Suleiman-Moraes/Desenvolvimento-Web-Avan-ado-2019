import Curso from './Curso';
class CursoOnline extends Curso {
    constructor(nome, cargaHoraria, categoria, link = 'http://www.imediabrasil.com.br') {
        super(nome, cargaHoraria, categoria);
        this.link = link;
    }
}
export default CursoOnline;
