const STORAGE_KEY = "dpia-toolbox-v1";

const STATUS_FLOW = [
  "Not Started",
  "Screening In Progress",
  "Screening Complete - DPIA Required",
  "Draft",
  "DPO Review",
  "Approved",
  "Prior Consultation Required",
  "Published / Operational",
  "Review Due",
  "Reassessment In Progress",
  "Archived",
];

const profileFields = [
  {
    path: "title",
    label: "Case title",
    type: "text",
    helper: "Name the assessment in a way that makes later review and reuse practical.",
  },
  {
    path: "owner",
    label: "Case owner",
    type: "text",
    helper: "Operational owner responsible for driving the DPIA forward.",
  },
  {
    path: "product",
    label: "Product / service",
    type: "text",
    helper: "Shared anchor object that can later map to the data compliance workspace.",
  },
  {
    path: "jurisdiction",
    label: "Jurisdiction pack",
    type: "select",
    options: ["EU Core", "ICO-aligned", "BayLfD-inspired", "Public sector extension"],
    helper: "Controls wording and special module behavior.",
  },
  {
    path: "status",
    label: "Lifecycle status",
    type: "select",
    options: STATUS_FLOW,
    helper: "Formal state, not just a visual badge.",
  },
  {
    path: "reviewDate",
    label: "Next review date",
    type: "date",
    helper: "Supports Art. 35(11)-style periodic review.",
  },
  {
    path: "summary",
    label: "Processing summary",
    type: "textarea",
    full: true,
    helper: "Short baseline description of what is being assessed, why, and in what deployment stage.",
  },
];

const screeningQuestions = [
  {
    path: "screening.mustList",
    label: "Must-list trigger",
    helper: "Does the case clearly fall under a supervisory-authority must-list or internal equivalent?",
    options: ["Unknown", "No", "Yes"],
  },
  {
    path: "screening.largeScaleSensitive",
    label: "Large-scale sensitive processing",
    helper: "Special category or criminal data at scale materially changes the threshold.",
    options: ["Unknown", "No", "Yes"],
  },
  {
    path: "screening.systematicMonitoring",
    label: "Systematic monitoring",
    helper: "Persistent or structured monitoring of individuals or public spaces.",
    options: ["Unknown", "No", "Yes"],
  },
  {
    path: "screening.childrenVulnerable",
    label: "Children or vulnerable people",
    helper: "Screen early for user groups with stronger fairness expectations.",
    options: ["Unknown", "No", "Yes"],
  },
  {
    path: "screening.newTechnology",
    label: "New technology / novel use",
    helper: "Novelty does not force DPIA alone, but it raises the burden of explanation and testing.",
    options: ["Unknown", "No", "Yes"],
  },
  {
    path: "screening.crossSystemMatching",
    label: "Matching or combining datasets",
    helper: "Cross-system joins and enrichment often raise both legal and architectural risk.",
    options: ["Unknown", "No", "Yes"],
  },
];

const coreSections = [
  {
    id: "processing",
    label: "Core DPIA",
    title: "Processing description",
    text: "Capture purpose, scale, data sources, sharing, retention, and geographic scope in a way that can feed exports and later reviews.",
    fields: [
      {
        path: "processing.purpose",
        label: "Purpose",
        type: "textarea",
        helper: "State what the processing is trying to achieve and who benefits.",
      },
      {
        path: "processing.nature",
        label: "Nature of processing",
        type: "textarea",
        helper: "How data is collected, used, stored, shared, and deleted.",
      },
      {
        path: "processing.scope",
        label: "Scope",
        type: "textarea",
        helper: "Volume, user population, retention, and geography.",
      },
      {
        path: "processing.context",
        label: "Context",
        type: "textarea",
        helper: "Reasonable expectations, relationships, and public sensitivity.",
      },
    ],
  },
  {
    id: "consultation",
    label: "Core DPIA",
    title: "Consultation",
    text: "Record who was consulted, how that feedback was collected, and why any consultation was skipped.",
    fields: [
      {
        path: "consultation.dpo",
        label: "DPO involvement",
        type: "textarea",
        helper: "Summarize timing, concerns, and follow-up from the DPO.",
      },
      {
        path: "consultation.users",
        label: "Data subject or user views",
        type: "textarea",
        helper: "Describe direct consultation, research, or explain why it was not appropriate.",
      },
      {
        path: "consultation.security",
        label: "Security / engineering input",
        type: "textarea",
        helper: "Capture architectural or control advice.",
      },
      {
        path: "consultation.processors",
        label: "Processor / vendor input",
        type: "textarea",
        helper: "Evidence of external support or constraints.",
      },
    ],
  },
  {
    id: "proportionality",
    label: "Core DPIA",
    title: "Necessity & proportionality",
    text: "A compact assessment block aligned with ICO logic and reusable for extensions.",
    fields: [
      {
        path: "proportionality.lawfulBasis",
        label: "Lawful basis",
        type: "select",
        options: [
          "Legitimate interests",
          "Contract",
          "Legal obligation",
          "Public task",
          "Consent",
          "Vital interests",
        ],
        helper: "The core lawful basis should remain explicit even if screening or extensions add nuance.",
      },
      {
        path: "proportionality.alternatives",
        label: "Less intrusive alternatives",
        type: "textarea",
        helper: "What was considered, and why was it rejected?",
      },
      {
        path: "proportionality.rightsSupport",
        label: "Support for rights",
        type: "textarea",
        helper: "Explain transparency, access, deletion, objection, and escalation routes.",
      },
      {
        path: "proportionality.internationalTransfers",
        label: "International transfers",
        type: "textarea",
        helper: "List safeguards or explain why not applicable.",
      },
    ],
  },
];

const extensionFields = [
  {
    path: "extensions.children.enabled",
    label: "Children-accessible online service",
    type: "toggle",
    helper: "Turns on the age-appropriate design extension.",
  },
  {
    path: "extensions.children.ageRange",
    label: "Likely user age range",
    type: "text",
    helper: "Expected age range where children may realistically access the service.",
  },
  {
    path: "extensions.children.ageAssurance",
    label: "Age assurance plan",
    type: "textarea",
    helper: "Describe any age estimation or age verification approach.",
  },
  {
    path: "extensions.children.parentalControls",
    label: "Parental controls",
    type: "textarea",
    helper: "Describe what exists, what does not, and why.",
  },
  {
    path: "extensions.children.codeCompliance",
    label: "Age code alignment",
    type: "textarea",
    helper: "Track how the service addresses best interests, transparency, profiling, geolocation, and nudge techniques.",
  },
];

const assetFields = [
  { key: "name", label: "Asset name", type: "text" },
  { key: "type", label: "Type", type: "select", options: ["Application", "Internal tool", "Vendor", "Infrastructure", "Dataset"] },
  { key: "owner", label: "Owner", type: "text" },
  { key: "reuse", label: "Reuse posture", type: "select", options: ["Reusable asset", "Case-specific review", "Shared dependency"] },
  { key: "note", label: "Assessment note", type: "textarea", full: true },
];

const riskFields = [
  { key: "name", label: "Risk title", type: "text" },
  { key: "track", label: "Track", type: "select", options: ["Rights & principles", "Classical risk", "Security", "Vendor", "Children"] },
  { key: "likelihood", label: "Likelihood", type: "select", options: ["Low", "Medium", "High"] },
  { key: "severity", label: "Severity", type: "select", options: ["Low", "Medium", "High"] },
  { key: "residual", label: "Residual", type: "select", options: ["Low", "Medium", "High"] },
  { key: "owner", label: "Owner", type: "text" },
  { key: "note", label: "Rationale", type: "textarea", full: true },
];

const controlFields = [
  { key: "name", label: "Control title", type: "text" },
  { key: "status", label: "Status", type: "select", options: ["Planned", "In progress", "Implemented", "Validated"] },
  { key: "owner", label: "Owner", type: "text" },
  { key: "due", label: "Due date", type: "date" },
  { key: "linkedRisk", label: "Linked risk", type: "text" },
  { key: "evidence", label: "Evidence / work item", type: "textarea", full: true },
];

const approvalFields = [
  { key: "role", label: "Role", type: "select", options: ["DPO review", "Security sign-off", "Product approval", "Legal review", "Prior consultation"] },
  { key: "decision", label: "Decision", type: "select", options: ["Pending", "Approved", "Conditionally approved", "Escalated", "Rejected"] },
  { key: "owner", label: "Reviewer", type: "text" },
  { key: "date", label: "Decision date", type: "date" },
  { key: "note", label: "Decision note", type: "textarea", full: true },
];

const COLLECTION_SCHEMAS = {
  assets: {
    heading: "Supporting asset",
    tag: "Asset",
    emptyTitle: "No supporting assets yet",
    emptyText: "Add reusable systems, tools, or environments so the DPIA can separate business processing from technical infrastructure.",
    fields: assetFields,
  },
  risks: {
    heading: "Risk record",
    tag: "Risk",
    emptyTitle: "No risks yet",
    emptyText: "Add at least one risk so likelihood, severity, ownership, and residual exposure become explicit.",
    fields: riskFields,
  },
  controls: {
    heading: "Control record",
    tag: "Control",
    emptyTitle: "No controls yet",
    emptyText: "Add mitigations, owners, and evidence so the DPIA can move beyond problem statements.",
    fields: controlFields,
  },
  approvals: {
    heading: "Approval entry",
    tag: "Approval",
    emptyTitle: "No approval entries yet",
    emptyText: "Capture DPO review, product approval, or prior consultation decisions as structured records.",
    fields: approvalFields,
  },
};

function createTimelineEntry(message, category = "update") {
  return {
    id: `event-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    message,
    category,
    timestamp: new Date().toISOString(),
  };
}

function createBlankCase(index = 1) {
  return {
    id: `dpia-${Date.now()}-${index}`,
    title: `Untitled DPIA ${index}`,
    owner: "",
    product: "",
    jurisdiction: "EU Core",
    status: "Not Started",
    reviewDate: "",
    summary: "",
    version: 1,
    screening: {
      mustList: "Unknown",
      largeScaleSensitive: "Unknown",
      systematicMonitoring: "Unknown",
      childrenVulnerable: "Unknown",
      newTechnology: "Unknown",
      crossSystemMatching: "Unknown",
    },
    processing: {
      purpose: "",
      nature: "",
      scope: "",
      context: "",
    },
    consultation: {
      dpo: "",
      users: "",
      security: "",
      processors: "",
    },
    proportionality: {
      lawfulBasis: "Legitimate interests",
      alternatives: "",
      rightsSupport: "",
      internationalTransfers: "",
    },
    assets: [],
    risks: [],
    controls: [],
    approvals: [],
    timeline: [createTimelineEntry("Case created.", "create")],
    extensions: {
      children: {
        enabled: false,
        ageRange: "",
        ageAssurance: "",
        parentalControls: "",
        codeCompliance: "",
      },
    },
    updatedAt: "",
  };
}

function createSampleCase() {
  return {
    id: "sample-dpia",
    title: "Young creators onboarding workspace",
    owner: "Benjamin",
    product: "Youth co-creation studio",
    jurisdiction: "EU Core",
    status: "DPO Review",
    reviewDate: "2026-06-30",
    summary:
      "A collaborative online workspace that lets teenagers publish portfolio items, join moderated projects, and receive mentor feedback across the EU.",
    version: 3,
    screening: {
      mustList: "No",
      largeScaleSensitive: "No",
      systematicMonitoring: "No",
      childrenVulnerable: "Yes",
      newTechnology: "Yes",
      crossSystemMatching: "Yes",
    },
    processing: {
      purpose:
        "Provide a moderated digital studio where younger users can publish creative work, receive structured feedback, and collaborate safely.",
      nature:
        "Collect profile data, portfolio content, moderation signals, and support records. Store on a central platform with managed retention and limited vendor sharing.",
      scope:
        "EU-wide launch, around 18,000 users in year one, with profile records, content metadata, and moderation logs retained by policy windows.",
      context:
        "Users may include children aged 13 to 17. Expectations are high around safety, explainability, and transparent moderation controls.",
    },
    consultation: {
      dpo:
        "DPO reviewed the draft architecture and requested stronger documentation on parental controls, complaint escalation, and the timing of age checks.",
      users:
        "Early research used moderated interviews with parents, teenagers, and youth coaches. Additional usability feedback is still planned before launch.",
      security:
        "Security team recommended stronger session telemetry review, stricter admin access control, and centralized logging for moderation events.",
      processors:
        "Cloud host and email processor confirmed standard security commitments. Media processing vendor is still under contract review.",
    },
    proportionality: {
      lawfulBasis: "Legitimate interests",
      alternatives:
        "A fully open publishing flow was rejected. The selected model keeps publication, moderation, and reporting within the same managed workflow.",
      rightsSupport:
        "Users can access, edit, report, or request deletion through in-product tools and a staffed support path. Moderation outcomes must be explainable.",
      internationalTransfers:
        "Primary hosting is EU-based. Backup vendor review is pending and would require transfer safeguards before activation.",
    },
    assets: [
      {
        name: "Creator core platform",
        type: "Application",
        owner: "Product engineering",
        reuse: "Reusable asset",
        note: "Primary platform where profiles, projects, and moderation events live.",
      },
      {
        name: "Moderation admin console",
        type: "Internal tool",
        owner: "Trust & safety",
        reuse: "Case-specific review",
        note: "Back-office workflow for reviewer triage, escalation, and evidence capture.",
      },
    ],
    risks: [
      {
        name: "Underage user expectations are not reflected in moderation and profiling choices",
        track: "Rights & principles",
        likelihood: "Medium",
        severity: "High",
        residual: "Medium",
        owner: "DPO + Product",
        note: "Children-facing defaults and explainability remain the principal uncertainty.",
      },
      {
        name: "Support vendors gain broader access than necessary through shared investigation data",
        track: "Security",
        likelihood: "Medium",
        severity: "Medium",
        residual: "Low",
        owner: "Security",
        note: "Vendor-side evidence access must remain role-scoped and time-limited.",
      },
    ],
    controls: [
      {
        name: "Three-step transparency model",
        status: "In progress",
        owner: "Legal",
        due: "2026-04-15",
        linkedRisk: "Underage user expectations are not reflected in moderation and profiling choices",
        evidence: "Draft youth-facing notices and parent FAQ.",
      },
      {
        name: "Role-scoped moderation evidence access",
        status: "Planned",
        owner: "Engineering",
        due: "2026-05-01",
        linkedRisk: "Support vendors gain broader access than necessary through shared investigation data",
        evidence: "Architecture work item DP-84.",
      },
    ],
    approvals: [
      {
        role: "DPO review",
        decision: "Conditionally approved",
        owner: "Internal DPO",
        date: "2026-03-10",
        note: "Proceed if parental-control language and moderation explanation are tightened before launch.",
      },
      {
        role: "Security sign-off",
        decision: "Pending",
        owner: "Security architecture",
        date: "2026-03-18",
        note: "Awaiting updated access-control design and logging evidence.",
      },
    ],
    timeline: [
      createTimelineEntry("Sample case loaded for product review.", "create"),
      createTimelineEntry("Children extension enabled.", "update"),
      createTimelineEntry("Status moved into DPO Review.", "workflow"),
    ],
    extensions: {
      children: {
        enabled: true,
        ageRange: "13-17",
        ageAssurance:
          "Soft age estimation during onboarding plus parent / guardian escalation paths for selected support events. Stronger checks remain optional pending launch review.",
        parentalControls:
          "No universal parental dashboard. Parent / guardian support route exists for account concerns and moderated intervention.",
        codeCompliance:
          "Best interests, transparency, default settings, profiling, and geolocation are tracked as explicit review headings in launch governance.",
      },
    },
    updatedAt: new Date().toISOString(),
  };
}

function normalizeCase(rawCase, index = 1) {
  const base = createBlankCase(index);
  const merged = {
    ...base,
    ...rawCase,
    screening: { ...base.screening, ...(rawCase.screening || {}) },
    processing: { ...base.processing, ...(rawCase.processing || {}) },
    consultation: { ...base.consultation, ...(rawCase.consultation || {}) },
    proportionality: { ...base.proportionality, ...(rawCase.proportionality || {}) },
    extensions: {
      children: {
        ...base.extensions.children,
        ...((rawCase.extensions && rawCase.extensions.children) || {}),
      },
    },
    assets: Array.isArray(rawCase.assets) ? rawCase.assets : [],
    risks: Array.isArray(rawCase.risks) ? rawCase.risks : [],
    controls: Array.isArray(rawCase.controls) ? rawCase.controls : [],
    approvals: Array.isArray(rawCase.approvals) ? rawCase.approvals : [],
    timeline: Array.isArray(rawCase.timeline) ? rawCase.timeline : base.timeline,
  };
  return merged;
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        cases: (parsed.cases || []).map((item, index) => normalizeCase(item, index + 1)),
        currentCaseId: parsed.currentCaseId,
        saveStatus: parsed.saveStatus || "Draft restored.",
      };
    } catch (error) {
      console.warn("Failed to parse saved DPIA state", error);
    }
  }

  const sample = createSampleCase();
  return {
    cases: [sample],
    currentCaseId: sample.id,
    saveStatus: "Sample loaded.",
  };
}

let state = loadState();

function getCurrentCase() {
  return state.cases.find((item) => item.id === state.currentCaseId) || state.cases[0];
}

function saveState(message = "Draft saved locally.") {
  const currentCase = getCurrentCase();
  if (currentCase) {
    currentCase.updatedAt = new Date().toISOString();
  }
  state.saveStatus = message;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function pushTimeline(currentCase, message, category = "update") {
  currentCase.timeline.unshift(createTimelineEntry(message, category));
  currentCase.timeline = currentCase.timeline.slice(0, 24);
}

function checkpointCase() {
  const currentCase = getCurrentCase();
  currentCase.version += 1;
  pushTimeline(currentCase, `Version ${currentCase.version} checkpoint saved.`, "checkpoint");
  saveState(`Version ${currentCase.version} saved.`);
}

function setByPath(target, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  let ref = target;
  keys.forEach((key) => {
    ref = ref[key];
  });
  ref[last] = value;
}

function getByPath(target, path) {
  return path.split(".").reduce((acc, key) => acc[key], target);
}

function screeningResult(screening) {
  const yesCount = Object.values(screening).filter((value) => value === "Yes").length;
  if (screening.mustList === "Yes") {
    return {
      title: "DPIA required",
      body: "A must-list or equivalent trigger is already present. This case should remain in full DPIA mode and cannot close as a simple record.",
      pill: "Required",
    };
  }
  if (yesCount >= 2) {
    return {
      title: "DPIA strongly recommended",
      body: "Multiple high-risk indicators are present. Proceed with the full assessment and tighten review controls before launch.",
      pill: "Strong signal",
    };
  }
  if (yesCount === 1) {
    return {
      title: "Further judgement required",
      body: "One meaningful trigger exists. The case should remain open until legal and DPO review determine whether a full DPIA remains necessary.",
      pill: "Needs review",
    };
  }
  return {
    title: "No strong trigger yet",
    body: "No screening answer currently forces a DPIA, but the case should still retain supporting rationale and periodic review if the project changes.",
    pill: "Low trigger",
  };
}

function completionScore(currentCase) {
  const values = [
    currentCase.title,
    currentCase.owner,
    currentCase.product,
    currentCase.summary,
    currentCase.processing.purpose,
    currentCase.processing.nature,
    currentCase.processing.scope,
    currentCase.processing.context,
    currentCase.consultation.dpo,
    currentCase.proportionality.alternatives,
    currentCase.proportionality.rightsSupport,
    currentCase.risks.length > 0 ? "yes" : "",
    currentCase.controls.length > 0 ? "yes" : "",
    currentCase.approvals.length > 0 ? "yes" : "",
  ];
  const completed = values.filter(Boolean).length;
  return Math.round((completed / values.length) * 100);
}

function riskSignal(currentCase) {
  const score = currentCase.risks.reduce((sum, risk) => {
    const severity = { Low: 1, Medium: 2, High: 3 }[risk.severity] || 1;
    const likelihood = { Low: 1, Medium: 2, High: 3 }[risk.likelihood] || 1;
    return sum + severity * likelihood;
  }, 0);
  if (score >= 12) return "High";
  if (score >= 6) return "Moderate";
  return "Controlled";
}

function approvalSignal(currentCase) {
  const pending = currentCase.approvals.filter((item) => item.decision === "Pending").length;
  if (!currentCase.approvals.length) return "No records";
  if (pending > 0) return `${pending} pending`;
  return "Logged";
}

function statusClass(status) {
  return `status-pill status-pill--${status.toLowerCase().replace(/[^\w]+/g, "-")}`;
}

function renderControl(field, value) {
  if (field.type === "textarea") {
    return `
      <div class="field-control">
        <label>${field.label}</label>
        <textarea data-path="${field.path}">${value || ""}</textarea>
      </div>
    `;
  }

  if (field.type === "select") {
    return `
      <div class="field-control">
        <label>${field.label}</label>
        <select data-path="${field.path}">
          ${field.options
            .map((option) => `<option value="${option}" ${option === value ? "selected" : ""}>${option}</option>`)
            .join("")}
        </select>
      </div>
    `;
  }

  return `
    <div class="field-control">
      <label>${field.label}</label>
      <input data-path="${field.path}" type="${field.type}" value="${value || ""}" />
    </div>
  `;
}

function renderCollectionField(collectionKey, index, field, value) {
  if (field.type === "textarea") {
    return `
      <div class="field-control ${field.full ? "field-control--full" : ""}">
        <label>${field.label}</label>
        <textarea data-collection="${collectionKey}" data-index="${index}" data-key="${field.key}">${value || ""}</textarea>
      </div>
    `;
  }

  if (field.type === "select") {
    return `
      <div class="field-control">
        <label>${field.label}</label>
        <select data-collection="${collectionKey}" data-index="${index}" data-key="${field.key}">
          ${field.options
            .map((option) => `<option value="${option}" ${option === value ? "selected" : ""}>${option}</option>`)
            .join("")}
        </select>
      </div>
    `;
  }

  return `
    <div class="field-control">
      <label>${field.label}</label>
      <input data-collection="${collectionKey}" data-index="${index}" data-key="${field.key}" type="${field.type}" value="${value || ""}" />
    </div>
  `;
}

function bindFieldControls(container, currentCase) {
  container.querySelectorAll("[data-path]").forEach((element) => {
    const eventName = element.tagName === "SELECT" ? "change" : "input";
    element.addEventListener(eventName, (event) => {
      const value =
        event.target.type === "checkbox" ? event.target.checked : event.target.value;
      setByPath(currentCase, event.target.dataset.path, value);
      saveState("Draft updated.");
    });
  });
}

function bindCollectionControls(containerId, collectionKey) {
  const container = document.getElementById(containerId);
  const currentCase = getCurrentCase();

  container.querySelectorAll("[data-collection]").forEach((element) => {
    const eventName = element.tagName === "SELECT" ? "change" : "input";
    element.addEventListener(eventName, (event) => {
      const target = currentCase[collectionKey][Number(event.target.dataset.index)];
      target[event.target.dataset.key] = event.target.value;
      saveState("Draft updated.");
    });
  });

  container.querySelectorAll("[data-remove-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.removeIndex);
      currentCase[collectionKey].splice(index, 1);
      pushTimeline(currentCase, `${COLLECTION_SCHEMAS[collectionKey].heading} removed.`, "update");
      saveState(`${COLLECTION_SCHEMAS[collectionKey].tag} removed.`);
    });
  });
}

function renderProfileGrid(currentCase) {
  const profileGrid = document.getElementById("profileGrid");
  profileGrid.innerHTML = profileFields
    .map((field) => {
      const value = getByPath(currentCase, field.path);
      return `
        <article class="field-card ${field.full ? "field-card--full" : ""}">
          <div class="field-card__head">
            <div>
              <h3>${field.label}</h3>
              <p class="field-card__helper">${field.helper}</p>
            </div>
            <span class="field-tag">Core</span>
          </div>
          ${renderControl(field, value)}
        </article>
      `;
    })
    .join("");

  bindFieldControls(profileGrid, currentCase);
}

function renderLifecycle(currentCase) {
  const lifecycleFlow = document.getElementById("lifecycleFlow");
  lifecycleFlow.innerHTML = STATUS_FLOW.map((item, index) => {
    const active = item === currentCase.status;
    return `
      <div class="flow-item">
        <span class="flow-item__index ${active ? "is-active" : ""}">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${item}</h3>
          <p>${active ? "Current workflow state." : "Available lifecycle state."}</p>
        </div>
      </div>
    `;
  }).join("");
}

function renderCaseList() {
  const currentCase = getCurrentCase();
  const caseList = document.getElementById("caseList");
  caseList.innerHTML = state.cases
    .map((item) => {
      const active = item.id === currentCase.id;
      return `
        <button class="history-item ${active ? "is-active" : ""}" data-case-id="${item.id}" type="button">
          <div class="history-item__title">
            <strong>${item.title}</strong>
            <span class="${statusClass(item.status)}">${item.status}</span>
          </div>
          <p class="history-item__meta">${item.product || "Unassigned product"} · ${item.owner || "No owner yet"} · v${item.version}</p>
        </button>
      `;
    })
    .join("");

  caseList.querySelectorAll("[data-case-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentCaseId = button.dataset.caseId;
      render();
    });
  });
}

function renderMetrics(currentCase) {
  const screening = screeningResult(currentCase.screening);
  const metricGrid = document.getElementById("metricGrid");
  metricGrid.innerHTML = [
    {
      label: "Completion",
      value: `${completionScore(currentCase)}%`,
      text: "Core fields, consultation notes, risks, controls, and approval blocks completed.",
    },
    {
      label: "Risk signal",
      value: riskSignal(currentCase),
      text: "Derived from the current risk register and residual risk profile.",
    },
    {
      label: "Screening",
      value: screening.pill,
      text: screening.body,
    },
    {
      label: "Approvals",
      value: approvalSignal(currentCase),
      text: "Tracks DPO review, sign-off posture, and escalation decisions.",
    },
  ]
    .map(
      (item) => `
        <article class="metric-card">
          <p class="section-label">${item.label}</p>
          <strong>${item.value}</strong>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

  const snapshotGrid = document.getElementById("snapshotGrid");
  snapshotGrid.innerHTML = [
    ["Case owner", currentCase.owner || "Unassigned"],
    ["Product / service", currentCase.product || "Not linked yet"],
    ["Version", `v${currentCase.version}`],
    ["Review date", currentCase.reviewDate || "Not scheduled"],
    ["Updated", currentCase.updatedAt ? new Date(currentCase.updatedAt).toLocaleString() : "Not saved yet"],
  ]
    .map(
      ([label, value]) => `
        <div class="snapshot-item">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");
}

function renderScreening(currentCase) {
  const screeningGrid = document.getElementById("screeningGrid");
  screeningGrid.innerHTML = screeningQuestions
    .map((question) => {
      const value = getByPath(currentCase, question.path);
      return `
        <article class="field-card">
          <div class="field-card__head">
            <div>
              <h3>${question.label}</h3>
              <p class="field-card__helper">${question.helper}</p>
            </div>
            <span class="field-tag">Screen</span>
          </div>
          <div class="field-control">
            <label>${question.label}</label>
            <select data-path="${question.path}">
              ${question.options
                .map((option) => `<option value="${option}" ${option === value ? "selected" : ""}>${option}</option>`)
                .join("")}
            </select>
          </div>
        </article>
      `;
    })
    .join("");

  bindFieldControls(screeningGrid, currentCase);

  const outcome = screeningResult(currentCase.screening);
  document.getElementById("screeningOutcomeTitle").textContent = outcome.title;
  document.getElementById("screeningOutcomeText").textContent = outcome.body;
}

function renderCoreSections(currentCase) {
  const core = document.getElementById("coreSections");
  core.innerHTML = coreSections
    .map(
      (section) => `
        <article class="field-card field-card--full">
          <div class="section-heading section-heading--compact">
            <div>
              <p class="section-label">${section.label}</p>
              <h3>${section.title}</h3>
            </div>
            <p class="section-text">${section.text}</p>
          </div>
          <div class="field-grid">
            ${section.fields
              .map((field) => {
                const value = getByPath(currentCase, field.path);
                return `
                  <div class="field-card ${field.type === "textarea" ? "field-card--full" : ""}">
                    <div class="field-card__head">
                      <div>
                        <h3>${field.label}</h3>
                        <p class="field-card__helper">${field.helper}</p>
                      </div>
                      <span class="field-tag">DPIA</span>
                    </div>
                    ${renderControl(field, value)}
                  </div>
                `;
              })
              .join("")}
          </div>
        </article>
      `
    )
    .join("");

  bindFieldControls(core, currentCase);
}

function renderCollectionCards(containerId, collectionKey, currentCase) {
  const container = document.getElementById(containerId);
  const schema = COLLECTION_SCHEMAS[collectionKey];
  const items = currentCase[collectionKey];

  if (!items.length) {
    container.innerHTML = `
      <article class="editable-card editable-card--empty">
        <h3>${schema.emptyTitle}</h3>
        <p class="field-card__helper">${schema.emptyText}</p>
      </article>
    `;
    return;
  }

  container.innerHTML = items
    .map(
      (item, index) => `
        <article class="editable-card">
          <div class="field-card__head">
            <div>
              <h3>${item.name || item.role || `${schema.heading} ${index + 1}`}</h3>
              <p class="field-card__helper">${schema.heading} ${index + 1}</p>
            </div>
            <div class="editable-card__actions">
              <span class="field-tag">${schema.tag}</span>
              <button class="button button--ghost button--small" type="button" data-remove-index="${index}">Remove</button>
            </div>
          </div>
          <div class="field-grid field-grid--dense">
            ${schema.fields
              .map((field) => renderCollectionField(collectionKey, index, field, item[field.key]))
              .join("")}
          </div>
        </article>
      `
    )
    .join("");

  bindCollectionControls(containerId, collectionKey);
}

function renderAssets(currentCase) {
  renderCollectionCards("assetList", "assets", currentCase);
}

function renderRisks(currentCase) {
  renderCollectionCards("riskCards", "risks", currentCase);
}

function renderControls(currentCase) {
  renderCollectionCards("controlCards", "controls", currentCase);
}

function renderApprovals(currentCase) {
  renderCollectionCards("approvalCards", "approvals", currentCase);
}

function renderTimeline(currentCase) {
  const timelineList = document.getElementById("timelineList");
  timelineList.innerHTML = currentCase.timeline
    .map(
      (entry) => `
        <article class="timeline-item">
          <div class="timeline-item__dot timeline-item__dot--${entry.category}"></div>
          <div>
            <strong>${entry.message}</strong>
            <p>${new Date(entry.timestamp).toLocaleString()}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderExtensions(currentCase) {
  const extensionGrid = document.getElementById("extensionGrid");
  extensionGrid.innerHTML = extensionFields
    .map((field) => {
      const value = getByPath(currentCase, field.path);
      const control =
        field.type === "toggle"
          ? `
            <div class="field-control">
              <label>${field.label}</label>
              <select data-path="${field.path}">
                <option value="false" ${!value ? "selected" : ""}>Disabled</option>
                <option value="true" ${value ? "selected" : ""}>Enabled</option>
              </select>
            </div>
          `
          : renderControl(field, value);

      return `
        <article class="field-card ${field.type === "textarea" ? "field-card--full" : ""}">
          <div class="field-card__head">
            <div>
              <h3>${field.label}</h3>
              <p class="field-card__helper">${field.helper}</p>
            </div>
            <span class="field-tag">Extension</span>
          </div>
          ${control}
        </article>
      `;
    })
    .join("");

  extensionGrid.querySelectorAll("[data-path]").forEach((element) => {
    const eventName = element.tagName === "SELECT" ? "change" : "input";
    element.addEventListener(eventName, (event) => {
      let value = event.target.value;
      if (event.target.dataset.path === "extensions.children.enabled") {
        value = value === "true";
      }
      setByPath(currentCase, event.target.dataset.path, value);
      saveState("Draft updated.");
    });
  });
}

function buildMarkdown(currentCase) {
  const screening = screeningResult(currentCase.screening);
  const approvals = currentCase.approvals.length
    ? currentCase.approvals
        .map(
          (item) =>
            `- ${item.role}: ${item.decision} (${item.owner || "Unassigned"}${item.date ? `, ${item.date}` : ""})`
        )
        .join("\n")
    : "- No approval records yet";

  const assets = currentCase.assets.length
    ? currentCase.assets.map((item) => `- ${item.name} (${item.type})`).join("\n")
    : "- No supporting assets yet";

  const risks = currentCase.risks.length
    ? currentCase.risks
        .map((item) => `- ${item.name} | ${item.track} | L:${item.likelihood} S:${item.severity} Residual:${item.residual}`)
        .join("\n")
    : "- No risks yet";

  const controls = currentCase.controls.length
    ? currentCase.controls.map((item) => `- ${item.name} (${item.status})`).join("\n")
    : "- No controls yet";

  return `# ${currentCase.title}

## Record
- Owner: ${currentCase.owner || "Unassigned"}
- Product: ${currentCase.product || "Not linked"}
- Jurisdiction: ${currentCase.jurisdiction}
- Status: ${currentCase.status}
- Version: ${currentCase.version}
- Review date: ${currentCase.reviewDate || "Not scheduled"}

## Summary
${currentCase.summary || "No summary yet."}

## Screening
- Outcome: ${screening.title}
- Must-list trigger: ${currentCase.screening.mustList}
- Large-scale sensitive processing: ${currentCase.screening.largeScaleSensitive}
- Systematic monitoring: ${currentCase.screening.systematicMonitoring}
- Children or vulnerable people: ${currentCase.screening.childrenVulnerable}
- New technology: ${currentCase.screening.newTechnology}
- Matching or combining datasets: ${currentCase.screening.crossSystemMatching}

## Processing description
${currentCase.processing.purpose || "No purpose statement yet."}

## Nature
${currentCase.processing.nature || "No nature statement yet."}

## Scope
${currentCase.processing.scope || "No scope statement yet."}

## Context
${currentCase.processing.context || "No context statement yet."}

## Consultation
- DPO involvement: ${currentCase.consultation.dpo || "Not documented"}
- User views: ${currentCase.consultation.users || "Not documented"}
- Security input: ${currentCase.consultation.security || "Not documented"}
- Processor input: ${currentCase.consultation.processors || "Not documented"}

## Necessity and proportionality
- Lawful basis: ${currentCase.proportionality.lawfulBasis}
- Less intrusive alternatives: ${currentCase.proportionality.alternatives || "Not documented"}
- Support for rights: ${currentCase.proportionality.rightsSupport || "Not documented"}
- International transfers: ${currentCase.proportionality.internationalTransfers || "Not documented"}

## Supporting assets
${assets}

## Risks
${risks}

## Controls
${controls}

## Approvals
${approvals}

## Children extension
- Enabled: ${currentCase.extensions.children.enabled ? "Yes" : "No"}
- Age range: ${currentCase.extensions.children.ageRange || "Not set"}
- Age assurance: ${currentCase.extensions.children.ageAssurance || "Not documented"}
- Parental controls: ${currentCase.extensions.children.parentalControls || "Not documented"}
- Age code alignment: ${currentCase.extensions.children.codeCompliance || "Not documented"}
`;
}

function downloadTextFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function renderReport(currentCase) {
  document.getElementById("reportTitle").textContent = currentCase.title;
  const outcome = screeningResult(currentCase.screening);
  document.getElementById("reportIntro").textContent = `${
    currentCase.summary || "No summary yet."
  } Screening outcome: ${outcome.title}. Current lifecycle status: ${currentCase.status}.`;

  const reportGrid = document.getElementById("reportGrid");
  const sections = [
    {
      title: "Core summary",
      content: currentCase.processing.purpose || "No purpose statement yet.",
    },
    {
      title: "Consultation posture",
      content: currentCase.consultation.dpo || "DPO notes still pending.",
    },
    {
      title: "Controls at a glance",
      content:
        currentCase.controls.map((item) => `${item.name} (${item.status})`).join(", ") ||
        "No controls entered yet.",
    },
    {
      title: "Approvals",
      content:
        currentCase.approvals.map((item) => `${item.role}: ${item.decision}`).join(" | ") ||
        "No approval entries yet.",
    },
    {
      title: "Residual risk signal",
      content:
        currentCase.risks.map((item) => `${item.name}: ${item.residual}`).join(" | ") ||
        "No risks entered yet.",
      full: true,
    },
  ];

  reportGrid.innerHTML = sections
    .map(
      (section) => `
        <article class="report-card ${section.full ? "report-card--full" : ""}">
          <p class="section-label">${section.title}</p>
          <p class="report-paragraph">${section.content}</p>
        </article>
      `
    )
    .join("");
}

function renderHero(currentCase) {
  const outcome = screeningResult(currentCase.screening);
  document.getElementById("heroTitle").textContent =
    currentCase.title || "Build living DPIA records, not one-off forms.";
  document.getElementById("heroText").textContent =
    currentCase.summary ||
    "Screen whether a DPIA is needed, structure the core assessment, attach supporting assets, manage risks and controls, and keep the record review-ready over time.";
  document.getElementById("heroStatusPill").textContent = `Current status: ${currentCase.status}`;
  document.getElementById("heroScreeningPill").textContent = `Screening: ${outcome.pill}`;
  document.getElementById("heroExtensionPill").textContent = currentCase.extensions.children.enabled
    ? "Extensions: Children module enabled"
    : "Extensions: None";
  document.getElementById("currentRecordBadge").textContent = `v${currentCase.version} · ${currentCase.status}`;
  document.getElementById("saveStatus").textContent = state.saveStatus;
}

function advanceStatus() {
  const currentCase = getCurrentCase();
  const currentIndex = STATUS_FLOW.indexOf(currentCase.status);
  const nextIndex = Math.min(currentIndex + 1, STATUS_FLOW.length - 1);
  currentCase.status = STATUS_FLOW[nextIndex];
  pushTimeline(currentCase, `Status moved to ${currentCase.status}.`, "workflow");
  saveState("Lifecycle state advanced.");
}

function addAsset() {
  const currentCase = getCurrentCase();
  currentCase.assets.push({
    name: `Supporting asset ${currentCase.assets.length + 1}`,
    type: "Application",
    owner: "",
    reuse: "Reusable asset",
    note: "",
  });
  pushTimeline(currentCase, "Supporting asset added.", "update");
  saveState("Supporting asset added.");
}

function addRisk() {
  const currentCase = getCurrentCase();
  currentCase.risks.push({
    name: `Risk ${currentCase.risks.length + 1}`,
    track: "Classical risk",
    likelihood: "Medium",
    severity: "Medium",
    residual: "Medium",
    owner: "",
    note: "",
  });
  pushTimeline(currentCase, "Risk record added.", "update");
  saveState("Risk added.");
}

function addControl() {
  const currentCase = getCurrentCase();
  currentCase.controls.push({
    name: `Control ${currentCase.controls.length + 1}`,
    status: "Planned",
    owner: "",
    due: "",
    linkedRisk: "",
    evidence: "",
  });
  pushTimeline(currentCase, "Control record added.", "update");
  saveState("Control added.");
}

function addApproval() {
  const currentCase = getCurrentCase();
  currentCase.approvals.push({
    role: "DPO review",
    decision: "Pending",
    owner: "",
    date: "",
    note: "",
  });
  pushTimeline(currentCase, "Approval entry added.", "workflow");
  saveState("Approval entry added.");
}

function exportJson() {
  downloadTextFile("dpia-toolbox.json", JSON.stringify(state, null, 2), "application/json");
  const currentCase = getCurrentCase();
  pushTimeline(currentCase, "JSON export generated.", "export");
  saveState("JSON exported.");
}

function exportMarkdown() {
  const currentCase = getCurrentCase();
  const filename = `${(currentCase.title || "dpia-report").toLowerCase().replace(/[^\w]+/g, "-")}.md`;
  downloadTextFile(filename, buildMarkdown(currentCase), "text/markdown");
  pushTimeline(currentCase, "Markdown export generated.", "export");
  saveState("Markdown exported.");
}

function printReport() {
  const currentCase = getCurrentCase();
  pushTimeline(currentCase, "Print / PDF view opened.", "export");
  saveState("Print view opened.");
  window.print();
}

function resetToSample() {
  const sample = createSampleCase();
  state = {
    cases: [sample],
    currentCaseId: sample.id,
    saveStatus: "Sample restored.",
  };
  saveState("Sample restored.");
}

function newCase() {
  const blank = createBlankCase(state.cases.length + 1);
  state.cases.unshift(blank);
  state.currentCaseId = blank.id;
  saveState("New case created.");
}

function render() {
  const currentCase = getCurrentCase();
  renderHero(currentCase);
  renderMetrics(currentCase);
  renderCaseList();
  renderProfileGrid(currentCase);
  renderLifecycle(currentCase);
  renderScreening(currentCase);
  renderCoreSections(currentCase);
  renderAssets(currentCase);
  renderRisks(currentCase);
  renderControls(currentCase);
  renderExtensions(currentCase);
  renderApprovals(currentCase);
  renderTimeline(currentCase);
  renderReport(currentCase);
}

document.getElementById("advanceStateButton").addEventListener("click", advanceStatus);
document.getElementById("loadSampleButton").addEventListener("click", resetToSample);
document.getElementById("resetSampleButton").addEventListener("click", resetToSample);
document.getElementById("newCaseButton").addEventListener("click", newCase);
document.getElementById("saveButton").addEventListener("click", checkpointCase);
document.getElementById("exportJsonButton").addEventListener("click", exportJson);
document.getElementById("exportMarkdownButton").addEventListener("click", exportMarkdown);
document.getElementById("printButton").addEventListener("click", printReport);
document.getElementById("addAssetButton").addEventListener("click", addAsset);
document.getElementById("addRiskButton").addEventListener("click", addRisk);
document.getElementById("addControlButton").addEventListener("click", addControl);
document.getElementById("addApprovalButton").addEventListener("click", addApproval);

render();
