(this.webpackJsonpf40=this.webpackJsonpf40||[]).push([[0],{31:function(e,a,t){},50:function(e,a,t){e.exports=t(91)},6:function(e,a){e.exports="http://lms-f40.herokuapp.com"},84:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),o=(t(31),t(11)),s=t(14),m=Object(n.createContext)(),i=Object(n.createContext)(),u=function(){var e=Object(n.useContext)(m),a=e.user,t=e.logout,r=Object(n.useContext)(i),c=r.getEvents,o=r.getNotifications,u=r.getProfile,d=r.getTasks,p=r.getScore,E=r.getAssessments,f=r.getAttendance,g=r.getCourses;return Object(n.useEffect)((function(){c(),o(),u(),d(),p(),E(),f(),g()}),[]),l.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-md m-primary-bg"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement(s.b,{className:"nav-link ",to:"/f40/"},"Home"),l.a.createElement(s.b,{className:"nav-link ",to:"/f40/Profile"},"Profile"),l.a.createElement(s.b,{className:"nav-link ",to:"/f40/Tasks"},"Tasks"),l.a.createElement(s.b,{className:"nav-link ",to:"/f40/Score"},"Score"),l.a.createElement(s.b,{className:"nav-link ",to:"/f40/Assessments"},"Assessments"),l.a.createElement(s.b,{className:"nav-link ",to:"/f40/Attendance"},"Attendance"),l.a.createElement(s.b,{className:"nav-link ",to:"/f40/Courses"}," ","Courses"," "))),l.a.createElement("span",{className:"navbar-text  mr-2"},"Hi ",a,"!"),l.a.createElement(s.b,{className:"btn btn-danger",to:"/f40/",onClick:function(){return t()}}," ","Logout"," "))},d=t(19);function p(){return l.a.createElement("div",{id:"notfound"},l.a.createElement("div",{className:"notfound"},l.a.createElement("div",{className:"notfound-404"},l.a.createElement("h1",null,"404")),l.a.createElement("h2",null,"Oops! This Page Could Not Be Found"),l.a.createElement("p",null,"Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"),l.a.createElement("a",{href:"/"},"Go To Homepage")))}function E(){return l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw m-accent"}),l.a.createElement("p",{className:"m-2"},"Loading....")))}var f=t(6),g=t.n(f);function b(){return l.a.createElement("center",{className:"m-2 m-md-5",style:{border:"1px solid gray",padding:"20px",borderRadius:"5px",boxShadow:"0px 0px 2px 3px gray",background:"#f2f2f2"}},l.a.createElement("span",{"aria-label":"error",role:"img",style:{fontSize:"50px"}},"\ud83d\ude41"),l.a.createElement("h1",null,"ERROR"),l.a.createElement("h2",null,"Oops! Some error has occured"),l.a.createElement("p",null,"Refresh the page or logout and login again to continue"),l.a.createElement("a",{href:"/"},"Go To Homepage"))}var N=function(){var e=Object(n.useContext)(i),a=e.events,t=e.events_loading,r=e.events_error,c=e.getEvents,o=e.notifications,s=e.notifications_loading,m=e.notifications_error,u=e.getNotifications;return Object(n.useEffect)((function(){c(),u()}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("center",{className:"row h1 m-2 m-accent"},"Events"),l.a.createElement("div",{className:"row"},t?l.a.createElement(E,null):r?l.a.createElement(b,null):a.map((function(e){return l.a.createElement("div",{className:"card shadow border m-1",key:e._id},l.a.createElement("div",{className:"card-title h3 p-2 m-0 m-primary-bg text-light"},e.title," :"),l.a.createElement("img",{className:"card-img-top",src:g.a+e.id,alt:e.title,width:"100%"}),l.a.createElement("p",{className:"card-text p-2",style:{textAlign:"justify"}}," ","\xa0 ",e.desc))})))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("center",{className:"row h1 m-2 m-accent"},"Notifications"),l.a.createElement("div",{className:"row"},s?l.a.createElement(E,null):m?l.a.createElement(b,null):o.map((function(e){return l.a.createElement("div",{className:"card col-12 m-2 shadow-sm border",key:e._id},l.a.createElement("h1",{className:"p-2 card-title"},e.title),l.a.createElement("p",{className:"p-2 card-text"}," \xa0 ",e.desc))}))))),l.a.createElement("p",null))},v=t(16),h=t(5),y=t(97),_=t(93),k=t(94),x=t(7),w=t.n(x),S=Object(n.createContext)(),O=function(){var e=Object(n.useContext)(S).alerts;return null!==e&&l.a.createElement("div",{className:"alert alert-danger row",role:"alert"},l.a.createElement("i",{className:"fa fa-info-circle"})," \xa0 ",e)},T=function(){var e=Object(n.useContext)(i),a=Object(n.useContext)(S).setAlert,t=e.profile,r=e.profile_loading,c=e.profile_error,s=e.getProfile;Object(n.useEffect)((function(){s()}),[]);var m,u=Object(n.useState)({otp:"",pwd:""}),d=Object(o.a)(u,2),p=d[0],f=d[1],N=p.otp,x=p.pwd,T=Object(n.useState)(!1),C=Object(o.a)(T,2),j=C[0],A=C[1],I=function(e){return f(Object(h.a)({},p,Object(v.a)({},e.target.name,e.target.value)))};return r?l.a.createElement(E,null):c?(console.log(c),l.a.createElement(b,null)):l.a.createElement("div",{className:"container"},l.a.createElement(O,null),l.a.createElement("div",{className:"row m-1"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h1",{className:"m-accent"},"My Profile")),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("button",{type:"button",onClick:function(){var e={"X-Access-Token":localStorage.getItem("token")};w.a.get(g.a+"/studentpdf?rollNo="+localStorage.getItem("user"),{headers:e}).then((function(){setTimeout((function(){a("Check Your Email")}),500)})).catch((function(e){console.log(e),a("Something goes wrong; Try again.")}))},className:"btn btn-primary col-sm-6 col-md-4 btn-block m-sm-1 float-sm-right"},"Download"))),l.a.createElement("div",{className:"row justify-content-center m-2 shadow-sm border border-dark"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("center",null,l.a.createElement("img",{className:"card-img rounded-circle top p-1",style:{width:"250px",height:"250px"},src:g.a+t.id,alt:t.name}))),l.a.createElement("div",{className:"col-12 col-md-6 p-2"},l.a.createElement("div",null,l.a.createElement("p",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("b",null,"Name: "),t.name),l.a.createElement("p",null,l.a.createElement("b",null,"RollNo: "),t.rollNo),l.a.createElement("p",null,l.a.createElement("b",null,"Batch: "),t.batch),l.a.createElement("p",null,l.a.createElement("b",null,"Email: "),t.mailId),l.a.createElement("button",{className:"offset-3 btn btn-success",onClick:function(){var e={};e.username=localStorage.getItem("user"),w.a.post(g.a+"/otprequest",e).then((function(){A(!j)})).catch((function(e){return console.log(e)}))}},"Change Password")))),l.a.createElement("div",{className:"row justify-content-center m-2 shadow-sm border border-dark"},l.a.createElement("div",{className:"col-12 col-md-6 p-2"},l.a.createElement("div",null,l.a.createElement("h3",{className:"m-accent"},"Student Mentor Details"),l.a.createElement("p",null,l.a.createElement("b",null,"Name: "),t.studentMentorName),l.a.createElement("p",null,l.a.createElement("b",null,"Email: "),t.studentMentorMail),l.a.createElement("p",null,l.a.createElement("b",null,"Contact No.: "),t.studentMentorPhone))),l.a.createElement("div",{className:"col-12 col-md-6 p-2"},l.a.createElement("div",null,l.a.createElement("h3",{className:"m-accent"},"Faculty Mentor Details"),l.a.createElement("p",null,l.a.createElement("b",null,"Name: "),t.facultyMentorName),l.a.createElement("p",null,l.a.createElement("b",null,"Email: "),t.facultyMentorMail),l.a.createElement("p",null,l.a.createElement("b",null,"Contact No.: "),t.facultyMentorPhone)))),l.a.createElement("div",{className:"row justify-content-center m-2 shadow-sm border border-dark"},void 0===(m=t.achievements)||0===m.length?null:l.a.createElement("div",{className:"col-12"},l.a.createElement("div",null,l.a.createElement("h3",{className:"m-accent"},"Achievements"),l.a.createElement("ol",null,m.map((function(e,a){return l.a.createElement("li",{key:a},e)})))))),l.a.createElement(y.a,{isOpen:j,toggle:function(){return A(!j)}},l.a.createElement(_.a,{toggle:function(){return A(!j)}},"Change Password"),l.a.createElement(k.a,null,l.a.createElement("center",{className:"h5",style:{color:"green"}},"Check Your Email for OTP"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={};a.username=localStorage.getItem("user"),a.password=x,a.OTP=N,w.a.post(g.a+"/passwordchange",a).then((function(){A(!j)})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"form-label col-12"},"OTP"),l.a.createElement("div",{className:"col-12"},l.a.createElement("input",{type:"text",required:!0,onChange:I,className:"form-control",value:N,name:"otp"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"form-label col-12"},"New password"),l.a.createElement("div",{className:"col-12"},l.a.createElement("input",{type:"text",required:!0,onChange:I,className:"form-control",value:x,name:"pwd"}))),l.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return A(!j)}},"Cancel")," ","\xa0",l.a.createElement("button",{type:"submit",className:"btn btn-primary pl-4 pr-4"},"Submit")))))},C=t(95),j=function(){var e=Object(n.useContext)(i),a=e.attendance,t=e.attendance_loading,r=e.attendance_error,c=e.getAttendance;return Object(n.useEffect)((function(){c()}),[]),t?l.a.createElement(E,null):r?(console.log(r),l.a.createElement(b,null)):l.a.createElement("div",{className:"container"},l.a.createElement("center",{className:"row m-2"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h1",{className:"m-accent"},"Attendance")),l.a.createElement(C.a,{size:!0,bordered:!0,className:"col-12 text-center"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"m-primary-bg m-text-light font-big"},l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Present/Absent"))),l.a.createElement("tbody",null,a.map((function(e){return e.value?l.a.createElement("tr",{key:e._id,className:"m-positive-bg-50"},l.a.createElement("td",null,e.date),l.a.createElement("td",null,"P")):l.a.createElement("tr",{key:e._id,className:"m-negative-bg-50"},l.a.createElement("td",null,e.date),l.a.createElement("td",null,"A"))}))))))},A=t(96),I=t(98),F=function(){var e=Object(n.useContext)(i),a=e.tasks,t=e.tasks_loading,r=e.tasks_error,c=e.getTasks;Object(n.useEffect)((function(){c()}),[]);var o=function(e){var a={"Content-Type":"multipart/form-data","X-Access-Token":localStorage.getItem("token")};e.preventDefault();var t=new FormData(e.target);w.a.post(g.a+"/uploadtask?rollNo="+localStorage.getItem("user"),t,{headers:a}).then((function(e){return console.log(e)})).then((function(){return setTimeout((function(){c()}),1e3)}))},s=function(e){var a={"Content-Type":"application/x-www-form-urlencoded","X-Access-Token":localStorage.getItem("token")};e.preventDefault();var t=new FormData(e.target);w.a.post(g.a+"/uploadtask?rollNo="+localStorage.getItem("user")+"&clear=true",t,{headers:a}).then((function(e){return console.log(e)})).then((function(){return setTimeout((function(){c()}),3e3)}))};return t?l.a.createElement(E,null):r?(console.log(r),l.a.createElement(b,null)):l.a.createElement(A.a,{className:"container"},l.a.createElement("center",null,l.a.createElement("h1",{className:"m-accent"},"Tasks")),a.map((function(e){return e.attachment?function(e){return l.a.createElement("div",{className:"row shadow m-2",key:e._id},l.a.createElement("div",{className:"col-12 p-0 m-0"},l.a.createElement(A.a.Toggle,{as:I.a,className:"col-12 m-positive-bg",eventKey:e._id},l.a.createElement("p",{className:"text-white float-left font-big"},l.a.createElement("b",{className:"text-dark"},"Topic : "),e.topic),l.a.createElement("p",{className:"float-right badge badge-light p-3"},e.taskType[0].toUpperCase()+e.taskType.slice(1)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"text-white float-left font-big"},l.a.createElement("b",{className:"text-dark"},"Uploaded at : "),e.uploadTime),l.a.createElement("p",{className:"text-white float-right font-big"},l.a.createElement("b",{className:"text-dark"},"Deadline : "),e.deadline))),l.a.createElement(A.a.Collapse,{eventKey:e._id,className:"col-12 p-2 m-2"},l.a.createElement("div",{className:"col-12"},l.a.createElement("form",{onSubmit:s},l.a.createElement("input",{type:"hidden",name:"taskType",value:e.taskType}),l.a.createElement("input",{type:"hidden",name:"topic",value:e.topic}),l.a.createElement("input",{type:"hidden",name:"taskId",value:e._id}),l.a.createElement("div",{className:"row form-group p-2"},l.a.createElement("div",{className:"col-12 col-md-2"},l.a.createElement("b",{className:"font-big text-dark"},"Attachment: ")),l.a.createElement("div",{className:"col-12 col-md-10"},l.a.createElement("div",{className:"row rounded shadow-sm"},l.a.createElement("a",{href:g.a+e.attachment.url,rel:"noopener noreferrer",className:"font-big col-10 col-md-11 m-overflow",target:"_blank"},e.attachment.url.slice(7)),l.a.createElement("button",{type:"submit",name:"submit",className:"btn btn-secondary col-2 col-md-1"},"\xd7")))),l.a.createElement("div",{className:"row form-group p-2"},l.a.createElement("div",{className:"col-12 col-md-2"},l.a.createElement("b",{className:"font-big text-dark"},"Feedback: ")),l.a.createElement("div",{className:"font-big col-12 col-md-10"},e.attachment.feedback)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-3 offset-md-2 p-2"},l.a.createElement("button",{type:"submit",name:"submit",className:"btn btn-primary btn-block"},"Unsubmit")),l.a.createElement("div",{className:"col-12 col-md-7"},l.a.createElement("p",{className:"badge badge-warning text-white float-right p-3 font-big"},null!==e.attachment.Score?e.attachment.Score+"/100":"Not Graded")))))))}(e):function(e){return l.a.createElement("div",{className:"row shadow m-2",key:e._id},l.a.createElement("div",{className:"col-12 p-0 m-0"},l.a.createElement(A.a.Toggle,{as:I.a,className:"col-12 m-negative-bg",eventKey:e._id},l.a.createElement("p",{className:"text-white float-left font-big"},l.a.createElement("b",{className:"text-dark"},"Topic : "),e.topic),l.a.createElement("p",{className:"float-right p-3 badge badge-light"},e.taskType[0].toUpperCase()+e.taskType.slice(1)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"text-white float-left font-big"},l.a.createElement("b",{className:"text-dark"},"Uploaded at : "),e.uploadTime),l.a.createElement("p",{className:"text-white float-right font-big"},l.a.createElement("b",{className:"text-dark"},"Deadline : "),e.deadline))),l.a.createElement(A.a.Collapse,{eventKey:e._id,className:"col-12 p-2"},l.a.createElement("div",{className:"col-12"},l.a.createElement("form",{onSubmit:o},l.a.createElement("div",{className:"form-group row p-2"},l.a.createElement("b",{className:"font-big text-dark col-12 col-md-2 form-label"},"Attachment:"," "),l.a.createElement("div",{className:"col-12 col-md-10"},l.a.createElement("input",{type:"file",className:"form-control-file shadow-sm",name:"attachment",required:!0}))),l.a.createElement("div",{className:"form-group row p-2"},l.a.createElement("b",{className:"font-big text-dark col-12 col-md-2 form-label"},"Feedback:"," "),l.a.createElement("div",{className:"col-12 col-md-10"},l.a.createElement("input",{type:"text",name:"feedback",className:"form-control",required:!0}))),l.a.createElement("input",{type:"hidden",name:"taskType",value:e.taskType}),l.a.createElement("input",{type:"hidden",name:"topic",value:e.topic}),l.a.createElement("input",{type:"hidden",name:"taskId",value:e._id}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-3 offset-md-2"},l.a.createElement("button",{type:"submit",name:"submit",className:"btn btn-primary btn-block"},"Submit")))))))}(e)})))},L=function(){var e=Object(n.useContext)(i),a=e.score,t=e.score_loading,r=e.score_error,c=e.getScore;return Object(n.useEffect)((function(){c()}),[]),t?l.a.createElement(E,null):r?(console.log(r),l.a.createElement(b,null)):l.a.createElement("div",{className:"container"},l.a.createElement("center",{className:"row m-2"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h1",{className:"m-accent"},"Scores")),l.a.createElement(C.a,{size:!0,bordered:!0,className:"col-12 text-center"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"font-big m-primary-bg m-text-light"},l.a.createElement("td",null,"Date"),l.a.createElement("td",null,"Topic"),l.a.createElement("td",null,"Score"))),l.a.createElement("tbody",null,a.data.map((function(e){return null===e.Score?null:e.Score<=50?l.a.createElement("tr",{className:"m-negative-bg-50",key:e.taskId},l.a.createElement("td",null,e.uploadTime),l.a.createElement("td",null,e.taskTopic),l.a.createElement("td",null,e.Score)):l.a.createElement("tr",{className:"m-positive-bg-50",key:e.taskId},l.a.createElement("td",null,e.uploadTime),l.a.createElement("td",null,e.taskTopic),l.a.createElement("td",null,e.Score))}))))))},R=function(){var e=Object(n.useContext)(i),a=e.courses,t=e.courses_loading,r=e.courses_error,c=e.getCourses;return Object(n.useEffect)((function(){c()}),[]),t?l.a.createElement(E,null):r?(console.log(r),l.a.createElement(b,null)):l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h1",{className:"m-accent"},"Courses")),l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h4",null,"Here are some courses recommended for you")),l.a.createElement(A.a,{className:"container"},a.map((function(e){return l.a.createElement("div",{className:"row m-2 shadow",key:e._id},l.a.createElement("div",{className:"col-12 m-0 p-0"},l.a.createElement(A.a.Toggle,{as:I.a,eventKey:e._id,className:"col-12 p-2 font-big m-neutral-bg"},l.a.createElement("p",{className:"float-left font-big"},e.title),l.a.createElement("p",{className:"badge badge-success float-right p-3"},e.price))),l.a.createElement(A.a.Collapse,{eventKey:e._id,className:"col-12"},l.a.createElement("div",{className:"row p-2"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h5",null,l.a.createElement("b",null,"Description : ")),l.a.createElement("p",null,e.desc),l.a.createElement("h5",null,l.a.createElement("b",null,"Financial Aid available :"," ","Yes"===e.financialaid?l.a.createElement("span",{className:"text-success"},"Yes"):"No"===e.financialaid?l.a.createElement("span",{className:"text-danger"},"No"):l.a.createElement("span",{className:"text-warning"},"Not Required")," "))),l.a.createElement("div",{className:"col-8 offset-2 col-md-4 offset-md-4"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"btn btn-block m-primary-bg text-white"},"Go to Course")))))})))))},P=function(){var e=Object(n.useContext)(i),a=e.assessments,t=e.assessments_loading,r=e.assessments_error,c=e.getAssessments;return Object(n.useEffect)((function(){c()}),[]),t?l.a.createElement(E,null):r?(console.log(r),l.a.createElement(b,null)):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h1",{className:"m-accent"},"Assessments"))),l.a.createElement("div",{className:"row m-2"},a.map((function(e){return l.a.createElement("div",{className:"col-12 rounded shadow m-neutral-bg m-1 p-2",key:e._id},l.a.createElement("p",{className:"font-big float-left text-white"},l.a.createElement("b",{className:"text-dark"},"Topic: "),e.topic),l.a.createElement("p",{className:"badge badge-info float-right p-3"},e.assessmentType[0].toUpperCase()+e.assessmentType.slice(1)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"text-center text-white font-big m-overflow"},l.a.createElement("b",{className:"text-dark"},"Link: "),l.a.createElement("a",{className:"text-white",href:e.link},e.link)))}))))},G=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],r=a[1],c=function(e){return r(!0),l.a.createElement(e,null)};return l.a.createElement(n.Fragment,null,l.a.createElement(u,null),l.a.createElement((function(){return t?l.a.createElement("div",{className:"jumbotron rounded-0 d-none d-md-block m-primary-bg"},l.a.createElement("center",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"images.jpeg",alt:"KCT",style:{float:"left",width:"150px"}}),l.a.createElement("img",{src:"ece_logo.png",alt:"ECE",style:{float:"right",width:"150px"}}),l.a.createElement("h1",{className:"m-text-light"},"Department of Electronics & Communication Engineering"),l.a.createElement("h2",{className:"m-text-light"},"Kumaraguru College of Technology")))):l.a.createElement("div",null)}),null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/f40/",component:function(){return c(N)}}),l.a.createElement(d.a,{exact:!0,path:"/f40/Profile",component:function(){return c(T)}}),l.a.createElement(d.a,{exact:!0,path:"/f40/Tasks",component:function(){return c(F)}}),l.a.createElement(d.a,{exact:!0,path:"/f40/Score",component:function(){return c(L)}}),l.a.createElement(d.a,{exact:!0,path:"/f40/Attendance",component:function(){return c(j)}}),l.a.createElement(d.a,{exact:!0,path:"/f40/Assessments",component:function(){return c(P)}}),l.a.createElement(d.a,{exact:!0,path:"/f40/Courses",component:function(){return c(R)}}),l.a.createElement(d.a,{component:function(){return r(!1),l.a.createElement(p,null)}})))},D=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"jumbotron m-primary-bg d-none d-md-block"},l.a.createElement("center",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"images.jpeg",alt:"KCT",style:{float:"left",width:"150px"}}),l.a.createElement("img",{src:"ece_logo.png",alt:"ECE",style:{float:"right",width:"150px"}}),l.a.createElement("h1",{className:"m-text-light"},"Department of Electronics & Communication Engineering"),l.a.createElement("h2",{className:"m-text-light"},"Kumaraguru College of Technology")))),l.a.createElement("div",{className:"jumbotron m-primary-bg d-block d-md-none"},l.a.createElement("center",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"images.jpeg",alt:"KCT",style:{float:"left",width:"50px"}}),l.a.createElement("h1",{style:{float:"left"}}," \xa0KCT"),l.a.createElement("img",{src:"ece_logo.png",alt:"ECE",style:{float:"right",width:"75px"}}),l.a.createElement("h1",{className:"m-text-light",style:{float:"right"}},"ECE"),l.a.createElement("h3",{className:"m-text-light",style:{clear:"both"}},"Student Portal - Log in")))))},U=function(e){var a=Object(n.useContext)(m),t=Object(n.useContext)(S).setAlert,r=a.login,c=a.error,s=a.clearErrors;Object(n.useEffect)((function(){null!==c&&(t(c),s())}),[c]);var i=Object(n.useState)({username:"",password:""}),u=Object(o.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),b=f[0],N=f[1],x=Object(n.useState)({otp:"",pwd:""}),T=Object(o.a)(x,2),C=T[0],j=T[1],A=d.username,I=d.password,F=C.otp,L=C.pwd,R=Object(n.useState)(!1),P=Object(o.a)(R,2),G=P[0],U=P[1],M=Object(n.useState)(!1),K=Object(o.a)(M,2),q=K[0],V=K[1],H=function(e){return p(Object(h.a)({},d,Object(v.a)({},e.target.name,e.target.value)))},X=function(e){return j(Object(h.a)({},C,Object(v.a)({},e.target.name,e.target.value)))};return l.a.createElement(n.Fragment,null,l.a.createElement(D,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-8 offset-md-2"},l.a.createElement(O,null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===A||""===I?t("Please fill all the fields"):r({username:A,password:I})},style:{border:"1px solid gray",padding:"10px",borderRadius:"5px",boxShadow:"0px 0px 3px 3px gray"}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"username",className:"col-form-label col-12 col-md-2 h6"},"UserName "),l.a.createElement("div",{className:"col-12 col-md-10"},l.a.createElement("input",{type:"text",name:"username",id:"username",className:"form-control",placeholder:"UserName",value:A,onChange:H}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"password",className:"col-form-label col-12 col-md-2 h6"},"Password "),l.a.createElement("div",{className:"col-12 col-md-10"},l.a.createElement("input",{type:"password",name:"password",id:"password",className:"form-control",placeholder:"password",value:I,onChange:H}))),l.a.createElement("div",{className:"col-12 col-md-4 offset-md-2"},l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Login"))))),l.a.createElement("center",null,"or ",l.a.createElement("p",{style:{display:"inline",color:"#07827e",cursor:"pointer"},onClick:function(){return U(!G)}},"Forget Password"))),l.a.createElement(y.a,{isOpen:G,toggle:function(){return U(!G)}},l.a.createElement(_.a,{toggle:function(){return U(!G)}},"Forget Password"),l.a.createElement(k.a,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={};a.username=b,w.a.post(g.a+"/otprequest",a).then((function(){U(!G),V(!q)})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"form-label col-12"},"User Name"),l.a.createElement("div",{className:"col-12"},l.a.createElement("input",{type:"text",required:!0,onChange:function(e){return N(e.target.value)},className:"form-control",value:b,name:"person"}))),l.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return U(!G)}},"Cancel")," \xa0",l.a.createElement("button",{type:"submit",className:"btn btn-primary pl-4 pr-4"},"Submit")))),l.a.createElement(y.a,{isOpen:q,toggle:function(){return V(!q)}},l.a.createElement(_.a,{toggle:function(){return V(!q)}},"Change Password"),l.a.createElement(k.a,null,l.a.createElement("center",{className:"h5",style:{color:"green"}},"Check Your Email for OTP"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={};a.username=b,a.password=L,a.OTP=F,w.a.post(g.a+"/passwordchange",a).then((function(){V(!q)})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"form-label col-12"},"OTP"),l.a.createElement("div",{className:"col-12"},l.a.createElement("input",{type:"text",required:!0,onChange:X,className:"form-control",value:F,name:"otp"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"form-label col-12"},"New password"),l.a.createElement("div",{className:"col-12"},l.a.createElement("input",{type:"text",required:!0,onChange:X,className:"form-control",value:L,name:"pwd"}))),l.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return V(!q)}},"Cancel")," \xa0",l.a.createElement("button",{type:"submit",className:"btn btn-primary pl-4 pr-4"},"Submit")))))},M=function(e){e?w.a.defaults.headers.common["X-Access-Token"]=e:delete w.a.defaults.headers.common["X-Access-Token"]};localStorage.token&&M(localStorage.token);var K=function(){var e=Object(n.useContext)(m),a=e.user,t=e.token;return l.a.createElement(n.Fragment,null,null===a||null===t?l.a.createElement(U,null):l.a.createElement(G,null))},q=t(10),V=t.n(q),H=function(e,a){switch(a.type){case"LOGIN_SUCCESS":return localStorage.setItem("token",a.payload.token),localStorage.setItem("user",a.payload.username),Object(h.a)({},e,{token:a.payload.token,user:a.payload.username,loading:!1});case"LOGIN_FAIL":return localStorage.removeItem("token"),localStorage.removeItem("user"),Object(h.a)({},e,{token:null,loading:!1,user:null,error:a.payload});case"LOGOUT":return localStorage.removeItem("token"),localStorage.removeItem("user"),Object(h.a)({},e,{token:null,loading:!1,user:null,error:null});case"CLEAR_ERRORS":return Object(h.a)({},e,{error:null});default:return e}},X=function(e){var a={token:localStorage.getItem("token"),loading:!0,user:localStorage.getItem("user"),error:null},t=Object(n.useReducer)(H,a),r=Object(o.a)(t,2),c=r[0],s=r[1];return l.a.createElement(m.Provider,{value:{token:c.token,loading:c.loading,user:c.user,error:c.error,login:function(e){var a,t;return V.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a={headers:{"Content-Type":"application/json"}},n.prev=1,n.next=4,V.a.awrap(w.a.post(g.a+"/validateuser",e,a));case 4:"student"===(t=n.sent).data.type?(s({type:"LOGIN_SUCCESS",payload:Object(h.a)({},e,{token:t.data.token})}),localStorage.token&&M(localStorage.token)):s({type:"LOGIN_FAIL",payload:"UnAuthorized access. Repeated trials will blacklist your account."}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),s({type:"LOGIN_FAIL",payload:n.t0.response.data.msg});case 11:case"end":return n.stop()}}),null,null,[[1,8]])},logout:function(){return s({type:"LOGOUT"})},clearErrors:function(){return s({type:"CLEAR_ERRORS"})}}},e.children)},Y=function(e,a){switch(a.type){case"SET_ALERT":return a.payload;case"REMOVE_ALERT":return null;default:return e}},z=function(e){var a=Object(n.useReducer)(Y,null),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(S.Provider,{value:{alerts:r,setAlert:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;c({type:"SET_ALERT",payload:e}),setTimeout((function(){c({type:"REMOVE_ALERT"})}),a)}}},e.children)},B=function(e,a){switch(a.type){case"GET_EVENTS":return Object(h.a)({},e,{events:a.payload,events_loading:!1,events_error:null});case"EVENTS_FAIL":return Object(h.a)({},e,{events_error:a.payload,events_loading:!1});case"GET_PROFILE":return Object(h.a)({},e,{profile:a.payload,profile_loading:!1,profile_error:null});case"PROFILE_FAIL":return Object(h.a)({},e,{profile_error:a.payload,profile_loading:!1});case"GET_TASKS":return Object(h.a)({},e,{tasks:a.payload,tasks_loading:!1,tasks_error:null});case"TASKS_FAIL":return Object(h.a)({},e,{tasks_error:a.payload,tasks_loading:!1});case"GET_SCORE":return Object(h.a)({},e,{score:a.payload,score_loading:!1,score_error:null});case"SCORE_FAIL":return Object(h.a)({},e,{score_error:a.payload,score_loading:!1});case"GET_ASSESSMENTS":return Object(h.a)({},e,{assessments:a.payload,assessments_loading:!1,assessments_error:null});case"ASSESSMENTS_FAIL":return Object(h.a)({},e,{assessments_error:a.payload,assessments_loading:!1});case"GET_ATTENDANCE":return Object(h.a)({},e,{attendance:a.payload,attendance_loading:!1,attendance_error:null});case"ATTENDANCE_FAIL":return Object(h.a)({},e,{attendance_error:a.payload,attendance_loading:!1});case"GET_COURSES":return Object(h.a)({},e,{courses:a.payload,courses_loading:!1,courses_error:null});case"COURSES_FAIL":return Object(h.a)({},e,{courses_error:a.payload,courses_loading:!1});case"GET_NOTIFICATIONS":return Object(h.a)({},e,{notifications:a.payload,notifications_loading:!1,notifications_error:null});case"NOTIFICATINOS_FAIL":return Object(h.a)({},e,{notifications_error:a.payload,notifications_loading:!1});default:return e}},J=function(e){var a=Object(n.useReducer)(B,{events:null,profile:null,tasks:null,score:null,assessments:null,attendance:null,courses:null,notifications:null,events_loading:!0,profile_loading:!0,tasks_loading:!0,score_loading:!0,assessments_loading:!0,attendance_loading:!0,courses_loading:!0,notifications_loading:!0,events_error:null,profile_error:null,tasks_error:null,score_error:null,assessments_error:null,attendance_error:null,courses_error:null,notifications_error:null}),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(i.Provider,{value:{events:r.events,profile:r.profile,tasks:r.tasks,score:r.score,assessments:r.assessments,attendance:r.attendance,courses:r.courses,notifications:r.notifications,events_loading:r.events_loading,profile_loading:r.profile_loading,tasks_loading:r.tasks_loading,score_loading:r.score_loading,assessments_loading:r.assessments_loading,attendance_loading:r.attendance_loading,courses_loading:r.courses_loading,notifications_loading:r.notifications_loading,events_error:r.events_error,profile_error:r.profile_error,tasks_error:r.tasks_error,score_error:r.score_error,assessments_error:r.assessments_error,attendance_error:r.attendance_error,courses_error:r.courses_error,notifications_error:r.notifications_error,getEvents:function(){var e;return V.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.a.awrap(w.a.get(g.a+"/getallevents"));case 3:e=a.sent,c({type:"GET_EVENTS",payload:e.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:"EVENTS_FAIL",payload:a.t0});case 10:case"end":return a.stop()}}),null,null,[[0,7]])},getProfile:function(){var e;return V.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.a.awrap(w.a.get(g.a+"/studentprofiledetails?rollNo="+localStorage.getItem("user")));case 3:e=a.sent,c({type:"GET_PROFILE",payload:e.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:"PROFILE_FAIL",payload:a.t0});case 10:case"end":return a.stop()}}),null,null,[[0,7]])},getTasks:function(){var e;return V.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.a.awrap(w.a.get(g.a+"/alltasks?rollNo="+localStorage.getItem("user")));case 3:e=a.sent,c({type:"GET_TASKS",payload:e.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:"TASKS_FAIL",payload:a.t0});case 10:case"end":return a.stop()}}),null,null,[[0,7]])},getScore:function(){var e;return V.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.a.awrap(w.a.get(g.a+"/allscores?rollNo="+localStorage.getItem("user")));case 3:e=a.sent,c({type:"GET_SCORE",payload:e.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:"SCORE_FAIL",payload:a.t0});case 10:case"end":return a.stop()}}),null,null,[[0,7]])},getAssessments:function(){var e;return V.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.a.awrap(w.a.get(g.a+"/allassessments"));case 3:e=a.sent,c({type:"GET_ASSESSMENTS",payload:e.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:"ASSESSMENTS_FAIL",payload:a.t0});case 10:case"end":return a.stop()}}),null,null,[[0,7]])},getAttendance:function(){var e;return V.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.a.awrap(w.a.get(g.a+"/studentattendance?rollNo="+localStorage.getItem("user")));case 3:e=a.sent,c({type:"GET_ATTENDANCE",payload:e.data.dates}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:"ATTENDANCE_FAIL",payload:a.t0});case 10:case"end":return a.stop()}}),null,null,[[0,7]])},getCourses:function(){var e;return V.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.a.awrap(w.a.get(g.a+"/getallcourses"));case 3:e=a.sent,c({type:"GET_COURSES",payload:e.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:"COURSES_FAIL",payload:a.t0});case 10:case"end":return a.stop()}}),null,null,[[0,7]])},getNotifications:function(){var e;return V.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.a.awrap(w.a.get(g.a+"/getallnotifications"));case 3:e=a.sent,c({type:"GET_NOTIFICATIONS",payload:e.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:"NOTIFICATINOS_FAIL",payload:a.t0});case 10:case"end":return a.stop()}}),null,null,[[0,7]])}}},e.children)},Q=(t(84),function(){return l.a.createElement(X,null,l.a.createElement(z,null,l.a.createElement(J,null,l.a.createElement(s.a,null,l.a.createElement(K,null)))))});t(85),t(86),t(87),t(88);c.a.render(l.a.createElement(Q,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0e253b5d.chunk.js.map