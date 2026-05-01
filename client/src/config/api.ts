// BF_WEBSITE_BLOCK_1_17_FORMS_ABSOLUTE_ORIGIN — single source of truth for
// the BF-Server origin from the website. Forms must POST to this absolute
// origin because the website is on a different Azure host than BF-Server,
// and the website's safeFetch/apiClient helpers do not prepend an origin.
//
// If a future env switch is needed (dev vs. prod, preview slots, etc.),
// flip this to: import.meta.env.VITE_API_BASE_URL ?? "https://server.boreal.financial".
// For V1 launch we hardcode the prod origin so the website is unambiguous
// regardless of the static-web-app environment.
export const WEBSITE_API_BASE = "https://server.boreal.financial";
