# Cline Token Efficiency Rules

## Core Principle

Always use the minimum amount of context required to complete the user's task.

Do NOT inspect the entire project for a small or localized task.

Before reading any file, determine whether that file is actually necessary.

Your goal is to complete the task accurately while minimizing:

- Files read
- Lines read
- Searches performed
- Tool calls
- Context usage
- Tokens consumed

## 1. Start Small

When a task is given:

1. Identify exactly what needs to be changed.
2. Identify the most likely file or component.
3. Inspect that file first.
4. Only inspect additional files if the current information is insufficient.
5. Expand the scope gradually and only when necessary.

Never start by scanning the entire project.

Use this progression:

`1 file → directly related files → specific project area → entire project only if absolutely necessary`

## 2. Do Not Scan the Entire Project

Do NOT automatically inspect:

- The entire `src/` directory
- All components
- All pages
- All styles
- All configuration files
- `node_modules/`
- `dist/`
- `.astro/`
- `.git/`
- Build or cache directories

Do not explore the project simply to "understand everything".

Only inspect code that is relevant to the current task.

## 3. Small Task = Small Context

If the user asks to:

- Change a button
- Change text
- Change a color
- Fix spacing
- Modify one component
- Fix a localized bug
- Add a small UI element

Then inspect only the files directly related to that task.

For example:

If the user asks to change a button in `BodyContactUs.astro`, start with `BodyContactUs.astro`.

Do NOT automatically inspect:

- Other components
- Other pages
- The entire design system
- All CSS files
- Configuration files
- Unrelated utilities

Only inspect them if they are actually required.

## 4. Search Narrowly

Always prefer targeted searches.

Good:

`Find BodyContactUs`

Good:

`Find HeroButton`

Good:

`Find the usage of submitContactForm`

Bad:

`Search the entire project for everything related to buttons`

Bad:

`Analyze the entire frontend`

Do not perform broad searches when a targeted search can answer the question.

## 5. Read Only What Is Needed

When a relevant file is found:

- Read the smallest relevant section first.
- Do not automatically read the entire file if the relevant code is localized.
- Do not open unrelated files.
- Do not read files "just in case".

If the required information is already available, stop searching.

## 6. Avoid Re-reading Files

If a file has already been inspected during the current task, do not read it again unless there is a specific reason.

Reuse information already obtained.

Do not repeat the same search or tool call unnecessarily.

## 7. Do Not Refactor Unrelated Code

When modifying code:

- Change only what is necessary.
- Preserve the existing architecture.
- Preserve existing naming and structure.
- Do not refactor unrelated code.
- Do not rewrite entire files unnecessarily.
- Do not fix unrelated problems unless they prevent the requested task from working.

Do not "clean up" the project unless the user explicitly asks for it.

## 8. Expand Context Only When Necessary

You may inspect additional files when:

- The current file imports required functionality from another file.
- The required data is defined elsewhere.
- The required type is defined elsewhere.
- The bug clearly originates somewhere else.
- The requested change affects multiple files.
- The user explicitly requests a larger refactor.
- The user explicitly requests a project-wide review.

Even in these cases, expand the context gradually.

Do not jump directly from one file to the entire project.

## 9. Verification

After making a change:

1. Verify the modified code.
2. Run the smallest relevant check or command.
3. Only investigate additional files if the verification reveals a problem.

Do not perform a complete project analysis after every small change.

For example:

If one Astro component was modified, do not inspect the entire Astro project again unless the build or runtime reveals a related issue.

## 10. Avoid Unnecessary Tool Calls

Every search, file read, terminal command, and other tool call should have a clear purpose.

Before using a tool, ask:

"Do I need this information to complete the current task?"

If the answer is no, do not use the tool.

Do not use tools simply because they are available.

## 11. Context Budget

Treat the context window as a limited resource.

Prefer:

- Specific searches over broad searches
- Small file sections over entire files
- Direct dependencies over unrelated files
- Existing information over repeated reads
- Minimal changes over large refactors

Do not consume context on information that does not affect the current task.

## 12. Full Project Analysis

Only analyze the entire project when the user explicitly requests it or when the task genuinely requires project-wide knowledge.

Examples of tasks that may justify broader inspection:

- Full project audit
- Major architectural refactor
- Migration between frameworks
- Project-wide bug affecting multiple systems
- Dependency migration
- Global design-system changes
- Full security review

Even then, inspect the project systematically rather than blindly reading every file.

## 13. User Intent Has Priority

The user's current task is the priority.

Do not expand a small task into a larger task.

If the user asks:

"Make this button glow on hover."

Do not:

- Redesign the page.
- Refactor the component.
- Rewrite the CSS architecture.
- Inspect unrelated pages.
- Audit the project.

Just implement the requested hover effect.

## 14. Stop When the Task Is Complete

Once the requested task is correctly implemented and verified, stop.

Do not continue exploring the project.

Do not search for additional improvements unless the user asks for them.

## 15. Hard Rule

DO NOT SCAN THE ENTIRE PROJECT FOR A SMALL TASK.

One button → inspect the button.

One component → inspect the component.

One bug → investigate the bug.

One text change → change the text.

Only expand the scope when the available information is objectively insufficient.

## Final Priority Order

1. Correctly complete the user's task.
2. Use the minimum necessary context.
3. Read the minimum number of files.
4. Use the minimum number of tool calls.
5. Make the minimum necessary changes.
6. Preserve the existing architecture.
7. Stop immediately when the task is complete.
