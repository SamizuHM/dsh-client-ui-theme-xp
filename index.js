/**
 * Host-side half of the dual-face XP theme package.
 *
 * This module only needs to exist so the cordis loader can activate the
 * plugin row (`ui-theme-xp`) in the config tree. The client-modules scanner
 * then sees the `dsh.client` declaration and serves `./client.js` to the
 * browser — that bundle carries the actual theme (CSS + taskbar).
 */
export const name = "dsh-client-ui-theme-xp";

export function apply() {
	// No host behaviour: everything happens in the browser bundle.
}
