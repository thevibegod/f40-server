(this["webpackJsonpf40-erp"]=this["webpackJsonpf40-erp"]||[]).push([[0],{5:function(e,t){e.exports="http://localhost:3000"},63:function(e,t,a){e.exports=a(99)},99:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=a(18),s=a(35),i=a(7),m=a(8),u=a(10),d=a(9),p=a(11),E=a(6),f=a.n(E),h=a(101),g=a(109),b=a(105),y=a(102);function v(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),l.a.createElement("p",null,"Loading....")))}var x=a(5),k=a.n(x),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={username:"",password:"",loading:!1,incorrect:!1},a.handleChange=function(e){"text"===e.target.type?a.setState({username:e.target.value}):a.setState({password:e.target.value})},a.submit=function(e){e.preventDefault(),a.setState({loading:!0}),f.a.post(k.a+"/validateuser",{username:a.state.username,password:a.state.password}).then((function(e){e.data.success?(a.props.cookies.set("user",a.state.username),a.props.cookies.set("token",e.data.token),a.props.handleLogin(a.state.username,e.data.token)):a.setState({loading:!1,incorrect:!0})})).catch((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.loading?l.a.createElement("div",null,l.a.createElement(h.a,{className:"d-none d-md-block"},l.a.createElement("center",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"images.jpeg",alt:"KCT",style:{float:"left",width:"150px"}}),l.a.createElement("img",{src:"ece_logo.png",alt:"ECE",style:{float:"right",width:"150px"}}),l.a.createElement("h1",null,"Department of Electronics & Communication Engineering"),l.a.createElement("h2",null,"Kumaraguru College of Technology")))),l.a.createElement(h.a,{className:"d-block d-md-none"},l.a.createElement("center",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"images.jpeg",alt:"KCT",style:{float:"left",width:"50px"}}),l.a.createElement("h1",{style:{float:"left"}}," \xa0KCT"),l.a.createElement("img",{src:"ece_logo.png",alt:"ECE",style:{float:"right",width:"75px"}}),l.a.createElement("h1",{style:{float:"right"}},"ECE "),l.a.createElement("h3",{style:{clear:"both"}},"Student Portal - Log in")))),l.a.createElement("center",null,l.a.createElement(v,null))):l.a.createElement("div",null,l.a.createElement(h.a,{className:"d-none d-md-block"},l.a.createElement("center",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"images.jpeg",alt:"KCT",style:{float:"left",width:"150px"}}),l.a.createElement("img",{src:"ece_logo.png",alt:"ECE",style:{float:"right",width:"150px"}}),l.a.createElement("h1",null,"Department of Electronics & Communication Engineering"),l.a.createElement("h2",null,"Kumaraguru College of Technology")))),l.a.createElement(h.a,{className:"d-block d-md-none"},l.a.createElement("center",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"images.jpeg",alt:"KCT",style:{float:"left",width:"50px"}}),l.a.createElement("h1",{style:{float:"left"}}," \xa0KCT"),l.a.createElement("img",{src:"ece_logo.png",alt:"ECE",style:{float:"right",width:"75px"}}),l.a.createElement("h1",{style:{float:"right"}},"ECE"),l.a.createElement("h3",{style:{clear:"both"}},"Student Portal - Log in")))),l.a.createElement("center",null,l.a.createElement(g.a,{shadow:"sm",border:"primary",style:{width:"18rem",alignItems:"center"}},l.a.createElement(g.a.Body,null,l.a.createElement(b.a,{onSubmit:this.submit},l.a.createElement(b.a.Group,{controlId:"loginformusername"},l.a.createElement(b.a.Label,null,"User Name"),l.a.createElement(b.a.Control,{name:"username",type:"text",placeholder:"User name",onChange:this.handleChange})),l.a.createElement(b.a.Group,{controlId:"loginformpassword"},l.a.createElement(b.a.Label,null,"Password"),l.a.createElement(b.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:this.handleChange})),l.a.createElement(y.a,{variant:"primary",type:"submit",block:!0},"Log in"))),this.state.incorrect&&l.a.createElement("div",{class:"alert alert-danger alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,"Login Failed!")," Invalid Username or Password",l.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))))}}]),t}(n.Component),j=a(107),C=a(106),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).killLogin=function(){a.props.cookies.remove("user"),a.props.cookies.remove("token"),a.props.handleLogin(null)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(j.a,{bg:"light",expand:"sm"},l.a.createElement(j.a.Toggle,{"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement(j.a.Collapse,{id:"navbarSupportedContent"},l.a.createElement(C.a,{className:"mr-auto"},l.a.createElement(o.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(o.b,{className:"nav-link",to:"/Profile"},"Profile"),l.a.createElement(o.b,{className:"nav-link",to:"/Tasks"},"Tasks"),l.a.createElement(o.b,{className:"nav-link",to:"/Assessments"},"Assessments"),l.a.createElement(o.b,{className:"nav-link",to:"/AttendanceDetails"},"Attendance"),l.a.createElement(o.b,{className:"nav-link",to:"/Notifications"},"Notifications"),l.a.createElement(o.b,{className:"nav-link",to:"/Courses"},"Courses"))),l.a.createElement("span",{className:"navbar-text mr-2"},"Hi ",this.props.username," !"),l.a.createElement(o.b,{className:"btn btn-outline-danger",to:"/",onClick:this.killLogin},"Logout"))}}]),t}(l.a.Component);function O(e){var t=e.item;return t.imgURL?l.a.createElement(g.a,{style:{width:450,margin:10}},l.a.createElement(g.a.Img,{variant:"top",src:t.imgURL,alt:"no-img",width:"400px",height:"250px"}),l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Title,null,t.title),l.a.createElement(g.a.Text,null," ",t.desc))):l.a.createElement(g.a,{style:{margin:"10px"}},l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Title,{style:{textAlign:"center"}},t.title),l.a.createElement("marquee",{scrollamount:"10"},l.a.createElement(g.a.Text,null," ",t.desc))))}var S=a(103),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){var e=[],t={"Content-Type":"application/json","X-Access-Token":a.props.token};f.a.get(k.a+"/getallevents",{headers:t}).then((function(e){return console.log(e),a.setState({data:e.data,loading:!0}),Promise.all(e.data.map((function(e){return fetch(k.a+"/eventpicture?title=".concat(e.title),{headers:t})})))})).then((function(e){return Promise.all(e.map((function(e){return e.blob()})))})).then((function(t){e=a.state.data,t.forEach((function(t,a){e[a].imgURL=URL.createObjectURL(t)}))})).then((function(){return a.setState({data:e,loading:!1})})).catch((function(e){return console.log(e)}))},a.state={data:[],loading:!0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.loading?l.a.createElement(v,null):l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h1",null,"Events")),l.a.createElement(S.a,{style:{justifyContent:"center"}},this.state.data.map((function(e){return console.log(e),l.a.createElement(O,{item:e,key:e.uid})}))))}}]),t}(l.a.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={profileDetails:{},profilePicture:{},profileLoading:!0,profilePictureLoading:!0},a.Achievements=function(e){return void 0===e||0===e.length?null:l.a.createElement(g.a,{className:"col-12"},l.a.createElement("div",null,l.a.createElement("b",null,"Achievements"),l.a.createElement("ol",null,e.map((function(e){return l.a.createElement("li",null,e)})))))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={"Content-Type":"application/json","X-Access-Token":this.props.token};f.a.get(k.a+"/studentprofiledetails?rollNo=".concat(this.props.user),{headers:t}).then((function(t){return e.setState({profileDetails:t.data,profileLoading:!1})})).then((function(){return fetch(k.a+"/studentprofilepicture?rollNo=".concat(e.props.user),{headers:t})})).then((function(e){return e.blob()})).then((function(t){return e.setState({profilePicture:URL.createObjectURL(t),profilePictureLoading:!1})})).catch((function(e){throw e}))}},{key:"render",value:function(){return this.state.profileDetails||this.state.profileLoading?l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h1",null,"My Profile")),l.a.createElement("div",{className:"row justify-content-center",style:{border:"1px solid black",margin:"10px",padding:"5px"}},l.a.createElement("div",{className:"col-12 col-md-6"},this.state.profilePictureLoading?l.a.createElement(v,null):l.a.createElement("center",null,l.a.createElement("img",{className:"card-img rounded-circle top",style:{width:"250px",height:"300px"},src:this.state.profilePicture,alt:this.state.profileDetails.name}))),l.a.createElement("div",{className:"col-10 offset-2 col-md-5 offset-md-1"},this.state.profileLoading?l.a.createElement(v,null):l.a.createElement("div",null,l.a.createElement("p",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("b",null,"Name: "),this.state.profileDetails.name),l.a.createElement("p",null,l.a.createElement("b",null,"RollNo:"),this.state.profileDetails.rollNo),l.a.createElement("p",null,l.a.createElement("b",null,"Batch:"),this.state.profileDetails.batch),l.a.createElement("p",null,l.a.createElement("b",null,"Email:"),this.state.profileDetails.mailId)))),l.a.createElement("div",{className:"row justify-content-cente",style:{border:"1px solid black",margin:"10px",padding:"5px"}},l.a.createElement(g.a,{className:"col-12 col-md-6"},this.state.profileLoading?l.a.createElement("div",null,l.a.createElement("h3",null,"Student Mentor Details"),l.a.createElement(v,null)):l.a.createElement("div",null,l.a.createElement("h3",null,"Student Mentor Details"),l.a.createElement("p",null,l.a.createElement("b",null,"Name:"),this.state.profileDetails.studentMentorName),l.a.createElement("p",null,l.a.createElement("b",null,"Email:"),this.state.profileDetails.studentMentorMail),l.a.createElement("p",null,l.a.createElement("b",null,"Contact No.:"),this.state.profileDetails.studentMentorPhone))),l.a.createElement(g.a,{className:"col-12 col-md-6"},this.state.profileLoading?l.a.createElement("div",null,l.a.createElement("h3",null,"Faculty Mentor Details"),l.a.createElement(v,null)):l.a.createElement("div",null,l.a.createElement("h3",null,"Faculty Mentor Details"),l.a.createElement("p",null,l.a.createElement("b",null,"Name:"),this.state.profileDetails.facultyMentorName),l.a.createElement("p",null,l.a.createElement("b",null,"Email:"),this.state.profileDetails.facultyMentorMail),l.a.createElement("p",null,l.a.createElement("b",null,"Contact No.:"),this.state.profileDetails.facultyMentorPhone)))),l.a.createElement("div",{className:"row justify-content-center",style:{border:"1px solid black",margin:"10px",padding:"5px"}},this.Achievements(this.state.profileDetails.achievements))):l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h1",null,"My Profile")),l.a.createElement("div",{className:"alert alert-danger"},"No Profile Data found"))}}]),t}(l.a.Component),D=a(62),A=a(108),P=(a(90),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={task_data:{},isLoading:!0,file:null,feedback:"",fileName:"",topic:"",taskType:""},a.checkAttachments=function(e,t,n){if((r=e.filter((function(e){return e.rollNo===a.props.user}))).length){var r=r[0];return l.a.createElement("form",{onSubmit:a.handleSubmitClear},l.a.createElement("input",{type:"hidden",name:"taskType",value:t}),l.a.createElement("input",{type:"hidden",name:"topic",value:n}),l.a.createElement("div",{className:"row form-group"},l.a.createElement("div",{className:"col-12 col-md-2"},l.a.createElement("b",{style:{padding:"25px 0px",margin:"0px",fontSize:"20px",textShadow:"1px 1px gray"}},"Attachment : ")),l.a.createElement("div",{className:"col-12 col-md-10",style:{padding:"0px 25px"}},l.a.createElement("div",{className:"row",style:{border:"1px solid gray",borderRadius:"5px"}},l.a.createElement("a",{href:k.a+r.attachmentId,className:"col-10 col-md-11",style:{padding:"5px 10px",textDecoration:"none",backgroundColor:"#dbd9d9"},target:"_blank"},r.attachmentId.slice(7)),l.a.createElement("button",{type:"submit",name:"submit",className:"btn btn-secondary col-2 col-md-1"},"\xd7")))),l.a.createElement("div",{className:"row form-group"},l.a.createElement("div",{className:"col-12 col-md-2"},l.a.createElement("b",{style:{padding:"25px 0px",margin:"0px",fontSize:"20px",textShadow:"1px 1px gray"}},"Feedback : ")),l.a.createElement("div",{className:"col-12 col-md-10",style:{fontSize:"20px"}},r.feedback)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-3 offset-md-2"},l.a.createElement("button",{type:"submit",name:"submit",className:"btn btn-primary btn-block"},"Unsubmit"))))}return l.a.createElement("form",{onSubmit:a.handleSubmit},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{style:{padding:"2px",fontWeight:"bold",fontSize:"20px",textShadow:"1px 1px gray"},id:"file",className:"col-12 col-md-2 form-label"},"Attachment : "),l.a.createElement("div",{className:"col-12 col-md-10"},l.a.createElement("input",{type:"file",style:{border:"1px solid #dedede",padding:"2px"},className:"form-control-file",name:"attachment",id:"file",onChange:a.onChange,required:!0}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{style:{padding:"2px",fontWeight:"bold",fontSize:"20px",textShadow:"1px 1px gray"},id:"feedback",className:"col-12 col-md-2 form-label"},"Feedback : "),l.a.createElement("div",{className:"col-12 col-md-10"},l.a.createElement("input",{type:"text",name:"feedback",id:"feedback",className:"form-control",onChange:a.handleChange,required:!0}))),l.a.createElement("input",{type:"hidden",name:"taskType",value:t}),l.a.createElement("input",{type:"hidden",name:"topic",value:n}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-3 offset-md-2"},l.a.createElement("button",{type:"submit",name:"submit",className:"btn btn-primary btn-block"},"Submit"))))},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.onChange=function(e){e.target.files[0];a.setState({file:e.target.files[0]})},a.handleSubmit=function(e){var t={"Content-Type":"multipart/form-data","X-Access-Token":a.props.token};e.preventDefault();var n=new FormData(e.target);f.a.post(k.a+"/uploadtask?rollNo="+a.props.user,n,{headers:t}).then((function(e){return console.log(e)})),setTimeout((function(){window.location.reload(!1)}),3e3)},a.handleSubmitClear=function(e){var t={"Content-Type":"application/x-www-form-urlencoded","X-Access-Token":a.props.token};e.preventDefault();var n=new FormData(e.target);f.a.post(k.a+"/uploadtask?rollNo="+a.props.user+"&clear=true",n,{headers:t}).then((function(e){return console.log(e)})),setTimeout((function(){window.location.reload(!1)}),3e3)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={"Content-Type":"application/json","X-Access-Token":this.props.token};f.a.get(k.a+"/alltasks",{headers:t}).then((function(t){return e.setState({task_data:t.data,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return this.state.isLoading?l.a.createElement(v,null):l.a.createElement(A.a,{className:"container"},l.a.createElement("center",null,l.a.createElement("h2",null,"Tasks")),this.state.task_data.map((function(t){return l.a.createElement("div",{className:"row",style:{border:"1px solid #3f99d9",margin:"10px",borderRadius:"5px",boxShadow:"0px 0px 2px 2px #57ebe4"}},l.a.createElement("div",{className:"col-12",style:{padding:"0px",margin:"0px"}},l.a.createElement(A.a.Toggle,{as:y.a,className:"col-12",eventKey:t._id,style:{fontSize:"20px"}},l.a.createElement("p",{style:{float:"left"}},l.a.createElement("b",{style:{color:"black"}},"Topic : "),t.topic),l.a.createElement("p",{style:{float:"right",padding:"10px 20px"},className:"badge badge-light"},t.taskType[0].toUpperCase()+t.taskType.slice(1)),l.a.createElement("p",{style:{clear:"both"}}),l.a.createElement("p",{style:{float:"left"}},l.a.createElement("b",{style:{color:"black"}},"Uploaded at : "),l.a.createElement("span",{style:{color:"#1a4f0d"}},t.uploadTime)),l.a.createElement("p",{style:{float:"right"}},l.a.createElement("b",{style:{color:"black"}},"Deadline : "),l.a.createElement("span",{style:{color:"#87000b"}},t.deadline)))),l.a.createElement(A.a.Collapse,{eventKey:t._id,className:"col-12",style:{padding:"10px",margin:"5px"}},l.a.createElement("div",{className:"col-12"},e.checkAttachments(t.attachments,t.taskType,t.topic))))})))}}]),t}(l.a.Component)),z=a(17);function M(e){var t=e.token,a=Object(n.useState)([]),r=Object(z.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(!0),i=Object(z.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){var e={"Content-Type":"application/json","X-Access-Token":t};f.a.get(k.a+"/allassessments",{headers:e}).then((function(e){o(e.data),u(!1)}))}),[]),m?l.a.createElement(v,null):l.a.createElement("div",{className:"container",style:_},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h1",null,"Assessments"))),l.a.createElement("div",{className:"row"},c.map((function(e){return l.a.createElement("div",{className:"col-12",style:{backgroundColor:"#d2d3d4",border:"1px solid blue",padding:"10px",borderRadius:"10px",margin:"5px"}},l.a.createElement("p",{style:{float:"left"}},l.a.createElement("b",{style:{padding:"2px",fontSize:"20px",textShadow:"1px 1px gray"}},"Topic:"),e.topic),l.a.createElement("p",{style:{float:"right",padding:"10px 20px",fontSize:"17px",borderRadius:"5px"},className:"badge badge-info"},e.assessmentType[0].toUpperCase()+e.assessmentType.slice(1)),l.a.createElement("p",{style:{clear:"both"}}),l.a.createElement("p",{className:"text-center"},l.a.createElement("b",null,"Link:"),l.a.createElement("a",{href:e.link},e.link)))}))))}var _={fontFamily:"Helvetica",fontSize:"20px"};function K(e){var t=e.token,a=Object(n.useState)([]),r=Object(z.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(!0),i=Object(z.a)(s,2),m=i[0],u=i[1],d={"Content-Type":"application/json","X-Access-Token":t};return Object(n.useEffect)((function(){f.a.get(k.a+"/getallnotifications",{headers:d}).then((function(e){o(e.data),u(!1)}))}),[]),m?l.a.createElement(v,null):l.a.createElement("div",{style:R},l.a.createElement("center",null,l.a.createElement("h1",null,"Notifications")),l.a.createElement("div",null,c.map((function(e){return l.a.createElement(O,{item:e,key:e._id})}))))}var R={fontFamily:"Helvetica",fontSize:"20px"};function U(e){var t=e.token,a=Object(n.useState)([]),r=Object(z.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(!0),i=Object(z.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){var e={"Content-Type":"application/json","X-Access-Token":t};f.a.get(k.a+"/getallcourses",{headers:e}).then((function(e){console.log(e.data),o(e.data),u(!1)}))}),[]),m?l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",null,"Courses")),l.a.createElement(v,null)):l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h1",null,"Courses")),l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h2",null,"Here are some courses recommended for you")),l.a.createElement(A.a,{className:"container"},c.map((function(e){return l.a.createElement("div",{className:"row",style:{border:"1px solid #3f99d9",margin:"10px",borderRadius:"5px",boxShadow:"0px 0px 2px 2px #57ebe4"}},l.a.createElement("div",{className:"col-12",style:{padding:"0px",margin:"0px"}},l.a.createElement(A.a.Toggle,{as:y.a,eventKey:e._id,className:"col-12",style:{fontSize:"20px",padding:"15px"}},l.a.createElement("p",{style:{float:"left"}},e.title),l.a.createElement("p",{className:"badge badge-success",style:{float:"right",fontSize:"20px",padding:"10px 20px",backgroundColor:"#34e02b"}},e.price))),l.a.createElement(A.a.Collapse,{eventKey:e._id,className:"col-12",style:{padding:"10px",margin:"5px"}},l.a.createElement("div",{className:"col-12"},l.a.createElement("p",{style:{textAlign:"justify",padding:"2px",fontWeight:"bold",fontSize:"25px"}},"Description : "),l.a.createElement("p",null,e.desc),l.a.createElement("p",{style:{padding:"2px",fontWeight:"bold",fontSize:"25px"}},"Financial Aid available :  ","Yes"===e.financialaid?l.a.createElement("span",{style:{color:"green"}},"Yes"):"No"===e.financialaid?l.a.createElement("span",{style:{color:"red"}},"No"):l.a.createElement("span",{style:{color:"#deed05"}},"Not Required")," "),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"#99087c",color:"white",fontSize:"20px"},className:"btn btn-block"},"Go to Course"))))})))))}var F=a(104);function I(e){var t=e.user,a=e.token,r=Object(n.useState)([]),c=Object(z.a)(r,2),o=c[0],s=c[1],i=Object(n.useState)(!0),m=Object(z.a)(i,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e={"Content-Type":"application/json","X-Access-Token":a};f.a.get(k.a+"/studentattendance?rollNo=".concat(t),{headers:e}).then((function(e){s(e.data.dates),d(!1)}))}),[]),u?l.a.createElement(v,null):l.a.createElement("div",{className:"container",style:X},l.a.createElement("center",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("h1",null,"Attendance")),l.a.createElement(F.a,{size:!0,bordered:!0,className:"col-10 offset-1"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Present/Absent"))),l.a.createElement("tbody",null,o.map((function(e){return e.value?l.a.createElement("tr",{style:{backgroundColor:"rgba(0,255,0,0.2)"}},l.a.createElement("td",null,e.date),l.a.createElement("td",null,"P")):l.a.createElement("tr",{style:{backgroundColor:"rgba(255,0,0,0.2)"}},l.a.createElement("td",null,e.date),l.a.createElement("td",null,"A"))}))))))}var X={fontFamily:"Helvetica",fontSize:"20px"};function H(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Error 404")),l.a.createElement("div",null,l.a.createElement("p",null,"The page you are looking for doesn't exists."))))}var B=a(24),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={user:a.props.user},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{margin:"0",padding:"0"}},l.a.createElement(w,{className:"navbar",username:this.props.user,handleLogin:this.props.handleLogin,cookies:this.props.cookies}),l.a.createElement(h.a,{className:"d-none d-md-block"},l.a.createElement("center",null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"images.jpeg",alt:"KCT",style:{float:"left",width:"150px"}}),l.a.createElement("img",{src:"ece_logo.png",alt:"ECE",style:{float:"right",width:"150px"}}),l.a.createElement("h1",null,"Department of Electronics & Communication Engineering"),l.a.createElement("h2",null,"Kumaraguru College of Technology")))),l.a.createElement(B.c,null,l.a.createElement(B.a,{exact:!0,path:"/",component:function(){return l.a.createElement(T,{user:e.state.user,token:e.props.token})}}),l.a.createElement(B.a,{exact:!0,path:"/Profile",component:function(){return l.a.createElement(L,{user:e.state.user,token:e.props.token})}}),l.a.createElement(B.a,{exact:!0,path:"/AttendanceDetails",component:function(){return l.a.createElement(I,{user:e.state.user,token:e.props.token})}}),l.a.createElement(B.a,{exact:!0,path:"/Tasks",component:function(){return l.a.createElement(P,{user:e.state.user,token:e.props.token})}}),l.a.createElement(B.a,{exact:!0,path:"/Assessments",component:function(){return l.a.createElement(M,{token:e.props.token})}}),l.a.createElement(B.a,{exact:!0,path:"/Notifications",component:function(){return l.a.createElement(K,{user:e.state.user,token:e.props.token})}}),l.a.createElement(B.a,{exact:!0,path:"/Courses",component:function(){return l.a.createElement(U,{token:e.props.token})}}),l.a.createElement(B.a,{component:H})))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleLogin=function(e,t){a.setState({user:e,token:t})},e.cookies.get("user")&&e.cookies.get("token")?a.state={user:e.cookies.get("user"),token:e.cookies.get("token")}:a.state={user:null,token:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.user?l.a.createElement(q,{user:this.state.user,token:this.state.token,handleLogin:this.handleLogin,cookies:this.props.cookies}):l.a.createElement("div",null,l.a.createElement(N,{cookies:this.props.cookies,handleLogin:this.handleLogin}))}}]),t}(n.Component),G=Object(s.b)(W);a(94),a(95),a(96);c.a.render(l.a.createElement(s.a,null,l.a.createElement(o.a,null,l.a.createElement(G,null))),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5d17cfa7.chunk.js.map