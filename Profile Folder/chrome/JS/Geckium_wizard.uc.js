// ==UserScript==
// @name        Geckium - Wizard
// @author		AngelBruni
// @loadorder   3
// ==/UserScript==

function loadWizard() {
	if (!gkPrefUtils.tryGet("Geckium.firstRun.complete").bool)
		openGSplash();
}

window.addEventListener("load", loadWizard);