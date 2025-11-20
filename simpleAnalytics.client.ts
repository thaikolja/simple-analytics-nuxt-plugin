/**
 * @file          plugins/simpleAnalytics.client.ts
 * @description   Nuxt plugin integrating Simple Analytics into the Vue application written in TypeScript.
 *
 * This client-side plugin automatically integrates Simple Analytics into a Nuxt 3/4 application.
 * It is configured via the project's `nuxt.config.ts` file, using a top-level
 * `simpleAnalytics: { ... }` object exported from nuxt.config.ts.
 *
 * Requires '@simpleanalytics/nuxt' to be inside the `modules` array in `nuxt.config.ts`.
 *
 * @see {@link https://docs.simpleanalytics.com/install-simple-analytics-with-nuxt} Official documentation
 *
 * @package   simple-analytics-vue
 * @version   1.0.0
 * @author    Kolja Nolte <kolja.nolte@gmail.com>
 * @see       {@link https://github.com/thaikolja/simple-analytics-nuxt-plugin} GitHub repository
 * @license   MIT
 */

import SimpleAnalytics                 from 'simple-analytics-vue'
import { type SimpleAnalyticsOptions } from 'simple-analytics-vue'

/**
 * @description Nuxt client plugin initializer for Simple Analytics.
 *
 * Adds the Simple Analytics plugin globally to the Nuxt application's Vue instance.
 * Reads options from the top-level `simpleAnalytics` object in `nuxt.config.ts`. By default,
 * tracking is disabled outside of a production environment by default.
 *
 * @param {import('#app').NuxtApp} nuxtApp Nuxt application instance
 * @returns {void}
 */
export default defineNuxtPlugin( ( nuxtApp ) => {
  /**
   * @description Integrates Simple Analytics into the Vue application.
   *
   * The `skip` option is set to disable tracking unless the application is running in a production environment.
   * Additional options are taken from the top-level `simpleAnalytics` config in nuxt.config.ts
   * or can be manually overwritten below.
   */
  nuxtApp.vueApp.use( SimpleAnalytics, {
    skip: process.env.NODE_ENV !== 'production'
  } satisfies SimpleAnalyticsOptions )
} )
