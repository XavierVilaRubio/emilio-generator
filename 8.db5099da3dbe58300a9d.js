(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{O60g:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){return function(){}}(),a=e("pMnS"),o=e("gIcY"),i=e("Ip0R"),s=e("VGw5"),r=e("GhTB"),c=function(){function l(l,n){this.appData=l,this.jszip=n,this.objectKeys=Object.keys,this.exportLang="1",this.exportFileNameVersion=0,this.exportFileName="",this.importFileName="",this.importErrorMsg="",this.importSuccessMsg="",this.importSuccessData=[]}return l.prototype.ngOnInit=function(){this.selectLangs=this.appData.languages},l.prototype.exportAction=function(){this.exportFileNameVersion++,this.jszip.saveAsEmilioGenerator(this.appData.languages[this.exportLang],this.exportFileName+"__v"+this.exportFileNameVersion+"__["+this.appData.languages[this.exportLang].key+"].emilio-generator","text/plain;charset=utf-8")},l.prototype.onSelectImportFile=function(l){if(this.importSuccessData=[],l.target.files&&l.target.files[0]){var n=void 0;n=new FileReader;var e=l.target.files[0].name.match(".emilio-generator"),u=l.target.files[0].size-1;this.importFileName=l.target.files[0].name;var t=l.target.files[0].slice(0,u+1);n.readAsText(t);var a=this;n.onloadend=function(l){if(e&&l.target.readyState===FileReader.DONE){var n=JSON.parse(l.target.result);if(n.hasOwnProperty("key")){var u=a.appData.getLangIdByKey(n.key);a.appData.languages[u]=n,a.importSuccessMsg="File imported successfully.",a.importSuccessData.push("<b>Language</b> ["+n.name+"]"),a.importSuccessData.push("<b>File version</b> [2.x]"),a.importSuccessData.push("<b>Emails ids</b> ["+Object.keys(n.emails.templates)+"]")}else{var t=a.importFileName.match(/\[[A-Z]{2,3}\]/);if(t){var o=t[0].replace("[","").replace("]","").toLowerCase(),i=a.appData.getLangIdByKey(o);a.legacyImport(i,o,n)}}a.importErrorMsg=""}else a.importErrorMsg="Only .emilio-generator files!"}}},l.prototype.legacyImport=function(l,n,e){this.importSuccessData.push("<b>Language</b> ["+n+"]"),this.importSuccessData.push("<b>File version</b> [1.x]");var u=[];for(var t in this.appData.languages[l].emails.header.html=e.header,this.appData.languages[l].emails.footer.html=e.footer,this.appData.languages[l].emails.templates)if(e.mails.hasOwnProperty(t)){u.push(t);var a=this.appData.languages[l].emails.templates[t];a.subject=e.mails[t].subject,a.html=e.mails[t].html,e.mails[t].hasOwnProperty("header")?a.hasOwnProperty("header")?a.header.html=e.mails[t].header:a.header={html:e.mails[t].header}:this.appData.delCustomHeader(n,t),e.mails[t].hasOwnProperty("footer")?a.hasOwnProperty("footer")?a.footer.html=e.mails[t].footer:a.footer={html:e.mails[t].footer}:this.appData.delCustomFooter(n,t),this.appData.languages[l].emails.templates[t]=a}this.importSuccessData.push("<b>Emails ids</b> ["+u.toString()+"]"),this.importSuccessMsg="File imported successfully.",this.appData.checkAll()},l}(),p=u["\u0275crt"]({encapsulation:0,styles:[[".icon-export[_ngcontent-%COMP%], .icon-import[_ngcontent-%COMP%]{fill:url(#gradient-pink);width:80px;height:80px}#export-button[_ngcontent-%COMP%]{width:120px}.col-no-auto[_ngcontent-%COMP%]{flex:0 0 calc(100% - 110px);max-width:calc(100% - 110px)}pre[_ngcontent-%COMP%]{white-space:normal}"]],data:{}});function d(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"pre",[["class","mb-0"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function m(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,"option",[],null,null,null,null,null)),u["\u0275did"](1,147456,null,0,o.k,[u.ElementRef,u.Renderer2,[2,o.m]],{value:[0,"value"]},null),u["\u0275did"](2,147456,null,0,o.q,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](3,null,[" "," "," "])),u["\u0275ppd"](4,1)],(function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)}),(function(l,n){var e=n.component,t=u["\u0275unv"](n,3,0,l(n,4,0,u["\u0275nov"](n.parent,0),e.selectLangs[n.context.$implicit].key));l(n,3,0,t,e.selectLangs[n.context.$implicit].name)}))}function g(l){return u["\u0275vid"](0,[u["\u0275pid"](0,i.q,[]),(l()(),u["\u0275eld"](1,0,null,null,62,"div",[["class","view view-instructions"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,61,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,24,"div",[["class","col"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,23,"div",[["class","card"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Import "])),(l()(),u["\u0275eld"](7,0,null,null,20,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,0,null,null,2,"div",[["class","col col-auto"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,1,":svg:svg",[["class","icon icon-import"],["viewBox","0 0 512 512"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,0,":svg:path",[["d","M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,15,"div",[["class","col col-no-auto"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,1,"label",[["for","importInputFile"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Local file image"])),(l()(),u["\u0275eld"](16,0,null,null,3,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](17,0,null,null,2,"div",[["class","custom-file"]],null,null,null,null,null)),(l()(),u["\u0275eld"](18,0,null,null,0,"input",[["aria-describedby","importInputFileSubmit"],["class","custom-file-input"],["id","importInputFile"],["type","file"]],null,[[null,"change"]],(function(l,n,e){var u=!0;return"change"===n&&(u=!1!==l.component.onSelectImportFile(e)&&u),u}),null,null)),(l()(),u["\u0275eld"](19,0,null,null,0,"label",[["class","custom-file-label"],["for","importInputFile"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u["\u0275eld"](20,0,null,null,0,"small",[["class","form-text text-danger"]],[[8,"hidden",0],[8,"innerHTML",1]],null,null,null,null)),(l()(),u["\u0275eld"](21,0,null,null,3,"div",[["class","alert alert-success mb-3"],["role","alert"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u["\u0275eld"](22,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Success!"])),(l()(),u["\u0275ted"](24,null,[" "," "])),(l()(),u["\u0275eld"](25,0,null,null,2,"ul",[["class","pl-3"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,d)),u["\u0275did"](27,278528,null,0,i.k,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](28,0,null,null,35,"div",[["class","col"]],null,null,null,null,null)),(l()(),u["\u0275eld"](29,0,null,null,34,"div",[["class","card"]],null,null,null,null,null)),(l()(),u["\u0275eld"](30,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Export "])),(l()(),u["\u0275eld"](32,0,null,null,31,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](33,0,null,null,30,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](34,0,null,null,2,"div",[["class","col col-auto"]],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,1,":svg:svg",[["class","icon icon-export"],["viewBox","0 0 512 512"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),u["\u0275eld"](36,0,null,null,0,":svg:path",[["d","M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"]],null,null,null,null,null)),(l()(),u["\u0275eld"](37,0,null,null,26,"div",[["class","col col-no-auto"]],null,null,null,null,null)),(l()(),u["\u0275eld"](38,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](39,0,null,null,1,"label",[["for","exportDestLang"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Select export language"])),(l()(),u["\u0275eld"](41,0,null,null,7,"select",[["aria-describedby","exportDestLangHelp"],["class","form-control"],["id","exportDestLang"],["name","exportDestLang"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,e){var t=!0,a=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,42).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,42).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(a.exportLang=e)&&t),t}),null,null)),u["\u0275did"](42,16384,null,0,o.m,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,o.e,(function(l){return[l]}),[o.m]),u["\u0275did"](44,671744,null,0,o.j,[[8,null],[8,null],[8,null],[6,o.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,o.f,null,[o.j]),u["\u0275did"](46,16384,null,0,o.g,[[4,o.f]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,m)),u["\u0275did"](48,278528,null,0,i.k,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](49,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](50,0,null,null,1,"label",[["for","exportFilename"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Filename"])),(l()(),u["\u0275eld"](52,0,null,null,11,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](53,0,null,null,5,"input",[["aria-describedby","export-button"],["aria-label","Export file name"],["class","form-control"],["id","exportFilename"],["name","exportFilename"],["placeholder","Export file name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var t=!0,a=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,54)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,54).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,54)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,54)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(a.exportFileName=e)&&t),t}),null,null)),u["\u0275did"](54,16384,null,0,o.c,[u.Renderer2,u.ElementRef,[2,o.a]],null,null),u["\u0275prd"](1024,null,o.e,(function(l){return[l]}),[o.c]),u["\u0275did"](56,671744,null,0,o.j,[[8,null],[8,null],[8,null],[6,o.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,o.f,null,[o.j]),u["\u0275did"](58,16384,null,0,o.g,[[4,o.f]],null,null),(l()(),u["\u0275eld"](59,0,null,null,4,"div",[["class","input-group-append"]],null,null,null,null,null)),(l()(),u["\u0275eld"](60,0,null,null,1,"span",[["class","input-group-text"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[".emilio-generator"])),(l()(),u["\u0275eld"](62,0,null,null,1,"button",[["class","btn btn-primary"],["id","export-button"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.exportAction()&&u),u}),null,null)),(l()(),u["\u0275ted"](-1,null,["Export"]))],(function(l,n){var e=n.component;l(n,27,0,e.importSuccessData),l(n,44,0,"exportDestLang",e.exportLang),l(n,48,0,e.objectKeys(e.selectLangs)),l(n,56,0,"exportFilename",e.exportFileName)}),(function(l,n){var e=n.component;l(n,19,0,e.importFileName.length?e.importFileName:"Choose file"),l(n,20,0,!e.importErrorMsg.length,e.importErrorMsg.length?e.importErrorMsg:""),l(n,21,0,!e.importSuccessMsg.length),l(n,24,0,e.importSuccessMsg),l(n,25,0,!e.importSuccessData.length),l(n,41,0,u["\u0275nov"](n,46).ngClassUntouched,u["\u0275nov"](n,46).ngClassTouched,u["\u0275nov"](n,46).ngClassPristine,u["\u0275nov"](n,46).ngClassDirty,u["\u0275nov"](n,46).ngClassValid,u["\u0275nov"](n,46).ngClassInvalid,u["\u0275nov"](n,46).ngClassPending),l(n,53,0,u["\u0275nov"](n,58).ngClassUntouched,u["\u0275nov"](n,58).ngClassTouched,u["\u0275nov"](n,58).ngClassPristine,u["\u0275nov"](n,58).ngClassDirty,u["\u0275nov"](n,58).ngClassValid,u["\u0275nov"](n,58).ngClassInvalid,u["\u0275nov"](n,58).ngClassPending)}))}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"eg-import-export",[],null,null,null,g,p)),u["\u0275did"](1,114688,null,0,c,[s.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=u["\u0275ccf"]("eg-import-export",c,h,{},{},[]),f=e("ZYCi"),x=function(){return function(){}}();e.d(n,"ImportExportModuleNgFactory",(function(){return b}));var b=u["\u0275cmf"](t,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,v]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,i.n,i.m,[u.LOCALE_ID,[2,i.v]]),u["\u0275mpd"](4608,o.p,o.p,[]),u["\u0275mpd"](1073742336,i.c,i.c,[]),u["\u0275mpd"](1073742336,f.r,f.r,[[2,f.x],[2,f.o]]),u["\u0275mpd"](1073742336,x,x,[]),u["\u0275mpd"](1073742336,o.n,o.n,[]),u["\u0275mpd"](1073742336,o.d,o.d,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,f.m,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);