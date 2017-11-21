// ==UserScript==
// @name        GD+
// @description Adiciona facilidades ao GDrive.
// @include     https://docs.google.com/*
// @include     https://drive.google.com/*
// @copyright   2017, XOR
// @author      XOR
// @version     2.9.7
// @license     MIT License (Expat)
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @grant       GM_getResourceURL
// @grant       GM_registerMenuCommand
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_setClipboard
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @homepageURL https://gdplus.github.io/
// @updateURL   https://gdplus.github.io/releases/gdplus.meta.js
// @downloadURL https://gdplus.github.io/releases/gdplus.user.js
// @namespace   4971e63b909612f5598edd6d90012dae
// @run-at      document-start
// @icon        data:image/png;base64,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
// ==/UserScript==
