"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{7415:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(1523),a=n(8429),s={image:"MoviesItem_image__KoNtk",title:"MoviesItem_title__Rrsmm"},i=n(184);function c(e){var t=e.src,n=e.title,r=e.name;return(0,i.jsxs)("div",{className:s.card,children:[(0,i.jsx)("img",{className:s.image,src:t?"https://image.tmdb.org/t/p/w500".concat(t):a,alt:n,loading:"lazy"}),(0,i.jsx)("h2",{className:s.title,children:n||r})]})}var o="Movies_moviesList__ueqwJ",u="Movies_moviesitem__5C20G";function m(e){var t=e.movies;return(0,i.jsx)("ul",{className:o,children:t&&t.map((function(e){var t=e.id,n=e.poster_path,a=e.title,s=e.name;return(0,i.jsx)("li",{className:u,children:(0,i.jsx)(r.rU,{to:"/movies/".concat(t),children:(0,i.jsx)(c,{src:n,title:a,name:s})})},t)}))})}},8565:function(e,t,n){n.d(t,{v:function(){return m}});var r=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i),o=n(577),u=c().create({baseURL:"https://api.themoviedb.org/3",timeout:1e3,params:{api_key:"0c445e222255734e4e402081285b3802"}});function m(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),o.Am.error("\u041d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},2505:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5861),a=n(8152),s=n(7757),i=n.n(s),c=n(2791),o=n(577),u="SearchForm_searchForm__TTC8q",m="SearchForm_input__9cxSu",l="SearchForm_button__mJj5Z",p=n(184);function v(e){var t=e.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),s=r[0],i=r[1];return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s.trim()?(t(s),i("")):o.Am.warning("Enter sth")},className:u,autoComplete:"off",children:[(0,p.jsx)("input",{className:m,type:"text",autoFocus:!0,placeholder:"Search movies",value:s,onChange:function(e){i(e.currentTarget.value.toLowerCase())}}),(0,p.jsx)("button",{type:"submit",className:l,children:"go"})]})})}var f=n(7415),h=n(8565);function _(){var e=(0,c.useState)(null),t=(0,a.Z)(e,2),n=t[0],s=t[1],o=(0,c.useState)(null),u=(0,a.Z)(o,2),m=u[0],l=u[1];(0,c.useEffect)((function(){if(n){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.v)("search/movie?query=".concat(n));case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[n]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{onSubmit:function(e){s(e)}}),m&&(0,p.jsx)(f.Z,{movies:m.results})]})}},8429:function(e,t,n){e.exports=n.p+"static/media/no_image_poster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=movies-page.2321c530.chunk.js.map