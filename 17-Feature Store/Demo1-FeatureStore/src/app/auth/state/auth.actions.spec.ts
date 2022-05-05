import * as fromAuth from './auth.actions';

describe('cargarAuths', () => {
  it('should return an action', () => {
    expect(fromAuth.cargarAuths().type).toBe('[Auth] Cargar Auths');
  });
});
