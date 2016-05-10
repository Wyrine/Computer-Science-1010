/*!CK:956697858!*//*1447316905,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["TiE7p"]); }

__d("Collection",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){if(!i.__collection__){var k=new Function();for(var l in i.prototype)k.prototype[l]=h._call.bind(null,l);i.__collection__=k;}var m=new i.__collection__();m._elements=j;return m;}h._call=function(i){var j=Array.prototype.slice.call(arguments,1);this._elements.forEach(function(k){k[i].apply(k,j);});return this;};f.exports=h;},null);
__d('Drag',['Event','Arbiter','DOM','Style','Vector'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={};m.currentDraggable=null;m.grab=function(n){if(m.currentDraggable)m._onmouseup();n.lastDragOver=null;m.attachDragEvents();m.currentDraggable=n;};m.attachDragEvents=function(){document.onselectstart=function(){document.onselectstart=null;return false;};if(m.dragEventsAttached)return;m.dragEventsAttached=true;i.subscribe('scroller/scroll',m._onmousemove);h.listen(document,{mousemove:m._onmousemove,mouseup:m._onmouseup});};m.droppables={};m.addDroppable=function(n,o){(m.droppables[n]=m.droppables[n]||[]).push(o);};m.removeDroppable=function(n,o){m.droppables[n]=m.droppables[n].filter(function(p){return p!=o;});};m.getOffsetParent=function(n){if(j.isNodeOfType(n,['body','html']))return document.body;while((n=n.parentNode)&&n!==document.body)if(k.get(n,'position')!=='static')return n;return document.body;};m._onmousemove=function(event,n){if(!m.currentDraggable)return;var o=n||l.getEventPosition(event),p=m.currentDraggable,q=m.droppables[p.namespace];if(p.namespace&&p.active&&q){var r={};q.forEach(function(x){r[x.zIndex]=x.zIndex;});var s=[];for(var t in r)s.push(r[t]);s.sort();var u=p.lastDragOver,v=null;for(var w=s.length-1;w>=0;w--)if(u&&u.dom!=null&&u.zIndex==s[w]&&u.isDraggedOver(o)){v=u;break;}else for(t=0;t<q.length;t++){if(s[w]!=q[t].zIndex)continue;if(u!=q[t]&&p.dom!=q[t].dom&&q[t].isDraggedOver(o)){v=q[t];w=-1;break;}}if(v&&v!=u){v.ondragover(p);m.currentDraggable.adjustCursorPosition();}if(v)v.ondragmove(p,o.sub(l.getElementPosition(v.dom)));p.lastDragOver=v;}m.currentDraggable._onmousemove(o);};m._onmouseup=function(n){document.onselectstart=null;if(m.currentDraggable){m.currentDraggable._ondrop();m.currentDraggable=null;}};f.exports=m;},null);
__d('Draggable',['Event','Arbiter','Collection','DOM','Drag','Rect','Style','Vector','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();function q(s){'use strict';this.canvas=s;this.scrollZone=50;this.velocity=100;this.coefficient=1;}q.prototype.activate=function(){'use strict';this.activate=p;this.event=h.listen(document,'mousemove',this._onmousemove.bind(this));this.interval=setInterval(this._intervalHandler.bind(this),50);this.cursor=null;};q.prototype.deactivate=function(){'use strict';delete this.activate;this.event&&this.event.remove();this.event=null;clearInterval(this.interval);};q.prototype._onmousemove=function(event){'use strict';this.cursor=o.getEventPosition(event);};q.prototype._intervalHandler=function(){'use strict';if(!this.cursor)return;var s=this.canvas==document.body?m.getViewportBounds():new m(this.canvas),t=new m(this.cursor.y-s.t,s.r-this.cursor.x,s.b-this.cursor.y,this.cursor.x-s.l),u=new o(0,0);if(t.t<t.b&&t.t<this.scrollZone){u.y=-this.scrollZone+t.t;}else if(t.b<this.scrollZone)u.y=this.scrollZone-t.b;u.y=this._doMath(u.y);if(t.l<t.r&&t.l<this.scrollZone){u.x=-this.scrollZone+t.l;}else if(t.r<this.scrollZone)u.x=this.scrollZone-t.r;u.x=this._doMath(u.x);if(u.x||u.y){u.scrollElementBy(this.canvas);if(document.body==this.canvas){var v=o.getScrollPosition();u.scrollElementBy(this.canvas);var w=o.getScrollPosition();this.cursor=this.cursor.add(w.sub(v));}else u.scrollElementBy(this.canvas);i.inform('scroller/scroll',this.cursor);}};q.prototype._doMath=function(s){'use strict';s=s>=0?Math.min(s,this.scrollZone):Math.max(s,-this.scrollZone);return Math.floor(Math.pow(s/this.scrollZone*this.velocity,this.coefficient));};q.findScrollParent=function(s){'use strict';var t;s=s.parentNode;while(s){if(s.scrollHeight!=s.offsetTop){t=n.get(s,'overflowY');if(t=='scroll'||t=='auto')return s;}s=s.parentNode;}return document.body;};function r(s){'use strict';if(!s)throw new Error('Element should be a DOM node');if(!(this instanceof r)){if(s instanceof Array){var t=[];s.forEach(function(u){t.push(new r(u));});return new j(r,t);}else return new r(s);}else{this.data={};this.handles=[];this.dom=s;this.boundingBox=null;this.useScroller=true;this.grabPctX=this.grabPctY=0;this._shouldKillEvents=true;this.addHandle(this.dom);}}r.prototype.destroy=function(){'use strict';this.handles.forEach((function(s){this.removeHandle(s.obj);}).bind(this));this.data=this.dom=null;};r.prototype.adjustCursorPosition=function(){'use strict';var s=o.getElementDimensions(this.dom);this.cursorPositionVector=new o(parseInt(this.grabPctX*s.x,10),parseInt(this.grabPctY*s.y,10));};r.prototype._onclick=function(event){'use strict';if(!this._shouldKillEvents)return true;if(this.active)return h.kill(event);};r.prototype._ongrab=function(s){'use strict';this.ongrab();if(this.useScroller){if(!this.scroller)this.scroller=new q(q.findScrollParent(this.dom));this.scroller.activate();}if(this.active){if(!this.oldPosition)this.oldPosition=this.dom.style.position;var t=l.getOffsetParent(this.dom);if(t!==document.body)s=s.sub(o.getElementPosition(t));this.dom.style.position=this.absolute?'absolute':'relative';s.sub(this.cursorPositionVector).setElementPosition(this.dom);}};r.prototype._onmousedown=function(event){'use strict';if(!(event.which&&event.which===1||event.button&&event.button===1))return;var s=event.getTarget();if(k.isNodeOfType(s,['input','select','textarea','object','embed']))return true;var t=o.getEventPosition(event),u=o.getElementDimensions(this.dom);this.draggableInitialVector=o.getElementPosition(this.dom);this.cursorPositionVector=t.sub(this.draggableInitialVector);this.grabPctX=u.x===0?0:this.cursorPositionVector.x/u.x;this.grabPctY=u.y===0?0:this.cursorPositionVector.y/u.y;l.grab(this,event);if(this.gutter){this.cursorInitialVector=t;}else{this._setActive(true);this._ongrab(t);}if(!this._shouldKillEvents)return true;return h.kill(event);};r.prototype._onmousemove=function(s){'use strict';if(!this.active)if(s.distanceTo(this.cursorInitialVector)>=this.gutter){this._setActive(true);this._ongrab(s);}if(this.active){var t=s.sub(this.cursorPositionVector),u;if(this.boundingBox){var v=m.newFromVectors(t,o.getElementDimensions(this.dom));v=v.boundWithin(this.boundingBox);t=v.getPositionVector();if(this.boundingBox.w()===0){u=new o(this.draggableInitialVector.x,t.y,'document');}else if(this.boundingBox.h()===0){u=new o(t.x,this.draggableInitialVector.y,'document');}else u=t;}else u=t;var w=l.getOffsetParent(this.dom);if(w!==document.body)u=u.sub(o.getElementPosition(w));u.setElementPosition(this.dom);this.ondrag(s);}};r.prototype._ondrop=function(){'use strict';this.scroller&&this.scroller.deactivate();if(this.active){setTimeout((function(){this._setActive(false);}).bind(this),0);this.ondrop(this.scroller&&this.scroller.cursor);if(this.lastDragOver)this.lastDragOver.ondrop(this);}};r.prototype.killDrag=function(){'use strict';this._setActive(false);l._onmouseup();};r.prototype.forceDrop=function(){'use strict';l._onmouseup();};r.prototype.setBoundingBox=function(s){'use strict';this.boundingBox=s;return this;};r.prototype.resetPosition=function(){'use strict';this.dom.style.position=this.oldPosition;this.oldPosition=null;this.dom.style.left='';this.dom.style.top='';return this;};r.prototype.setUseAbsolute=function(s){'use strict';this.absolute=s;return this;};r.prototype.setDragHandler=function(s){'use strict';this.ondrag=s;return this;};r.prototype.setGrabHandler=function(s){'use strict';this.ongrab=s;return this;};r.prototype.setDropHandler=function(s){'use strict';this.ondrop=s;return this;};r.prototype.setGutter=function(s){'use strict';this.gutter=s;return this;};r.prototype.setNamespace=function(s){'use strict';this.namespace=s;return this;};r.prototype.setUseScroller=function(s){'use strict';this.useScroller=s;return this;};r.prototype.setAvoidKillingEvents=function(s){'use strict';this._shouldKillEvents=!s;return this;};r.prototype.addHandle=function(s){'use strict';if(this.handles.length==1&&this.handles[0].obj==this.dom)this.removeHandle(this.dom);this.handles.push({obj:s,evt:[h.listen(s,'mousedown',this._onmousedown.bind(this)),h.listen(s,'click',this._onclick.bind(this)),h.listen(s,'drag',this._killUnlessActive.bind(this)),h.listen(s,'selectstart',this._killUnlessActive.bind(this))]});return this;};r.prototype.removeHandle=function(s){'use strict';this.handles=this.handles.filter(function(t){if(t.obj!=s){return true;}else{t.evt.forEach(function(u){u.remove();});return false;}});};r.prototype.getDOM=function(){'use strict';return this.dom;};r.prototype.setKey=function(s,t){'use strict';this.data[s]=t;return this;};r.prototype.getKey=function(s){'use strict';return this.data[s];};r.prototype._setActive=function(s){'use strict';if(!this.dom)return;this.dom.activeDrag=this.active=s;for(var t=0;t<this.handles.length;t++)this.handles[t].obj.activeDrag=s;};r.prototype._killUnlessActive=function(s){'use strict';if(!this._shouldKillEvents)return;if(s.getTarget()!==document.activeElement)return s.kill();};r.prototype.ondrag=p;r.prototype.ongrab=p;r.prototype.ondrop=p;r.prototype.gutter=0;r.prototype.handles=null;f.exports=r;},null);
__d('Droppable',['Collection','Drag','Draggable','Vector','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n){'use strict';if(!n)throw new Error('Element should be a DOM node');if(!(this instanceof m)){if(n instanceof Array){var o=[];n.forEach(function(p){o.push(new m(p));});return new h(m,o);}else return new m(n);}else{this.data={};this.dom=n;this.namespace=null;}}m.prototype.destroy=function(){'use strict';if(this.namespace)i.removeDroppable(this.namespace,this);this.data=this.dom=null;};m.prototype.setNamespace=function(n){'use strict';if(this.namespace)i.removeDroppable(this.namespace,this);this.namespace=n;i.addDroppable(n,this);return this;};m.prototype.setZIndex=function(n){'use strict';this.zIndex=n;return this;};m.prototype.hasPointMovedHorizontally=function(n){'use strict';var o=k.getElementPosition(this.dom);return o.x<=n.x&&this.dom.offsetWidth+o.x>n.x;};m.prototype.hasPointMovedVertically=function(n){'use strict';var o=k.getElementPosition(this.dom);return o.y<=n.y&&this.dom.offsetHeight+o.y>n.y;};m.prototype.hasPointMovedInside=function(n){'use strict';return this.hasPointMovedHorizontally(n)&&this.hasPointMovedVertically(n);};m.prototype.setDragOverHandler=function(n){'use strict';this.ondragover=n;return this;};m.prototype.setDragOverVectically=function(){'use strict';this.isDraggedOver=m.prototype.hasPointMovedVertically;return this;};m.prototype.setDragOverHorizontally=function(){'use strict';this.isDraggedOver=m.prototype.hasPointMovedHorizontally;return this;};m.prototype.setDragMoveHandler=function(n){'use strict';this.ondragmove=n;return this;};m.prototype.setDropHandler=function(n){'use strict';this.ondrop=n;return this;};m.prototype.zIndex=0;m.prototype.isDraggedOver=m.prototype.hasPointMovedInside;m.prototype.ondragover=l;m.prototype.ondragmove=l;m.prototype.ondrop=l;m.prototype.getDOM=j.prototype.getDOM;m.prototype.setKey=j.prototype.setKey;m.prototype.getKey=j.prototype.getKey;f.exports=m;},null);
__d('SortableGroup',['Arbiter','CSS','DOM','Draggable','Droppable','Style','Vector','emptyFunction','removeFromArray'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();function q(){'use strict';this.namespace='sortable'+ ++q.instanceCount;this.draggables={};this.droppables={};this.sortables={};this.linkedGroups=[];this.linkedGroups.onbeforelinkjump=o;this.linkedGroups.onlinkjump=o;this.rootNode=null;this.boundingBox=null;this.neverEmpty=false;this.hasEmptyMessage=false;this.isDroppable=true;this.isDraggable=true;this.useScroller=true;this.dragOverCriteria='inside';this.requireSameParent=true;this.previousIndexList=[];this.anchor=null;this.disabled=false;this.autoWidth=false;}q.prototype.addEmptyMessage=function(r,s){'use strict';var t='placeholder';if(r.parentNode!=s)j.appendContent(s,r);this.emptyMessage=r;this._initializeAdded(t,r);this.hasEmptyMessage=true;this.sortables[t]=r;this.droppables[t]=new l(r).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(this,t));return this;};q.prototype.setAutoWidth=function(r){'use strict';this.autoWidth=r;return this;};q.prototype.setUseScroller=function(r){'use strict';this.useScroller=r;return this;};q.prototype.setDragOverHorizontally=function(){'use strict';this.dragOverCriteria='horizontal';return this;};q.prototype.setDragOverVertically=function(){'use strict';this.dragOverCriteria='vertical';return this;};q.prototype.removeEmptyMessage=function(){'use strict';if(this.emptyMessage)j.remove(this.emptyMessage);this.hasEmptyMessage=false;this.removeSortable('placeholder');return this;};q.prototype.addSortable=function(r,s,t,u){'use strict';this._initializeAdded(r,s);this.sortables[r]=s;this.draggables[r]=new k(s).setNamespace(this.namespace).setGutter(this.gutter).setUseAbsolute(true).setUseScroller(this.useScroller).setGrabHandler(this.grabHandler.bind(this,r)).setDropHandler(this.dropHandler.bind(this,r,u)).setKey('key',r).setBoundingBox(this.boundingBox);if(t)this.draggables[r].addHandle(t);this.droppables[r]=new l(s).setNamespace(this.namespace).setDragOverHandler(this._dragOverHandlerShim.bind(this,r));if(this.dragOverCriteria==='horizontal'){this.droppables[r].setDragOverHorizontally();}else if(this.dragOverCriteria==='vertical')this.droppables[r].setDragOverVectically();return this;};q.prototype.destroy=function(){'use strict';for(var r in this.droppables)this.droppables[r].destroy();for(var s in this.draggables)this.draggables[s].destroy();this.droppables=this.draggables=this.rootNode=null;p(this.linkedGroups,this);for(var t=0;t<this.linkedGroups.length;t++)this.linkedGroups[t].linkedGroups=this.linkedGroups;};q.prototype.dragOverHandler=function(r,s){'use strict';if(!this.isDroppable&&!this.anchor)return;var t=false;if(!(s in this.draggables)){this.linkedGroups.onbeforelinkjump.call(this,s);if(!this.migrateLinkedSortable(s))throw new Error('Draggable dropped onto a foreign droppable!');t=true;}var u=true,v=this.getSortables(),w=this.sortables[s],x=this.sortables[r];if(!this.anchor){var y=v.length;for(var z=0;z<y;z++)if(v[z]==x){break;}else if(v[z]==w){u=false;break;}}else x=this.anchor;this.onbeforedragover(w,x);var aa=this.linkedGroups.placeholder;this.insertPlaceholder(aa,x,u||this.anchor);aa.parentNode.insertBefore(w,aa);this.ondragover(w,x,s,r);if(t)this.linkedGroups.onlinkjump.call(this,s);};q.prototype.dropHandler=function(r,s){'use strict';if(this._checkLastRemaining()){this.draggables[r].resetPosition();return;}var t=this.linkedGroups.placeholder;i.removeClass(this.sortables[r],'drag');this.draggables[r].resetPosition();t.parentNode.insertBefore(this.sortables[r],t);t.parentNode.removeChild(t);for(var u=0;u<this.linkedGroups.length;u++)if(this.linkedGroups[u].anchor)delete this.linkedGroups[u].anchor;this.ondropcallback(r,this.sortables[r]);this.onorderchange();if(this.previousIndexList.length===0)this.previousIndexList=Object.keys(this.sortables);var v=this.previousIndexList.indexOf(r),w=this.getOrder().indexOf(r);h.inform('drag-and-drop/'+s,{previousIndex:v,currentIndex:w});this.previousIndexList=this.getOrder();};q.prototype.getOrder=function(){'use strict';var r=[],s=this.getSortables();for(var t=0;t<s.length;t++)for(var u in this.sortables)if(this.sortables[u]==s[t]){r.push(u);break;}return r;};q.prototype.getSortables=function(){'use strict';return this.rootNode?this.rootNode.childNodes:[];};q.prototype.grabHandler=function(r){'use strict';if(this.disabled||this._checkLastRemaining()||!this.isDraggable){this.draggables[r].killDrag();return;}this.onbeforegrabcallback(this.sortables[r],r);var s=this.linkedGroups.placeholder,t=this.sortables[r];i.setClass(s,t.className);i.addClass(s,'droppable_placeholder');i.addClass(t,'drag');n.getElementDimensions(t).setElementDimensions(s);if(this.autoWidth)m.set(s,'width','auto');t.parentNode.insertBefore(s,t);this.ongrabcallback(this.sortables[r],r);if(!this.isDroppable){this.anchor=t.nextSibling;if(!this.anchor){this.anchor=j.create('div');t.parentNode.appendChild(this.anchor);}}};q.prototype.insertPlaceholder=function(r,s,t){'use strict';if(t){j.insertBefore(s,r);}else j.insertAfter(s,r);};q.prototype.keyExists=function(r){'use strict';return this.sortables[r];};q.prototype.link=function(r){'use strict';r.linkedGroups=this.linkedGroups;if(!this.linkedGroups.length)this.linkedGroups.push(this);this.linkedGroups.push(r);for(var s=0;s<this.linkedGroups.length;s++)if(this.linkedGroups[s].namespace!=this.namespace){this.linkedGroups[s].namespace=this.namespace;for(var t in this.linkedGroups[s].droppables){this.linkedGroups[s].droppables[t].setNamespace(this.namespace);var u=this.linkedGroups[s].draggables[t];u&&u.setNamespace(this.namespace);}}return this;};q.prototype.migrateLinkedSortable=function(r){'use strict';for(var s=0;s<this.linkedGroups.length;s++)if(r in this.linkedGroups[s].draggables){this.sortables[r]=this.linkedGroups[s].sortables[r];this.draggables[r]=this.linkedGroups[s].draggables[r];this.draggables[r].setGrabHandler(this.grabHandler.bind(this,r)).setDropHandler(this.dropHandler.bind(this,r));this.droppables[r]=this.linkedGroups[s].droppables[r];this.droppables[r].setDragOverHandler(this._dragOverHandlerShim.bind(this,r));delete this.linkedGroups[s].sortables[r];delete this.linkedGroups[s].draggables[r];delete this.linkedGroups[s].droppables[r];return true;}return false;};q.prototype.removeSortable=function(r){'use strict';if(r in this.sortables){if(r in this.draggables)this.draggables[r].destroy();if(r in this.droppables)this.droppables[r].destroy();delete this.draggables[r];delete this.droppables[r];delete this.sortables[r];}};q.prototype.removeAllSortables=function(){'use strict';for(var r in this.sortables)this.removeSortable(r);};q.prototype.setDisabled=function(r){'use strict';this.disabled=r;return this;};q.prototype.forceDrop=function(r){'use strict';if(r in this.sortables)this.draggables[r].forceDrop();};q.prototype.killDrag=function(r){'use strict';if(r in this.sortables)this.draggables[r].killDrag();};q.prototype.setBeforeGrabCallback=function(r){'use strict';this.onbeforegrabcallback=r;return this;};q.prototype.setBoundingBox=function(r){'use strict';this.boundingBox=r;for(var s in this.draggables)this.draggables[s].setBoundingBox(this.boundingBox);return this;};q.prototype.setBeforeDragOverCallback=function(r){'use strict';this.onbeforedragover=r;return this;};q.prototype.setDragOverCallback=function(r){'use strict';this.ondragover=r;return this;};q.prototype.setDropCallback=function(r){'use strict';this.ondropcallback=r;return this;};q.prototype.setDroppable=function(r){'use strict';this.isDroppable=r;return this;};q.prototype.setDraggable=function(r){'use strict';this.isDraggable=r;return this;};q.prototype.setGrabCallback=function(r){'use strict';this.ongrabcallback=r;return this;};q.prototype.setBeforeLinkJumpHandler=function(r){'use strict';this.linkedGroups.onbeforelinkjump=r;return this;};q.prototype.setInsertPlaceholderHandler=function(r){'use strict';this.insertPlaceholder=r;};q.prototype.setLinkJumpHandler=function(r){'use strict';this.linkedGroups.onlinkjump=r;return this;};q.prototype.setNeverEmpty=function(r){'use strict';this.neverEmpty=r;};q.prototype.setOrderChangeHandler=function(r){'use strict';this.onorderchange=r;return this;};q.prototype.setRequireSameParent=function(r,s){'use strict';this.requireSameParent=s;};q.prototype.setSortablesGetter=function(r){'use strict';this.getSortables=r;};q.prototype._checkLastRemaining=function(r){'use strict';var s=this.hasEmptyMessage?2:1;return this.neverEmpty&&this.getSortables().length==s;};q.prototype._dragOverHandlerShim=function(r,s){'use strict';this.dragOverHandler(r,s.getKey('key'));};q.prototype._initializeAdded=function(r,s){'use strict';if(this.rootNode===null){this.rootNode=s.parentNode;if(!this.linkedGroups.placeholder)this.linkedGroups.placeholder=j.create(s.tagName,{className:'dragPlaceholder',style:{padding:'0'}});}else if(this.requireSameParent&&this.rootNode!=s.parentNode)throw new Error('All sortables of a collection must share the same parentNode');if(r in this.draggables)throw new Error('All sortables must have a unique key');};q.instanceCount=0;Object.assign(q.prototype,{gutter:15,onbeforegrabcallback:o,onbeforedragover:o,ondragover:o,ondropcallback:o,ongrabcallback:o,onorderchange:o});f.exports=b.SortableGroup||q;},null);
__d('WebMessengerNux',['Event','AsyncSignal','DOM','WebMessengerEvents'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n,o,p){function q(){j.remove(m);k.masterDOMChanged();k.detailDOMChanged();new i('/ajax/web_messenger/dismiss_nux.php').send();}h.listen(n,'click',q);h.listen(o,'click',p.show.bind(p));p.subscribe('hide',q);}f.exports=l;},null);
__d('MercuryRecipientsDataSource',['DataSource','MercuryTypeaheadConstants'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,h);k=j&&j.prototype;function l(m){'use strict';m=m||{};m.kanaNormalization=true;k.constructor.call(this,m);}l.prototype.buildData=function(m){'use strict';var n=[],o=[];m.forEach((function(p){var q=k.getEntry.call(this,p);if(q.render_type==i.NON_FRIEND_TYPE){var r=i.COMPOSER_NON_FRIENDS_MAX;if(o.length<r)o.push(p);}else if(n.length<i.COMPOSER_FRIENDS_MAX){q.render_type=i.FRIEND_TYPE;n.push(p);}}).bind(this));return k.buildData.call(this,n.concat(o));};f.exports=l;},null);
__d('MessagingDebug',['URI','BugBar','WebMessengerMessageIDFinder'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={showTrace:function(l){var m=j.find(l,l.getAttribute('data-selector')),n=new h(l.getAttribute('data-uri'));n.setQueryData({message_id:m,timestamp:l.getAttribute('data-timestamp')});window.open(n.toString(),'_blank');},reportBug:function(l){var m=j.find(l,l.getAttribute('data-selector')),n=l.getAttribute('data-timestamp');i.addMetadata({'Message ID':m});i.addMetadata({'Message Timestamp':n});}};f.exports=k;},null);
__d('ComposerPhotoSorter',['Arbiter','CSS','DOM','Rect','SortableGroup','arrayContains'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={init:function(o,p){this._container=o;this._noDragDuringUploading=p;this._reset();this._update();var q=this._update.bind(this);h.subscribe('multi-upload/images-added/'+o.id,q);h.subscribe('multi-upload/image-removed/'+o.id,q);},_reset:function(){this._ids=[];this._sortableGroup=new l();if(this._noDragDuringUploading){h.subscribe(['multi-upload/images-upload-start/'+this._container.id],this._sortableGroup.destroy.bind(this._sortableGroup));h.subscribe(['set-bounding-box/'+this._container.id],this._setBoundingBox.bind(this));}i.removeClass(this._container,'fbVaultPhotoSorter');},_update:function(){var o=j.scry(this._container,'.fbVaultGridItem').filter(function(p){return !i.hasClass(p,'fbVaultEditableGridMoreLink');});if(o.length<2){if(this._ids.length>1){this._sortableGroup.destroy();this._reset();}return;}i.addClass(this._container,'fbVaultPhotoSorter');o.forEach((function(p){var q=j.scry(p,'input[type="hidden"]')[0];if(q&&!m(this._ids,q.value)){this._ids.push(q.value);this._sortableGroup.addSortable(q.value,p,null,this._container.id);}}).bind(this));this._sortableGroup.setBoundingBox(new k(this._container));},_setBoundingBox:function(o,p){this._sortableGroup.setBoundingBox(p);}};f.exports=n;},null);