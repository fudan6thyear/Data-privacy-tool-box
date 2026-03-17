# DPIA template tools 的产品需求文档

## 1. 文档目的

本文档基于 `dpia-tool/` 目录下已处理的 51 份监管模板、示例、指南和风险分析文件形成，目标是定义一款可用于后续构建 `EDPB DPIA Toolbox` 的产品需求基线。

该产品不是单一国家模板的数字化复刻，而是一个面向欧盟 DPIA 实践的模块化合规工作台。

## 2. 背景与问题定义

从本次读取的材料可以看出，当前 DPIA 实践存在四个典型问题：

### 2.1 模板碎片化

- ICO 侧重线性问答模板
- Niedersachsen 侧重 DPIA 必要性筛查
- BfDI 侧重特定公共部门/执法场景
- BayLfD 侧重模块化风险分析工作台

### 2.2 证据链薄弱

传统 DPIA 文档常只留下文字结论，缺少：

- 关联系统
- 关联制度
- 关联 TOM
- 关联架构图
- 修改历史

### 2.3 风险分析方法不统一

不同文件对“风险”的处理差异很大：

- 有的只给开放文本
- 有的使用概率 x 影响
- 有的强调法定高风险判断
- 有的强调合规目标达成度

### 2.4 缺少专题扩展能力

儿童在线服务、公共部门、特定行业等场景需要增加专用问题，但大多数模板没有可配置扩展能力。

## 3. 产品愿景

构建一个 `DPIA template tools` 产品，使组织能够：

- 快速判断某一处理活动是否需要 DPIA
- 使用统一流程完成通用 DPIA
- 在复杂项目中开展可审计、可复用的风险分析
- 将处理活动、支撑系统、措施、证据和审批放入同一工作台
- 针对儿童、公共部门或其他专题场景加载额外模块

## 4. 产品目标

### 4.1 业务目标

- 降低开展 DPIA 的门槛
- 提高不同项目之间 DPIA 的一致性
- 缩短从初稿到审批通过的周期
- 提高 DPO、法务、产品、工程、安全之间的协作效率

### 4.2 合规目标

- 覆盖 Art. 35 的核心流程
- 支持 must-list、Art. 35(3)、WP248 风险标准的筛查
- 支持必要性、比例性、风险、措施、残余风险、签署留痕
- 支持 prior consultation 升级判断

### 4.3 产品目标

- 提供从筛查到导出的完整闭环
- 提供通用模板与专题模板共存机制
- 提供结构化数据模型，而不是单纯文档编辑

## 5. 非目标

本阶段不把以下内容作为核心目标：

- 自动替代法律结论
- 自动生成最终法律意见书
- 自动适配所有成员国细节规则
- 完整覆盖所有行业控制框架
- 在 MVP 中实现过重的可编程规则引擎

## 6. 用户与角色

### 6.1 主要用户

- DPO / Privacy Officer
- 法务与合规经理
- 产品经理
- 工程负责人
- 安全负责人
- 采购/供应商管理人员
- 业务流程负责人

### 6.2 角色职责

#### Case Owner

- 发起 DPIA
- 协调参与人
- 填写业务背景与目的
- 推进审批

#### DPO / Reviewer

- 评审筛查结论
- 评审必要性与比例性分析
- 审核风险与措施
- 决定是否需要升级咨询

#### Security / IT Contributor

- 填写系统、接口、技术控制
- 补充支撑系统风险
- 维护措施与实施状态

#### Legal / Compliance Contributor

- 填写合法依据
- 评估透明度、权利保障、数据共享、跨境等问题

#### Approver

- 批准措施
- 接受残余风险
- 触发 prior consultation 或阻止上线

## 7. 核心产品原则

### 7.1 先筛查，后立项

产品第一步必须是 `是否需要 DPIA`，不能默认要求所有事项都进入完整 DPIA。

### 7.2 通用骨架 + 专题扩展

产品应有统一主流程，同时允许按专题加载附加模块。

### 7.3 对象化而非长表单化

应把以下对象分开管理：

- 处理活动
- 支撑系统/设备
- 风险
- 措施
- 证据
- 审批

### 7.4 风险双轨

产品应同时支持：

- 经典风险评分
- 合规目标达成分析

### 7.5 证据链优先

关键回答都应允许挂接：

- 文件
- 链接
- 文档编号
- 备注

### 7.5.1 评估不是静态文档，而是生命周期对象

DPIA 不应被当作一次性文档产物，而应被当作会持续复核、重新评估、比较版本差异的生命周期对象。

系统必须支持：

- 版本记录
- 状态迁移
- 复核触发
- 再评估
- 归档与保留

### 7.6 UI 与现有工具保持同一工作台语言

后续 DPIA 工具的 UI 不能只“参考风格”，而必须与 [lia-tool](/Users/benjamin/Desktop/AI%20Practice/lia-tool) 和 [data-compliance-tool](/Users/benjamin/Desktop/AI%20Practice/data-compliance-tool) 保持同一套工作台设计语言。

必须继承：

- 浅色渐变背景与玻璃面板
- 胶囊式吸顶导航
- 大圆角卡片系统
- 宽屏工作台布局
- section label、标题、正文三层文本节奏
- 模块与模块之间稳定的垂直留白
- 表单卡片内部稳定的行距和块间距

### 7.7 关键交付需要第二 AI 视角复核

本产品后续关键文档和设计稿应经过独立 `AI coworker` review。

review 至少覆盖：

- PRD
- 信息架构
- 核心字段设计
- 高保真 UI 或实现结果

review 输出至少包括：

- 同意点
- 风险点
- 反对意见
- 建议修改项

### 7.8 与同工作区工具的数据关系必须明确

由于本工具将与 [lia-tool](/Users/benjamin/Desktop/AI%20Practice/lia-tool) 和 [data-compliance-tool](/Users/benjamin/Desktop/AI%20Practice/data-compliance-tool) 共同构成合规工作台，产品必须明确共享对象与边界，不能形成三个彼此孤立的孤岛工具。

至少要明确：

- 哪些对象允许复用
- 哪些字段允许预填
- 哪些结论只引用、不复制
- 哪些对象为 DPIA 独有

## 8. 产品范围

本产品范围包括以下模块：

1. Screening 模块
2. Core DPIA 模块
3. Risk & Controls 模块
4. Extensions 模块
5. Governance & Output 模块

## 9. 信息架构

### 9.1 顶层对象

- Workspace
- DPIA Case
- Processing Activity
- Supporting Asset / System
- Screening Record
- Consultation Record
- Risk Record
- Control / TOM
- Evidence
- Approval Record
- Export

### 9.2 Case 下的建议结构

- Overview
- Screening
- Processing Description
- Consultation
- Necessity & Proportionality
- Risk Analysis
- Controls / Action Plan
- Sign-off
- Evidence Library
- Exports

### 9.3 跨工具共享对象

后续实现应按共享对象模型设计，而不是仅共享 UI 皮肤。

建议共享或映射的对象包括：

- Product / Service
- Processing Activity
- Legal Basis / Lawful Basis decision
- Data Category
- Data Subject Category
- Recipient Category
- Evidence item

建议独立维护的对象包括：

- LIA-specific balancing record
- Article 30 record-specific table projection
- DPIA-specific risk record
- DPIA-specific control plan
- Prior consultation record

## 10. 关键流程

### 10.1 主流程

1. 创建 DPIA Case
2. 完成 Screening
3. 形成处理活动描述
4. 完成咨询记录
5. 完成必要性与比例性评估
6. 完成风险分析
7. 形成措施计划与残余风险判断
8. 发起审批
9. 导出报告
10. 设置后续复核时间

### 10.2 分支流程

#### Screening 结果为“不需要 DPIA”

- 保存判断记录
- 导出简版筛查结论
- 设置可选复核点

#### Screening 结果为“需要 DPIA”

- 自动创建 Core DPIA 草稿
- 继承基础信息

#### 存在残余高风险

- 阻止发布为“通过”
- 强制要求补充措施或发起 prior consultation 判断

### 10.3 DPIA 生命周期状态机

系统必须支持清晰的状态机，而不是只有宽泛状态标签。

建议最小状态机如下：

1. `Not Started`
2. `Screening In Progress`
3. `Screening Complete - DPIA Not Required`
4. `Screening Complete - DPIA Required`
5. `Draft`
6. `DPO Review`
7. `Approved`
8. `Prior Consultation Required`
9. `Published / Operational`
10. `Review Due`
11. `Reassessment In Progress`
12. `Archived`

每个状态必须定义：

- 允许的触发动作
- 可编辑模块
- 锁定规则
- 必需审批人
- 是否允许导出正式版

## 11. 功能需求

### FR-1 Case 创建与模板选择

用户必须能够：

- 新建 DPIA Case
- 输入标题、项目、负责人、业务域
- 选择默认模板
- 选择是否加载专题扩展

系统应支持：

- 通用模板
- 儿童在线服务扩展
- 公共部门/特殊法域扩展

### FR-2 Screening 模块

系统必须支持结构化筛查，至少覆盖三类问题：

- 监管 must-list
- Art. 35(3) 法定情形
- WP248 风险标准

每一道题必须支持：

- 是/否/不确定
- 说明
- 依据
- 证据链接

系统必须给出可审计结论：

- 不需要 DPIA
- 建议做 DPIA
- 必须做 DPIA

### FR-3 Processing Description

系统必须允许填写或复用以下内容：

- 处理活动名称
- 当前阶段
- 目的
- 处理性质
- 数据来源
- 数据流
- 数据类型
- 特殊类别数据
- 刑事数据
- 数据主体类别
- 共享对象
- 国际传输
- 保存期限
- 地理范围
- 规模

### FR-4 Consultation 模块

系统必须支持记录：

- 已咨询的内部团队
- 已咨询的数据主体或其代表
- 已咨询的处理者/供应商
- 安全、法律或其他专家意见
- 未咨询的理由

### FR-5 Necessity & Proportionality

系统必须支持结构化记录：

- 合法依据
- 目的与手段之间的必要性
- 是否存在侵害更小的替代方案
- 数据最小化说明
- 信息提供机制
- 数据主体权利支持机制
- 处理者管理机制
- 国际传输保障
- 功能蔓延防控

### FR-6 Supporting Assets / Systems

系统必须支持单独维护支撑对象，例如：

- 核心业务系统
- 视频会议系统
- 办公终端
- 电话系统
- 数据存储环境
- 第三方平台

每个支撑对象至少应支持：

- 基本描述
- 用途
- 所支撑的处理活动
- 处理的数据类别
- 主要接收者
- 删除与保留说明
- 技术组织措施
- 关联风险分析

### FR-7 风险分析

系统必须支持两种分析模式：

#### FR-7A 经典风险评分模式

适用于：

- 保密性
- 可用性
- 数据完整性

至少应支持：

- 风险源
- 风险场景
- 发生可能性
- 影响严重度
- 原始风险等级
- 已有关联措施
- 残余风险等级

#### FR-7B 合规目标达成模式

适用于：

- 数据最小化
- 透明度
- 干预权/权利保障
- 不可随意关联
- 准确性
- 概念/制度一致性

至少应支持：

- 合规目标
- 结构性缺口或危险情景
- 当前达成状态
- 改善措施
- 改善后状态
- 备注与证据

### FR-8 TOM / Measures Library

系统必须支持措施库对象，并允许：

- 单独创建措施
- 在多个风险间复用
- 按类别归类
- 附带来源依据
- 标记实施状态
- 指定责任人与截止时间

### FR-9 残余风险与升级判断

系统必须支持：

- 对每项风险给出残余风险
- 对整体 Case 给出总体残余风险判断
- 识别高残余风险
- 强制记录接受高残余风险的审批人
- 强制记录是否需要 prior consultation

### FR-10 儿童扩展模块

儿童在线服务扩展至少应增加以下字段与检查：

- 服务是否面向儿童
- 若非面向儿童，儿童是否仍可能访问
- 预期年龄段
- 年龄核验方案
- 家长控制方案
- 是否存在 geolocation
- 是否存在 profiling
- 是否存在 automated decision-making
- 是否存在 nudge techniques
- 是否符合 age appropriate design code 的关键标准

### FR-11 版本、状态与参与人

系统必须支持：

- 草稿
- 审核中
- 待批准
- 已批准
- 已关闭
- 需复核

每个 Case 应有：

- 参与人
- 角色
- 状态
- 修改记录
- 下一次例行复核时间

还必须支持：

- 版本号
- 版本差异概览
- 复核触发原因
- 重新评估记录
- 归档原因

### FR-12 证据库

系统必须支持统一证据库，并允许：

- 上传附件
- 记录外部链接
- 填写文档编号
- 标注证据类型
- 被多个字段复用

### FR-13 导出

系统必须支持导出：

- 完整 DPIA 报告
- Screening 摘要
- 风险与措施清单
- 审批记录

导出格式建议至少包括：

- Markdown
- DOCX
- PDF

### FR-14 复核与复用

系统应支持：

- 复制已有 Case
- 复用已有支撑系统
- 复用已有措施
- 设置年度或事件触发复核

### FR-15 扩展模块契约

系统必须定义扩展模块的最小接口，而不是只说“未来可扩展”。

每个扩展模块至少应声明：

- 模块标识
- 适用条件
- 输入字段清单
- 输出字段清单
- 在 UI 中插入的位置
- 在导出报告中的章节模板
- 是否影响 Screening 结论
- 是否影响风险分析或审批要求

MVP 可以只实现少量扩展，但接口必须先定义。

### FR-16 跨工具预填与引用

系统应支持与同工作区工具之间的最小联动：

- 从 data compliance tool 复用 Processing Activity 基础信息
- 从 data compliance tool 复用 Data Category、Recipient、Retention 等结构化字段
- 在适用时引用 LIA 的 lawful basis 分析结果或记录链接
- 对共享对象使用引用或映射，而不是复制粘贴文本

## 12. 内容模型要求

### 12.1 字段类型

系统需要支持：

- 短文本
- 长文本
- 单选
- 多选
- 评分
- 对象引用
- 证据引用
- 日期
- 责任人

### 12.2 结构化优先级

优先使用结构化字段的部分：

- 风险等级
- 参与角色
- 数据类别
- 数据主体类别
- 接收者类别
- 合法依据
- 控制类型
- 专题标准清单

## 13. 风险引擎设计要求

### 13.1 风险评分引擎

MVP 中应支持：

- 发生可能性四级
- 影响严重度四级
- 风险矩阵自动计算

### 13.2 合规目标达成引擎

MVP 中应支持：

- 红/黄/绿或等效等级
- 改进前/改进后对比
- 对应措施映射

### 13.3 计算透明性

系统必须展示：

- 评分如何得出
- 哪些字段影响结论
- 哪些风险尚未关闭

## 14. 前端设计 Token 与布局规范

### 14.1 规范原则

本节为实现规范，而不是风格描述。后续前端实现必须使用单一 token 值，不允许在同类组件上自由选择区间值。

### 14.2 Canonical Token

- 内容宽度：`min(1480px, calc(100% - 40px))`
- 页面外层内边距：`18px 0 56px`
- 主内容模块间距：`24px`
- 顶部导航吸顶偏移：`16px`
- 顶部导航底部外边距：`28px`
- 顶部导航内边距：`12px 14px`
- 顶部导航内部 gap：`16px`
- 主 panel 圆角：`30px`
- 次级 panel 圆角：`24px`
- 内联卡片圆角：`18px`
- pill 圆角：`999px`
- 主模块内边距：`24px`
- 大型工作台模块内边距：`28px`
- `section-heading` 主 gap：`24px`
- label 与标题之间 gap：`8px`
- 标题区到主体内容的间距：`20px`
- `field-grid` gap：`16px`
- `field-card` 内边距：`18px`
- button 最小高度：`44px`
- button 横向内边距：`16px`
- chip / badge 最小高度：`38px`
- label 字号：`0.8rem`
- label 字重：`700`
- label letter-spacing：`0.12em`
- body 基础行高：`1.62`

### 14.3 Typography Scale

- Font family：沿用现有工具的 `"SF Pro Display", "SF Pro Text", "PingFang SC", "Helvetica Neue", "Segoe UI", sans-serif`
- `h1`：`clamp(3rem, 5.2vw, 4.6rem)`，行高 `1.0`
- `h2`：`clamp(1.75rem, 2.4vw, 2.2rem)`，行高 `1.08`
- `h3`：`1rem` 到 `1.1rem`，行高 `1.4`
- 正文说明：`1rem`，行高 `1.62`

### 14.4 Radius Assignment Rule

- 页面级主工作台 panel：`30px`
- 章节级容器和二级卡片：`24px`
- 字段卡片、行内操作卡片、列表项：`18px`
- chip、badge、button、顶部导航：`999px`

## 15. 界面与交互要求

### 15.1 主界面原则

应避免把产品做成一整页法律问卷。

推荐交互：

- 左侧流程导航
- 中间表单/工作区
- 右侧证据与提示区

### 15.1.1 视觉与版式基线

UI 必须与 [lia-tool](/Users/benjamin/Desktop/AI%20Practice/lia-tool) 和 [data-compliance-tool](/Users/benjamin/Desktop/AI%20Practice/data-compliance-tool) 对齐，至少满足以下基线：

- 实现时以第 14 节中的 canonical token 为准
- 不允许同类组件自行选择不同尺寸
- 如需偏离，必须在设计评审中明确列出偏离原因

### 15.1.2 文字、标题、模块之间的节奏要求

后续实现时必须明确复用以下节奏，而不是“视觉上差不多”：

- label 与标题之间保留 `8px` 级别间距
- 标题与说明文字之间保持清晰断层，不可压缩到单行密排
- 模块标题区与其后表单、表格、卡片列表之间必须保持统一间距
- 表单卡片标题、帮助文案、输入框、辅助标签之间必须保持统一竖向节奏
- 不允许某些模块松、某些模块紧，导致整体版式失衡

### 15.1.3 响应式布局要求

必须定义明确断点，而不是只定义桌面最大宽度。

最小要求：

- `<= 1220px`：双栏工作区改为单栏堆叠
- `<= 768px`：主模块内边距降为 `20px`
- `<= 480px`：主要按钮允许全宽或双行排列
- 小屏下不得压缩标题层级和正文行高

### 15.1.4 不可接受的 UI 偏差

以下情况应视为不满足需求：

- 只复用颜色，不复用布局和留白
- 主模块边距、段落间距、按钮高度与现有两套工具明显不一致
- 标题层级混乱，导致页面密度明显偏高
- 模块之间行距不统一
- 移动端简单压缩后出现按钮拥挤、标题断裂、段落堆叠失衡

### 15.2 填写体验

必须支持：

- 自动保存
- 草稿恢复
- 字段级完成状态
- 必填缺失提示
- 跨模块跳转

### 15.3 复用体验

必须允许用户从已有对象中选择：

- 已有处理活动
- 已有系统
- 已有措施
- 已有证据

### 15.4 组件状态规范

在高保真设计与实现前，必须为主要组件定义状态：

- 默认
- hover
- focus-visible
- active
- disabled
- loading
- error
- success

范围至少覆盖：

- button
- input / textarea / select
- chip / badge
- card
- table row
- step navigation

## 16. 无障碍要求

本工具必须以 `WCAG 2.1 AA` 和 `EN 301 549` 为最低要求。

至少应满足：

- 键盘可完成完整流程
- focus-visible 明确且一致
- 颜色对比满足可读要求
- 顶层 landmark 结构明确
- 多模块流程的 tab 顺序合理
- 条件显示的字段对屏幕阅读器可理解
- 表格、步骤导航、状态 badge 有语义化标注

## 17. 审批与治理要求

系统必须支持：

- DPO 审核意见
- 业务批准
- 高残余风险接受人
- 审批时间戳
- 审批备注

系统应支持阻断规则：

- 高残余风险未审批时不能标记为完成
- 关键模块未完成时不能导出正式版

还应支持：

- DPO 评论与反馈
- prior consultation 是否已提交
- prior consultation 提交日期与状态
- 审批意见留痕
- 模块级 comment thread 或 review note

## 18. 报告输出要求

最终导出的完整报告至少应包含：

1. 基本信息
2. Screening 结论
3. 处理活动描述
4. 咨询情况
5. 必要性与比例性分析
6. 风险分析
7. 措施计划
8. 残余风险与升级判断
9. 签署与审批
10. 附件/证据索引

对于儿童扩展，还应增加：

- 儿童用户判断
- 年龄核验
- 家长控制
- 地理定位、画像、引导技术等专项分析
- 儿童代码逐项符合性记录

### 18.1 导出与结构化输出规范

除面向阅读的报告外，产品还应支持结构化输出，以便后续与 EDPB 工具箱或其他合规系统对接。

MVP 建议支持：

- Markdown
- PDF
- JSON

后续版本可扩展：

- DOCX
- 外部系统对接 schema

结构化输出至少包含：

- case metadata
- screening result
- processing activities
- supporting assets
- risk records
- controls
- approvals
- review schedule

## 19. MVP 范围

### 17.1 建议纳入 MVP

- Screening 向导
- 通用 DPIA 主流程
- 处理活动对象
- 支撑系统对象
- 风险分析双轨基础版
- 措施库
- 审批记录
- Markdown/PDF 导出
- 儿童扩展基础版

### 17.2 建议延后

- 高级规则引擎
- 全成员国本地化包
- 高级协作评论流
- 与 CMDB、GRC、工单系统的深度集成
- 大规模组织级权限矩阵

## 20. 后续扩展方向

后续版本可考虑加入：

- 法域包
- 行业包
- 供应商 DPIA 包
- AI/ADM 专项包
- 与 ROPA 联动
- 与控制库、审计系统联动
- 与事故管理、漏洞管理联动

## 21. 验收标准

### 21.1 MVP 验收标准

- 用户可在 10 分钟内完成一份 Screening
- 用户可在单个 Case 中完整记录通用 DPIA
- 用户可新增并复用支撑系统
- 用户可为风险关联措施并记录残余风险
- 用户可导出一份结构完整的 DPIA 报告
- 儿童场景下可加载额外字段并导出对应章节
- UI 在结构、节奏、行距和卡片系统上与 [lia-tool](/Users/benjamin/Desktop/AI%20Practice/lia-tool) 及 [data-compliance-tool](/Users/benjamin/Desktop/AI%20Practice/data-compliance-tool) 保持一致工作台体验

### 21.2 质量标准

- 所有关键字段有明确数据结构
- 所有结论可追溯到输入与证据
- 所有审批留痕
- 所有对象支持后续复核
- 页面标题、正文、字段卡片、模块之间的留白节奏一致
- 不仅风格相似，实际尺寸体系也与现有工具对齐
- 共享对象与跨工具预填关系明确
- 扩展模块遵守统一接口契约
- 高风险流程存在 DPO review 与 prior consultation 状态留痕
- 支持版本差异与复核触发记录

### 21.3 Review Gate

在正式交付高保真设计或前端实现前，应新增一条 review gate：

- 完成至少一次独立 `AI coworker` review

若当前环境没有可调用的第二 AI，则不能宣称该 gate 已完成，只能标记为待完成。

## 22. 高保真设计前必须补齐的产物

在进入高保真设计前，至少补齐以下文档：

- 共享 design token 清单
- 跨工具实体关系图
- DPIA 状态机说明
- 扩展模块接口契约
- 结构化导出 schema 草案
- 无障碍验收清单

## 23. 关键产品判断

本次材料显示，最佳产品策略不是“选择一个监管模板”，而是做一个分层产品：

- 用 ICO 作为通用主流程
- 用 Niedersachsen 作为筛查入口
- 用 BayLfD 作为模块化和风险分析深度层
- 用 BfDI 提醒产品必须支持法域和场景扩展

因此，`DPIA template tools` 的正确定位是：

- 一个可配置、可审计、可扩展的 DPIA 工作台
- 而不是一份模板的在线版

## 24. 本 PRD 的来源说明

本 PRD 基于以下材料类型归纳形成：

- ICO 通用与儿童模板
- Niedersachsen DPIA 必要性 Prüfschema
- BfDI DSFA 模板
- BayLfD 的处理活动模板、DSFA 模板、风险分析模板、系统模板、示例件与方法论文件
- WP248 指南及 BayLfD 衍生方法论

相关中间总结已落盘于：

- `research/01-语料盘点与方法.md`
- `research/02-ICO_BfDI_Niedersachsen总结.md`
- `research/03-BayLfD模块化工具箱总结.md`
- `research/04-产品设计综合判断.md`
- `research/05-UI参考与AI协作要求.md`
- `research/06-coworker-review.md`
