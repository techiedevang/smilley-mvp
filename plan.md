1. **Update `AIWorkClient.tsx` to include a navigation toggle**
   - We need to add a toggle at the top of the `AIWorkClient` page that lets users switch between "AI Project" and "AI Studio".
   - The user asked to: "Keep both AI Project and AI Studio sections visible on the same main AI page, one after the other."
   - "When the user clicks AI Project in the top toggle, smoothly scroll to the AI Project section."
   - "When the user clicks AI Studio in the top toggle, smoothly scroll to the AI Studio section."
   - Update active toggle state based on visible section using Intersection Observer.

2. **Add "See All" links**
   - For AI Project section: Add "See All Projects →" link aligned right of heading. This navigates to `/ai-project`.
   - For AI Studio section: Add "See All AI Studio →" link aligned right of heading. This navigates to `/ai-studio`.
   - Make sure they don't trigger scroll action, but actually navigate to the dedicated listing pages.

3. **Match design references**
   - Although I cannot see the images directly, I will ensure the typography and styling matches the existing ones (using `var(--accent)`, `font-serif`, etc.) and the toggle is cleanly designed (e.g. pill shape or simple tabs like the existing filters in `AIWorkClient.tsx`).

4. **Verify Frontend Changes**
   - Run a local server and test the UI (scrolling, clicking tabs, checking "See All" links).

5. **Pre-commit Checks**
   - Call `pre_commit_instructions`.

6. **Submit Changes**
   - Commit and push to main.
