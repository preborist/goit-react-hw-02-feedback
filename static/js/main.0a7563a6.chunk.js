(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(3),r=n.n(o),i=n(4),s=n(5),d=n(6),l=n(8),b=n(7),u=(n(13),n(0)),j=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("ul",{className:"FeedbackOptions",children:t.map((function(e){return Object(u.jsx)("button",{className:"FeedbackOptions__button",name:e,type:"button",onClick:n,children:e},e)}))})},h=(n(15),function(e){var t=e.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j,{options:["good","neutral","bad"],onLeaveFeedback:t})})}),O=(n(16),function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"Statistics",children:"Statistics"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",n]}),Object(u.jsxs)("li",{children:["Bad: ",c]}),Object(u.jsxs)("li",{children:["Total: ",a]}),Object(u.jsxs)("li",{children:["Positive feedback: ",o,"%"]})]})]})}),f=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:t}),n]})},v=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},k=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){var n=t.target.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositivePercentageFeedback=function(){if(e.state.good)return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(u.jsxs)(f,{title:"Please leave feedback",children:[Object(u.jsx)(h,{onLeaveFeedback:this.handleClick}),this.countTotalFeedback()?Object(u.jsx)(O,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositivePercentageFeedback()}):Object(u.jsx)(v,{message:"No feedback given"})]})}}]),n}(c.Component);n(17);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.0a7563a6.chunk.js.map