/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): private alert functions
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  TRANSITION_END,
  emulateTransitionEnd,
  getElementFromSelector,
  getTransitionDurationFromElement
} from '../util/index'
import EventHandler from '../dom/event-handler'
import SelectorEngine from '../dom/selector-engine'
import { ClassName, Event } from './constants'

export const getRootElement = element => {
  let parent = getElementFromSelector(element)

  if (!parent) {
    parent = SelectorEngine.closest(element, `.${ClassName.ALERT}`)
  }

  return parent
}

export const triggerCloseEvent = element => {
  return EventHandler.trigger(element, Event.CLOSE)
}

export const removeElement = element => {
  element.classList.remove(ClassName.SHOW)

  if (!element.classList.contains(ClassName.FADE)) {
    destroyElement(element)
    return
  }

  const transitionDuration = getTransitionDurationFromElement(element)

  EventHandler
    .one(element, TRANSITION_END, () => destroyElement(element))
  emulateTransitionEnd(element, transitionDuration)
}

const destroyElement = element => {
  if (element.parentNode) {
    element.parentNode.removeChild(element)
  }

  EventHandler.trigger(element, Event.CLOSED)
}
