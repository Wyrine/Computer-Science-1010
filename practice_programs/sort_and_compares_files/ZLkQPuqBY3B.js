/*!CK:2306528536!*//*1444253438,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["59jr7"]); }

__d('legacy:DynamicFriendListEducation',['DynamicFriendListEducation'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.DynamicFriendListEducation=c('DynamicFriendListEducation');},3);
__d('FriendListMenu',['Event','Arbiter','AsyncRequest','CSS','DOM','HTML','Focus','Input','Keys','MenuDeprecated','Parent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s={init:function(t){q.register(t,false);var u=l.find(t,'.FriendListCreateTrigger'),v=l.find(t,'.CreateListInputItem'),w=l.find(v,'.createListInput');q.subscribe('select',function(x,y){if(y.item==u){k.addClass(t,'FriendListMenuCreate');n.set(w);}});h.listen(w,'blur',function(x){if(o.isEmpty(w))k.removeClass(t,'FriendListMenuCreate');});h.listen(w,'keydown',function(x){if(h.getKeyCode(x)==p.RETURN&&/[^\s]/.test(w.value))new j().setURI('/ajax/friends/lists/create.php').setData({name:w.value,id:t.id}).setHandler(function(){o.reset(w);k.removeClass(t,'FriendListMenuCreate');}).send();});i.subscribe('friend-list/new',function(x,y){var z=m(y.new_li).getRootNode();l.insertBefore(u,z);if(y.id===t.id){q.focusItem(z);q.inform('select',{menu:r.byClass(z,'uiMenu'),item:z});}else q.toggleItem(z);});i.subscribe('friend-list/close_editor',function(){var x=r.byClass(t,'FlyoutFriendMenu');k.removeClass(x,'addToListsOpen');k.addClass(x,'addToListsClosed');});},addToAnotherList:function(t,u){h.listen(t,'click',function(event){var v=r.byClass(t,'FlyoutFriendMenu');k.removeClass(v,'addToListsClosed');k.addClass(v,'addToListsOpen');});},goBack:function(t,u){h.listen(t,'click',function(event){var v=r.byClass(t,'FlyoutFriendMenu');k.removeClass(v,'addToListsOpen');k.addClass(v,'addToListsClosed');});}};f.exports=s;},null);
__d('RestrictedFriendListEducation',['Arbiter','AsyncRequest'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;function l(n,o){if(o.flid==j)if(n=='FriendListHovercard/add'){if(k)return;k=true;new i().setURI('/ajax/friends/lists/restricted_edu.php').setData({target:o.uid,flid:o.flid}).send();}else if(n=='RestrictedListNUX/okay')new i().setURI('/ajax/friends/lists/nux_log.php').setData(o).send();return true;}var m={init:function(n){j=n;h.subscribe(['FriendListHovercard/add','RestrictedListNUX/okay'],l);}};f.exports=m;},null);