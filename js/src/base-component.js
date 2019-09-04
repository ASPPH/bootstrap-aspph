import Data from './dom/data'

class BaseComponent {
  constructor(element) {
    if (!element) {
      return
    }

    this._element = element
    Data.setData(element, this.constructor.DATA_KEY, this)
  }

  /** Static */

  static getInstance(element) {
    return Data.getData(element, this.DATA_KEY)
  }

  static get DATA_KEY() {
    return null
  }
}

export default BaseComponent
