import{_ as s,r as n,o as i,c as r,a as c,t as d,b as l,d as u}from"./index-nAt5LT8_.js";const _={data(){return{data1:{},isLoading:!0}},mounted(){this.$http.get("https://randomuser.me/api/").then(t=>{console.log(t.data),this.data1=t.data.results[0]}),setTimeout(()=>{this.isLoading=!1},3e3)}},p={class:"about"},h=u("h1",null,"This is an about page",-1);function m(a,t,g,f,e,v){const o=n("LoadingOverlay");return i(),r("div",p,[h,c(" "+d(e.data1)+" ",1),l(o,{active:e.isLoading},null,8,["active"])])}const b=s(_,[["render",m]]);export{b as default};
