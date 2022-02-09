import {shouldPolyfill} from '@formatjs/intl-pluralrules/should-polyfill'

export async function polyfill(locale: string) {
    const unsupportedLocale = shouldPolyfill(locale)
    console.log('unsupportedLocale=',unsupportedLocale,'locale=',locale)
    // This locale is supported
    if (!unsupportedLocale) {
      return
    }
    // Load the polyfill 1st BEFORE loading data
    await import('@formatjs/intl-pluralrules/polyfill-force')
    await import(`@formatjs/intl-pluralrules/locale-data/${unsupportedLocale}`)
  }
