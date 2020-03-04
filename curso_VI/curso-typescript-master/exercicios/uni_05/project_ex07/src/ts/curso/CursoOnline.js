import Curso from './Curso';
class CursoOnline extends Curso {
    constructor(nome, cargaHoraria, categoria, thumb, link = 'http://www.imediabrasil.com.br') {
        super(nome, cargaHoraria, categoria, thumb);
        this.link = link;
    }
}
export default CursoOnline;
