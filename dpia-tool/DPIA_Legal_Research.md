# DPIA 法律检索报告

> **法域与范围：** EU GDPR / UK GDPR  
> **重点覆盖：** EDPB、ICO（UK）、CNIL（FR）、DSK + 州级 DPA（DE）  
> **检索日期：** 2026-03-18  
> **用途：** 为构建 DPIA 工具提供法律与实务依据

---

## 目录

1. [触发条件](#一触发条件何时必须做-dpia)
2. [评估内容](#二评估内容dpia-必须应当包含什么)
3. [权威法律、指引、官方资源汇总](#三权威法律指引官方资源汇总)
4. [官方 DPIA 实例与模板](#四官方-dpia-实例与模板)
5. [对创建 DPIA 工具的建议](#五对创建-dpia-工具的建议)
6. [局限](#六局限)

---

## 一、触发条件（何时必须做 DPIA）

### 1. 法定条文：GDPR Art. 35(1) + (3)

`Fact:` Art. 35(1) 总原则——当一种处理活动（特别是使用新技术），考虑其 nature、scope、context 和 purposes，可能对自然人的权利与自由造成 **高风险** 时，控制者应在处理之前进行 DPIA。

`Fact:` Art. 35(3) 列出三类 **法定必须做** 的情形：

1. 基于自动化处理（含 profiling）对个人方面的系统性、广泛评估，且据此作出对自然人产生法律效果或类似重大影响的决定；
2. 大规模处理 Art. 9(1) 特殊类别数据或 Art. 10 刑事定罪数据；
3. 大规模系统性监控公共可访问区域。

**来源：** [GDPR Art. 35](https://www.legislation.gov.uk/eur/2016/679/article/35/adopted/data.xht)

### 2. EDPB/WP29 的 9 项判定标准（WP248 rev.01）

`Fact:` WP29 在 WP248 rev.01 中提出 9 项标准，用于判断处理是否"可能产生高风险"。**一般规则：满足其中 2 项即应做 DPIA；某些情况下满足 1 项即可触发。**

| 编号 | 标准 | 说明 |
|------|------|------|
| 1 | Evaluation or scoring | 含信用评分、行为预测等 |
| 2 | Automated decision-making with legal/significant effect | 自动决策产生法律效果 |
| 3 | Systematic monitoring | 含视频监控、在线追踪 |
| 4 | Sensitive / highly personal data | Art. 9 特殊类别 + 通信、位置、财务等 |
| 5 | Large scale | 数据主体数量大、数据量大、地域/时间跨度大 |
| 6 | Matching or combining datasets | 跨来源、跨目的合并数据集 |
| 7 | Vulnerable data subjects | 儿童、员工、患者、老人、寻求庇护者等 |
| 8 | Innovative use / new technologies | AI/ML、IoT、生物识别新应用等 |
| 9 | Processing preventing exercise of rights / access to services | 处理阻碍权利行使或获得服务 |

**来源：** [WP248 rev.01](https://ec.europa.eu/newsroom/article29/items/611236)（EDPB 于 2018.5.25 首次全体会议正式 endorse）

### 3. 各监管机构的 Art. 35(4) 正式清单

#### 3.1 ICO（英国）

`Fact:` ICO 发布了 10 类必须做 DPIA 的处理活动：

1. **创新/新技术**（含 AI/ML、IoT、智能设备、自动驾驶、神经测量）+ WP248 任一其他标准
2. **生物识别数据用于唯一识别** + 任一其他标准
3. **基因数据**（排除 GP 直接医疗）+ 任一其他标准
4. **非直接从数据主体获取的数据**（依赖 Art. 14(5)(b) 豁免）+ 任一其他标准
5. **地理位置/行为追踪** + 任一其他标准
6. **儿童/弱势群体定向营销、自动决策或在线服务**
7. **拒绝服务型决策**（基于自动化决策或特殊类别数据决定能否获得产品/服务/机会）
8. **大规模 profiling**
9. **数据匹配**（多来源合并、比较、匹配）
10. **可能导致人身伤害的处理**

**来源：** [ICO — Examples of processing 'likely to result in high risk'](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/examples-of-processing-likely-to-result-in-high-risk/)

#### 3.2 CNIL（法国）

`Fact:` CNIL 于 2018.10.11 正式通过 Délibération n° 2018-327，列出 **14 类** 必须做 AIPD 的处理活动：

1. 医疗机构处理健康数据用于患者护理
2. 弱势群体的基因数据处理
3. 人力资源 profiling
4. 持续监控员工活动
5. 社会与卫生领域警报/报告管理
6. 职业领域警报/报告管理
7. 健康数据仓库/登记库
8. 可导致排斥/暂停合同的 profiling
9. 共享的违约记录处理
10. 使用外部来源的 profiling
11. 弱势群体的生物识别数据
12. 社会住房申请管理
13. 社会/医疗-社会陪伴
14. 大规模地理位置数据处理

CNIL 同时发布了 **不需要** 做 AIPD 的清单。

**来源：**

- [CNIL — 正式清单列表页](https://www.cnil.fr/fr/listes-des-traitements-pour-lesquels-une-aipd-est-requise-ou-non)
- [CNIL — 正式清单 PDF](https://www.cnil.fr/sites/default/files/atoms/files/liste-traitements-aipd-requise.pdf)
- [Délibération n° 2018-327](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037559521)

#### 3.3 DSK（德国 — 非公共部门）

`Fact:` DSK 于 2018.7.2 发布非公共部门的 **Muss-Liste v1.1**，包含 **16 类** 强制 DPIA 处理活动：

1. 涉及社会/职业/特殊官方保密的大规模数据处理
2. 大规模位置数据处理
3. 多来源数据聚合用于信用评分/欺诈防控型自动决策
4. 公共区域移动光电子设备大规模集中采集
5. 大规模收集并公开/传输用于评价行为的个人数据
6. 员工行为大规模处理（可产生法律后果）
7. 兴趣/社交网络/人格的全面画像
8. 多来源数据合并用于未预设目的的发现（大数据分析）
9. AI 用于处理个人数据以评估或控制与数据主体的交互
10. 非预期使用移动设备传感器进行位置追踪
11. 视频/音频自动化评估以分析人格
12. 通过不受保护的电子设备接口采集个人数据
13. 移动和购买行为的全面画像
14. Art. 9 特殊类别数据的匿名化（非个案级别）用于向第三方传输
15. 创新传感器/移动应用采集 Art. 9/10 数据并集中处理
16. Art. 9/10 数据被新技术提供者用于评估个人表现

**来源：**

- [BayLDA — DSK Muss-Liste（英文 PDF）](https://www.lda.bayern.de/media/dsfa_muss_liste_dsk_en.pdf)
- [BfDI — DSK 非公共部门清单下载页](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Muster/Liste_VerarbeitungsvorgaengeDSK.html)

#### 3.4 BayLfD（巴伐利亚 — 公共部门）

`Fact:` BayLfD 为巴伐利亚公共部门发布了独立的 **Bayerische Blacklist**（Art. 35(4) 清单）。

**来源：** [BayLfD — DSFA 主页](https://www.datenschutz-bayern.de/dsfa/index.html)

---

## 二、评估内容（DPIA 必须/应当包含什么）

### 1. 法定最低内容：Art. 35(7)

`Fact:` DPIA 至少包含以下 4 项：

| 条款 | 内容 |
|------|------|
| Art. 35(7)(a) | 对拟议处理活动及目的的系统性描述；含控制者追求的合法利益（如适用） |
| Art. 35(7)(b) | 处理活动相对于其目的的必要性和比例性评估 |
| Art. 35(7)(c) | 对数据主体权利与自由的风险评估 |
| Art. 35(7)(d) | 拟采取的应对风险措施，含保障、安全措施、证明合规的机制 |

### 2. WP248 rev.01 — Annex 2: 可接受 DPIA 的标准

`Fact:` WP29 在 Annex 2 中列出了监管机构衡量 DPIA 是否可接受的标准清单，在 Art. 35(7) 四项基础上还要求 DPIA 体现：

**系统性描述处理活动方面：**

- 数据类别、接收方、保存期限
- 处理的功能性描述
- 支撑个人数据的资产（硬件、软件、网络、人员、纸质载体）

**必要性与比例性评估方面：**

- 明确的合法处理基础
- 目的明确性与合法性
- 数据最小化与充分性
- 存储期限限制

**合规措施方面：**

- 支持数据主体权利（访问、更正、删除、可携、反对、限制处理）
- 向数据主体提供信息
- 处理者关系符合 Art. 28
- 国际传输保障
- 事前咨询要求

**风险管理方面：**

- 风险来源
- 对数据主体权利的潜在影响
- 威胁识别（非法访问、非预期修改、数据消失）
- 风险可能性和严重性的评估

**利益相关方参与：**

- 征求数据主体意见（如适当）
- 获取 DPO 建议

### 3. 实务上通常还应记录的内容

`Inference:` 综合 Art. 35(2)(9)(11)、Art. 36、ICO 7-step 指引和 CNIL 方法论，一个完整的 DPIA 文档通常还需要：

- 为什么触发 DPIA（筛选/阈值分析）
- DPO 意见原文及是否采纳（Art. 35(2)）
- 数据主体咨询结果或不咨询的理由（Art. 35(9)）
- 缓解后的剩余风险水平
- 是否触发 Art. 36 向监管机构事前咨询
- 管理层签署/审批
- 何时复审、什么变更会触发更新（Art. 35(11)）

### 4. ICO 儿童 DPIA 的额外评估内容

`Fact:` ICO 的 Annex D 儿童 DPIA 模板在通用 DPIA 模板基础上增加了以下评估维度：

- **Age-assurance 计划：** 如何确认/估算用户年龄
- **Parental controls 计划：** 是否以及如何实施家长控制
- **Nudge techniques：** 服务是否使用推动/诱导技术
- **Age Appropriate Design Code 15 项标准逐项合规：**
  1. Best interests of the child
  2. Data protection impact assessments
  3. Age appropriate application
  4. Transparency
  5. Detrimental use of data
  6. Policies and community standards
  7. Default settings
  8. Data minimisation
  9. Data sharing
  10. Geolocation
  11. Parental controls
  12. Profiling
  13. Nudge techniques
  14. Connected toys and devices
  15. Online tools
- **儿童特有风险评估：** 需按不同年龄段分别评估对儿童的特定风险
- **平等法下的责任：** 需考虑英格兰、苏格兰、威尔士和北爱尔兰的适用平等立法
- **儿童发展需求研究：** 应参考相关年龄段儿童的发展需求、福祉或能力的指引或研究

**来源：** [ICO — Annex D: DPIA template](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/annex-d-dpia-template/)

---

## 三、权威法律、指引、官方资源汇总

### A. 一级来源（法律条文）

| 文件 | 链接 |
|------|------|
| GDPR Art. 35（DPIA） | [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/35/adopted/data.xht) |
| GDPR Art. 36（事前咨询） | [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/36/adopted/data.xht) |
| GDPR Recitals 84, 89–95 | EUR-Lex / legislation.gov.uk |

### B. EDPB / WP29 指引

| 文件 | 说明 | 链接 |
|------|------|------|
| WP248 rev.01 | DPIA 指引 + 9 项标准 + Annex 2 可接受标准 | [EC Newsroom](https://ec.europa.eu/newsroom/article29/items/611236) |
| EDPB endorsed WP29 Guidelines 总览 | EDPB 认可的全部 WP29 文件列表 | [edpb.europa.eu](https://www.edpb.europa.eu/our-work-tools/general-guidance/endorsed-wp29-guidelines_en) |
| EDPB consistency opinions on Art. 35(4) lists | 各成员国清单的一致性意见 | [Register](https://www.edpb.europa.eu/our-work-tools/consistency-findings/register-for-decisions) |

### C. ICO（英国）

| 资源 | 链接 |
|------|------|
| DPIA 指引总页 | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias) |
| When do we need to do a DPIA? | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/) |
| How do we do a DPIA?（7 步法） | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/how-do-we-do-a-dpia/) |
| Examples of high-risk processing（Art. 35(4) 清单） | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/examples-of-processing-likely-to-result-in-high-risk/) |
| DPIA 通用模板（Word） | [ico.org.uk](https://ico.org.uk/media2/migrated/2553993/dpia-template.docx) |
| DPIA 儿童模板 — Annex D（PDF，适用于 Age Appropriate Design Code） | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/annex-d-dpia-template/) |
| DPIA 儿童工具总页（含全部示例入口） | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/dpia-tools) |

### D. CNIL（法国）

| 资源 | 链接 |
|------|------|
| AIPD 总指引页 | [cnil.fr](https://www.cnil.fr/RGPD-analyse-impact-protection-des-donnees-aipd) |
| 正式必须做 AIPD 的清单（PDF） | [cnil.fr PDF](https://www.cnil.fr/sites/default/files/atoms/files/liste-traitements-aipd-requise.pdf) |
| 不需要做 AIPD 的清单 | [cnil.fr](https://www.cnil.fr/fr/liste-traitements-aipd-non-requise) |
| Délibération n° 2018-326（AIPD 指引采纳决议） | [Légifrance](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037559518) |
| Délibération n° 2018-327（必做清单采纳决议） | [Légifrance](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037559521) |
| PIA Guide 1 — Methodology（EN PDF） | [cnil.fr PDF](https://www.cnil.fr/sites/cnil/files/atoms/files/cnil-pia-1-en-methodology.pdf) |
| PIA Guide 3 — Knowledge Bases（EN PDF） | [cnil.fr PDF](https://www.cnil.fr/sites/cnil/files/atoms/files/cnil-pia-3-en-knowledgebases.pdf) |
| PIA Guides 总页（含全部指南下载） | [cnil.fr](https://www.cnil.fr/en/guides-aipd) |
| PIA 开源软件工具 | [cnil.fr](https://www.cnil.fr/en/open-source-pia-software-helps-carry-out-data-protection-impact-assesment) |
| PIA 软件 GitHub（前端） | [github.com/LINCnil/pia](https://github.com/LINCnil/pia) |
| PIA 软件 GitHub（后端） | [github.com/LINCnil/pia-back](https://github.com/LINCnil/pia-back) |

### E. DSK + 德国州级 DPA

| 资源 | 链接 |
|------|------|
| DSK Kurzpapier Nr. 5（DSFA） | [datenschutzkonferenz-online.de](https://datenschutzkonferenz-online.de/kurzpapiere.html) |
| DSK Muss-Liste（非公共部门，英文 PDF by BayLDA） | [lda.bayern.de PDF](https://www.lda.bayern.de/media/dsfa_muss_liste_dsk_en.pdf) |
| BfDI — DSK 非公共部门清单下载 | [bfdi.bund.de](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Muster/Liste_VerarbeitungsvorgaengeDSK.html) |
| BfDI — §67 BDSG DSFA 模板 + 说明 | [bfdi.bund.de](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Muster/Muster_Hinweise_DSFA.html) |
| BfDI — §67 BDSG 风险评估方法附件 | [bfdi.bund.de](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Muster/Anlage_zu_Muster_DSFA.html) |
| BayLfD — DSFA 总页（含 Bayerische Blacklist + 方法论 + 模块化工具） | [datenschutz-bayern.de](https://www.datenschutz-bayern.de/dsfa/index.html) |
| BayLDA — DSFA 主题页 | [lda.bayern.de](https://www.lda.bayern.de/de/thema_dsfa.html) |
| BayLDA — 模板/模式页 | [lda.bayern.de](https://lda.bayern.de/de/muster.html) |
| BayLDA — DSFA 阈值检查问卷（PDF） | [lda.bayern.de PDF](https://www.lda.bayern.de/media/pruefungen/DSFA_Schwellwert_Pruefbogen.pdf) |
| DSK WP248 rev.01 德文版（DSK 官网） | [datenschutzkonferenz-online.de PDF](https://www.datenschutzkonferenz-online.de/media/wp/20171004_wp248_rev01.pdf) |

---

## 四、官方 DPIA 实例与模板

### 4.1 ICO 官方模板

| 名称 | 说明 | 链接 |
|------|------|------|
| DPIA Template（通用） | ICO 通用 DPIA 模板（Word 格式），适用于所有处理活动 | [ico.org.uk](https://ico.org.uk/media2/migrated/2553993/dpia-template.docx) |
| DPIA Template — Annex D（儿童在线服务） | 面向可能被儿童访问的在线服务的专用 DPIA 模板（PDF 格式）。在通用模板基础上增加了 Age Appropriate Design Code 15 项标准的逐项合规检查、age-assurance、parental controls、nudge techniques、儿童特有风险按年龄段评估等维度 | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/annex-d-dpia-template/) |

### 4.2 ICO 官方完整 DPIA 示例

| 名称 | 说明 | 链接 |
|------|------|------|
| Sample DPIA: Mobile Gaming App | 虚构儿童手游 "Cooking Numbers" 的完整 DPIA 示例，由 Fundamentally Games 设计产品规格 | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/dpia-tools/mobile-gaming-app/) |
| Sample DPIA: Online Retail | 虚构在线玩具商店的完整 DPIA 示例，面向中小企业 | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/dpia-tools/online-retail/) |
| Sample DPIA: Connected Toy | 虚构联网玩具的完整 DPIA 示例（beta 版），由 ICO 与玩具制造商合作、DLA Piper 起草 | [ico.org.uk](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/dpia-tools/connected-toy/) |

### 4.3 CNIL 官方实例

| 名称 | 说明 | 链接 |
|------|------|------|
| PIA Guide 2 — Templates | CNIL 方法论配套的评估模板/表格 | [cnil.fr](https://www.cnil.fr/en/guides-aipd) |
| 案例研究 "Captoo" | CNIL 官方发布的 DPIA 案例分析 | 包含在 [cnil.fr guides-aipd](https://www.cnil.fr/en/guides-aipd) 页面中 |
| PIA 物联网指南 | 专为 connected objects 设计的 PIA 方法论 | [cnil.fr PDF](https://www.cnil.fr/sites/default/files/atoms/files/cnil-pia-piaf-connectedobjects-fr.pdf) |
| PIA 开源软件（v3.0.3） | 可直接使用的 DPIA 工具，含步骤引导和风险可视化，支持 20 种语言 | [GitHub](https://github.com/LINCnil/pia) |

### 4.4 BayLfD（巴伐利亚）官方模块化实例

`Fact:` BayLfD 提供了迄今各欧洲 DPA 中最细致的 **填写完成的 DPIA 示例**（Ausfüllbeispiel）和空白表格（Leerformular），按模块组织：

| 模块 | 内容 | 来源 |
|------|------|------|
| Modul 1 | 处理活动描述 — 含填写示例 + 空白表 | [datenschutz-bayern.de](https://www.datenschutz-bayern.de/dsfa/index.html) |
| Modul 2 | DSFA 必要性审查（阈值分析）— 含示例 + 空白表 | 同上 |
| Modul 3 | DSFA 报告（含风险分析附件）— 含示例 + 空白表 | 同上 |
| Modul 4 | IT 人事管理系统 — 运营资产描述 + 风险分析示例 | 同上 |
| Modul 5 | 视频会议系统 — 运营资产描述 + 风险分析示例 | 同上 |
| Modul 6 | 计算机工作站 — 含电话子系统示例 | 同上 |

### 4.5 BfDI（德国联邦）官方模板

| 名称 | 说明 | 链接 |
|------|------|------|
| §67 BDSG DSFA 模板 + 说明 | BfDI 发布的 DSFA 模板文档（PDF, 193KB） | [bfdi.bund.de](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Muster/Muster_Hinweise_DSFA.html) |
| §67 BDSG 风险评估方法附件 | 用于识别和评估数据主体权利风险的方法论文件（PDF, 222KB） | [bfdi.bund.de](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Muster/Anlage_zu_Muster_DSFA.html) |

---

## 五、对创建 DPIA 工具的建议

`Recommendation:`

1. **触发筛选模块**：以 WP248 rev.01 的 9 项标准为骨架，叠加 ICO / CNIL / DSK 各自的 Art. 35(4) 正式清单作为预置规则，让用户快速判断是否需要做 DPIA。可参考 BayLDA 的 [DSFA 阈值检查问卷 PDF](https://www.lda.bayern.de/media/pruefungen/DSFA_Schwellwert_Pruefbogen.pdf)。

2. **评估内容框架**：以 Art. 35(7) 四项法定要求 + WP248 Annex 2 的可接受标准为内容框架，对应 CNIL 方法论的四阶段（context → fundamental principles → risks → validation），参考 ICO 7-step 流程。

3. **儿童场景扩展**：如果工具需覆盖儿童数据处理场景，应在标准 DPIA 流程基础上嵌入 ICO Annex D 模板中的 Age Appropriate Design Code 15 项标准逐项检查、age-assurance 评估和按年龄段的儿童特有风险评估。

4. **风险评估方法**：CNIL PIA Guide 1 提供了基于 EBIOS 方法的风险评估矩阵（可能性 × 严重性），BfDI 提供了 §67 BDSG 的风险评估方法附件。两者可结合使用。

5. **模板参考**：直接研究 BayLfD 的 6 个模块化工具（有填写示例）、ICO 的 Word 模板和 Annex D 儿童模板、CNIL 的 PIA 开源软件源码（GitHub）。

6. **合规验证清单**：把 WP248 Annex 2 的标准做成一个 checklist，在工具的最后一步让用户自查 DPIA 是否完整。

---

## 六、局限

- ICO 指引目前因 UK Data (Use and Access) Act 2025（2025.6.19 生效）正在审查中，可能更新。
- DSK 清单有"非公共部门"和各州"公共部门"两套；各州可能有自己的补充清单。
- 上述分析不替代正式法律意见。如果工具面向商业发布，建议由有资质的律师对工具的法律逻辑进行审查。
- 本报告检索日期为 2026-03-18，所有链接和文件版本以该日期为准。
