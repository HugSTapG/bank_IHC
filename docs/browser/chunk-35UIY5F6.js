import{Aa as k,J as f,Oa as S,Pa as E,Q as _,Qa as T,fa as s,ga as b,na as C,oa as x,pa as h,qa as n,ra as t,sa as m,ta as d,ua as a,va as v,wa as P,xa as M,ya as O,za as y}from"./chunk-UU2WAZ22.js";var u=(()=>{let e=class e{constructor(){this.transactions=[{title:"Compra en Supermercado XYZ",date:"18 jun 2024 - 09:45",amount:-85.25,type:"expense"},{title:"Pago de Servicios",date:"19 jun 2024 - 17:22",amount:-120,type:"expense"},{title:"Transferencia a Juan P\xE9rez",date:"20 jun 2024 - 08:00",amount:-50,type:"expense"},{title:"Dep\xF3sito en Cuenta de Ahorros",date:"21 jun 2024 - 10:30",amount:500,type:"income"},{title:"Pago de Tarjeta de Cr\xE9dito",date:"22 jun 2024 - 14:15",amount:-300,type:"expense"},{title:"Compra en Tienda de Electr\xF3nicos",date:"23 jun 2024 - 16:40",amount:-1200,type:"expense"},{title:"Dep\xF3sito en Agencia Bancaria",date:"24 jun 2024 - 09:00",amount:800,type:"income"},{title:"Compra en Librer\xEDa",date:"25 jun 2024 - 11:20",amount:-40.5,type:"expense"},{title:"Pago de Internet y Cable",date:"26 jun 2024 - 18:30",amount:-90,type:"expense"}]}getTransactions(){return this.transactions}addTransaction(o,r,c){let l=new Date().toISOString(),F={title:o,date:l,amount:r,type:c};console.log("Transaccion exitosa - 000"),this.transactions.push(F)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var g=(()=>{let e=class e{constructor(){this.balance=100.35}getBalance(){return this.balance}decreaseBalance(o){this.balance-=o}increaseBalance(o){this.balance+=o}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var I=(i,e)=>({positive:i,negative:e});function H(i,e){if(i&1&&(n(0,"li",35)(1,"div",36)(2,"h3",37),a(3),t(),n(4,"p",38),a(5),t()(),n(6,"span",39),a(7),t()()),i&2){let p=e.$implicit;s(3),v(p.title),s(2),v(p.date),s(),x("ngClass",k(5,I,p.type==="income",p.type==="expense")),s(),M(" ",p.amount>0?"+":"","",p.amount," ")}}var J=(()=>{let e=class e{constructor(o,r){this.transactionService=o,this.numbersService=r,this.transactions=[],this.showOverlay=!1,this.activeTab="debito"}ngOnInit(){this.transactions=this.transactionService.getTransactions()}setActiveTab(o){this.activeTab=o}get currentBalance(){return this.numbersService.getBalance()}handleButtonClick(o){switch(o){case 1:this.numbersService.decreaseBalance(10),this.transactionService.addTransaction("Transferencia realizada",-10,"expense");break;case 2:this.numbersService.increaseBalance(10),this.transactionService.addTransaction("Pago realizado",10,"income");break;case 3:break;case 4:break;case 5:break;default:break}}};e.\u0275fac=function(r){return new(r||e)(b(u),b(g))},e.\u0275cmp=_({type:e,selectors:[["app-home"]],standalone:!0,features:[O([u,g]),y],decls:50,vars:6,consts:[[1,"account-container"],[1,"account-header"],[1,"header-top"],["src","https://cdn.builder.io/api/v1/image/assets/TEMP/14ca8a23716276193747f4b051f28499780f6b4275953d5c63f40e44ee1739e9?apiKey=c860de28c3074bb79281f8bafbafbccd&","alt","Menu icon",1,"menu-icon"],["src","https://cdn.builder.io/api/v1/image/assets/TEMP/2d22936f55e118567bd984a1062ee59ce9949c622fefc7038c24dfb48565bd93?apiKey=c860de28c3074bb79281f8bafbafbccd&","alt","Bank logo",1,"bank-logo"],[1,"user-info"],[1,"greeting"],[1,"user-name"],[1,"account-status"],["src","https://cdn.builder.io/api/v1/image/assets/TEMP/9cfc7d79a54b325eaa3e5f3abfc34645cdcf88f4b017fa86aa2ac4092139fdbb?apiKey=c860de28c3074bb79281f8bafbafbccd&","alt","Notification icon",1,"notification-icon"],[1,"account-label"],[1,"account-number"],["src","https://cdn.builder.io/api/v1/image/assets/TEMP/e14040148c2753bb7e8e788ed556b8c9bb0d50c02a610c6c25a7cecb22387cd2?apiKey=c860de28c3074bb79281f8bafbafbccd&","alt","Copy account number",1,"copy-icon"],[1,"account-nav"],[1,"nav-button",3,"click"],[1,"balance-overview"],[1,"balance-header"],["src","https://cdn.builder.io/api/v1/image/assets/TEMP/e538ab86e7f8dec1e67bd735b8f7d39c08179e0ab24623d74dd66564a0b8926a?apiKey=c860de28c3074bb79281f8bafbafbccd&","alt","Expenses chart",1,"expenses-icon"],[1,"balance-label"],[1,"balance-amount"],[1,"total-balance"],[1,"transactions"],[1,"transactions-header"],[1,"transactions-title"],["href","#",1,"view-all"],[1,"transaction-list"],["class","transaction-item",4,"ngFor","ngForOf"],[1,"footer-container"],[1,"image-container"],["src","https://cdn.builder.io/api/v1/image/assets/TEMP/885d5d83a66693eb0092dfc5ff8f8254d8dba7b4f2e185d663dacd0a036166ce?apiKey=c860de28c3074bb79281f8bafbafbccd&","alt","Footer decoration",1,"footer-image"],["id","Transferir",1,"invisible-button",3,"click"],["id","Pagos",1,"invisible-button",3,"click"],["id","Resumen",1,"invisible-button",3,"click"],["id","Otros",1,"invisible-button",3,"click"],["id","Perfil",1,"invisible-button",3,"click"],[1,"transaction-item"],[1,"transaction-details"],[1,"transaction-title"],[1,"transaction-date"],[1,"transaction-amount",3,"ngClass"]],template:function(r,c){r&1&&(n(0,"main",0)(1,"header",1)(2,"div",2),m(3,"img",3)(4,"img",4),t(),n(5,"div",5)(6,"div",6)(7,"h1",7),a(8,"Hola, Jos\xE9 Garc\xE9s"),t(),n(9,"p",8),a(10,"Este es el estado de tus cuentas"),t()(),m(11,"img",9),t(),n(12,"p",10),a(13,"Este es tu cuenta"),t(),n(14,"div",11)(15,"span"),a(16,"1480822900"),t(),m(17,"img",12),t(),n(18,"nav",13)(19,"button",14),d("click",function(){return c.setActiveTab("debito")}),a(20,"D\xE9bito"),t(),n(21,"button",14),d("click",function(){return c.setActiveTab("credito")}),a(22,"Cr\xE9dito"),t()(),n(23,"section",15)(24,"div",16)(25,"h2"),a(26,"Gastos"),t(),m(27,"img",17),t(),n(28,"p",18),a(29,"Saldo disponible"),t(),n(30,"p",19),a(31),t(),n(32,"p",20),a(33,"Saldo total de tu cuenta: $100.35"),t()()(),n(34,"section",21)(35,"div",22)(36,"h2",23),a(37,"\xFAltimos movimientos"),t(),n(38,"a",24),a(39,"Ver todos"),t()(),n(40,"ul",25),C(41,H,8,8,"li",26),t()(),n(42,"footer",27)(43,"div",28),m(44,"img",29),n(45,"button",30),d("click",function(){return c.handleButtonClick(1)}),t(),n(46,"button",31),d("click",function(){return c.handleButtonClick(2)}),t(),n(47,"button",32),d("click",function(){return c.handleButtonClick(3)}),t(),n(48,"button",33),d("click",function(){return c.handleButtonClick(4)}),t(),n(49,"button",34),d("click",function(){return c.handleButtonClick(5)}),t()()()()),r&2&&(s(19),h("active",c.activeTab==="debito"),s(2),h("active",c.activeTab==="credito"),s(10),P("$",c.currentBalance.toFixed(2),""),s(10),x("ngForOf",c.transactions))},dependencies:[T,S,E],styles:[".account-container[_ngcontent-%COMP%]{background-color:#fff;display:flex;max-width:480px;width:100%;flex-direction:column;align-items:center;margin:0 auto}.account-header[_ngcontent-%COMP%]{border-radius:0 0 16px 16px;background-color:#f7941d;align-self:stretch;display:flex;width:100%;flex-direction:column;padding:17px 0 45px}.header-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 17px}.menu-icon[_ngcontent-%COMP%]{width:29px;height:auto}.bank-logo[_ngcontent-%COMP%]{width:66px;height:auto}.user-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:39px 25px 0 17px;color:#fff}.user-name[_ngcontent-%COMP%]{font:700 20px Figtree,sans-serif;letter-spacing:-.4px;margin:0}.account-status[_ngcontent-%COMP%]{font:400 14px Figtree,sans-serif;letter-spacing:-.28px;margin:4px 0 0}.notification-icon[_ngcontent-%COMP%]{width:24px;height:auto}.account-label[_ngcontent-%COMP%]{color:#fff;font:400 13px Figtree,sans-serif;letter-spacing:-.26px;margin:29px 0 0 17px}.account-number[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;color:#fff;font:700 24px Figtree,sans-serif;letter-spacing:.48px;margin:11px 0 0 17px}.copy-icon[_ngcontent-%COMP%]{width:20px;height:auto}.account-nav[_ngcontent-%COMP%]{display:flex;margin:20px 17px 0;border-radius:100px;background-color:#fff;padding:4px}.nav-button[_ngcontent-%COMP%]{flex:1;font:700 13px Figtree,sans-serif;letter-spacing:-.26px;padding:13px 0;border:none;background:none;color:#f7941d}.nav-button.active[_ngcontent-%COMP%]{color:#fff;background-color:#f7941d}.nav-button.active[_ngcontent-%COMP%]{border-radius:100px;background-color:#f7941d;color:#fff}.balance-overview[_ngcontent-%COMP%]{border-radius:8px;background:linear-gradient(252deg,#ffffffb3,#fff3);mix-blend-mode:normal;margin:14px 17px 0;padding:24px 23px;color:#fff}.balance-label[_ngcontent-%COMP%], .balance-amount[_ngcontent-%COMP%], .total-balance[_ngcontent-%COMP%]{color:#fff}.balance-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.balance-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:700 14px Figtree,sans-serif;letter-spacing:-.28px;margin:0}.expenses-icon[_ngcontent-%COMP%]{width:32px;height:auto}.balance-label[_ngcontent-%COMP%]{font:400 13px Figtree,sans-serif;letter-spacing:-.26px;margin:16px 0 0}.balance-amount[_ngcontent-%COMP%]{font:700 28px Figtree,sans-serif;margin:0}.total-balance[_ngcontent-%COMP%]{font:400 13px Figtree,sans-serif;letter-spacing:-.26px;margin:34px 0 0}.transactions[_ngcontent-%COMP%]{width:100%;max-width:375px;padding:0 20px}.transactions-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:29px}.transactions-title[_ngcontent-%COMP%]{color:#232428;font:700 18px Figtree,sans-serif;letter-spacing:-.36px;text-transform:capitalize;margin:0}.view-all[_ngcontent-%COMP%]{color:#6d6e71;font:700 13px Figtree,sans-serif;letter-spacing:-.26px;text-decoration:none}.transaction-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:21px 0 0}.transaction-item[_ngcontent-%COMP%]{border-radius:16px;background-color:#f8f6f7;display:flex;justify-content:space-between;padding:12px 16px;margin-bottom:8px}.transaction-title[_ngcontent-%COMP%]{color:#232428;font:700 15px Figtree,sans-serif;letter-spacing:-.3px;margin:0}.transaction-date[_ngcontent-%COMP%]{color:#6d6e71;font:400 12px Figtree,sans-serif;letter-spacing:-.24px;margin:4px 0 0}.transaction-amount[_ngcontent-%COMP%]{font:700 15px Figtree,sans-serif;letter-spacing:-.3px;align-self:center}.transaction-amount.negative[_ngcontent-%COMP%]{color:#a4202e}.transaction-amount.positive[_ngcontent-%COMP%]{color:#177930}.footer-container[_ngcontent-%COMP%]{position:relative}.image-container[_ngcontent-%COMP%]{position:relative;width:100%}.footer-image[_ngcontent-%COMP%]{width:100%;height:auto;display:block}.invisible-button[_ngcontent-%COMP%]{position:absolute;background:transparent;border:none;cursor:pointer}#Transferir[_ngcontent-%COMP%]{top:0;left:0;width:20%;height:100%}#Pagos[_ngcontent-%COMP%]{top:0;left:20%;width:20%;height:100%}#Resumen[_ngcontent-%COMP%]{top:0;left:40%;width:20%;height:100%}#Otros[_ngcontent-%COMP%]{top:0;left:60%;width:20%;height:100%}#Perfil[_ngcontent-%COMP%]{top:0;left:80%;width:20%;height:100%}"]});let i=e;return i})();export{J as HomeComponent};