import * as fromCurso from './curso.reducer';
import { selectCursoState } from './curso.selectors';

describe('Curso Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCursoState({
      [fromCurso.cursoFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
