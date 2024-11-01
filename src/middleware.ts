import createMiddleware from "next-intl/middleware";
import {locales} from "./config";


export default  createMiddleware({
  locales,
  defaultLocale: "am"
})

export const config = {
  matcher: ["/", "/(am|ru|en)/:path*"]
}