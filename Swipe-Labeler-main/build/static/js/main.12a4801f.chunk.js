(this["webpackJsonpswipe-labeler"]=this["webpackJsonpswipe-labeler"]||[]).push([[0],{123:function(e,t,i){},172:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i(0),a=i.n(s),o=i(7),c=i.n(o),r=(i(123),i(10)),l=i(11),u=i(2),d=i(13),h=i(12),p=(i(21),i(175)),b=i(26),j=i(20),m=i.n(j);function g(e){var t=Object(s.useState)(1),i=Object(b.a)(t,2),a=i[0],o=i[1];return setTimeout((function(){return o(a+1)}),1e3),Object(s.useEffect)((function(){return function(){document.cookie="swipeTime="+a}})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("strong",{children:a})})}i(22),i(23),i(24);var f=i(32),k=i(56),S=i.n(k),O=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).onSwipe=function(e){n.setState({loading:!0}),"right"===e?n.props.onAcceptClick():"left"===e?n.props.onRejectClick():"down"===e&&n.props.onSkipClick()},n.onKeyPress=function(e){"ArrowRight"===e.key?n.props.onAcceptClick():"ArrowLeft"===e.key?n.props.onRejectClick():"ArrowDown"===e.key&&n.props.onSkipClick()},n.state={batchTotal:n.props.batch_size},n.decideCountText=n.decideCountText.bind(Object(u.a)(n)),n.onSwipe=n.onSwipe.bind(Object(u.a)(n)),n.onKeyPress=n.onKeyPress.bind(Object(u.a)(n)),n}return Object(l.a)(i,[{key:"componentWillMount",value:function(){document.addEventListener("keyup",this.onKeyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onKeyPress)}},{key:"decideCountText",value:function(){var e;return e=this.props.imagesLeft,this.props.imagesLeft>this.props.batch_size&&(e=this.props.batch_size),0==e?["Last Image!",this.props.noOfSwipes/this.props.batchStop]:[1!==e?e+" Images Left!":e+" Image Left!",this.props.noOfSwipes/this.props.batchStop]}},{key:"detectMob",value:function(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((function(e){return navigator.userAgent.match(e)}))}},{key:"decideImgRender",value:function(){return this.detectMob()?Object(n.jsx)(m.a,{onSwipe:this.onSwipe,preventSwipe:["right","left","down","up"],children:Object(n.jsx)("img",{src:this.props.image,alt:""})}):Object(n.jsx)(m.a,{onSwipe:this.onSwipe,preventSwipe:["right","left","down","up"],children:Object(n.jsx)(f.b,{options:{centerContent:!0},defaultPositionX:50,children:Object(n.jsx)(f.a,{children:Object(n.jsx)("img",{src:this.props.image,alt:""})})})})}},{key:"render",value:function(){var e=this.decideCountText(),t=Object(b.a)(e,2),i=t[0],s=t[1],a=this.decideImgRender();new S.a(".clipboard");return Object(n.jsxs)(n.Fragment,{children:[console.log("swipscreen props= ",this.props),Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"count",children:[Object(n.jsx)("div",{className:"timer",children:Object(n.jsx)(g,{})}),Object(n.jsxs)("div",{className:"ct-grp",children:[Object(n.jsxs)("span",{children:["Labeled ",this.props.labeledSize," out of"," ",this.props.batch_size+this.props.labeledSize+1]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:i}),console.log("x= ",s),Object(n.jsx)("br",{})]}),Object(n.jsxs)("div",{className:"button-grp",children:[Object(n.jsxs)(p.a,{className:"quit-button",intent:"danger",onClick:this.props.onQuitClick,small:!0,children:[Object(n.jsx)(p.b,{icon:"cross",iconSize:20,intent:"danger"})," "]}),Object(n.jsx)(p.a,{id:"share-button",className:"clipboard","data-clipboard-target":"#blank","data-clipboard-text":window.location.href,intent:"primary",small:!0,onClick:function(){return alert("Link copied to clipboard!")},children:Object(n.jsx)(p.b,{icon:"share",iconSize:20})})]})]})}),Object(n.jsxs)("div",{id:"#SwipeScreen",className:"Content",children:[Object(n.jsxs)("div",{className:"Image_wrapper",children:[Object(n.jsx)("div",{className:"prog-bar",children:Object(n.jsx)(p.c,{intent:"success",value:s})}),a]}),Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("input",{type:"text",id:"blank",value:window.location.href}),Object(n.jsx)(p.a,{icon:"remove",className:"AcceptRejectButton",intent:"danger",onClick:this.props.onSkipClick,children:"Skip"}),Object(n.jsx)(p.a,{icon:"tick",className:"AcceptRejectButton",intent:"success",onClick:this.props.onAcceptClick,children:"Accept"}),Object(n.jsx)(p.a,{icon:"small-cross",className:"AcceptRejectButton",intent:"primary",onClick:this.props.onRejectClick,children:"Reject"}),Object(n.jsx)(p.a,{icon:"undo",disabled:this.props.undoHappened,className:"BackButton",onClick:this.props.onBackClick,children:"Undo"})]})]})]})}}]),i}(a.a.Component),v=i.p+"static/media/moon.8ddbc237.jpg",w=i.p+"static/media/flag.d9b1a692.jpg",x=i.p+"static/media/earthrise.38b5ac31.jpg",C=i.p+"static/media/astronaut.0005e707.jpg",y=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).onTutorialKeyPress=function(e){"ArrowRight"===e.key?n.onTutorialAcceptClick():"ArrowLeft"===e.key?n.onTutorialRejectClick():"ArrowDown"===e.key&&n.onTutorialSkipClick()},n.state={prevLabel:null,tutorialIndex:0,tutorialImages:[v,x,w],tutorialMessages:[{title:"Welcome to the Swipe Labeler tool.",caption:'You can label images in three ways. First click "Accept", "Reject" or "Skip" to continue.'},{caption:"Now try swiping the image left,right, or downwards!."},{caption:"Now try a keyboard shortcut. Press your arrow left key,arrow right key, or your arrow down key on your keybord."}]},n.onTutorialAcceptClick=n.onTutorialAcceptClick.bind(Object(u.a)(n)),n.onTutorialRejectClick=n.onTutorialRejectClick.bind(Object(u.a)(n)),n.onTutorialSkipClick=n.onTutorialSkipClick.bind(Object(u.a)(n)),n.onTutorialSwipe=n.onTutorialSwipe.bind(Object(u.a)(n)),n.onTutorialKeyPress=n.onTutorialKeyPress.bind(Object(u.a)(n)),n}return Object(l.a)(i,[{key:"componentWillMount",value:function(){document.addEventListener("keyup",this.onTutorialKeyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onTutorialKeyPress)}},{key:"onTutorialAcceptClick",value:function(){this.state.tutorialIndex===this.state.tutorialImages.length-1&&this.props.end(),this.setState({prevLabel:"accept",tutorialIndex:this.state.tutorialIndex+1})}},{key:"onTutorialSkipClick",value:function(){this.state.tutorialIndex===this.state.tutorialImages.length-1&&this.props.end(),this.setState({prevLabel:"skip",tutorialIndex:this.state.tutorialIndex+1})}},{key:"onTutorialRejectClick",value:function(){this.state.tutorialIndex===this.state.tutorialImages.length-1&&this.props.end(),this.setState({prevLabel:"reject",tutorialIndex:this.state.tutorialIndex+1})}},{key:"onTutorialSwipe",value:function(e){"right"===e?this.onTutorialAcceptClick():"left"===e?this.onTutorialRejectClick():"down"===e&&this.onTutorialSkipClick()}},{key:"render",value:function(){var e=this.state.tutorialMessages[this.state.tutorialIndex];return Object(n.jsx)("div",{className:"TutorialScreen",children:Object(n.jsxs)("div",{className:"Question",children:[Object(n.jsx)("div",{className:"Image_wrapper",children:Object(n.jsx)(m.a,{onSwipe:this.onTutorialSwipe,preventSwipe:["right","left","down"],children:Object(n.jsx)("div",{className:"TutorialScreen_Question_Image",style:{backgroundImage:"url('"+this.state.tutorialImages[this.state.tutorialIndex]+"')"},children:Object(n.jsxs)("div",{className:"TutorialScreen_Question_Image_Text",children:[Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text_Title",children:e.title}),Object(n.jsx)("div",{className:"TutorialScreen_Question_Image_Text_Caption",children:e.caption})]})})})}),Object(n.jsx)(p.a,{icon:"small-cross",className:"AcceptRejectButton",intent:"primary",onClick:this.onTutorialRejectClick,children:"Reject"}),Object(n.jsx)(p.a,{icon:"remove",className:"AcceptRejectButton",intent:"danger",onClick:this.onTutorialSkipClick,children:"Skip"}),Object(n.jsx)(p.a,{icon:"tick",className:"AcceptRejectButton",intent:"success",onClick:this.onTutorialAcceptClick,children:"Accept"})]})})}}]),i}(a.a.Component),T=i(60),_=i.n(T),I=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={},n.decideContinue=n.decideContinue.bind(Object(u.a)(n)),n}return Object(l.a)(i,[{key:"sendEnd",value:function(){fetch("/end",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ready_to_end:"ready"})})}},{key:"getSwipeTime",value:function(){var e;return decodeURIComponent(document.cookie).split(";").forEach((function(t){t.trim().startsWith("swipeTime")&&(e=t.trim().split("=")[1])})),e}},{key:"decideContinue",value:function(){return this.props.continue?Object(n.jsx)(p.a,{icon:"label",className:"EndScreenButton",intent:"primary",text:!0,onClick:function(){return window.location.reload()},children:"Continue Labelling"}):null}},{key:"render",value:function(){var e=this.decideContinue();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_.a,{}),Object(n.jsxs)("div",{className:"EndScreen",style:{backgroundImage:"url('"+C+"')"},children:[Object(n.jsx)("div",{className:"EndScreen_Text",children:"Mission accomplished! Good job!"}),Object(n.jsxs)("div",{className:"EndScreen_Time_Text",children:["Your labelling time: ",this.getSwipeTime()," seconds..."]}),Object(n.jsxs)("div",{className:"endscreen-btn-grp",children:[e,Object(n.jsx)(p.a,{icon:"stop",className:"EndScreenButton",intent:"danger",onClick:this.sendEnd,children:"Close"})]})]})]})}}]),i}(a.a.Component),R=i(15),z=i.n(R);var B=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={view:document.cookie.split(";").some((function(e){return e.trim().startsWith("hasSeenTutorial=")}))?"active":"tutorial",index:0,image:null,total_batch_size:null,batch_size:null,imgUrls:[],undoUrls:[],undoHappened:!0,swipes:0,noOfSwipes:0,batchStop:0,leftBehind:0,labeledSize:0},n.fetchImage=n.fetchImage.bind(Object(u.a)(n)),n.sendSelection=n.sendSelection.bind(Object(u.a)(n)),n.onAcceptClick=n.onAcceptClick.bind(Object(u.a)(n)),n.onRejectClick=n.onRejectClick.bind(Object(u.a)(n)),n.onSkipClick=n.onSkipClick.bind(Object(u.a)(n)),n.onBackClick=n.onBackClick.bind(Object(u.a)(n)),n.onQuitClick=n.onQuitClick.bind(Object(u.a)(n)),n.endTutorial=n.endTutorial.bind(Object(u.a)(n)),n.setLoading=n.setLoading.bind(Object(u.a)(n)),n.getBatchSize=n.getBatchSize.bind(Object(u.a)(n)),n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){if(window.performance&&1===performance.navigation.type){var e=sessionStorage.getItem("url"),t=sessionStorage.getItem("undo-url");t===e&&(t="none"),console.log("Image url: ",e),console.log("Curr_Image url: ",t),z.a.post("/refresh",{image_url:e,curr_image_url:t}).then((function(e){console.log(e)})).catch((function(e){return console.log("ERROR: ",e)}))}var i=parseInt(sessionStorage.getItem("noOfSwipes"));i||(i=0),this.setState({noOfSwipes:i}),this.getTotalBatchSize(),this.fetchImage()}},{key:"componentDidUpdate",value:function(){"end"===this.state.view?(console.log("reached end"),sessionStorage.setItem("noOfSwipes",0)):(sessionStorage.setItem("undo-url",this.state.curr_image_url),sessionStorage.setItem("url",this.state.image),sessionStorage.setItem("noOfSwipes",this.state.noOfSwipes))}},{key:"getTotalBatchSize",value:function(){var e=this;z.a.get("/getsize").then((function(t){console.log("response = ",t.data.batch_size),e.setState({total_batch_size:t.data.batch_size,batchStop:t.data.batch_stop,imagesLeft:t.data.batch_stop-1},(function(){console.log("got total batch state as: ",e.state.batch_size)}))})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"getBatchSize",value:function(){var e=this;z.a.get("/getsize").then((function(t){console.log("response = ",t.data.batch_size),e.setState({batch_size:t.data.batch_size,labeledSize:t.data.labeled_size},(function(){console.log("got total batch state as: ",e.state.batch_size)}))})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"fetchImage",value:function(){var e,t=this;0!==this.state.leftBehind?(e=this.state.undoUrls.pop(),this.setState({leftBehind:this.state.leftBehind-1})):e="none",z.a.post("/image",{swipes:this.state.swipes+1,image_url:e||"none"}).then((function(e){if("none"===e.data.image)t.setState({view:"end"});else{var i=t.state.imgUrls;i.push(e.data.image);var n=t.state.imgUrls[t.state.index]?t.state.imgUrls[t.state.index]:"none",s=t.state.noOfSwipes+t.state.leftBehind;t.setState({image:e.data.image,imgUrls:i,curr_image_url:n,swipes:s},(function(){console.log("img ",typeof t.state.image),t.getBatchSize()}))}})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"setLoading",value:function(e){console.log("reached "),this.setState({loading:e})}},{key:"sendSelection",value:function(e){fetch("/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_url:this.state.image,value:e})})}},{key:"onAcceptClick",value:function(){var e=this;this.setState({index:this.state.index+1,noOfSwipes:this.state.noOfSwipes+1,swipes:this.state.noOfSwipes+this.state.leftBehind,undoHappened:!1,imagesLeft:this.state.imagesLeft-1},(function(){e.sendSelection(1),e.state.noOfSwipes===e.state.batchStop?e.setState({view:"end"}):e.fetchImage()}))}},{key:"onSkipClick",value:function(){var e=this;this.setState({index:this.state.index+1,noOfSwipes:this.state.noOfSwipes+1,swipes:this.state.noOfSwipes+this.state.leftBehind,undoHappened:!1,imagesLeft:this.state.imagesLeft-1},(function(){e.sendSelection(2),e.state.noOfSwipes===e.state.batchStop?e.setState({view:"end"}):e.fetchImage()}))}},{key:"onRejectClick",value:function(){var e=this;this.setState({index:this.state.index+1,noOfSwipes:this.state.noOfSwipes+1,swipes:this.state.noOfSwipes+this.state.leftBehind,undoHappened:!1,imagesLeft:this.state.imagesLeft-1},(function(){e.sendSelection(0),e.state.noOfSwipes===e.state.batchStop?e.setState({view:"end"}):e.fetchImage()}))}},{key:"onBackClick",value:function(){var e=this,t=this.state.imgUrls,i=this.state.undoUrls;t.push(this.state.imgUrls[this.state.index-1]),i.push(this.state.imgUrls[this.state.index]),z.a.post("/undo",{image_url:this.state.imgUrls[this.state.index-1]}).then((function(n){console.log(n),e.setState({index:e.state.index+1,image:e.state.imgUrls[e.state.index-1],imgUrls:t,undoUrls:i,noOfSwipes:e.state.noOfSwipes-1,leftBehind:e.state.leftBehind+1,undoHappened:!0,imagesLeft:e.state.imagesLeft+1})})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"onQuitClick",value:function(){var e,t,i=this;this.state.undoHappened&&this.state.index?(e=this.state.image,t=this.state.undoUrls[0]):(e=this.state.curr_image_url,t="none"),z.a.post("/quit",{image_url:e,curr_image_url:t}).then((function(e){console.log(e),i.setState({view:"end"})})).catch((function(e){return console.log("ERROR: ",e)}))}},{key:"endTutorial",value:function(){this.setState({view:"active"}),document.cookie="hasSeenTutorial=true"}},{key:"render",value:function(){var e=null;return console.log("Parent Props\n",this.state.images),"tutorial"===this.state.view?e=Object(n.jsx)(y,{end:this.endTutorial}):"active"===this.state.view?e=this.state.image?Object(n.jsx)(O,{index:this.state.index,undoHappened:this.state.undoHappened,total_batch_size:this.state.total_batch_size,swipes:this.state.swipes,batch_size:this.state.batch_size,labeledSize:this.state.labeledSize,image:this.state.image,onAcceptClick:this.onAcceptClick,onRejectClick:this.onRejectClick,onSkipClick:this.onSkipClick,onBackClick:this.onBackClick,onQuitClick:this.onQuitClick,time:this.state.time,batchStop:this.state.batchStop,noOfSwipes:this.state.noOfSwipes,imagesLeft:this.state.imagesLeft}):Object(n.jsx)(p.a,{loading:!0}):"end"===this.state.view&&(e=this.state.batch_size<=0?Object(n.jsx)(I,{}):Object(n.jsx)(I,{continue:!0})),Object(n.jsx)("div",{className:"App",children:e})}}]),i}(a.a.Component),N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,176)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),s(e),a(e),o(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),N()},21:function(e,t,i){}},[[172,1,2]]]);
//# sourceMappingURL=main.12a4801f.chunk.js.map