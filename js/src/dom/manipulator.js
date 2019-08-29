/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(val) {
  if (val === 'true') {
    return true
  }

  if (val === 'false') {
    return false
  }

  if (val === Number(val).toString()) {
    return Number(val)
  }

  if (val === '' || val === 'null') {
    return null
  }

  return val
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => chr.toLowerCase())
}

function addRemoveClass(add, element, className, classNameList) {
  if (!classNameList.length) {
    element.classList[add ? 'add' : 'remove'](className)

    return
  }

  const classList = [className].concat(classNameList)

  classList.forEach(addClassName => element.classList[add ? 'add' : 'remove'](addClassName))
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-${normalizeDataKey(key)}`, value)
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-${normalizeDataKey(key)}`)
  },

  getDataAttributes(element) {
    if (!element) {
      return {}
    }

    const attributes = {
      ...element.dataset
    }

    Object.keys(attributes).forEach(key => {
      attributes[key] = normalizeData(attributes[key])
    })

    return attributes
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-${normalizeDataKey(key)}`))
  },

  offset(element) {
    const rect = element.getBoundingClientRect()

    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    }
  },

  position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    }
  },

  toggleClass(element, className) {
    if (!element) {
      return
    }

    if (this.containsClass(element, className)) {
      this.removeClass(element, className)
    } else {
      this.addClass(element, className)
    }
  },

  addClass(element, className, ...classNameList) {
    addRemoveClass(true, element, className, classNameList)
  },

  removeClass(element, className, ...classNameList) {
    addRemoveClass(false, element, className, classNameList)
  },

  containsClass(element, className) {
    return element.classList.contains(className)
  }
}

export default Manipulator
