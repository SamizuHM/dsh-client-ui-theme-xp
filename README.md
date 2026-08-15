# 🪟 dsh-client-ui-theme-xp

**Windows XP (Luna) 桌面化主题** for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web GUI —— 把整个界面变成一台 Windows XP 电脑：Bliss 壁纸、桌面图标、浮动窗口、任务栏。

[![GitHub stars](https://img.shields.io/github/stars/SamizuHM/dsh-client-ui-theme-xp?style=flat-square&logo=github&label=stars)](https://github.com/SamizuHM/dsh-client-ui-theme-xp/stargazers)
[![GitHub license](https://img.shields.io/github/license/SamizuHM/dsh-client-ui-theme-xp?style=flat-square)](LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/SamizuHM/dsh-client-ui-theme-xp?style=flat-square)](https://github.com/SamizuHM/dsh-client-ui-theme-xp/commits/main)
[![Windows XP](https://img.shields.io/badge/theme-Windows%20XP%20Luna-316ac5?style=flat-square&logo=windows&logoColor=white)](https://github.com/SamizuHM/dsh-client-ui-theme-xp)
[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin#themes--appearance)

![Screenshot](docs/screenshot.png)

## ✨ 功能

- **XP 桌面** —— 顶部窗口变成桌面：Bliss 壁纸、左侧桌面图标列（我的工作区 / 搜索 / 添加工作区 / 设置）、底部任务栏（开始按钮 + 窗口列表 + 时钟）。
- **浮动窗口** —— 会话以真正的 XP 窗口打开：可拖拽、缩放、最小化/最大化/关闭，窗口场景自动持久化（刷新后恢复）。
- **我的工作区** —— 资源管理器式浏览器：工作区 = 文件夹，会话 = 文件夹里的图标；每个工作区内有「新建会话」图标，一键在该工作区**真正新建**一个会话并打开。
- **添加工作区** —— 走宿主**原生目录选择器**（macOS Finder / Windows 资源管理器），不需要手填路径。
- **搜索** —— 会话内容检索窗口（基于 `sessions.search`），点结果直接打开会话窗口。
- **设置** —— 桌面图标直接弹出 app 原生设置面板（无需打开新窗口）。
- **Luna 细节** —— XP 蓝 `#316ac5` 配色、Tahoma 字体、经典蓝选区、XP 滚动条、圆角窗口/按钮、黄色工具提示；空白会话与官方侧边栏一致地隐藏。

## 📦 安装

用你启动 web 的方式调用插件命令即可（无需全局安装 `dsh`）：

```sh
# 和 `npx @deepseek-ai/dsh web` 同一个入口 —— 从 GitHub 安装
npx @deepseek-ai/dsh plugin --profile web add github:SamizuHM/dsh-client-ui-theme-xp
```

发布到 npm 后（推荐，免 `allowBuilds` 构建授权），也可以直接按包名安装：

```sh
# 从 npm registry 安装
npx @deepseek-ai/dsh plugin --profile web add dsh-client-ui-theme-xp
```

如果全局安装过 `dsh`，把上面的 `npx @deepseek-ai/dsh` 换成 `dsh` 即可。

重启 `dsh web` 后刷新页面即可。主题为**纯浏览器端插件**（`dsh.client`），改动走 bundle rev 缓存穿透，日常更新只需刷新。

## 🖱️ 使用提示

- 桌面图标：**单击选中，双击打开**。
- 会话窗口内部就是完整的 DSH 应用（自带会话/工作区数据），窗口标题栏实时同步会话标题。
- 任务栏点击窗口项可切换/最小化窗口。

## 📄 License

[MIT](LICENSE)
