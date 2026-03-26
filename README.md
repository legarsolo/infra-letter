# InfraLetter

SvelteKit app deployed to GitHub Pages via GitHub Actions.

## Develop locally

```sh
npm install
npm run dev
```

## Build locally (GitHub Pages path)

When testing the same path behavior as GitHub Pages project sites:

```powershell
$env:BASE_PATH = "/infra-letter"
npm run build
Remove-Item Env:BASE_PATH
```

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy.yml` and deploys on pushes to `main`.

In GitHub:

1. Open **Settings -> Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`.

The workflow builds the app to `build/` and publishes it to Pages.

## Notes

- `BASE_PATH` is read from the environment during build.
- For project pages, the workflow sets `BASE_PATH` to `/<repository-name>`.
- If you later switch to a user/org site (`<owner>.github.io`), set `BASE_PATH` to an empty string in the workflow.
