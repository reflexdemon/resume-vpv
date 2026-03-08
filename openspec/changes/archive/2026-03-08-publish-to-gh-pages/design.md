## Context

The resume website needs to be deployed to GitHub Pages. The project uses webpack for building static assets. Deployment should use the `gh-pages` npm package for automated publishing to the gh-pages branch. The custom domain `me.vpv.io` needs to be configured.

## Goals / Non-Goals

**Goals:**
- Deploy built assets to GitHub Pages automatically
- Use custom CNAME domain `me.vpv.io`
- Only deploy necessary files (no source code, no node_modules)
- Prevent Jekyll processing in GitHub Pages

**Non-Goals:**
- Set up CI/CD pipeline (GitHub Actions)
- Deploy to other hosting platforms
- Modify the build process

## Decisions

### 1. Deployment approach

**Decision:** Use `gh-pages` npm package with webpack

**Rationale:**
- Well-maintained and widely used
- Works with existing webpack build
- Supports CNAME file deployment

### 2. Files to deploy

**Decision:** Deploy only `dist/` folder contents

**Rationale:**
- Contains only built HTML, CSS, JS, and assets
- No source code or development dependencies
- Keeps deployment small and fast

### 3. CNAME configuration

**Decision:** Create CNAME file in dist/ folder before deployment

**Rationale:**
- gh-pages package can include CNAME file
- GitHub Pages will automatically use the custom domain

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Custom domain not working | Verify DNS settings for me.vpv.io point to github.io |
| Deployment failures | Test locally with dry-run before actual deployment |

## Migration Plan

1. Install `gh-pages` as dev dependency
2. Add deploy script to package.json
3. Create CNAME file in dist/ during build
4. Create .nojekyll to prevent Jekyll processing
5. Run `npm run deploy` to publish
6. Configure GitHub repository settings to use gh-pages branch

## Open Questions

- Should we add a GitHub Actions workflow for automated deployment on push?
 ANS: No. push actions are not required at this point. We would like to make the deployment a manual step for now.