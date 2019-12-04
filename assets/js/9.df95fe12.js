(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"直接用script引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接用script引入"}},[e._v("#")]),e._v(" 直接用"),t("code",[e._v("script")]),e._v("引入")]),e._v(" "),t("p",[e._v("如果您使用的是简单的HTML环境，可以直接下载文件并用 "),t("code",[e._v("<script>")]),e._v(" 引入。"),t("code",[e._v("cytoscape")]),e._v(" 会被注册为一个全局变量。")]),e._v(" "),t("h2",{attrs:{id:"使用原生-es-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用原生-es-modules"}},[e._v("#")]),e._v(" 使用原生 ES Modules")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script type"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"module"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" cytoscape "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./cytoscape.esm.min.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h2",{attrs:{id:"使用npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用npm"}},[e._v("#")]),e._v(" 使用npm")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("S")]),e._v(" cytoscape\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" cytoscape "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cytoscape'")]),e._v("\n")])])]),t("h2",{attrs:{id:"不同的构建版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同的构建版本"}},[e._v("#")]),e._v(" 不同的构建版本")]),e._v(" "),t("p",[e._v("在 "),t("a",{attrs:{href:"https://github.com/cytoscape/cytoscape.js/tree/master/dist",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("NPM")]),e._v(" 包的 "),t("code",[e._v("dist/")]),e._v(" 目录"),t("OutboundLink")],1),e._v("下你将会找到很多不同的 Vue.js 构建版本。这里列出了它们之间的差别：\n"),t("code",[e._v("cytoscape.min.js")]),e._v(" : 一个包含包中所有依赖项的缩小UMD构建。这个文件对构建小型网页很有用，例如学术论文的补充材料。\ncytoscape.umd.js : A non-minified UMD build with all dependencies included in the bundle. This file is useful for debugging on small pages, supplementary material for an academic paper for example.\ncytoscape.esm.min.js : A minified ESM (import / export) build with all dependencies included in the bundle. This file serves the same purpose as the above, but it can be imported as an ES6 module without the need for a bundler.\ncytoscape.cjs.js : A non-minified CJS (Node.js) build without any bundled dependencies. This is intended to be consumed automatically by Node.js or a bundler like Webpack via require('cytoscape').\ncytoscape.esm.js : A non-minified ESM (import / export) build without any bundled dependencies. This is intended to be consumed automatically by Node.js or a bundler like Webpack via import cytoscape from 'cytoscape'.")])])}),[],!1,null,null,null);s.default=r.exports}}]);