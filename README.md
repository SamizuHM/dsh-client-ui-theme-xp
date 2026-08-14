# dsh-client-ui-theme-xp

Windows XP Luna 风格 UI 主题插件,用于 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web GUI。

将整个界面改造成 Windows XP (Luna) 外观:

- **Luna 配色** — 重映射整套 `--dsw-*` 设计令牌(XP 蓝 `#316ac5`、白底、蓝灰边框),并锁定浅色观感
- **Tahoma 字体** — 全局字体切换
- **XP 标题栏** — 会话头部变成蓝色渐变标题栏(白字面包屑/标签页/按钮)
- **XP 侧边栏** — 资源管理器式浅蓝渐变面板、平铺列表行、XP 蓝选中态、绿色"新会话"按钮
- **XP 消息气泡** — 用户消息改为小圆角蓝边气泡
- **XP 输入框** — 输入卡片方形化(`#7f9db9` 描边、去阴影),发送按钮蓝色渐变立体按钮
- **XP 任务栏** — 底部注入 Bliss 风格任务栏(绿色"开始"按钮 + 实时时钟)
- **细节** — 经典蓝色选区、XP 风格滚动条、黄色工具提示等

## 安装(一条命令)

需要本机已安装 `dsh` 命令行(通过 `npx @deepseek-ai/dsh` 或全局安装均可)。

```sh
# 从 npm registry 安装(发布后)
dsh plugin --profile web add dsh-client-ui-theme-xp

# 或者安装本地打包产物(npm pack 生成的 .tgz)
dsh plugin --profile web add ./dsh-client-ui-theme-xp-0.1.0.tgz

# 或者从 git 仓库安装
dsh plugin --profile web add github:你的用户名/dsh-client-ui-theme-xp
```

然后**重启 `dsh web` 服务器**(插件集变更需要重启生效):

```sh
# 停掉当前 dsh web,再重新启动
dsh web
```

浏览器重新打开 `http://127.0.0.1:3080`(或你的端口)即可。

> 该包声明了 `dsh.bundle.patch`,安装时会被自动加入 profile 的 bundle 层并注册 `ui-theme-xp` 插件行——**不需要手动编辑任何配置文件**。重启后插件自动生效。
>
> 如果插件没有生效,检查 `dsh --profile web --dump-config` 中是否出现 `ui-theme-xp` 行,以及
> `http://127.0.0.1:3080/plugins/dsh-client-ui-theme-xp/client.js` 是否返回 200。

## 卸载

```sh
dsh plugin --profile web remove dsh-client-ui-theme-xp
# 重启 dsh web 生效
```

## 开发与热更新

- 源码在包根目录:`client.js`(浏览器 bundle,内含全部 CSS 与任务栏逻辑)、`index.js`(host 侧空实现)、`cordis.patch.yml`(自注册)。
- 本机调试时,若 profile 里安装的是**拷贝**(`nodeLinker: hoisted` 的 file:/路径 依赖),修改源码后需要把文件同步到
  `~/.dsh/profiles/web/node_modules/dsh-client-ui-theme-xp/`,保存后由 client-hmr 轮询自动热更新(约 0.5s),**无需重启服务器**。

## 兼容性说明

- 主题通过 CSS 后缀类选择器(如 `[class$="_header"]`)定位组件,已尽量做到对 hash 前缀免疫,但组件结构仍与
  `@deepseek-ai/dsh-web-app@0.1.0-rc.6` 的 DOM 绑定。DSH 大版本升级后若样式失效,需要按新版本 DOM 调整 `client.js` 中的选择器。
- 主题强制浅色 Luna 观感(会移除 `data-ds-dark-theme`),不提供暗色变体。

## 发布(给他人用)

```sh
cd dsh-client-ui-theme-xp
npm login                 # 首次发布需要 npm 账号
npm version patch         # 每次发布前升版本号
npm publish               # 发布到 npm registry
```

发布前建议:
- 修改 `package.json` 中的 `name`(可改为带 scope 的 `@你的用户名/dsh-client-ui-theme-xp`)、`author`、`repository`。
- 如果改了包名,同步修改 `cordis.patch.yml` 里 insert 行的 `name`。
- 用 `npm pack` 先本地检查发布内容(`files` 白名单只包含 `index.js`、`client.js`、`cordis.patch.yml`、`README.md`、`package.json`)。

## License

MIT
