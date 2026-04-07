# CLAUDE.md

## Project
1299Studio -- Landing page for Studio 1299, a creative studio

## Stack
Static HTML/CSS/JavaScript (vanilla, no build system)

## Conventions
- All changes go through PRs (never push to main)
- Branch naming: feature/<description> or fix/<description>
- Write tests for new features

## Development
- No build step required
- Local dev: `python3 -m http.server 8080` or `npx serve .`

## Deployment
Netlify (netlify.toml configured, publishes root directory)
