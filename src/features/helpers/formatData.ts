import React from "react"

export const localDate = (year: number, month: number, day: number, locales: Intl.LocalesArgument = "en-US") => {
  const event = new Date(Date.UTC(year, month, day))
  const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: '2-digit'}
  return event.toLocaleDateString(locales, options)
}

export const resolveBRinString = (str?: string | null): string | React.ReactNode => {
  const brVerities = "<br>" || "<br/>" || "<br />";
  if (str && str.includes(brVerities)) {
    return str.split(brVerities).map((paragraph, index) => React.createElement('p', {children: paragraph, key: index}))
  }
  return str
}