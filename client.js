/**
 * dsh-client-ui-theme-xp — browser bundle.
 *
 * Windows XP Luna "desktop" for the DeepSeek Harness web GUI.
 *
 * In the TOP window it becomes a desktop: the app's own conversation view is
 * hidden, the left sidebar stays as the full history manager, and sessions
 * open as real floating windows (draggable, minimizable, maximizable,
 * closable). The taskbar lists the open windows like a real taskbar —
 * click to focus, click again to minimize.
 *
 * Each window hosts its own same-origin <iframe> running the full DSH app;
 * the plugin instance inside an iframe runs in lite mode (palette + fonts +
 * conversation chrome only) and the parent strips the iframe's own sidebar
 * once the target session is open. Session identity is read from React
 * fibers (memoizedProps carry the session id), which is how the parent tells
 * an iframe which session row to open.
 *
 * Bundle format: window.__ModuleLoader__.load({ id, factory }) — the same
 * envelope every dsh client bundle ships in. The factory returns the cordis
 * plugin surface { inject: [], apply(ctx) }.
 */
window.__ModuleLoader__.load({
	id: "dsh-client-ui-theme-xp",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		// ─────────────────────────────────────────────────────────────────
		// Theme + desktop CSS
		// ─────────────────────────────────────────────────────────────────
		var CSS = [
			"/* ==== Windows XP Luna theme + desktop for DSH (dsh-client-ui-theme-xp) ==== */",
			"",
			":root {",
			"  --dsw-font-family: Tahoma, 'Segoe UI', 'Lucida Grande', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;",
			"}",
			"body {",
			"  font-family: Tahoma, 'Segoe UI', 'Lucida Grande', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;",
			"}",
			"",
			"/* The Luna look is pinned to the light palette for BOTH color-scheme",
			"   scopes, so the theme never flips into a dark variant. */",
			"body, body[data-ds-dark-theme] {",
			"  --dsw-alias-bg-base: #ffffff;",
			"  --dsw-alias-bg-layer-1: #fbfcfe;",
			"  --dsw-alias-bg-layer-2: #f2f5fa;",
			"  --dsw-alias-bg-layer-3: #e8eef7;",
			"  --dsw-alias-bg-module-platform: #eef2f8;",
			"  --dsw-alias-bg-multi-select: #eef2f8;",
			"  --dsw-alias-bg-overlay: #f7f9fc;",
			"  --dsw-alias-bg-skeleton: rgba(49, 106, 197, 0.08);",
			"",
			"  --dsw-alias-border-inverted: rgba(0, 0, 0, 0);",
			"  --dsw-alias-border-inverted2: rgba(0, 0, 0, 0);",
			"  --dsw-alias-border-l1: rgba(49, 106, 197, 0.16);",
			"  --dsw-alias-border-l2-darkmode-thin: rgba(49, 106, 197, 0.22);",
			"  --dsw-alias-border-l2: rgba(49, 106, 197, 0.22);",
			"  --dsw-alias-border-l3: #a8bcd8;",
			"  --dsw-alias-border-l4: #8fa8c8;",
			"",
			"  --dsw-alias-brand-primary: #316ac5;",
			"  --dsw-alias-brand-primary-invert: #ffffff;",
			"  --dsw-alias-brand-text: #316ac5;",
			"",
			"  --dsw-alias-button-contrast-fill: #316ac5;",
			"  --dsw-alias-button-elevated-fill: #ffffff;",
			"  --dsw-alias-button-floating-fill: #f6f8fb;",
			"  --dsw-alias-button-floating-hover: #e6edf8;",
			"  --dsw-alias-button-ghost-active-border: #7f9db9;",
			"  --dsw-alias-button-ghost-active-fill: #e8eef7;",
			"  --dsw-alias-button-ghost-active-hover: #dce7f5;",
			"  --dsw-alias-button-info-fill: #316ac5;",
			"  --dsw-alias-button-info-hover: #3d7be0;",
			"  --dsw-alias-button-primary-dimmed: #c9d8ee;",
			"  --dsw-alias-button-primary-fill: #316ac5;",
			"  --dsw-alias-button-primary-hover: #3d7be0;",
			"  --dsw-alias-button-tool-bar-fill-invisible: rgba(49, 106, 197, 0.28);",
			"  --dsw-alias-button-tool-bar-fill: rgba(49, 106, 197, 0.42);",
			"  --dsw-alias-button-tool-bar-hover: rgba(49, 106, 197, 0.55);",
			"",
			"  --dsw-alias-interactive-bg-active: rgba(49, 106, 197, 0.16);",
			"  --dsw-alias-interactive-bg-hover-accent: rgba(49, 106, 197, 0.14);",
			"  --dsw-alias-interactive-bg-hover-danger: rgba(192, 0, 0, 0.08);",
			"  --dsw-alias-interactive-bg-hover-solid: #e6edf8;",
			"  --dsw-alias-interactive-bg-hover: rgba(49, 106, 197, 0.08);",
			"",
			"  --dsw-alias-label-caption: #6f7f96;",
			"  --dsw-alias-label-dimmed: #aebbd0;",
			"  --dsw-alias-label-primary-bluish: #1c3f7a;",
			"  --dsw-alias-label-primary-dimmed: #22334d;",
			"  --dsw-alias-label-primary-foreground: #ffffff;",
			"  --dsw-alias-label-primary-inverted: #ffffff;",
			"  --dsw-alias-label-primary: #101b2e;",
			"  --dsw-alias-label-secondary: #33445e;",
			"  --dsw-alias-label-tertiary: #5c6f8a;",
			"",
			"  --dsw-alias-markdown-citation: #eef2f8;",
			"  --dsw-alias-markdown-code-block-banner: #f2f5fa;",
			"  --dsw-alias-markdown-code-block: #f6f8fb;",
			"  --dsw-alias-markdown-code-segment-selected: #ffffff;",
			"  --dsw-alias-markdown-code-segment-unselected: #eef2f8;",
			"  --dsw-alias-markdown-inline-code: #e8eef7;",
			"  --dsw-alias-markdown-placeholder: #f6f8fb;",
			"  --dsw-alias-markdown-tag: #eef2f8;",
			"",
			"  --dsw-alias-scrollbar-bg-l1: #c3ccd8;",
			"  --dsw-alias-scrollbar-bg-l2: #b6c2d2;",
			"  --dsw-alias-scrollbar-hover-l1: #316ac5;",
			"  --dsw-alias-scrollbar-hover-l2: #316ac5;",
			"",
			"  --dsw-alias-state-business-primary: #316ac5;",
			"  --dsw-alias-state-business-tertiary: #d9e5f7;",
			"  --dsw-alias-state-error-primary: #c00000;",
			"  --dsw-alias-state-error-secondary: #e0533d;",
			"  --dsw-alias-state-success-primary: #3d9400;",
			"  --dsw-alias-state-success-secondary: #5cb327;",
			"  --dsw-alias-state-success-tertiary: #e2f0d2;",
			"  --dsw-alias-state-warn-label: #b55400;",
			"  --dsw-alias-state-warn-primary: #d98300;",
			"  --dsw-alias-state-warn-secondary: #e8a33d;",
			"  --dsw-alias-state-warn-tertiary: #fdf0d8;",
			"",
			"  --dsw-alias-toast-bg: #2b3f66;",
			"  --dsw-alias-tooltip-bg: #ffffe1;",
			"",
			"  /* The shell hardcodes tooltip text to white; on the XP-yellow",
			"     background it would be unreadable, so force dark text. */",
			"  --dsw-tooltip-ink: #1f1f1f;",
			"",
			"  --dsw-specific-bubble-highlight: #cfe0f7;",
			"  --dsw-specific-bubble: #e8f1fd;",
			"  --dsw-specific-input-major: #ffffff;",
			"  --dsw-specific-login-input: #f7f9fc;",
			"  --dsw-specific-menu: #fbfcfe;",
			"  --dsw-specific-selector: #eef2f8;",
			"  --dsw-specific-sidebar-fill: linear-gradient(180deg, #f2f7fd 0%, #dbe9f7 100%);",
			"  --dsw-specific-sidebar-nav-item-active-accent: #316ac5;",
			"  --dsw-specific-sidebar-nav-item-active: #cfe0f7;",
			"  --dsw-specific-sidebar-nav-item-hover: #e3edf9;",
			"  --dsw-specific-tip: #f2f6fc;",
			"  --dsh-scrollbar-width: 12px;",
			"}",
			"",
			"/* Classic blue selection */",
			"::selection { background: #316ac5 !important; color: #ffffff !important; }",
			"",
			"/* XP tooltips: yellow bubble with dark text (the shell's default",
			"   white tooltip ink is unreadable on the yellow background). */",
			"[class*='_bubble_'] {",
			"  color: var(--dsw-tooltip-ink, #1f1f1f) !important;",
			"  border: 1px solid #b5a642 !important;",
			"  border-radius: 4px !important;",
			"  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25) !important;",
			"}",
			"",
			"/* User-question count badge: its ink token (button-info-fill) matches",
			"   the accent background in the XP palette, so the text vanished into",
			"   the pill — pin white ink instead (XP notification-badge style). */",
			"[class*='Mbwy4a_badge'] {",
			"  color: #ffffff !important;",
			"}",
			"",
			"/* XP scrollbars */",
			"::-webkit-scrollbar { width: 12px !important; height: 12px !important; }",
			"::-webkit-scrollbar-track { background: #f0f0f0 !important; border-left: 1px solid #dcdcdc !important; }",
			"::-webkit-scrollbar-thumb {",
			"  background: linear-gradient(90deg, #f2f2f2 0%, #cfcfcf 60%, #c4c4c4 100%) !important;",
			"  border: 1px solid #9c9c9c !important;",
			"  border-radius: 3px !important;",
			"}",
			"::-webkit-scrollbar-thumb:hover {",
			"  background: linear-gradient(90deg, #f8f8f8 0%, #dcdcdc 100%) !important;",
			"  border-color: #316ac5 !important;",
			"}",
			"::-webkit-scrollbar-corner { background: #f0f0f0 !important; }",
			"",
			"/* Subtle XP rounding for form controls */",
			"input, textarea, select { border-radius: 3px; }",
			"button { font-family: inherit; }",
			"",
			"/* ==== Conversation header = XP window title bar ==== */",
			"[class$='_header']:has([class$='_titleRow']) {",
			"  background: linear-gradient(180deg, #0058e6 0%, #2a85f5 48%, #3a93ff 100%) !important;",
			"  border-bottom: 1px solid #003c9e !important;",
			"}",
			"[class$='_header']:has([class$='_titleRow'])::after { display: none !important; }",
			"",
			"[class$='_header']:has([class$='_titleRow']) [class$='_crumb'],",
			"[class$='_header']:has([class$='_titleRow']) [class$='_crumbSep'],",
			"[class$='_header']:has([class$='_titleRow']) [class$='_crumbCurrent'] {",
			"  color: #ffffff !important;",
			"}",
			"[class$='_header']:has([class$='_titleRow']) [class$='_crumb'] { background: transparent !important; }",
			"[class$='_header']:has([class$='_titleRow']) [class$='_crumb']:hover { background: rgba(255, 255, 255, 0.22) !important; }",
			"[class$='_header']:has([class$='_titleRow']) [class$='_crumbCurrent'] {",
			"  font-weight: 700;",
			"  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);",
			"}",
			"",
			"[class$='_header']:has([class$='_titleRow']) [class$='_tab'] { color: rgba(255, 255, 255, 0.85) !important; }",
			"[class$='_header']:has([class$='_titleRow']) [class$='_tab']:hover { color: #ffffff !important; }",
			"[class$='_header']:has([class$='_titleRow']) [class$='_tabActive'] { color: #ffffff !important; }",
			"[class$='_header']:has([class$='_titleRow']) [class$='_tabActive']::after { background: #ffffff !important; }",
			"",
			"/* Title-bar buttons: transparent chrome, white glyphs */",
			"[class$='_header']:has([class$='_titleRow']) button {",
			"  background: transparent !important;",
			"  border: 1px solid transparent !important;",
			"  color: #ffffff !important;",
			"}",
			"[class$='_header']:has([class$='_titleRow']) button:hover {",
			"  background: rgba(255, 255, 255, 0.2) !important;",
			"  border-color: rgba(255, 255, 255, 0.55) !important;",
			"}",
			"[class$='_header']:has([class$='_titleRow']) button:active { background: rgba(0, 0, 0, 0.18) !important; }",
			"[class$='_header']:has([class$='_titleRow']) svg { color: #ffffff !important; }",
			"",
			"/* ==== Sidebar: XP explorer left pane ==== */",
			"[class$='_newSession'] {",
			"  background: linear-gradient(180deg, #5ea42a 0%, #4f9a1f 30%, #3f8d1e 60%, #367d18 100%) !important;",
			"  color: #ffffff !important;",
			"  border: 1px solid #2c6a12 !important;",
			"  border-radius: 4px !important;",
			"  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.35), inset -1px -1px 0 rgba(0, 0, 0, 0.2) !important;",
			"  font-weight: 700 !important;",
			"}",
			"[class$='_newSession']:hover { filter: brightness(1.08); }",
			"[class$='_newSession'] svg { color: #ffffff !important; }",
			"",
			"/* ==== Sidebar session tree: XP list rows ==== */",
			"[class*='_projectRow'],",
			"[class*='_sessionRow'] {",
			"  border-radius: 3px !important;",
			"}",
			"[class*='_sessionRow']:hover,",
			"[class*='_projectRow']:hover {",
			"  background: #e0eaf7 !important;",
			"}",
			"[class*='_sessionRow'][class*='_selected'],",
			"[class*='_projectRow'][class*='_selected'] {",
			"  background: #316ac5 !important;",
			"  color: #ffffff !important;",
			"}",
			"[class*='_sessionRow'][class*='_selected'] *,",
			"[class*='_projectRow'][class*='_selected'] * {",
			"  color: #ffffff !important;",
			"}",
			"/* XP group header labels */",
			"[class*='_sectionLabel'] {",
			"  font-weight: 700 !important;",
			"  font-size: 12px !important;",
			"  color: #2f4f8a !important;",
			"}",
			"/* Search field: sunken white box when expanded */",
			"[class$='_search'] { border-radius: 4px !important; }",
			"[class$='_search']:not([class*='_searchExpanded']):hover { background: #e0eaf7 !important; }",
			"[class*='_searchExpanded'] {",
			"  background: #ffffff !important;",
			"  border-color: #7f9db9 !important;",
			"  border-radius: 4px !important;",
			"  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.08) !important;",
			"}",
			"",
			"/* ==== Message history: XP balloon bubbles ==== */",
			"[class$='_bubble'] {",
			"  border-radius: 6px !important;",
			"  border: 1px solid #9db9da !important;",
			"  background: #e8f1fd !important;",
			"  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.06) !important;",
			"}",
			"",
			"/* ==== Composer: XP input box + send button ==== */",
			"[class$='_card']:has([class$='_grow']) {",
			"  border-radius: 8px !important;",
			"  border: 1px solid #7f9db9 !important;",
			"  box-shadow: none !important;",
			"}",
			"[class$='_primary'] {",
			"  border-radius: 4px !important;",
			"  background: linear-gradient(180deg, #3c8df0 0%, #276fd1 100%) !important;",
			"  border: 1px solid #1d4fa8 !important;",
			"  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.35), inset -1px -1px 0 rgba(0, 0, 0, 0.15) !important;",
			"}",
			"[class$='_primary']:hover { filter: brightness(1.06); }",
			"[class$='_primary']:active { filter: brightness(0.95); }",
			"",
			"/* ==== Desktop mode (top window): hide the app's own conversation view ==== */",
			"html[data-xp-desktop] [class$='_centerCol'],",
			"html[data-xp-desktop] [class$='_detailsCol'],",
			"html[data-xp-desktop] [class$='_handle'] {",
			"  display: none !important;",
			"}",
			"/* Pin the columns to explicit tracks: with the center/details hidden",
			"   by display:none they leave grid auto-placement, which would put the",
			"   visible sidebar into whatever track comes first — harmless here, but",
			"   explicit pins keep the layout deterministic. */",
			"html[data-xp-desktop] [class$='_sidebarCol'] { grid-column: 1 !important; }",
			"html[data-xp-desktop] [class$='_centerCol'] { grid-column: 2 !important; }",
			"html[data-xp-desktop] [class$='_detailsCol'] { grid-column: 3 !important; }",
			"/* The taskbar is a fixed body-level layer now (never injected into the",
			"   React-managed frame), so the sidebar needs 30px of clear space at",
			"   its bottom to keep its footer reachable. */",
			"html[data-xp-desktop] [class$='_sidebarCol'] {",
			"  padding-bottom: 30px !important;",
			"}",
			"html[data-xp-desktop] [class$='_frame'] {",
			"  background-image: url('https://ia800706.us.archive.org/28/items/theoriginalfilesofsomewindowswallpapers/bliss%20600dpi.jpg'), linear-gradient(180deg, #2f6ad8 0%, #5d9ae8 40%, #a3c8f2 78%, #cfe4f8 100%) !important;",
			"  background-size: cover, cover !important;",
			"  background-position: center center !important;",
			"  background-repeat: no-repeat !important;",
			"}",
			"",
			"/* Desktop layer for windows: a fixed, body-level container OUTSIDE the",
			"   React-managed tree (never a foreign child of the app's frame). */",
			"#dsh-xp-desktop {",
			"  position: fixed;",
			"  left: 0;",
			"  top: 0;",
			"  right: 0;",
			"  bottom: 30px;",
			"  z-index: 60;",
			"  pointer-events: none;",
			"  overflow: hidden;",
			"}",
			"#dsh-xp-desktop > * { pointer-events: auto; }",
			"",
			"/* Desktop mode hides the app sidebar too: sessions/workspaces live on",
			"   the desktop now (icon column + workspace browser). The sidebar DOM",
			"   stays mounted (window iframes still self-drive through it). */",
			"html[data-xp-desktop] [class$='_sidebarCol'] { display: none !important; }",
			"",
			"/* Desktop icon column */",
			"#dsh-xp-deskicons {",
			"  position: absolute;",
			"  left: 6px;",
			"  top: 6px;",
			"  z-index: 4;",
			"  display: flex;",
			"  flex-direction: column;",
			"  gap: 4px;",
			"  padding: 4px;",
			"  user-select: none;",
			"}",
			".xp-desk-icon {",
			"  width: 76px;",
			"  display: flex;",
			"  flex-direction: column;",
			"  align-items: center;",
			"  gap: 2px;",
			"  padding: 6px 2px 4px;",
			"  border: 1px solid transparent;",
			"  border-radius: 3px;",
			"  background: transparent;",
			"  cursor: default;",
			"}",
			".xp-desk-icon:hover { background: rgba(255, 255, 255, 0.18); border-color: rgba(255, 255, 255, 0.35); }",
			".xp-desk-icon.selected { background: rgba(49, 106, 197, 0.25); border-color: rgba(49, 106, 197, 0.45); }",
			".xp-desk-icon .xp-ico {",
			"  width: 32px;",
			"  height: 32px;",
			"  font-size: 26px;",
			"  line-height: 32px;",
			"  text-align: center;",
			"  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));",
			"}",
			".xp-desk-icon .xp-desk-label {",
			"  font: 11px/13px Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  color: #ffffff;",
			"  text-align: center;",
			"  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.85), 0 0 2px rgba(0, 0, 0, 0.6);",
			"  max-width: 74px;",
			"  overflow: hidden;",
			"  word-break: break-all;",
			"}",
			"",
			"/* Tool windows (workspace browser, dialogs) and XP form chrome */",
			".xp-win-body {",
			"  flex: 1;",
			"  min-height: 0;",
			"  background: #ece9d8;",
			"  overflow: auto;",
			"  padding: 8px;",
			"}",
			".xp-browser-body { display: flex; flex-direction: column; padding: 0; }",
			".xp-toolbar {",
			"  display: flex;",
			"  align-items: center;",
			"  gap: 6px;",
			"  padding: 4px 6px;",
			"  border-bottom: 1px solid #aca899;",
			"  background: #ece9d8;",
			"  flex: none;",
			"}",
			".xp-btn {",
			"  font: 12px Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  border: 1px solid #003c74;",
			"  border-radius: 3px;",
			"  padding: 3px 12px;",
			"  background: linear-gradient(180deg, #ffffff 0%, #ecebe5 45%, #d8d0c4 100%);",
			"  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.9);",
			"  cursor: default;",
			"  color: #000000;",
			"}",
			".xp-btn:hover { background: linear-gradient(180deg, #ffffff 0%, #eaf1fb 45%, #d8e4f8 100%); }",
			".xp-btn:active { box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3); }",
			".xp-btn:disabled { color: #999999; }",
			".xp-field {",
			"  font: 12px Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  border: 1px solid #7f9db9;",
			"  border-radius: 3px;",
			"  padding: 3px 6px;",
			"  background: #ffffff;",
			"  color: #000000;",
			"  flex: 1;",
			"  min-width: 0;",
			"}",
			".xp-field:focus { outline: none; border-color: #316ac5; }",
			".xp-breadcrumb {",
			"  display: flex;",
			"  align-items: center;",
			"  gap: 4px;",
			"  padding: 4px 8px;",
			"  border-bottom: 1px solid #aca899;",
			"  background: #f5f3ea;",
			"  font: 12px Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  flex: none;",
			"}",
			".xp-breadcrumb .xp-crumb { cursor: pointer; color: #003c74; text-decoration: underline; }",
			".xp-breadcrumb .xp-crumb-sep { color: #555555; }",
			".xp-grid {",
			"  display: grid;",
			"  grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));",
			"  gap: 4px;",
			"  padding: 8px;",
			"  align-content: start;",
			"  overflow: auto;",
			"  flex: 1;",
			"}",
			".xp-grid-item {",
			"  display: flex;",
			"  flex-direction: column;",
			"  align-items: center;",
			"  gap: 4px;",
			"  padding: 8px 2px 6px;",
			"  border: 1px solid transparent;",
			"  border-radius: 3px;",
			"  cursor: default;",
			"  text-align: center;",
			"}",
			".xp-grid-item:hover { background: rgba(49, 106, 197, 0.14); border-color: rgba(49, 106, 197, 0.28); }",
			".xp-grid-item .xp-ico { width: 40px; height: 40px; font-size: 32px; line-height: 40px; }",
			".xp-grid-item .xp-item-label {",
			"  font: 11px/13px Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  color: #222222;",
			"  max-width: 92px;",
			"  overflow: hidden;",
			"  text-overflow: ellipsis;",
			"  white-space: nowrap;",
			"}",
			"/* \"new session in this workspace\" item: green plus badge */",
			".xp-grid-item.xp-new-item .xp-ico { position: relative; }",
			".xp-grid-item.xp-new-item .xp-ico::after {",
			"  content: '+';",
			"  position: absolute;",
			"  right: -6px;",
			"  bottom: -6px;",
			"  width: 16px;",
			"  height: 16px;",
			"  border-radius: 50%;",
			"  background: linear-gradient(180deg, #6fbe44 0%, #3d9400 100%);",
			"  color: #ffffff;",
			"  font: 700 12px/16px Tahoma, sans-serif;",
			"  text-align: center;",
			"  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);",
			"}",
			".xp-dlg { display: flex; flex-direction: column; gap: 10px; padding: 12px; font: 12px Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif; }",
			".xp-dlg .xp-row { display: flex; align-items: center; gap: 8px; }",
			".xp-dlg .xp-row label { flex: none; color: #222222; }",
			".xp-status { font: 11px Tahoma, 'PingFang SC', sans-serif; color: #c00000; min-height: 14px; }",
			".xp-empty { padding: 24px 12px; text-align: center; color: #666666; font: 12px Tahoma, 'PingFang SC', sans-serif; }",
			".xp-hint { font: 11px Tahoma, 'PingFang SC', sans-serif; color: #555555; }",
			"",
			"/* ==== XP windows ==== */",
			"#dsh-xp-winlist {",
			"  flex: 1;",
			"  min-width: 0;",
			"  display: flex;",
			"  align-items: center;",
			"  gap: 4px;",
			"  overflow: hidden;",
			"}",
			".xp-task-win {",
			"  display: inline-flex;",
			"  align-items: center;",
			"  gap: 6px;",
			"  height: 24px;",
			"  max-width: 190px;",
			"  padding: 0 12px;",
			"  border: 1px solid #3f7ef0;",
			"  border-radius: 3px;",
			"  background: linear-gradient(180deg, #8db4f0 0%, #6c9ce8 55%, #5b8de0 100%);",
			"  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.35);",
			"  color: #ffffff;",
			"  font-size: 12px;",
			"  white-space: nowrap;",
			"  overflow: hidden;",
			"  text-overflow: ellipsis;",
			"  cursor: default;",
			"}",
			".xp-task-win:hover { filter: brightness(1.05); }",
			".xp-task-win.active,",
			".xp-task-win.minimized {",
			"  background: linear-gradient(180deg, #3c6fd0 0%, #2b58c4 55%, #254fb8 100%);",
			"  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.35);",
			"}",
			".xp-window {",
			"  position: absolute;",
			"  box-sizing: border-box;",
			"  display: flex;",
			"  flex-direction: column;",
			"  min-width: 300px;",
			"  min-height: 200px;",
			"  background: #ece9d8;",
			"  border: 1px solid #0831d9;",
			"  border-radius: 8px;",
			"  box-shadow: 2px 2px 10px rgba(0, 0, 20, 0.4);",
			"  overflow: hidden;",
			"}",
			".xp-window:not(.active) {",
			"  border-color: #7d7d7d;",
			"  box-shadow: 1px 1px 6px rgba(0, 0, 20, 0.25);",
			"}",
			".xp-window.minimized { display: none; }",
			".xp-window.maximized { border-radius: 0 !important; }",
			".xp-win-titlebar {",
			"  display: flex;",
			"  align-items: center;",
			"  gap: 6px;",
			"  height: 26px;",
			"  padding: 0 4px 0 8px;",
			"  background: linear-gradient(180deg, #0058e6 0%, #2a85f5 48%, #3a93ff 100%);",
			"  color: #ffffff;",
			"  font-family: Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  font-size: 12px;",
			"  font-weight: 700;",
			"  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);",
			"  user-select: none;",
			"  cursor: default;",
			"  flex: none;",
			"}",
			".xp-window:not(.active) .xp-win-titlebar {",
			"  background: linear-gradient(180deg, #8a8a8a 0%, #9c9c9c 48%, #ababab 100%);",
			"}",
			".xp-win-title {",
			"  flex: 1;",
			"  min-width: 0;",
			"  white-space: nowrap;",
			"  overflow: hidden;",
			"  text-overflow: ellipsis;",
			"}",
			".xp-win-btns { display: flex; gap: 2px; flex: none; }",
			".xp-win-btns button {",
			"  width: 22px;",
			"  height: 20px;",
			"  padding: 0;",
			"  border: 1px solid #1d4fa8;",
			"  border-radius: 4px;",
			"  background: linear-gradient(180deg, #3c8df0 0%, #276fd1 100%);",
			"  color: #ffffff;",
			"  font: 700 11px/1 Tahoma, sans-serif;",
			"  cursor: default;",
			"  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.3);",
			"}",
			".xp-window:not(.active) .xp-win-btns button {",
			"  background: linear-gradient(180deg, #b0b0b0 0%, #909090 100%);",
			"  border-color: #6a6a6a;",
			"}",
			"/* XP close button: red with a white cross. */",
			".xp-win-btns .xp-close {",
			"  background: linear-gradient(180deg, #f0836f 0%, #e3352d 45%, #c22d24 100%) !important;",
			"  border-color: #9c1f12 !important;",
			"}",
			".xp-window:not(.active) .xp-win-btns .xp-close {",
			"  background: linear-gradient(180deg, #c98b83 0%, #b0534a 45%, #9c4a42 100%) !important;",
			"  border-color: #84423a !important;",
			"}",
			".xp-win-btns button:hover { filter: brightness(1.12); }",
			".xp-win-btns button:active { filter: brightness(0.9); }",
			".xp-win-frame {",
			"  flex: 1;",
			"  min-height: 0;",
			"  width: 100%;",
			"  border: none;",
			"  background: #ffffff;",
			"}",
			"/* Resize handles: 4 edges + 4 corners, inside the window chrome. */",
			".xp-rs {",
			"  position: absolute;",
			"  z-index: 5;",
			"  touch-action: none;",
			"}",
			".xp-rs-n { top: 0; left: 8px; right: 8px; height: 5px; cursor: ns-resize; }",
			".xp-rs-s { bottom: 0; left: 8px; right: 8px; height: 5px; cursor: ns-resize; }",
			".xp-rs-e { right: 0; top: 8px; bottom: 8px; width: 5px; cursor: ew-resize; }",
			".xp-rs-w { left: 0; top: 8px; bottom: 8px; width: 5px; cursor: ew-resize; }",
			".xp-rs-ne { top: 0; right: 0; width: 12px; height: 12px; cursor: nesw-resize; }",
			".xp-rs-nw { top: 0; left: 0; width: 12px; height: 12px; cursor: nwse-resize; }",
			".xp-rs-se { bottom: 0; right: 0; width: 12px; height: 12px; cursor: nwse-resize; }",
			".xp-rs-sw { bottom: 0; left: 0; width: 12px; height: 12px; cursor: nesw-resize; }",
			".xp-window.maximized .xp-rs { display: none; }",
			"",
			"/* ==== Window content (iframe): strip the app's own chrome ==== */",
			"html[data-xp-win] [class$='_frame'] {",
			"  grid-template-columns: 0 1fr 0 !important;",
			"  grid-template-rows: 100% !important;",
			"  transition: none !important;",
			"}",
			"html[data-xp-win] [class$='_sidebarCol'],",
			"html[data-xp-win] [class$='_detailsCol'],",
			"html[data-xp-win] [class$='_handle'] {",
			"  display: none !important;",
			"}",
			"/* CRITICAL: the hidden columns leave auto-placement, so the center",
			"   would auto-place into the FIRST (0px) track and fold the whole",
			"   conversation to the left edge — pin every column explicitly. */",
			"html[data-xp-win] [class$='_sidebarCol'] { grid-column: 1 !important; }",
			"html[data-xp-win] [class$='_centerCol'] { grid-column: 2 !important; }",
			"html[data-xp-win] [class$='_detailsCol'] { grid-column: 3 !important; }",
			"",
			"/* ==== Taskbar (injected, top window only) ==== */",
			"#dsh-xp-taskbar {",
			"  z-index: 9999;",
			"  box-sizing: border-box;",
			"  display: flex;",
			"  align-items: center;",
			"  gap: 6px;",
			"  height: 30px;",
			"  padding: 2px 6px;",
			"  background: linear-gradient(180deg, #4a7dd8 0%, #2f6ad8 8%, #1d56d4 55%, #1741b0 100%);",
			"  border-top: 1px solid #10308a;",
			"  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);",
			"  user-select: none;",
			"  overflow: hidden;",
			"}",
			"#dsh-xp-taskbar[data-docked='true'] { grid-column: 1 / -1; grid-row: 2; }",
			"#dsh-xp-taskbar[data-docked='false'] { position: fixed; bottom: 0; left: 0; right: 0; }",
			"",
			"#dsh-xp-start {",
			"  display: inline-flex;",
			"  align-items: center;",
			"  gap: 6px;",
			"  height: 26px;",
			"  padding: 0 14px 0 8px;",
			"  border: 1px solid #0f2f7d;",
			"  border-radius: 0 8px 8px 0;",
			"  background: linear-gradient(180deg, #5ea42a 0%, #4f9a1f 30%, #3f8d1e 60%, #367d18 100%);",
			"  color: #ffffff;",
			"  font-family: Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  font-size: 12px;",
			"  font-weight: 700;",
			"  cursor: default;",
			"  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 0 rgba(0, 0, 0, 0.25);",
			"}",
			"#dsh-xp-start:hover { filter: brightness(1.1); }",
			"#dsh-xp-start:active { filter: brightness(0.9); }",
			"",
			"#dsh-xp-taskbar .xp-clock {",
			"  margin-left: auto;",
			"  color: #ffffff;",
			"  font-family: Tahoma, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  font-size: 12px;",
			"  font-weight: 700;",
			"  font-variant-numeric: tabular-nums;",
			"  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);",
			"  padding: 0 8px;",
			"  flex: none;",
			"}",
			""
		].join("\n");

		// ─────────────────────────────────────────────────────────────────
		// Taskbar DOM (start button + real window list + clock)
		// ─────────────────────────────────────────────────────────────────
		var TASKBAR_HTML = [
			'<button id="dsh-xp-start" type="button" tabindex="-1" title="开始（装饰元素）">',
			'  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">',
			'    <rect x="2" y="1" width="11" height="3" fill="#f35325"/>',
			'    <rect x="2" y="4" width="11" height="3" fill="#81bc06"/>',
			'    <rect x="2" y="7" width="11" height="3" fill="#05a6f0"/>',
			'    <rect x="2" y="10" width="11" height="3" fill="#ffba08"/>',
			'    <rect x="1" y="1" width="1" height="12" fill="#c9c9c9"/>',
			'  </svg>',
			'  <span>开始</span>',
			'</button>',
			'<div id="dsh-xp-winlist"></div>',
			'<div class="xp-clock" title=""></div>',
			""
		].join("");

		// ─────────────────────────────────────────────────────────────────
		// Shared helpers + persistent state
		// ─────────────────────────────────────────────────────────────────
		function isTopWindow() {
			try {
				return window.self === window.top;
			} catch (e) {
				return true;
			}
		}

		function waitFor(fn, timeout, step) {
			return new Promise(function (resolve) {
				var t0 = Date.now();
				var tick = function () {
					var v;
					try {
						v = fn();
					} catch (e) {
						v = null;
					}
					if (v) return resolve(v);
					if (Date.now() - t0 > timeout) return resolve(null);
					setTimeout(tick, step || 120);
				};
				tick();
			});
		}

		/* Window-manager state survives HMR re-applies via the window global. */
		var S = window.__dshXp__ || (window.__dshXp__ = {
			init: false,
			windows: [],
			bySession: new Map(),
			seq: 0,
			z: 100,
			active: null
		});

		// ─────────────────────────────────────────────────────────────────
		// Taskbar
		// ─────────────────────────────────────────────────────────────────
		function startClock(bar, ctx) {
			var el = bar.querySelector(".xp-clock");
			if (!el) return;
			var tick = function () {
				var now = new Date();
				var hh = String(now.getHours()).padStart(2, "0");
				var mm = String(now.getMinutes()).padStart(2, "0");
				el.textContent = hh + ":" + mm;
				el.title = now.toLocaleDateString();
			};
			tick();
			var id = window.setInterval(tick, 10000);
			try {
				if (ctx && typeof ctx.on === "function") {
					ctx.on("dispose", function () {
						window.clearInterval(id);
					});
				}
			} catch (e) {
				/* teardown without effect support: interval keeps running, harmless */
			}
		}

		function ensureTaskbar(ctx) {
			if (typeof document === "undefined" || !isTopWindow()) return;
			var bar = document.getElementById("dsh-xp-taskbar");
			if (!bar) {
				bar = document.createElement("div");
				bar.id = "dsh-xp-taskbar";
				bar.dataset.docked = "false";
				bar.innerHTML = TASKBAR_HTML;
				startClock(bar, ctx);
				document.body.appendChild(bar);
			} else {
				/* Upgrade older taskbar markup: drop decorative .xp-run buttons
				   and add the real window list. */
				if (!bar.querySelector("#dsh-xp-winlist")) {
					bar.querySelectorAll(".xp-run").forEach(function (n) { n.remove(); });
					var list = document.createElement("div");
					list.id = "dsh-xp-winlist";
					var clock = bar.querySelector(".xp-clock");
					bar.insertBefore(list, clock || null);
				}
			}
			/* The taskbar is a fixed body-level layer — never inside the
			   React-managed frame (foreign children there can crash React's
			   reconciliation on layout changes). */
			if (bar.parentElement !== document.body) document.body.appendChild(bar);
			bar.dataset.docked = "false";
		}

		function getDesktopLayer() {
			var layer = document.getElementById("dsh-xp-desktop");
			if (!layer) {
				layer = document.createElement("div");
				layer.id = "dsh-xp-desktop";
				document.body.appendChild(layer);
			}
			return layer;
		}

		function desktopGeometry() {
			var sidebar = document.querySelector("[class$='_sidebarCol']");
			var sideW = sidebar ? sidebar.getBoundingClientRect().width : 0;
			return {
				sideW: sideW,
				width: window.innerWidth - sideW,
				height: window.innerHeight - 30
			};
		}

		// ─────────────────────────────────────────────────────────────────
		// Window manager (top window only)
		// ─────────────────────────────────────────────────────────────────
		function fiberSessionId(el) {
			var key = Object.keys(el).find(function (k) {
				return k.indexOf("__reactFiber") === 0;
			});
			if (!key) return null;
			var fiber = el[key];
			var guard = 0;
			while (fiber && guard++ < 14) {
				/* The session-item fiber carries its OWN id as the React key and
				   the ACTIVE session id as memoizedProps.currentId (shared by
				   every row) — the key is the reliable per-row identity. */
				if (fiber.key && typeof fiber.key === "string" &&
					fiber.key.indexOf("session-") === 0 &&
					fiber.memoizedProps && typeof fiber.memoizedProps.currentId === "string") {
					return fiber.key;
				}
				/* Fallback: any other prop holding a session-* string. */
				var p = fiber.memoizedProps;
				if (p) {
					for (var n of Object.keys(p)) {
						if (n === "currentId") continue;
						var v = p[n];
						if (typeof v === "string" && v.indexOf("session-") === 0) return v;
						if (v && typeof v === "object" && typeof v.id === "string" && v.id.indexOf("session-") === 0) return v.id;
					}
				}
				fiber = fiber.return;
			}
			return null;
		}

		function findRowBySession(doc, sessionId) {
			var rows = doc.querySelectorAll('[class*="_sessionRow"]');
			for (var i = 0; i < rows.length; i++) {
				if (fiberSessionId(rows[i]) === sessionId) return rows[i];
			}
			return null;
		}

		function currentSelectedId() {
			var sel = document.querySelector('[class*="_sessionRow"][class*="_selected"]');
			return sel ? fiberSessionId(sel) : null;
		}

		function setWinTitle(win, t) {
			var text = (t || "会话").trim();
			if (!text) text = "会话";
			win.titleEl.textContent = text;
			win.btn.textContent = text;
			win.btn.title = text;
		}

		function focusWindow(win) {
			if (win.state === "minimized") return;
			for (var i = 0; i < S.windows.length; i++) {
				var w = S.windows[i];
				if (w === win) continue;
				w.el.classList.remove("active");
				w.btn.classList.remove("active");
			}
			win.el.style.zIndex = String(++S.z);
			win.el.classList.add("active");
			win.btn.classList.add("active");
			win.btn.classList.remove("minimized");
			S.active = win;
			try {
				if (win.iframe && win.iframe.contentWindow) win.iframe.contentWindow.focus();
			} catch (e) { /* cross-origin guard */ }
		}

		function focusTopWindow() {
			var top = null;
			for (var i = 0; i < S.windows.length; i++) {
				var w = S.windows[i];
				if (w.state === "minimized") continue;
				if (!top || parseInt(w.el.style.zIndex, 10) > parseInt(top.el.style.zIndex, 10)) top = w;
			}
			if (top) focusWindow(top);
		}

		function minimizeWindow(win) {
			win.state = "minimized";
			win.el.classList.add("minimized");
			win.el.classList.remove("active");
			win.btn.classList.add("minimized");
			win.btn.classList.remove("active");
			if (S.active === win) {
				S.active = null;
				focusTopWindow();
			}
			schedulePersist();
		}

		function restoreWindow(win) {
			win.state = win.state === "maximized" ? "maximized" : "normal";
			win.el.classList.remove("minimized");
			focusWindow(win);
			schedulePersist();
		}

		function maximizeWindow(win) {
			var geo = desktopGeometry();
			if (win.state === "maximized") {
				win.state = "normal";
				win.el.classList.remove("maximized");
				win.el.style.left = win.x + "px";
				win.el.style.top = win.y + "px";
				win.el.style.width = win.w + "px";
				win.el.style.height = win.h + "px";
				win.el.querySelector(".xp-max").textContent = "\u25A1";
			} else {
				win.state = "maximized";
				win.el.classList.add("maximized");
				win.el.style.left = "0px";
				win.el.style.top = "0px";
				win.el.style.width = window.innerWidth + "px";
				win.el.style.height = geo.height + "px";
				win.el.querySelector(".xp-max").textContent = "\u25A0";
			}
			focusWindow(win);
			schedulePersist();
		}

		function closeWindow(win) {
			var idx = S.windows.indexOf(win);
			if (idx !== -1) S.windows.splice(idx, 1);
			if (win.sessionId) S.bySession.delete(win.sessionId);
			try { if (win.toolCleanup) win.toolCleanup(); } catch (e) { }
			try { win.btn.remove(); } catch (e) { }
			try { win.el.remove(); } catch (e) { }
			if (S.active === win) {
				S.active = null;
				focusTopWindow();
			}
			schedulePersist();
		}

		function taskbarClick(win) {
			if (win.state === "minimized") restoreWindow(win);
			else if (S.active === win) minimizeWindow(win);
			else focusWindow(win);
		}

		function startDrag(win, el, e) {
			if (win.state === "maximized") return;
			var startX = e.clientX;
			var startY = e.clientY;
			var origX = parseFloat(el.style.left) || 0;
			var origY = parseFloat(el.style.top) || 0;
			var move = function (ev) {
				var nx = origX + (ev.clientX - startX);
				var ny = origY + (ev.clientY - startY);
				nx = Math.max(-win.w + 80, Math.min(nx, window.innerWidth - 60));
				ny = Math.max(0, Math.min(ny, window.innerHeight - 70));
				el.style.left = nx + "px";
				el.style.top = ny + "px";
				/* Keep the internal state in sync so minimize/maximize restore
				   the real position. */
				win.x = nx;
				win.y = ny;
			};
			var up = function () {
				document.removeEventListener("pointermove", move);
				document.removeEventListener("pointerup", up);
				schedulePersist();
			};
			document.addEventListener("pointermove", move);
			document.addEventListener("pointerup", up);
			e.preventDefault();
		}

		function startResize(win, el, dir, e) {
			if (win.state === "maximized") return;
			focusWindow(win);
			var startX = e.clientX;
			var startY = e.clientY;
			var origX = parseFloat(el.style.left) || 0;
			var origY = parseFloat(el.style.top) || 0;
			var origW = parseFloat(el.style.width) || win.w;
			var origH = parseFloat(el.style.height) || win.h;
			var minW = 300;
			var minH = 200;
			var maxW = window.innerWidth;
			var maxH = window.innerHeight - 30;
			var move = function (ev) {
				var dx = ev.clientX - startX;
				var dy = ev.clientY - startY;
				var nx = origX, ny = origY, nw = origW, nh = origH;
				if (dir.indexOf("e") !== -1) nw = origW + dx;
				if (dir.indexOf("s") !== -1) nh = origH + dy;
				if (dir.indexOf("w") !== -1) { nw = origW - dx; nx = origX + dx; }
				if (dir.indexOf("n") !== -1) { nh = origH - dy; ny = origY + dy; }
				/* Enforce minimum size (north/west adjust the origin). */
				if (nw < minW) {
					if (dir.indexOf("w") !== -1) nx = origX + (origW - minW);
					nw = minW;
				}
				if (nh < minH) {
					if (dir.indexOf("n") !== -1) ny = origY + (origH - minH);
					nh = minH;
				}
				/* Clamp inside the desktop area. */
				nx = Math.max(0, Math.min(nx, maxW - minW));
				ny = Math.max(0, Math.min(ny, maxH - minH));
				nw = Math.max(minW, Math.min(nw, maxW - nx));
				nh = Math.max(minH, Math.min(nh, maxH - ny));
				el.style.left = nx + "px";
				el.style.top = ny + "px";
				el.style.width = nw + "px";
				el.style.height = nh + "px";
				win.x = nx;
				win.y = ny;
				win.w = nw;
				win.h = nh;
			};
			var up = function () {
				document.removeEventListener("pointermove", move);
				document.removeEventListener("pointerup", up);
				schedulePersist();
			};
			document.addEventListener("pointermove", move);
			document.addEventListener("pointerup", up);
			e.preventDefault();
			e.stopPropagation();
		}

		/* Shared window chrome: titlebar + min/max/close + resize handles,
		   wired and appended. The caller attaches the body (iframe or custom
		   content) into the space between titlebar and resize handles. */
		function createWinChrome(win, title) {
			var layer = getDesktopLayer();
			var el = document.createElement("div");
			el.className = "xp-window";
			el.style.left = win.x + "px";
			el.style.top = win.y + "px";
			el.style.width = win.w + "px";
			el.style.height = win.h + "px";
			el.innerHTML =
				'<div class="xp-win-titlebar">' +
				'<span class="xp-win-title"></span>' +
				'<span class="xp-win-btns">' +
				'<button type="button" class="xp-min" title="最小化">\u2500</button>' +
				'<button type="button" class="xp-max" title="最大化">\u25A1</button>' +
				'<button type="button" class="xp-close" title="关闭">\u2715</button>' +
				'</span></div>' +
				'<span class="xp-rs xp-rs-n" data-dir="n"></span>' +
				'<span class="xp-rs xp-rs-s" data-dir="s"></span>' +
				'<span class="xp-rs xp-rs-e" data-dir="e"></span>' +
				'<span class="xp-rs xp-rs-w" data-dir="w"></span>' +
				'<span class="xp-rs xp-rs-ne" data-dir="ne"></span>' +
				'<span class="xp-rs xp-rs-nw" data-dir="nw"></span>' +
				'<span class="xp-rs xp-rs-se" data-dir="se"></span>' +
				'<span class="xp-rs xp-rs-sw" data-dir="sw"></span>';
			layer.appendChild(el);

			var btn = document.createElement("button");
			btn.type = "button";
			btn.className = "xp-task-win";
			btn.dataset.win = String(win.id);
			btn.textContent = title || "窗口";
			btn.title = title || "窗口";
			btn.addEventListener("click", function () { taskbarClick(win); });
			var list = document.getElementById("dsh-xp-winlist");
			if (list) list.appendChild(btn);

			win.el = el;
			win.btn = btn;
			win.titleEl = el.querySelector(".xp-win-title");
			setWinTitle(win, title || "窗口");

			el.querySelector(".xp-min").addEventListener("click", function (e) { e.stopPropagation(); minimizeWindow(win); });
			el.querySelector(".xp-max").addEventListener("click", function (e) { e.stopPropagation(); maximizeWindow(win); });
			el.querySelector(".xp-close").addEventListener("click", function (e) { e.stopPropagation(); closeWindow(win); });
			var bar = el.querySelector(".xp-win-titlebar");
			bar.addEventListener("pointerdown", function (e) {
				if (e.target.closest(".xp-win-btns")) return;
				focusWindow(win);
				startDrag(win, el, e);
			});
			bar.addEventListener("dblclick", function () { maximizeWindow(win); });
			var handles = el.querySelectorAll(".xp-rs");
			for (var h = 0; h < handles.length; h++) {
				(function (handle) {
					handle.addEventListener("pointerdown", function (e) {
						startResize(win, el, handle.getAttribute("data-dir") || "se", e);
					});
				})(handles[h]);
			}

			S.windows.push(win);
			focusWindow(win);
			el.id = "dsh-xp-win-" + win.id;
			return el;
		}

		function windowGeometry(win) {
			var geo = desktopGeometry();
			var deskW = Math.max(320, geo.width);
			var deskH = Math.max(240, geo.height);
			var cascade = (S.windows.length % 6) * 28;
			win.w = Math.min(960, Math.max(360, deskW - 80));
			win.h = Math.min(660, Math.max(260, deskH - 90));
			win.x = Math.max(geo.sideW + 8, Math.min(geo.sideW + 20 + cascade, Math.max(geo.sideW + 8, window.innerWidth - win.w - 8)));
			win.y = Math.max(6, Math.min(14 + cascade, Math.max(6, geo.height - 40 - win.h)));
		}

		function openWindow(sessionId, title) {
			if (sessionId && S.bySession.has(sessionId)) {
				focusWindow(S.bySession.get(sessionId));
				return;
			}
			var win = {
				id: ++S.seq,
				sessionId: sessionId || null,
				state: "normal",
				x: 0, y: 0, w: 0, h: 0
			};
			windowGeometry(win);
			var el = createWinChrome(win, title || "打开中\u2026");

			var iframe = document.createElement("iframe");
			iframe.className = "xp-win-frame";
			iframe.title = title || "会话";
			el.insertBefore(iframe, el.querySelector(".xp-rs"));
			win.iframe = iframe;
			setWinTitle(win, "打开中\u2026");

			if (sessionId) S.bySession.set(sessionId, win);
			/* The iframe's own plugin instance reads this dataset and drives the
			   app inside (clicking the target session row / its new-session
			   button), with data-xp-win applied from first paint — so the app's
			   sidebar is never rendered inside a window. */
			iframe.dataset.session = sessionId || "new";
			iframe.dataset.wintitle = title || "";
			iframe.src = "/";
			schedulePersist();
			return win;
		}

		// ─────────────────────────────────────────────────────────────────
		// Desktop icons + tool windows: sessions/workspaces management on the
		// XP desktop. All data comes from the client runtime services
		// (ctx.sessions / ctx.workspaces) — no sidebar scraping.
		// ─────────────────────────────────────────────────────────────────
		function escHtml(s) {
			return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
				return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
			});
		}

		function escAttr(s) {
			return escHtml(s);
		}

		function xpSvc(name) {
			try {
				var ctx = S.ctx;
				return ctx && typeof ctx.get === "function" ? ctx.get(name) : null;
			} catch (e) {
				return null;
			}
		}

		function wsTitle(w) {
			if (!w) return "";
			if (w.title) return w.title;
			if (w.path) {
				var parts = String(w.path).split(/[\\/]+/).filter(Boolean);
				return parts.length ? parts[parts.length - 1] : w.path;
			}
			return w.workspaceId || "";
		}

		function sessionTitle(byId, id) {
			var s = byId && byId[id];
			return (s && (s.displayTitle || s.title)) || id;
		}

		function gridItem(ico, label, id, kind) {
			return '<div class="xp-grid-item" data-kind="' + escAttr(kind) + '" data-id="' + escAttr(id) + '" data-title="' + escAttr(label) + '" title="' + escAttr(label) + '">' +
				'<span class="xp-ico">' + ico + '</span>' +
				'<span class="xp-item-label">' + escHtml(label) + '</span></div>';
		}

		function openToolWindow(kind, title) {
			var win = {
				id: ++S.seq,
				sessionId: null,
				state: "normal",
				x: 0, y: 0, w: 0, h: 0,
				tool: kind
			};
			windowGeometry(win);
			if (kind === "browse") {
				win.w = Math.min(780, Math.max(420, win.w));
				win.h = Math.min(580, Math.max(320, win.h));
			} else if (kind === "workspace") {
				win.w = Math.min(520, Math.max(380, win.w));
				win.h = Math.min(360, Math.max(260, win.h));
			}
			var el = createWinChrome(win, title || "窗口");
			if (kind === "settings") {
				var iframe = document.createElement("iframe");
				iframe.className = "xp-win-frame";
				el.insertBefore(iframe, el.querySelector(".xp-rs"));
				win.iframe = iframe;
				iframe.dataset.mode = "settings";
				iframe.dataset.wintitle = title || "设置";
				iframe.src = "/";
			} else {
				var body = document.createElement("div");
				body.className = "xp-win-body";
				el.insertBefore(body, el.querySelector(".xp-rs"));
				win.bodyEl = body;
				renderToolBody(win, kind);
			}
			schedulePersist();
			return win;
		}

		function renderToolBody(win, kind) {
			if (kind === "browse") renderBrowse(win);
			else if (kind === "search") renderSearch(win);
			else if (kind === "workspace") renderAddWorkspace(win);
			else win.bodyEl.innerHTML = '<div class="xp-empty">未知工具</div>';
		}

		function subscribeStores(win, render) {
			var unsubs = [];
			var wsSvc = xpSvc("workspaces");
			var sessSvc = xpSvc("sessions");
			if (wsSvc && wsSvc.list && typeof wsSvc.list.subscribe === "function") {
				try { unsubs.push(wsSvc.list.subscribe(render)); } catch (e) { }
			}
			if (sessSvc && sessSvc.list && typeof sessSvc.list.subscribe === "function") {
				try { unsubs.push(sessSvc.list.subscribe(render)); } catch (e) { }
			}
			win.toolCleanup = function () {
				for (var i = 0; i < unsubs.length; i++) {
					try { unsubs[i](); } catch (e) { }
				}
			};
		}

		function workspaceItems() {
			var wsSvc = xpSvc("workspaces");
			var snap = wsSvc && wsSvc.list ? wsSvc.list.getSnapshot() : null;
			return snap && Array.isArray(snap.items) ? snap.items : [];
		}

		function sessionById() {
			var sessSvc = xpSvc("sessions");
			var snap = sessSvc && sessSvc.list ? sessSvc.list.getSnapshot() : null;
			return snap && snap.byId ? snap.byId : {};
		}

		/* "我的工作区": Explorer-style browser — workspace folders on the root,
		   sessions inside each folder. */
		function renderBrowse(win) {
			var body = win.bodyEl;
			body.className = "xp-win-body xp-browser-body";
			var state = { ws: null };
			function render() {
				var items = workspaceItems();
				var byId = sessionById();
				var current = null;
				if (state.ws) {
					for (var i = 0; i < items.length; i++) {
						if (items[i].workspaceId === state.ws) { current = items[i]; break; }
					}
					if (!current) state.ws = null; /* workspace vanished: back to root */
				}
				var crumbs = '<div class="xp-breadcrumb"><span class="xp-crumb" data-root="1">我的工作区</span>';
				if (current) {
					crumbs += '<span class="xp-crumb-sep">\u203A</span><span>' + escHtml(wsTitle(current)) + '</span>';
				}
				crumbs += '</div>';
				var grid = '<div class="xp-grid">';
				if (!state.ws) {
					if (items.length === 0) grid += '<div class="xp-empty">没有工作区 — 双击桌面「添加工作区」创建</div>';
					for (var j = 0; j < items.length; j++) {
						grid += gridItem("\uD83D\uDCC1", wsTitle(items[j]), items[j].workspaceId, "ws");
					}
				} else if (current) {
					/* Inside a workspace folder: a "new session" action first,
					   then the workspace's sessions. */
					grid += '<div class="xp-grid-item xp-new-item" data-kind="new" data-id="" data-title="新建会话" title="在这个工作区内新建会话">' +
						'<span class="xp-ico">\uD83D\uDCC4</span>' +
						'<span class="xp-item-label">新建会话</span></div>';
					var ids = Array.isArray(current.sessionIds) ? current.sessionIds : [];
					var curId = null;
					try {
						var sSvc = xpSvc("sessions");
						var sSnap = sSvc && sSvc.list ? sSvc.list.getSnapshot() : null;
						curId = sSnap ? sSnap.current : null;
					} catch (e) { }
					var shown = 0;
					for (var k = 0; k < ids.length; k++) {
						var s = byId[ids[k]];
						/* Match the official sidebar: blank sessions are hidden
						   except the currently selected one. */
						if (!s || (s.blank && s.id !== curId)) continue;
						grid += gridItem("\uD83D\uDCAC", sessionTitle(byId, ids[k]), ids[k], "sess");
						shown++;
					}
					if (shown === 0) grid += '<div class="xp-empty">这个工作区还没有会话 — 点上方「新建会话」创建</div>';
				}
				grid += '</div>';
				body.innerHTML = crumbs + grid;
			}
			body.addEventListener("click", function (e) {
				var sel = body.querySelectorAll(".xp-grid-item.selected");
				for (var i = 0; i < sel.length; i++) sel[i].classList.remove("selected");
				var item = e.target.closest(".xp-grid-item");
				if (item) item.classList.add("selected");
			});
			body.addEventListener("dblclick", function (e) {
				if (e.target.closest("[data-root]")) {
					state.ws = null;
					render();
					return;
				}
				var item = e.target.closest(".xp-grid-item");
				if (!item) return;
				if (item.dataset.kind === "ws") {
					state.ws = item.dataset.id;
					render();
				} else if (item.dataset.kind === "sess") {
					openWindow(item.dataset.id, item.dataset.title || "会话");
				} else if (item.dataset.kind === "new") {
					createNewSession();
				}
			});
			function createNewSession() {
				var wsId = state.ws;
				var sessSvc = xpSvc("sessions");
				if (!wsId || !sessSvc || typeof sessSvc.create !== "function") return;
				sessSvc.create({ workspaceId: wsId }).then(function (sid) {
					if (sid) openWindow(sid, "新会话");
				}).catch(function (err) { /* create failure: host surfaces the error */ });
			}
			subscribeStores(win, render);
			render();
		}

		/* 搜索: sessions.search over message content. */
		function renderSearch(win) {
			var body = win.bodyEl;
			body.innerHTML =
				'<div class="xp-toolbar">' +
				'<input class="xp-field" data-q="1" placeholder="搜索会话内容\u2026" autocomplete="off"/>' +
				'<button type="button" class="xp-btn" data-go="1">搜索</button>' +
				'</div>' +
				'<div class="xp-grid" data-results="1"></div>';
			var input = body.querySelector("[data-q]");
			var results = body.querySelector("[data-results]");
			function run() {
				var q = (input.value || "").trim();
				if (!q) return;
				results.innerHTML = '<div class="xp-empty">搜索中\u2026</div>';
				var sessSvc = xpSvc("sessions");
				if (!sessSvc || typeof sessSvc.search !== "function") {
					results.innerHTML = '<div class="xp-empty">搜索服务不可用</div>';
					return;
				}
				sessSvc.search(q).then(function (res) {
					var items = res && Array.isArray(res.items) ? res.items : (Array.isArray(res) ? res : []);
					var byId = sessionById();
					if (items.length === 0) {
						results.innerHTML = '<div class="xp-empty">没有找到匹配的会话</div>';
						return;
					}
					var html = "";
					for (var i = 0; i < items.length; i++) {
						var it = items[i];
						if (!it || !it.sessionId) continue;
						var title = sessionTitle(byId, it.sessionId);
						var snippet = it.snippet || "";
						html += '<div class="xp-grid-item" data-kind="hit" data-id="' + escAttr(it.sessionId) + '" data-title="' + escAttr(title) + '" style="grid-column:1/-1;flex-direction:row;text-align:left;width:100%;box-sizing:border-box">' +
							'<span class="xp-ico" style="width:28px;height:28px;font-size:22px;line-height:28px;flex:none">\uD83D\uDCAC</span>' +
							'<span style="min-width:0;overflow:hidden">' +
							'<span class="xp-item-label" style="display:block;max-width:none">' + escHtml(title) + '</span>' +
							'<span class="xp-hint" style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escHtml(snippet) + '</span>' +
							'</span></div>';
					}
					results.innerHTML = html;
				}).catch(function (err) {
					results.innerHTML = '<div class="xp-empty">搜索失败: ' + escHtml(err && err.message ? err.message : String(err)) + '</div>';
				});
			}
			body.addEventListener("click", function (e) {
				var go = e.target.closest("[data-go]");
				if (go) { run(); return; }
				var hit = e.target.closest("[data-kind='hit']");
				if (hit) openWindow(hit.dataset.id, hit.dataset.title || "会话");
			});
			body.addEventListener("keydown", function (e) {
				if (e.key === "Enter") run();
			});
			setTimeout(function () { try { input.focus(); } catch (e) { } }, 50);
		}

		/* 添加工作区: native directory picker (Finder / Explorer) — no manual
		   path typing. */
		function renderAddWorkspace(win) {
			var body = win.bodyEl;
			body.innerHTML =
				'<div class="xp-dlg">' +
				'<div class="xp-hint">选择一个本地目录作为工作区（系统目录选择器）。</div>' +
				'<div class="xp-row">' +
				'<button type="button" class="xp-btn" data-pick="1">选择目录\u2026</button>' +
				'<span class="xp-status" data-status="1"></span>' +
				'</div>' +
				'<div class="xp-hint" data-path="1"></div></div>';
			var status = body.querySelector("[data-status]");
			var pathEl = body.querySelector("[data-path]");
			function pick() {
				status.textContent = "打开目录选择器\u2026";
				var wsSvc = xpSvc("workspaces");
				if (!wsSvc || typeof wsSvc.pickDirectory !== "function") {
					status.textContent = "目录选择器不可用";
					return;
				}
				wsSvc.pickDirectory().then(function (path) {
					if (!path) { status.textContent = "已取消"; return; }
					pathEl.textContent = path;
					status.textContent = "添加中\u2026";
					return wsSvc.manager.create({ path: path }).then(function (result) {
						if (result && result.ok) closeWindow(win);
						else status.textContent = (result && result.error && result.error.message) || "添加失败";
					});
				}).catch(function (err) {
					status.textContent = "添加失败: " + (err && err.message ? err.message : String(err));
				});
			}
			var btn = body.querySelector("[data-pick]");
			if (btn) btn.addEventListener("click", pick);
		}

		var DESKTOP_ICON_DEFS = [
			["browse", "我的工作区", "\uD83D\uDCC1"],
			["search", "搜索", "\uD83D\uDD0D"],
			["workspace", "添加工作区", "\u2795"],
			["settings", "设置", "\u2699\uFE0F"]
		];

		function ensureDesktopIcons() {
			var layer = getDesktopLayer();
			var bar = document.getElementById("dsh-xp-deskicons");
			if (!bar) {
				bar = document.createElement("div");
				bar.id = "dsh-xp-deskicons";
				layer.appendChild(bar);
			}
			if (S.iconsBuilt) return;
			S.iconsBuilt = true;
			for (var i = 0; i < DESKTOP_ICON_DEFS.length; i++) {
				(function (def) {
					var el = document.createElement("button");
					el.type = "button";
					el.className = "xp-desk-icon";
					el.dataset.icon = def[0];
					el.title = def[1];
					el.innerHTML = '<span class="xp-ico">' + def[2] + '</span><span class="xp-desk-label"></span>';
					el.querySelector(".xp-desk-label").textContent = def[1];
					el.addEventListener("click", function (e) {
						var sel = bar.querySelectorAll(".xp-desk-icon.selected");
						for (var j = 0; j < sel.length; j++) sel[j].classList.remove("selected");
						el.classList.add("selected");
						e.stopPropagation();
					});
					el.addEventListener("dblclick", function () {
						if (def[0] === "settings") openDesktopSettings();
						else openToolWindow(def[0], def[1]);
					});
					bar.appendChild(el);
				})(DESKTOP_ICON_DEFS[i]);
			}
		}

		/* 设置: open the app's OWN settings panel directly on the parent
		   page — the sidebar is display:none but its trigger DOM and React
		   handler stay live, so clicking it pops the native settings modal
		   over the desktop. No separate window, no iframe boot. */
		function openDesktopSettings() {
			var attempts = 0;
			function findTrigger() {
				var areas = document.querySelectorAll("[class$='_settingsArea'], [class*='_settingsArea']");
				for (var i = 0; i < areas.length; i++) {
					var btn = areas[i].querySelector("button");
					if (btn) return btn;
				}
				return document.querySelector("[class$='_trigger']");
			}
			function click() {
				var btn = findTrigger();
				if (!btn) {
					if (++attempts <= 10) setTimeout(click, 1500);
					return;
				}
				fireClick(btn);
				try { btn.click(); } catch (e) { }
				/* The settings panel mounts an overlay; re-click until it shows. */
				waitFor(function () {
					return document.querySelector("[class$='_overlay']");
				}, 2500).then(function (open) {
					if (open) return;
					if (++attempts <= 10) setTimeout(click, 1500);
				});
			}
			/* Let the app baseline settle so the sidebar.settings slot mounts. */
			var settle = function () {
				var ctx = S.ctx;
				var s = ctx && typeof ctx.get === "function" ? ctx.get("sessions") : null;
				var snap = null;
				try { snap = s && s.list ? s.list.getSnapshot() : null; } catch (e) { }
				if (!snap || snap.phase !== "ready") { setTimeout(settle, 400); return; }
				setTimeout(click, 800);
			};
			settle();
		}

		// ─────────────────────────────────────────────────────────────────
		// Window self-driving (runs INSIDE each window iframe)
		// ─────────────────────────────────────────────────────────────────
		/* The app gates row activation on a pointer sequence (drag detection),
		   so a bare .click() on a hidden row is ignored — dispatch the full
		   pointer + mouse sequence instead. Works on display:none elements. */
		function fireClick(el) {
			if (!el) return;
			var base = { bubbles: true, cancelable: true, view: window, clientX: 0, clientY: 0 };
			try {
				el.dispatchEvent(new PointerEvent("pointerdown", Object.assign({ pointerId: 1, pointerType: "mouse", isPrimary: true, button: 0, buttons: 1 }, base)));
				el.dispatchEvent(new PointerEvent("pointerup", Object.assign({ pointerId: 1, pointerType: "mouse", isPrimary: true, button: 0, buttons: 0 }, base)));
			} catch (e) { /* older engines: mouse path below still fires */ }
			try {
				el.dispatchEvent(new MouseEvent("mousedown", base));
				el.dispatchEvent(new MouseEvent("mouseup", base));
			} catch (e) { /* ignore */ }
			el.dispatchEvent(new MouseEvent("click", base));
		}

		function selfDriveWindow() {
			var sess = null;
			var winTitle = null;
			var mode = null;
			try {
				var fe = window.frameElement;
				if (fe && fe.dataset) {
					sess = fe.dataset.session || null;
					winTitle = fe.dataset.wintitle || null;
					mode = fe.dataset.mode || null;
				}
			} catch (e) { /* ignore */ }
			if (mode === "settings") {
				selfDriveSettings(winTitle || "设置");
				return;
			}

			/* Focus the parent window whenever the user interacts inside. */
			var seq = null;
			try {
				var w = window.frameElement ? window.frameElement.closest(".xp-window") : null;
				seq = w ? w.id.replace("dsh-xp-win-", "") : null;
			} catch (e) { /* ignore */ }
			if (seq) {
				document.addEventListener("pointerdown", function () {
					try {
						if (parent.__dshXpFocusWindow) parent.__dshXpFocusWindow(seq);
					} catch (e) { /* ignore */ }
				}, true);
			}

			var toggled = false;
			waitFor(function () {
				if (!document.body) return null;
				var appReady = !!document.querySelector("[class$='_frame']");
				if (!appReady) return null;
				if (sess && sess !== "new") {
					var row = findRowBySession(document, sess);
					if (row) return { row: row };
				} else if (sess === "new") {
					var nb = document.querySelector("[class*='_newSession']");
					if (nb) return { btn: nb };
				} else {
					return { none: true };
				}
				/* The fresh app boots with a collapsed icon rail — session rows
				   do not exist until the sidebar is expanded. The sidebar is
				   display:none in window mode, but programmatic events still
				   work on hidden elements. */
				if (!toggled) {
					var side = document.querySelector("[class$='_sidebarCol']");
					var tg = side
						? side.querySelector("[class*='_toggle']")
						: document.querySelector("[class*='_toggle']");
					if (tg) {
						fireClick(tg);
						toggled = true;
					}
				}
				return null;
			}, 25000).then(function (done) {
				var fallback = winTitle || (sess === "new" ? "新会话" : "会话");
				if (!done) { setParentTitle(fallback); return; }
				/* Let React settle after boot before dispatching the sequence. */
				setTimeout(function () {
					if (done.row) fireClick(done.row);
					else if (done.btn) fireClick(done.btn);
					/* For a brand-new session the button may need a retry. */
					if (done.btn) {
						var tries = 0;
						(function retry() {
							var h = document.querySelector("[class$='_header']:has([class$='_titleRow'])");
							if (h) return;
							if (++tries <= 3 && !document.querySelector("[class$='_crumbCurrent']")) {
								setTimeout(function () {
									fireClick(done.btn);
									retry();
								}, 5000);
							}
						})();
					}
					/* Push the real title to the parent window once the
					   conversation mounts (the crumb can lag), and report the
					   actual session id (from the app's selected tree row) so
					   the parent can persist the window. */
					var pt = 0;
					(function pollTitle() {
						var crumb = document.querySelector("[class$='_crumbCurrent']");
						var t = crumb ? crumb.textContent.trim() : null;
						if (t) {
							setParentTitle(t);
							reportSession();
							return;
						}
						if (++pt < 60) setTimeout(pollTitle, 500);
						else {
							setParentTitle(fallback);
							reportSession();
						}
					})();
					function reportSession() {
						if (!seq) return;
						var sel = document.querySelector("[class*='_sessionRow'][class*='_selected']");
						var sid = sel ? fiberSessionId(sel) : null;
						if (!sid) {
							/* Fall back to the announced target. */
							sid = sess && sess !== "new" ? sess : null;
						}
						if (sid) {
							try {
								if (parent.__dshXpSetWinSession) parent.__dshXpSetWinSession(seq, sid);
							} catch (e) { /* ignore */ }
						}
					}
				}, 400);
			});
		}

		/* Settings window: drive the app's own settings UI (the same page the
		   sidebar's 设置 button opens — a modal settings panel) by clicking the
		   sidebar.settings trigger inside the window iframe. The sidebar is
		   display:none but its DOM and React handlers stay live. */
		function selfDriveSettings(fallback) {
			var seq = null;
			try {
				var w = window.frameElement ? window.frameElement.closest(".xp-window") : null;
				seq = w ? w.id.replace("dsh-xp-win-", "") : null;
			} catch (e) { /* ignore */ }
			if (seq) {
				document.addEventListener("pointerdown", function () {
					try {
						if (parent.__dshXpFocusWindow) parent.__dshXpFocusWindow(seq);
					} catch (e) { /* ignore */ }
				}, true);
			}
			var expanded = false;
			function findTrigger() {
				var areas = document.querySelectorAll("[class$='_settingsArea'], [class*='_settingsArea']");
				for (var i = 0; i < areas.length; i++) {
					var btn = areas[i].querySelector("button");
					if (btn) return btn;
				}
				return document.querySelector("[class$='_trigger']");
			}
			waitFor(function () {
				if (!document.body) return null;
				if (!document.querySelector("[class$='_frame']")) return null;
				if (findTrigger()) return true;
				/* Collapsed/rail sidebar may defer the slot: expand it once. */
				if (!expanded) {
					expanded = true;
					var side = document.querySelector("[class$='_sidebarCol']");
					var tg = side ? side.querySelector("[class*='_toggle']") : null;
					if (tg) fireClick(tg);
				}
				return null;
			}, 25000).then(function () {
				setParentTitle(fallback || "设置");
				var tries = 0;
				(function attempt() {
					var btn = findTrigger();
					if (!btn) return;
					fireClick(btn);
					try { btn.click(); } catch (e) { }
					/* The settings panel mounts an overlay; re-click until it shows. */
					waitFor(function () {
						return document.querySelector("[class$='_overlay']");
					}, 2500).then(function (open) {
						if (open) return;
						if (++tries <= 4) setTimeout(attempt, 1500);
					});
				})();
			});
		}

		function setParentTitle(t) {
			try {
				var fe = window.frameElement;
				if (!fe) return;
				var w = fe.closest(".xp-window");
				if (!w) return;
				var seq = w.id.replace("dsh-xp-win-", "");
				var text = (t || "会话").trim() || "会话";
				if (parent.__dshXpSetWinTitle) parent.__dshXpSetWinTitle(seq, text);
			} catch (e) { /* ignore */ }
		}

		// ─────────────────────────────────────────────────────────────────
		// Workspace persistence: windows + geometry + state in localStorage,
		// restored on refresh so the previous work scene comes back.
		// ─────────────────────────────────────────────────────────────────
		var STORAGE_KEY = "dsh-xp-windows-v1";

		function schedulePersist() {
			if (S.persistTimer) clearTimeout(S.persistTimer);
			S.persistTimer = setTimeout(persistWindows, 250);
		}

		function persistWindows() {
			try {
				var list = [];
				for (var i = 0; i < S.windows.length; i++) {
					var w = S.windows[i];
					/* Only persist windows with a real session id (still-booting
					   ones are transient). */
					if (!w || typeof w.sessionId !== "string") continue;
					list.push({
						sessionId: w.sessionId,
						title: w.titleEl ? w.titleEl.textContent : "",
						x: Math.round(w.x), y: Math.round(w.y),
						w: Math.round(w.w), h: Math.round(w.h),
						state: w.state,
						z: parseInt(w.el.style.zIndex, 10) || 100
					});
				}
				localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, windows: list }));
			} catch (e) { /* storage unavailable — persistence is best-effort */ }
		}

		function restoreWindows() {
			var raw = null;
			try { raw = localStorage.getItem(STORAGE_KEY); } catch (e) { }
			if (!raw) return 0;
			var data = null;
			try { data = JSON.parse(raw); } catch (e) { }
			if (!data || !Array.isArray(data.windows)) return 0;
			var created = 0;
			for (var i = 0; i < data.windows.length; i++) {
				var saved = data.windows[i];
				if (!saved || typeof saved.sessionId !== "string") continue;
				if (S.bySession.has(saved.sessionId)) continue;
				var win = openWindow(saved.sessionId, saved.title || "会话");
				if (!win) continue;
				if (typeof saved.x === "number") {
					win.x = saved.x; win.y = saved.y; win.w = saved.w; win.h = saved.h;
					win.el.style.left = saved.x + "px";
					win.el.style.top = saved.y + "px";
					win.el.style.width = saved.w + "px";
					win.el.style.height = saved.h + "px";
				}
				if (saved.state === "maximized") {
					maximizeWindow(win);
				} else if (saved.state === "minimized") {
					minimizeWindow(win);
				}
				if (typeof saved.z === "number") {
					win.el.style.zIndex = String(saved.z);
					if (saved.z > S.z) S.z = saved.z;
				}
				created++;
			}
			return created;
		}

		// ─────────────────────────────────────────────────────────────────
		// Watchdog: self-heal windows whose app content went blank.
		// ─────────────────────────────────────────────────────────────────
		function reviveWindow(win) {
			try {
				setWinTitle(win, "重新加载\u2026");
				/* Reloading re-runs the iframe's own plugin instance, which
				   self-drives to the target session (dataset.session persists). */
				win.iframe.src = "/";
			} catch (e) { /* ignore */ }
		}

		function startWatchdog() {
			if (S.watchdog) return;
			S.watchdog = window.setInterval(function () {
				for (var i = 0; i < S.windows.length; i++) {
					var w = S.windows[i];
					try {
						var d = w.iframe.contentDocument;
						var blank = false;
						if (!d || !d.body) blank = true;
						else {
							var len = (d.body.innerText || "").trim().length;
							var hasFrame = !!d.querySelector("[class$='_frame']");
							/* Blank = no layout and (almost) no text. A booting app
							   still paints its shell, so two consecutive hits are
							   required before we reload. */
							if (len < 40 && !hasFrame) blank = true;
							/* Folded = the frame is wide but the center column
							   collapsed to ~0 (grid auto-placement put it in the
							   0px track) — visually the content stacks on the
							   left edge. */
							if (!blank && hasFrame) {
								var fr = d.querySelector("[class$='_frame']").getBoundingClientRect();
								var ctr = d.querySelector("[class$='_centerCol']");
								var ctrW = ctr ? ctr.getBoundingClientRect().width : 0;
								if (fr.width > 200 && ctrW < 80) blank = true;
							}
						}
						w.blankHits = blank ? (w.blankHits || 0) + 1 : 0;
						if (w.blankHits >= 2) {
							w.blankHits = 0;
							reviveWindow(w);
						}
					} catch (e) { /* ignore */ }
				}
			}, 2000);
		}

		// ─────────────────────────────────────────────────────────────────
		// Desktop wiring (top window only)
		// ─────────────────────────────────────────────────────────────────
		function initDesktop(ctx) {
			S.ctx = ctx;
			/* HMR re-applies the bundle: always re-register the click handler so
			   code changes take effect without a page reload. */
			if (S.clickHandler) {
				document.removeEventListener("click", S.clickHandler, true);
				S.clickHandler = null;
			}
			S.clickHandler = function (e) {
				var t = e.target;
				if (!t || !t.closest) return;
				if (t.closest("[class*='_rowActions']")) return;
				var row = t.closest("[class*='_sessionRow']");
				if (row) {
					var id = fiberSessionId(row);
					var titleEl = row.querySelector("[class$='_title']");
					var title = titleEl ? titleEl.textContent.trim() : "会话";
					if (id) openWindow(id, title || "会话");
					return;
				}
				if (t.closest("[class*='_newSession']")) {
					/* Let the parent app create the session (keeps the sidebar
					   tree in sync), then open a window for it. Fall back to an
					   iframe-created session if the selection never settles. */
					var before = currentSelectedId();
					waitFor(function () {
						var now = currentSelectedId();
						return now && now !== before ? now : null;
					}, 20000).then(function (id) {
						openWindow(id || null, "新会话");
					});
				}
			};
			document.addEventListener("click", S.clickHandler, true);

			/* Desktop icons for sessions/workspaces management. */
			ensureDesktopIcons();

			if (S.init) return;
			S.init = true;
			startWatchdog();

			/* Best-effort save on unload so a refresh keeps the scene. */
			window.addEventListener("beforeunload", persistWindows);

			/* Helpers the window iframes call back into (same-origin). */
			window.__dshXpSetWinTitle = function (seq, title) {
				var el = document.getElementById("dsh-xp-win-" + seq);
				if (!el) return;
				var text = (title || "会话").trim() || "会话";
				var t = el.querySelector(".xp-win-title");
				if (t) t.textContent = text;
				var btn = document.querySelector('.xp-task-win[data-win="' + seq + '"]');
				if (btn) { btn.textContent = text; btn.title = text; }
			};
			window.__dshXpSetWinSession = function (seq, sessionId) {
				var el = document.getElementById("dsh-xp-win-" + seq);
				if (!el) return;
				for (var i = 0; i < S.windows.length; i++) {
					var w = S.windows[i];
					if (w.el !== el) continue;
					if (w.sessionId === sessionId) return;
					if (w.sessionId && S.bySession.get(w.sessionId) === w) S.bySession.delete(w.sessionId);
					w.sessionId = sessionId;
					if (sessionId && !S.bySession.has(sessionId)) S.bySession.set(sessionId, w);
					schedulePersist();
					return;
				}
			};
			window.__dshXpFocusWindow = function (seq) {
				var el = document.getElementById("dsh-xp-win-" + seq);
				if (!el) return;
				for (var i = 0; i < S.windows.length; i++) {
					if (S.windows[i].el === el) { focusWindow(S.windows[i]); return; }
				}
			};

			/* Rebuild the previous work scene once per page load. */
			if (!S.restored) {
				S.restored = true;
				setTimeout(function () {
					var n = restoreWindows();
					if (n > 0) persistWindows();
				}, 400);
			}
		}

		// ─────────────────────────────────────────────────────────────────
		// Plugin entry
		// ─────────────────────────────────────────────────────────────────
		function apply(ctx) {
			if (typeof document === "undefined") return;
			// Inject the stylesheet once; refresh content on HMR re-apply.
			var tagId = "dsh-client-ui-theme-xp/xp-theme.css";
			var tag = document.querySelector("style[data-plugin-css=\"" + tagId + "\"]");
			if (tag === null) {
				tag = document.createElement("style");
				tag.dataset.plugin = "dsh-client-ui-theme-xp";
				tag.dataset.pluginCss = tagId;
				document.head.appendChild(tag);
			}
			tag.textContent = CSS;

			var top = isTopWindow();
			if (top) {
				document.documentElement.setAttribute("data-xp-desktop", "1");
				initDesktop(ctx);
			} else {
				/* Window iframe: apply the conversation-only chrome from the very
				   first paint (the sidebar is display:none before it mounts, so
				   there is no collapse animation), then self-drive to the target
				   session announced via frameElement.dataset.session. */
				document.documentElement.setAttribute("data-xp-win", "1");
				selfDriveWindow();
			}

			// The Luna look is light-only: strip the dark-theme attribute if the
			// theme presenter ever re-applies it, and pin the color scheme.
			var pin = function () {
				if (document.documentElement.style.colorScheme !== "light") {
					document.documentElement.style.colorScheme = "light";
				}
				if (document.body && document.body.hasAttribute("data-ds-dark-theme")) {
					document.body.removeAttribute("data-ds-dark-theme");
				}
			};
			pin();
			var mo = new MutationObserver(function () {
				pin();
				if (top) ensureTaskbar(ctx);
			});
			mo.observe(document.body, {
				attributes: true,
				attributeFilter: ["data-ds-dark-theme"],
				childList: true,
				subtree: true
			});
			if (top) ensureTaskbar(ctx);
		}

		exports.apply = apply;
		exports.inject = [];
		return module.exports;
	}
});
