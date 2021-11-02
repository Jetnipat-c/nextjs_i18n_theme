/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en-US", "th-TH"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path e.g. `/hello`
     */
    defaultLocale: "th-TH",
    // domains: [
    //   {
    //     domain: "localhost:3000",
    //     defaultLocale: "th-TH",
    //   },
    //   {
    //     domain: "localhost/login/en-US",
    //     defaultLocale: "en-US",
    //     // an optional http field can also be used to test
    //     // locale domains locally with http instead of https
    //     http: true,
    //   },
    // ],
  },
};
