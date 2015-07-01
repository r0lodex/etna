/**
 * angular-ui-notification - Angular.js service providing simple notifications using Bootstrap 3 styles with css transitions for animating
 * @author Alex_Crack
 * @version v0.0.8
 * @link https://github.com/alexcrack/angular-ui-notification
 * @license MIT
 */
angular.module("ui-notification",[]),angular.module("ui-notification").value("uiNotificationConfig",{delay:5e3,startTop:60,startRight:10,verticalSpacing:10,horizontalSpacing:10,positionX:"right",positionY:"top",replaceMessage:!1}),angular.module("ui-notification").value("uiNotificationTemplates","angular-ui-notification.html"),angular.module("ui-notification").factory("Notification",["$timeout","uiNotificationTemplates","$http","$compile","$templateCache","$rootScope","$injector","$sce","uiNotificationConfig",function(i,t,n,o,e,a,s,l,r){var c=r.startTop,p=r.startRight,u=r.verticalSpacing,f=r.horizontalSpacing,d=r.delay,m=[],g=function(s,g){"object"!=typeof s&&(s={message:s}),s.scope=s.scope?s.scope:a,s.template=s.template?s.template:t,s.delay=angular.isUndefined(s.delay)?d:s.delay,s.type=g?g:"",s.positionY=s.positionY?s.positionY:r.positionY,s.positionX=s.positionX?s.positionX:r.positionX,n.get(s.template,{cache:e}).success(function(t){var n=s.scope.$new();n.message=l.trustAsHtml(s.message),n.title=l.trustAsHtml(s.title),n.t=s.type.substr(0,1),n.delay=s.delay;var e=function(){for(var i=0,t=0,n=c,o=p,e=[],a=m.length-1;a>=0;a--){var s=m[a],l=parseInt(s[0].offsetHeight),r=parseInt(s[0].offsetWidth),d=e[s._positionY+s._positionX];g+l>window.innerHeight&&(d=c,t++,i=0);var g=(n=d?d:c)+(0===i?0:u),h=o+t*(f+r);s.css(s._positionY,g+"px"),s.css(s._positionX,h+"px"),e[s._positionY+s._positionX]=g+l,i++}},a=o(t)(n);a._positionY=s.positionY,a._positionX=s.positionX,a.addClass(s.type),a.bind("webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd click",function(i){i=i.originalEvent||i,("click"===i.type||"opacity"===i.propertyName&&i.elapsedTime>=1)&&(a.remove(),m.splice(m.indexOf(a),1),e())}),angular.isNumber(s.delay)&&i(function(){a.addClass("killed")},s.delay),angular.element(document.getElementsByTagName("body")).append(a);var r=-(parseInt(a[0].offsetHeight)+50);a.css(a._positionY,r+"px"),m.push(a),i(e)}).error(function(i){throw new Error("Template ("+s.template+") could not be loaded. "+i)})};return g.primary=function(i){this(i,"primary")},g.error=function(i){this(i,"error")},g.success=function(i){this(i,"success")},g.info=function(i){this(i,"info")},g.warning=function(i){this(i,"warning")},g.clearAll=function(){var i=angular.element(document.getElementsByClassName("ui-notification"));i&&angular.forEach(i,function(i){i.remove()})},g}]),angular.module("ui-notification").run(["$templateCache",function(i){i.put("angular-ui-notification.html",'<div class="ui-notification"><h3 ng-show="title" ng-bind-html="title"></h3><div class="message" ng-bind-html="message"></div></div>')}]);