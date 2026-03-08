## Why

The resume website needs to be deployed to GitHub Pages for public access. Currently there's no automated deployment process, requiring manual upload of build artifacts. Setting up gh-pages deployment will provide free, reliable hosting with a custom CNAME.

## What Changes

- Add gh-pages deployment configuration to package.json
- Create CNAME file for custom domain `me.vpv.io`
- Configure deployment to only upload required files (HTML, CSS, JS, assets)
- Add .nojekyll file to prevent Jekyll processing

## Capabilities

### New Capabilities

- `gh-pages-deployment`: Automated deployment to GitHub Pages with CNAME support

### Modified Capabilities

- None - this is a new deployment capability

## Impact

- package.json: Added deploy script
- New files: CNAME, .nojekyll
- GitHub repository: gh-pages branch for deployment
