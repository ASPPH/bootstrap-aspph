/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): alert constants
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

export const DATA_KEY = 'bs.alert'

const DATA_API_KEY = '.data-api'
const EVENT_KEY = `.${DATA_KEY}`
export const Event = {
  CLOSE: `close${EVENT_KEY}`,
  CLOSED: `closed${EVENT_KEY}`,
  CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`
}

export const ClassName = {
  ALERT: 'alert',
  FADE: 'fade',
  SHOW: 'show'
}
