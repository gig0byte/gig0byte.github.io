//@ui5-bundle cv/cv/Component-preload.js
sap.ui.require.preload({
	"cv/cv/Component-preload.js":function(){
},
	"cv/cv/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","cv/cv/model/models"],function(e,t,i){"use strict";return e.extend("cv.cv.Component",{metadata:{manifest:"json"},init(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device");this.setModel(i.createLayoutModel(),"layout")}})});
},
	"cv/cv/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("cv.cv.controller.controller.App",{onInit(){}})});
},
	"cv/cv/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","cv/cv/model/formatter"],function(e,t,r,o){"use strict";return e.extend("cv.cv.controller.BaseController",{formatter:o,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){if(t!==undefined){return this.getView().setModel(e,t)}else{return this.getView().setModel(e)}},getRouter:function(){return r.getRouterFor(this)}})});
},
	"cv/cv/controller/DetailPage.controller.js":function(){sap.ui.define(["./BaseController"],function(e){"use strict";let t={work:[{company:"Hitech",title:"Frontend Developer",logo:"/static/hitech_logo.jpg",description:"Currently working in dashboard project (monitoring of MCU servers and other videoconference infrastructure): Vue.js + Vuetify.",date:"Date(1633035600000)",showDate:"10.2021 - now",order:1},{company:"K2 Consult",title:"Web Developer",logo:"/static/k2_logo.png",description:"I mainly made applications on the SAP Business Technologies Platform (ex-SCP), stack: Neo, xsjs, xsodata, hdbdd, SAP Fiori Client, SAPUI5. In that projects I worked as Full-Stack Developer, later I became Team Lead:\n\n1. Application for storing information about wagons, tracking location and checking their current status. Application had integration with SAP Analytics Cloud. This application was awarded at SAP Coder comptetition in 2018;\n\n2. Survey application with different response controls (dropdown, checkbox, segmentedbutton, etc.), email notifications and the ability to attach a photo to the response. This application was certified by SAP in 2020.\n\nOther projects I have worked on:\n\n1. SPA for analyzing and aggregating information about user accounts from severalsystems: SAP, AD, Mail Exchange, Service Desk system, Lansweeper. Mainly worked onfrontend (Vue.js + Vuetify);\n\n2. Classifier of the Service Desk system tickets (Python Flask, algorithm - RandomForest);\n\n3. Middleware for synchronizing worklogs from the Service Desk system to Jira (Python Flask in Docker container);\n\n4. Application for parsing and analyzing tickets from the Service Desk system for making mail notifications and reports (РНР in Docker container);\n\n5. Scripts for processing tickets in Service Desk system: mass creation, mass modification, etc. (РНР).",date:"Date(1525122000000)",showDate:"05.2018 - 10.2021",order:2},{company:"K2 Consult",title:"Second Line Support Assistant (SAP BCM)",logo:"/static/k2_logo.png",description:"Call-centre support with 20+ operators and 10k+ calls per day",date:"Date(1504213200000)",showDate:"09.2017 - 05.2018",order:3}],education:[{company:"Peter The Great St. Petersburg Polytechnic University",logo:"/static/spbstu_logo.png",title:"Information Systems and Technologies",description:"Graduation works:\n\n• Application for monitoring devices in the network (Bachelor);\n• Application for visual modeling of solid body heating (Master).",showDate:"09.2011 - 07.2017"}]};return e.extend("cv.cv.controller.DetailPage",{onInit(){this.setModel(new sap.ui.model.json.JSONModel(t))},pressCloseDetail(){this.getModel("layout").setProperty("/layout","OneColumn")}})});
},
	"cv/cv/controller/MainView.controller.js":function(){sap.ui.define(["./BaseController"],function(e){"use strict";return e.extend("cv.cv.controller.MainView",{onInit(){}})});
},
	"cv/cv/controller/MasterPage.controller.js":function(){sap.ui.define(["./BaseController"],function(e){"use strict";let a={img:{photo:"/static/photo.png"},contacts:[{name:"email",link:"mailto:gig0byte26@gmail.com",value:"gig0byte26@gmail.com",icon:"email"},{name:"phone",link:"tel:+79052584362",value:"+7 905 258 43 62",icon:"call"},{name:"city",value:"Saint-Petersburg, Russia",icon:"map"},{name:"linkedin",icon:"arobase",link:"https://www.linkedin.com/in/pavel-mazharov/",value:"pavel-mazharov"}],assets:[{name:"skills",items:[{name:"SAPUI5",value:100},{name:"Vue 2",value:100},{name:"JavaScript",value:80},{name:"Python",value:70},{name:"Docker",value:70}]},{name:"languages",items:[{name:"Russian",value:100},{name:"English",value:80}]}]};return e.extend("cv.cv.controller.MasterPage",{onInit(){this.setModel(new sap.ui.model.json.JSONModel(a,"detail"))},pressShowDetal(){this.getModel("layout").setProperty("/layout","TwoColumnsMidExpanded")}})});
},
	"cv/cv/controls/TimelineItem.js":function(){sap.ui.define(["sap/suite/ui/commons/TimelineItem","sap/suite/ui/commons/TimelineItemRenderer"],function(e,t){"use strict";let i=t,r=i._getFormatedDateTime;i._getFormatedDateTime=(e,t)=>{if(e._getShowDate()){return e._getShowDate()}else{return r(e,t)}};return e.extend("cv.cv.controls.Select",{metadata:{properties:{showDate:{type:"any"}}},renderer:i,init(){e.prototype.init.apply(this,arguments)},_getShowDate(){return this.getProperty("showDate")}})});
},
	"cv/cv/i18n/i18n.properties":'# This is the resource bundle for cv.cv\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Frontend Developer | Pavel MAZHAROV\n\n#YDES: Application description\nappDescription=Description of cv.cv\n#XTIT: Main view title\ntitle=Frontend Developer | Pavel MAZHAROV\n\nname=Pavel MAZHAROV\nposition=Frontend Developer\nslogan=Proactive feature/bug creator\n\nMaster.Subtitle.contacts=Contacts\nMaster.Subtitle.skills=Skills\nMaster.Subtitle.languages=Languages\n\nDetail.Position.k2.support=Second Line Support Assistant (SAP BCM)\nDetail.Position.k2.developer=Web Developer\nDetail.Position.hitech.developer=Frontend Developer\n',
	"cv/cv/i18n/i18n_en.properties":'# This is the resource bundle for cv.cv\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Title of cv.cv\n\n#YDES: Application description\nappDescription=Description of cv.cv\r\n#XTIT: Main view title\ntitle=Title of cv.cv',
	"cv/cv/i18n/i18n_ru.properties":'# This is the resource bundle for cv.cv\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Title of cv.cv\n\n#YDES: Application description\nappDescription=Description of cv.cv\r\n#XTIT: Main view title\ntitle=Title of cv.cv',
	"cv/cv/manifest.json":'{"_version":"1.40.0","sap.app":{"id":"cv.cv","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap-ux/fiori-freestyle-writer:basic","version":"0.12.1"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.102.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"cv.cv.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"cv.cv.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMainView","pattern":":?query:","target":["TargetMainView"]}],"targets":{"TargetMainView":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"MainView","viewName":"MainView"}}},"rootView":{"viewName":"cv.cv.view.App","type":"XML","async":true,"id":"App"}}}',
	"cv/cv/model/formatter.js":function(){sap.ui.define([],function(){"use strict";return{i18nDynamicKey(e,t){let n="";if(this&&this.getOwnerComponent){n=t?this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(e+t):""}return n}}});
},
	"cv/cv/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel(){const o=new e(n);o.setDefaultBindingMode("OneWay");return o},createLayoutModel(){const o=new e({layout:n.system.phone?"OneColumn":"TwoColumnsMidExpanded"});return o}}});
},
	"cv/cv/view/App.view.xml":'<mvc:View\n    controllerName="cv.cv.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns="sap.m"\n    xmlns:f="sap.f"><App id="app" /></mvc:View>',
	"cv/cv/view/DetailPage.view.xml":'<mvc:View\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    xmlns:core="sap.ui.core"\r\n    xmlns:commons="sap.suite.ui.commons"\r\n    xmlns:layout="sap.ui.layout"\r\n    xmlns:mpn="cv.cv.controls"\r\n    controllerName="cv.cv.controller.DetailPage"><Page\r\n        showHeader="false"\r\n        class="{= ${device>/system/phone} ? \'\' : \'sapUiLargeMarginEnd\' }"><layout:VerticalLayout width="100%"><OverflowToolbar\r\n                width="100%"\r\n                height="auto"\r\n                class="sapUiSmallMarginTop"><VBox><Title text="{i18n>name}" /><Title\r\n                        text="{i18n>position}"\r\n                        titleStyle="H3"\r\n                        class="sapUiTinyMarginTopBottom grey-text" /></VBox><ToolbarSpacer /><Button\r\n                    visible="{device>/system/phone}"\r\n                    icon="sap-icon://decline"\r\n                    class="sapUiTinyMarginEnd"\r\n                    press="pressCloseDetail" /></OverflowToolbar><OverflowToolbar\r\n                width="100%"\r\n                height="50px"><ToolbarSpacer visible="{device>/system/phone}" /><Title text="{i18n>slogan}" /><ToolbarSpacer visible="{device>/system/phone}" /></OverflowToolbar><OverflowToolbar\r\n                width="100%"\r\n                height="auto"\r\n                class="sapUiSmallMarginTop"\r\n                style="Clear"><Title\r\n                    text="Work experience"\r\n                    titleStyle="H4"\r\n                    class="grey-text" /></OverflowToolbar><commons:Timeline\r\n                width="100%"\r\n                sortOldestFirst="false"\r\n                enableScroll="false"\r\n                showHeaderBar="false"\r\n                showItemFilter="false"\r\n                showSearch="false"\r\n                showTimeFilter="false"\r\n                content="{/work}"><commons:content><mpn:TimelineItem\r\n                        dateTime="{date}"\r\n                        showDate="{showDate}"\r\n                        userName="{company}"\r\n                        title="{title}"\r\n                        userNameClickable="false"\r\n                        text="{description}"\r\n                        userPicture="{logo}"\r\n                        icon="sap-icon://overlay" /></commons:content></commons:Timeline><OverflowToolbar\r\n                width="100%"\r\n                height="auto"\r\n                style="Clear"><Title\r\n                    text="Education"\r\n                    titleStyle="H4"\r\n                    class="grey-text" /></OverflowToolbar><commons:Timeline\r\n                width="100%"\r\n                sortOldestFirst="false"\r\n                enableScroll="false"\r\n                showHeaderBar="false"\r\n                showItemFilter="false"\r\n                showSearch="false"\r\n                showTimeFilter="false"\r\n                content="{/education}"><commons:content><mpn:TimelineItem\r\n                        showDate="{showDate}"\r\n                        userName="{company}"\r\n                        title="{title}"\r\n                        userNameClickable="false"\r\n                        text="{description}"\r\n                        userPicture="{logo}"\r\n                        icon="sap-icon://overlay" /></commons:content></commons:Timeline></layout:VerticalLayout></Page></mvc:View>',
	"cv/cv/view/MainView.view.xml":'<mvc:View\n    xmlns:commons="sap.suite.ui.commons"\n    xmlns:layout="sap.ui.layout"\n    xmlns:core="sap.ui.core"\n    controllerName="cv.cv.controller.MainView"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns="sap.m"\n    xmlns:f="sap.f"\n    xmlns:mpn="cv.cv.controls"><Page showHeader="false"><content><f:FlexibleColumnLayout\n                layout="{layout>/layout}"\n                autoFocus="false"><f:beginColumnPages><mvc:XMLView viewName="cv.cv.view.MasterPage" /></f:beginColumnPages><f:midColumnPages><mvc:XMLView viewName="cv.cv.view.DetailPage" /></f:midColumnPages></f:FlexibleColumnLayout></content></Page></mvc:View>',
	"cv/cv/view/MasterPage.view.xml":'<mvc:View\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    xmlns:layout="sap.ui.layout"\r\n    xmlns:core="sap.ui.core"\r\n    controllerName="cv.cv.controller.MasterPage"><Page\r\n        backgroundDesign="Solid"\r\n        showHeader="false"\r\n        showFooter="true"\r\n        class="blue-background"><layout:VerticalLayout width="100%"><HBox\r\n                alignContent="Center"\r\n                justifyContent="Center"\r\n                class="sapUiSmallMarginTop"><Image\r\n                    densityAware="false"\r\n                    src="{/img/photo}"\r\n                    height="150px"><detailBox><LightBox><LightBoxItem imageSrc="{/img/photo}" /></LightBox></detailBox></Image></HBox><VBox class="sapUiSmallMargin"><FlexBox\r\n                    alignContent="Center"\r\n                    justifyContent="Center"><Title\r\n                        text="Contacts"\r\n                        class="white-text" /></FlexBox><VBox\r\n                    items="{/contacts}"\r\n                    fitContainer="true"\r\n                    class="sapUiTinyMarginBottom"><HBox><core:Icon\r\n                            visible="{= ${icon} !== undefined }"\r\n                            src="{= ${icon} !== undefined ? \'sap-icon://\' + ${icon} : \'decline\'}"\r\n                            color="#e4e4e4"\r\n                            class="sapUiSmallMarginEnd" /><Link\r\n                            visible="{= !!${link} }"\r\n                            text="{value}"\r\n                            href="{link}"\r\n                            class="white-text" /><Text\r\n                            visible="{= !${link} }"\r\n                            text="{value}"\r\n                            class="white-text" /></HBox></VBox><VBox items="{path: \'/assets\', templateShareable:true}"><VBox class="sapUiTinyMarginTop"><FlexBox justifyContent="Center"><Title\r\n                                text="{\r\n\t\t\t\t\t\t\t\t    parts: [{\r\n\t\t\t\t\t\t\t\t            value: \'Master.Subtitle.\'\r\n\t\t\t\t\t\t\t\t        }, {\r\n\t\t\t\t\t\t\t\t            path: \'name\'\r\n\t\t\t\t\t\t\t\t        }\r\n\t\t\t\t\t\t\t\t    ],\r\n\t\t\t\t\t\t\t\t    formatter: \'.formatter.i18nDynamicKey\'\r\n\t\t\t\t\t\t\t\t}"\r\n                                level="H2"\r\n                                class="white-text" /></FlexBox><VBox items="{ path: \'items\',  templateShareable:true}"><VBox class="sapUiTinyMarginBottom"><Text\r\n                                    text="{name}"\r\n                                    class="white-text" /><ProgressIndicator\r\n                                    class="gold-indicator"\r\n                                    percentValue="{value}"\r\n                                    showValue="true"\r\n                                    displayOnly="true" /></VBox></VBox></VBox></VBox></VBox></layout:VerticalLayout><footer><OverflowToolbar\r\n                style="Standard"\r\n                class="blue-background"><Link\r\n                    text="Source of page"\r\n                    href="https://github.com/gig0byte/sapui5-cv/"\r\n                    class="white-text sapUiSmallMarginBegin" /><ToolbarSpacer /><Button\r\n                    visible="{device>/system/phone}"\r\n                    type="Ghost"\r\n                    text="Show More"\r\n                    class="white-text"\r\n                    press="pressShowDetal" /></OverflowToolbar></footer></Page></mvc:View>'
});
