## Why

The resume displays AI/developer assistant tools (Opencode, OpenSpec, Claud Code, Copilot, AmazonQ) in the skills section. Currently, these tools fall back to a generic checkmark icon because no specific icon mapping exists. Adding custom SVG icons will improve visual recognition and professionalism.

## What Changes

- Add custom SVG icons for AI/developer tools: Opencode, OpenSpec, Claud Code, Copilot, AmazonQ
- Update `renderSkills()` function in `src/index.js` to detect these skills and render SVG icons
- Create reusable SVG icon definitions that integrate with the existing skill rendering logic

## Capabilities

### New Capabilities
- **ai-tool-icons**: Custom SVG icon support for AI/developer assistant tools in the skills section

### Modified Capabilities
None

## Impact

- File: `src/index.js` - Modified `renderSkills()` function
- No new dependencies required
- No API or system changes
