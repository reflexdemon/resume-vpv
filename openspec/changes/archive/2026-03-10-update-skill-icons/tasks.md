## 1. Define SVG Icon Templates

- [x] 1.1 Create SVG icon template strings for Opencode, OpenSpec, Claud Code, Copilot, and AmazonQ in renderSkills()
- [x] 1.2 Add CSS class for SVG icons to match existing skill icon styling

## 2. Implement AI Tool Detection

- [x] 2.1 Add AI tool detection logic in renderSkills() after existing Devicon checks
- [x] 2.2 Use exact match for "Opencode", "OpenSpec", "Claud Code", "Copilot", "AmazonQ"
- [x] 2.3 Ensure detection order: Devicon first → AI tools → generic fallback

## 3. Integrate SVG Rendering

- [x] 3.1 Render SVG icons inline with skill name using consistent sizing
- [x] 3.2 Apply same CSS class as other skill icons for visual consistency
- [x] 3.3 Test that fallback works for non-AI skills

## 4. Verify Implementation

- [x] 4.1 Verify all 5 AI tools display their respective SVG icons
- [x] 4.2 Verify existing skills still work with their original icons
- [x] 4.3 Test visual consistency with other skill icons
