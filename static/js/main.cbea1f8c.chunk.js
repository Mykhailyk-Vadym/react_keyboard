(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),i=n(6),p=n(1),u=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:"Nothing was pressed yet"},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",(function(t){e.setState({pressedKey:"The last pressed key is [".concat(t.key,"]")})}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keyup",(function(t){e.setState({pressedKey:"The last pressed key is [".concat(t.key,"]")})}))}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("p",{className:"App__message",children:e})})}}]),n}(p.Component);n(13);a.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cbea1f8c.chunk.js.map