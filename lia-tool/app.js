const STORAGE_KEY = "lia-workbench-v3";

const txt = (en, zh) => ({ en, zh });

const uiText = {
  en: {
    documentTitle: "LIA Workbench",
    brandName: "LIA WORKBENCH",
    brandTag: "Multi-assessment legitimate interests workspace",
    languageEnglish: "EN",
    languageChinese: "中文",
    trashLabel: "Trash",
    trashHeading: "Deleted assessments",
    loadSample: "Load sample",
    saveDraft: "Save draft",
    exportJson: "Export JSON",
    exportReport: "Export report",
    printPdf: "Print / PDF",
    draftReady: "Draft ready.",
    draftUpdated: "Draft updated.",
    draftSaved: "Draft saved locally.",
    sampleLoaded: "Sample workbench loaded.",
    jsonExported: "JSON exported.",
    reportExported: "Report exported.",
    languageSwitched: "Language updated.",
    restored: "Assessment restored.",
    deleted: "Assessment moved to trash.",
    created: "New assessment created.",
    dashboardLabel: "Workbench overview",
    dashboardHeading: "LIA portfolio dashboard",
    dashboardText:
      "Monitor total LIA volume, product or service distribution, and overall completion without entering a single assessment.",
    distributionLabel: "Distribution",
    distributionHeading: "Products / services",
    distributionProductsLabel: "Coverage map",
    distributionStatusLabel: "Status mix",
    listLabel: "LIA list",
    listHeading: "Assessment workbench",
    listText:
      "Select an assessment to open its editable workspace, view a top-level posture card, or move it to trash.",
    tableSeq: "No.",
    tableName: "LIA assessment",
    tableProduct: "Product / service",
    tableOwner: "Owner",
    tableUpdated: "Last updated",
    tableCompletion: "Completion",
    newAssessment: "New assessment",
    emptyWorkbench: "No LIA assessments yet. Create the first one to start the workspace.",
    rowOverview: "Overview",
    rowDelete: "Delete",
    rowSelectedMeta: "Selected assessment actions",
    closeOverview: "Close",
    detailLabel: "Assessment detail",
    profileLabel: "Assessment profile",
    profileHeading: "Assessment file",
    profileText:
      "Define scope, owner, product or service, and the baseline record before drafting the LIA itself.",
    flowLabel: "How it works",
    flowHeading: "Decision path",
    flowPurposeTitle: "Purpose test",
    flowPurposeBody: "Describe the benefit, business purpose, public value, and legal or ethical fit.",
    flowNecessityTitle: "Necessity test",
    flowNecessityBody: "Show that the processing is genuinely needed and not easily replaced by a less intrusive route.",
    flowBalancingTitle: "Balancing test",
    flowBalancingBody: "Stress-test expectations, vulnerability, sensitivity, control loss, and available safeguards.",
    flowDecisionTitle: "Decision",
    flowDecisionBody: "Record whether legitimate interests can be relied on, together with justification and review ownership.",
    purposePartLabel: "Part 1",
    purposePartHeading: "Purpose test",
    purposePartText: "Assess whether a real legitimate interest exists behind the processing.",
    necessityPartLabel: "Part 2",
    necessityPartHeading: "Necessity test",
    necessityPartText: "Confirm that the processing is proportionate and not replaceable by a less intrusive route.",
    balancingPartLabel: "Part 3",
    balancingPartHeading: "Balancing test",
    balancingPartText:
      "Consider nature of the data, reasonable expectations, likely impact, and the safeguards you can apply.",
    riskPanelLabel: "Live signal",
    riskPanelHeading: "Balancing snapshot",
    riskScoreLabel: "Risk score",
    safeguardsLabel: "Safeguards in place",
    decisionPartLabel: "Part 4",
    decisionPartHeading: "Decision and sign-off",
    decisionPartText: "Document your conclusion, the reasoning that supports it, and who completed the LIA.",
    reviewLabel: "Review",
    reviewHeading: "LIA report preview",
    reviewText: "Use this as the internal review view before exporting the assessment to a document or case file.",
    reportDecisionStatusLabel: "Decision status",
    reportAssessmentLabel: "Assessment",
    reportConclusionLabel: "Core conclusion",
    reportPurposeLabel: "Purpose test",
    reportNecessityLabel: "Necessity test",
    reportBalancingLabel: "Balancing test",
    reportJustificationLabel: "Justification",
    snapshotLabel: "Snapshot",
    snapshotAssessmentLabel: "Assessment",
    snapshotProductLabel: "Product / service",
    snapshotOwnerLabel: "Owner",
    snapshotUpdatedLabel: "Last updated",
    snapshotCompletionLabel: "Completion",
    snapshotDpiaLabel: "DPIA trigger",
    metricTotalLabel: "LIA volume",
    metricTotalText: "Total assessments currently in the workbench.",
    metricCoverageLabel: "Product / service coverage",
    metricCoverageText: "Distinct products or services with at least one LIA.",
    metricCompletionLabel: "Average completion",
    metricCompletionText: "Portfolio-wide progress across all required LIA fields.",
    metricPendingLabel: "Pending conclusion",
    metricPendingText: "Assessments that still need a lawful-basis conclusion.",
    statusNotStarted: "Not started",
    statusInProgress: "In progress",
    statusCompleted: "Completed",
    statusPendingDecision: "Pending decision",
    statusConditional: "Conditional",
    statusApproved: "Approved",
    statusRejected: "Not suitable",
    signalCompletion: "Completion",
    signalBalancing: "Balancing signal",
    signalDecision: "Decision posture",
    completionSummary: "{value}% of ICO-aligned prompts answered.",
    lowRiskLabel: "Low apparent balancing risk",
    moderateRiskLabel: "Moderate balancing risk",
    elevatedRiskLabel: "Elevated balancing risk",
    decisionPendingLabel: "Decision pending",
    decisionPendingHint: "More evidence is needed across the ICO tests before the conclusion should be relied on.",
    decisionPendingHeading: "Evidence still needed",
    decisionPendingBody: "Complete the missing sections so the legal basis can be defended with a coherent record.",
    decisionYesLabel: "Legitimate interests selected",
    decisionYesHint:
      "The tool reflects a positive conclusion, but the underlying evidence should still be reviewed by privacy or legal owners.",
    decisionYesHeading: "Proceed with recorded rationale",
    decisionYesBody:
      "A positive conclusion is recorded. Confirm that notices, objections, and safeguards are operational before rollout.",
    decisionConditionalLabel: "Conditional reliance",
    decisionConditionalHint:
      "The processing may proceed only if the documented safeguards and conditions are actually implemented.",
    decisionConditionalHeading: "Proceed only with controls",
    decisionConditionalBody:
      "The LIA indicates reliance only if additional controls, limits, or review steps are completed first.",
    decisionNoLabel: "Do not rely on legitimate interests",
    decisionNoHint:
      "The recorded conclusion says this lawful basis should not be used for the activity as currently designed.",
    decisionNoHeading: "Rework the processing or choose another basis",
    decisionNoBody:
      "The LIA result is negative. Reassess the design, controls, or lawful basis before moving forward.",
    decisionReviewLabel: "Human review needed",
    decisionReviewHint: "The decision field is still empty, so the tool cannot state a final lawful-basis conclusion.",
    decisionReviewHeading: "Decision not yet recorded",
    decisionReviewBody: "Record whether legitimate interests can be relied on and document the reasoning.",
    likelyRequired: "Likely required",
    noStrongTrigger: "No strong trigger",
    noSafeguardsYet: "No safeguards selected yet",
    findingNoMajorSignals: "No major balancing-test signals yet. Keep adding context and safeguards.",
    findingSensitiveData: "Sensitive or criminal-offence data increases the case for a DPIA and makes balancing harder.",
    findingVulnerable: "Children or vulnerable individuals are in scope, so fairness expectations are stricter.",
    findingNoRelationship: "There is no clear existing relationship, which weakens reasonable expectations.",
    findingHighImpact: "Potential harm or loss of control is high and needs stronger mitigation or a different lawful basis.",
    findingNoOptOut: "No opt-out is available, reducing the fairness cushion for legitimate interests.",
    findingManySafeguards: "Multiple safeguards are documented, which materially improves the balancing position.",
    balancingSummaryLow:
      "The current balancing signals are relatively supportive, assuming the factual record is accurate.",
    balancingSummaryMedium:
      "The balancing position is mixed and relies on strong transparency, restraint, and evidenced safeguards.",
    balancingSummaryHigh:
      "The balancing position is weak at the moment and may point toward a different lawful basis or a deeper DPIA-led review.",
    balancingSummaryDpia: "The answers also suggest a DPIA screen should be treated seriously.",
    balancingSummaryNoDpia: "No single answer creates a strong automatic DPIA trigger, but that still needs human review.",
    notAssigned: "Not assigned",
    notSavedYet: "Not saved yet",
    untitledLia: "Untitled LIA",
    unassignedProduct: "Unassigned product / service",
    fieldTagNote: "Note",
    fieldTagAnswer: "Answer",
    fieldTagSafeguards: "Safeguards",
    yes: "Yes",
    no: "No",
    partly: "Partly / unsure",
    low: "Low",
    medium: "Medium",
    high: "High",
    limited: "Limited",
    moderate: "Moderate",
    significant: "Significant",
    critical: "Critical",
    professional: "Professional",
    mixed: "Mixed",
    personal: "Personal",
    strong: "Yes, direct and active",
    weak: "Some relationship",
    none: "No",
    someSensitive: "Some special category data",
    criminal: "Criminal offence data",
    someVulnerable: "Some vulnerable individuals",
    conditionalYes: "Yes, with safeguards / conditions",
    selectImportance: "Select importance",
    selectStatus: "Select status",
    selectAnswer: "Select answer",
    selectSensitivity: "Select data sensitivity",
    selectContext: "Select context",
    selectRelationship: "Select relationship",
    selectImpact: "Select impact",
    selectLevel: "Select level",
    selectAvailability: "Select availability",
    selectDecision: "Select decision",
    reportMetaPlaceholder: "Add an owner, review date, and processing summary.",
    purposeSummaryPlaceholder: "Describe the underlying legitimate interest, expected benefit, and downside of not processing.",
    necessitySummaryPlaceholder: "Explain why the activity is necessary and what less intrusive options were considered.",
    decisionSummaryPlaceholder:
      "Add a reasoned conclusion explaining whether legitimate interests can be relied on and under what safeguards.",
    expectedBenefitPrefix: "Expected benefit",
    ifStoppedPrefix: "If stopped",
    necessityLinkClear: "The processing appears linked to the purpose.",
    necessityLinkUnclear: "The processing-to-purpose link is still unclear.",
    necessityProportionateYes: "Proportionality is currently stated as acceptable.",
    necessityProportionateNo: "Proportionality needs stronger evidence.",
    markdownProfile: "Assessment profile",
    markdownProcessingSummary: "Processing summary",
    markdownPurpose: "Purpose test",
    markdownNecessity: "Necessity test",
    markdownBalancing: "Balancing test",
    markdownDecision: "Decision",
    markdownToolNotes: "Tool-generated notes",
    markdownRiskScore: "Risk score",
    markdownDpia: "DPIA trigger indication",
    markdownSummary: "Summary",
    restore: "Restore",
    emptyTrash: "Trash is empty.",
  },
  zh: {
    documentTitle: "LIA 工作台",
    brandName: "LIA 工作台",
    brandTag: "多评估合法利益工作空间",
    languageEnglish: "EN",
    languageChinese: "中文",
    trashLabel: "垃圾箱",
    trashHeading: "已删除评估",
    loadSample: "加载示例",
    saveDraft: "保存草稿",
    exportJson: "导出 JSON",
    exportReport: "导出报告",
    printPdf: "打印 / PDF",
    draftReady: "草稿已就绪。",
    draftUpdated: "草稿已更新。",
    draftSaved: "草稿已保存在本地。",
    sampleLoaded: "示例工作台已加载。",
    jsonExported: "JSON 已导出。",
    reportExported: "报告已导出。",
    languageSwitched: "语言已切换。",
    restored: "评估已恢复。",
    deleted: "评估已移入垃圾箱。",
    created: "新评估已创建。",
    dashboardLabel: "工作台概览",
    dashboardHeading: "LIA 看板",
    dashboardText: "无需进入单份评估，即可查看 LIA 总量、产品或服务分布，以及整体完成度。",
    distributionLabel: "分布",
    distributionHeading: "产品 / 服务",
    distributionProductsLabel: "覆盖分布",
    distributionStatusLabel: "状态分布",
    listLabel: "LIA 列表",
    listHeading: "评估工作台",
    listText: "选择一份评估以打开编辑工作区、查看概览浮层，或将其移入垃圾箱。",
    tableSeq: "序号",
    tableName: "LIA评估名称",
    tableProduct: "产品 / 服务",
    tableOwner: "负责人",
    tableUpdated: "最近更新",
    tableCompletion: "完成度",
    newAssessment: "新建",
    emptyWorkbench: "还没有 LIA 评估。先新建第一份，开始搭建工作台。",
    rowOverview: "概览",
    rowDelete: "删除",
    rowSelectedMeta: "当前选中评估的操作",
    closeOverview: "关闭",
    detailLabel: "评估详情",
    profileLabel: "评估档案",
    profileHeading: "评估档案",
    profileText: "先定义范围、负责人、产品或服务以及基础记录，再进入 LIA 正文撰写。",
    flowLabel: "使用方式",
    flowHeading: "决策路径",
    flowPurposeTitle: "目的测试",
    flowPurposeBody: "说明处理活动带来的利益、业务目的、公共价值，以及法律或伦理适配性。",
    flowNecessityTitle: "必要性测试",
    flowNecessityBody: "证明该处理确有必要，且不存在明显更低侵入性的替代方案。",
    flowBalancingTitle: "平衡测试",
    flowBalancingBody: "审视合理预期、脆弱群体、数据敏感性、控制权损失和可用保护措施。",
    flowDecisionTitle: "结论",
    flowDecisionBody: "记录是否可以依赖合法利益，并写清理由、限制条件和评审归属。",
    purposePartLabel: "第 1 部分",
    purposePartHeading: "目的测试",
    purposePartText: "评估该处理背后是否存在真实、可识别的合法利益。",
    necessityPartLabel: "第 2 部分",
    necessityPartHeading: "必要性测试",
    necessityPartText: "确认该处理与目的相称，且不能轻易被更低侵入性的方式替代。",
    balancingPartLabel: "第 3 部分",
    balancingPartHeading: "平衡测试",
    balancingPartText: "综合考虑数据性质、合理预期、可能影响以及你能提供的保护措施。",
    riskPanelLabel: "实时信号",
    riskPanelHeading: "平衡测试快照",
    riskScoreLabel: "风险分值",
    safeguardsLabel: "已采用的保护措施",
    decisionPartLabel: "第 4 部分",
    decisionPartHeading: "结论与签核",
    decisionPartText: "记录你的结论、支撑该结论的理由，以及谁完成了这份 LIA。",
    reviewLabel: "审阅",
    reviewHeading: "LIA 报告预览",
    reviewText: "可把这里作为内部审阅视图，在导出到正式文档或档案系统前先做一次总览检查。",
    reportDecisionStatusLabel: "结论状态",
    reportAssessmentLabel: "评估信息",
    reportConclusionLabel: "核心结论",
    reportPurposeLabel: "目的测试",
    reportNecessityLabel: "必要性测试",
    reportBalancingLabel: "平衡测试",
    reportJustificationLabel: "结论说明",
    snapshotLabel: "概览",
    snapshotAssessmentLabel: "评估名称",
    snapshotProductLabel: "产品 / 服务",
    snapshotOwnerLabel: "负责人",
    snapshotUpdatedLabel: "最近更新",
    snapshotCompletionLabel: "完成度",
    snapshotDpiaLabel: "DPIA 触发",
    metricTotalLabel: "LIA 数量",
    metricTotalText: "当前工作台中的评估总数。",
    metricCoverageLabel: "产品 / 服务覆盖数",
    metricCoverageText: "至少包含一份 LIA 的产品或服务数量。",
    metricCompletionLabel: "平均完成度",
    metricCompletionText: "全部评估在必填字段上的整体进度。",
    metricPendingLabel: "待结论数量",
    metricPendingText: "尚未形成合法性基础结论的评估数量。",
    statusNotStarted: "未开始",
    statusInProgress: "进行中",
    statusCompleted: "已完成",
    statusPendingDecision: "待结论",
    statusConditional: "有条件成立",
    statusApproved: "可依赖",
    statusRejected: "不宜依赖",
    signalCompletion: "完成度",
    signalBalancing: "平衡信号",
    signalDecision: "决策态势",
    completionSummary: "已回答 {value}% 的 ICO 对齐问题。",
    lowRiskLabel: "平衡风险表面较低",
    moderateRiskLabel: "平衡风险中等",
    elevatedRiskLabel: "平衡风险偏高",
    decisionPendingLabel: "等待结论",
    decisionPendingHint: "在得出可依赖的结论前，还需要补足 ICO 四段测试中的证据。",
    decisionPendingHeading: "还需要更多证据",
    decisionPendingBody: "先补全缺失内容，再形成能经得起审阅的合法性基础记录。",
    decisionYesLabel: "已选择合法利益",
    decisionYesHint: "工具当前显示为正向结论，但仍建议由隐私或法务负责人进行复核。",
    decisionYesHeading: "可继续推进，但需保留理由记录",
    decisionYesBody: "结论为可依赖合法利益。上线前仍应确认告知、异议处理和保护措施已真正落地。",
    decisionConditionalLabel: "有条件依赖",
    decisionConditionalHint: "只有在已记录的保护措施和限制条件真正落实后，处理活动才可继续。",
    decisionConditionalHeading: "仅在控制措施到位时推进",
    decisionConditionalBody: "当前 LIA 仅支持在附加控制、限制或复核动作完成后依赖合法利益。",
    decisionNoLabel: "不应依赖合法利益",
    decisionNoHint: "当前记录的结论是不应将合法利益作为该处理活动的合法性基础。",
    decisionNoHeading: "需重构处理方案或改用其他基础",
    decisionNoBody: "当前 LIA 结果为否定。应在继续前重新评估设计、控制措施或合法性基础。",
    decisionReviewLabel: "仍需人工判断",
    decisionReviewHint: "结论字段尚未填写，因此工具无法给出最终的合法性基础判断。",
    decisionReviewHeading: "尚未记录结论",
    decisionReviewBody: "请明确记录是否可以依赖合法利益，并写下支撑理由。",
    likelyRequired: "很可能需要",
    noStrongTrigger: "未见明显触发项",
    noSafeguardsYet: "尚未选择保护措施",
    findingNoMajorSignals: "目前还没有明显的平衡测试风险信号。继续补充背景和保护措施。",
    findingSensitiveData: "涉及敏感数据或犯罪数据，会明显提高 DPIA 的必要性，也会让平衡测试更难成立。",
    findingVulnerable: "处理对象中包含儿童或其他脆弱个体，因此公平性和合理预期的要求更高。",
    findingNoRelationship: "与个人之间缺少明确既有关系，会削弱其对该处理的合理预期。",
    findingHighImpact: "潜在损害或控制权丧失较高，需要更强的缓释措施，或考虑改用其他合法性基础。",
    findingNoOptOut: "缺少退出机制，会削弱合法利益路径下的公平性缓冲。",
    findingManySafeguards: "已经记录了多项保护措施，这会实质性改善平衡测试结果。",
    balancingSummaryLow: "当前平衡测试信号整体偏支持，但前提是事实记录准确且真实可执行。",
    balancingSummaryMedium: "当前平衡结论较为混合，需要依赖更强的透明度、节制措施和可证据化的保护控制。",
    balancingSummaryHigh: "当前平衡结论较弱，可能需要改用其他合法性基础，或通过 DPIA 进行更深入评估。",
    balancingSummaryDpia: "这些答案也表明，应该认真进行一次 DPIA 筛查。",
    balancingSummaryNoDpia: "目前没有单一答案构成强烈的自动 DPIA 触发，但仍需要人工判断。",
    notAssigned: "未指定",
    notSavedYet: "尚未保存",
    untitledLia: "未命名 LIA",
    unassignedProduct: "未指定产品 / 服务",
    fieldTagNote: "说明",
    fieldTagAnswer: "答案",
    fieldTagSafeguards: "措施",
    yes: "是",
    no: "否",
    partly: "部分 / 不确定",
    low: "低",
    medium: "中",
    high: "高",
    limited: "有限",
    moderate: "中等",
    significant: "显著",
    critical: "关键",
    professional: "职业场景",
    mixed: "混合场景",
    personal: "个人场景",
    strong: "是，且关系直接活跃",
    weak: "存在一定关系",
    none: "没有",
    someSensitive: "涉及部分特殊类别数据",
    criminal: "涉及犯罪违法数据",
    someVulnerable: "涉及部分脆弱群体",
    conditionalYes: "可以，但需满足保护条件",
    selectImportance: "请选择重要程度",
    selectStatus: "请选择状态",
    selectAnswer: "请选择答案",
    selectSensitivity: "请选择敏感程度",
    selectContext: "请选择场景",
    selectRelationship: "请选择关系类型",
    selectImpact: "请选择影响程度",
    selectLevel: "请选择等级",
    selectAvailability: "请选择可用性",
    selectDecision: "请选择结论",
    reportMetaPlaceholder: "补充负责人、评审日期和处理摘要。",
    purposeSummaryPlaceholder: "说明基础合法利益、预期收益，以及若不处理会带来的影响。",
    necessitySummaryPlaceholder: "解释该处理为什么必要，以及考虑过哪些更低侵入性的替代方案。",
    decisionSummaryPlaceholder: "补充说明是否可以依赖合法利益，以及适用的限制和保护措施。",
    expectedBenefitPrefix: "预期收益",
    ifStoppedPrefix: "若无法进行",
    necessityLinkClear: "当前记录显示，该处理与目标之间存在实际关联。",
    necessityLinkUnclear: "当前还不能清晰证明该处理与目标之间的直接关联。",
    necessityProportionateYes: "比例性目前被描述为可接受。",
    necessityProportionateNo: "比例性仍需要更强证据支撑。",
    markdownProfile: "评估档案",
    markdownProcessingSummary: "处理摘要",
    markdownPurpose: "目的测试",
    markdownNecessity: "必要性测试",
    markdownBalancing: "平衡测试",
    markdownDecision: "结论",
    markdownToolNotes: "工具生成说明",
    markdownRiskScore: "风险分值",
    markdownDpia: "DPIA 提示",
    markdownSummary: "摘要",
    restore: "恢复",
    emptyTrash: "垃圾箱为空。",
  },
};

function t(key, values = {}) {
  let template = uiText[currentLang()][key] || key;
  Object.entries(values).forEach(([name, value]) => {
    template = template.replaceAll(`{${name}}`, String(value));
  });
  return template;
}

function tr(value) {
  if (value && typeof value === "object" && "en" in value && "zh" in value) {
    return value[currentLang()];
  }
  return value || "";
}

function yesNoUnknown(placeholderKey) {
  return [
    { value: "", label: txt(uiText.en[placeholderKey], uiText.zh[placeholderKey]) },
    { value: "yes", label: txt(uiText.en.yes, uiText.zh.yes) },
    { value: "partly", label: txt(uiText.en.partly, uiText.zh.partly) },
    { value: "no", label: txt(uiText.en.no, uiText.zh.no) },
  ];
}

const fieldGroups = {
  profile: [
    {
      key: "assessmentTitle",
      label: txt("Assessment title", "评估标题"),
      helper: txt(
        "Name the LIA so legal, privacy, and product teams can all identify it quickly.",
        "给这份 LIA 取一个清晰名称，便于法务、隐私和产品团队快速识别。"
      ),
      type: "text",
      placeholder: txt("Example: B2B customer outreach LIA", "例如：B2B 客户唤回邮件活动 LIA"),
    },
    {
      key: "productService",
      label: txt("Product / service", "产品 / 服务"),
      helper: txt(
        "Which product, service, workflow, or business area does this LIA belong to?",
        "这份 LIA 归属于哪个产品、服务、业务流程或业务线？"
      ),
      type: "text",
      placeholder: txt("Example: Sales outreach platform", "例如：销售触达平台"),
    },
    {
      key: "organisation",
      label: txt("Organisation / team", "组织 / 团队"),
      helper: txt(
        "Who is relying on legitimate interests for this processing?",
        "本次处理由哪个组织或团队主张依赖合法利益？"
      ),
      type: "text",
      placeholder: txt("Example: RevOps, Marketing, Product", "例如：增长运营、市场部、产品团队"),
    },
    {
      key: "owner",
      label: txt("Assessment owner", "评估负责人"),
      helper: txt("Person accountable for drafting and maintaining the LIA.", "负责起草和维护这份 LIA 的人员。"),
      type: "text",
      placeholder: txt("Name", "姓名"),
    },
    {
      key: "reviewDate",
      label: txt("Review date", "评审日期"),
      helper: txt("When was this assessment last checked or approved?", "这份评估最近一次被审阅或批准是在什么时候？"),
      type: "date",
    },
    {
      key: "processingSummary",
      label: txt("Processing summary", "处理摘要"),
      helper: txt(
        "Briefly describe the activity, channel, audience, and business context.",
        "简要描述该处理活动、触达渠道、受众和业务背景。"
      ),
      type: "textarea",
      wide: true,
      placeholder: txt(
        "Explain what data is used, for what purpose, and where the processing happens.",
        "说明使用了哪些数据、出于什么目的、在什么场景下发生处理。"
      ),
    },
    {
      key: "dataSubjects",
      label: txt("Data subjects", "数据主体"),
      helper: txt("Who are the individuals affected by the processing?", "哪些个人会受到该处理活动影响？"),
      type: "textarea",
      placeholder: txt(
        "Customers, prospects, users, employees, partners, etc.",
        "例如：客户、潜在客户、用户、员工、合作伙伴等。"
      ),
    },
    {
      key: "dataCategories",
      label: txt("Data categories", "数据类型"),
      helper: txt("What personal data is involved?", "该处理涉及哪些个人数据？"),
      type: "textarea",
      placeholder: txt(
        "Business contact data, usage data, transaction history, etc.",
        "例如：商务联系方式、使用行为数据、交易记录等。"
      ),
    },
  ],
  purpose: [
    {
      key: "whyProcess",
      label: txt("Why do you want to process the data?", "为什么要处理这些数据？"),
      helper: txt("State the underlying interest with enough detail to be evaluated.", "请足够具体地说明背后的利益或目的，以便进行判断。"),
      type: "textarea",
      wide: true,
    },
    {
      key: "expectedBenefit",
      label: txt("What benefit do you expect to get?", "你预期会获得什么收益？"),
      helper: txt(
        "Commercial, operational, service-quality, fraud-prevention, or security benefits.",
        "可包括商业收益、运营效率、服务质量、反欺诈或安全收益。"
      ),
      type: "textarea",
    },
    {
      key: "thirdPartyBenefit",
      label: txt("Do any third parties benefit?", "是否有第三方也会受益？"),
      helper: txt(
        "Document partner, customer, affiliate, or ecosystem benefit if relevant.",
        "如适用，请记录合作伙伴、客户、关联方或生态系统层面的收益。"
      ),
      type: "textarea",
    },
    {
      key: "publicBenefit",
      label: txt("Are there wider public benefits?", "是否存在更广泛的公共利益？"),
      helper: txt("For example, safety, fraud reduction, accessibility, or research value.", "例如：安全提升、减少欺诈、可访问性改进或研究价值。"),
      type: "textarea",
    },
    {
      key: "benefitImportance",
      label: txt("How important are the identified benefits?", "已识别收益的重要程度如何？"),
      helper: txt(
        "Consider whether the interest is marginal, useful, or business-critical.",
        "请判断该利益是边际性的、实用性的，还是业务关键性的。"
      ),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectImportance, uiText.zh.selectImportance) },
        { value: "limited", label: txt(uiText.en.limited, uiText.zh.limited) },
        { value: "moderate", label: txt(uiText.en.moderate, uiText.zh.moderate) },
        { value: "significant", label: txt(uiText.en.significant, uiText.zh.significant) },
        { value: "critical", label: txt(uiText.en.critical, uiText.zh.critical) },
      ],
    },
    {
      key: "impactIfStopped",
      label: txt("What if the processing could not go ahead?", "如果该处理不能继续，会有什么影响？"),
      helper: txt("Describe the cost, lost value, or operational impact of stopping it.", "描述停止该处理后会产生的成本、损失价值或运营影响。"),
      type: "textarea",
    },
    {
      key: "dataProtectionCompliance",
      label: txt("Complying with specific data protection rules?", "是否遵守特定数据保护规则？"),
      helper: txt("For example, profiling rules, PECR or ePrivacy rules, transparency duties.", "例如画像规则、PECR/ePrivacy 要求、透明度义务等。"),
      type: "select",
      options: yesNoUnknown("selectStatus"),
    },
    {
      key: "otherLawCompliance",
      label: txt("Complying with other relevant laws?", "是否遵守其他相关法律？"),
      helper: txt("Include sector rules, consumer law, employment law, financial rules, etc.", "包括行业规则、消费者保护、劳动法、金融监管等。"),
      type: "select",
      options: yesNoUnknown("selectStatus"),
    },
    {
      key: "codeCompliance",
      label: txt("Complying with guidelines or codes of practice?", "是否遵守相关指南或行业规范？"),
      helper: txt("Reference any internal policy, regulator guidance, or industry code.", "可引用内部政策、监管指引或行业行为准则。"),
      type: "select",
      options: yesNoUnknown("selectStatus"),
    },
    {
      key: "ethicalIssues",
      label: txt("Any ethical issues with the processing?", "该处理是否存在伦理问题？"),
      helper: txt(
        "If there are concerns around manipulation, fairness, opacity, or power imbalance, note them clearly.",
        "若存在操纵、公平性、透明度或权力不对等等顾虑，请明确写出。"
      ),
      type: "textarea",
      wide: true,
    },
  ],
  necessity: [
    {
      key: "helpsPurpose",
      label: txt("Will this processing actually help achieve the purpose?", "该处理是否确实有助于实现目的？"),
      helper: txt("The interest should not be speculative or cosmetic.", "该利益不应只是猜测性的或表面上的。"),
      type: "select",
      options: yesNoUnknown("selectAnswer"),
    },
    {
      key: "isProportionate",
      label: txt("Is the processing proportionate to that purpose?", "该处理与目的相比是否相称？"),
      helper: txt("Check volume, frequency, access scope, channel, and duration.", "考虑处理规模、频率、访问范围、触达方式和持续时间。"),
      type: "select",
      options: yesNoUnknown("selectAnswer"),
    },
    {
      key: "canAvoidProcessing",
      label: txt("Can you achieve the same purpose without the processing?", "不进行该处理能否实现同样目的？"),
      helper: txt("If yes, legitimate interests becomes much harder to justify.", "如果答案为“可以”，那就更难主张合法利益。"),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectAnswer, uiText.zh.selectAnswer) },
        { value: "no", label: txt(uiText.en.no, uiText.zh.no) },
        { value: "partly", label: txt(uiText.en.partly, uiText.zh.partly) },
        { value: "yes", label: txt(uiText.en.yes, uiText.zh.yes) },
      ],
    },
    {
      key: "lessIntrusiveWay",
      label: txt("Can the purpose be achieved with less data or a less intrusive method?", "能否通过更少数据或更低侵入性的方式实现该目的？"),
      helper: txt(
        "Examples: shorter retention, narrower audience, aggregation, opt-in path, or less frequent contact.",
        "例如：缩短保存期、缩小受众范围、做聚合处理、改成自愿加入或降低触达频率。"
      ),
      type: "textarea",
      wide: true,
    },
  ],
  balancing: [
    {
      key: "specialCategoryData",
      label: txt("Special category or criminal offence data involved?", "是否涉及特殊类别数据或犯罪违法数据？"),
      helper: txt("High signal for elevated risk and likely DPIA needs.", "这通常意味着更高风险，也更可能需要 DPIA。"),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectSensitivity, uiText.zh.selectSensitivity) },
        { value: "no", label: txt(uiText.en.no, uiText.zh.no) },
        { value: "some", label: txt(uiText.en.someSensitive, uiText.zh.someSensitive) },
        { value: "criminal", label: txt(uiText.en.criminal, uiText.zh.criminal) },
      ],
    },
    {
      key: "privateData",
      label: txt("Would people consider the data particularly private?", "个人是否可能认为这些数据特别私密？"),
      helper: txt(
        "Financial, location, communications, identity, or high-context behavioral data can all shift expectations.",
        "财务、定位、通信、身份或高语境行为数据都可能改变合理预期。"
      ),
      type: "select",
      options: yesNoUnknown("selectAnswer"),
    },
    {
      key: "vulnerablePeople",
      label: txt("Children or other vulnerable people involved?", "是否涉及儿童或其他脆弱群体？"),
      helper: txt("If yes, the balancing test needs a stronger justification and stronger safeguards.", "如果涉及，这会要求更强的理由和更强的保护措施。"),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectAnswer, uiText.zh.selectAnswer) },
        { value: "no", label: txt(uiText.en.no, uiText.zh.no) },
        { value: "some", label: txt(uiText.en.someVulnerable, uiText.zh.someVulnerable) },
        { value: "yes", label: txt(uiText.en.yes, uiText.zh.yes) },
      ],
    },
    {
      key: "capacityContext",
      label: txt("Is the data about people in a personal or professional capacity?", "数据反映的是个人场景还是职业场景？"),
      helper: txt(
        "Professional-context data may support a different expectation profile than private-context data.",
        "职业场景数据与私人场景数据，通常对应不同的合理预期。"
      ),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectContext, uiText.zh.selectContext) },
        { value: "professional", label: txt(uiText.en.professional, uiText.zh.professional) },
        { value: "mixed", label: txt(uiText.en.mixed, uiText.zh.mixed) },
        { value: "personal", label: txt(uiText.en.personal, uiText.zh.personal) },
      ],
    },
    {
      key: "existingRelationship",
      label: txt("Do you have an existing relationship with the individual?", "与该个人是否存在既有关系？"),
      helper: txt(
        "Existing, recent relationships generally support stronger expectations than cold or indirect collection.",
        "已有且较新的关系，通常比冷启动或间接获取更能支撑合理预期。"
      ),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectRelationship, uiText.zh.selectRelationship) },
        { value: "strong", label: txt(uiText.en.strong, uiText.zh.strong) },
        { value: "weak", label: txt(uiText.en.weak, uiText.zh.weak) },
        { value: "none", label: txt(uiText.en.none, uiText.zh.none) },
      ],
    },
    {
      key: "collectedDirectly",
      label: txt("Was the data collected directly from the individual?", "数据是否直接从个人处收集？"),
      helper: txt("Transparency is usually easier where data came directly from the person.", "如果数据直接来自本人，透明度和预期管理通常更容易。"),
      type: "select",
      options: yesNoUnknown("selectAnswer"),
    },
    {
      key: "thirdPartyTransparency",
      label: txt("If from a third party, were reuse expectations made clear?", "如果数据来自第三方，是否已明确告知后续再利用预期？"),
      helper: txt(
        "State whether the original notice covered reuse by third parties or comparable onward use.",
        "请说明原始告知是否覆盖第三方再利用或类似的后续用途。"
      ),
      type: "textarea",
      wide: true,
    },
    {
      key: "expectationEvidence",
      label: txt("What evidence do you have about expectations?", "你有哪些关于合理预期的证据？"),
      helper: txt("Examples: prior notice, surveys, complaints data, market norms, user testing, customer research.", "例如：既有告知、调研结果、投诉数据、市场惯例、用户测试或客户研究。"),
      type: "textarea",
      wide: true,
    },
    {
      key: "possibleImpacts",
      label: txt("What are the possible impacts on people?", "该处理可能对个人造成哪些影响？"),
      helper: txt(
        "Loss of control, exclusion, embarrassment, distress, bias, spam, unwanted contact, surveillance, discrimination.",
        "例如控制权丧失、排斥、尴尬、压力、偏差、骚扰、被监视或歧视等。"
      ),
      type: "textarea",
      wide: true,
    },
    {
      key: "controlLoss",
      label: txt("Will individuals lose meaningful control over their data?", "个人是否会明显失去对其数据的控制？"),
      helper: txt(
        "Control loss can arise from opaque reuse, broad sharing, profiling, or retention practices.",
        "不透明再利用、广泛共享、画像分析或过长保存都可能造成控制权丧失。"
      ),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectImpact, uiText.zh.selectImpact) },
        { value: "low", label: txt(uiText.en.low, uiText.zh.low) },
        { value: "medium", label: txt(uiText.en.medium, uiText.zh.medium) },
        { value: "high", label: txt(uiText.en.high, uiText.zh.high) },
      ],
    },
    {
      key: "impactSeverity",
      label: txt("Likelihood and severity of impact", "影响发生的可能性与严重程度"),
      helper: txt("Use an overall view combining probability and seriousness.", "请综合考虑发生概率和影响严重度。"),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectLevel, uiText.zh.selectLevel) },
        { value: "low", label: txt(uiText.en.low, uiText.zh.low) },
        { value: "medium", label: txt(uiText.en.medium, uiText.zh.medium) },
        { value: "high", label: txt(uiText.en.high, uiText.zh.high) },
      ],
    },
    {
      key: "objectionLikelihood",
      label: txt("Are some people likely to object or find it intrusive?", "是否有人可能会反对或觉得该处理具有侵入性？"),
      helper: txt("If objection risk is high, explain why you still think the interest can prevail.", "如果异议风险较高，需要说明为什么你仍认为该利益可以优先成立。"),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectLevel, uiText.zh.selectLevel) },
        { value: "low", label: txt(uiText.en.low, uiText.zh.low) },
        { value: "medium", label: txt(uiText.en.medium, uiText.zh.medium) },
        { value: "high", label: txt(uiText.en.high, uiText.zh.high) },
      ],
    },
    {
      key: "comfortableExplain",
      label: txt("Would you be comfortable explaining the processing to individuals?", "你是否愿意直接向个人解释这一处理活动？"),
      helper: txt("A useful fairness sense-check. If not, that is a real warning sign.", "这是一个很有效的公平性检验。如果你不愿意解释，这本身就是风险信号。"),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectAnswer, uiText.zh.selectAnswer) },
        { value: "yes", label: txt(uiText.en.yes, uiText.zh.yes) },
        { value: "partly", label: txt(uiText.en.partly, uiText.zh.partly) },
        { value: "no", label: txt(uiText.en.no, uiText.zh.no) },
      ],
    },
    {
      key: "newOrInnovative",
      label: txt("Is the purpose or method new or innovative?", "该目的或方法是否具有新颖性或创新性？"),
      helper: txt("Novelty often weakens reasonable expectations.", "越新颖的处理方式，通常越不容易被个人合理预期。"),
      type: "select",
      options: yesNoUnknown("selectAnswer"),
    },
    {
      key: "optOutAvailable",
      label: txt("Can you offer an opt-out?", "是否可以提供退出机制？"),
      helper: txt("An opt-out can materially improve fairness, especially in direct marketing and profiling contexts.", "退出机制会显著提升公平性，尤其是在直销或画像场景中。"),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectAvailability, uiText.zh.selectAvailability) },
        { value: "yes", label: txt(uiText.en.yes, uiText.zh.yes) },
        { value: "partial", label: txt(uiText.en.partly, uiText.zh.partly) },
        { value: "no", label: txt(uiText.en.no, uiText.zh.no) },
      ],
    },
    {
      key: "safeguards",
      label: txt("Safeguards to minimise impact", "用于降低影响的保护措施"),
      helper: txt("Select the safeguards you can evidence in practice.", "请选择那些在实际中确实能够证明已实施的保护措施。"),
      type: "checklist",
      wide: true,
      options: [
        { value: "minimisation", label: txt("Data minimisation", "数据最小化") },
        { value: "retention", label: txt("Short retention", "缩短保存期限") },
        { value: "transparency", label: txt("Clear privacy notice", "明确隐私告知") },
        { value: "access-control", label: txt("Restricted access", "限制访问权限") },
        { value: "opt-out", label: txt("Easy opt-out", "便捷退出") },
        { value: "suppression", label: txt("Suppression / do-not-contact list", "屏蔽 / 不联系名单") },
        { value: "human-review", label: txt("Human review", "人工复核") },
        { value: "testing", label: txt("Bias / fairness testing", "偏差 / 公平性测试") },
        { value: "segmentation", label: txt("Audience segmentation", "受众分层") },
      ],
    },
  ],
  decision: [
    {
      key: "canRely",
      label: txt("Can you rely on legitimate interests for this processing?", "该处理是否可以依赖合法利益？"),
      helper: txt("This should reflect the evidence recorded in the three tests above.", "这里的结论应与前三部分记录的证据保持一致。"),
      type: "select",
      options: [
        { value: "", label: txt(uiText.en.selectDecision, uiText.zh.selectDecision) },
        { value: "yes", label: txt(uiText.en.yes, uiText.zh.yes) },
        { value: "conditional", label: txt(uiText.en.conditionalYes, uiText.zh.conditionalYes) },
        { value: "no", label: txt(uiText.en.no, uiText.zh.no) },
      ],
    },
    {
      key: "comments",
      label: txt("Comments / justification", "说明 / 理由"),
      helper: txt("Summarise the rationale, mitigations, and any actions that must happen before launch.", "总结理由、缓释措施，以及上线前必须完成的动作。"),
      type: "textarea",
      wide: true,
    },
    {
      key: "completedBy",
      label: txt("LIA completed by", "LIA 完成者"),
      helper: txt("Record the drafter or approver.", "记录起草人或审批人。"),
      type: "text",
      placeholder: txt("Name and role", "姓名及角色"),
    },
    {
      key: "completedDate",
      label: txt("Completion date", "完成日期"),
      helper: txt("Use the date the conclusion was made or approved.", "填写形成或批准该结论的日期。"),
      type: "date",
    },
  ],
};

Object.entries(fieldGroups).forEach(([groupKey, fields]) => {
  fields.forEach((field) => {
    field.__groupKey = groupKey;
  });
});

const sampleAssessments = [
  createAssessment({
    profile: {
      assessmentTitle: "B2B customer re-engagement email campaign",
      productService: "Growth Outreach Hub",
      organisation: "Growth Marketing",
      owner: "Mia Chen, Privacy Operations Manager",
      reviewDate: "2026-03-15",
      processingSummary:
        "We want to email former trial users and lapsed business customers with product updates, case studies, and a short product reactivation offer.",
      dataSubjects: "Former business trial users, inactive customer admins, dormant paying accounts.",
      dataCategories: "Work email, name, company, last plan, prior product usage, previous engagement with email campaigns.",
    },
    purpose: {
      whyProcess:
        "To reactivate accounts that previously engaged with the service and to grow subscription revenue through proportionate outreach to business contacts.",
      expectedBenefit:
        "Improved retention, reduced acquisition cost, and more relevant communications to people who already know the product.",
      thirdPartyBenefit:
        "Former customers may benefit by hearing about product improvements and lower-friction reactivation options.",
      publicBenefit:
        "No major public benefit, but the outreach supports more efficient software procurement and reduces waste from duplicate onboarding.",
      benefitImportance: "significant",
      impactIfStopped:
        "The team would shift to broader acquisition spend and less targeted channels, increasing cost and reducing relevance.",
      dataProtectionCompliance: "yes",
      otherLawCompliance: "yes",
      codeCompliance: "yes",
      ethicalIssues:
        "The main ethical risk is over-messaging or using stale assumptions about interest. Frequency caps and suppression rules are therefore essential.",
    },
    necessity: {
      helpsPurpose: "yes",
      isProportionate: "yes",
      canAvoidProcessing: "partly",
      lessIntrusiveWay:
        "We could reduce data use by excluding inactive contacts older than 18 months and by avoiding fine-grained behavioral scoring.",
    },
    balancing: {
      specialCategoryData: "no",
      privateData: "no",
      vulnerablePeople: "no",
      capacityContext: "professional",
      existingRelationship: "strong",
      collectedDirectly: "yes",
      thirdPartyTransparency: "Not applicable. The data was collected directly via signup and account activity.",
      expectationEvidence:
        "Historic privacy notices covered service updates and account-related communications. Complaint rate on comparable campaigns has been low.",
      possibleImpacts:
        "Primary impact is nuisance or unwanted marketing contact. No legal or similarly significant effect is expected.",
      controlLoss: "low",
      impactSeverity: "low",
      objectionLikelihood: "medium",
      comfortableExplain: "yes",
      newOrInnovative: "no",
      optOutAvailable: "yes",
      safeguards: ["minimisation", "retention", "transparency", "access-control", "opt-out", "suppression"],
    },
    decision: {
      canRely: "conditional",
      comments:
        "Legitimate interests can be relied on provided the campaign is limited to business-context contacts with a recent relationship, includes a clear opt-out in every message, respects suppression lists, and avoids sensitive inference.",
      completedBy: "Mia Chen, Privacy Operations Manager",
      completedDate: "2026-03-15",
    },
  }),
  createAssessment({
    profile: {
      assessmentTitle: "Behavioural analytics for churn prediction",
      productService: "Customer Intelligence Suite",
      organisation: "Product Analytics",
      owner: "Eric Tan",
      reviewDate: "2026-03-10",
      processingSummary:
        "Assess whether customer usage and plan history can be combined to predict churn and trigger retention playbooks.",
      dataSubjects: "Active workspace admins and billing contacts.",
      dataCategories: "Usage telemetry, plan history, feature activation, support sentiment.",
    },
    purpose: {
      whyProcess: "To identify likely churn and intervene before renewal loss.",
      expectedBenefit: "Higher retention and better support prioritisation.",
      benefitImportance: "moderate",
      impactIfStopped: "The team would rely on broad heuristics and slower manual reviews.",
    },
    necessity: {
      helpsPurpose: "yes",
      isProportionate: "partly",
    },
    balancing: {
      privateData: "partly",
      existingRelationship: "strong",
      collectedDirectly: "yes",
      controlLoss: "medium",
      impactSeverity: "medium",
      comfortableExplain: "partly",
      optOutAvailable: "partial",
      safeguards: ["minimisation", "transparency", "human-review"],
    },
  }),
  createAssessment({
    profile: {
      assessmentTitle: "Partner lead list reuse assessment",
      productService: "Channel Sales",
      organisation: "Sales Ops",
      owner: "Ava Li",
      reviewDate: "2026-03-08",
      processingSummary:
        "Assess whether partner-sourced prospect data can be reused for direct outbound prospecting in the UK and EU.",
      dataSubjects: "Partner-sourced prospects and mid-market commercial contacts.",
    },
    purpose: {
      whyProcess: "To accelerate outbound pipeline using third-party sourced contacts.",
      expectedBenefit: "Faster prospecting throughput.",
    },
    balancing: {
      existingRelationship: "none",
      collectedDirectly: "no",
      newOrInnovative: "partly",
      objectionLikelihood: "high",
      optOutAvailable: "yes",
    },
  }),
];

const elements = {
  saveStatus: document.querySelector("#saveStatus"),
  langEn: document.querySelector("#langEn"),
  langZh: document.querySelector("#langZh"),
  trashCount: document.querySelector("#trashCount"),
  trashList: document.querySelector("#trashList"),
  loadSampleButton: document.querySelector("#loadSampleButton"),
  saveButton: document.querySelector("#saveButton"),
  exportJsonButton: document.querySelector("#exportJsonButton"),
  exportReportButton: document.querySelector("#exportReportButton"),
  printButton: document.querySelector("#printButton"),
  newAssessmentButton: document.querySelector("#newAssessmentButton"),
  metricGrid: document.querySelector("#metricGrid"),
  productDistribution: document.querySelector("#productDistribution"),
  statusDistribution: document.querySelector("#statusDistribution"),
  assessmentTableBody: document.querySelector("#assessmentTableBody"),
  emptyWorkbench: document.querySelector("#emptyWorkbench"),
  detailWorkspace: document.querySelector("#detailWorkspace"),
  detailTitle: document.querySelector("#detailTitle"),
  detailMeta: document.querySelector("#detailMeta"),
  detailStatusBadge: document.querySelector("#detailStatusBadge"),
  profileGrid: document.querySelector("#profileGrid"),
  purposeGrid: document.querySelector("#purposeGrid"),
  necessityGrid: document.querySelector("#necessityGrid"),
  balancingGrid: document.querySelector("#balancingGrid"),
  decisionGrid: document.querySelector("#decisionGrid"),
  riskScoreValue: document.querySelector("#riskScoreValue"),
  riskFindings: document.querySelector("#riskFindings"),
  safeguardPills: document.querySelector("#safeguardPills"),
  reportBanner: document.querySelector("#reportBanner"),
  reportDecisionText: document.querySelector("#reportDecisionText"),
  reportDecisionHint: document.querySelector("#reportDecisionHint"),
  reportAssessmentTitle: document.querySelector("#reportAssessmentTitle"),
  reportAssessmentMeta: document.querySelector("#reportAssessmentMeta"),
  reportConclusionHeading: document.querySelector("#reportConclusionHeading"),
  reportConclusionBody: document.querySelector("#reportConclusionBody"),
  purposeStatus: document.querySelector("#purposeStatus"),
  purposeSummary: document.querySelector("#purposeSummary"),
  necessityStatus: document.querySelector("#necessityStatus"),
  necessitySummary: document.querySelector("#necessitySummary"),
  balancingStatus: document.querySelector("#balancingStatus"),
  balancingSummary: document.querySelector("#balancingSummary"),
  reportCompletedBy: document.querySelector("#reportCompletedBy"),
  decisionSummary: document.querySelector("#decisionSummary"),
  overviewModal: document.querySelector("#overviewModal"),
  overviewBackdrop: document.querySelector("#overviewBackdrop"),
  closeOverviewButton: document.querySelector("#closeOverviewButton"),
  modalTitle: document.querySelector("#modalTitle"),
  snapshotAssessment: document.querySelector("#snapshotAssessment"),
  snapshotProduct: document.querySelector("#snapshotProduct"),
  snapshotOwner: document.querySelector("#snapshotOwner"),
  snapshotUpdated: document.querySelector("#snapshotUpdated"),
  snapshotCompletion: document.querySelector("#snapshotCompletion"),
  snapshotDpia: document.querySelector("#snapshotDpia"),
  signalStack: document.querySelector("#signalStack"),
};

const state = loadState();
let renderedDetailKey = "";

applyStaticTranslations();
bindEvents();
render();

function currentLang() {
  return state.meta.language === "zh" ? "zh" : "en";
}

function createEmptyAssessment() {
  return createAssessment({});
}

function createAssessment(seed) {
  const now = new Date().toISOString();
  return {
    id: `lia-${Math.random().toString(36).slice(2, 10)}`,
    profile: {
      assessmentTitle: "",
      productService: "",
      organisation: "",
      owner: "",
      reviewDate: "",
      processingSummary: "",
      dataSubjects: "",
      dataCategories: "",
      ...(seed.profile || {}),
    },
    purpose: {
      whyProcess: "",
      expectedBenefit: "",
      thirdPartyBenefit: "",
      publicBenefit: "",
      benefitImportance: "",
      impactIfStopped: "",
      dataProtectionCompliance: "",
      otherLawCompliance: "",
      codeCompliance: "",
      ethicalIssues: "",
      ...(seed.purpose || {}),
    },
    necessity: {
      helpsPurpose: "",
      isProportionate: "",
      canAvoidProcessing: "",
      lessIntrusiveWay: "",
      ...(seed.necessity || {}),
    },
    balancing: {
      specialCategoryData: "",
      privateData: "",
      vulnerablePeople: "",
      capacityContext: "",
      existingRelationship: "",
      collectedDirectly: "",
      thirdPartyTransparency: "",
      expectationEvidence: "",
      possibleImpacts: "",
      controlLoss: "",
      impactSeverity: "",
      objectionLikelihood: "",
      comfortableExplain: "",
      newOrInnovative: "",
      optOutAvailable: "",
      safeguards: [],
      ...(seed.balancing || {}),
      safeguards: Array.isArray(seed?.balancing?.safeguards) ? seed.balancing.safeguards : [],
    },
    decision: {
      canRely: "",
      comments: "",
      completedBy: "",
      completedDate: "",
      ...(seed.decision || {}),
    },
    meta: {
      createdAt: now,
      updatedAt: now,
      ...(seed.meta || {}),
    },
  };
}

function createInitialState() {
  return {
    assessments: [],
    trash: [],
    meta: {
      language: "zh",
      savedAt: "",
    },
    ui: {
      activeAssessmentId: "",
      rowActionId: "",
      overviewId: "",
      detailVisible: false,
    },
  };
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw);
    const base = createInitialState();
    return {
      ...base,
      ...parsed,
      assessments: Array.isArray(parsed.assessments) ? parsed.assessments : [],
      trash: Array.isArray(parsed.trash) ? parsed.trash : [],
      meta: { ...base.meta, ...parsed.meta },
      ui: { ...base.ui, ...parsed.ui },
    };
  } catch {
    return createInitialState();
  }
}

function bindEvents() {
  elements.langEn.addEventListener("click", () => setLanguage("en"));
  elements.langZh.addEventListener("click", () => setLanguage("zh"));
  elements.loadSampleButton.addEventListener("click", loadSamples);
  elements.saveButton.addEventListener("click", () => persistState(t("draftSaved")));
  elements.exportJsonButton.addEventListener("click", exportWorkbenchJson);
  elements.exportReportButton.addEventListener("click", exportActiveReport);
  elements.printButton.addEventListener("click", () => window.print());
  elements.newAssessmentButton.addEventListener("click", createNewAssessment);
  elements.overviewBackdrop.addEventListener("click", closeOverview);
  elements.closeOverviewButton.addEventListener("click", closeOverview);
}

function setLanguage(language) {
  state.meta.language = language;
  persistState(t("languageSwitched"), false);
  renderedDetailKey = "";
  applyStaticTranslations();
  render();
}

function loadSamples() {
  state.assessments = sampleAssessments.map((item) => JSON.parse(JSON.stringify(item)));
  state.trash = [];
  state.ui.activeAssessmentId = state.assessments[0]?.id || "";
  state.ui.rowActionId = state.assessments[0]?.id || "";
  state.ui.overviewId = "";
  state.ui.detailVisible = Boolean(state.assessments.length);
  renderedDetailKey = "";
  persistState(t("sampleLoaded"), false);
  render();
}

function createNewAssessment() {
  const assessment = createEmptyAssessment();
  state.assessments.unshift(assessment);
  state.ui.activeAssessmentId = assessment.id;
  state.ui.rowActionId = assessment.id;
  state.ui.overviewId = "";
  state.ui.detailVisible = true;
  renderedDetailKey = "";
  persistState(t("created"), false);
  render();
}

function exportWorkbenchJson() {
  persistState(t("jsonExported"), false);
  downloadFile("lia-workbench.json", JSON.stringify(state, null, 2), "application/json");
}

function exportActiveReport() {
  const assessment = getActiveAssessment();
  if (!assessment) return;
  persistState(t("reportExported"), false);
  downloadFile(`${safeFilename(displayTitle(assessment))}.md`, buildMarkdownReport(assessment), "text/markdown");
}

function closeOverview() {
  state.ui.overviewId = "";
  renderOverviewModal();
}

function persistState(message, rerender = true) {
  state.meta.savedAt = new Date().toISOString();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  elements.saveStatus.textContent = message;
  if (rerender) render();
}

function render() {
  applyStaticTranslations();
  renderDashboard();
  renderTrash();
  renderList();
  renderDetailWorkspace();
  renderOverviewModal();
  updateActionButtons();
  if (!state.meta.savedAt) {
    elements.saveStatus.textContent = t("draftReady");
  }
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang();
  document.title = t("documentTitle");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  elements.langEn.classList.toggle("is-active", currentLang() === "en");
  elements.langZh.classList.toggle("is-active", currentLang() === "zh");
}

function renderDashboard() {
  const total = state.assessments.length;
  const uniqueProducts = [...new Set(state.assessments.map((item) => (item.profile.productService || "").trim()).filter(Boolean))];
  const averageCompletion = total === 0 ? 0 : Math.round(state.assessments.reduce((sum, item) => sum + computeCompletion(item), 0) / total);
  const pendingConclusions = state.assessments.filter((item) => !item.decision.canRely).length;

  const metrics = [
    { label: t("metricTotalLabel"), value: total, text: t("metricTotalText") },
    { label: t("metricCoverageLabel"), value: uniqueProducts.length, text: t("metricCoverageText") },
    { label: t("metricCompletionLabel"), value: `${averageCompletion}%`, text: t("metricCompletionText") },
    { label: t("metricPendingLabel"), value: pendingConclusions, text: t("metricPendingText") },
  ];

  elements.metricGrid.innerHTML = "";
  metrics.forEach((metric) => {
    const card = document.createElement("article");
    card.className = "metric-card";
    card.innerHTML = `
      <span class="summary-card__label">${metric.label}</span>
      <strong>${metric.value}</strong>
      <p>${metric.text}</p>
    `;
    elements.metricGrid.appendChild(card);
  });

  const productCounts = groupByProduct(state.assessments);
  elements.productDistribution.innerHTML = "";
  if (!productCounts.length) {
    const empty = document.createElement("span");
    empty.className = "distribution-pill";
    empty.textContent = t("emptyWorkbench");
    elements.productDistribution.appendChild(empty);
  } else {
    productCounts.forEach(([name, count]) => {
      const pill = document.createElement("span");
      pill.className = "distribution-pill";
      pill.innerHTML = `<span>${name}</span><strong>${count}</strong>`;
      elements.productDistribution.appendChild(pill);
    });
  }

  const statusCounts = computeStatusCounts(state.assessments);
  elements.statusDistribution.innerHTML = "";
  Object.entries(statusCounts).forEach(([statusKey, count]) => {
    const meter = document.createElement("div");
    meter.className = "status-meter";
    const percent = total === 0 ? 0 : Math.round((count / total) * 100);
    meter.innerHTML = `
      <div class="status-meter__head">
        <span>${statusLabel(statusKey)}</span>
        <span>${count}</span>
      </div>
      <div class="status-meter__bar"><div class="status-meter__fill" style="width:${percent}%"></div></div>
    `;
    elements.statusDistribution.appendChild(meter);
  });
}

function renderTrash() {
  elements.trashCount.textContent = String(state.trash.length);
  elements.trashList.innerHTML = "";
  if (!state.trash.length) {
    const empty = document.createElement("div");
    empty.className = "trash-item";
    empty.textContent = t("emptyTrash");
    elements.trashList.appendChild(empty);
    return;
  }

  state.trash.forEach((assessment) => {
    const item = document.createElement("article");
    item.className = "trash-item";
    const title = document.createElement("strong");
    title.textContent = displayTitle(assessment);
    const meta = document.createElement("p");
    meta.className = "trash-item__meta";
    meta.textContent = `${displayProduct(assessment)} • ${displayOwner(assessment)}`;
    const button = document.createElement("button");
    button.className = "button button--ghost";
    button.type = "button";
    button.textContent = t("restore");
    button.addEventListener("click", () => restoreAssessment(assessment.id));
    item.append(title, meta, button);
    elements.trashList.appendChild(item);
  });
}

function restoreAssessment(id) {
  const index = state.trash.findIndex((item) => item.id === id);
  if (index === -1) return;
  const [assessment] = state.trash.splice(index, 1);
  state.assessments.unshift(assessment);
  persistState(t("restored"), false);
  render();
}

function renderList() {
  elements.assessmentTableBody.innerHTML = "";
  elements.emptyWorkbench.hidden = state.assessments.length > 0;
  if (!state.assessments.length) return;

  state.assessments.forEach((assessment, index) => {
    const row = document.createElement("tr");
    row.className = `assessment-row${assessment.id === state.ui.activeAssessmentId ? " is-active" : ""}`;
    row.addEventListener("click", () => selectAssessment(assessment.id));
    const completion = computeCompletion(assessment);

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>
        <div class="lia-table__title">
          <strong>${escapeHtml(displayTitle(assessment))}</strong>
          <span class="lia-table__sub">${escapeHtml(statusLabel(statusKeyForAssessment(assessment)))}</span>
        </div>
      </td>
      <td>${escapeHtml(displayProduct(assessment))}</td>
      <td>${escapeHtml(displayOwner(assessment))}</td>
      <td>${escapeHtml(formatDateTime(assessment.meta.updatedAt))}</td>
      <td class="completion-cell"><span class="completion-pill">${completion}%</span></td>
    `;
    elements.assessmentTableBody.appendChild(row);

    if (state.ui.rowActionId === assessment.id) {
      const actionRow = document.createElement("tr");
      actionRow.className = "row-actions";
      const td = document.createElement("td");
      td.colSpan = 6;
      const meta = document.createElement("span");
      meta.className = "row-actions__meta";
      meta.textContent = t("rowSelectedMeta");
      const buttons = document.createElement("div");
      buttons.className = "row-actions__buttons";

      const overviewButton = document.createElement("button");
      overviewButton.className = "button button--ghost";
      overviewButton.type = "button";
      overviewButton.textContent = t("rowOverview");
      overviewButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleOverview(assessment.id);
      });

      const deleteButton = document.createElement("button");
      deleteButton.className = "button button--danger";
      deleteButton.type = "button";
      deleteButton.textContent = t("rowDelete");
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        deleteAssessment(assessment.id);
      });

      buttons.append(overviewButton, deleteButton);
      const inner = document.createElement("div");
      inner.className = "row-actions__inner";
      inner.append(meta, buttons);
      td.appendChild(inner);
      actionRow.appendChild(td);
      elements.assessmentTableBody.appendChild(actionRow);
    }
  });
}

function selectAssessment(id) {
  state.ui.activeAssessmentId = id;
  state.ui.rowActionId = id;
  state.ui.detailVisible = true;
  renderDetailWorkspace(true);
  renderList();
  renderOverviewModal();
  renderDashboard();
}

function toggleOverview(id) {
  state.ui.overviewId = state.ui.overviewId === id ? "" : id;
  renderOverviewModal();
}

function deleteAssessment(id) {
  const index = state.assessments.findIndex((item) => item.id === id);
  if (index === -1) return;
  const [assessment] = state.assessments.splice(index, 1);
  state.trash.unshift(assessment);
  if (state.ui.activeAssessmentId === id) {
    state.ui.activeAssessmentId = "";
    state.ui.detailVisible = false;
    renderedDetailKey = "";
  }
  if (state.ui.rowActionId === id) state.ui.rowActionId = "";
  if (state.ui.overviewId === id) state.ui.overviewId = "";
  persistState(t("deleted"), false);
  render();
}

function renderDetailWorkspace(animate = false) {
  const assessment = getActiveAssessment();
  const shouldShow = Boolean(assessment && state.ui.detailVisible);

  if (!shouldShow) {
    elements.detailWorkspace.hidden = true;
    elements.detailWorkspace.classList.remove("is-visible");
    updateActionButtons();
    return;
  }

  const renderKey = `${assessment.id}:${currentLang()}`;
  if (renderedDetailKey !== renderKey) {
    renderFieldGroup("profileGrid", "profile", assessment);
    renderFieldGroup("purposeGrid", "purpose", assessment);
    renderFieldGroup("necessityGrid", "necessity", assessment);
    renderFieldGroup("balancingGrid", "balancing", assessment);
    renderFieldGroup("decisionGrid", "decision", assessment);
    renderedDetailKey = renderKey;
  }

  elements.detailTitle.textContent = displayTitle(assessment);
  elements.detailMeta.textContent = `${displayProduct(assessment)} • ${displayOwner(assessment)} • ${formatDateTime(assessment.meta.updatedAt)}`;
  elements.detailStatusBadge.textContent = statusLabel(statusKeyForAssessment(assessment));

  updateDetailPanels(assessment);

  if (elements.detailWorkspace.hidden) {
    elements.detailWorkspace.hidden = false;
    if (animate) {
      elements.detailWorkspace.classList.remove("is-visible");
      requestAnimationFrame(() => elements.detailWorkspace.classList.add("is-visible"));
    } else {
      elements.detailWorkspace.classList.add("is-visible");
    }
  }

  updateActionButtons();
}

function renderFieldGroup(containerId, groupKey, assessment) {
  const container = elements[containerId];
  container.innerHTML = "";
  fieldGroups[groupKey].forEach((field) => {
    const card = document.createElement("article");
    card.className = `field-card${field.wide ? " field-card--full" : ""}`;

    const head = document.createElement("div");
    head.className = "field-card__head";
    const titleWrap = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = tr(field.label);
    const helper = document.createElement("p");
    helper.className = "field-card__helper";
    helper.textContent = tr(field.helper);
    titleWrap.append(title, helper);
    const tag = document.createElement("span");
    tag.className = "field-tag";
    tag.textContent =
      field.type === "textarea" ? t("fieldTagNote") : field.type === "checklist" ? t("fieldTagSafeguards") : t("fieldTagAnswer");
    head.append(titleWrap, tag);
    card.appendChild(head);

    if (field.type === "text" || field.type === "date") {
      const input = document.createElement("input");
      input.className = "field-control";
      input.type = field.type;
      input.value = assessment[groupKey][field.key] || "";
      input.placeholder = tr(field.placeholder);
      input.addEventListener("input", (event) => updateAssessmentField(assessment.id, groupKey, field.key, event.target.value));
      card.appendChild(input);
    }

    if (field.type === "textarea") {
      const textarea = document.createElement("textarea");
      textarea.className = "field-textarea";
      textarea.value = assessment[groupKey][field.key] || "";
      textarea.placeholder = tr(field.placeholder);
      textarea.addEventListener("input", (event) => updateAssessmentField(assessment.id, groupKey, field.key, event.target.value));
      card.appendChild(textarea);
    }

    if (field.type === "select") {
      const select = document.createElement("select");
      select.className = "field-select";
      field.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = tr(option.label);
        optionElement.selected = assessment[groupKey][field.key] === option.value;
        select.appendChild(optionElement);
      });
      select.addEventListener("change", (event) => updateAssessmentField(assessment.id, groupKey, field.key, event.target.value));
      card.appendChild(select);
    }

    if (field.type === "checklist") {
      const wrap = document.createElement("div");
      wrap.className = "pill-wrap";
      const selectedValues = new Set(assessment[groupKey][field.key] || []);
      field.options.forEach((option) => {
        const label = document.createElement("label");
        label.className = "pill-option";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.checked = selectedValues.has(option.value);
        input.addEventListener("change", () => {
          const next = new Set(assessment[groupKey][field.key] || []);
          if (input.checked) next.add(option.value);
          else next.delete(option.value);
          updateAssessmentField(assessment.id, groupKey, field.key, Array.from(next));
        });
        const span = document.createElement("span");
        span.textContent = tr(option.label);
        label.append(input, span);
        wrap.appendChild(label);
      });
      card.appendChild(wrap);
    }

    container.appendChild(card);
  });
}

function updateAssessmentField(id, groupKey, fieldKey, value) {
  const assessment = state.assessments.find((item) => item.id === id);
  if (!assessment) return;
  assessment[groupKey][fieldKey] = value;
  assessment.meta.updatedAt = new Date().toISOString();
  persistState(t("draftUpdated"), false);
  updateComputedViews(assessment);
}

function updateComputedViews(assessment) {
  renderDashboard();
  renderList();
  updateDetailPanels(assessment);
  renderOverviewModal();
}

function updateDetailPanels(assessment) {
  const riskState = computeRiskState(assessment);
  const decisionState = computeDecisionState(assessment, riskState);
  const completion = computeCompletion(assessment);

  elements.riskScoreValue.textContent = String(riskState.score);
  renderRiskFindings(riskState);
  renderSafeguards(assessment);

  elements.reportBanner.classList.remove("report-banner--good", "report-banner--warn", "report-banner--danger");
  elements.reportBanner.classList.add(`report-banner--${decisionState.tone}`);
  elements.reportDecisionText.textContent = decisionState.label;
  elements.reportDecisionHint.textContent = decisionState.hint;
  elements.reportAssessmentTitle.textContent = displayTitle(assessment);
  elements.reportAssessmentMeta.textContent = `${displayProduct(assessment)} • ${displayOwner(assessment)} • ${formatDateTime(assessment.meta.updatedAt)}`;
  elements.reportConclusionHeading.textContent = decisionState.heading;
  elements.reportConclusionBody.textContent = decisionState.body;
  elements.reportCompletedBy.textContent = assessment.decision.completedBy?.trim() || t("notAssigned");
  elements.purposeStatus.textContent = statusTextFromProgress(groupProgress(assessment, "purpose"));
  elements.necessityStatus.textContent = statusTextFromProgress(groupProgress(assessment, "necessity"));
  elements.balancingStatus.textContent = statusTextFromProgress(groupProgress(assessment, "balancing"));
  elements.purposeSummary.textContent = assessment.purpose.whyProcess?.trim()
    ? [assessment.purpose.whyProcess.trim(), sentenceFragment(assessment.purpose.expectedBenefit, t("expectedBenefitPrefix")), sentenceFragment(assessment.purpose.impactIfStopped, t("ifStoppedPrefix"))].filter(Boolean).join(" ")
    : t("purposeSummaryPlaceholder");
  elements.necessitySummary.textContent = assessment.necessity.lessIntrusiveWay?.trim()
    ? [
        assessment.necessity.helpsPurpose === "yes" ? t("necessityLinkClear") : t("necessityLinkUnclear"),
        assessment.necessity.isProportionate === "yes" ? t("necessityProportionateYes") : t("necessityProportionateNo"),
        assessment.necessity.lessIntrusiveWay.trim(),
      ].join(" ")
    : t("necessitySummaryPlaceholder");
  elements.balancingSummary.textContent = riskState.summary;
  elements.decisionSummary.textContent = assessment.decision.comments?.trim() || t("decisionSummaryPlaceholder");
  elements.detailStatusBadge.textContent = `${statusLabel(statusKeyForAssessment(assessment))} • ${completion}%`;
}

function renderRiskFindings(riskState) {
  elements.riskFindings.innerHTML = "";
  const findings = riskState.findings.length ? riskState.findings : [{ level: "low", text: t("findingNoMajorSignals") }];
  findings.forEach((finding) => {
    const item = document.createElement("div");
    item.className = `finding-item finding-item--${finding.level}`;
    item.textContent = finding.text;
    elements.riskFindings.appendChild(item);
  });
}

function renderSafeguards(assessment) {
  elements.safeguardPills.innerHTML = "";
  const selected = assessment.balancing.safeguards || [];
  if (!selected.length) {
    const empty = document.createElement("span");
    empty.className = "chip";
    empty.textContent = t("noSafeguardsYet");
    elements.safeguardPills.appendChild(empty);
    return;
  }

  selected.forEach((value) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = optionLabel("balancing", "safeguards", value);
    elements.safeguardPills.appendChild(chip);
  });
}

function renderOverviewModal() {
  const assessment = state.assessments.find((item) => item.id === state.ui.overviewId);
  if (!assessment) {
    elements.overviewModal.classList.remove("is-open");
    elements.overviewModal.hidden = true;
    return;
  }

  const riskState = computeRiskState(assessment);
  const decisionState = computeDecisionState(assessment, riskState);
  const completion = computeCompletion(assessment);

  elements.overviewModal.hidden = false;
  elements.overviewModal.classList.add("is-open");
  elements.modalTitle.textContent = displayTitle(assessment);
  elements.snapshotAssessment.textContent = displayTitle(assessment);
  elements.snapshotProduct.textContent = displayProduct(assessment);
  elements.snapshotOwner.textContent = displayOwner(assessment);
  elements.snapshotUpdated.textContent = formatDateTime(assessment.meta.updatedAt);
  elements.snapshotCompletion.textContent = `${completion}%`;
  elements.snapshotDpia.textContent = riskState.dpiaNeeded ? t("likelyRequired") : t("noStrongTrigger");
  elements.signalStack.innerHTML = "";

  [
    { tone: completion >= 75 ? "good" : completion >= 40 ? "warn" : "danger", title: t("signalCompletion"), body: t("completionSummary", { value: completion }) },
    { tone: riskState.score <= 2 ? "good" : riskState.score <= 6 ? "warn" : "danger", title: t("signalBalancing"), body: riskState.label },
    { tone: decisionState.tone, title: t("signalDecision"), body: decisionState.hint },
  ].forEach((card) => {
    const item = document.createElement("article");
    item.className = `signal-card signal-card--${card.tone}`;
    const title = document.createElement("strong");
    title.textContent = card.title;
    const body = document.createElement("span");
    body.textContent = card.body;
    item.append(title, body);
    elements.signalStack.appendChild(item);
  });
}

function updateActionButtons() {
  const hasActive = Boolean(getActiveAssessment());
  elements.exportReportButton.disabled = !hasActive;
  elements.printButton.disabled = !hasActive;
}

function computeCompletion(assessment) {
  const total = Object.values(fieldGroups).reduce((sum, fields) => sum + fields.length, 0);
  const filled = Object.entries(fieldGroups).reduce((sum, [groupKey, fields]) => {
    return sum + fields.filter((field) => isFilled(assessment[groupKey][field.key], field.type)).length;
  }, 0);
  return total === 0 ? 0 : Math.round((filled / total) * 100);
}

function groupProgress(assessment, groupKey) {
  const fields = fieldGroups[groupKey];
  const filled = fields.filter((field) => isFilled(assessment[groupKey][field.key], field.type)).length;
  return Math.round((filled / fields.length) * 100);
}

function isFilled(value, type) {
  if (type === "checklist") return Array.isArray(value) && value.length > 0;
  return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
}

function computeRiskState(assessment) {
  const b = assessment.balancing;
  const scoreMap = {
    specialCategoryData: { no: 0, some: 3, criminal: 4 },
    privateData: { yes: 2, partly: 1, no: 0 },
    vulnerablePeople: { no: 0, some: 2, yes: 3 },
    capacityContext: { professional: 0, mixed: 1, personal: 2 },
    existingRelationship: { strong: -1, weak: 1, none: 2 },
    collectedDirectly: { yes: 0, partly: 1, no: 2 },
    newOrInnovative: { yes: 2, partly: 1, no: 0 },
    controlLoss: { low: 0, medium: 2, high: 3 },
    impactSeverity: { low: 0, medium: 2, high: 4 },
    objectionLikelihood: { low: 0, medium: 1, high: 3 },
    comfortableExplain: { yes: -1, partly: 1, no: 3 },
    optOutAvailable: { yes: -1, partial: 0, no: 2 },
  };

  let score = 0;
  Object.entries(scoreMap).forEach(([key, mapping]) => {
    score += mapping[b[key]] || 0;
  });
  score -= Math.min((b.safeguards || []).length, 4);
  score = Math.max(score, 0);

  const findings = [];
  if (b.specialCategoryData === "some" || b.specialCategoryData === "criminal") findings.push({ level: "high", text: t("findingSensitiveData") });
  if (b.vulnerablePeople === "yes" || b.vulnerablePeople === "some") findings.push({ level: "high", text: t("findingVulnerable") });
  if (b.existingRelationship === "none") findings.push({ level: "medium", text: t("findingNoRelationship") });
  if (b.controlLoss === "high" || b.impactSeverity === "high") findings.push({ level: "high", text: t("findingHighImpact") });
  if (b.optOutAvailable === "no") findings.push({ level: "medium", text: t("findingNoOptOut") });
  if ((b.safeguards || []).length >= 4) findings.push({ level: "low", text: t("findingManySafeguards") });

  const dpiaNeeded =
    b.specialCategoryData === "some" ||
    b.specialCategoryData === "criminal" ||
    b.vulnerablePeople === "yes" ||
    b.impactSeverity === "high" ||
    b.controlLoss === "high";

  const label = score <= 2 ? t("lowRiskLabel") : score <= 6 ? t("moderateRiskLabel") : t("elevatedRiskLabel");
  const summary = [score <= 2 ? t("balancingSummaryLow") : score <= 6 ? t("balancingSummaryMedium") : t("balancingSummaryHigh"), dpiaNeeded ? t("balancingSummaryDpia") : t("balancingSummaryNoDpia")].join(" ");
  return { score, findings, dpiaNeeded, label, summary };
}

function computeDecisionState(assessment, riskState) {
  const decision = assessment.decision.canRely;
  const comments = assessment.decision.comments?.trim();
  const ready = groupProgress(assessment, "purpose") >= 60 && groupProgress(assessment, "necessity") >= 60 && groupProgress(assessment, "balancing") >= 60;
  if (!ready) return { tone: "warn", label: t("decisionPendingLabel"), hint: t("decisionPendingHint"), heading: t("decisionPendingHeading"), body: t("decisionPendingBody") };
  if (decision === "yes") return { tone: riskState.score <= 4 ? "good" : "warn", label: t("decisionYesLabel"), hint: t("decisionYesHint"), heading: t("decisionYesHeading"), body: comments || t("decisionYesBody") };
  if (decision === "conditional") return { tone: "warn", label: t("decisionConditionalLabel"), hint: t("decisionConditionalHint"), heading: t("decisionConditionalHeading"), body: comments || t("decisionConditionalBody") };
  if (decision === "no") return { tone: "danger", label: t("decisionNoLabel"), hint: t("decisionNoHint"), heading: t("decisionNoHeading"), body: comments || t("decisionNoBody") };
  return { tone: riskState.score <= 2 ? "good" : riskState.score <= 6 ? "warn" : "danger", label: t("decisionReviewLabel"), hint: t("decisionReviewHint"), heading: t("decisionReviewHeading"), body: t("decisionReviewBody") };
}

function getActiveAssessment() {
  return state.assessments.find((item) => item.id === state.ui.activeAssessmentId);
}

function groupByProduct(items) {
  const counts = new Map();
  items.forEach((assessment) => {
    const name = displayProduct(assessment);
    counts.set(name, (counts.get(name) || 0) + 1);
  });
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
}

function computeStatusCounts(items) {
  return {
    notStarted: items.filter((item) => statusKeyForAssessment(item) === "notStarted").length,
    inProgress: items.filter((item) => statusKeyForAssessment(item) === "inProgress").length,
    completed: items.filter((item) => statusKeyForAssessment(item) === "completed").length,
  };
}

function statusKeyForAssessment(assessment) {
  const completion = computeCompletion(assessment);
  if (completion === 0) return "notStarted";
  if (completion === 100 && assessment.decision.canRely) return "completed";
  return "inProgress";
}

function statusLabel(statusKey) {
  if (statusKey === "notStarted") return t("statusNotStarted");
  if (statusKey === "completed") return t("statusCompleted");
  return t("statusInProgress");
}

function statusTextFromProgress(value) {
  if (value >= 100) return t("statusCompleted");
  if (value > 0) return t("statusInProgress");
  return t("statusNotStarted");
}

function displayTitle(assessment) {
  return assessment.profile.assessmentTitle?.trim() || t("untitledLia");
}

function displayOwner(assessment) {
  return assessment.profile.owner?.trim() || t("notAssigned");
}

function displayProduct(assessment) {
  return assessment.profile.productService?.trim() || t("unassignedProduct");
}

function formatDateTime(value) {
  if (!value) return t("notSavedYet");
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return t("notSavedYet");
  return new Intl.DateTimeFormat(currentLang() === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: currentLang() === "zh" ? "numeric" : "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function optionLabel(groupKey, fieldKey, rawValue) {
  const field = fieldGroups[groupKey].find((item) => item.key === fieldKey);
  const option = field?.options?.find((item) => item.value === rawValue);
  return option ? tr(option.label) : rawValue;
}

function sentenceFragment(value, prefix) {
  return value?.trim() ? `${prefix}: ${value.trim()}` : "";
}

function buildMarkdownReport(assessment) {
  const riskState = computeRiskState(assessment);
  const decisionState = computeDecisionState(assessment, riskState);
  return [
    `# ${displayTitle(assessment)}`,
    "",
    `## ${t("markdownProfile")}`,
    `- ${tr(fieldGroups.profile[1].label)}: ${displayProduct(assessment)}`,
    `- ${tr(fieldGroups.profile[2].label)}: ${assessment.profile.organisation || "-"}`,
    `- ${tr(fieldGroups.profile[3].label)}: ${displayOwner(assessment)}`,
    `- ${tr(fieldGroups.profile[4].label)}: ${assessment.profile.reviewDate || "-"}`,
    "",
    `## ${t("markdownProcessingSummary")}`,
    assessment.profile.processingSummary || "-",
    "",
    `## ${t("markdownPurpose")}`,
    markdownListFromObject(assessment, "purpose"),
    "",
    `## ${t("markdownNecessity")}`,
    markdownListFromObject(assessment, "necessity"),
    "",
    `## ${t("markdownBalancing")}`,
    markdownListFromObject(assessment, "balancing"),
    "",
    `## ${t("markdownDecision")}`,
    markdownListFromObject(assessment, "decision"),
    "",
    `## ${t("markdownToolNotes")}`,
    `- ${t("signalCompletion")}: ${computeCompletion(assessment)}%`,
    `- ${t("signalDecision")}: ${decisionState.label}`,
    `- ${t("signalBalancing")}: ${riskState.label}`,
    `- ${t("markdownRiskScore")}: ${riskState.score}`,
    `- ${t("markdownDpia")}: ${riskState.dpiaNeeded ? t("likelyRequired") : t("noStrongTrigger")}`,
    `- ${t("markdownSummary")}: ${riskState.summary}`,
  ].join("\n");
}

function markdownListFromObject(assessment, groupKey) {
  return fieldGroups[groupKey]
    .map((field) => `- ${tr(field.label)}: ${formatFieldValue(field, assessment[groupKey][field.key])}`)
    .join("\n");
}

function formatFieldValue(field, raw) {
  if (Array.isArray(raw)) return raw.map((value) => optionLabel(field.__groupKey, field.key, value)).join(", ") || "-";
  if (!raw) return "-";
  if (field.type === "select") return optionLabel(field.__groupKey, field.key, raw);
  return raw;
}

function safeFilename(value) {
  const cleaned = value.trim().replace(/[<>:"/\\|?*\x00-\x1F]/g, "").replace(/\s+/g, "-");
  return cleaned || "lia-assessment";
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
