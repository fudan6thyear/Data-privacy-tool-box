const txt = (en, zh) => ({ en, zh });

const uiText = {
  en: {
    documentTitle: "DPIA TOOLBOX",
    brandName: "DPIA TOOLBOX",
    brandTag: "EDPB-oriented impact assessment workspace",
    languageEnglish: "EN",
    languageChinese: "中文",
    loadSample: "Load sample",
    saveDraft: "Save draft",
    exportJson: "Export JSON",
    exportMarkdown: "Export Markdown",
    printPdf: "Print / PDF",
    trashLabel: "Trash",
    trashSectionTitle: "Deleted cases",
    newAssessment: "New assessment",
    draftReady: "Draft ready.",
    draftSaved: "Draft saved locally.",
    draftUpdated: "Draft updated.",
    sampleLoaded: "Sample loaded.",
    created: "New case created.",
    jsonExported: "JSON exported.",
    markdownExported: "Markdown exported.",
    printOpened: "Print view opened.",
    languageSwitched: "Language switched.",
    restored: "Case restored.",
    deleted: "Case moved to trash.",
    trashEmpty: "No deleted cases.",
    restore: "Restore",
    versionSaved: "Version {v} saved.",
    dashboardLabel: "Workbench overview",
    dashboardHeading: "DPIA portfolio dashboard",
    dashboardText: "Monitor total case volume, product distribution, and overall completion without opening a single record.",
    distributionLabel: "Distribution",
    distributionHeading: "Products / services",
    distributionProductsLabel: "Coverage map",
    distributionStatusLabel: "Status mix",
    metricTotalLabel: "Total cases",
    metricTotalText: "Active DPIA records in this workspace.",
    metricCoverageLabel: "Products covered",
    metricCoverageText: "Distinct products or services with at least one DPIA.",
    metricCompletionLabel: "Avg completion",
    metricCompletionText: "Average field completion across all cases.",
    metricPendingLabel: "Pending approvals",
    metricPendingText: "Cases with at least one pending approval entry.",
    listLabel: "DPIA list",
    listHeading: "Assessment workbench",
    listText: "Select a case to open its editable workspace, view a posture snapshot, or move it to trash.",
    tableSeq: "No.",
    tableName: "DPIA assessment",
    tableProduct: "Product / service",
    tableOwner: "Owner",
    tableUpdated: "Last updated",
    tableCompletion: "Completion",
    emptyWorkbench: "No DPIA cases yet. Create the first one to start the workspace.",
    rowOverview: "Overview",
    rowDelete: "Delete",
    rowSelectedMeta: "Case {seq} selected",
    closeOverview: "Close",
    detailLabel: "Assessment detail",
    advanceState: "Advance state",
    profileLabel: "Case profile",
    profileHeading: "Assessment file",
    profileText: "Capture the baseline record that all screening, risk, and approval activity hangs from.",
    flowLabel: "Lifecycle",
    flowHeading: "State machine",
    currentWorkflowState: "Current workflow state.",
    availableState: "Available lifecycle state.",
    screeningLabel: "Module 1",
    screeningHeading: "Screening",
    screeningText: "Check must-list logic, Art. 35 triggers, and contextual high-risk signals before opening the full DPIA.",
    screeningOutcomeLabel: "Outcome",
    screeningNotComplete: "Screening not complete",
    screeningDefaultText: "Answer the key screening questions to decide whether the case should remain a short-form record or proceed into full DPIA mode.",
    screeningRequired: "DPIA required",
    screeningRequiredBody: "A must-list or equivalent trigger is already present. This case should remain in full DPIA mode and cannot close as a simple record.",
    screeningStrongSignal: "DPIA strongly recommended",
    screeningStrongSignalBody: "Multiple high-risk indicators are present. Proceed with the full assessment and tighten review controls before launch.",
    screeningNeedsReview: "Further judgement required",
    screeningNeedsReviewBody: "One meaningful trigger exists. The case should remain open until legal and DPO review determine whether a full DPIA remains necessary.",
    screeningLowTrigger: "No strong trigger yet",
    screeningLowTriggerBody: "No screening answer currently forces a DPIA, but the case should still retain supporting rationale and periodic review if the project changes.",
    screeningPillRequired: "Required",
    screeningPillStrong: "Strong signal",
    screeningPillReview: "Needs review",
    screeningPillLow: "Low trigger",
    coreDpiaLabel: "Module 2",
    coreDpiaHeading: "Core DPIA",
    coreDpiaText: "Record processing context, consultation, and necessity/proportionality using a flow that maps to ICO-style structure.",
    assetsLabel: "Module 3",
    assetsHeading: "Supporting assets",
    assetsText: "Separate the processing activity from the supporting systems, platforms, and tools that influence risk and control design.",
    riskControlsLabel: "Module 4",
    riskControlsHeading: "Risk & controls",
    riskControlsText: "Keep classical risk scoring and rights-oriented control planning in one place, with residual risk and ownership visible.",
    riskRegisterLabel: "Risk register",
    riskRegisterHeading: "Risk records",
    controlPlanLabel: "Control plan",
    controlPlanHeading: "Measures library",
    extensionsLabel: "Module 5",
    extensionsHeading: "Extensions",
    extensionsText: "Load scenario-specific questions without breaking the core report structure. This first version includes a children-accessible online service module.",
    approvalsLabel: "Module 6",
    approvalsHeading: "Approvals & review",
    approvalsText: "Keep DPO review, approval decisions, prior consultation signals, and review follow-up as explicit records rather than implicit status labels.",
    approvalLogLabel: "Approval log",
    approvalLogHeading: "Decision records",
    activityLabel: "Activity",
    activityHeading: "Timeline",
    addAsset: "Add supporting asset",
    addRisk: "Add risk",
    addControl: "Add control",
    addApproval: "Add approval entry",
    remove: "Remove",
    reviewLabel: "Review",
    reviewHeading: "Report preview",
    reviewText: "Use this as the pre-export review surface before generating PDF, Markdown, or structured outputs.",
    reportBannerLabel: "DPIA summary",
    reportCoreSummary: "Core summary",
    reportConsultationPosture: "Consultation posture",
    reportControlsAtGlance: "Controls at a glance",
    reportApprovals: "Approvals",
    reportResidualRisk: "Residual risk signal",
    snapshotLabel: "Snapshot",
    snapshotAssessmentLabel: "Assessment",
    snapshotProductLabel: "Product / service",
    snapshotOwnerLabel: "Owner",
    snapshotUpdatedLabel: "Last updated",
    snapshotCompletionLabel: "Completion",
    snapshotScreeningLabel: "Screening",
    signalCompletion: "Completion",
    signalRisk: "Risk signal",
    signalApproval: "Approval posture",
    completionSummary: "{value}% of assessable fields completed.",
    riskHigh: "High",
    riskModerate: "Moderate",
    riskControlled: "Controlled",
    noRecords: "No records",
    nPending: "{n} pending",
    logged: "Logged",
    unassigned: "Unassigned",
    notLinked: "Not linked yet",
    notScheduled: "Not scheduled",
    notSavedYet: "Not saved yet",
    untitledDpia: "Untitled DPIA",
    unassignedProduct: "Unassigned product",
    noOwnerYet: "No owner yet",
    noSummaryYet: "No summary yet.",
    noPurpose: "No purpose statement yet.",
    dpoNotesPending: "DPO notes still pending.",
    noControlsEntered: "No controls entered yet.",
    noApprovalEntries: "No approval entries yet.",
    noRisksEntered: "No risks entered yet.",
    modulePickerLabel: "Modules",
    extensionsModule: "Extensions",
    statusNotStarted: "Not Started",
    statusScreeningInProgress: "Screening In Progress",
    statusScreeningComplete: "Screening Complete - DPIA Required",
    statusDraft: "Draft",
    statusDpoReview: "DPO Review",
    statusApproved: "Approved",
    statusPriorConsultation: "Prior Consultation Required",
    statusPublished: "Published / Operational",
    statusReviewDue: "Review Due",
    statusReassessment: "Reassessment In Progress",
    statusArchived: "Archived",
    assetHeading: "Supporting asset",
    assetTag: "Asset",
    assetEmptyTitle: "No supporting assets yet",
    assetEmptyText: "Add reusable systems, tools, or environments so the DPIA can separate business processing from technical infrastructure.",
    riskHeading: "Risk record",
    riskTag: "Risk",
    riskEmptyTitle: "No risks yet",
    riskEmptyText: "Add at least one risk so likelihood, severity, ownership, and residual exposure become explicit.",
    controlHeading: "Control record",
    controlTag: "Control",
    controlEmptyTitle: "No controls yet",
    controlEmptyText: "Add mitigations, owners, and evidence so the DPIA can move beyond problem statements.",
    approvalHeading: "Approval entry",
    approvalTag: "Approval",
    approvalEmptyTitle: "No approval entries yet",
    approvalEmptyText: "Capture DPO review, product approval, or prior consultation decisions as structured records.",
    markdownRecord: "Record",
    markdownSummary: "Summary",
    markdownScreening: "Screening",
    markdownOutcome: "Outcome",
    markdownProcessingDesc: "Processing description",
    markdownNature: "Nature",
    markdownScope: "Scope",
    markdownContext: "Context",
    markdownConsultation: "Consultation",
    markdownNecessity: "Necessity and proportionality",
    markdownSupportingAssets: "Supporting assets",
    markdownRisks: "Risks",
    markdownControls: "Controls",
    markdownApprovals: "Approvals",
    markdownChildrenExt: "Children extension",
  },
  zh: {
    documentTitle: "DPIA 工具箱",
    brandName: "DPIA 工具箱",
    brandTag: "基于 EDPB 的影响评估工作区",
    languageEnglish: "EN",
    languageChinese: "中文",
    loadSample: "加载示例",
    saveDraft: "保存草稿",
    exportJson: "导出 JSON",
    exportMarkdown: "导出 Markdown",
    printPdf: "打印 / PDF",
    trashLabel: "回收站",
    trashSectionTitle: "已删除的案例",
    newAssessment: "新建评估",
    draftReady: "草稿就绪。",
    draftSaved: "草稿已本地保存。",
    draftUpdated: "草稿已更新。",
    sampleLoaded: "示例已加载。",
    created: "已创建新案例。",
    jsonExported: "JSON 已导出。",
    markdownExported: "Markdown 已导出。",
    printOpened: "打印视图已打开。",
    languageSwitched: "语言已切换。",
    restored: "案例已恢复。",
    deleted: "案例已移至回收站。",
    trashEmpty: "没有已删除的案例。",
    restore: "恢复",
    versionSaved: "版本 {v} 已保存。",
    dashboardLabel: "工作台概览",
    dashboardHeading: "DPIA 组合仪表盘",
    dashboardText: "无需打开任何记录，即可监控案例总量、产品分布和整体完成度。",
    distributionLabel: "分布",
    distributionHeading: "产品 / 服务",
    distributionProductsLabel: "覆盖图",
    distributionStatusLabel: "状态分布",
    metricTotalLabel: "案例总数",
    metricTotalText: "本工作区中的活跃 DPIA 记录。",
    metricCoverageLabel: "产品覆盖",
    metricCoverageText: "拥有至少一份 DPIA 的不同产品或服务数量。",
    metricCompletionLabel: "平均完成度",
    metricCompletionText: "所有案例的平均字段完成百分比。",
    metricPendingLabel: "待批准",
    metricPendingText: "至少有一个待批准条目的案例数。",
    listLabel: "DPIA 列表",
    listHeading: "评估工作台",
    listText: "选择案例以打开其可编辑工作区、查看态势快照或将其移至回收站。",
    tableSeq: "序号",
    tableName: "DPIA 评估",
    tableProduct: "产品 / 服务",
    tableOwner: "负责人",
    tableUpdated: "最近更新",
    tableCompletion: "完成度",
    emptyWorkbench: "暂无 DPIA 案例。创建第一个案例以启动工作区。",
    rowOverview: "概览",
    rowDelete: "删除",
    rowSelectedMeta: "已选择案例 {seq}",
    closeOverview: "关闭",
    detailLabel: "评估详情",
    advanceState: "推进状态",
    profileLabel: "案例档案",
    profileHeading: "评估文件",
    profileText: "记录所有筛选、风险和审批活动所依附的基线信息。",
    flowLabel: "生命周期",
    flowHeading: "状态机",
    currentWorkflowState: "当前工作流状态。",
    availableState: "可用的生命周期状态。",
    screeningLabel: "模块 1",
    screeningHeading: "筛选",
    screeningText: "在启动完整 DPIA 之前，检查必须列表逻辑、第 35 条触发因素和上下文高风险信号。",
    screeningOutcomeLabel: "结果",
    screeningNotComplete: "筛选未完成",
    screeningDefaultText: "回答关键筛选问题，以决定案例应保留为简要记录还是进入完整 DPIA 模式。",
    screeningRequired: "需要 DPIA",
    screeningRequiredBody: "已存在必须列表或等效触发因素。此案例应保持完整 DPIA 模式，不能作为简单记录关闭。",
    screeningStrongSignal: "强烈建议进行 DPIA",
    screeningStrongSignalBody: "存在多个高风险指标。继续进行完整评估，并在上线前加强审查控制。",
    screeningNeedsReview: "需要进一步判断",
    screeningNeedsReviewBody: "存在一个有意义的触发因素。案例应保持开放，直到法律和 DPO 审查确定是否仍需完整 DPIA。",
    screeningLowTrigger: "尚无强触发因素",
    screeningLowTriggerBody: "当前没有筛选答案强制要求 DPIA，但如果项目发生变化，案例仍应保留支持理由和定期审查。",
    screeningPillRequired: "必需",
    screeningPillStrong: "强信号",
    screeningPillReview: "需审查",
    screeningPillLow: "低触发",
    coreDpiaLabel: "模块 2",
    coreDpiaHeading: "核心 DPIA",
    coreDpiaText: "使用映射到 ICO 风格结构的流程，记录处理上下文、咨询及必要性/比例性。",
    assetsLabel: "模块 3",
    assetsHeading: "支撑资产",
    assetsText: "将处理活动与影响风险和控制设计的支撑系统、平台和工具分离开来。",
    riskControlsLabel: "模块 4",
    riskControlsHeading: "风险与控制",
    riskControlsText: "将经典风险评分和以权利为导向的控制规划集中在一处，使残余风险和责任归属清晰可见。",
    riskRegisterLabel: "风险登记",
    riskRegisterHeading: "风险记录",
    controlPlanLabel: "控制计划",
    controlPlanHeading: "措施库",
    extensionsLabel: "模块 5",
    extensionsHeading: "扩展",
    extensionsText: "加载特定场景的问题，而不破坏核心报告结构。当前版本包含儿童可访问在线服务模块。",
    approvalsLabel: "模块 6",
    approvalsHeading: "审批与复审",
    approvalsText: "将 DPO 审查、审批决定、事前咨询信号和复审跟进作为显式记录保留，而非隐式状态标签。",
    approvalLogLabel: "审批日志",
    approvalLogHeading: "决策记录",
    activityLabel: "活动",
    activityHeading: "时间线",
    addAsset: "添加支撑资产",
    addRisk: "添加风险",
    addControl: "添加控制",
    addApproval: "添加审批条目",
    remove: "移除",
    reviewLabel: "复审",
    reviewHeading: "报告预览",
    reviewText: "在生成 PDF、Markdown 或结构化输出之前，使用此视图进行导出前审查。",
    reportBannerLabel: "DPIA 摘要",
    reportCoreSummary: "核心摘要",
    reportConsultationPosture: "咨询态势",
    reportControlsAtGlance: "控制概览",
    reportApprovals: "审批",
    reportResidualRisk: "残余风险信号",
    snapshotLabel: "快照",
    snapshotAssessmentLabel: "评估",
    snapshotProductLabel: "产品 / 服务",
    snapshotOwnerLabel: "负责人",
    snapshotUpdatedLabel: "最近更新",
    snapshotCompletionLabel: "完成度",
    snapshotScreeningLabel: "筛选",
    signalCompletion: "完成度",
    signalRisk: "风险信号",
    signalApproval: "审批态势",
    completionSummary: "已完成 {value}% 的可评估字段。",
    riskHigh: "高",
    riskModerate: "中等",
    riskControlled: "受控",
    noRecords: "无记录",
    nPending: "{n} 个待批准",
    logged: "已记录",
    unassigned: "未分配",
    notLinked: "尚未关联",
    notScheduled: "未安排",
    notSavedYet: "尚未保存",
    untitledDpia: "未命名 DPIA",
    unassignedProduct: "未分配产品",
    noOwnerYet: "暂无负责人",
    noSummaryYet: "暂无摘要。",
    noPurpose: "暂无目的声明。",
    dpoNotesPending: "DPO 意见待补充。",
    noControlsEntered: "暂无控制措施。",
    noApprovalEntries: "暂无审批条目。",
    noRisksEntered: "暂无风险条目。",
    modulePickerLabel: "模块",
    extensionsModule: "扩展",
    statusNotStarted: "未开始",
    statusScreeningInProgress: "筛选进行中",
    statusScreeningComplete: "筛选完成 - 需要 DPIA",
    statusDraft: "草稿",
    statusDpoReview: "DPO 审查",
    statusApproved: "已批准",
    statusPriorConsultation: "需事前咨询",
    statusPublished: "已发布 / 运营中",
    statusReviewDue: "待复审",
    statusReassessment: "重新评估中",
    statusArchived: "已归档",
    assetHeading: "支撑资产",
    assetTag: "资产",
    assetEmptyTitle: "暂无支撑资产",
    assetEmptyText: "添加可复用的系统、工具或环境，以便 DPIA 将业务处理与技术基础设施分离。",
    riskHeading: "风险记录",
    riskTag: "风险",
    riskEmptyTitle: "暂无风险",
    riskEmptyText: "添加至少一项风险，使可能性、严重性、责任归属和残余暴露变得明确。",
    controlHeading: "控制记录",
    controlTag: "控制",
    controlEmptyTitle: "暂无控制措施",
    controlEmptyText: "添加缓解措施、负责人和证据，使 DPIA 能够超越问题陈述。",
    approvalHeading: "审批条目",
    approvalTag: "审批",
    approvalEmptyTitle: "暂无审批条目",
    approvalEmptyText: "将 DPO 审查、产品审批或事前咨询决定作为结构化记录保留。",
    markdownRecord: "记录",
    markdownSummary: "摘要",
    markdownScreening: "筛选",
    markdownOutcome: "结果",
    markdownProcessingDesc: "处理描述",
    markdownNature: "性质",
    markdownScope: "范围",
    markdownContext: "背景",
    markdownConsultation: "咨询",
    markdownNecessity: "必要性与比例性",
    markdownSupportingAssets: "支撑资产",
    markdownRisks: "风险",
    markdownControls: "控制措施",
    markdownApprovals: "审批",
    markdownChildrenExt: "儿童扩展",
  },
};

function currentLang() {
  return state && state.meta && state.meta.language === "zh" ? "zh" : "en";
}

function t(key, values = {}) {
  let template = uiText[currentLang()][key] || uiText.en[key] || key;
  Object.entries(values).forEach(([k, v]) => {
    template = template.replaceAll(`{${k}}`, String(v));
  });
  return template;
}

function tr(value) {
  if (value && typeof value === "object" && "en" in value && "zh" in value) {
    return value[currentLang()];
  }
  return value || "";
}

const STORAGE_KEY = "dpia-toolbox-v1";

const STATUS_FLOW = [
  { value: "Not Started", key: "statusNotStarted" },
  { value: "Screening In Progress", key: "statusScreeningInProgress" },
  { value: "Screening Complete - DPIA Required", key: "statusScreeningComplete" },
  { value: "Draft", key: "statusDraft" },
  { value: "DPO Review", key: "statusDpoReview" },
  { value: "Approved", key: "statusApproved" },
  { value: "Prior Consultation Required", key: "statusPriorConsultation" },
  { value: "Published / Operational", key: "statusPublished" },
  { value: "Review Due", key: "statusReviewDue" },
  { value: "Reassessment In Progress", key: "statusReassessment" },
  { value: "Archived", key: "statusArchived" },
];

function statusLabel(value) {
  const item = STATUS_FLOW.find((s) => s.value === value);
  return item ? t(item.key) : value;
}

function statusClass(value) {
  return `status-pill status-pill--${value.toLowerCase().replace(/[^\w]+/g, "-")}`;
}

const yesNoOptions = [
  { value: "Unknown", label: txt("Unknown", "未知") },
  { value: "No", label: txt("No", "否") },
  { value: "Yes", label: txt("Yes", "是") },
];

const lowMedHighOptions = [
  { value: "Low", label: txt("Low", "低") },
  { value: "Medium", label: txt("Medium", "中") },
  { value: "High", label: txt("High", "高") },
];

const profileFields = [
  {
    path: "title",
    label: txt("Case title", "案例标题"),
    type: "text",
    helper: txt(
      "Name the assessment in a way that makes later review and reuse practical.",
      "以便于后续审查和复用的方式命名评估。"
    ),
  },
  {
    path: "owner",
    label: txt("Case owner", "案例负责人"),
    type: "text",
    helper: txt(
      "Operational owner responsible for driving the DPIA forward.",
      "负责推进 DPIA 的运营负责人。"
    ),
  },
  {
    path: "product",
    label: txt("Product / service", "产品 / 服务"),
    type: "text",
    helper: txt(
      "Shared anchor object that can later map to the data compliance workspace.",
      "可在后续映射到数据合规工作区的共享锚定对象。"
    ),
  },
  {
    path: "jurisdiction",
    label: txt("Jurisdiction pack", "管辖区域包"),
    type: "select",
    options: [
      { value: "EU Core", label: txt("EU Core", "EU 核心") },
      { value: "ICO-aligned", label: txt("ICO-aligned", "ICO 对齐") },
      { value: "BayLfD-inspired", label: txt("BayLfD-inspired", "BayLfD 参考") },
      { value: "Public sector extension", label: txt("Public sector extension", "公共部门扩展") },
    ],
    helper: txt("Controls wording and special module behavior.", "控制措辞和特殊模块行为。"),
  },
  {
    path: "status",
    label: txt("Lifecycle status", "生命周期状态"),
    type: "select",
    options: STATUS_FLOW.map((s) => ({ value: s.value, label: txt(s.value, uiText.zh[s.key]) })),
    helper: txt("Formal state, not just a visual badge.", "正式状态，而非仅仅是一个视觉标记。"),
  },
  {
    path: "reviewDate",
    label: txt("Next review date", "下次审查日期"),
    type: "date",
    helper: txt("Supports Art. 35(11)-style periodic review.", "支持第 35(11) 条风格的定期审查。"),
  },
  {
    path: "summary",
    label: txt("Processing summary", "处理摘要"),
    type: "textarea",
    full: true,
    helper: txt(
      "Short baseline description of what is being assessed, why, and in what deployment stage.",
      "简要描述评估内容、原因及所处部署阶段。"
    ),
  },
];

const screeningQuestions = [
  {
    path: "screening.mustList",
    label: txt("Must-list trigger", "必须列表触发"),
    helper: txt(
      "Does the case clearly fall under a supervisory-authority must-list or internal equivalent?",
      "该案例是否明确属于监管机构必须列表或内部等效项？"
    ),
    options: yesNoOptions,
  },
  {
    path: "screening.largeScaleSensitive",
    label: txt("Large-scale sensitive processing", "大规模敏感处理"),
    helper: txt(
      "Special category or criminal data at scale materially changes the threshold.",
      "大规模的特殊类别或犯罪数据会实质性地改变门槛。"
    ),
    options: yesNoOptions,
  },
  {
    path: "screening.systematicMonitoring",
    label: txt("Systematic monitoring", "系统性监控"),
    helper: txt(
      "Persistent or structured monitoring of individuals or public spaces.",
      "对个人或公共空间的持续或结构化监控。"
    ),
    options: yesNoOptions,
  },
  {
    path: "screening.childrenVulnerable",
    label: txt("Children or vulnerable people", "儿童或弱势群体"),
    helper: txt(
      "Screen early for user groups with stronger fairness expectations.",
      "尽早筛选具有更强公平期望的用户群体。"
    ),
    options: yesNoOptions,
  },
  {
    path: "screening.newTechnology",
    label: txt("New technology / novel use", "新技术 / 新用途"),
    helper: txt(
      "Novelty does not force DPIA alone, but it raises the burden of explanation and testing.",
      "新颖性本身不会强制要求 DPIA，但会增加解释和测试的负担。"
    ),
    options: yesNoOptions,
  },
  {
    path: "screening.crossSystemMatching",
    label: txt("Matching or combining datasets", "数据集匹配或合并"),
    helper: txt(
      "Cross-system joins and enrichment often raise both legal and architectural risk.",
      "跨系统连接和数据丰富往往会增加法律和架构风险。"
    ),
    options: yesNoOptions,
  },
];

const lawfulBasisOptions = [
  { value: "Legitimate interests", label: txt("Legitimate interests", "合法利益") },
  { value: "Contract", label: txt("Contract", "合同") },
  { value: "Legal obligation", label: txt("Legal obligation", "法律义务") },
  { value: "Public task", label: txt("Public task", "公共任务") },
  { value: "Consent", label: txt("Consent", "同意") },
  { value: "Vital interests", label: txt("Vital interests", "重大利益") },
];

const coreSections = [
  {
    id: "processing",
    label: txt("Core DPIA", "核心 DPIA"),
    title: txt("Processing description", "处理描述"),
    text: txt(
      "Capture purpose, scale, data sources, sharing, retention, and geographic scope in a way that can feed exports and later reviews.",
      "以可供导出和后续审查使用的方式记录目的、规模、数据来源、共享、保留期和地理范围。"
    ),
    fields: [
      { path: "processing.purpose", label: txt("Purpose", "目的"), type: "textarea", helper: txt("State what the processing is trying to achieve and who benefits.", "说明处理的目标及受益方。") },
      { path: "processing.nature", label: txt("Nature of processing", "处理性质"), type: "textarea", helper: txt("How data is collected, used, stored, shared, and deleted.", "数据如何收集、使用、存储、共享和删除。") },
      { path: "processing.scope", label: txt("Scope", "范围"), type: "textarea", helper: txt("Volume, user population, retention, and geography.", "数据量、用户群体、保留期和地理范围。") },
      { path: "processing.context", label: txt("Context", "背景"), type: "textarea", helper: txt("Reasonable expectations, relationships, and public sensitivity.", "合理期望、关系和公众敏感度。") },
    ],
  },
  {
    id: "consultation",
    label: txt("Core DPIA", "核心 DPIA"),
    title: txt("Consultation", "咨询"),
    text: txt(
      "Record who was consulted, how that feedback was collected, and why any consultation was skipped.",
      "记录咨询了谁、如何收集反馈，以及跳过任何咨询的原因。"
    ),
    fields: [
      { path: "consultation.dpo", label: txt("DPO involvement", "DPO 参与"), type: "textarea", helper: txt("Summarize timing, concerns, and follow-up from the DPO.", "总结 DPO 参与的时间安排、关注点和后续跟进。") },
      { path: "consultation.users", label: txt("Data subject or user views", "数据主体或用户意见"), type: "textarea", helper: txt("Describe direct consultation, research, or explain why it was not appropriate.", "描述直接咨询、调研，或说明为何不适宜。") },
      { path: "consultation.security", label: txt("Security / engineering input", "安全/工程输入"), type: "textarea", helper: txt("Capture architectural or control advice.", "记录架构或控制建议。") },
      { path: "consultation.processors", label: txt("Processor / vendor input", "处理者/供应商输入"), type: "textarea", helper: txt("Evidence of external support or constraints.", "外部支持或约束的证据。") },
    ],
  },
  {
    id: "proportionality",
    label: txt("Core DPIA", "核心 DPIA"),
    title: txt("Necessity & proportionality", "必要性与比例性"),
    text: txt(
      "A compact assessment block aligned with ICO logic and reusable for extensions.",
      "与 ICO 逻辑对齐的紧凑评估模块，可复用于扩展。"
    ),
    fields: [
      { path: "proportionality.lawfulBasis", label: txt("Lawful basis", "合法依据"), type: "select", options: lawfulBasisOptions, helper: txt("The core lawful basis should remain explicit even if screening or extensions add nuance.", "即使筛选或扩展增加了细微差别，核心合法依据也应保持明确。") },
      { path: "proportionality.alternatives", label: txt("Less intrusive alternatives", "侵入性更低的替代方案"), type: "textarea", helper: txt("What was considered, and why was it rejected?", "考虑了哪些替代方案，为何被拒绝？") },
      { path: "proportionality.rightsSupport", label: txt("Support for rights", "权利支持"), type: "textarea", helper: txt("Explain transparency, access, deletion, objection, and escalation routes.", "说明透明度、访问、删除、反对和升级途径。") },
      { path: "proportionality.internationalTransfers", label: txt("International transfers", "国际传输"), type: "textarea", helper: txt("List safeguards or explain why not applicable.", "列出保障措施或说明不适用的原因。") },
    ],
  },
];

const extensionFields = [
  { path: "extensions.children.enabled", label: txt("Children-accessible online service", "儿童可访问的在线服务"), type: "toggle", helper: txt("Turns on the age-appropriate design extension.", "启用适龄设计扩展。") },
  { path: "extensions.children.ageRange", label: txt("Likely user age range", "可能的用户年龄范围"), type: "text", helper: txt("Expected age range where children may realistically access the service.", "儿童可能实际访问该服务的预期年龄范围。") },
  { path: "extensions.children.ageAssurance", label: txt("Age assurance plan", "年龄保证计划"), type: "textarea", helper: txt("Describe any age estimation or age verification approach.", "描述任何年龄估计或年龄验证方法。") },
  { path: "extensions.children.parentalControls", label: txt("Parental controls", "家长控制"), type: "textarea", helper: txt("Describe what exists, what does not, and why.", "描述哪些已有、哪些没有，以及原因。") },
  { path: "extensions.children.codeCompliance", label: txt("Age code alignment", "年龄准则对齐"), type: "textarea", helper: txt("Track how the service addresses best interests, transparency, profiling, geolocation, and nudge techniques.", "追踪服务如何处理最佳利益、透明度、画像、地理位置和助推技术。") },
];

const assetTypeOptions = [
  { value: "Application", label: txt("Application", "应用程序") },
  { value: "Internal tool", label: txt("Internal tool", "内部工具") },
  { value: "Vendor", label: txt("Vendor", "供应商") },
  { value: "Infrastructure", label: txt("Infrastructure", "基础设施") },
  { value: "Dataset", label: txt("Dataset", "数据集") },
];

const reuseOptions = [
  { value: "Reusable asset", label: txt("Reusable asset", "可复用资产") },
  { value: "Case-specific review", label: txt("Case-specific review", "案例特定审查") },
  { value: "Shared dependency", label: txt("Shared dependency", "共享依赖") },
];

const riskTrackOptions = [
  { value: "Rights & principles", label: txt("Rights & principles", "权利与原则") },
  { value: "Classical risk", label: txt("Classical risk", "经典风险") },
  { value: "Security", label: txt("Security", "安全") },
  { value: "Vendor", label: txt("Vendor", "供应商") },
  { value: "Children", label: txt("Children", "儿童") },
];

const controlStatusOptions = [
  { value: "Planned", label: txt("Planned", "已计划") },
  { value: "In progress", label: txt("In progress", "进行中") },
  { value: "Implemented", label: txt("Implemented", "已实施") },
  { value: "Validated", label: txt("Validated", "已验证") },
];

const approvalRoleOptions = [
  { value: "DPO review", label: txt("DPO review", "DPO 审查") },
  { value: "Security sign-off", label: txt("Security sign-off", "安全签核") },
  { value: "Product approval", label: txt("Product approval", "产品审批") },
  { value: "Legal review", label: txt("Legal review", "法律审查") },
  { value: "Prior consultation", label: txt("Prior consultation", "事前咨询") },
];

const approvalDecisionOptions = [
  { value: "Pending", label: txt("Pending", "待定") },
  { value: "Approved", label: txt("Approved", "已批准") },
  { value: "Conditionally approved", label: txt("Conditionally approved", "有条件批准") },
  { value: "Escalated", label: txt("Escalated", "已升级") },
  { value: "Rejected", label: txt("Rejected", "已拒绝") },
];

const assetFields = [
  { key: "name", label: txt("Asset name", "资产名称"), type: "text" },
  { key: "type", label: txt("Type", "类型"), type: "select", options: assetTypeOptions },
  { key: "owner", label: txt("Owner", "负责人"), type: "text" },
  { key: "reuse", label: txt("Reuse posture", "复用姿态"), type: "select", options: reuseOptions },
  { key: "note", label: txt("Assessment note", "评估备注"), type: "textarea", full: true },
];

const riskFields = [
  { key: "name", label: txt("Risk title", "风险标题"), type: "text" },
  { key: "track", label: txt("Track", "追踪"), type: "select", options: riskTrackOptions },
  { key: "likelihood", label: txt("Likelihood", "可能性"), type: "select", options: lowMedHighOptions },
  { key: "severity", label: txt("Severity", "严重性"), type: "select", options: lowMedHighOptions },
  { key: "residual", label: txt("Residual", "残余"), type: "select", options: lowMedHighOptions },
  { key: "owner", label: txt("Owner", "负责人"), type: "text" },
  { key: "note", label: txt("Rationale", "理由"), type: "textarea", full: true },
];

const controlFields = [
  { key: "name", label: txt("Control title", "控制标题"), type: "text" },
  { key: "status", label: txt("Status", "状态"), type: "select", options: controlStatusOptions },
  { key: "owner", label: txt("Owner", "负责人"), type: "text" },
  { key: "due", label: txt("Due date", "到期日"), type: "date" },
  { key: "linkedRisk", label: txt("Linked risk", "关联风险"), type: "text" },
  { key: "evidence", label: txt("Evidence / work item", "证据 / 工作项"), type: "textarea", full: true },
];

const approvalFields = [
  { key: "role", label: txt("Role", "角色"), type: "select", options: approvalRoleOptions },
  { key: "decision", label: txt("Decision", "决定"), type: "select", options: approvalDecisionOptions },
  { key: "owner", label: txt("Reviewer", "审查人"), type: "text" },
  { key: "date", label: txt("Decision date", "决定日期"), type: "date" },
  { key: "note", label: txt("Decision note", "决定备注"), type: "textarea", full: true },
];

const COLLECTION_SCHEMAS = {
  assets: { headingKey: "assetHeading", tagKey: "assetTag", emptyTitleKey: "assetEmptyTitle", emptyTextKey: "assetEmptyText", fields: assetFields },
  risks: { headingKey: "riskHeading", tagKey: "riskTag", emptyTitleKey: "riskEmptyTitle", emptyTextKey: "riskEmptyText", fields: riskFields },
  controls: { headingKey: "controlHeading", tagKey: "controlTag", emptyTitleKey: "controlEmptyTitle", emptyTextKey: "controlEmptyText", fields: controlFields },
  approvals: { headingKey: "approvalHeading", tagKey: "approvalTag", emptyTitleKey: "approvalEmptyTitle", emptyTextKey: "approvalEmptyText", fields: approvalFields },
};

function createTimelineEntry(message, category = "update") {
  return { id: `event-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`, message, category, timestamp: new Date().toISOString() };
}

function createBlankCase(index = 1) {
  return {
    id: `dpia-${Date.now()}-${index}`,
    title: "",
    owner: "",
    product: "",
    jurisdiction: "EU Core",
    status: "Not Started",
    reviewDate: "",
    summary: "",
    version: 1,
    screening: { mustList: "Unknown", largeScaleSensitive: "Unknown", systematicMonitoring: "Unknown", childrenVulnerable: "Unknown", newTechnology: "Unknown", crossSystemMatching: "Unknown" },
    processing: { purpose: "", nature: "", scope: "", context: "" },
    consultation: { dpo: "", users: "", security: "", processors: "" },
    proportionality: { lawfulBasis: "Legitimate interests", alternatives: "", rightsSupport: "", internationalTransfers: "" },
    assets: [],
    risks: [],
    controls: [],
    approvals: [],
    timeline: [createTimelineEntry("Case created.", "create")],
    extensions: { children: { enabled: false, ageRange: "", ageAssurance: "", parentalControls: "", codeCompliance: "" } },
    enabledModules: { extensions: false },
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
    summary: "A collaborative online workspace that lets teenagers publish portfolio items, join moderated projects, and receive mentor feedback across the EU.",
    version: 3,
    screening: { mustList: "No", largeScaleSensitive: "No", systematicMonitoring: "No", childrenVulnerable: "Yes", newTechnology: "Yes", crossSystemMatching: "Yes" },
    processing: { purpose: "Provide a moderated digital studio where younger users can publish creative work, receive structured feedback, and collaborate safely.", nature: "Collect profile data, portfolio content, moderation signals, and support records. Store on a central platform with managed retention and limited vendor sharing.", scope: "EU-wide launch, around 18,000 users in year one, with profile records, content metadata, and moderation logs retained by policy windows.", context: "Users may include children aged 13 to 17. Expectations are high around safety, explainability, and transparent moderation controls." },
    consultation: { dpo: "DPO reviewed the draft architecture and requested stronger documentation on parental controls, complaint escalation, and the timing of age checks.", users: "Early research used moderated interviews with parents, teenagers, and youth coaches. Additional usability feedback is still planned before launch.", security: "Security team recommended stronger session telemetry review, stricter admin access control, and centralized logging for moderation events.", processors: "Cloud host and email processor confirmed standard security commitments. Media processing vendor is still under contract review." },
    proportionality: { lawfulBasis: "Legitimate interests", alternatives: "A fully open publishing flow was rejected. The selected model keeps publication, moderation, and reporting within the same managed workflow.", rightsSupport: "Users can access, edit, report, or request deletion through in-product tools and a staffed support path. Moderation outcomes must be explainable.", internationalTransfers: "Primary hosting is EU-based. Backup vendor review is pending and would require transfer safeguards before activation." },
    assets: [
      { name: "Creator core platform", type: "Application", owner: "Product engineering", reuse: "Reusable asset", note: "Primary platform where profiles, projects, and moderation events live." },
      { name: "Moderation admin console", type: "Internal tool", owner: "Trust & safety", reuse: "Case-specific review", note: "Back-office workflow for reviewer triage, escalation, and evidence capture." },
    ],
    risks: [
      { name: "Underage user expectations are not reflected in moderation and profiling choices", track: "Rights & principles", likelihood: "Medium", severity: "High", residual: "Medium", owner: "DPO + Product", note: "Children-facing defaults and explainability remain the principal uncertainty." },
      { name: "Support vendors gain broader access than necessary through shared investigation data", track: "Security", likelihood: "Medium", severity: "Medium", residual: "Low", owner: "Security", note: "Vendor-side evidence access must remain role-scoped and time-limited." },
    ],
    controls: [
      { name: "Three-step transparency model", status: "In progress", owner: "Legal", due: "2026-04-15", linkedRisk: "Underage user expectations are not reflected in moderation and profiling choices", evidence: "Draft youth-facing notices and parent FAQ." },
      { name: "Role-scoped moderation evidence access", status: "Planned", owner: "Engineering", due: "2026-05-01", linkedRisk: "Support vendors gain broader access than necessary through shared investigation data", evidence: "Architecture work item DP-84." },
    ],
    approvals: [
      { role: "DPO review", decision: "Conditionally approved", owner: "Internal DPO", date: "2026-03-10", note: "Proceed if parental-control language and moderation explanation are tightened before launch." },
      { role: "Security sign-off", decision: "Pending", owner: "Security architecture", date: "2026-03-18", note: "Awaiting updated access-control design and logging evidence." },
    ],
    timeline: [
      createTimelineEntry("Sample case loaded for product review.", "create"),
      createTimelineEntry("Children extension enabled.", "update"),
      createTimelineEntry("Status moved into DPO Review.", "workflow"),
    ],
    extensions: { children: { enabled: true, ageRange: "13-17", ageAssurance: "Soft age estimation during onboarding plus parent / guardian escalation paths for selected support events. Stronger checks remain optional pending launch review.", parentalControls: "No universal parental dashboard. Parent / guardian support route exists for account concerns and moderated intervention.", codeCompliance: "Best interests, transparency, default settings, profiling, and geolocation are tracked as explicit review headings in launch governance." } },
    enabledModules: { extensions: true },
    updatedAt: new Date().toISOString(),
  };
}

function normalizeCase(raw, index = 1) {
  const base = createBlankCase(index);
  return {
    ...base,
    ...raw,
    screening: { ...base.screening, ...(raw.screening || {}) },
    processing: { ...base.processing, ...(raw.processing || {}) },
    consultation: { ...base.consultation, ...(raw.consultation || {}) },
    proportionality: { ...base.proportionality, ...(raw.proportionality || {}) },
    extensions: { children: { ...base.extensions.children, ...((raw.extensions && raw.extensions.children) || {}) } },
    enabledModules: { extensions: false, ...((raw.enabledModules) || {}) },
    assets: Array.isArray(raw.assets) ? raw.assets : [],
    risks: Array.isArray(raw.risks) ? raw.risks : [],
    controls: Array.isArray(raw.controls) ? raw.controls : [],
    approvals: Array.isArray(raw.approvals) ? raw.approvals : [],
    timeline: Array.isArray(raw.timeline) ? raw.timeline : base.timeline,
  };
}

function migrateState(parsed) {
  if ("currentCaseId" in parsed && !("ui" in parsed)) {
    return {
      cases: (parsed.cases || []).map((c, i) => normalizeCase(c, i + 1)),
      trash: Array.isArray(parsed.deletedCases) ? parsed.deletedCases.map((c, i) => normalizeCase(c, i + 1)) : [],
      meta: { language: parsed.language || "en", savedAt: "" },
      ui: { activeCaseId: parsed.currentCaseId || "", rowActionId: "", overviewId: "", detailVisible: false },
    };
  }
  return {
    cases: (parsed.cases || []).map((c, i) => normalizeCase(c, i + 1)),
    trash: (parsed.trash || []).map((c, i) => normalizeCase(c, i + 1)),
    meta: { language: "en", savedAt: "", ...(parsed.meta || {}) },
    ui: { activeCaseId: "", rowActionId: "", overviewId: "", detailVisible: false, ...(parsed.ui || {}) },
  };
}

function createInitialState() {
  return {
    cases: [],
    trash: [],
    meta: { language: "en", savedAt: "" },
    ui: { activeCaseId: "", rowActionId: "", overviewId: "", detailVisible: false },
  };
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return migrateState(parsed);
    } catch (e) {
      console.warn("Failed to parse saved DPIA state", e);
    }
  }
  const sample = createSampleCase();
  const s = createInitialState();
  s.cases = [sample];
  s.ui.activeCaseId = sample.id;
  return s;
}

let state = loadState();
let renderedDetailKey = "";

function getActiveCase() {
  return state.cases.find((c) => c.id === state.ui.activeCaseId) || state.cases[0] || null;
}

function persistState(message, skipRender = false) {
  const active = getActiveCase();
  if (active) active.updatedAt = new Date().toISOString();
  state.meta.savedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (!skipRender) render();
}

function setByPath(target, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  let ref = target;
  keys.forEach((k) => { ref = ref[k]; });
  ref[last] = value;
}

function getByPath(target, path) {
  return path.split(".").reduce((acc, k) => acc[k], target);
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function formatDateTime(iso) {
  if (!iso) return t("notSavedYet");
  return new Date(iso).toLocaleString();
}

function screeningResult(screening) {
  const yesCount = Object.values(screening).filter((v) => v === "Yes").length;
  if (screening.mustList === "Yes") return { title: t("screeningRequired"), body: t("screeningRequiredBody"), pill: t("screeningPillRequired") };
  if (yesCount >= 2) return { title: t("screeningStrongSignal"), body: t("screeningStrongSignalBody"), pill: t("screeningPillStrong") };
  if (yesCount === 1) return { title: t("screeningNeedsReview"), body: t("screeningNeedsReviewBody"), pill: t("screeningPillReview") };
  return { title: t("screeningLowTrigger"), body: t("screeningLowTriggerBody"), pill: t("screeningPillLow") };
}

function completionScore(caseData) {
  const vals = [
    caseData.title, caseData.owner, caseData.product, caseData.summary,
    caseData.processing.purpose, caseData.processing.nature, caseData.processing.scope, caseData.processing.context,
    caseData.consultation.dpo, caseData.proportionality.alternatives, caseData.proportionality.rightsSupport,
    caseData.risks.length > 0 ? "yes" : "", caseData.controls.length > 0 ? "yes" : "", caseData.approvals.length > 0 ? "yes" : "",
  ];
  return Math.round((vals.filter(Boolean).length / vals.length) * 100);
}

function riskSignal(caseData) {
  const score = caseData.risks.reduce((sum, r) => {
    const sev = { Low: 1, Medium: 2, High: 3 }[r.severity] || 1;
    const lik = { Low: 1, Medium: 2, High: 3 }[r.likelihood] || 1;
    return sum + sev * lik;
  }, 0);
  if (score >= 12) return t("riskHigh");
  if (score >= 6) return t("riskModerate");
  return t("riskControlled");
}

function approvalSignal(caseData) {
  const pending = caseData.approvals.filter((a) => a.decision === "Pending").length;
  if (!caseData.approvals.length) return t("noRecords");
  if (pending > 0) return t("nPending", { n: pending });
  return t("logged");
}

function displayTitle(caseData) { return caseData.title || t("untitledDpia"); }
function displayProduct(caseData) { return caseData.product || t("unassignedProduct"); }
function displayOwner(caseData) { return caseData.owner || t("noOwnerYet"); }

function computeStatusCounts(cases) {
  const notStarted = cases.filter((c) => c.status === "Not Started").length;
  const completed = cases.filter((c) => ["Approved", "Published / Operational", "Archived"].includes(c.status)).length;
  const inProgress = cases.length - notStarted - completed;
  return { notStarted, inProgress, completed };
}

function groupByProduct(cases) {
  const map = {};
  cases.forEach((c) => {
    const key = c.product || t("unassignedProduct");
    map[key] = (map[key] || 0) + 1;
  });
  return map;
}

function pushTimeline(caseData, message, category = "update") {
  caseData.timeline.unshift(createTimelineEntry(message, category));
  caseData.timeline = caseData.timeline.slice(0, 24);
}

function renderSelectOptions(options, currentValue) {
  return options.map((o) => `<option value="${o.value}" ${o.value === currentValue ? "selected" : ""}>${escapeHtml(tr(o.label))}</option>`).join("");
}

function renderControl(field, value) {
  if (field.type === "textarea") {
    return `<textarea class="field-textarea" data-path="${field.path}" placeholder="${escapeHtml(tr(field.helper))}">${value || ""}</textarea>`;
  }
  if (field.type === "select") {
    return `<select class="field-select" data-path="${field.path}">${renderSelectOptions(field.options, value)}</select>`;
  }
  if (field.type === "toggle") {
    return `<select class="field-select" data-path="${field.path}"><option value="false" ${!value ? "selected" : ""}>${currentLang() === "zh" ? "禁用" : "Disabled"}</option><option value="true" ${value ? "selected" : ""}>${currentLang() === "zh" ? "启用" : "Enabled"}</option></select>`;
  }
  return `<input class="field-control" data-path="${field.path}" type="${field.type}" value="${escapeHtml(value || "")}" />`;
}

function renderCollectionField(collectionKey, index, field, value) {
  const cls = field.full ? " field-card--full" : "";
  if (field.type === "textarea") {
    return `<div class="field-group${cls}"><label>${escapeHtml(tr(field.label))}</label><textarea class="field-textarea" data-collection="${collectionKey}" data-index="${index}" data-key="${field.key}">${value || ""}</textarea></div>`;
  }
  if (field.type === "select") {
    return `<div class="field-group"><label>${escapeHtml(tr(field.label))}</label><select class="field-select" data-collection="${collectionKey}" data-index="${index}" data-key="${field.key}">${renderSelectOptions(field.options, value)}</select></div>`;
  }
  return `<div class="field-group"><label>${escapeHtml(tr(field.label))}</label><input class="field-control" data-collection="${collectionKey}" data-index="${index}" data-key="${field.key}" type="${field.type}" value="${escapeHtml(value || "")}" /></div>`;
}

function bindFieldControls(container, caseData) {
  container.querySelectorAll("[data-path]").forEach((el) => {
    const evt = el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(evt, (e) => {
      let val = e.target.value;
      if (e.target.dataset.path === "extensions.children.enabled") val = val === "true";
      setByPath(caseData, e.target.dataset.path, val);
      persistState(t("draftUpdated"));
    });
  });
}

function bindCollectionControls(containerId, collectionKey) {
  const container = document.getElementById(containerId);
  const caseData = getActiveCase();
  container.querySelectorAll("[data-collection]").forEach((el) => {
    const evt = el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(evt, (e) => {
      caseData[collectionKey][Number(e.target.dataset.index)][e.target.dataset.key] = e.target.value;
      persistState(t("draftUpdated"));
    });
  });
  container.querySelectorAll("[data-remove-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      caseData[collectionKey].splice(Number(btn.dataset.removeIndex), 1);
      pushTimeline(caseData, `${t(COLLECTION_SCHEMAS[collectionKey].headingKey)} removed.`, "update");
      persistState(t("draftUpdated"));
    });
  });
}

function renderLanguageSwitch() {
  const langEn = document.getElementById("langEn");
  const langZh = document.getElementById("langZh");
  langEn.textContent = t("languageEnglish");
  langZh.textContent = t("languageChinese");
  langEn.classList.toggle("active", currentLang() === "en");
  langZh.classList.toggle("active", currentLang() === "zh");
  langEn.parentElement.dataset.activeIndex = currentLang() === "en" ? "0" : "1";
}

function renderTopnavText() {
  document.getElementById("toolBrandName").textContent = t("brandName");
  document.getElementById("toolBrandTag").textContent = t("brandTag");
  document.getElementById("loadSampleButton").textContent = t("loadSample");
  document.getElementById("saveButton").textContent = t("saveDraft");
  document.getElementById("exportJsonButton").textContent = t("exportJson");
  document.getElementById("trashLabel").textContent = t("trashLabel");
  document.getElementById("trashSectionTitle").textContent = t("trashSectionTitle");
}

function renderTrash() {
  document.getElementById("trashCount").textContent = state.trash.length;
  const trashList = document.getElementById("trashList");
  if (!state.trash.length) {
    trashList.innerHTML = `<p class="trash-item__meta">${t("trashEmpty")}</p>`;
    return;
  }
  trashList.innerHTML = state.trash.map((c) => `
    <div class="trash-item">
      <strong>${escapeHtml(displayTitle(c))}</strong>
      <p class="trash-item__meta">${escapeHtml(displayProduct(c))} · ${escapeHtml(displayOwner(c))}</p>
      <button class="button button--ghost button--small" type="button" data-restore-id="${c.id}">${t("restore")}</button>
    </div>`).join("");
  trashList.querySelectorAll("[data-restore-id]").forEach((btn) => {
    btn.addEventListener("click", () => restoreCase(btn.dataset.restoreId));
  });
}

function renderStaticText() {
  document.documentElement.lang = currentLang();
  document.title = t("documentTitle");
  const setText = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = t(key); };
  setText("dashboardLabel", "dashboardLabel");
  setText("dashboardHeading", "dashboardHeading");
  setText("dashboardText", "dashboardText");
  setText("distributionLabel", "distributionLabel");
  setText("distributionHeading", "distributionHeading");
  setText("distributionProductsLabel", "distributionProductsLabel");
  setText("distributionStatusLabel", "distributionStatusLabel");
  setText("listLabel", "listLabel");
  setText("listHeading", "listHeading");
  setText("listText", "listText");
  setText("thSeq", "tableSeq");
  setText("thName", "tableName");
  setText("thProduct", "tableProduct");
  setText("thOwner", "tableOwner");
  setText("thUpdated", "tableUpdated");
  setText("thCompletion", "tableCompletion");
  setText("emptyWorkbenchText", "emptyWorkbench");
  setText("newAssessmentLabel", "newAssessment");
  setText("detailLabel", "detailLabel");
  setText("exportMarkdownLabel", "exportMarkdown");
  setText("printLabel", "printPdf");
  setText("advanceStateLabel", "advanceState");
  setText("profileLabel", "profileLabel");
  setText("profileHeading", "profileHeading");
  setText("profileText", "profileText");
  setText("flowLabel", "flowLabel");
  setText("flowHeading", "flowHeading");
  setText("screeningLabel", "screeningLabel");
  setText("screeningHeading", "screeningHeading");
  setText("screeningText", "screeningText");
  setText("screeningOutcomeLabel", "screeningOutcomeLabel");
  setText("coreDpiaLabel", "coreDpiaLabel");
  setText("coreDpiaHeading", "coreDpiaHeading");
  setText("coreDpiaText", "coreDpiaText");
  setText("assetsLabel", "assetsLabel");
  setText("assetsHeading", "assetsHeading");
  setText("assetsText", "assetsText");
  setText("addAssetLabel", "addAsset");
  setText("riskControlsLabel", "riskControlsLabel");
  setText("riskControlsHeading", "riskControlsHeading");
  setText("riskControlsText", "riskControlsText");
  setText("riskRegisterLabel", "riskRegisterLabel");
  setText("riskRegisterHeading", "riskRegisterHeading");
  setText("addRiskLabel", "addRisk");
  setText("controlPlanLabel", "controlPlanLabel");
  setText("controlPlanHeading", "controlPlanHeading");
  setText("addControlLabel", "addControl");
  setText("extensionsLabel", "extensionsLabel");
  setText("extensionsHeading", "extensionsHeading");
  setText("extensionsText", "extensionsText");
  setText("approvalsLabel", "approvalsLabel");
  setText("approvalsHeading", "approvalsHeading");
  setText("approvalsText", "approvalsText");
  setText("approvalLogLabel", "approvalLogLabel");
  setText("approvalLogHeading", "approvalLogHeading");
  setText("addApprovalLabel", "addApproval");
  setText("activityLabel", "activityLabel");
  setText("activityHeading", "activityHeading");
  setText("reviewLabel", "reviewLabel");
  setText("reviewHeading", "reviewHeading");
  setText("reviewText", "reviewText");
  setText("snapshotLabel", "snapshotLabel");
  setText("closeOverviewLabel", "closeOverview");
  setText("snapshotAssessmentLabel", "snapshotAssessmentLabel");
  setText("snapshotProductLabel", "snapshotProductLabel");
  setText("snapshotOwnerLabel", "snapshotOwnerLabel");
  setText("snapshotUpdatedLabel", "snapshotUpdatedLabel");
  setText("snapshotCompletionLabel", "snapshotCompletionLabel");
  setText("snapshotScreeningLabel", "snapshotScreeningLabel");
  setText("modulePickerLabel", "modulePickerLabel");
}

function renderDashboard() {
  const total = state.cases.length;
  const products = [...new Set(state.cases.map((c) => c.product).filter(Boolean))];
  const avgCompletion = total === 0 ? 0 : Math.round(state.cases.reduce((s, c) => s + completionScore(c), 0) / total);
  const pendingApprovals = state.cases.filter((c) => c.approvals.some((a) => a.decision === "Pending")).length;

  const metrics = [
    { label: t("metricTotalLabel"), value: total, text: t("metricTotalText") },
    { label: t("metricCoverageLabel"), value: products.length, text: t("metricCoverageText") },
    { label: t("metricCompletionLabel"), value: `${avgCompletion}%`, text: t("metricCompletionText") },
    { label: t("metricPendingLabel"), value: pendingApprovals, text: t("metricPendingText") },
  ];

  document.getElementById("metricGrid").innerHTML = metrics.map((m) => `
    <article class="metric-card">
      <span class="summary-card__label">${escapeHtml(m.label)}</span>
      <strong>${m.value}</strong>
      <p>${escapeHtml(m.text)}</p>
    </article>`).join("");

  const productCounts = groupByProduct(state.cases);
  document.getElementById("productDistribution").innerHTML = Object.entries(productCounts).map(([name, count]) => `
    <span class="distribution-pill"><span>${escapeHtml(name)}</span><strong>${count}</strong></span>`).join("");

  const counts = computeStatusCounts(state.cases);
  const bars = [
    { label: currentLang() === "zh" ? "未开始" : "Not started", count: counts.notStarted },
    { label: currentLang() === "zh" ? "进行中" : "In progress", count: counts.inProgress },
    { label: currentLang() === "zh" ? "已完成" : "Completed", count: counts.completed },
  ];
  document.getElementById("statusDistribution").innerHTML = bars.map((b) => {
    const pct = total === 0 ? 0 : Math.round((b.count / total) * 100);
    return `<div class="status-meter"><div class="status-meter__head"><span>${escapeHtml(b.label)}</span><span>${b.count}</span></div><div class="status-meter__bar"><div class="status-meter__fill" style="width:${pct}%"></div></div></div>`;
  }).join("");
}

function renderWorkbench() {
  const tbody = document.getElementById("assessmentTableBody");
  const emptyEl = document.getElementById("emptyWorkbench");

  if (!state.cases.length) {
    tbody.innerHTML = "";
    emptyEl.hidden = false;
    return;
  }
  emptyEl.hidden = true;

  tbody.innerHTML = "";
  state.cases.forEach((c, index) => {
    const row = document.createElement("tr");
    row.className = `assessment-row${c.id === state.ui.activeCaseId ? " is-active" : ""}`;
    row.addEventListener("click", () => selectCase(c.id));
    const comp = completionScore(c);
    row.innerHTML = `
      <td>${index + 1}</td>
      <td><div class="dpia-table__title"><strong>${escapeHtml(displayTitle(c))}</strong><span class="dpia-table__sub">${escapeHtml(statusLabel(c.status))}</span></div></td>
      <td>${escapeHtml(displayProduct(c))}</td>
      <td>${escapeHtml(displayOwner(c))}</td>
      <td>${escapeHtml(formatDateTime(c.updatedAt))}</td>
      <td class="completion-cell"><span class="completion-pill">${comp}%</span></td>`;
    tbody.appendChild(row);

    if (state.ui.rowActionId === c.id) {
      const actionRow = document.createElement("tr");
      actionRow.className = "row-actions";
      const td = document.createElement("td");
      td.colSpan = 6;
      const inner = document.createElement("div");
      inner.className = "row-actions__inner";
      const meta = document.createElement("span");
      meta.className = "row-actions__meta";
      meta.textContent = t("rowSelectedMeta", { seq: index + 1 });
      const buttons = document.createElement("div");
      buttons.className = "row-actions__buttons";
      const overviewBtn = document.createElement("button");
      overviewBtn.className = "button button--secondary";
      overviewBtn.type = "button";
      overviewBtn.textContent = t("rowOverview");
      overviewBtn.addEventListener("click", (e) => { e.stopPropagation(); toggleOverview(c.id); });
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "button button--danger";
      deleteBtn.type = "button";
      deleteBtn.textContent = t("rowDelete");
      deleteBtn.addEventListener("click", (e) => { e.stopPropagation(); deleteCase(c.id); });
      buttons.append(overviewBtn, deleteBtn);
      inner.append(meta, buttons);
      td.appendChild(inner);
      actionRow.appendChild(td);
      tbody.appendChild(actionRow);
    }
  });
}

function renderDetailWorkspace(animate = false) {
  const caseData = getActiveCase();
  const ws = document.getElementById("detailWorkspace");
  const shouldShow = Boolean(caseData && state.ui.detailVisible);

  if (!shouldShow) {
    ws.hidden = true;
    ws.classList.remove("is-visible");
    return;
  }

  const detailKey = caseData.id + ":" + currentLang();
  const needsRebuild = renderedDetailKey !== detailKey;

  if (ws.hidden) {
    ws.hidden = false;
    if (animate) {
      ws.classList.remove("is-visible");
      requestAnimationFrame(() => ws.classList.add("is-visible"));
    } else {
      ws.classList.add("is-visible");
    }
  }

  document.getElementById("detailTitle").textContent = displayTitle(caseData);
  document.getElementById("detailMeta").textContent = `${escapeHtml(displayProduct(caseData))} · ${escapeHtml(displayOwner(caseData))} · v${caseData.version}`;
  document.getElementById("detailStatusBadge").textContent = `v${caseData.version} · ${statusLabel(caseData.status)}`;

  if (needsRebuild) {
    renderedDetailKey = detailKey;
    renderModulePicker(caseData);
    renderProfileGrid(caseData);
    renderLifecycle(caseData);
    renderScreening(caseData);
    renderCoreSections(caseData);
    renderAssets(caseData);
    renderRisks(caseData);
    renderControls(caseData);
    renderExtensions(caseData);
    renderApprovals(caseData);
    renderTimeline(caseData);
    renderReport(caseData);
  }

  const extSection = document.getElementById("moduleExtensions");
  if (extSection) extSection.hidden = !caseData.enabledModules.extensions;

  document.getElementById("saveStatus").textContent = t("draftReady");
}

function renderModulePicker(caseData) {
  const chips = document.getElementById("modulePickerChips");
  const active = caseData.enabledModules.extensions;
  chips.innerHTML = `<button class="module-chip ${active ? "is-active" : ""}" type="button" data-module="extensions">${t("extensionsModule")}</button>`;
  chips.querySelectorAll("[data-module]").forEach((btn) => {
    btn.addEventListener("click", () => toggleModule(btn.dataset.module));
  });
}

function renderProfileGrid(caseData) {
  const grid = document.getElementById("profileGrid");
  grid.innerHTML = profileFields.map((field) => {
    const value = getByPath(caseData, field.path);
    return `
      <article class="field-card ${field.full ? "field-card--full" : ""}">
        <div class="field-card__head">
          <div><h3>${escapeHtml(tr(field.label))}</h3><p class="field-card__helper">${escapeHtml(tr(field.helper))}</p></div>
          <span class="field-tag">Core</span>
        </div>
        ${renderControl(field, value)}
      </article>`;
  }).join("");
  bindFieldControls(grid, caseData);
}

function renderLifecycle(caseData) {
  const flow = document.getElementById("lifecycleFlow");
  flow.innerHTML = STATUS_FLOW.map((item, i) => {
    const active = item.value === caseData.status;
    return `
      <div class="flow-item">
        <span class="flow-item__index ${active ? "is-active" : ""}">${String(i + 1).padStart(2, "0")}</span>
        <div><h3>${escapeHtml(t(item.key))}</h3><p>${active ? t("currentWorkflowState") : t("availableState")}</p></div>
      </div>`;
  }).join("");
}

function renderScreening(caseData) {
  const grid = document.getElementById("screeningGrid");
  grid.innerHTML = screeningQuestions.map((q) => {
    const value = getByPath(caseData, q.path);
    return `
      <article class="field-card">
        <div class="field-card__head">
          <div><h3>${escapeHtml(tr(q.label))}</h3><p class="field-card__helper">${escapeHtml(tr(q.helper))}</p></div>
          <span class="field-tag">Screen</span>
        </div>
        <select class="field-select" data-path="${q.path}">${renderSelectOptions(q.options, value)}</select>
      </article>`;
  }).join("");
  bindFieldControls(grid, caseData);

  const outcome = screeningResult(caseData.screening);
  document.getElementById("screeningOutcomeTitle").textContent = outcome.title;
  document.getElementById("screeningOutcomeText").textContent = outcome.body;
}

function renderCoreSections(caseData) {
  const container = document.getElementById("coreSections");
  container.innerHTML = coreSections.map((section) => `
    <article class="field-card field-card--full">
      <div class="section-heading section-heading--compact">
        <div><p class="section-label">${escapeHtml(tr(section.label))}</p><h3>${escapeHtml(tr(section.title))}</h3></div>
        <p class="section-text">${escapeHtml(tr(section.text))}</p>
      </div>
      <div class="field-grid">
        ${section.fields.map((field) => {
          const value = getByPath(caseData, field.path);
          return `
            <div class="field-card ${field.type === "textarea" ? "field-card--full" : ""}">
              <div class="field-card__head">
                <div><h3>${escapeHtml(tr(field.label))}</h3><p class="field-card__helper">${escapeHtml(tr(field.helper))}</p></div>
                <span class="field-tag">DPIA</span>
              </div>
              ${renderControl(field, value)}
            </div>`;
        }).join("")}
      </div>
    </article>`).join("");
  bindFieldControls(container, caseData);
}

function renderCollectionCards(containerId, collectionKey, caseData) {
  const container = document.getElementById(containerId);
  const schema = COLLECTION_SCHEMAS[collectionKey];
  const items = caseData[collectionKey];

  if (!items.length) {
    container.innerHTML = `<article class="editable-card editable-card--empty"><h3>${t(schema.emptyTitleKey)}</h3><p class="field-card__helper">${t(schema.emptyTextKey)}</p></article>`;
    return;
  }

  container.innerHTML = items.map((item, index) => `
    <article class="editable-card">
      <div class="field-card__head">
        <div><h3>${escapeHtml(item.name || item.role || `${t(schema.headingKey)} ${index + 1}`)}</h3><p class="field-card__helper">${t(schema.headingKey)} ${index + 1}</p></div>
        <div class="editable-card__actions">
          <span class="field-tag">${t(schema.tagKey)}</span>
          <button class="button button--ghost button--small" type="button" data-remove-index="${index}">${t("remove")}</button>
        </div>
      </div>
      <div class="field-grid field-grid--dense">
        ${schema.fields.map((field) => renderCollectionField(collectionKey, index, field, item[field.key])).join("")}
      </div>
    </article>`).join("");
  bindCollectionControls(containerId, collectionKey);
}

function renderAssets(caseData) { renderCollectionCards("assetList", "assets", caseData); }
function renderRisks(caseData) { renderCollectionCards("riskCards", "risks", caseData); }
function renderControls(caseData) { renderCollectionCards("controlCards", "controls", caseData); }
function renderApprovals(caseData) { renderCollectionCards("approvalCards", "approvals", caseData); }

function renderTimeline(caseData) {
  document.getElementById("timelineList").innerHTML = caseData.timeline.map((e) => `
    <article class="timeline-item">
      <div class="timeline-item__dot timeline-item__dot--${e.category}"></div>
      <div><strong>${escapeHtml(e.message)}</strong><p>${new Date(e.timestamp).toLocaleString()}</p></div>
    </article>`).join("");
}

function renderExtensions(caseData) {
  const grid = document.getElementById("extensionGrid");
  grid.innerHTML = extensionFields.map((field) => {
    const value = getByPath(caseData, field.path);
    return `
      <article class="field-card ${field.type === "textarea" ? "field-card--full" : ""}">
        <div class="field-card__head">
          <div><h3>${escapeHtml(tr(field.label))}</h3><p class="field-card__helper">${escapeHtml(tr(field.helper))}</p></div>
          <span class="field-tag">Extension</span>
        </div>
        ${renderControl(field, value)}
      </article>`;
  }).join("");
  bindFieldControls(grid, caseData);
}

function renderReport(caseData) {
  document.getElementById("reportTitle").textContent = displayTitle(caseData);
  const outcome = screeningResult(caseData.screening);
  document.getElementById("reportIntro").textContent = `${caseData.summary || t("noSummaryYet")} ${t("markdownScreening")}: ${outcome.title}. ${statusLabel(caseData.status)}.`;

  const sections = [
    { title: t("reportCoreSummary"), content: caseData.processing.purpose || t("noPurpose") },
    { title: t("reportConsultationPosture"), content: caseData.consultation.dpo || t("dpoNotesPending") },
    { title: t("reportControlsAtGlance"), content: caseData.controls.map((c) => `${c.name} (${c.status})`).join(", ") || t("noControlsEntered") },
    { title: t("reportApprovals"), content: caseData.approvals.map((a) => `${a.role}: ${a.decision}`).join(" | ") || t("noApprovalEntries") },
    { title: t("reportResidualRisk"), content: caseData.risks.map((r) => `${r.name}: ${r.residual}`).join(" | ") || t("noRisksEntered"), full: true },
  ];

  document.getElementById("reportGrid").innerHTML = sections.map((s) => `
    <article class="report-card ${s.full ? "report-card--full" : ""}">
      <p class="section-label">${escapeHtml(s.title)}</p>
      <p class="report-paragraph">${escapeHtml(s.content)}</p>
    </article>`).join("");
}

function renderOverviewModal() {
  const caseData = state.cases.find((c) => c.id === state.ui.overviewId);
  const modal = document.getElementById("overviewModal");
  if (!caseData) {
    modal.classList.remove("is-open");
    modal.hidden = true;
    return;
  }
  modal.hidden = false;
  modal.classList.add("is-open");

  const comp = completionScore(caseData);
  const screening = screeningResult(caseData.screening);

  document.getElementById("modalTitle").textContent = displayTitle(caseData);
  document.getElementById("snapshotAssessment").textContent = displayTitle(caseData);
  document.getElementById("snapshotProduct").textContent = displayProduct(caseData);
  document.getElementById("snapshotOwner").textContent = displayOwner(caseData);
  document.getElementById("snapshotUpdated").textContent = formatDateTime(caseData.updatedAt);
  document.getElementById("snapshotCompletion").textContent = `${comp}%`;
  document.getElementById("snapshotScreening").textContent = screening.pill;

  const signals = [
    { tone: comp >= 75 ? "good" : comp >= 40 ? "warn" : "danger", title: t("signalCompletion"), body: t("completionSummary", { value: comp }) },
    { tone: riskSignal(caseData) === t("riskControlled") ? "good" : riskSignal(caseData) === t("riskModerate") ? "warn" : "danger", title: t("signalRisk"), body: riskSignal(caseData) },
    { tone: approvalSignal(caseData) === t("logged") ? "good" : "warn", title: t("signalApproval"), body: approvalSignal(caseData) },
  ];

  document.getElementById("signalStack").innerHTML = signals.map((s) => `
    <div class="signal-card signal-card--${s.tone}">
      <strong>${escapeHtml(s.title)}</strong>
      <p>${escapeHtml(s.body)}</p>
    </div>`).join("");
}

function render() {
  renderLanguageSwitch();
  renderTopnavText();
  renderStaticText();
  renderTrash();
  renderDashboard();
  renderWorkbench();
  renderDetailWorkspace();
  renderOverviewModal();
}

function selectCase(id) {
  if (state.ui.rowActionId === id) {
    state.ui.activeCaseId = id;
    state.ui.detailVisible = true;
    renderedDetailKey = "";
    render();
    renderDetailWorkspace(true);
    return;
  }
  state.ui.rowActionId = id;
  state.ui.activeCaseId = id;
  render();
}

function createNewCase() {
  const blank = createBlankCase(state.cases.length + 1);
  state.cases.unshift(blank);
  state.ui.activeCaseId = blank.id;
  state.ui.rowActionId = blank.id;
  state.ui.detailVisible = true;
  renderedDetailKey = "";
  persistState(t("created"));
  renderDetailWorkspace(true);
}

function deleteCase(id) {
  const index = state.cases.findIndex((c) => c.id === id);
  if (index === -1) return;
  const removed = state.cases.splice(index, 1)[0];
  state.trash.push(removed);
  if (state.ui.activeCaseId === id) {
    state.ui.activeCaseId = state.cases.length ? state.cases[0].id : "";
    state.ui.detailVisible = false;
    renderedDetailKey = "";
  }
  state.ui.rowActionId = "";
  state.ui.overviewId = "";
  persistState(t("deleted"));
}

function restoreCase(id) {
  const index = state.trash.findIndex((c) => c.id === id);
  if (index === -1) return;
  const restored = state.trash.splice(index, 1)[0];
  state.cases.unshift(restored);
  state.ui.activeCaseId = restored.id;
  persistState(t("restored"));
}

function toggleOverview(id) {
  state.ui.overviewId = state.ui.overviewId === id ? "" : id;
  renderOverviewModal();
}

function closeOverview() {
  state.ui.overviewId = "";
  renderOverviewModal();
}

function advanceStatus() {
  const caseData = getActiveCase();
  if (!caseData) return;
  const values = STATUS_FLOW.map((s) => s.value);
  const idx = values.indexOf(caseData.status);
  const next = Math.min(idx + 1, values.length - 1);
  caseData.status = values[next];
  pushTimeline(caseData, `Status moved to ${caseData.status}.`, "workflow");
  renderedDetailKey = "";
  persistState(t("draftUpdated"));
}

function setLanguage(lang) {
  state.meta.language = lang;
  renderedDetailKey = "";
  persistState(t("languageSwitched"));
}

function checkpointCase() {
  const caseData = getActiveCase();
  if (!caseData) return;
  caseData.version += 1;
  pushTimeline(caseData, `Version ${caseData.version} checkpoint saved.`, "checkpoint");
  renderedDetailKey = "";
  persistState(t("versionSaved", { v: caseData.version }));
}

function toggleModule(moduleKey) {
  const caseData = getActiveCase();
  if (!caseData) return;
  caseData.enabledModules[moduleKey] = !caseData.enabledModules[moduleKey];
  renderedDetailKey = "";
  persistState(t("draftUpdated"));
}

function addAsset() {
  const caseData = getActiveCase();
  if (!caseData) return;
  caseData.assets.push({ name: `${t("assetHeading")} ${caseData.assets.length + 1}`, type: "Application", owner: "", reuse: "Reusable asset", note: "" });
  pushTimeline(caseData, `${t("assetHeading")} added.`, "update");
  renderedDetailKey = "";
  persistState(t("draftUpdated"));
}

function addRisk() {
  const caseData = getActiveCase();
  if (!caseData) return;
  caseData.risks.push({ name: `${t("riskHeading")} ${caseData.risks.length + 1}`, track: "Classical risk", likelihood: "Medium", severity: "Medium", residual: "Medium", owner: "", note: "" });
  pushTimeline(caseData, `${t("riskHeading")} added.`, "update");
  renderedDetailKey = "";
  persistState(t("draftUpdated"));
}

function addControl() {
  const caseData = getActiveCase();
  if (!caseData) return;
  caseData.controls.push({ name: `${t("controlHeading")} ${caseData.controls.length + 1}`, status: "Planned", owner: "", due: "", linkedRisk: "", evidence: "" });
  pushTimeline(caseData, `${t("controlHeading")} added.`, "update");
  renderedDetailKey = "";
  persistState(t("draftUpdated"));
}

function addApproval() {
  const caseData = getActiveCase();
  if (!caseData) return;
  caseData.approvals.push({ role: "DPO review", decision: "Pending", owner: "", date: "", note: "" });
  pushTimeline(caseData, `${t("approvalHeading")} added.`, "workflow");
  renderedDetailKey = "";
  persistState(t("draftUpdated"));
}

function downloadTextFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function buildMarkdown(caseData) {
  const screening = screeningResult(caseData.screening);
  const approvals = caseData.approvals.length ? caseData.approvals.map((a) => `- ${a.role}: ${a.decision} (${a.owner || t("unassigned")}${a.date ? `, ${a.date}` : ""})`).join("\n") : `- ${t("noApprovalEntries")}`;
  const assets = caseData.assets.length ? caseData.assets.map((a) => `- ${a.name} (${a.type})`).join("\n") : `- ${t("assetEmptyTitle")}`;
  const risks = caseData.risks.length ? caseData.risks.map((r) => `- ${r.name} | ${r.track} | L:${r.likelihood} S:${r.severity} Residual:${r.residual}`).join("\n") : `- ${t("riskEmptyTitle")}`;
  const controls = caseData.controls.length ? caseData.controls.map((c) => `- ${c.name} (${c.status})`).join("\n") : `- ${t("controlEmptyTitle")}`;

  return `# ${displayTitle(caseData)}

## ${t("markdownRecord")}
- ${tr(profileFields[1].label)}: ${caseData.owner || t("unassigned")}
- ${tr(profileFields[2].label)}: ${caseData.product || t("notLinked")}
- ${tr(profileFields[3].label)}: ${caseData.jurisdiction}
- ${tr(profileFields[4].label)}: ${statusLabel(caseData.status)}
- Version: ${caseData.version}
- ${tr(profileFields[5].label)}: ${caseData.reviewDate || t("notScheduled")}

## ${t("markdownSummary")}
${caseData.summary || t("noSummaryYet")}

## ${t("markdownScreening")}
- ${t("markdownOutcome")}: ${screening.title}
- ${tr(screeningQuestions[0].label)}: ${caseData.screening.mustList}
- ${tr(screeningQuestions[1].label)}: ${caseData.screening.largeScaleSensitive}
- ${tr(screeningQuestions[2].label)}: ${caseData.screening.systematicMonitoring}
- ${tr(screeningQuestions[3].label)}: ${caseData.screening.childrenVulnerable}
- ${tr(screeningQuestions[4].label)}: ${caseData.screening.newTechnology}
- ${tr(screeningQuestions[5].label)}: ${caseData.screening.crossSystemMatching}

## ${t("markdownProcessingDesc")}
${caseData.processing.purpose || t("noPurpose")}

## ${t("markdownNature")}
${caseData.processing.nature || t("noPurpose")}

## ${t("markdownScope")}
${caseData.processing.scope || t("noPurpose")}

## ${t("markdownContext")}
${caseData.processing.context || t("noPurpose")}

## ${t("markdownConsultation")}
- DPO: ${caseData.consultation.dpo || t("dpoNotesPending")}
- ${tr(coreSections[1].fields[1].label)}: ${caseData.consultation.users || t("dpoNotesPending")}
- ${tr(coreSections[1].fields[2].label)}: ${caseData.consultation.security || t("dpoNotesPending")}
- ${tr(coreSections[1].fields[3].label)}: ${caseData.consultation.processors || t("dpoNotesPending")}

## ${t("markdownNecessity")}
- ${tr(coreSections[2].fields[0].label)}: ${caseData.proportionality.lawfulBasis}
- ${tr(coreSections[2].fields[1].label)}: ${caseData.proportionality.alternatives || t("dpoNotesPending")}
- ${tr(coreSections[2].fields[2].label)}: ${caseData.proportionality.rightsSupport || t("dpoNotesPending")}
- ${tr(coreSections[2].fields[3].label)}: ${caseData.proportionality.internationalTransfers || t("dpoNotesPending")}

## ${t("markdownSupportingAssets")}
${assets}

## ${t("markdownRisks")}
${risks}

## ${t("markdownControls")}
${controls}

## ${t("markdownApprovals")}
${approvals}

## ${t("markdownChildrenExt")}
- ${currentLang() === "zh" ? "启用" : "Enabled"}: ${caseData.extensions.children.enabled ? (currentLang() === "zh" ? "是" : "Yes") : (currentLang() === "zh" ? "否" : "No")}
- ${tr(extensionFields[1].label)}: ${caseData.extensions.children.ageRange || t("notScheduled")}
- ${tr(extensionFields[2].label)}: ${caseData.extensions.children.ageAssurance || t("dpoNotesPending")}
- ${tr(extensionFields[3].label)}: ${caseData.extensions.children.parentalControls || t("dpoNotesPending")}
- ${tr(extensionFields[4].label)}: ${caseData.extensions.children.codeCompliance || t("dpoNotesPending")}
`;
}

function exportJson() {
  downloadTextFile("dpia-toolbox.json", JSON.stringify(state, null, 2), "application/json");
  const caseData = getActiveCase();
  if (caseData) pushTimeline(caseData, "JSON export generated.", "export");
  persistState(t("jsonExported"));
}

function exportMarkdown() {
  const caseData = getActiveCase();
  if (!caseData) return;
  const filename = `${(caseData.title || "dpia-report").toLowerCase().replace(/[^\w]+/g, "-")}.md`;
  downloadTextFile(filename, buildMarkdown(caseData), "text/markdown");
  pushTimeline(caseData, "Markdown export generated.", "export");
  persistState(t("markdownExported"));
}

function printReport() {
  const caseData = getActiveCase();
  if (caseData) pushTimeline(caseData, "Print / PDF view opened.", "export");
  persistState(t("printOpened"));
  window.print();
}

function resetToSample() {
  const lang = state.meta.language;
  const sample = createSampleCase();
  state = createInitialState();
  state.cases = [sample];
  state.ui.activeCaseId = sample.id;
  state.meta.language = lang;
  renderedDetailKey = "";
  persistState(t("sampleLoaded"));
}

document.getElementById("loadSampleButton").addEventListener("click", resetToSample);
document.getElementById("saveButton").addEventListener("click", checkpointCase);
document.getElementById("exportJsonButton").addEventListener("click", exportJson);
document.getElementById("newAssessmentButton").addEventListener("click", createNewCase);
document.getElementById("exportMarkdownButton").addEventListener("click", exportMarkdown);
document.getElementById("printButton").addEventListener("click", printReport);
document.getElementById("advanceStateButton").addEventListener("click", advanceStatus);
document.getElementById("addAssetButton").addEventListener("click", addAsset);
document.getElementById("addRiskButton").addEventListener("click", addRisk);
document.getElementById("addControlButton").addEventListener("click", addControl);
document.getElementById("addApprovalButton").addEventListener("click", addApproval);
document.getElementById("langEn").addEventListener("click", () => setLanguage("en"));
document.getElementById("langZh").addEventListener("click", () => setLanguage("zh"));
document.getElementById("closeOverviewButton").addEventListener("click", closeOverview);
document.getElementById("overviewBackdrop").addEventListener("click", closeOverview);

render();
