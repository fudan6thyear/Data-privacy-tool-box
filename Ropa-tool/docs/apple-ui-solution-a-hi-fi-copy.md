# data compiance tool box
## 方案 A：逐屏高保真文案稿

- 版本：v0.1
- 日期：2026-03-14
- 用途：用于 UI 视觉稿、前端开发和文案统一
- 说明：本稿为结构级高保真文案，不是最终品牌文案

## 1. 顶部导航

### 1.1 导航结构

左侧：

- `data compiance tool box`

中部：

- `Controller`
- `Processor`

右侧：

- `Trash`
- `EN / 中文`
- `Saved locally`

### 1.2 英文文案

- Product name: `data compiance tool box`
- Role switch:
  - `Controller`
  - `Processor`
- Trash trigger: `Trash`
- Save state:
  - default: `Saved locally`
  - editing: `Saving...`
  - error fallback: `Local save pending`

### 1.3 中文文案

- 产品名：`data compiance tool box`
- 角色切换：
  - `控制者`
  - `处理者`
- 垃圾箱入口：`垃圾箱`
- 保存状态：
  - 默认：`已保存到本地`
  - 编辑中：`正在保存...`
  - 异常兜底：`等待本地保存`

## 2. 首屏任务 Hero

## 2.1 Hero 布局

左侧为大标题与操作区，右侧为摘要面板。

### 2.2 英文文案

Eyebrow:

- `ICO-aligned privacy operations workspace`

Hero title:

- `Document processing activities with clarity.`

Hero body:

- `Create and maintain records of processing activities for each product or service, aligned with UK ICO controller and processor templates.`

Context pills:

- `Current role: Controller`
- `Current record: Payroll Platform`
- `Autosave on`

Primary CTA:

- `Add activity`

Secondary CTA:

- `Export JSON`

Tertiary text link:

- `Load sample`

### 2.3 中文文案

眉标题：

- `基于 ICO 模板的隐私合规工作台`

主标题：

- `清晰地记录每一项数据处理活动`

正文：

- `按产品或服务维护数据处理活动记录，填写方式对齐英国 ICO 的控制者与处理者模板。`

上下文标签：

- `当前角色：控制者`
- `当前记录：薪酬平台`
- `自动保存已开启`

主按钮：

- `新增活动`

次按钮：

- `导出 JSON`

辅助文字按钮：

- `加载示例`

## 3. Hero 右侧摘要卡

### 3.1 英文文案

Card title:

- `Workspace snapshot`

Rows:

- `Template` -> `Controller`
- `Product / service` -> `Payroll Platform`
- `Activities` -> `4`
- `Last saved` -> `14 Mar 2026, 23:42`

### 3.2 中文文案

卡片标题：

- `当前工作概览`

字段：

- `模板` -> `控制者`
- `产品 / 服务` -> `薪酬平台`
- `活动数量` -> `4`
- `最近保存` -> `2026-03-14 23:42`

## 4. 产品/服务上下文区

## 4.1 当前记录编辑卡

### 英文

Label:

- `Current product / service`

Input placeholder:

- `Name this record`

Primary supporting text:

- `Use one record per product or service.`

Buttons:

- `New record`
- `Delete current`

### 中文

标题：

- `当前产品 / 服务`

输入框占位：

- `填写记录名称`

说明：

- `建议按产品或服务分别维护记录。`

按钮：

- `新建记录`
- `删除当前记录`

## 4.2 历史记录卡片

### 英文模板

- Title: `Payroll Platform`
- Meta 1: `4 activities`
- Meta 2: `Updated 14 Mar 2026`
- Actions:
  - `Rename`
  - `Delete`

### 中文模板

- 标题：`薪酬平台`
- 信息 1：`4 个活动`
- 信息 2：`更新于 2026-03-14`
- 操作：
  - `重命名`
  - `删除`

## 5. 垃圾箱下拉面板

## 5.1 英文文案

Header:

- `Deleted records`

Empty state:

- `No deleted records.`

Row template:

- Title: `Legacy HR Portal`
- Meta: `2 activities`
- Meta: `Deleted 13 Mar 2026`
- Action: `Restore`

### 5.2 中文文案

标题：

- `已删除记录`

空状态：

- `暂无已删除记录。`

列表项模板：

- 标题：`旧版 HR 门户`
- 信息：`2 个活动`
- 信息：`删除于 2026-03-13`
- 操作：`恢复`

## 6. 数据处理活动主舞台

## 6.1 区域头部

### 英文

- Section label: `Article 30 workspace`
- Section title: `Processing activities`
- Supporting text: `Capture the processing activity, legal basis, transfers, and governance context in one place.`
- Current record badge: `Payroll Platform`
- Action button: `Add activity`

### 中文

- 区域标签：`第 30 条工作区`
- 区域标题：`数据处理活动`
- 说明：`在一个工作区中维护处理目的、合法依据、跨境传输与治理信息。`
- 当前记录徽章：`薪酬平台`
- 操作按钮：`新增活动`

## 6.2 活动卡片头部

### 英文模板

- Activity title: `Employee payroll administration`
- Activity label: `Activity 01`
- Status badge: `Locked`
- Progress text: `9 of 14 fields completed`

Actions:

- `Unlock`
- `Duplicate`
- `Delete`

### 中文模板

- 活动标题：`员工薪酬管理`
- 活动编号：`活动 01`
- 状态：`已锁定`
- 进度：`已完成 9 / 14 个字段`

操作：

- `解锁`
- `复制`
- `删除`

## 6.3 分段标题文案

### Controller 英文

- `Core record`
- `Transfers and security`
- `Lawful basis and rights`
- `Governance links`

### Controller 中文

- `核心记录`
- `传输与安全`
- `合法依据与权利`
- `治理关联`

### Processor 英文

- `Processor record`
- `Transfers and safeguards`
- `Security measures`

### Processor 中文

- `处理者记录`
- `传输与保障`
- `安全措施`

## 7. 字段帮助文案策略

本方案不建议像当前版本那样为所有字段长期显示同样长度的帮助文案。

建议规则：

- 必填字段默认不显示长帮助文案
- 仅在复杂字段旁用 tooltip 或短句说明
- 帮助文案只在这些场景出现：
  - 法律条款判断
  - 自动化决策
  - 跨境机制
  - 合法利益评估链接

## 8. 自动化决策字段文案

### 英文

- `Automated decision-making, including profiling`
- `Significant effect on rights or freedoms?`

Tooltip:

- `Use Yes where the decision creates legal effects or similarly significant impacts, such as employment, credit, benefits, contract access, or essential service access.`

### 中文

- `是否存在自动化决策（包括画像）`
- `是否对用户的权利和自由造成重大影响？`

Tooltip:

- `当该决策会产生法律效果，或造成类似重大影响时选择“是”，例如影响就业、信贷、福利、合同机会或重要服务准入。`

## 9. 合法依据区文案

### 英文

Section title:

- `Lawful basis and rights`

Rights summary title:

- `Data subject rights assessed automatically`

Rights summary body:

- `Rights are inferred from GDPR rules and the legal basis you selected.`

### 中文

分段标题：

- `合法依据与权利`

权利摘要标题：

- `自动判断的数据主体权利`

权利摘要说明：

- `权利依据 GDPR 规则和你选择的合法依据自动生成。`

## 10. 预览区

## 10.1 区域头部文案

### 英文

- Label: `Review`
- Title: `ICO-style record preview`
- Body: `Check how the current entries map to ICO-aligned table columns before export or internal review.`

View switch:

- `Current record`
- `Global view`

### 中文

- 标签：`审阅`
- 标题：`ICO 风格记录预览`
- 说明：`在导出或内部审阅前，查看当前内容如何映射到 ICO 风格表格。`

视图切换：

- `当前记录`
- `全局视图`

## 11. 空状态文案

### 11.1 英文

- No activities:
  - `No processing activities yet.`
  - `Create the first activity to start this record.`

- No preview rows:
  - `Nothing to preview yet.`

- Empty history:
  - `No saved records yet.`

### 11.2 中文

- 暂无活动：
  - `还没有数据处理活动。`
  - `先创建第一条活动，开始填写这份记录。`

- 暂无预览：
  - `暂无可预览内容。`

- 历史为空：
  - `还没有已保存记录。`

## 12. 成功与状态文案

### 英文

- `Saved locally`
- `Activity added`
- `Activity updated`
- `Activity duplicated`
- `Activity deleted`
- `Record renamed`
- `Record moved to trash`
- `Record restored`
- `Switched to Controller`
- `Switched to Processor`

### 中文

- `已保存到本地`
- `活动已新增`
- `活动已更新`
- `活动已复制`
- `活动已删除`
- `记录已重命名`
- `记录已移入垃圾箱`
- `记录已恢复`
- `已切换到控制者`
- `已切换到处理者`

## 13. 桌面端页面节奏

建议从上到下形成如下阅读顺序：

1. 顶部悬浮导航
2. 大标题 Hero
3. 当前记录与历史记录
4. 活动主舞台
5. 审阅预览区

每一屏只承担一个主任务，不混杂过多信息。

## 14. 下一步设计使用方式

该文案稿应直接用于：

- 高保真设计稿
- 前端静态内容替换
- 中英文文案统一
- 交互状态命名统一
