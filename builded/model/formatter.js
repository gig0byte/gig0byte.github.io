sap.ui.define([],function(){"use strict";return{i18nDynamicKey(e,t){let n="";if(this&&this.getOwnerComponent){n=t?this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(e+t):""}return n}}});