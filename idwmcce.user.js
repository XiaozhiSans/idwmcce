// ==UserScript==
// @name			I Dont Want Minecraft China Edition
// @name:zh			我不要网易我的世界
// @namespace		idwmcce
// @version			1.0
// @description		kill minecraft.net netease mc popup
// @description:zh	自动隐藏mc官网网易我的世界弹窗
// @license			MIT
// @downloadURL		https://raw.githubusercontent.com/XiaozhiSans/idwmcce/main/idwmcce.user.js
// @updateURL		https://raw.githubusercontent.com/XiaozhiSans/idwmcce/main/idwmcce.user.js
// @author			XiaozhiSans
// @homepage		https://xsawa.dev.tc/XiaozhiSans/
// @supportURL		https://github.com/XiaozhiSans/idwmcce/issues
// @match			*://*.minecraft.net/*
// @icon			https://raw.githubusercontent.com/XiaozhiSans/idwmcce/main/icon.png
// @icon64			https://raw.githubusercontent.com/XiaozhiSans/idwmcce/main/icon.webp
// @run-at			document-end
// @grant			none
// ==/UserScript==

try {
	/**
	 * find and hide the popup
	 * 找到并隐藏弹窗
	 */
	document.querySelector("div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12").style.display = "none";

	/**
	 * fix page can't scroll after hide the popup
	 * 修复强制关闭弹窗后不让页面滚动
	 */
	document.body.classList.value = "page basicpage";

	console.log("[idwmcce] :) all done! have a nice day!");
} catch {e => console.error(`[idwmcce] :( so sad, process failed\ncause:\n${e}`)}
