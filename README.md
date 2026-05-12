# CICADA 思科达 · Design System

> 牙医仪器检修小程序设计系统 —— 佛山市思科达医疗器械官方出品

---

## 项目简介

本项目是 **CICADA 思科达**（佛山市思科达医疗器械）的微信小程序「牙医仪器检修」的完整设计系统。包含品牌规范、视觉设计 tokens、组件库以及高保真可交互原型。

**目标用户**：牙科诊所技师、口腔技师、售后客服人员  
**设计风格**：蓝白医疗风、字体偏大、信息密度低、易于操作

---

## 品牌信息

| 项目 | 内容 |
|------|------|
| 英文品牌 | CICADA |
| 中文品牌 | 思科达 |
| 企业口号 | 追求极致稳定性 / 服务全球牙科专家 |
| 母公司 | 佛山市登煌医疗有限公司 |
| 服务热线 | 0757-85775667 |

---

## 设计原则

### 视觉风格
- **主色调**：医疗蓝 `#1E6FE0`
- **背景色**：柔和蓝灰 `#E8EEFA`
- **字体**：Noto Sans SC，基线 15px（比标准小程序大一号，方便师傅查看）
- **按钮**：全圆角胶囊形状（pill）
- **卡片**：白色背景，14px 圆角，柔和阴影

### 文案风格
- 使用敬语 **"您"**，不用 "你"
- 动词开头，简洁有力："立即报修"、"查看详情"
- 不用 emoji，不用网络用语
- 数字具体化："2 小时内回复"、"24 小时内到场"

---

## 目录结构

```
├── README.md                 # 本文件
├── SKILL.md                  # Claude Skill 配置文件
├── colors_and_type.css       # 设计 Tokens（颜色、字体、间距、阴影）
├── assets/                   # 品牌资产
│   ├── logo-cicada-full.jpg      # 完整 Logo
│   ├── logo-cicada-mark.jpg      # 标识 Logo
│   ├── logo-cicada-tooth-blue.jpg # 牙齿图标
│   ├── photo-building.jpg        # 公司大楼照片
│   ├── photo-factory.jpg         # 工厂照片
│   ├── qr-official-wechat.jpg    # 公众号二维码
│   └── poster-regional-sales.jpg # 区域销售海报
├── fonts/                    # 字体引用（Google Fonts）
├── preview/                  # 组件预览卡片
├── slides/                   # 演示文稿
├── uploads/                  # 上传文件
└── ui_kits/                  # UI 套件
    ├── mini-program/         # 小程序高保真原型
    │   ├── shell.jsx         # 微信框架 + 基础组件
    │   ├── screens-home.jsx  # 首页/公司/我的
    │   ├── screens-repair.jsx # 报修流程
    │   ├── screens-info.jsx  # 信息页面
    │   ├── app.jsx           # 路由主入口
    │   └── tweaks-panel.jsx  # 调试面板
    └── website/              # 官网相关
```

---

## 小程序原型

位于 `ui_kits/mini-program/`，包含 **9 大模块、16 个页面**：

| 模块 | 页面 |
|------|------|
| 首页 | 首页、公司介绍、个人中心 |
| 报修 | 报修表单（4步）、报修成功 |
| 进度 | 维修进度列表、工单详情 |
| 故障自查 | 故障分类、排查详情 |
| 调研有礼 | 调研弹窗 |
| 政策 | 保修政策、收费标准 |
| 教程 | 快速指南、自助排查、报修指南、查询指南、开票指南 |
| 我的 | 我的订单、产品管理、地址管理、登录、意见反馈 |
| 联系 | 联系我们 |

---

## 设计 Tokens

### 颜色

| Token | 色值 | 用途 |
|-------|------|------|
| `--brand` | `#1E6FE0` | 主色、按钮、聚焦 |
| `--brand-2` | `#3A86FF` | 渐变顶部 |
| `--brand-deep` | `#0A4FB8` | 按下状态、渐变底部 |
| `--brand-soft` | `#E8F1FE` | 标签背景 |
| `--bg-page` | `#E8EEFA` | 页面背景 |
| `--fg-1` | `#0F1F3A` | 主要文字 |
| `--fg-2` | `#324563` | 次要文字 |
| `--ok` | `#10B981` | 成功状态 |
| `--warn` | `#F59E0B` | 警告状态 |
| `--danger` | `#E5484D` | 错误状态 |

### 字体

| Token | 尺寸 | 用途 |
|-------|------|------|
| `--fs-display` | 30px | 页面大标题 |
| `--fs-h1` | 20px | 屏幕标题 |
| `--fs-h2` | 17px | 卡片标题 |
| `--fs-body` | 15px | 正文基线 |
| `--fs-body-lg` | 16px | 长文本 |
| `--fs-sm` | 13px | 字段标签 |

### 间距

基于 4px 网格：4px、8px、10px、14px、18px、22px、28px、36px

### 圆角

- `--radius-md`: 12px（默认卡片）
- `--radius-lg`: 14px（大卡片）
- `--radius-xl`: 18px（底部弹窗）
- `--radius-pill`: 99px（按钮）

---

## 图标系统

使用自定义 SVG 图标组件 `<Glyph name="..." />`，共 21 个图标：

`repair` `track` `diag` `gift` `book` `shield` `phone` `chat` `pin` `invoice` `box` `tooth` `cam` `plus` `star` `search` `truck` `money` `return` `edit` `check`

风格：线框图标，1.6px 描边，圆角连接。

---

## 快速开始

### 查看可交互原型

⚠️ **注意**：原型使用 React + Babel，需要本地服务器运行，直接双击打开会显示空白页面。

#### 方法 1：VS Code Live Server（推荐）

1. 安装 VS Code 扩展 **Live Server**（ritwickdey.liveserver）
2. 右键点击 `ui_kits/mini-program/index.html` → **"Open with Live Server"**

#### 方法 2：Python 临时服务器

```bash
cd ui_kits/mini-program
python -m http.server 8080
```
然后浏览器访问 `http://localhost:8080`

#### 方法 3：Node.js http-server

```bash
npx http-server ui_kits/mini-program -p 8080 -o
```

---

启动后，在左侧导航栏点击不同页面进行预览：

原型包含 **16 个高保真页面**，支持点击交互：
- **首页** — 四大板块导航
- **报修** — 4步表单提交维修申请
- **进度查询** — 查看维修状态和物流时间线
- **故障自查** — 自助排查常见问题
- **保修政策/收费标准** — 服务说明
- **我的** — 订单、地址、反馈等个人中心

### 使用设计 Tokens

```html
<link rel="stylesheet" href="colors_and_type.css">
```

### 复制组件

从 `shell.jsx` 复制基础组件（Btn、Card、Tag、Field、Glyph）到新项目。

---

## 开发规范

- 所有按钮最小高度 44px（触控目标）
- 卡片内边距 14px，大卡片 18px
- 表单行高 48px
- 页面背景使用 `#E8EEFA`，卡片使用白色
- 所有操作按钮使用胶囊形状

---

## 相关链接

- 公司官网：佛山市思科达医疗器械
- 服务热线：0757-85775667 / 400-833-9988

---

*最后更新：2026-05-12*
