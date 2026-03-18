/* ═══════════════════════════════════════════════════════════
   DPIA TOOLBOX v2.0  —  Single-page assessment workspace
   ═══════════════════════════════════════════════════════════ */

// ── i18n ────────────────────────────────────────────────────

const UI = {
  en: {
    documentTitle: 'DPIA TOOLBOX',
    brandName: 'DPIA TOOLBOX',
    brandTag: 'EDPB-oriented impact assessment workspace',
    dashLabel: 'Workbench overview',
    dashHeading: 'DPIA portfolio dashboard',
    dashText: 'Monitor assessment volume, status distribution, and completion across all cases.',
    listLabel: 'DPIA list',
    listHeading: 'Assessment workbench',
    listText: 'Select a case to edit, preview its posture, or create a new assessment.',
    btnNewDpia: 'New assessment',
    btnTemplate: 'Use template',
    thTitle: 'DPIA assessment',
    thOwner: 'Owner',
    thStatus: 'Status',
    thRisk: 'Risk level',
    thProgress: 'Completion',
    thActions: 'Actions',
    emptyWorkbench: 'No DPIA cases yet. Create the first one to start the workspace.',
    metricTotal: 'Total cases',
    metricTotalText: 'Active DPIA records in this workspace.',
    metricCoverage: 'Avg completion',
    metricCoverageText: 'Average field completion across all cases.',
    metricInProgress: 'In progress',
    metricInProgressText: 'Assessments currently being edited.',
    metricComplete: 'Completed',
    metricCompleteText: 'Assessments that reached 100% completion.',
    meterNotStarted: 'Not started',
    meterInProgress: 'In progress',
    meterComplete: 'Completed',
    editorLabel: 'Assessment detail',
    editorTitle: 'Edit DPIA',
    btnExport: 'Export PDF',
    legBasic: 'Basic information',
    lblTitle: 'Case title',
    lblActivity: 'Processing activity',
    lblOwner: 'Case owner',
    lblJurisdiction: 'Jurisdiction pack',
    lblChildrenEnable: "Enable children's DPIA extension (ICO Annex D)",
    legStep1: 'Step 1 \u2014 Screening criteria',
    hintStep1: 'Check Art. 35 triggers and contextual high-risk signals before opening the full assessment.',
    legStep2: 'Step 2 \u2014 Processing description',
    hintStep2: 'Describe nature, scope, context and purpose of data processing.',
    lblNature: 'Nature of processing',
    lblScope: 'Scope',
    lblContext: 'Context',
    lblPurposes: 'Purposes',
    legStep3: 'Step 3 \u2014 Legal basis & necessity',
    hintStep3: 'Identify lawful basis, necessity and proportionality.',
    lblLegal: 'Legal basis',
    lblNecessity: 'Necessity & proportionality assessment',
    legStep4: 'Step 4 \u2014 Risk identification',
    hintStep4: "Identify, score, and visualise risks to individuals' rights and freedoms.",
    lblRisksId: 'Risks identified',
    lblRiskAssess: 'Risk assessment notes',
    legStep5: 'Step 5 \u2014 Mitigation measures',
    hintStep5: 'Document controls and measures to address identified risks.',
    lblMitigation: 'Mitigation measures',
    lblResidual: 'Residual risk',
    legStep6: 'Step 6 \u2014 DPO / stakeholder consultation',
    hintStep6: 'Capture DPO advice and stakeholder input.',
    lblDpo: 'DPO advice',
    lblStakeholder: 'Stakeholder consultation',
    legStep7: 'Step 7 \u2014 Sign-off & review',
    hintStep7: 'Record approval outcome and schedule next review.',
    lblSignoff: 'Sign-off outcome',
    lblReview: 'Next review date',
    legStep8: "Step 8 \u2014 Children's DPIA extension",
    hintStep8: 'ICO Annex D \u2014 additional assessments for services accessible to children.',
    lblAgeAssurance: 'Age assurance methods',
    lblParental: 'Parental controls',
    lblNudge: 'Nudge techniques',
    hdrAadc: 'AADC standards compliance',
    lblAadcNotes: 'AADC notes',
    hdrAgeRisk: 'Age-group risk assessment',
    lblEquality: 'Equality law considerations',
    btnSave: 'Save draft',
    saveMsg: 'Draft saved.',
    createLabel: 'New assessment',
    createHeading: 'Create DPIA case',
    lblNewTitle: 'Case title',
    lblNewActivity: 'Processing activity',
    lblNewOwner: 'Owner',
    btnCreate: 'Create',
    btnCancelCreate: 'Cancel',
    qvLabel: 'Snapshot',
    qvHeading: 'Case posture',
    tplLabel: 'Templates',
    tplHeading: 'Select a template',
    tplText: 'Pre-built templates with guidance content for common DPIA scenarios.',
    qvTitle: 'Title',
    qvActivity: 'Activity',
    qvOwner: 'Owner',
    qvStatus: 'Status',
    qvRisk: 'Risk level',
    qvJurisdiction: 'Jurisdiction',
    qvCompletion: 'Completion',
    qvCreated: 'Created',
    qvUpdated: 'Updated',
    qvChildren: "Children's ext.",
    qvStepStatus: 'Step completion',
    qvEdit: 'Open editor',
    qvDelete: 'Delete case',
    btnQuickView: 'View',
    btnEdit: 'Edit',
    btnDelete: 'Delete',
    statusNotStarted: 'Not Started',
    statusInProgress: 'In Progress',
    statusComplete: 'Complete',
    riskNone: 'None',
    riskLow: 'Low',
    riskMedium: 'Medium',
    riskHigh: 'High',
    riskVeryHigh: 'Very High',
    deleteConfirm: 'Are you sure you want to delete this DPIA?',
    yes: 'Yes',
    no: 'No',
    enabled: 'Enabled',
    disabled: 'Disabled',
    tplBadge: 'T',
    childBadge: 'C',
    matrixYLabel: 'LIKELIHOOD',
    matrixXLabel: 'SEVERITY',
    legendLow: 'Low',
    legendMedium: 'Medium',
    legendHigh: 'High',
    legendVeryHigh: 'Very High',
    riskEntryName: 'Risk name',
    riskEntryLikelihood: 'Likelihood',
    riskEntrySeverity: 'Severity',
    riskEntryLevel: 'Level',
    riskEntryAction: 'Action',
    addRiskEntry: 'Add risk entry',
    removeEntry: 'Remove',
    riskNamePlaceholder: 'e.g. Data breach via third-party',
    screeningNotes: 'Screening notes',
    jurisdictionCriteria: 'Jurisdiction-specific criteria',
    step: 'Step',
    done: 'Done',
    notDone: 'Not done',
    hdrScreening: 'WP248 general screening criteria',
    tagRequired: 'REQUIRED',
    tagArt6: 'ART. 6',
    tagRisk: 'RISK',
    tagResidual: 'RESIDUAL',
    tagDpo: 'DPO',
    tagAadc: 'AADC',
  },
  zh: {
    documentTitle: 'DPIA 工具箱',
    brandName: 'DPIA 工具箱',
    brandTag: '基于 EDPB 的影响评估工作区',
    dashLabel: '工作台概览',
    dashHeading: 'DPIA 组合仪表盘',
    dashText: '无需打开任何记录，即可监控案例总量、状态分布和整体完成度。',
    listLabel: 'DPIA 列表',
    listHeading: '评估工作台',
    listText: '选择案例以打开编辑器、查看态势快照或创建新评估。',
    btnNewDpia: '新建评估',
    btnTemplate: '使用模板',
    thTitle: 'DPIA 评估',
    thOwner: '负责人',
    thStatus: '状态',
    thRisk: '风险等级',
    thProgress: '完成度',
    thActions: '操作',
    emptyWorkbench: '暂无 DPIA 案例。创建第一个案例以启动工作区。',
    metricTotal: '案例总数',
    metricTotalText: '本工作区中的活跃 DPIA 记录。',
    metricCoverage: '平均完成度',
    metricCoverageText: '所有案例的平均字段完成百分比。',
    metricInProgress: '进行中',
    metricInProgressText: '当前正在编辑的评估。',
    metricComplete: '已完成',
    metricCompleteText: '已达到 100% 完成度的评估。',
    meterNotStarted: '未开始',
    meterInProgress: '进行中',
    meterComplete: '已完成',
    editorLabel: '评估详情',
    editorTitle: '编辑 DPIA',
    btnExport: '导出 PDF',
    legBasic: '基本信息',
    lblTitle: '案例标题',
    lblActivity: '处理活动',
    lblOwner: '案例负责人',
    lblJurisdiction: '管辖区域包',
    lblChildrenEnable: '启用儿童 DPIA 扩展（ICO 附件 D）',
    legStep1: '步骤 1 — 筛选标准',
    hintStep1: '在启动完整评估之前，检查第 35 条触发因素和上下文高风险信号。',
    legStep2: '步骤 2 — 处理描述',
    hintStep2: '描述数据处理的性质、范围、背景和目的。',
    lblNature: '处理性质',
    lblScope: '范围',
    lblContext: '背景',
    lblPurposes: '目的',
    legStep3: '步骤 3 — 合法依据与必要性',
    hintStep3: '确定合法依据、必要性和比例性。',
    lblLegal: '合法依据',
    lblNecessity: '必要性与比例性评估',
    legStep4: '步骤 4 — 风险识别',
    hintStep4: '识别、评分并可视化对个人权利和自由的风险。',
    lblRisksId: '已识别风险',
    lblRiskAssess: '风险评估说明',
    legStep5: '步骤 5 — 缓解措施',
    hintStep5: '记录应对已识别风险的控制措施。',
    lblMitigation: '缓解措施',
    lblResidual: '残余风险',
    legStep6: '步骤 6 — DPO / 利益相关方咨询',
    hintStep6: '记录 DPO 建议和利益相关方意见。',
    lblDpo: 'DPO 建议',
    lblStakeholder: '利益相关方咨询',
    legStep7: '步骤 7 — 签核与复审',
    hintStep7: '记录审批结果并安排下次审查。',
    lblSignoff: '签核结果',
    lblReview: '下次审查日期',
    legStep8: '步骤 8 — 儿童 DPIA 扩展',
    hintStep8: 'ICO 附件 D — 针对儿童可访问服务的额外评估。',
    lblAgeAssurance: '年龄保证方法',
    lblParental: '家长控制',
    lblNudge: '助推技术',
    hdrAadc: 'AADC 标准合规',
    lblAadcNotes: 'AADC 备注',
    hdrAgeRisk: '分年龄段风险评估',
    lblEquality: '平等法律考量',
    btnSave: '保存草稿',
    saveMsg: '草稿已保存。',
    createLabel: '新建评估',
    createHeading: '创建 DPIA 案例',
    lblNewTitle: '案例标题',
    lblNewActivity: '处理活动',
    lblNewOwner: '负责人',
    btnCreate: '创建',
    btnCancelCreate: '取消',
    qvLabel: '快照',
    qvHeading: '案例态势',
    tplLabel: '模板',
    tplHeading: '选择模板',
    tplText: '为常见 DPIA 场景预置的模板，包含指导性内容。',
    qvTitle: '标题',
    qvActivity: '活动',
    qvOwner: '负责人',
    qvStatus: '状态',
    qvRisk: '风险等级',
    qvJurisdiction: '管辖区域',
    qvCompletion: '完成度',
    qvCreated: '创建时间',
    qvUpdated: '更新时间',
    qvChildren: '儿童扩展',
    qvStepStatus: '步骤完成状态',
    qvEdit: '打开编辑器',
    qvDelete: '删除案例',
    btnQuickView: '查看',
    btnEdit: '编辑',
    btnDelete: '删除',
    statusNotStarted: '未开始',
    statusInProgress: '进行中',
    statusComplete: '已完成',
    riskNone: '无',
    riskLow: '低',
    riskMedium: '中',
    riskHigh: '高',
    riskVeryHigh: '极高',
    deleteConfirm: '确定要删除此 DPIA 吗？',
    yes: '是',
    no: '否',
    enabled: '已启用',
    disabled: '未启用',
    tplBadge: 'T',
    childBadge: 'C',
    matrixYLabel: '可能性',
    matrixXLabel: '严重性',
    legendLow: '低',
    legendMedium: '中',
    legendHigh: '高',
    legendVeryHigh: '极高',
    riskEntryName: '风险名称',
    riskEntryLikelihood: '可能性',
    riskEntrySeverity: '严重性',
    riskEntryLevel: '等级',
    riskEntryAction: '操作',
    addRiskEntry: '添加风险条目',
    removeEntry: '移除',
    riskNamePlaceholder: '例如：第三方数据泄露',
    screeningNotes: '筛选备注',
    jurisdictionCriteria: '管辖区域特定标准',
    step: '步骤',
    done: '完成',
    notDone: '未完成',
    hdrScreening: 'WP248 通用筛选标准',
    tagRequired: '必填',
    tagArt6: '第6条',
    tagRisk: '风险',
    tagResidual: '残余',
    tagDpo: 'DPO',
    tagAadc: 'AADC',
  },
};

let currentLang = localStorage.getItem('dpia-lang') || 'en';

function t(key) { return (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || key; }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('dpia-lang', lang);
  applyI18n();
  renderDashboard();
  refreshEditorDynamicContent();
}

function refreshEditorDynamicContent() {
  if (!currentEditId) return;
  const d = findById(currentEditId);
  if (!d) return;
  populateJurisdictionSelect(d.jurisdiction);
  renderCriteria(d);
  renderRiskMatrix(d);
  renderRiskEntryList(d);
  renderAadcChecklist(d);
}

function populateJurisdictionSelect(selectedValue) {
  const sel = document.getElementById('ed-jurisdiction');
  if (!sel) return;
  sel.innerHTML = Object.entries(JURISDICTION_DATA).map(([key, jur]) =>
    `<option value="${key}"${key === selectedValue ? ' selected' : ''}>${jur.label[currentLang]}</option>`
  ).join('');
}

function applyI18n() {
  document.title = t('documentTitle');
  document.documentElement.lang = currentLang;
  const langEn = document.getElementById('langEn');
  const langZh = document.getElementById('langZh');
  langEn.classList.toggle('active', currentLang === 'en');
  langZh.classList.toggle('active', currentLang === 'zh');
  langEn.parentElement.dataset.activeIndex = currentLang === 'en' ? '0' : '1';

  const ids = [
    'brandName', 'brandTag', 'dashLabel', 'dashHeading', 'dashText',
    'listLabel', 'listHeading', 'listText', 'btnNewDpia', 'btnTemplate',
    'thTitle', 'thOwner', 'thStatus', 'thRisk', 'thProgress', 'thActions',
    'editorLabel', 'editorTitle', 'btnExport', 'legBasic',
    'lblTitle', 'lblActivity', 'lblOwner', 'lblJurisdiction', 'lblChildrenEnable',
    'legStep1', 'hintStep1', 'legStep2', 'hintStep2',
    'lblNature', 'lblScope', 'lblContext', 'lblPurposes',
    'legStep3', 'hintStep3', 'lblLegal', 'lblNecessity',
    'legStep4', 'hintStep4', 'lblRisksId', 'lblRiskAssess',
    'legStep5', 'hintStep5', 'lblMitigation', 'lblResidual',
    'legStep6', 'hintStep6', 'lblDpo', 'lblStakeholder',
    'legStep7', 'hintStep7', 'lblSignoff', 'lblReview',
    'legStep8', 'hintStep8', 'lblAgeAssurance', 'lblParental', 'lblNudge',
    'hdrAadc', 'lblAadcNotes', 'hdrAgeRisk', 'lblEquality',
    'btnSave', 'createLabel', 'createHeading',
    'lblNewTitle', 'lblNewActivity', 'lblNewOwner', 'btnCreate', 'btnCancelCreate',
    'qvLabel', 'qvHeading', 'tplLabel', 'tplHeading', 'tplText',
    'tagRequired', 'tagArt6', 'tagRisk', 'tagResidual', 'tagDpo', 'tagAadc',
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(id);
  });

  const emptyEl = document.getElementById('emptyState');
  if (emptyEl) emptyEl.textContent = t('emptyWorkbench');
}

// ── Data layer ──────────────────────────────────────────────

const LS_KEY = 'dpia_data_v2';

function generateId() { return 'dpia_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); }

function blankDpia() {
  return {
    id: generateId(),
    title: '', processingActivity: '', owner: '',
    status: 'NOT_STARTED', riskLevel: 'NONE',
    jurisdiction: 'WP248', templateId: '',
    screeningCriteria: '', jurisdictionCriteria: '', screeningNotes: '',
    processingNature: '', processingScope: '', processingContext: '', processingPurposes: '',
    legalBasis: '', necessityAssessment: '',
    risksIdentified: '', riskAssessment: '', riskEntries: [],
    mitigationMeasures: '', residualRisk: '',
    dpoAdvice: '', stakeholderConsultation: '',
    signOffOutcome: '', reviewDate: '',
    childrenEnabled: false,
    childrenAgeAssurance: '', childrenParentalControls: '', childrenNudgeTechniques: '',
    childrenAadcChecked: '', childrenAadcNotes: '',
    childrenRisk_0_5: '', childrenRisk_6_9: '', childrenRisk_10_12: '',
    childrenRisk_13_15: '', childrenRisk_16_17: '', childrenEqualityLaw: '',
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
  };
}

function loadAll() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; }
  catch { return []; }
}
function saveAll(list) { localStorage.setItem(LS_KEY, JSON.stringify(list)); }
function findById(id) { return loadAll().find(d => d.id === id); }

function createDpia(title, activity, owner) {
  const list = loadAll();
  const d = blankDpia();
  d.title = title; d.processingActivity = activity; d.owner = owner;
  list.push(d); saveAll(list); return d;
}

function updateDpia(d) {
  const list = loadAll();
  const i = list.findIndex(x => x.id === d.id);
  if (i >= 0) { d.updatedAt = new Date().toISOString(); list[i] = d; saveAll(list); }
}

function deleteDpia(id) {
  saveAll(loadAll().filter(d => d.id !== id));
}

// ── Jurisdiction data ───────────────────────────────────────

const JURISDICTION_DATA = {
  WP248: {
    label: { en: 'WP248 rev.01 (EDPB)', zh: 'WP248 rev.01（EDPB）' },
    criteria: [
      { en: 'Evaluation or scoring', zh: '评估或评分' },
      { en: 'Automated decision-making with legal/similar effect', zh: '具有法律/类似效力的自动化决策' },
      { en: 'Systematic monitoring', zh: '系统性监控' },
      { en: 'Sensitive data or data of a highly personal nature', zh: '敏感数据或高度个人性质的数据' },
      { en: 'Data processed on a large scale', zh: '大规模处理数据' },
      { en: 'Matching or combining datasets', zh: '数据集匹配或合并' },
      { en: 'Data concerning vulnerable data subjects', zh: '涉及弱势数据主体的数据' },
      { en: 'Innovative use or applying new tech/organisational solutions', zh: '创新使用或应用新的技术/组织解决方案' },
      { en: 'Processing that prevents data subjects from exercising a right/using a service/contract', zh: '阻止数据主体行使权利/使用服务/合同的处理' },
    ],
  },
  ICO: {
    label: { en: 'ICO (UK)', zh: 'ICO（英国）' },
    criteria: [
      { en: 'New technologies', zh: '新技术' },
      { en: 'Denial of service', zh: '拒绝服务' },
      { en: 'Large-scale profiling', zh: '大规模画像' },
      { en: 'Biometrics', zh: '生物识别' },
      { en: 'Genetic data', zh: '基因数据' },
      { en: 'Data matching', zh: '数据匹配' },
      { en: 'Invisible processing', zh: '不可见处理' },
      { en: 'Tracking', zh: '追踪' },
      { en: 'Targeting of children or other vulnerable individuals', zh: '针对儿童或其他弱势群体' },
      { en: 'Risk of physical harm', zh: '人身伤害风险' },
    ],
  },
  CNIL: {
    label: { en: 'CNIL (France)', zh: 'CNIL（法国）' },
    criteria: [
      { en: 'Health data processing', zh: '健康数据处理' },
      { en: 'Genetic data processing', zh: '基因数据处理' },
      { en: 'Biometric data processing', zh: '生物识别数据处理' },
      { en: 'Large-scale profiling', zh: '大规模画像' },
      { en: 'Processing with social/economic exclusion effects', zh: '具有社会/经济排斥效果的处理' },
      { en: 'Systematic monitoring of employees', zh: '对员工的系统性监控' },
      { en: 'Vulnerable persons', zh: '弱势群体' },
      { en: 'Cross-referencing or combination of data', zh: '数据交叉引用或合并' },
    ],
  },
  DSK: {
    label: { en: 'DSK (Germany)', zh: 'DSK（德国）' },
    criteria: [
      { en: 'Central storage of biometric or genetic data', zh: '生物识别或基因数据的集中存储' },
      { en: 'Data transfer to non-EU countries without adequacy', zh: '向无充分性认定的非欧盟国家传输数据' },
      { en: 'Use of AI for automated decision-making', zh: '使用 AI 进行自动化决策' },
      { en: 'Processing for evaluation/scoring of performance or behaviour', zh: '用于绩效或行为的评估/评分的处理' },
      { en: 'Location tracking', zh: '位置追踪' },
      { en: 'Profiling with external data', zh: '使用外部数据的画像' },
    ],
  },
};

// ── Completion logic ────────────────────────────────────────

function getTotalSteps(d) { return d.childrenEnabled ? 8 : 7; }

function isStepComplete(d, step) {
  switch (step) {
    case 1: return !!(d.screeningCriteria);
    case 2: return !!(d.processingNature && d.processingScope && d.processingContext && d.processingPurposes);
    case 3: return !!(d.legalBasis && d.necessityAssessment);
    case 4: return !!(d.risksIdentified && d.riskAssessment) || (d.riskEntries && d.riskEntries.length > 0);
    case 5: return !!(d.mitigationMeasures && d.residualRisk);
    case 6: return !!(d.dpoAdvice && d.stakeholderConsultation);
    case 7: return !!(d.signOffOutcome && d.reviewDate);
    case 8: return d.childrenEnabled && !!(d.childrenAgeAssurance && d.childrenParentalControls);
    default: return false;
  }
}

function getCompletionPercentage(d) {
  const total = getTotalSteps(d);
  let done = 0;
  for (let i = 1; i <= total; i++) { if (isStepComplete(d, i)) done++; }
  return Math.round((done / total) * 100);
}

function autoTransitionStatus(d) {
  const pct = getCompletionPercentage(d);
  if (pct >= 100) d.status = 'COMPLETE';
  else if (pct > 0) d.status = 'IN_PROGRESS';
  else d.status = 'NOT_STARTED';
}

// ── Risk matrix ─────────────────────────────────────────────

const LIKELIHOOD_LABELS = [
  { en: 'Remote', zh: '极低' },
  { en: 'Possible', zh: '可能' },
  { en: 'Likely', zh: '较高' },
  { en: 'Almost certain', zh: '几乎确定' },
];
const SEVERITY_LABELS = [
  { en: 'Negligible', zh: '可忽略' },
  { en: 'Limited', zh: '有限' },
  { en: 'Significant', zh: '显著' },
  { en: 'Maximum', zh: '最大' },
];

const RISK_MATRIX_LEVELS = [
  ['low','low','medium','medium'],
  ['low','medium','medium','high'],
  ['medium','medium','high','high'],
  ['medium','high','high','very-high'],
];

function autoComputeRiskLevel(d) {
  if (!d.riskEntries || d.riskEntries.length === 0) { d.riskLevel = 'NONE'; return; }
  let maxScore = 0;
  d.riskEntries.forEach(e => {
    const s = (e.likelihood + 1) * (e.severity + 1);
    if (s > maxScore) maxScore = s;
  });
  if (maxScore >= 12) d.riskLevel = 'VERY_HIGH';
  else if (maxScore >= 8) d.riskLevel = 'HIGH';
  else if (maxScore >= 4) d.riskLevel = 'MEDIUM';
  else d.riskLevel = 'LOW';
}

function renderRiskMatrix(d) {
  const c = document.getElementById('riskMatrixContainer');
  if (!c) return;
  let dots = {};
  (d.riskEntries || []).forEach((e, idx) => {
    const key = `${e.likelihood}-${e.severity}`;
    if (!dots[key]) dots[key] = [];
    dots[key].push(idx + 1);
  });

  let html = `<div class="risk-matrix-wrapper">`;
  html += `<p class="matrix-axis-label matrix-axis-y">${t('matrixYLabel')}</p>`;
  html += `<table class="risk-matrix"><thead><tr><th></th>`;
  SEVERITY_LABELS.forEach(s => { html += `<th>${s[currentLang]}</th>`; });
  html += `</tr></thead><tbody>`;
  for (let li = 3; li >= 0; li--) {
    html += `<tr><th>${LIKELIHOOD_LABELS[li][currentLang]}</th>`;
    for (let si = 0; si < 4; si++) {
      const level = RISK_MATRIX_LEVELS[li][si];
      const key = `${li}-${si}`;
      const dotHtml = dots[key] ? dots[key].map(n => `<span class="matrix-dot">${n}</span>`).join('') : '';
      html += `<td class="matrix-cell matrix-${level}">${dotHtml}</td>`;
    }
    html += `</tr>`;
  }
  html += `</tbody></table>`;
  html += `<p class="matrix-axis-label matrix-axis-x">${t('matrixXLabel')}</p>`;
  html += `<div class="matrix-legend">`;
  ['low','medium','high','very-high'].forEach(lev => {
    const k = lev === 'very-high' ? 'legendVeryHigh' : 'legend' + lev.charAt(0).toUpperCase() + lev.slice(1);
    html += `<span class="legend-item"><span class="legend-swatch matrix-${lev}"></span>${t(k)}</span>`;
  });
  html += `</div></div>`;
  c.innerHTML = html;
}

function renderRiskEntryList(d) {
  const c = document.getElementById('riskEntryContainer');
  if (!c) return;
  let html = '';
  if (d.riskEntries && d.riskEntries.length > 0) {
    html += `<table class="risk-entry-table"><thead><tr>`;
    html += `<th>#</th><th>${t('riskEntryName')}</th><th>${t('riskEntryLikelihood')}</th><th>${t('riskEntrySeverity')}</th><th>${t('riskEntryLevel')}</th><th>${t('riskEntryAction')}</th>`;
    html += `</tr></thead><tbody>`;
    d.riskEntries.forEach((e, idx) => {
      const level = RISK_MATRIX_LEVELS[e.likelihood][e.severity];
      const levelLabel = level === 'very-high' ? t('legendVeryHigh') : t('legend' + level.charAt(0).toUpperCase() + level.slice(1));
      html += `<tr><td>${idx + 1}</td><td>${esc(e.name)}</td>`;
      html += `<td>${LIKELIHOOD_LABELS[e.likelihood][currentLang]}</td>`;
      html += `<td>${SEVERITY_LABELS[e.severity][currentLang]}</td>`;
      html += `<td><span class="badge risk-badge-${level}">${levelLabel}</span></td>`;
      html += `<td><button class="btn btn-danger btn-sm" onclick="removeRiskEntry(${idx})">${t('removeEntry')}</button></td></tr>`;
    });
    html += `</tbody></table>`;
  }
  html += `<div class="risk-add-form"><div class="field-grid">`;
  html += `<article class="field-card field-card--full"><div class="field-card__head"><div><h3>${t('riskEntryName')}</h3></div></div><input type="text" id="risk-new-name" class="field-control" placeholder="${t('riskNamePlaceholder')}"></article>`;
  html += `<article class="field-card"><div class="field-card__head"><div><h3>${t('riskEntryLikelihood')}</h3></div></div><select id="risk-new-likelihood" class="field-select">`;
  LIKELIHOOD_LABELS.forEach((l, i) => { html += `<option value="${i}">${l[currentLang]}</option>`; });
  html += `</select></article>`;
  html += `<article class="field-card"><div class="field-card__head"><div><h3>${t('riskEntrySeverity')}</h3></div></div><select id="risk-new-severity" class="field-select">`;
  SEVERITY_LABELS.forEach((s, i) => { html += `<option value="${i}">${s[currentLang]}</option>`; });
  html += `</select></article></div>`;
  html += `<button class="btn btn-secondary btn-sm" onclick="addRiskEntry()" style="margin-top:14px">${t('addRiskEntry')}</button></div>`;
  c.innerHTML = html;
}

// ── AADC standards ──────────────────────────────────────────

const AADC_STANDARDS = [
  { en: 'Best interests of the child', zh: '儿童最大利益' },
  { en: 'Data protection impact assessments', zh: '数据保护影响评估' },
  { en: 'Age-appropriate application', zh: '适龄应用' },
  { en: 'Transparency', zh: '透明度' },
  { en: 'Detrimental use of data', zh: '数据的有害使用' },
  { en: 'Policies and community standards', zh: '政策和社区标准' },
  { en: 'Default settings', zh: '默认设置' },
  { en: 'Data minimisation', zh: '数据最小化' },
  { en: 'Data sharing', zh: '数据共享' },
  { en: 'Geolocation', zh: '地理位置' },
  { en: 'Parental controls', zh: '家长控制' },
  { en: 'Profiling', zh: '画像' },
  { en: 'Nudge techniques', zh: '助推技术' },
  { en: 'Connected toys and devices', zh: '联网玩具和设备' },
  { en: 'Online tools', zh: '在线工具' },
];

// ── Template library ────────────────────────────────────────

const TEMPLATE_LIBRARY = [
  {
    id: 'tpl-hr-profiling',
    icon: '👥',
    name: { en: 'HR Profiling', zh: 'HR 画像' },
    desc: { en: 'Employee performance evaluation and scoring systems.', zh: '员工绩效评估和评分系统。' },
    data: {
      processingNature: 'Automated and semi-automated evaluation of employee performance data including KPIs, behavioural metrics, and peer reviews.',
      processingScope: 'Covers all active employees across EU operations.',
      processingPurposes: 'Performance review, promotion decisions, and workforce planning.',
      legalBasis: 'Legitimate interest of the employer balanced with employee privacy rights.',
    },
  },
  {
    id: 'tpl-video-surveillance',
    icon: '📹',
    name: { en: 'Video Surveillance', zh: '视频监控' },
    desc: { en: 'CCTV systems in public or semi-public areas.', zh: '公共或半公共区域的闭路电视系统。' },
    data: {
      processingNature: 'Continuous video recording and storage of footage from fixed and PTZ cameras.',
      processingScope: 'Building entrances, parking areas, and shared workspaces.',
      processingPurposes: 'Security, crime prevention, and access control.',
      legalBasis: 'Legitimate interest for protecting property and ensuring safety.',
    },
  },
  {
    id: 'tpl-ai-ml',
    icon: '🤖',
    name: { en: 'AI / ML Processing', zh: 'AI / 机器学习处理' },
    desc: { en: 'Machine learning models with personal data.', zh: '使用个人数据的机器学习模型。' },
    data: {
      processingNature: 'Training and inference of ML models using personal data for prediction, classification, or recommendation.',
      processingScope: 'Data from users of the platform including behavioural, demographic, and content data.',
      processingPurposes: 'Content personalisation, fraud detection, and service improvement.',
      legalBasis: 'Consent for personalisation; legitimate interest for fraud detection.',
    },
  },
  {
    id: 'tpl-customer-profiling',
    icon: '📊',
    name: { en: 'Customer Profiling', zh: '客户画像' },
    desc: { en: 'Customer segmentation and targeted marketing.', zh: '客户细分和定向营销。' },
    data: {
      processingNature: 'Aggregation and analysis of customer purchase history, browsing behaviour, and demographic data.',
      processingScope: 'All registered customers in EU/EEA markets.',
      processingPurposes: 'Market segmentation, personalised offers, and customer retention analytics.',
      legalBasis: 'Consent for direct marketing; legitimate interest for analytics.',
    },
  },
  {
    id: 'tpl-iot',
    icon: '🌐',
    name: { en: 'Connected IoT', zh: '联网物联网' },
    desc: { en: 'IoT devices collecting personal or behavioural data.', zh: '收集个人或行为数据的物联网设备。' },
    data: {
      processingNature: 'Continuous collection of sensor data (location, health, environmental) from connected devices.',
      processingScope: 'End users of connected devices across multiple jurisdictions.',
      processingPurposes: 'Service delivery, predictive maintenance, and usage analytics.',
      legalBasis: 'Contract performance for service; consent for analytics.',
    },
  },
];

// ── View management ─────────────────────────────────────────

let currentEditId = null;

function navigateToEditor(id) {
  currentEditId = id;
  const section = document.getElementById('editorSection');
  section.style.display = '';
  initEditor(id);
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeEditor() {
  currentEditId = null;
  document.getElementById('editorSection').style.display = 'none';
}

// ── Dashboard rendering ─────────────────────────────────────

function statusText(s) {
  const map = { NOT_STARTED: 'statusNotStarted', IN_PROGRESS: 'statusInProgress', COMPLETE: 'statusComplete' };
  return t(map[s] || 'statusNotStarted');
}

function statusBadgeClass(s) {
  const map = { NOT_STARTED: 'badge-not-started', IN_PROGRESS: 'badge-in-progress', COMPLETE: 'badge-complete' };
  return 'badge ' + (map[s] || 'badge-not-started');
}

function riskText(r) {
  const map = { NONE: 'riskNone', LOW: 'riskLow', MEDIUM: 'riskMedium', HIGH: 'riskHigh', VERY_HIGH: 'riskVeryHigh' };
  return t(map[r] || 'riskNone');
}

function riskBadgeClass(r) {
  const map = { NONE: 'badge-none', LOW: 'badge-low', MEDIUM: 'badge-medium', HIGH: 'badge-high', VERY_HIGH: 'badge-high' };
  return 'badge ' + (map[r] || 'badge-none');
}

function esc(s) {
  const d = document.createElement('div'); d.textContent = s || ''; return d.innerHTML;
}

function renderDashboard() {
  const list = loadAll();

  // Metrics
  const total = list.length;
  const avgComp = total ? Math.round(list.reduce((s, d) => s + getCompletionPercentage(d), 0) / total) : 0;
  const inProgress = list.filter(d => d.status === 'IN_PROGRESS').length;
  const complete = list.filter(d => d.status === 'COMPLETE').length;
  const notStarted = total - inProgress - complete;

  const metrics = [
    { label: t('metricTotal'), value: total, text: t('metricTotalText') },
    { label: t('metricCoverage'), value: avgComp + '%', text: t('metricCoverageText') },
    { label: t('metricInProgress'), value: inProgress, text: t('metricInProgressText') },
    { label: t('metricComplete'), value: complete, text: t('metricCompleteText') },
  ];
  document.getElementById('metricGrid').innerHTML = metrics.map(m =>
    `<article class="metric-card"><span class="section-label">${esc(m.label)}</span><strong>${m.value}</strong><p>${esc(m.text)}</p></article>`
  ).join('');

  // Status meters
  const bars = [
    { label: t('meterNotStarted'), count: notStarted },
    { label: t('meterInProgress'), count: inProgress },
    { label: t('meterComplete'), count: complete },
  ];
  document.getElementById('statusMeters').innerHTML = bars.map(b => {
    const pct = total ? Math.round(b.count / total * 100) : 0;
    return `<div class="status-meter"><div class="status-meter__head"><span>${esc(b.label)}</span><span>${b.count}</span></div><div class="status-meter__bar"><div class="status-meter__fill" style="width:${pct}%"></div></div></div>`;
  }).join('');

  // Table
  const tbody = document.getElementById('dpiaTableBody');
  const emptyEl = document.getElementById('emptyState');
  if (!list.length) {
    tbody.innerHTML = '';
    emptyEl.style.display = '';
    return;
  }
  emptyEl.style.display = 'none';

  tbody.innerHTML = list.map(d => {
    const pct = getCompletionPercentage(d);
    let badges = '';
    if (d.templateId) badges += `<span class="badge badge-tpl">${t('tplBadge')}</span>`;
    if (d.childrenEnabled) badges += `<span class="badge badge-child">${t('childBadge')}</span>`;
    return `<tr class="dpia-row">
      <td><strong>${esc(d.title || t('qvTitle'))}</strong>${badges}<br><small style="color:var(--text-tertiary)">${esc(d.processingActivity)}</small></td>
      <td>${esc(d.owner)}</td>
      <td><span class="${statusBadgeClass(d.status)}">${statusText(d.status)}</span></td>
      <td><span class="${riskBadgeClass(d.riskLevel)}">${riskText(d.riskLevel)}</span></td>
      <td><div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div><span class="progress-text">${pct}%</span></td>
      <td class="actions-cell">
        <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openQuickView('${d.id}')">${t('btnQuickView')}</button>
        <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();navigateToEditor('${d.id}')">${t('btnEdit')}</button>
        <button class="btn btn-danger btn-sm" onclick="event.stopPropagation();confirmDelete('${d.id}')">${t('btnDelete')}</button>
      </td>
    </tr>`;
  }).join('');
}

// ── Create DPIA ─────────────────────────────────────────────

function showCreateForm() {
  document.getElementById('createModal').classList.add('is-open');
  document.getElementById('new-title').value = '';
  document.getElementById('new-activity').value = '';
  document.getElementById('new-owner').value = '';
  document.getElementById('new-title').focus();
}
function closeCreateModal() { document.getElementById('createModal').classList.remove('is-open'); }

function submitCreate() {
  const title = document.getElementById('new-title').value.trim();
  const activity = document.getElementById('new-activity').value.trim();
  const owner = document.getElementById('new-owner').value.trim();
  if (!title) { document.getElementById('new-title').focus(); return; }
  createDpia(title, activity, owner);
  closeCreateModal();
  renderDashboard();
}

// ── Delete ──────────────────────────────────────────────────

function confirmDelete(id) {
  if (confirm(t('deleteConfirm'))) { deleteDpia(id); renderDashboard(); }
}

// ── Quick-view ──────────────────────────────────────────────

function openQuickView(id) {
  const d = findById(id);
  if (!d) return;
  const pct = getCompletionPercentage(d);
  const total = getTotalSteps(d);
  let html = `<div class="qv-grid">`;
  const fields = [
    ['qvTitle', d.title], ['qvActivity', d.processingActivity], ['qvOwner', d.owner],
    ['qvStatus', statusText(d.status)], ['qvRisk', riskText(d.riskLevel)],
    ['qvJurisdiction', d.jurisdiction],
  ];
  fields.forEach(([k, v]) => {
    html += `<div class="qv-field"><label>${t(k)}</label><strong>${esc(v || '-')}</strong></div>`;
  });
  html += `<div class="qv-field"><label>${t('qvCompletion')}</label><strong>${pct}%</strong></div>`;
  html += `<div class="qv-field"><label>${t('qvChildren')}</label><strong>${d.childrenEnabled ? t('enabled') : t('disabled')}</strong></div>`;
  html += `</div>`;

  html += `<h3 style="margin:14px 0 10px;font-size:1rem">${t('qvStepStatus')}</h3>`;
  html += `<table class="step-table">`;
  for (let s = 1; s <= total; s++) {
    const done = isStepComplete(d, s);
    html += `<tr><td>${t('step')} ${s}</td><td>${t('legStep' + s)}</td><td class="step-status">${done ? '\u2705' : '\u2B1C'}</td></tr>`;
  }
  html += `</table>`;

  html += `<div class="qv-footer">`;
  html += `<span>${t('qvCreated')}: ${new Date(d.createdAt).toLocaleDateString()} | ${t('qvUpdated')}: ${new Date(d.updatedAt).toLocaleDateString()}</span>`;
  html += `<div style="display:flex;gap:8px">`;
  html += `<button class="btn btn-secondary btn-sm" onclick="closeQuickView();navigateToEditor('${d.id}')">${t('qvEdit')}</button>`;
  html += `<button class="btn btn-danger btn-sm" onclick="closeQuickView();confirmDelete('${d.id}')">${t('qvDelete')}</button>`;
  html += `</div></div>`;

  document.getElementById('quickViewContent').innerHTML = html;
  document.getElementById('quickViewModal').classList.add('is-open');
}
function closeQuickView() { document.getElementById('quickViewModal').classList.remove('is-open'); }

// ── Template modal ──────────────────────────────────────────

function showTemplateModal() {
  const container = document.getElementById('templateList');
  container.innerHTML = TEMPLATE_LIBRARY.map(tpl =>
    `<div class="template-card" onclick="applyTemplate('${tpl.id}')">
      <div class="template-icon">${tpl.icon}</div>
      <div class="template-info">
        <div class="template-name">${esc(tpl.name[currentLang])}</div>
        <div class="template-desc">${esc(tpl.desc[currentLang])}</div>
      </div>
    </div>`
  ).join('');
  document.getElementById('templateModal').classList.add('is-open');
}
function hideTemplateModal() { document.getElementById('templateModal').classList.remove('is-open'); }

function applyTemplate(tplId) {
  const tpl = TEMPLATE_LIBRARY.find(t => t.id === tplId);
  if (!tpl) return;
  const list = loadAll();
  const d = blankDpia();
  d.title = tpl.name[currentLang];
  d.templateId = tplId;
  Object.assign(d, tpl.data);
  autoTransitionStatus(d);
  list.push(d); saveAll(list);
  hideTemplateModal();
  renderDashboard();
}

// ── Editor ──────────────────────────────────────────────────

function initEditor(id) {
  const d = findById(id);
  if (!d) return;

  document.getElementById('ed-title').value = d.title || '';
  document.getElementById('ed-activity').value = d.processingActivity || '';
  document.getElementById('ed-owner').value = d.owner || '';
  populateJurisdictionSelect(d.jurisdiction || 'WP248');
  document.getElementById('ed-children-enabled').checked = d.childrenEnabled || false;

  document.getElementById('ed-nature').value = d.processingNature || '';
  document.getElementById('ed-scope').value = d.processingScope || '';
  document.getElementById('ed-context').value = d.processingContext || '';
  document.getElementById('ed-purposes').value = d.processingPurposes || '';

  document.getElementById('ed-legal').value = d.legalBasis || '';
  document.getElementById('ed-necessity').value = d.necessityAssessment || '';

  document.getElementById('ed-risks').value = d.risksIdentified || '';
  document.getElementById('ed-risk-assessment').value = d.riskAssessment || '';

  document.getElementById('ed-mitigation').value = d.mitigationMeasures || '';
  document.getElementById('ed-residual').value = d.residualRisk || '';

  document.getElementById('ed-dpo').value = d.dpoAdvice || '';
  document.getElementById('ed-stakeholder').value = d.stakeholderConsultation || '';

  document.getElementById('ed-signoff').value = d.signOffOutcome || '';
  document.getElementById('ed-review').value = d.reviewDate || '';

  // Children fields
  document.getElementById('ed-age-assurance').value = d.childrenAgeAssurance || '';
  document.getElementById('ed-parental').value = d.childrenParentalControls || '';
  document.getElementById('ed-nudge').value = d.childrenNudgeTechniques || '';
  document.getElementById('ed-aadc-notes').value = d.childrenAadcNotes || '';
  document.getElementById('ed-risk-0-5').value = d.childrenRisk_0_5 || '';
  document.getElementById('ed-risk-6-9').value = d.childrenRisk_6_9 || '';
  document.getElementById('ed-risk-10-12').value = d.childrenRisk_10_12 || '';
  document.getElementById('ed-risk-13-15').value = d.childrenRisk_13_15 || '';
  document.getElementById('ed-risk-16-17').value = d.childrenRisk_16_17 || '';
  document.getElementById('ed-equality').value = d.childrenEqualityLaw || '';

  toggleChildrenSection();
  renderCriteria(d);
  renderRiskMatrix(d);
  renderRiskEntryList(d);
  renderAadcChecklist(d);
}

function renderCriteria(d) {
  const container = document.getElementById('criteriaContainer');
  const jur = d.jurisdiction || 'WP248';
  const jurData = JURISDICTION_DATA[jur] || JURISDICTION_DATA.WP248;
  const wp248 = JURISDICTION_DATA.WP248;
  const checked = (d.screeningCriteria || '').split(',').filter(Boolean);
  const jurChecked = (d.jurisdictionCriteria || '').split(',').filter(Boolean);

  let html = `<h4 id="hdrScreening">${t('hdrScreening')}</h4>`;
  html += `<div class="criteria-grid">`;
  wp248.criteria.forEach((c, i) => {
    const val = 'WP248_' + i;
    html += `<label class="checkbox-label"><input type="checkbox" name="screen" value="${val}" ${checked.includes(val) ? 'checked' : ''}> ${esc(c[currentLang])}</label>`;
  });
  html += `</div>`;

  if (jur !== 'WP248') {
    html += `<h4>${esc(jurData.label[currentLang])} — ${t('jurisdictionCriteria')}</h4>`;
    html += `<div class="criteria-grid">`;
    jurData.criteria.forEach((c, i) => {
      const val = jur + '_' + i;
      html += `<label class="checkbox-label"><input type="checkbox" name="jurscreen" value="${val}" ${jurChecked.includes(val) ? 'checked' : ''}> ${esc(c[currentLang])}</label>`;
    });
    html += `</div>`;
  }

  html += `<article class="field-card field-card--full" style="margin-top:14px"><div class="field-card__head"><div><h3>${t('screeningNotes')}</h3></div></div><textarea id="ed-screening-notes" class="field-textarea" rows="2">${esc(d.screeningNotes || '')}</textarea></article>`;
  container.innerHTML = html;
}

function renderAadcChecklist(d) {
  const container = document.getElementById('aadcContainer');
  if (!container) return;
  const checked = (d.childrenAadcChecked || '').split(',').filter(Boolean);
  container.innerHTML = AADC_STANDARDS.map((s, i) => {
    const val = 'aadc_' + i;
    return `<label class="checkbox-label"><input type="checkbox" name="aadc" value="${val}" ${checked.includes(val) ? 'checked' : ''}> ${esc(s[currentLang])}</label>`;
  }).join('');
}

function collectCriteria() {
  return Array.from(document.querySelectorAll('input[name="screen"]:checked')).map(cb => cb.value).join(',');
}
function collectJurisdictionCriteria() {
  return Array.from(document.querySelectorAll('input[name="jurscreen"]:checked')).map(cb => cb.value).join(',');
}
function collectAadcChecked() {
  return Array.from(document.querySelectorAll('input[name="aadc"]:checked')).map(cb => cb.value).join(',');
}

function toggleChildrenSection() {
  const enabled = document.getElementById('ed-children-enabled').checked;
  document.getElementById('childrenFieldset').style.display = enabled ? '' : 'none';
}

function saveEditor() {
  if (!currentEditId) return;
  const d = findById(currentEditId);
  if (!d) return;

  d.title = document.getElementById('ed-title').value.trim();
  d.processingActivity = document.getElementById('ed-activity').value.trim();
  d.owner = document.getElementById('ed-owner').value.trim();
  d.jurisdiction = document.getElementById('ed-jurisdiction').value;
  d.childrenEnabled = document.getElementById('ed-children-enabled').checked;

  d.screeningCriteria = collectCriteria();
  d.jurisdictionCriteria = collectJurisdictionCriteria();
  d.screeningNotes = (document.getElementById('ed-screening-notes') || {}).value || '';

  d.processingNature = document.getElementById('ed-nature').value.trim();
  d.processingScope = document.getElementById('ed-scope').value.trim();
  d.processingContext = document.getElementById('ed-context').value.trim();
  d.processingPurposes = document.getElementById('ed-purposes').value.trim();

  d.legalBasis = document.getElementById('ed-legal').value.trim();
  d.necessityAssessment = document.getElementById('ed-necessity').value.trim();

  d.risksIdentified = document.getElementById('ed-risks').value.trim();
  d.riskAssessment = document.getElementById('ed-risk-assessment').value.trim();

  d.mitigationMeasures = document.getElementById('ed-mitigation').value.trim();
  d.residualRisk = document.getElementById('ed-residual').value.trim();

  d.dpoAdvice = document.getElementById('ed-dpo').value.trim();
  d.stakeholderConsultation = document.getElementById('ed-stakeholder').value.trim();

  d.signOffOutcome = document.getElementById('ed-signoff').value.trim();
  d.reviewDate = document.getElementById('ed-review').value;

  if (d.childrenEnabled) {
    d.childrenAgeAssurance = document.getElementById('ed-age-assurance').value.trim();
    d.childrenParentalControls = document.getElementById('ed-parental').value.trim();
    d.childrenNudgeTechniques = document.getElementById('ed-nudge').value.trim();
    d.childrenAadcChecked = collectAadcChecked();
    d.childrenAadcNotes = document.getElementById('ed-aadc-notes').value.trim();
    d.childrenRisk_0_5 = document.getElementById('ed-risk-0-5').value.trim();
    d.childrenRisk_6_9 = document.getElementById('ed-risk-6-9').value.trim();
    d.childrenRisk_10_12 = document.getElementById('ed-risk-10-12').value.trim();
    d.childrenRisk_13_15 = document.getElementById('ed-risk-13-15').value.trim();
    d.childrenRisk_16_17 = document.getElementById('ed-risk-16-17').value.trim();
    d.childrenEqualityLaw = document.getElementById('ed-equality').value.trim();
  }

  autoComputeRiskLevel(d);
  autoTransitionStatus(d);
  updateDpia(d);

  const msg = document.getElementById('saveMsg');
  msg.textContent = t('saveMsg');
  msg.style.display = 'inline';
  setTimeout(() => { msg.style.display = 'none'; }, 2000);
}

// ── Risk entries ────────────────────────────────────────────

function addRiskEntry() {
  if (!currentEditId) return;
  const d = findById(currentEditId);
  if (!d) return;
  const name = document.getElementById('risk-new-name').value.trim();
  if (!name) return;
  const likelihood = parseInt(document.getElementById('risk-new-likelihood').value, 10);
  const severity = parseInt(document.getElementById('risk-new-severity').value, 10);
  if (!d.riskEntries) d.riskEntries = [];
  d.riskEntries.push({ name, likelihood, severity });
  autoComputeRiskLevel(d);
  autoTransitionStatus(d);
  updateDpia(d);
  renderRiskMatrix(d);
  renderRiskEntryList(d);
}

function removeRiskEntry(idx) {
  if (!currentEditId) return;
  const d = findById(currentEditId);
  if (!d || !d.riskEntries) return;
  d.riskEntries.splice(idx, 1);
  autoComputeRiskLevel(d);
  autoTransitionStatus(d);
  updateDpia(d);
  renderRiskMatrix(d);
  renderRiskEntryList(d);
}

// ── PDF export ──────────────────────────────────────────────

function exportPdf() {
  if (!currentEditId) return;
  saveEditor();
  window.print();
}

// ── Initialisation ──────────────────────────────────────────

document.getElementById('langEn').addEventListener('click', () => setLang('en'));
document.getElementById('langZh').addEventListener('click', () => setLang('zh'));

document.getElementById('ed-jurisdiction').addEventListener('change', function () {
  if (!currentEditId) return;
  const d = findById(currentEditId);
  if (d) { d.jurisdiction = this.value; updateDpia(d); renderCriteria(d); }
});

['createModal', 'quickViewModal', 'templateModal'].forEach(id => {
  const overlay = document.getElementById(id);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('is-open');
  });
});

applyI18n();
renderDashboard();
