# PRD: DPIA Management Tool

## 1. Problem

GDPR Art. 35 requires controllers to conduct Data Protection Impact Assessments before high-risk processing begins. In practice, organizations that manage multiple processing activities face three compounding problems:

**No central visibility.** DPIAs live in scattered Word docs, PDFs, and email threads. When a regulator asks "show me your DPIAs," teams scramble to locate files and reconstruct status. The CNIL's enforcement record shows fines where organizations could not demonstrate they had conducted required DPIAs ([Délibération n° 2018-327](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037559521)).

**Inconsistent methodology.** GDPR Art. 35(7) mandates 4 minimum components; WP248 Annex 2 lists ~20 acceptance criteria; ICO adds a 7-step process; CNIL uses a 4-phase EBIOS-based method. Teams without structured guidance produce DPIAs that miss required sections — creating regulatory exposure.

**No lifecycle tracking.** Art. 35(11) requires controllers to review DPIAs "at least when there is a change of the risk." Without status tracking, reviews are missed, and stale DPIAs accumulate.

> Evidence source: [DPIA Legal Research Report](./DPIA_Legal_Research.md), covering GDPR Art. 35/36, WP248 rev.01, ICO/CNIL/DSK official guidance.

## 2. Goals

- Enable a single user to manage 10+ concurrent DPIAs and know the status of each within 5 seconds.
- Achieve 100% coverage of Art. 35(7) mandatory content in every completed DPIA — zero structural gaps.
- Reduce average time to create a regulation-compliant DPIA from ~8 hours (manual) to under 3 hours.

## 3. Target Users

Data Protection Officers (DPOs) and privacy team leads at mid-size organizations (50–5000 employees) operating under EU GDPR or UK GDPR, managing 5–50 processing activities that require or may require DPIAs.

## 4. Requirements

### P0 — Must ship

1. **Multi-DPIA dashboard:** User sees all DPIAs in a single list/table view with columns: title, processing activity, status, owner, last updated, risk level.
2. **Three-state lifecycle:** Each DPIA has exactly one status: `Not Started`, `In Progress`, or `Complete` — displayed with distinct visual indicators (color/icon).
3. **DPIA quick-view pop-up:** Clicking a row opens a modal/pop-up overlay showing a structured summary of that DPIA: title, status, processing description, current risk level, completion percentage by section, owner, and next action required — without navigating away from the dashboard.
4. **Guided DPIA editor:** A step-by-step form covering the 7 sections derived from Art. 35(7) + WP248 Annex 2:
   - Step 1: Screening / trigger analysis (WP248 9 criteria)
   - Step 2: Processing description (nature, scope, context, purposes)
   - Step 3: Legal basis & necessity/proportionality
   - Step 4: Risk identification & assessment (likelihood × severity matrix)
   - Step 5: Mitigation measures & residual risk
   - Step 6: DPO advice & stakeholder consultation
   - Step 7: Sign-off, outcome & review schedule
5. **Section-level completion tracking:** Each of the 7 steps shows filled/unfilled status; overall DPIA completion percentage is calculated and shown in the dashboard and pop-up.

### P1 — Ship in same cycle if possible

6. **Risk matrix visualization:** A 3×3 or 4×4 likelihood-vs-severity grid (aligned with CNIL EBIOS method) with color-coded cells; auto-populates from Step 4 inputs.
7. **PDF/Word export:** One-click export of a completed DPIA to a formatted document suitable for regulator submission or internal records.
8. **Multi-jurisdiction trigger lists:** Additional screening checklists for ICO (10 types), CNIL (14 types), and DSK (16 types) layered on top of the WP248 baseline, selectable per DPIA.

### P2 — Fast follow

9. **Review reminder:** Configurable reminder (e.g., 6/12 months) that flags a DPIA as "review due" and moves it back to `In Progress`.
10. **Audit trail:** Timestamped log of all changes to a DPIA (who changed what, when).
11. **Children's DPIA extension:** Optional module adding ICO Annex D fields (Age Appropriate Design Code 15 standards, age-assurance, parental controls).
12. **Template library:** Pre-built DPIA templates for common scenarios (HR profiling, video surveillance, AI/ML processing) based on BayLfD's modular examples.

## 5. Success Metrics

- **Metric:** 90% of completed DPIAs pass WP248 Annex 2 acceptance criteria (all 7 steps filled, risk assessment present, DPO advice recorded).
  - **Counter-metric:** Average completion time stays under 3 hours per DPIA.

- **Metric:** Users can identify the status of any DPIA within 5 seconds from the dashboard.
  - **Counter-metric:** Dashboard page load time stays under 2 seconds with 50 DPIAs loaded.

- **Metric:** 80% of users who start a DPIA reach `Complete` status (vs. abandoning mid-process).
  - **Counter-metric:** Completion is not achieved by skipping required sections — all 7 steps must be substantively filled.

## 6. Out of Scope

- **Automated legal advice.** The tool structures and guides; it does not interpret law or recommend legal conclusions. Users are advised to consult qualified counsel.
- **Integration with Records of Processing Activities (ROPA).** This is a logical extension but not in v1.
- **Multi-tenant / SaaS hosting.** v1 is a single-organization tool. Multi-tenancy is a future consideration.
- **Automated data discovery / scanning.** The tool does not crawl systems to find processing activities.
- **Workflow / approval routing.** DPO sign-off is recorded in the form, but there is no built-in approval chain or email notification system in v1.
- **Account system / authentication.** No login, registration, or role-based access in v1. The tool runs without user accounts.
- **Real-time collaboration.** Single-user editing only. No concurrent multi-user editing.

## 7. Technology Stack

| Layer | Choice |
|-------|--------|
| Language | Java 17 |
| Framework | Spring Boot 3.2 |
| Template | Thymeleaf |
| Database | H2 (file-based, persists between restarts) |
| ORM | Spring Data JPA |
| Frontend | HTML + vanilla JS + CSS (no framework) |
| Build | Maven |

## 8. Resolved Decisions

| Decision | Resolution |
|----------|------------|
| Web app vs Desktop | **Web app.** Easier to access and deploy. |
| Trigger list jurisdiction | **WP248 9 criteria as universal baseline in P0.** No jurisdiction selection needed at this stage. Jurisdiction-specific lists (ICO/CNIL/DSK) remain in P1. |
| Real-time collaboration | **Not supported.** Single-user editing only. |
| Account / login / roles | **Not in v1.** No account registration, login, or role-based access control. The tool runs without authentication. |

---

> **Evidence base:** All requirements trace to [DPIA Legal Research Report](./DPIA_Legal_Research.md) — GDPR Art. 35/36, WP248 rev.01 (9 criteria + Annex 2), ICO 7-step guidance & templates, CNIL PIA methodology, DSK Muss-Liste, BayLfD modular tools.
