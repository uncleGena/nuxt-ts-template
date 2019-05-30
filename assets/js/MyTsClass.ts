export default class MyTsClass {
  private lang: string

  constructor({ lang }) {
    this.lang = lang || 'typescript'
  }

  getLang() {
    return this.lang
  }
}
