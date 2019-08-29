function addRemoveClass(add, element, className, classNameList) {
  if (!classNameList.length) {
    element.classList[add ? 'add' : 'remove'](className)

    return
  }

  const classList = [className].concat(classNameList)

  classList.forEach(addClassName => element.classList[add ? 'add' : 'remove'](addClassName))
}

export function addClass(element, className, ...classNameList) {
  addRemoveClass(true, element, className, classNameList)
}

export function removeClass(element, className, ...classNameList) {
  addRemoveClass(false, element, className, classNameList)
}

export function hasClass(element, className) {
  return element.classList.contains(className)
}

export function toggleClass(element, className) {
  return element.classList.toggle(className)
}
