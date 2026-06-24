// Profile links / contact info — sourced entirely from env vars (VITE_*).
// Set these in Vercel (Project → Settings → Environment Variables) for
// production, and in a local `.env` for development (see .env.example).
// Note: VITE_* values are PUBLIC — they're embedded in the client bundle.
const env = import.meta.env

export const SITE = {
  githubUrl: env.VITE_GITHUB_URL,
  githubReposUrl: env.VITE_GITHUB_REPOS_URL,
  linkedinUrl: env.VITE_LINKEDIN_URL,
  email: env.VITE_EMAIL,
}
