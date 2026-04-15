import { defineConfig } from 'vite'

// Production base:
// - Cloudflare Pages serves at the hostname root → base must be '/'. CF sets CF_PAGES=1 during build.
// - GitHub project Pages uses https://<user>.github.io/<repo>/ → base '/<repo>/'.
// Override anytime: VITE_BASE_PATH=/custom/
export default defineConfig(({ command }) => {
  const prodBase =
    process.env.VITE_BASE_PATH ??
    (process.env.CF_PAGES === '1' ? '/' : '/CurbAppealLawnCare/')

  return {
    base: command === 'build' ? prodBase : '/',
  }
})
