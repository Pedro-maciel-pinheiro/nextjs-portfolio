import createMiddleware from 'next-intl/middleware'
import { languages } from './constant/language'

export default createMiddleware({
  // A list of all locales that are supported
  locales: languages,

  // Used when no locale matches
  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en|jp)/:path*'],
}
