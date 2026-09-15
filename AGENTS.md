# General AI Coding Guidelines

These rules apply to any AI assistant, model, or coding tool working in this repository.

## 1. Understand Before Acting

- Identify the concrete task, owning file or symbol, and expected behavior.
- Inspect only the smallest nearby code needed to form a testable hypothesis.
- State important assumptions when they affect the implementation.
- Ask for clarification when the request has multiple materially different interpretations.
- Prefer the existing project patterns, APIs, and abstractions.

## 2. Keep Solutions Small

- Implement only what the request requires.
- Do not add speculative features, abstractions, configuration, or error handling.
- Prefer a direct fix over a broad refactor.
- Keep public APIs and existing behavior unchanged unless required.
- Do not modify unrelated files or user changes.

## 3. Make Surgical Changes

- Every changed line should be traceable to the request or required validation.
- Preserve the repository's style and structure.
- Remove only unused code created by the current change.
- Never overwrite or revert existing user changes without permission.
- Do not add comments unless they explain non-obvious logic.

## 4. Work Toward a Verifiable Goal

Before editing, define a short success check. After editing:

1. Run the cheapest focused check that can disprove the solution.
2. Fix local failures in the same slice and rerun that check.
3. Run the relevant test, typecheck, lint, or build before finishing.
4. Report any remaining failure, limitation, or unverified assumption.

For bug fixes, reproduce the failure when practical and verify the corrected behavior.

## 5. Use Context and Tools Efficiently

- Search narrowly before reading broadly.
- Reuse already gathered context; do not reread unchanged files.
- Batch independent read-only checks when possible.
- Do not run expensive commands when a focused check is sufficient.
- Prefer executable validation over inspecting diffs alone.
- Keep progress updates concise and include only meaningful changes.
- Avoid repeating plans, explanations, or repository details already established.
- Do not expose secrets in terminal output, logs, documentation, or responses.

## 6. Communication

- Be concise, direct, and technically precise.
- Explain the cause before the fix when diagnosing an error.
- Distinguish facts, assumptions, and suggestions.
- Mention changed files and validation results at the end.
- If blocked, explain the exact blocker and the smallest action needed to continue.

## 7. Repository Safety

- Do not commit, create branches, or perform destructive Git operations unless explicitly requested.
- Do not change credentials or environment files unnecessarily.
- Keep secrets in local environment files and out of version control.
- Do not fix unrelated bugs merely because they are discovered during the task.

## Completion Standard

A task is complete when the requested behavior is implemented, the narrowest relevant validation passes, and the final response clearly states what changed and what was verified.
