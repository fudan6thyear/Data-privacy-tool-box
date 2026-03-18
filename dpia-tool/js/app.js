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
    workspacePill: 'EDPB core + ICO + Germany',
    btnLoadSample: 'Load sample',
    btnTopSave: 'Save draft',
    btnExportJson: 'Export JSON',
    trashLabel: 'Trash',
    trashSectionLabel: 'Workspace',
    trashSectionTitle: 'Deleted assessments',
    saveStatusReady: 'Draft ready.',
    saveStatusSaved: 'Draft saved locally.',
    saveStatusExported: 'Workbench JSON exported.',
    saveStatusSampleLoaded: 'Sample workbench loaded.',
    saveStatusDeleted: 'Assessment moved to trash.',
    saveStatusRestored: 'Assessment restored.',
    saveStatusNoOpen: 'Open an assessment to save it.',
    loadSampleConfirm: 'Replace the active workbench with the bundled sample cases?',
    mixLabel: 'Coverage',
    mixHeading: 'Method packs',
    mixJurisdictionsLabel: 'Jurisdiction mix',
    methodNotesLabel: 'How v1.1 guides',
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
    editorMetaText: 'Move step by step, answer the official prompts, and keep evidence close to the record.',
    btnExport: 'Export PDF',
    legBasic: 'Basic information',
    hintBasic: 'Set the case frame first. This stays visible across the rest of the workbench.',
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
    lblDataCategories: 'Data categories',
    lblDataSubjects: 'Data subjects',
    lblRecipients: 'Recipients and transfers',
    lblLifecycle: 'Lifecycle and systems',
    legStep3: 'Step 3 \u2014 Consultation process',
    hintStep3: 'Record who you consulted, whose views you captured, and why.',
    lblDpo: 'DPO advice',
    lblStakeholder: 'Stakeholder consultation',
    legStep4: 'Step 4 \u2014 Necessity and proportionality',
    hintStep4: 'Test lawful basis, necessity, proportionality, data minimisation, and support for rights.',
    lblLegal: 'Legal basis',
    lblNecessity: 'Necessity & proportionality assessment',
    lblAlternatives: 'Alternatives considered',
    lblRights: 'Rights, transparency and safeguards',
    legStep5: 'Step 5 \u2014 Identify and assess risks',
    hintStep5: 'Describe risk sources, concrete harms, likelihood, severity, and why your scoring is defensible.',
    lblRisksId: 'Risks identified',
    lblRiskAssess: 'Risk assessment notes',
    legStep6: 'Step 6 \u2014 Measures and residual risk',
    hintStep6: 'Tie each measure to a risk, show its expected effect, and record what remains after mitigation.',
    lblMitigation: 'Mitigation measures',
    lblResidual: 'Residual risk',
    legStep7: 'Step 7 \u2014 Sign-off & review',
    hintStep7: 'Record approval outcome and schedule next review.',
    lblSignoff: 'Sign-off outcome',
    lblReview: 'Next review date',
    lblMeasurePlan: 'Owners, dates and evidence',
    lblAuthority: 'Supervisory authority consultation',
    lblProjectActions: 'Actions back to project plan',
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
    deleteConfirm: 'Move this DPIA to trash?',
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
    restore: 'Restore',
    emptyTrash: 'Trash is empty.',
    railPulseLabel: 'Assessment pulse',
    railPulseHeading: 'Current posture',
    railStepsLabel: 'Progress',
    railStepsHeading: 'Step checklist',
    railMethodLabel: 'Source packs',
    railMethodHeading: 'Official method anchors',
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
    workspacePill: 'EDPB 核心 + ICO + 德国包',
    btnLoadSample: '加载示例',
    btnTopSave: '保存草稿',
    btnExportJson: '导出 JSON',
    trashLabel: '垃圾箱',
    trashSectionLabel: '工作区',
    trashSectionTitle: '已删除评估',
    saveStatusReady: '草稿已就绪。',
    saveStatusSaved: '草稿已保存在本地。',
    saveStatusExported: '工作台 JSON 已导出。',
    saveStatusSampleLoaded: '示例工作台已载入。',
    saveStatusDeleted: '评估已移入垃圾箱。',
    saveStatusRestored: '评估已恢复。',
    saveStatusNoOpen: '请先打开一个评估再保存。',
    loadSampleConfirm: '要用内置示例案例替换当前工作区中的活跃评估吗？',
    mixLabel: '覆盖',
    mixHeading: '方法包',
    mixJurisdictionsLabel: '法域分布',
    methodNotesLabel: 'v1.1 如何引导',
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
    editorMetaText: '按步骤完成官方问题，把依据、判断和后续动作都放回同一份记录里。',
    btnExport: '导出 PDF',
    legBasic: '基本信息',
    hintBasic: '先设定案例框架。后续所有步骤都会围绕这里的上下文展开。',
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
    lblDataCategories: '数据类别',
    lblDataSubjects: '数据主体',
    lblRecipients: '接收方与跨境传输',
    lblLifecycle: '生命周期与系统',
    legStep3: '步骤 3 — 咨询过程',
    hintStep3: '记录你咨询了谁、收到了什么意见，以及为什么这样处理。',
    lblDpo: 'DPO 建议',
    lblStakeholder: '利益相关方咨询',
    legStep4: '步骤 4 — 必要性与比例性',
    hintStep4: '检验合法依据、必要性、比例性、数据最小化以及权利保障。',
    lblLegal: '合法依据',
    lblNecessity: '必要性与比例性评估',
    lblAlternatives: '考虑过的替代方案',
    lblRights: '权利、透明度与保障措施',
    legStep5: '步骤 5 — 识别并评估风险',
    hintStep5: '描述风险来源、具体伤害、可能性、严重性，以及你的评分理由。',
    lblRisksId: '已识别风险',
    lblRiskAssess: '风险评估说明',
    legStep6: '步骤 6 — 缓解措施与残余风险',
    hintStep6: '把每项措施和具体风险挂钩，说明效果，并记录实施后仍然存在的风险。',
    lblMitigation: '缓解措施',
    lblResidual: '残余风险',
    legStep7: '步骤 7 — 签核与复审',
    hintStep7: '记录审批结果并安排下次审查。',
    lblSignoff: '签核结果',
    lblReview: '下次审查日期',
    lblMeasurePlan: '责任人、日期与证据',
    lblAuthority: '监管机构咨询',
    lblProjectActions: '回写到项目计划的动作',
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
    deleteConfirm: '确定要将此 DPIA 移入垃圾箱吗？',
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
    restore: '恢复',
    emptyTrash: '垃圾箱为空。',
    railPulseLabel: '评估脉冲',
    railPulseHeading: '当前态势',
    railStepsLabel: '进度',
    railStepsHeading: '步骤清单',
    railMethodLabel: '来源包',
    railMethodHeading: '官方方法锚点',
    hdrScreening: 'WP248 通用筛选标准',
    tagRequired: '必填',
    tagArt6: '第6条',
    tagRisk: '风险',
    tagResidual: '残余',
    tagDpo: 'DPO',
    tagAadc: 'AADC',
  },
};

const txt = (en, zh) => ({ en, zh });

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
  renderSectionGuidance();
  renderEditorRail(d);
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
    'brandName', 'brandTag', 'workspacePill', 'btnLoadSample', 'btnTopSave', 'btnExportJson',
    'trashLabel', 'trashSectionLabel', 'trashSectionTitle',
    'dashLabel', 'dashHeading', 'dashText', 'mixLabel', 'mixHeading', 'mixJurisdictionsLabel', 'methodNotesLabel',
    'listLabel', 'listHeading', 'listText', 'btnNewDpia', 'btnTemplate',
    'thTitle', 'thOwner', 'thStatus', 'thRisk', 'thProgress', 'thActions',
    'editorLabel', 'editorTitle', 'editorMetaText', 'btnExport', 'legBasic', 'hintBasic',
    'lblTitle', 'lblActivity', 'lblOwner', 'lblJurisdiction', 'lblChildrenEnable',
    'legStep1', 'hintStep1', 'legStep2', 'hintStep2',
    'lblNature', 'lblScope', 'lblContext', 'lblPurposes', 'lblDataCategories', 'lblDataSubjects', 'lblRecipients', 'lblLifecycle',
    'legStep3', 'hintStep3', 'lblLegal', 'lblNecessity',
    'lblDpo', 'lblStakeholder',
    'legStep4', 'hintStep4', 'lblLegal', 'lblNecessity', 'lblAlternatives', 'lblRights',
    'legStep5', 'hintStep5', 'lblRisksId', 'lblRiskAssess',
    'legStep6', 'hintStep6', 'lblMitigation', 'lblResidual', 'lblMeasurePlan',
    'legStep7', 'hintStep7', 'lblSignoff', 'lblReview', 'lblAuthority', 'lblProjectActions',
    'legStep8', 'hintStep8', 'lblAgeAssurance', 'lblParental', 'lblNudge',
    'hdrAadc', 'lblAadcNotes', 'hdrAgeRisk', 'lblEquality',
    'railPulseLabel', 'railPulseHeading', 'railStepsLabel', 'railStepsHeading', 'railMethodLabel', 'railMethodHeading',
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

  const saveStatus = document.getElementById('saveStatus');
  if (saveStatus) {
    const key = saveStatus.dataset.statusKey || 'saveStatusReady';
    saveStatus.textContent = t(key);
  }
}

function setSaveStatus(statusKey) {
  const el = document.getElementById('saveStatus');
  if (!el) return;
  el.dataset.statusKey = statusKey;
  el.textContent = t(statusKey);
}

// ── Data layer ──────────────────────────────────────────────

const LS_KEY = 'dpia_data_v2';

function generateId() { return 'dpia_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8); }

function blankDpia() {
  return {
    id: generateId(),
    title: '', processingActivity: '', owner: '',
    status: 'NOT_STARTED', riskLevel: 'NONE',
    deletedAt: '',
    jurisdiction: 'WP248', templateId: '',
    screeningCriteria: '', jurisdictionCriteria: '', screeningNotes: '',
    processingNature: '', processingScope: '', processingContext: '', processingPurposes: '',
    dataCategories: '', dataSubjects: '', recipientsTransfers: '', lifecycleSystems: '',
    legalBasis: '', necessityAssessment: '', alternativesConsidered: '', rightsSafeguards: '',
    risksIdentified: '', riskAssessment: '', riskEntries: [],
    mitigationMeasures: '', residualRisk: '', measurePlan: '',
    dpoAdvice: '', stakeholderConsultation: '',
    signOffOutcome: '', reviewDate: '', authorityConsultation: '', projectActions: '',
    childrenEnabled: false,
    childrenAgeAssurance: '', childrenParentalControls: '', childrenNudgeTechniques: '',
    childrenAadcChecked: '', childrenAadcNotes: '',
    childrenRisk_0_5: '', childrenRisk_6_9: '', childrenRisk_10_12: '',
    childrenRisk_13_15: '', childrenRisk_16_17: '', childrenEqualityLaw: '',
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
  };
}

function hydrateDpia(raw = {}) {
  const base = blankDpia();
  const hydrated = { ...base, ...raw };
  hydrated.riskEntries = Array.isArray(raw.riskEntries) ? raw.riskEntries : [];
  return hydrated;
}

function loadAll() {
  try { return (JSON.parse(localStorage.getItem(LS_KEY)) || []).map(hydrateDpia); }
  catch { return []; }
}
function saveAll(list) { localStorage.setItem(LS_KEY, JSON.stringify(list)); }
function findById(id) { return loadAll().find(d => d.id === id); }
function getActiveCases() { return loadAll().filter(d => !d.deletedAt); }
function getDeletedCases() { return loadAll().filter(d => !!d.deletedAt); }

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
  const list = loadAll();
  const i = list.findIndex(d => d.id === id);
  if (i >= 0) {
    list[i].deletedAt = new Date().toISOString();
    list[i].updatedAt = new Date().toISOString();
    saveAll(list);
  }
}

function restoreDpia(id) {
  const list = loadAll();
  const i = list.findIndex(d => d.id === id);
  if (i >= 0) {
    list[i].deletedAt = '';
    list[i].updatedAt = new Date().toISOString();
    saveAll(list);
  }
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
    case 2: return !!(
      d.processingNature && d.processingScope && d.processingContext && d.processingPurposes &&
      d.dataCategories && d.dataSubjects
    );
    case 3: return !!(d.dpoAdvice && d.stakeholderConsultation);
    case 4: return !!(d.legalBasis && d.necessityAssessment && d.alternativesConsidered && d.rightsSafeguards);
    case 5: return !!(d.risksIdentified && d.riskAssessment) || (d.riskEntries && d.riskEntries.length > 0);
    case 6: return !!(d.mitigationMeasures && d.residualRisk && d.measurePlan);
    case 7: return !!(d.signOffOutcome && d.reviewDate && d.projectActions);
    case 8: return d.childrenEnabled && !!(d.childrenAgeAssurance && d.childrenParentalControls && d.childrenAadcChecked);
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

const SECTION_GUIDANCE = {
  1: [
    {
      eyebrow: txt('ICO asks', 'ICO 问法'),
      title: txt('Why does this need a DPIA?', '为什么这件事需要做 DPIA？'),
      items: [
        txt('What is the project trying to achieve?', '这个项目究竟想实现什么？'),
        txt('Why did you identify a need for DPIA now?', '为什么你现在判断它需要做 DPIA？'),
        txt('Which high-risk features are actually present?', '哪些高风险特征是真实存在的？'),
      ],
    },
    {
      eyebrow: txt('Germany checks', '德国监管视角'),
      title: txt('Record the threshold logic', '把门槛判断逻辑写清楚'),
      items: [
        txt('Check blacklist / Art. 35(3) triggers / WP248 criteria in order.', '按 blacklist / Art.35(3) / WP248 标准顺序判断。'),
        txt('Explain why each checked criterion applies in your facts.', '说明每个勾选标准为什么适用于当前事实。'),
        txt('If unclear, document why you still proceeded with a DPIA.', '如果边界不清，也要记录为什么仍然继续做 DPIA。'),
      ],
    },
    {
      eyebrow: txt('Good evidence', '建议证据'),
      title: txt('What to link or cite', '建议挂哪些证据'),
      items: [
        txt('Project brief or ROPA entry.', '项目简介或 ROPA 条目。'),
        txt('Architecture note, process note, or vendor materials.', '架构说明、流程说明或供应商材料。'),
        txt('Any prior incidents, complaints, or regulator concerns.', '既有事件、投诉或监管关注点。'),
      ],
    },
  ],
  2: [
    {
      eyebrow: txt('ICO asks', 'ICO 问法'),
      title: txt('Describe nature, scope, context, purposes', '把 nature / scope / context / purpose 说清楚'),
      items: [
        txt('How is data collected, used, stored, shared, and deleted?', '数据如何收集、使用、存储、共享和删除？'),
        txt('What data is involved, at what scale, for how long, and across which geographies?', '涉及哪些数据、多大规模、保留多久、覆盖哪些地区？'),
        txt('What is the relationship with individuals, and would they expect this use?', '你和数据主体是什么关系，他们会预期这种使用方式吗？'),
      ],
    },
    {
      eyebrow: txt('Germany suggests', '德国监管建议'),
      title: txt('Add operational structure', '补足操作层结构'),
      items: [
        txt('List data categories, affected groups, recipients, and processors.', '列出数据类别、受影响人群、接收方和处理者。'),
        txt('Describe the data lifecycle and the systems that support it.', '描述数据生命周期以及支撑它的系统。'),
        txt('State where data comes from and where it goes next.', '写明数据从哪里来、后续流向哪里。'),
      ],
    },
    {
      eyebrow: txt('Good evidence', '建议证据'),
      title: txt('Useful attachments', '推荐附件'),
      items: [
        txt('Data-flow or system diagram.', '数据流或系统图。'),
        txt('Retention schedule and system inventory.', '保留周期表和系统清单。'),
        txt('Processor list and transfer map.', '处理者清单和跨境传输图。'),
      ],
    },
  ],
  3: [
    {
      eyebrow: txt('ICO asks', 'ICO 问法'),
      title: txt('Who did you consult?', '你咨询了谁？'),
      items: [
        txt('How and when did you seek views from individuals or their representatives?', '你何时、以何种方式征求了数据主体或代表的意见？'),
        txt('Who else was involved internally?', '组织内部还有谁参与了？'),
        txt('Did processors, security, or subject-matter experts contribute?', '处理者、安全团队或专业人员是否参与？'),
      ],
    },
    {
      eyebrow: txt('Germany suggests', '德国监管建议'),
      title: txt('Document the reason either way', '无论是否咨询，都要写理由'),
      items: [
        txt('If you did not consult affected groups, explain why not.', '如果没有咨询受影响群体，要写明原因。'),
        txt('Keep DPO advice and review roles explicit.', '把 DPO 建议和复核角色写明确。'),
        txt('Capture any divergence from stakeholder views.', '如果最终判断和意见不同，要记录偏离原因。'),
      ],
    },
    {
      eyebrow: txt('Good evidence', '建议证据'),
      title: txt('Useful records', '建议保留的记录'),
      items: [
        txt('Meeting notes, email summaries, or review comments.', '会议纪要、邮件摘要或评审意见。'),
        txt('Security review, processor feedback, or user research.', '安全评审、处理者反馈或用户研究。'),
        txt('DPO memo or sign-off note.', 'DPO 备忘录或审阅意见。'),
      ],
    },
  ],
  4: [
    {
      eyebrow: txt('ICO asks', 'ICO 问法'),
      title: txt('Is the processing justified?', '这项处理为什么站得住？'),
      items: [
        txt('What is the lawful basis?', '合法依据是什么？'),
        txt('Does the processing really achieve the purpose?', '这项处理真的能实现目的么？'),
        txt('Is there a less intrusive way to achieve the same result?', '有没有侵扰性更低的替代路径？'),
      ],
    },
    {
      eyebrow: txt('Germany suggests', '德国监管建议'),
      title: txt('Show necessity in practice', '用操作层细节证明必要性'),
      items: [
        txt('Explain why each data set is needed, not just the workflow overall.', '不仅解释流程必要性，也要解释每类数据为什么需要。'),
        txt('Describe retention, accuracy, and how rights are supported.', '说明保留期限、准确性，以及如何支持权利实现。'),
        txt('Explain processors, transfer safeguards, and function-creep controls.', '说明处理者控制、跨境保障和功能蔓延控制。'),
      ],
    },
    {
      eyebrow: txt('Good evidence', '建议证据'),
      title: txt('What strengthens this step', '哪些材料能增强这一步'),
      items: [
        txt('Privacy notice draft, retention table, or rights workflow.', '隐私告知草案、保留周期表、权利响应流程。'),
        txt('Processor agreement or transfer assessment.', '处理协议或跨境传输评估。'),
        txt('Alternative-options memo or design decision log.', '替代方案说明或设计决策记录。'),
      ],
    },
  ],
  5: [
    {
      eyebrow: txt('ICO asks', 'ICO 问法'),
      title: txt('Make risk concrete', '把风险写具体'),
      items: [
        txt('What is the source of risk?', '风险源头是什么？'),
        txt('What harm could actually happen to individuals?', '个人可能遭受什么实际伤害？'),
        txt('How likely is it, and how severe would it be?', '发生概率多高，后果多严重？'),
      ],
    },
    {
      eyebrow: txt('Germany suggests', '德国监管建议'),
      title: txt('Explain your scoring logic', '把评分逻辑说出来'),
      items: [
        txt('Do not stop at red / amber / green labels.', '不要只停留在红黄绿标签上。'),
        txt('State why the severity and likelihood ratings are plausible.', '说明严重性和可能性的判断依据。'),
        txt('Tie risks back to the processing description and affected groups.', '把风险和前面的处理描述、受影响人群关联起来。'),
      ],
    },
    {
      eyebrow: txt('Good evidence', '建议证据'),
      title: txt('Useful support', '有用的支撑材料'),
      items: [
        txt('Threat scenarios, incident history, or comparable cases.', '威胁场景、既往事件或可比案例。'),
        txt('Security findings or architecture constraints.', '安全发现或架构约束。'),
        txt('Harm examples for children or vulnerable groups if relevant.', '如适用，补充儿童或弱势群体的伤害示例。'),
      ],
    },
  ],
  6: [
    {
      eyebrow: txt('ICO asks', 'ICO 问法'),
      title: txt('Reduce or eliminate risk', '如何降低或消除风险'),
      items: [
        txt('What extra measures could reduce medium or high risks?', '哪些附加措施能降低中高风险？'),
        txt('What effect will each measure have on the risk level?', '每项措施会如何影响风险等级？'),
        txt('What residual risk remains?', '措施落地后还剩什么风险？'),
      ],
    },
    {
      eyebrow: txt('Germany suggests', '德国监管建议'),
      title: txt('Measures must be operational', '措施必须能执行'),
      items: [
        txt('Name the measure, not just the control family.', '写具体措施，不要只写控制大类。'),
        txt('Assign an owner, date, and supporting evidence.', '为措施补上责任人、日期和证据。'),
        txt('Show which risk each measure addresses.', '明确每项措施对应哪个风险。'),
      ],
    },
    {
      eyebrow: txt('Good evidence', '建议证据'),
      title: txt('What to attach', '建议挂哪些证据'),
      items: [
        txt('Policy, design decision, or technical specification.', '政策、设计决策或技术规格说明。'),
        txt('Training record, control check, or test result.', '培训记录、控制检查或测试结果。'),
        txt('Implementation plan with owner and due date.', '包含责任人和到期日的实施计划。'),
      ],
    },
  ],
  7: [
    {
      eyebrow: txt('ICO asks', 'ICO 问法'),
      title: txt('Record the outcome', '把结论和责任落档'),
      items: [
        txt('Who approved the measures and residual risks?', '谁批准了措施和残余风险？'),
        txt('Does the DPO think the processing can proceed?', 'DPO 是否认为处理可以继续？'),
        txt('What goes back into the project plan, and when will you review again?', '哪些动作要回写项目计划，何时复审？'),
      ],
    },
    {
      eyebrow: txt('Germany suggests', '德国监管建议'),
      title: txt('Keep review and authority paths explicit', '把复审和监管路径写清楚'),
      items: [
        txt('Record routine review timing and trigger events.', '记录例行复审时间和触发复审的事件。'),
        txt('If high residual risk remains, explain authority consultation logic.', '如果仍有高残余风险，要写清监管咨询逻辑。'),
        txt('Capture if DPO advice was accepted or overruled.', '记录 DPO 建议是否被接受或被推翻。'),
      ],
    },
    {
      eyebrow: txt('Good evidence', '建议证据'),
      title: txt('Useful close-out materials', '建议保留的收尾材料'),
      items: [
        txt('Approval note, meeting minutes, or governance memo.', '审批意见、会议纪要或治理备忘录。'),
        txt('Project action list and owners.', '项目动作清单及责任人。'),
        txt('Review date or control re-test plan.', '复审日期或控制复测计划。'),
      ],
    },
  ],
  8: [
    {
      eyebrow: txt('ICO Annex D', 'ICO Annex D'),
      title: txt('Children-specific checks', '儿童场景专项检查'),
      items: [
        txt('How do you estimate age and adapt the experience?', '你如何识别年龄并做适龄调整？'),
        txt('What parental controls exist, and what do they reveal to children?', '有哪些家长控制，它们会向儿童暴露什么？'),
        txt('Do profiling, geolocation, or nudge techniques create extra risk?', '画像、定位或助推技术是否带来额外风险？'),
      ],
    },
    {
      eyebrow: txt('AADC lens', 'AADC 视角'),
      title: txt('Document standard-by-standard thinking', '逐项记录标准判断'),
      items: [
        txt('Work through the AADC standards that are relevant.', '逐项审视相关的 AADC 标准。'),
        txt('Assess risk by age band, not just “children” as one bucket.', '按年龄段评估，而不是把所有儿童放在一个桶里。'),
        txt('Capture equality or fairness implications for younger users.', '记录对年轻用户的平等或公平影响。'),
      ],
    },
    {
      eyebrow: txt('Good evidence', '建议证据'),
      title: txt('What to keep nearby', '建议随附材料'),
      items: [
        txt('Age-assurance design, moderation policy, or parental flow.', '年龄识别设计、审核政策或家长流程。'),
        txt('UX screenshots for defaults, prompts, and controls.', '默认设置、提示和控制的界面截图。'),
        txt('Risk notes by age group and vulnerable-user scenario.', '按年龄组和弱势场景整理的风险说明。'),
      ],
    },
  ],
};

function buildSampleCases() {
  const hr = blankDpia();
  hr.title = 'HR profiling pilot';
  hr.processingActivity = 'Employee performance scoring';
  hr.owner = 'People Ops / Privacy';
  hr.jurisdiction = 'DSK';
  hr.templateId = 'tpl-hr-profiling';
  hr.screeningCriteria = 'WP248_0,WP248_6';
  hr.jurisdictionCriteria = 'DSK_3';
  hr.screeningNotes = 'Scoring of employees, vulnerable workforce context, and likely significant effects justify a DPIA.';
  hr.processingNature = 'Semi-automated performance scoring combines manager reviews, attendance signals, and KPI outputs.';
  hr.processingScope = 'All EU employees in annual and quarterly review cycles, retained for active employment and documented retention periods.';
  hr.processingContext = 'Employees are in a structurally dependent relationship with the employer and may not expect secondary analytics for workforce decisions.';
  hr.processingPurposes = 'Support performance review, promotion, and workforce planning with a documented governance process.';
  hr.dataCategories = 'HR master data, attendance data, KPI data, manager comments, disciplinary markers.';
  hr.dataSubjects = 'Employees, line managers, reviewers.';
  hr.recipientsTransfers = 'HR leadership, managers, processor-hosted HR suite, no third-country transfers in current design.';
  hr.lifecycleSystems = 'Captured in HRIS, reviewed in quarterly cycles, archived under HR retention schedule, deleted or restricted when no longer needed.';
  hr.dpoAdvice = 'DPO requested tighter minimisation, clearer notice text, and a documented challenge process before rollout.';
  hr.stakeholderConsultation = 'People Ops, works council representative, security, and HR system owner were consulted. Employee views were gathered through representative feedback.';
  hr.legalBasis = 'Primary basis relies on employment-law obligations plus documented legitimate-interest analysis for analytics features.';
  hr.necessityAssessment = 'The scoring model supports a legitimate HR decision process, but only if it is bounded to review purposes and not reused for hidden monitoring.';
  hr.alternativesConsidered = 'A fully manual process was considered but rejected for scale; passive productivity tracking was rejected as disproportionate.';
  hr.rightsSafeguards = 'Employees receive notice, can challenge outputs, and have restricted manager access with logged review and deletion rules.';
  hr.risksIdentified = 'Unfair scoring, function creep into monitoring, biased manager inputs, and disclosure of sensitive assessment data.';
  hr.riskAssessment = 'High impact on employees because outputs may influence promotion, performance management, and workplace trust.';
  hr.riskEntries = [
    { name: 'Biased scoring influences employment decisions', likelihood: 2, severity: 3 },
    { name: 'Manager access exposes sensitive review comments', likelihood: 1, severity: 2 },
  ];
  hr.mitigationMeasures = 'Role-based access, review panel for contested scores, minimised inputs, notice updates, and audit logging.';
  hr.residualRisk = 'Medium residual risk remains if governance fails or managers do not follow the documented review process.';
  hr.measurePlan = 'People Ops owner to implement appeals workflow by Q2; security owner to review access model; privacy owner to approve notice text.';
  hr.signOffOutcome = 'Proceed only after governance controls, notice updates, and challenge process are live.';
  hr.reviewDate = '2026-09-30';
  hr.authorityConsultation = 'Not currently planned because the proposed residual risk is intended to remain below high after controls.';
  hr.projectActions = 'Update project plan with notice changes, appeal workflow, access review, and six-month post-launch review.';
  autoComputeRiskLevel(hr);
  autoTransitionStatus(hr);

  const children = blankDpia();
  children.title = 'Kids wearable safety service';
  children.processingActivity = 'Location-aware connected wearable';
  children.owner = 'Product / Privacy';
  children.jurisdiction = 'ICO';
  children.templateId = 'tpl-iot';
  children.screeningCriteria = 'WP248_2,WP248_6,WP248_7';
  children.jurisdictionCriteria = 'ICO_0,ICO_7,ICO_8';
  children.screeningNotes = 'Continuous monitoring, children as users, and novel connected-device processing make DPIA necessary.';
  children.processingNature = 'Wearable devices collect account, location, and device telemetry with companion-app access for parents.';
  children.processingScope = 'UK and EEA households using the connected wearable with continuous data transmission during active service.';
  children.processingContext = 'Children may not understand the service logic; parents configure the account but children experience the product directly.';
  children.processingPurposes = 'Provide safety alerts, device management, and limited usage analytics for service reliability.';
  children.dataCategories = 'Account data, parent contact data, child profile data, live location, device diagnostics.';
  children.dataSubjects = 'Children, parents or guardians, customer-support agents.';
  children.recipientsTransfers = 'Cloud hosting provider, customer support processor, in-region analytics endpoint, no current external sharing.';
  children.lifecycleSystems = 'Data enters through app and device, is retained under age-sensitive schedules, and is deleted on account closure or retention expiry.';
  children.dpoAdvice = 'DPO requested an Annex D children’s DPIA, stronger default privacy settings, and clearer parental-control explanations.';
  children.stakeholderConsultation = 'Child-safety lead, security, product, and accessibility were consulted. Parent-user research was reviewed as indirect stakeholder input.';
  children.legalBasis = 'Contract for core safety features; consent for optional analytics and notifications where required.';
  children.necessityAssessment = 'Live location is necessary only for the safety feature set and must be restricted by default and visible to the household.';
  children.alternativesConsidered = 'Always-on analytics and broad profiling were rejected; low-granularity telemetry was selected for diagnostics.';
  children.rightsSafeguards = 'Short retention, parent and child-facing notices, age-appropriate defaults, clear controls, and deletion requests through account tools.';
  children.risksIdentified = 'Excessive tracking, misuse of location data, confusing defaults, and children being nudged into sharing more than needed.';
  children.riskAssessment = 'Severity is high because location data and child users create a strong risk of intrusion, control loss, and secondary misuse.';
  children.riskEntries = [
    { name: 'Child location exposed through weak household controls', likelihood: 2, severity: 3 },
    { name: 'Nudges lead children to share more than necessary', likelihood: 1, severity: 2 },
  ];
  children.mitigationMeasures = 'Private-by-default settings, granular parental controls, short retention, location off by default outside safety mode, and child-friendly explanations.';
  children.residualRisk = 'Residual risk remains medium and depends on strict defaults, clear notices, and regular control review.';
  children.measurePlan = 'Product owner to implement default-off geolocation outside safety mode; design owner to deliver child-facing notices; privacy owner to review AADC evidence.';
  children.signOffOutcome = 'Proceed only with the Annex D control set and a launch readiness check on child defaults.';
  children.reviewDate = '2026-08-15';
  children.authorityConsultation = 'Consultation path to be reassessed if live testing reveals high residual risk on location sharing or parental controls.';
  children.projectActions = 'Ship default-setting changes, finalize parental-control copy, run launch checklist, and review after first 90 days.';
  children.childrenEnabled = true;
  children.childrenAgeAssurance = 'Account setup uses parent declaration, service gating, and product-copy checks to distinguish child-facing use cases.';
  children.childrenParentalControls = 'Parents can manage contacts, alerts, and sharing windows, but controls are explained in child-friendly language.';
  children.childrenNudgeTechniques = 'The product avoids streaks, social comparison, or reward loops that pressure more sharing or longer use.';
  children.childrenAadcChecked = 'aadc_0,aadc_2,aadc_3,aadc_6,aadc_8,aadc_9,aadc_10,aadc_12';
  children.childrenAadcNotes = 'The main AADC focus is privacy by default, data minimisation, parental controls, geolocation, and nudge techniques.';
  children.childrenRisk_0_5 = 'No independent use expected; parental setup and device pairing must stay adult-led.';
  children.childrenRisk_6_9 = 'Simple notices and constrained controls are necessary because younger children may not infer what live location means.';
  children.childrenRisk_10_12 = 'Risk of over-sharing rises if controls are framed as “safety rewards”.';
  children.childrenRisk_13_15 = 'Teens may seek greater autonomy, so parental controls and notices should explain visibility and choice clearly.';
  children.childrenRisk_16_17 = 'Controls should avoid blanket surveillance expectations and permit age-appropriate independence.';
  children.childrenEqualityLaw = 'Defaults and notices should work for children with different literacy, language, and accessibility needs.';
  autoComputeRiskLevel(children);
  autoTransitionStatus(children);

  return [hr, children];
}

// ── View management ─────────────────────────────────────────

let currentEditId = null;

function renderSectionGuidance() {
  Object.entries(SECTION_GUIDANCE).forEach(([step, cards]) => {
    const container = document.getElementById(`guideStep${step}`);
    if (!container) return;
    container.innerHTML = cards.map(card => `
      <article class="guidance-card">
        <span class="guidance-card__eyebrow">${esc(card.eyebrow[currentLang])}</span>
        <h4>${esc(card.title[currentLang])}</h4>
        <ul class="guidance-list">
          ${card.items.map(item => `<li>${esc(item[currentLang])}</li>`).join('')}
        </ul>
      </article>
    `).join('');
  });
}

function renderEditorRail(d) {
  const pulse = document.getElementById('editorPulse');
  const steps = document.getElementById('editorStepNav');
  const methods = document.getElementById('editorMethodPack');
  if (!pulse || !steps || !methods || !d) return;

  const completion = getCompletionPercentage(d);
  const jurisdiction = JURISDICTION_DATA[d.jurisdiction]?.label?.[currentLang] || d.jurisdiction;
  pulse.innerHTML = `
    <div class="pulse-grid">
      <article class="pulse-card">
        <span>${esc(t('qvCompletion'))}</span>
        <strong>${completion}%</strong>
        <p>${esc(statusText(d.status))}</p>
      </article>
      <article class="pulse-card">
        <span>${esc(t('qvRisk'))}</span>
        <strong>${esc(riskText(d.riskLevel))}</strong>
        <p>${esc(jurisdiction)}</p>
      </article>
      <article class="pulse-card">
        <span>${esc(t('qvOwner'))}</span>
        <strong>${esc(d.owner || '-')}</strong>
        <p>${esc(d.processingActivity || d.title || '-')}</p>
      </article>
    </div>
  `;

  const total = getTotalSteps(d);
  let html = '<nav class="step-nav">';
  for (let step = 1; step <= total; step++) {
    const complete = isStepComplete(d, step);
    html += `
      <a class="step-nav__item" href="#section-step-${step}">
        <span class="step-nav__index">${step}</span>
        <span class="step-nav__copy">
          <strong>${esc(t(`legStep${step}`))}</strong>
          <p>${esc(t(`hintStep${step}`))}</p>
        </span>
        <span class="step-nav__status ${complete ? 'is-done' : ''}">${esc(t(complete ? 'done' : 'notDone'))}</span>
      </a>
    `;
  }
  html += '</nav>';
  steps.innerHTML = html;

  const packList = [
    {
      title: txt('EDPB / WP248 baseline', 'EDPB / WP248 基线'),
      body: txt('Use the EU threshold criteria and acceptable-DPIA structure as the core framework.', '以欧盟门槛标准和可接受 DPIA 结构作为默认基线。'),
    },
    {
      title: txt('ICO question prompts', 'ICO 引导问题'),
      body: txt('Use the ICO template questions to tell the user what a good answer needs to cover.', '用 ICO 模板问题来告诉用户“一份合格答案应覆盖什么”。'),
    },
    {
      title: txt('German field detail', '德国字段细化'),
      body: txt('Use BayLfD and Lower Saxony guidance for operational detail, evidence, and review discipline.', '用 BayLfD 和下萨克森的官方材料补足操作细节、证据和复审纪律。'),
    },
  ];
  methods.innerHTML = packList.map(item => `
    <article class="method-pack">
      <strong>${esc(item.title[currentLang])}</strong>
      <p>${esc(item.body[currentLang])}</p>
    </article>
  `).join('');
}

function navigateToEditor(id) {
  currentEditId = id;
  const section = document.getElementById('editorSection');
  section.style.display = '';
  initEditor(id);
  const summaryEl = document.getElementById('trashDropdown');
  if (summaryEl) summaryEl.removeAttribute('open');
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
  const list = getActiveCases().sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

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

  const jurisdictionCounts = Object.keys(JURISDICTION_DATA).map(key => ({
    label: JURISDICTION_DATA[key].label[currentLang],
    count: list.filter(d => d.jurisdiction === key).length,
  })).filter(item => item.count > 0);

  document.getElementById('portfolioMix').innerHTML = jurisdictionCounts.length
    ? jurisdictionCounts.map(item => `<span class="mix-chip">${esc(item.label)} <strong>${item.count}</strong></span>`).join('')
    : `<span class="mix-chip">EDPB core <strong>0</strong></span>`;

  const noteCards = [
    {
      title: txt('Need + threshold first', '先判断门槛'),
      body: txt('Step 1 now separates blacklist / WP248 screening logic from the rest of the assessment so users know why they are doing a DPIA at all.', '步骤 1 先拆开 blacklist / WP248 门槛判断，让填写人先弄明白“为什么要做 DPIA”。'),
    },
    {
      title: txt('Description before judgment', '先描述，再判断'),
      body: txt('The workbench now asks for data categories, subjects, recipients, and lifecycle so later risk scoring has a factual basis.', '工作台现在先收集数据类别、数据主体、接收方和生命周期，后面的风险判断才有事实基础。'),
    },
    {
      title: txt('Risk must map to action', '风险必须挂到动作'),
      body: txt('Risks, measures, residual risk, and sign-off are now separated so the user can show what changed and who owns it.', '风险、措施、残余风险和签核现在分开记录，便于证明“改了什么、谁负责”。'),
    },
  ];
  document.getElementById('methodologyNotes').innerHTML = noteCards.map(note => `
    <article class="methodology-note">
      <strong>${esc(note.title[currentLang])}</strong>
      <p>${esc(note.body[currentLang])}</p>
    </article>
  `).join('');

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
    renderTrash();
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

  renderTrash();
}

function renderTrash() {
  const deleted = getDeletedCases().sort((a, b) => new Date(b.deletedAt) - new Date(a.deletedAt));
  const countEl = document.getElementById('trashCount');
  const listEl = document.getElementById('trashList');
  if (!countEl || !listEl) return;
  countEl.textContent = String(deleted.length);
  if (!deleted.length) {
    listEl.innerHTML = `<div class="trash-item"><p>${esc(t('emptyTrash'))}</p></div>`;
    return;
  }
  listEl.innerHTML = deleted.map(d => `
    <article class="trash-item">
      <strong>${esc(d.title || d.processingActivity || t('qvTitle'))}</strong>
      <p>${esc(d.processingActivity || d.owner || '-')}</p>
      <div class="trash-item__actions">
        <button class="btn btn-secondary btn-sm" type="button" onclick="restoreFromTrash('${d.id}')">${t('restore')}</button>
      </div>
    </article>
  `).join('');
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
  const created = createDpia(title, activity, owner);
  closeCreateModal();
  renderDashboard();
  navigateToEditor(created.id);
  setSaveStatus('saveStatusSaved');
}

// ── Delete ──────────────────────────────────────────────────

function confirmDelete(id) {
  if (confirm(t('deleteConfirm'))) {
    deleteDpia(id);
    if (currentEditId === id) closeEditor();
    renderDashboard();
    setSaveStatus('saveStatusDeleted');
  }
}

function restoreFromTrash(id) {
  restoreDpia(id);
  renderDashboard();
  setSaveStatus('saveStatusRestored');
}

function loadSampleWorkbench() {
  const deleted = getDeletedCases();
  if (getActiveCases().length && !confirm(t('loadSampleConfirm'))) return;
  const samples = buildSampleCases();
  saveAll([...samples, ...deleted]);
  renderDashboard();
  if (samples[0]) navigateToEditor(samples[0].id);
  setSaveStatus('saveStatusSampleLoaded');
}

function downloadJson(filename, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportWorkbenchJson() {
  downloadJson(`dpia-workbench-${new Date().toISOString().slice(0, 10)}.json`, {
    exportedAt: new Date().toISOString(),
    cases: getActiveCases(),
    deleted: getDeletedCases(),
  });
  setSaveStatus('saveStatusExported');
}

function saveCurrentDraft() {
  if (!currentEditId) {
    setSaveStatus('saveStatusNoOpen');
    return;
  }
  saveEditor();
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
    ['qvJurisdiction', JURISDICTION_DATA[d.jurisdiction]?.label?.[currentLang] || d.jurisdiction],
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
  navigateToEditor(d.id);
  setSaveStatus('saveStatusSaved');
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
  document.getElementById('ed-data-categories').value = d.dataCategories || '';
  document.getElementById('ed-data-subjects').value = d.dataSubjects || '';
  document.getElementById('ed-recipients').value = d.recipientsTransfers || '';
  document.getElementById('ed-lifecycle').value = d.lifecycleSystems || '';

  document.getElementById('ed-legal').value = d.legalBasis || '';
  document.getElementById('ed-necessity').value = d.necessityAssessment || '';
  document.getElementById('ed-alternatives').value = d.alternativesConsidered || '';
  document.getElementById('ed-rights').value = d.rightsSafeguards || '';

  document.getElementById('ed-risks').value = d.risksIdentified || '';
  document.getElementById('ed-risk-assessment').value = d.riskAssessment || '';

  document.getElementById('ed-mitigation').value = d.mitigationMeasures || '';
  document.getElementById('ed-residual').value = d.residualRisk || '';
  document.getElementById('ed-measure-plan').value = d.measurePlan || '';

  document.getElementById('ed-dpo').value = d.dpoAdvice || '';
  document.getElementById('ed-stakeholder').value = d.stakeholderConsultation || '';

  document.getElementById('ed-signoff').value = d.signOffOutcome || '';
  document.getElementById('ed-review').value = d.reviewDate || '';
  document.getElementById('ed-authority').value = d.authorityConsultation || '';
  document.getElementById('ed-project-actions').value = d.projectActions || '';

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
  renderSectionGuidance();
  renderEditorRail(d);
  setSaveStatus('saveStatusReady');
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
  d.dataCategories = document.getElementById('ed-data-categories').value.trim();
  d.dataSubjects = document.getElementById('ed-data-subjects').value.trim();
  d.recipientsTransfers = document.getElementById('ed-recipients').value.trim();
  d.lifecycleSystems = document.getElementById('ed-lifecycle').value.trim();

  d.legalBasis = document.getElementById('ed-legal').value.trim();
  d.necessityAssessment = document.getElementById('ed-necessity').value.trim();
  d.alternativesConsidered = document.getElementById('ed-alternatives').value.trim();
  d.rightsSafeguards = document.getElementById('ed-rights').value.trim();

  d.risksIdentified = document.getElementById('ed-risks').value.trim();
  d.riskAssessment = document.getElementById('ed-risk-assessment').value.trim();

  d.mitigationMeasures = document.getElementById('ed-mitigation').value.trim();
  d.residualRisk = document.getElementById('ed-residual').value.trim();
  d.measurePlan = document.getElementById('ed-measure-plan').value.trim();

  d.dpoAdvice = document.getElementById('ed-dpo').value.trim();
  d.stakeholderConsultation = document.getElementById('ed-stakeholder').value.trim();

  d.signOffOutcome = document.getElementById('ed-signoff').value.trim();
  d.reviewDate = document.getElementById('ed-review').value;
  d.authorityConsultation = document.getElementById('ed-authority').value.trim();
  d.projectActions = document.getElementById('ed-project-actions').value.trim();

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
  renderEditorRail(d);
  renderDashboard();

  const msg = document.getElementById('saveMsg');
  msg.textContent = t('saveMsg');
  msg.style.display = 'inline';
  setTimeout(() => { msg.style.display = 'none'; }, 2000);
  setSaveStatus('saveStatusSaved');
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
  renderEditorRail(d);
  renderDashboard();
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
  renderEditorRail(d);
  renderDashboard();
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
  if (d) {
    d.jurisdiction = this.value;
    updateDpia(d);
    renderCriteria(d);
    renderEditorRail(d);
    renderDashboard();
  }
});

['createModal', 'quickViewModal', 'templateModal'].forEach(id => {
  const overlay = document.getElementById(id);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('is-open');
  });
});

applyI18n();
setSaveStatus('saveStatusReady');
renderDashboard();
