// Profile links / contact info.
//
// The defaults below are baked into the build so the site is always correct.
// You can override any of them per-environment with a VITE_* var (a local .env
// or Vercel project env vars) — but the defaults guarantee the links work even
// if no env var is set. All values are PUBLIC (embedded in the client bundle).
const env = import.meta.env

export const SITE = {
  githubUrl: env.VITE_GITHUB_URL || 'https://github.com/itamarkln-dev',
  githubReposUrl:
    env.VITE_GITHUB_REPOS_URL || 'https://github.com/itamarkln-dev?tab=repositories',
  linkedinUrl: env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/itamar-klein-8b56971a1/',
  email: env.VITE_EMAIL || 'itamarkln.dev@gmail.com',
}
