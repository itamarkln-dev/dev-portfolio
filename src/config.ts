// Profile links / contact info — sourced from env vars (VITE_*).
// Set them in Vercel (Project → Settings → Environment Variables) for production
// and in a local `.env` for development (see .env.example). No values live in code.
const env = import.meta.env

export const SITE = {
  githubUrl: env.VITE_GITHUB_URL,
  githubReposUrl: env.VITE_GITHUB_REPOS_URL,
  linkedinUrl: env.VITE_LINKEDIN_URL,
  email: env.VITE_EMAIL,
}
