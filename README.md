# Simple Analytics Plugin for Nuxt

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white) [![Simple Analytics](https://img.shields.io/badge/Simple%20Analytics-Visit%20Site-red)](https://www.simpleanalytics.com)

A Nuxt plugin for integrating [Simple Analytics](https://simpleanalytics.com/) into the application. Compatible with Nuxt 3 and 4, and written in TypeScript.

## Overview

The `simpleAnalytics.client.ts` plugin automatically integrates Simple Analytics tracking into your Nuxt 3 or 4 application. It runs client-side only and is configured through the `nuxt.config.ts` file.

## Quick Start

1. Use `git clone` to clone this repository, or open `simpleAnalytics.client.ts` [as a raw file and copy its contents](https://raw.githubusercontent.com/thaikolja/simple-analytics-nuxt-plugin/refs/heads/main/simpleAnalytics.client.ts).

2. Paste the file or code in Nuxt's plugin directory:
   1. Nuxt 3: `plugins/simpleAnalytics.client.ts`
   2. Nuxt 4: `app/plugins/simpleAnalytics.client.ts`

3. Add `@simpleanalytics/nuxt` to the `modules` array in your `nuxt.config.ts`:

   ```typescript
   export default defineNuxtConfig({
     modules: [
       // Your other Nuxt modules
       '@simpleanalytics/nuxt'
     ],
     simpleAnalytics: {
       // Optional settings
     },
   });
   ```

To further adjust the plugin, see the [Configuration](#configuration) and [Options](#options) sections.

## Configuration

You can configure the plugin in your application's `nuxt.config.ts` file, or directly override its values in the `simpleAnalytics.client.ts` file.

### 1. `nuxt.config.ts` file (recommended):

```typescript
export default defineNuxtConfig({
  simpleAnalytics: {
    // Add your options here
  },
})
```

### 2. Manually

Scroll to the bottom of the file and add the available parameters to the object (example):

```typescript
export default defineNuxtPlugin( ( nuxtApp ) => {
  nuxtApp.vueApp.use( SimpleAnalytics, {
    skip: process.env.NODE_ENV !== 'production'
    collectDnt: true,
    // Add more custom options here...
  } satisfies SimpleAnalyticsOptions )
} )
```

## Defaults

- **Production Only**: Tracking is **disabled** unless `NODE_ENV` is set to `production`.
- **DNT Compliance**: The `collectDnt` option is **enabled** to collect data regardless of the user's *Do Not Track* settings.

## Options

The following options are available for configuring Simple Analytics. Use them as properties on the `SimpleAnalyticsOptions` object.

- `skip?: boolean | (() => boolean) | Promise<boolean>`
  - When `true`, analytics collection is skipped. You can also provide a function that returns a boolean or a `Promise<boolean>` for dynamic/async decisions.

- `domain?: string`
  - The domain to attribute events to (e.g., `"example.com"`).

- `autoCollect?: boolean`
  - If `true`, automatically collect common metrics and send events without manual calls.

- `collectDnt?: boolean`
  - If `true`, collect analytics even when the user's Do Not Track (DNT) setting is enabled.

- `hostname?: string`
  - Custom hostname to report with events (useful when reporting from distinct hostnames).

- `mode?: 'dash'`
  - Optional mode flag. Current supported value: `'dash'`.

- `ignoreMetrics?: { ... }`
  - Object to selectively ignore specific automatic metrics. Each metric is a boolean; set to `true` to ignore.
  - Properties:
    - `referrer?: boolean` — Ignore referrer information.
    - `utm?: boolean` — Ignore UTM parameters.
    - `country?: boolean` — Ignore detected country.
    - `session?: boolean` — Ignore session tracking.
    - `timeonpage?: boolean` — Ignore time-on-page measurement.
    - `scrolled?: boolean` — Ignore scroll-depth tracking.
    - `useragent?: boolean` — Ignore the user agent string.
    - `screensize?: boolean` — Ignore reported screen size.
    - `viewportsize?: boolean` — Ignore viewport size.
    - `language?: boolean` — Ignore detected language.

- `ignorePages?: string[]`
  - Array of page path patterns or exact paths to exclude from collection.

- `allowParams?: string[]`
  - List of query parameter names that are allowed to be recorded (all others will be dropped unless explicitly allowed).

- `nonUniqueParams?: string[]`
  - Query parameter names that are allowed to contain non-unique values across visits (i.e., they should not be used to deduplicate).

- `strictUtm?: boolean`
  - If `true`, enforce strict handling of UTM parameters (e.g., require certain UTM fields to be present or validate their format).

## Resources

For more information on available configuration options, visit:
- [Simple Analytics Vue Plugin](https://github.com/simpleanalytics/vue-plugin)
- [Official Nuxt Integration Guide](https://docs.simpleanalytics.com/install-simple-analytics-with-nuxt)

## License

MIT

## Author

* Kolja Nolte <kolja.nolte@gmail.com>
