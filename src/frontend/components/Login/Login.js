/* global HTMLElement */
import insertCss from 'insert-css'
import template from './Login.html'
import styles from './Login.css'

export default class Login extends HTMLElement {
  createdCallback () {
    const root = this.createShadowRoot()
    root.innerHTML = template
    insertCss(styles, { parent: root })
  }
}