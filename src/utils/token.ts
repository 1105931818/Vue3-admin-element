export class Token {
  public setToken(token: string) {
    sessionStorage.setItem('TOKEN', token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem('TOKEN');
  }

  public removeToken() {
    sessionStorage.removeItem('TOKEN');
  }
}

export default new Token();
