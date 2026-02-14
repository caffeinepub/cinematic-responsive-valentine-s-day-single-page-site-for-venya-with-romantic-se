# Specification

## Summary
**Goal:** Update the configured relationship start date so the “Days Since Our Story Began” live counter currently shows 64 days.

**Planned changes:**
- Update `RELATIONSHIP_START_DATE` in `frontend/src/valentine/config.ts` to the correct date so the computed counter renders 64 today.
- Keep the `DaysSinceCounter` behavior unchanged (still derived from `RELATIONSHIP_START_DATE` and current time, not hard-coded).
- Ensure the section text remains exactly “Days Since Our Story Began” and “days of love”, including correct singular/plural handling.

**User-visible outcome:** The “Days Since Our Story Began” counter displays 64 (computed live from the configured start date) instead of ~300.
