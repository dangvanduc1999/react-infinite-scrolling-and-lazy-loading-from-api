(this["webpackJsonpreact-infinite-scrolling-and-lazy-loading"]=this["webpackJsonpreact-infinite-scrolling-and-lazy-loading"]||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(24),i=c.n(r),s=(c(66),c(67),c(20)),l=c(32),o=c(31),j=c.n(o);var u=c(107),d=c(108),b=c(106),O=c(105),h=(c(87),c(88),c.p+"static/media/vietname.1f00f178.jpg"),g=c(6),f=function(e){var t,c=e.article;return Object(g.jsxs)(u.a,{children:[Object(g.jsx)(d.a,{xs:24,sm:24,md:8,lg:6,className:"article_image_wrapper",children:Object(g.jsx)("img",{src:null!==(t=c.urlToImage)&&void 0!==t?t:h,alt:""})}),Object(g.jsxs)(d.a,{xs:24,sm:24,md:16,lg:18,className:"article_content",children:[Object(g.jsx)("a",{href:c.url,target:"_blank",className:"article_title",children:c.title}),Object(g.jsx)("div",{className:"article_description",children:c.description})]})]})},m=function(e){var t=Object(n.useState)(""),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(1),o=Object(s.a)(i,2),u=o[0],d=o[1],h=function(e,t){var c=Object(n.useState)(!1),a=Object(s.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),d=u[0],b=u[1],O=Object(n.useState)([]),h=Object(s.a)(O,2),g=h[0],f=h[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),x=p[0],v=p[1];return Object(n.useEffect)((function(){f([])}),[e]),Object(n.useEffect)((function(){var c;i(!0),b(!1);var n="".concat("https://tran-dinh-thang-news-api.herokuapp.com","/articles?page=").concat(t,"&pageSize=").concat(5);return e&&(n+="&q=".concat(e)),j()({method:"GET",url:n,cancelToken:new j.a.CancelToken((function(e){return c=e}))}).then((function(e){f((function(t){return Object(l.a)(new Set([].concat(Object(l.a)(t),Object(l.a)(e.data.articles))))})),v(t<e.data.maxPerPage),i(!1)})).catch((function(e){i(!1),b(!0),j.a.isCancel(e)})),function(){return c()}}),[e,t]),{loading:r,error:d,articles:g,hasMore:x}}(a,u),m=h.articles,p=h.hasMore,x=h.loading,v=(h.error,Object(n.useRef)()),_=Object(n.useCallback)((function(e){x||(v.current&&v.current.disconnect(),v.current=new IntersectionObserver((function(e){e[0].isIntersecting&&p&&d((function(e){return e+1}))})),e&&v.current.observe(e))}),[x,p]);return console.log(u),console.log(a),Object(g.jsxs)("div",{className:"articles_page_wrapper",children:[Object(g.jsx)("div",{className:"articles_page_search",children:Object(g.jsx)(b.a.Search,{value:a,onChange:function(e){r(e.target.value),d(1)},allowClear:!0,style:{width:300},placeholder:"Enter keyword ...",className:"search_input"})}),Object(g.jsxs)("div",{className:"articles_page_body",children:[m.map((function(e,t){return m.length===t+1?Object(g.jsx)("div",{className:"article_item",ref:_,children:Object(g.jsx)(f,{article:e})}):Object(g.jsx)("div",{className:"article_item",children:Object(g.jsx)(f,{article:e})})})),x?Object(g.jsx)("div",{className:"loading",children:Object(g.jsx)(O.a,{})}):Object(g.jsx)(g.Fragment,{children:0===m.length&&Object(g.jsx)("div",{children:"No article"})})]})]})};var p=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(m,{})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,109)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root")),x()},66:function(e,t,c){},67:function(e,t,c){},87:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.f9898e3d.chunk.js.map