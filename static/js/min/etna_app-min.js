var courseobj=[{course_code:3704,course_name:"Sit ut sint eu cupidatat ex.",core_competency:"Organizational Effectiveness",skills:"Anger Management",date:"Mon Feb 16 2015 18:59:38 GMT+0000",venue:"PWTC, KL",status:"rejected"},{course_code:3985,course_name:"Esse cillum deserunt nulla mollit consectetur nulla adipisicing proident ullamco qui cillum do.",core_competency:"Organizational Effectiveness",skills:"Anger Management",date:"Sat May 24 2014 19:07:53 GMT+0000",venue:"PWTC, KL",status:"passed"},{course_code:1073,course_name:"Esse est et elit irure officia consequat magna.",core_competency:"Organizational Effectiveness",skills:"Anger Management",date:"Sun Jan 25 2015 04:13:53 GMT+0000",venue:"Johor Bahru",status:"pending"},{course_code:3100,course_name:"Sit qui ea id do incididunt nisi consequat ex.",core_competency:"Organizational Effectiveness",skills:"Conflict Management",date:"Wed Jan 07 2015 01:48:35 GMT+0000",venue:"Putrajaya",status:"rejected"},{course_code:2812,course_name:"Labore velit dolore eiusmod sunt veniam.",core_competency:"Organizational Effectiveness",skills:"Conflict Management",date:"Wed Dec 03 2014 20:14:57 GMT+0000",venue:"Putrajaya",status:"passed"},{course_code:2491,course_name:"Quis duis consequat esse officia anim nostrud magna ut consectetur do esse duis.",core_competency:"Organizational Effectiveness",skills:"Anger Management",date:"Wed Apr 08 2015 16:32:40 GMT+0000",venue:"Putrajaya",status:"pending"},{course_code:2290,course_name:"Sint commodo minim consectetur aute incididunt.",core_competency:"Organizational Effectiveness",skills:"Conflict Management",date:"Sun Nov 09 2014 07:23:19 GMT+0000",venue:"Putrajaya",status:"pending"}],etna=angular.module("etna",["ngRoute","ngResource","ngCookies","ui.bootstrap","ui-notification","angularMomentHijri","720kb.datepicker","chart.js","ngFileUpload"]).run(["$rootScope","$location",function(e,t){e.currentpage=function(e){return 0==t.path().indexOf(e)},e.section_title=function(){return t.path().replace("/","").toUpperCase()}}]).config(["$routeProvider","$locationProvider",function(e,t){e.when("/dashboard",{templateUrl:"../static/templates/dashboard.html",controller:"dashboardCtrl"}).when("/profile",{templateUrl:"../static/templates/profile.html",controller:"profileCtrl"}).when("/courses",{templateUrl:"../static/templates/courses.html",controller:"courseCtrl"}).when("/assessment",{templateUrl:"../static/templates/assessment.html",controller:"assessmentCtrl"}).when("/report",{templateUrl:"../static/templates/report.html",controller:"reportCtrl"}).otherwise({redirectTo:"/dashboard"})}]).directive("formField",function(){return{restrict:"E",templateUrl:"/static/templates/directives/form-field.html",replace:!0,scope:{record:"=",options:"=",field:"@",fieldtype:"@",required:"@",label:"@"},link:function(e,t,r){e.$on("submit:invalid",function(){e[e.field].$setDirty()})}}}).filter("labelCase",function(){return function(e){return e=e.replace(/_/g," ")}});angular.module("etna").factory("User",["$resource",function(e){return e("/static/fixtures/user.json",{},{query:{method:"GET",isArray:!1}})}]).factory("CourseSummary",["$resource",function(e){return e("/static/fixtures/coursesummary.json",{},{query:{method:"GET",isArray:!0}})}]).factory("Courses",["$resource",function(e){return e("/static/fixtures/courses.json",{},{query:{method:"GET",isArray:!0}})}]).factory("ChartData",["$resource",function(e){return e("/static/fixtures/chartdata.json",{},{query:{method:"GET",isArray:!1}})}]),angular.module("etna").controller("rootCtrl",["$log","$scope","amMoment","Notification",function(e,t,r,o){e.info("root"),t.sort=function(e){t.sort.field=e,t.sort.order=!t.sort.order},t.date=function(e){var t=Date.parse(e);return moment(t).format("DD MMM YYYY")},t.$on("profile:saved",function(){o.success("Profile has been successfully updated")})}]).controller("sidebarCtrl",["$log","$scope","User",function(e,t,r){t.userdata=r.query(),t.navigation=[{name:"dashboard",icon:"blackboard"},{name:"profile",icon:"v-card"},{name:"courses",icon:"book"},{name:"assessment",icon:"graduation-cap"},{name:"report",icon:"bar-graph"}]}]).controller("dashboardCtrl",["$log","$scope","CourseSummary","ChartData",function(e,t,r,o){r.query(function(e){t.summary={fields:Object.keys(e[0]),data:e}}),o.query(function(e){t.score_card=e.score_card,t.skill_chart=e.skill_chart,t.ass=e.assessment})}]).controller("profileCtrl",["$log","$scope","User","Upload",function(e,t,r,o){t.selections={gender:[{id:1,name:"Male"},{id:2,name:"Female"}],position_level:[{id:1,name:"Junior"},{id:2,name:"Non-Executive"},{id:3,name:"Executive"},{id:4,name:"Manager"}]},t.data=r.query(),t.upload=function(e){if(e&&e.length)for(var t=0;t<e.length;t++){var r=e[t];o.upload({url:"/api/user_profile/",method:"PUT",file:r,fileFormDataName:"avatar"})}},t.dummySave=!1,t.save=function(){t.dummySave=!0,t.$emit("profile:saved")}}]).controller("courseCtrl",["$log","$scope","Courses",function(e,t,r){t.courses=r.query()}]).controller("assessmentCtrl",["$log","$scope",function(e,t){e.info("assessment")}]).controller("reportCtrl",["$log","$scope",function(e,t){e.info("report")}]);
//# sourceMappingURL=./etna_app-min.js.map