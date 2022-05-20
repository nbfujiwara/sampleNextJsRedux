export default class AppUtil {
  private static isLoggedIn: boolean = false

  public static setLoggedIn(flag: boolean) {
    this.isLoggedIn = flag
  }

  public static getLoggedIn(): boolean {
    return this.isLoggedIn
  }
}
