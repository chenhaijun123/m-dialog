webpackJsonp([0],{"3t51":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"layout-footer"},[e("div",{staticStyle:{"max-width":"800px",margin:"0 auto"}},[e("ul",{staticClass:"copyright"},[e("li",[t._v("© 2018 Lanyue.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.lanyueos.com"}},[t._v("Home")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.lanyueos.com"}},[t._v("Blog")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mengdu"}},[t._v("Github")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mengdu"}},[t._v("About")])])])])])}]};var l=e("VU/8")(null,n,!1,function(t){e("kr4L")},null,null).exports,o={props:{repo:String}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:this.repo}},[s("img",{staticClass:"fork-img",attrs:{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png",alt:"Fork me on GitHub"}})])},staticRenderFns:[]};var r=e("VU/8")(o,i,!1,function(t){e("g8Ef")},null,null).exports,c=e("G0wi"),v=e.n(c),d=e("7YgM"),p=e.n(d),h={name:"App",components:{Readme:v.a,LayoutFooter:l,ForkLink:r},data:function(){return{pkg:p.a,show:!1,appendToBody:!1,noHead:!1,closeOnClickModal:!0,closeOnPressEscape:!0}},methods:{close:function(t){console.log("before-close"),t()},onOpen:function(){console.log("open")},onClose:function(){console.log("close")}},computed:{repo:function(){return p.a.repository.url.replace(/git\+/,"")}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("fork-link",{attrs:{repo:t.repo}}),t._v(" "),a("header",[a("img",{attrs:{src:e("aIDJ")}}),t._v(" "),a("h1",{staticStyle:{"font-weight":"100"}},[t._v("m-dialog 模态框组件")]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"50px"}},[a("a",{attrs:{href:t.repo,target:"_blank"}},[a("m-button",{attrs:{type:"info",size:"large",round:""}},[t._v("Github")])],1),t._v("\n       \n      "),a("a",{attrs:{href:"#events"}},[a("m-button",{attrs:{type:"success",size:"large",plain:"",round:""}},[t._v("Example")])],1)])]),t._v(" "),a("main",{staticClass:"doc-block"},[a("readme"),t._v(" "),a("m-dialog",{attrs:{show:t.show,title:"提示","append-to-body":t.appendToBody,"close-on-click-modal":t.closeOnClickModal,"close-on-press-escape":t.closeOnPressEscape,"no-head":t.noHead,"before-close":t.close,width:"300px"},on:{"update:show":function(s){t.show=s},open:t.onOpen,close:t.onClose}},[a("span",[t._v("这里是正文内容...")]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticStyle:{float:"right"}},[a("m-button",{attrs:{plain:""},on:{click:function(s){t.show=!1}}},[t._v("取消")]),t._v(" "),a("m-button",{attrs:{type:"info"}},[t._v("确定")])],1)])]),t._v(" "),a("m-button",{attrs:{type:"info"},on:{click:function(s){t.show=!t.show}}},[t._v("modal")]),t._v(" "),a("p",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.appendToBody,expression:"appendToBody"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.appendToBody)?t._i(t.appendToBody,null)>-1:t.appendToBody},on:{change:function(s){var e=t.appendToBody,a=s.target,n=!!a.checked;if(Array.isArray(e)){var l=t._i(e,null);a.checked?l<0&&(t.appendToBody=e.concat([null])):l>-1&&(t.appendToBody=e.slice(0,l).concat(e.slice(l+1)))}else t.appendToBody=n}}}),t._v("append-to-body")]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.noHead,expression:"noHead"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.noHead)?t._i(t.noHead,null)>-1:t.noHead},on:{change:function(s){var e=t.noHead,a=s.target,n=!!a.checked;if(Array.isArray(e)){var l=t._i(e,null);a.checked?l<0&&(t.noHead=e.concat([null])):l>-1&&(t.noHead=e.slice(0,l).concat(e.slice(l+1)))}else t.noHead=n}}}),t._v("no-head ")]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.closeOnClickModal,expression:"closeOnClickModal"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.closeOnClickModal)?t._i(t.closeOnClickModal,null)>-1:t.closeOnClickModal},on:{change:function(s){var e=t.closeOnClickModal,a=s.target,n=!!a.checked;if(Array.isArray(e)){var l=t._i(e,null);a.checked?l<0&&(t.closeOnClickModal=e.concat([null])):l>-1&&(t.closeOnClickModal=e.slice(0,l).concat(e.slice(l+1)))}else t.closeOnClickModal=n}}}),t._v("close-on-click-modal ")]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.closeOnPressEscape,expression:"closeOnPressEscape"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.closeOnPressEscape)?t._i(t.closeOnPressEscape,null)>-1:t.closeOnPressEscape},on:{change:function(s){var e=t.closeOnPressEscape,a=s.target,n=!!a.checked;if(Array.isArray(e)){var l=t._i(e,null);a.checked?l<0&&(t.closeOnPressEscape=e.concat([null])):l>-1&&(t.closeOnPressEscape=e.slice(0,l).concat(e.slice(l+1)))}else t.closeOnPressEscape=n}}}),t._v("close-on-press-escape ")])])],1),t._v(" "),a("layout-footer")],1)},staticRenderFns:[]};var _=e("VU/8")(h,u,!1,function(t){e("uGFk")},null,null).exports,m={name:"DemoBlock",props:{jsfiddle:Object},created:function(){}},g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"demo-block"},[this._t("source"),this._v(" "),s("div",{ref:"meta",staticClass:"meta"},[this.$slots.default?s("div",{staticClass:"description"},[this._t("default")],2):this._e(),this._v(" "),this._t("highlight")],2)],2)},staticRenderFns:[]};var f=e("VU/8")(m,g,!1,function(t){e("E4G2")},null,null).exports,b={name:"MDialog",props:{width:String,top:String,show:Boolean,title:String,noHead:Boolean,appendToBody:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},beforeClose:Function},computed:{style:function(){var t={};return this.width&&(t.width=this.width),this.top&&(t.top=this.top),t}},watch:{show:function(t){t&&this.mountModal(),this.setBodyOverflow()}},methods:{handleClose:function(t){if("modal"===t&&!this.closeOnClickModal)return!1;"function"==typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(t){!1!==t&&(this.$emit("update:show",!1),this.$emit("close"))},mountModal:function(){this.show&&this.$emit("open"),this.appendToBody&&this.show&&document.body.appendChild(this.$el)},setBodyOverflow:function(){var t=this;this.show?(this.oldRight=document.body.style.marginRight||"",document.body.style.overflow="hidden",document.body.style.marginRight="17px"):setTimeout(function(){document.body.style.overflow="",document.body.style.marginRight=t.oldRight},300)},handleEscKey:function(t){27===t.keyCode&&this.closeOnPressEscape&&this.hide(!0)}},mounted:function(){this.mountModal(),this.setBodyOverflow(),window.addEventListener("keydown",this.handleEscKey)},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),window.removeEventListener("keydown",this.handleEscKey)}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"dialog-fade"}},[t.show?e("div",{staticClass:"m-dialog__wrapper",on:{click:function(s){s.stopPropagation(),t.handleClose("modal")}}},[e("div",{staticClass:"m-dialog",style:t.style,on:{click:function(t){t.stopPropagation()}}},[t.noHead?t._e():e("div",{staticClass:"m-dialog__header"},[e("span",{staticClass:"m-dialog__title"},[t._t("title",[t._v(t._s(t.title))])],2),t._v(" "),t.showClose?e("button",{staticClass:"m-dialog__close",on:{click:function(s){s.stopPropagation(),t.handleClose("button")}}},[e("span",[t._v("×")])]):t._e()]),t._v(" "),e("div",{staticClass:"m-dialog__body"},[t._t("default")],2),t._v(" "),t.$slots.footer?e("div",{staticClass:"m-dialog__footer"},[t._t("footer")],2):t._e()])]):t._e()])},staticRenderFns:[]},k=e("VU/8")(b,y,!1,null,null,null).exports;e("9PIJ");k.install=function(t){t.component(k.name,k)};var w=k,C=e("HPNY"),j=e.n(C);e("TkPJ");a.a.use(w),a.a.use(j.a),a.a.component("DemoBlock",f),a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:_},template:"<App/>"})},"7YgM":function(t,s){t.exports={name:"vue-m-dialog",version:"1.0.0",description:"A dialog component for vue.",author:"lanyueos@qq.com",license:"MIT",main:"dist/index.js",repository:{type:"git",url:"git+https://github.com/mengdu/m-dialog"},bugs:{url:"https://github.com/mengdu/m-dialog/issues"},homepage:"https://mengdu.github.io/m-dialog/example/",scripts:{dev:"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",start:"npm run dev",unit:"jest --config test/unit/jest.conf.js --coverage",e2e:"node test/e2e/runner.js",test:"npm run unit && npm run e2e",lint:"eslint --ext .js,.vue src test/unit test/e2e/specs",docs:"node build/docs.js",build:"node build/build.js"},dependencies:{},devDependencies:{autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^8.2.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-jest":"^21.0.2","babel-loader":"^7.1.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-es2015-modules-commonjs":"^6.26.0","babel-plugin-transform-runtime":"^6.22.0","babel-plugin-transform-vue-jsx":"^3.5.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chalk:"^2.0.1",cheerio:"^1.0.0-rc.2",chromedriver:"^2.27.2","copy-webpack-plugin":"^4.0.1","cross-spawn":"^5.0.1","css-loader":"^0.28.0",eslint:"^4.15.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.7.1","eslint-plugin-import":"^2.7.0","eslint-plugin-node":"^5.2.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^4.0.0","extract-text-webpack-plugin":"^3.0.0","file-loader":"^1.1.4","friendly-errors-webpack-plugin":"^1.6.1","html-webpack-plugin":"^2.30.1",jest:"^22.0.4","jest-serializer-vue":"^0.3.0",less:"^3.0.1","less-loader":"^4.1.0","markdown-it-anchor":"^4.0.0","markdown-it-container":"^2.0.0",nightwatch:"^0.9.12","node-notifier":"^5.1.2","optimize-css-assets-webpack-plugin":"^3.2.0",ora:"^1.2.0",portfinder:"^1.0.13","postcss-import":"^11.0.0","postcss-loader":"^2.0.8","postcss-url":"^7.2.1",rimraf:"^2.6.0","selenium-server":"^3.0.1",semver:"^5.3.0",shelljs:"^0.7.6",transliteration:"^1.6.2","uglifyjs-webpack-plugin":"^1.1.1","url-loader":"^0.5.8",vue:"^2.5.2","vue-jest":"^1.0.2","vue-loader":"^13.3.0","vue-markdown-loader":"^2.4.1","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.2",webpack:"^3.6.0","webpack-bundle-analyzer":"^2.9.0","webpack-dev-server":"^2.9.1","webpack-merge":"^4.1.0"},engines:{node:">= 6.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"9PIJ":function(t,s){},E4G2:function(t,s){},G0wi:function(t,s,e){t.exports=e("yKNT")},TkPJ:function(t,s){},aIDJ:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},g8Ef:function(t,s){},kr4L:function(t,s){},uGFk:function(t,s){},yKNT:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h2",{attrs:{id:"dialog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dialog","aria-hidden":"true"}},[t._v("¶")]),t._v(" Dialog")]),t._v(" "),e("p",[t._v("Dialog 模态框组件")]),t._v(" "),e("p",[t._v("例子："),e("a",{attrs:{href:"https://mengdu.github.io/m-dialog/example/"}},[t._v("Example")])]),t._v(" "),e("p",[t._v("打包工具： "),e("a",{attrs:{href:"https://github.com/mengdu/vue-component-devtool"}},[t._v("vue-component-devtool")])]),t._v(" "),e("h2",{attrs:{id:"use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[t._v("¶")]),t._v(" use")]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"hljs language-ls"}},[e("span",{attrs:{class:"hljs-built_in"}},[t._v("npm")]),t._v(" install vue-m-dialog\n")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"hljs language-js"}},[e("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" MDialog "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"hljs-string"}},[t._v("'vue-m-dialog'")]),t._v("\n"),e("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),e("span",{attrs:{class:"hljs-string"}},[t._v("'vue-m-dialog/dist/css/default.css'")]),t._v("\n\nVue.use(MDialog)\n")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-dialog")]),t._v(" \n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"提示"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":append-to-body")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"appendToBody"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":close-on-click-modal")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"closeOnClickModal"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":close-on-press-escape")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"closeOnPressEscape"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":no-head")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"noHead"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":before-close")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"close"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("@open")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"onOpen"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("@close")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"onClose"')]),t._v("\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("width")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"300px"')]),t._v("\n  >")]),t._v("\n  "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("这里是正文内容..."),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n  "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"footer"')]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"float: right"')]),t._v(">")]),t._v("\n      "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("plain")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"show = false"')]),t._v(">")]),t._v("取消"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v("\n      "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"info"')]),t._v(">")]),t._v("确定"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    \n  "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-dialog")]),t._v(">")]),t._v("\n")])]),t._v(" "),e("h3",{attrs:{id:"mdialog-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mdialog-attributes","aria-hidden":"true"}},[t._v("¶")]),t._v(" MDialog Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("是否显示 Dialog，支持 .sync 修饰符")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("Dialog 的标题，也可通过具名 slot （见下表）传入")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("Dialog 的宽度")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("50%")])]),t._v(" "),e("tr",[e("td",[t._v("top")]),t._v(" "),e("td",[t._v("Dialog CSS 中的 margin-top 值")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("15vh")])]),t._v(" "),e("tr",[e("td",[t._v("append-to-body")]),t._v(" "),e("td",[t._v("Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("close-on-click-modal")]),t._v(" "),e("td",[t._v("是否可以通过点击 modal 关闭 Dialog")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("close-on-press-escape")]),t._v(" "),e("td",[t._v("是否可以通过按下 ESC 关闭 Dialog")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("show-close")]),t._v(" "),e("td",[t._v("是否显示关闭按钮")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("before-close")]),t._v(" "),e("td",[t._v("关闭前的回调，会暂停 Dialog 的关闭")]),t._v(" "),e("td",[t._v("function(done)，done 用于关闭 Dialog")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("no-head")]),t._v(" "),e("td",[t._v("去掉标题部分")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h3",{attrs:{id:"slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slot","aria-hidden":"true"}},[t._v("¶")]),t._v(" Slot")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Dialog 的内容")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("Dialog 标题区的内容")])]),t._v(" "),e("tr",[e("td",[t._v("footer")]),t._v(" "),e("td",[t._v("Dialog 按钮操作区的内容")])])])]),t._v(" "),e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("¶")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("回调参数")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",[t._v("Dialog 关闭的回调")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("open")]),t._v(" "),e("td",[t._v("Dialog 打开的回调")]),t._v(" "),e("td",[t._v("—")])])])])])}]},n=e("VU/8")(null,a,!1,null,null,null);s.default=n.exports}},["3t51"]);
//# sourceMappingURL=app.4d91211c5e339d6168f0.js.map