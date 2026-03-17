# PRD Critique: DPIA Template Tool

---

## Product Gaps

1. **No DPIA lifecycle or versioning model.** Article 35(11) requires periodic review. The PRD apparently covers creation but not re-assessment triggers, version diffing, or sunset/archival. Without this, the tool produces static documents instead of living assessments—a material compliance gap.

2. **Cross-tool data dependency is undefined.** UI parity with the LIA tool and Data Compliance Tool implies they coexist, but the PRD doesn't specify whether a completed LIA auto-populates DPIA screening fields, whether processing-record data flows in, or whether there are hard prerequisites. Engineers will either build three silos or guess at integration points.

3. **Multi-jurisdiction conflict resolution is missing.** Combining ICO (UK-flavored), Niedersachsen screening, BayLfD modular risk, and BfDI extensions means you're merging frameworks that can contradict each other (e.g., ICO's necessity/proportionality framing vs. BayLfD's risk-matrix weighting). The PRD needs an explicit hierarchy or toggle model—otherwise product and legal will relitigate this in every sprint review.

4. **No consultation or approval workflow.** Art. 35(2) mandates DPO involvement; Art. 36 mandates supervisory-authority prior consultation for high residual risk. There's no mention of role-based states (draft → DPO review → approved → submitted to SA), sign-off capture, or comment threads. This is a hard regulatory requirement, not a nice-to-have.

5. **Extension module scoping is dangerously open-ended.** "BfDI-style special-scenario extensibility" without a defined extension contract (what data an extension receives, what it must return, how it appears in the output report) will either block v1 shipping or produce extensions that break output coherence. Define the interface now, even if extensions ship later.

---

## UI Gaps

1. **Ranges instead of canonical values guarantee inconsistency.** "42–44px buttons," "16–18px field-card padding," "1.58–1.7 line-height"—these read like measurements taken from screenshots of two different tools, not a spec. Engineers will pick different values per component. **Lock each token to one value** and document the two source-tool deviations as errata, not as the spec itself.

2. **No responsive behavior below 1480px.** `min(1480px, calc(100% - 40px))` defines the ceiling but says nothing about breakpoints, column-collapse rules, or minimum supported width. If any user will open this on a 1366px laptop (extremely common in enterprise/government), this is a day-one bug factory.

3. **Panel radius list (30/24/18px) has no assignment rule.** Which element gets 30 vs. 24 vs. 18? Without a mapping (e.g., page-level panel → 30, section card → 24, inline card → 18), every component becomes a design-review bottleneck.

4. **No typography scale.** You specify line-heights and label-to-title gaps but no font sizes, weights, or family. Title hierarchy is called out as a parity requirement but not actually defined. This is the single most visible inconsistency vector.

5. **Interaction and semantic states are absent.** No hover, focus, active, disabled, error, or loading-state specs for buttons, chips, fields, or cards. No color tokens at all. For a form-heavy DPIA tool, error and disabled states will be hit constantly—especially in conditional screening logic.

6. **Accessibility is not mentioned.** Public-sector and privacy tooling in the EU falls under EN 301 549 / WCAG 2.1 AA. This isn't optional. Color contrast ratios, focus-ring behavior, keyboard navigation order through modules, and screen-reader landmark structure all need to be specified before high-fidelity design, not after.

---

## Recommended Additions Before High-Fidelity Design

- **Conduct a pixel-level audit of both existing tools** to resolve ranges into exact values. Produce a single shared design-token JSON/YAML file (spacing, radii, type scale, color) that is the source of truth for all three tools. The PRD's current ranges suggest the values were eyeballed; measure them.

- **Define a DPIA state machine**: `Not Started → Screening → Screening Complete (DPIA not required | DPIA required) → Draft → DPO Review → Approved → [Prior Consultation] → Published → Review Due → Reassessment`. Each state needs permitted actions, role gates, and data-lock rules.

- **Produce a cross-tool entity-relationship diagram** showing which objects (processing activities, risk scores, legal bases, data categories) are shared across the LIA tool, Data Compliance Tool, and DPIA tool. Without this, "parity" is only skin-deep.

- **Write the extension interface contract** before building the core. Even a minimal definition (input schema, output schema, UI slot location, report-section template) prevents costly refactoring.

- **Add an explicit accessibility-requirements section** citing WCAG 2.1 AA and EN 301 549, with acceptance criteria for keyboard nav, focus management in multi-module flows, and ARIA landmark structure for the modular layout.

- **Specify empty, partial, and error states for every module.** A DPIA tool will routinely have incomplete sections (user doesn't know the answer yet, waiting on DPO input, not applicable based on screening). The PRD should define whether incomplete modules block output generation or produce a flagged report—this is a product decision, not a design decision.

- **Add an output/export spec.** The Governance & Output module exists but: what format? PDF? Structured data (JSON/XML) for supervisory-authority submission? EDPB Toolbox-compatible schema? If the eventual target is EDPB Toolbox compatibility, the data model should be designed backward from that schema now.

---

**Bottom line:** The framework selection and modular architecture are sound. The two biggest risks are (a) the PRD treats this as a document-generation tool rather than a lifecycle-management tool, and (b) the UI parity spec is descriptive (what the other tools look like) rather than prescriptive (what this tool must use). Fix those two framing issues and most of the specific gaps above resolve naturally.
