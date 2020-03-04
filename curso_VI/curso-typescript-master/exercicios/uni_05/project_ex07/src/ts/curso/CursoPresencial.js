import Curso from './Curso';
class CursoPresencial extends Curso {
    constructor(nome, cargaHoraria, categoria, thumb, local = 'em breve', vagas = 99) {
        super(nome, cargaHoraria, categoria, thumb);
        this.local = local;
        this.vagas = vagas;
    }
}
export default CursoPresencial;
