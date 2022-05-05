import * as fromCurso from './curso.actions';

describe('cargarCursos', () => {
  it('should return an action', () => {
    expect(fromCurso.cargarCursos().type).toBe('[Curso] Cargar Cursos');
  });
});
