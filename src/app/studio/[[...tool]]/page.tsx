/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path are handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Remove the incorrect metadata and viewport imports if they are not provided in the next-sanity package
// If needed, you can import them from a correct source, or remove them if they are not required.
export const dynamic = 'force-static'

export default function StudioPage() {
  return <NextStudio config={config} />
}
