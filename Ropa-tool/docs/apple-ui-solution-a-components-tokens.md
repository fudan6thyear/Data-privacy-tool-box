# data compiance tool box
## 方案 A：组件清单与视觉 Token 草案

- 版本：v0.1
- 日期：2026-03-14
- 用途：用于后续视觉设计和前端实现
- 说明：本稿是设计系统级草案，不代表最终 CSS 变量命名

## 1. 组件总览

本轮 UI 改版应统一为以下组件体系：

1. Top Navigation
2. Role Switch
3. Language Switch
4. Trash Dropdown
5. Hero Actions
6. Snapshot Card
7. Record Editor Card
8. Record History Card
9. Activity Section Header
10. Activity Card
11. Status Badge
12. Field Block
13. Text Input
14. Textarea
15. Select
16. Multi-checkbox Group
17. Inline Tooltip
18. Table Editor
19. Preview Table
20. Empty State
21. Save Status

## 2. 颜色 Token

### 2.1 基础色

```text
--color-bg-page: #f5f5f7
--color-bg-page-elevated: #f0f1f4
--color-surface-primary: #ffffff
--color-surface-secondary: #fbfbfd
--color-surface-tertiary: #f3f4f7
--color-border-soft: rgba(17, 24, 39, 0.08)
--color-border-medium: rgba(17, 24, 39, 0.12)
--color-text-primary: #111827
--color-text-secondary: #4b5563
--color-text-tertiary: #6b7280
--color-accent-primary: #2563eb
--color-accent-primary-soft: rgba(37, 99, 235, 0.12)
--color-success: #14804a
--color-warning: #b7791f
--color-danger: #c2410c
```

### 2.2 设计原则

- 整体以冷白灰为主
- 强调色仅用于交互焦点和核心动作
- 删除、警示、锁定必须有颜色，但饱和度不能过高

## 3. 字体 Token

### 3.1 字体栈

英文和中英文混排建议：

```text
--font-sans: "SF Pro Display", "SF Pro Text", "PingFang SC", "Helvetica Neue", "Segoe UI", sans-serif
```

### 3.2 字号层级

```text
--font-size-hero: 64px
--font-size-display: 40px
--font-size-h1: 32px
--font-size-h2: 24px
--font-size-h3: 20px
--font-size-body: 16px
--font-size-body-small: 14px
--font-size-caption: 12px
```

### 3.3 字重建议

```text
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

## 4. 间距 Token

```text
--space-4: 4px
--space-8: 8px
--space-12: 12px
--space-16: 16px
--space-20: 20px
--space-24: 24px
--space-32: 32px
--space-40: 40px
--space-48: 48px
--space-64: 64px
--space-80: 80px
--space-96: 96px
```

应用原则：

- 模块之间优先使用 `32 / 40 / 48`
- 卡片内边距优先使用 `20 / 24 / 32`
- 小组件内部优先使用 `8 / 12 / 16`

## 5. 圆角 Token

```text
--radius-pill: 999px
--radius-xl: 28px
--radius-lg: 24px
--radius-md: 18px
--radius-sm: 14px
--radius-xs: 10px
```

## 6. 阴影 Token

```text
--shadow-soft: 0 8px 24px rgba(15, 23, 42, 0.06)
--shadow-medium: 0 16px 40px rgba(15, 23, 42, 0.08)
--shadow-floating: 0 24px 60px rgba(15, 23, 42, 0.10)
```

使用规则：

- 普通卡片仅使用 `soft`
- 顶部悬浮导航和下拉层使用 `medium`
- 不建议大面积使用 `floating`

## 7. 顶部导航组件

### 7.1 结构

- 左：产品名
- 中：角色切换
- 右：垃圾箱、语言、保存状态

### 7.2 样式要求

- 高度：56px 到 64px
- 背景：半透明白
- 圆角：pill
- 内边距：左右 16 到 20px
- 布局：水平居中，内容左右分组

## 8. Role Switch 组件

### 8.1 样式

- 胶囊分段控件
- 当前项使用浅背景 + 深色文字
- 非当前项透明背景

### 8.2 状态

- default
- hover
- active
- focus-visible

## 9. Trash Dropdown 组件

### 9.1 结构

- Trigger
- Dropdown panel
- Record rows

### 9.2 Trigger 规则

- 展示图标或简洁标签
- 删除记录数可作为 badge

### 9.3 Panel 规则

- 宽度：320px 到 360px
- 圆角：24px
- 背景：纯白
- 内边距：16px 到 20px

## 10. Hero 区组件

## 10.1 Hero 标题区

要求：

- 大标题形成第一视觉重心
- 文本宽度不超过 12 到 14 个英文词
- 中文标题控制在一行或两行内

## 10.2 Hero Actions

按钮规则：

- 主按钮：深色实体
- 次按钮：浅色描边或淡背景
- 第三动作：文本按钮

## 10.3 Snapshot Card

要求：

- 信息为 4 行以内
- 数值与标签对齐
- 标签为 caption
- 值为 medium 或 semibold

## 11. Record Editor Card

内容：

- 标题
- 大输入框
- 两个按钮

样式规则：

- 背景纯白
- 圆角 24px
- 内边距 24px
- 输入框高度 56px

## 12. Record History Card

每条记录卡规则：

- 高度紧凑
- 标题一行截断
- 两行元信息以内
- 操作按钮默认弱化，hover 提升对比

建议状态：

- default
- hover
- selected
- focus-visible

## 13. Activity Card

## 13.1 结构

- Header
- Meta row
- Content sections
- Footer actions

## 13.2 样式规则

- 卡片背景白色
- 圆角 28px
- 内边距 24px 到 32px
- 不使用重色边框
- 活动区分可通过顶部细色带或浅背景变化表达

## 13.3 锁定态

- 头部出现锁定 badge
- 内容可读但不可编辑
- 背景略微降饱和

## 14. Section Header

用于活动卡片内部各大分段。

规则：

- 标题 20px 到 24px
- 说明文字 14px 到 16px
- 标题与说明的垂直间距控制在 6px 到 8px

## 15. Field Block

每个字段块结构：

- Label row
- Control
- Optional help or validation line

规则：

- 字段卡背景可略深于页面背景
- 但不能像当前那样每个 field 都过分强调卡片感
- 建议改成轻背景块或无背景，仅靠间距组织

## 16. 输入控件

## 16.1 Text Input

```text
Height: 52px to 56px
Radius: 16px
Padding X: 14px to 16px
Border: 1px soft gray
Focus: subtle blue ring or border emphasis
```

## 16.2 Textarea

```text
Min height: 132px
Radius: 16px
Padding: 14px to 16px
Resize: vertical only
```

## 16.3 Select

```text
Height: same as input
Chevron: subtle
Placeholder: muted gray
```

## 17. Multi-checkbox Group

规则：

- 每个选项像一枚轻量标签卡
- 允许两列或自适应网格
- 选中态使用浅强调色背景
- 非选中态保持白色或浅灰底

## 18. Tooltip

### 18.1 外观

- 深色浮层
- 圆角 14px
- 小字号
- 最大宽度 280px 到 320px

### 18.2 触发

- hover
- focus-visible

### 18.3 内容

- 不超过两行到三行
- 优先解释规则，不解释常识

## 19. Table Editor

### 19.1 结构

- Title
- Scroll container
- Table
- Footer button row

### 19.2 样式

- 表头背景浅灰
- 单元格高 44px 到 52px
- 输入框比普通字段更紧凑
- 行内按钮小型化

## 20. Preview Table

### 20.1 外层容器

- 纯白大卡片
- 圆角 28px
- 有滚动容器

### 20.2 表头

- 粘性表头保留
- 背景浅灰白
- 字号略小于正文
- 字重中等

### 20.3 行样式

- 斑马纹极轻
- 不使用强对比边框
- 第一列固定时背景与其他列协调

## 21. Empty State

规则：

- 居中排版
- 仅保留标题和一句说明
- 可选一个轻量辅助按钮

不建议：

- 用虚线大边框
- 用夸张插画

## 22. 保存状态组件

位置：

- 顶部导航右侧

规则：

- 字号小
- 次级灰色
- 状态变化仅轻微更新

状态：

- saved
- saving
- pending

## 23. 动效 Token

```text
--motion-fast: 140ms
--motion-base: 180ms
--motion-slow: 240ms
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1)
```

应用：

- 按钮 hover：fast
- 卡片 hover：base
- 下拉面板出现：base
- 页面首屏进入：slow

## 24. 响应式断点

```text
--breakpoint-mobile: 767px
--breakpoint-tablet: 1024px
--breakpoint-desktop: 1280px
--breakpoint-wide: 1440px
```

## 25. 开发落地优先级

### P0

- Top Navigation
- Hero
- Record Area
- Activity Card
- Preview Table

### P1

- Trash Dropdown
- Tooltip
- Motion refinement
- Status system

### P2

- Hover polish
- Mobile detail tuning
- Fine typography balancing

## 26. 与当前版本的关键差异

当前版本：

- 暖棕色偏强
- 每层卡片感都很重
- 字段帮助文案较多
- 主次结构还不够明显

方案 A：

- 更冷静的白灰体系
- 主舞台更集中
- 更少但更强的层级
- 文案更短
- 交互更克制

## 27. 下一步实现建议

确认本清单后，实际开发建议顺序：

1. 先重做全局 layout 和顶部导航
2. 再重做 hero 和记录区
3. 再统一 activity card 与 field system
4. 最后收尾 preview、trash、tooltip、motion
