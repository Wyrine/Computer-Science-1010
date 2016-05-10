/*!CK:1905123129!*//*1446439587,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Vl\/zS"]); }

__d('LayerHideOnSuccess',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('success',this._layer.hide.bind(this._layer));};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};Object.assign(h.prototype,{_subscription:null});f.exports=h;},null);
__d('Overlay',['CSS','DataStore','DOM','Layer','LayerButtons','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerFormHooks','LayerHideOnBlur','LayerHideOnEscape','LayerHideOnSuccess','LayerHideOnTransition','LayerMouseHooks','LayerTabIsolation'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w,x;w=babelHelpers.inherits(y,k);x=w&&w.prototype;function y(z,aa){'use strict';z=babelHelpers._extends({buildWrapper:true},z);x.constructor.call(this,z,aa);}y.prototype._configure=function(z,aa){'use strict';this._shouldBuildWrapper=z.buildWrapper;x._configure.call(this,z,aa);var ba=this.getRoot();this._overlay=j.scry(ba,'div.uiOverlay')[0]||ba;h.hide(ba);j.appendContent(this.getInsertParent(),ba);i.set(this._overlay,'overlay',this);var ca=i.get(this._overlay,'width');ca&&this.setWidth(ca);if(this.setFixed)this.setFixed(i.get(this._overlay,'fixed')=='true');if(i.get(this._overlay,'fadeonshow')!='false')this.enableBehavior(o);if(i.get(this._overlay,'fadeonhide')!='false')this.enableBehavior(n);if(i.get(this._overlay,'hideonsuccess')!='false')this.enableBehavior(s);if(i.get(this._overlay,'hideonblur')=='true')this.enableBehavior(q);if(i.get(this._overlay,'destroyonhide')!='false')this.enableBehavior(m);return this;};y.prototype._getDefaultBehaviors=function(){'use strict';return x._getDefaultBehaviors.call(this).concat([l,p,u,r,t,v]);};y.prototype.initWithoutBuildingWrapper=function(){'use strict';this._shouldBuildWrapper=false;return this.init.apply(this,arguments);};y.prototype._buildWrapper=function(z,aa){'use strict';aa=x._buildWrapper.call(this,z,aa);if(!this._shouldBuildWrapper){this._contentRoot=aa;return aa;}this._contentRoot=j.create('div',{className:'uiOverlayContent'},aa);return j.create('div',{className:'uiOverlay'},this._contentRoot);};y.prototype.getContentRoot=function(){'use strict';return this._contentRoot;};y.prototype.destroy=function(){'use strict';i.remove(this.getRoot(),'overlay');x.destroy.call(this);};f.exports=y;},null);
__d('NAX2Callout',['Arbiter','AsyncRequest','CSS','DataStore','DOM','DOMScroll','LayerDestroyOnHide','Run','SubscriptionsHandler','$','ge','TourAutoPilot'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s,t,u=c('TourAutoPilot').TourAutoPilot;s=babelHelpers.inherits(v,u);t=s&&s.prototype;function v(w){'use strict';t.constructor.call(this);this.tourMode=w||false;this.modifiedButtons=[];this._subscriptionsHandler=new p();this._subscriptionsHandler.addSubscriptions(h.subscribe('CoverPhotoEdit',this.handlePauseStart.bind(this)));o.onLeave(this.handleTourStop);j.addClass(document.documentElement,'hideScroll');this.scrollToTop();}v.prototype.handleTransition=function(){'use strict';if(this.tourComplete)return;this.scrollToTop();if(this.tourMode)this.showContextualBlind(q('sideNav'));t.handleTransition.call(this);};v.prototype.handleTourComplete=function(){'use strict';this.handleTourStop();this.scrollToTop();this.restoreContextLinks();t.handleTourComplete.call(this);};v.prototype.handleShowDialog=function(w,x,y){'use strict';if(this.isAnimating)return;this.isAnimating=y!==false;if(x=='status'&&r('profile_stream_blankstate'))j.hide('profile_stream_blankstate');this.stepName=x||this.stepName;var z=this.steps[this.stepName],aa=this.overrideContextLinks(z),ba=z.getContext();if(this.tourMode)this.showContextualBlind(ba,!aa);m.scrollTo(ba,this.isAnimating,true,0,0,(function(){this.isAnimating=false;h.inform('reflow');}).bind(this));};v.prototype.handlePauseStart=function(w,x){'use strict';if(x.state==="closed"){this.restartTour();}else if(x.state==="open")this.pauseTour();};v.prototype.logAction=function(w,x,y){'use strict';new i().setURI('/ajax/pages/nax2_callout.php').setData({action:x,step:y,pid:w}).send();};v.prototype.overrideContextLinks=function(w){'use strict';var x=w.getContext(),y=this.getButtonForOverride(w);if(y){var z=l.scry(x,y.tagName);if(z.length>0){var aa=z[0],ba=l.create(y.tagName);this.copyClickHandlers(ba,aa);k.set(aa,'override_original',ba);this.modifiedButtons.push(aa);this.copyClickHandlers(aa,y);}}return !!y;};v.prototype.restoreContextLinks=function(){'use strict';for(var w=0;w<this.modifiedButtons.length;w++){var x=this.modifiedButtons[w],y=k.get(x,'override_original',false);this.copyClickHandlers(x,y);}this.modifiedButtons=[];};v.prototype.getButtonForOverride=function(w){'use strict';var x=k.get(w._root,'override');if(x){var y=r(x);if(y.tagName.toLowerCase()=='label')y=l.find(y,'input');return y;}return null;};v.prototype.copyClickHandlers=function(w,x){'use strict';var y;for(var z in {href:1,onclick:1,ajaxify:1})if(y=x.getAttribute(z)){w.setAttribute(z,y);}else if(w.getAttribute(z))w.removeAttribute(z);};v.prototype.registerStep=function(w,x){'use strict';w.disableBehavior(n);t.registerStep.call(this,w,x);};v.prototype.scrollToTop=function(){'use strict';m.scrollToTop(true);};v.prototype.pauseTour=function(){'use strict';if(this.openDialog)this.openDialog.hide();};v.prototype.handleTourStop=function(){'use strict';j.removeClass(document.documentElement,'hideScroll');this._subscriptionsHandler.release();t.handleTourStop.call(this);};v.prototype.restartTour=function(){'use strict';if(this.openDialog){this.openDialog.hide();this.openDialog.show();}};f.exports=v;},null);
__d('ContextualDialogFooterLink',['CSS','DOM','Event'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l){'use strict';this._layer=l;}k.prototype.enable=function(){'use strict';var l=this._layer.getRoot(),m=i.scry(l,'.uiContextualDialogFooterLink')[0],n='uiContextualDialogHoverFooterArrow';this._subscriptions=[j.listen(m,'mouseenter',h.addClass.bind(null,l,n)),j.listen(m,'mouseleave',h.removeClass.bind(null,l,n))];};k.prototype.disable=function(){'use strict';this._subscriptions.forEach(function(l){l.remove();});this._subscriptions=null;};Object.assign(k.prototype,{_subscriptions:null});f.exports=k;},null);
__d('LegacyContextualDialog',['Arbiter','ArbiterMixin','ARIA','Bootloader','ContextualDialogFooterLink','ContextualThing','CSS','DataStore','DOM','Event','LayerAutoFocus','LayerRefocusOnHide','Locale','Overlay','Parent','Scroll','Style','Vector','$','cx','getOverlayZIndex','shield'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){if(c.__markCompiled)c.__markCompiled();var da,ea;da=babelHelpers.inherits(fa,u);ea=da&&da.prototype;fa.prototype._configure=function(ga,ha){'use strict';ea._configure.call(this,ga,ha);var ia=this.getRoot(),ja=o.get.bind(null,ia);this.setAlignH(ja('alignh','left'));this.setOffsetX(ja('offsetx',0));this.setOffsetY(ja('offsety',0));this.setPosition(ja('position','above'));this._hasFooter=ja('hasfooter',false);if(this._hasFooter){var ka=p.scry(ia,'.uiContextualDialogFooterLink')[0];ka&&this.enableBehavior(l);}this.enableBehaviors(this._getDefaultBehaviors());this._setContextSubscription=this.subscribe('beforeshow',(function(){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;var ma=ja('context');if(ma){this.setContext(z(ma));}else{ma=ja('contextselector');if(ma)this.setContext(p.find(document,ma));}}).bind(this));this._content=p.scry(ia,'.uiContextualDialogContent')[0];if(this._content){this._content.setAttribute('role','dialog');var la=p.scry(this._content,'.legacyContextualDialogTitle')[0];if(la)this._content.setAttribute('aria-labelledby',p.getID(la));}this._showSubscription=this.subscribe('show',(function(){var ma=ca(this.updatePosition,this);this._resizeListener=q.listen(window,'resize',ma);this._reflowSubscription=h.subscribe('reflow',ma);this._setupScrollListener(this._scrollParent);m.register(ia,this.context);h.inform('layer_shown',{type:'ContextualDialog'});}).bind(this));this._hideSubscription=this.subscribe('hide',(function(){this._teardownResizeAndReflowListeners();this._teardownScrollListener();h.inform('layer_hidden',{type:'ContextualDialog'});}).bind(this));return this;};fa.prototype._getDefaultBehaviors=function(){'use strict';return ea._getDefaultBehaviors.call(this).concat([r,s]);};fa.prototype._buildWrapper=function(ga,ha){'use strict';var ia=ea._buildWrapper.call(this,ga,ha);if(!this._shouldBuildWrapper)return ia;n.addClass(ia,'uiContextualDialog');return p.create('div',{className:'uiContextualDialogPositioner'},ia);};fa.prototype.setWidth=function(ga){'use strict';this._width=Math.floor(ga);return this;};fa.prototype.setFixed=function(ga){'use strict';ga=!!ga;n.conditionClass(this.getRoot(),'uiContextualDialogFixed',ga);this._fixed=ga;return this;};fa.prototype.setAlignH=function(ga){'use strict';this.alignH=ga;this._updateAlignmentClass();this._shown&&this.updatePosition();this.position&&this._updateArrow();return this;};fa.prototype.getContent=function(){'use strict';return this._content;};fa.prototype.getContext=function(){'use strict';return this.context;};fa.prototype.setContext=function(ga){'use strict';if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}ga=z(ga);if(this.context&&this.context!=ga)o.remove(this.context,'LegacyContextualDialog');this.context=ga;j.setPopup(this.getCausalElement(),this.getRoot());var ha=v.byClass(ga,"_4d3w");this.setInsertParent(ha||document.body);if(this._scrollListener&&this._scrollParent!==ha){this._teardownScrollListener();this._setupScrollListener(ha);}this._scrollParent=ha;var ia=ba(ga,this._insertParent);x.set(this.getRoot(),'z-index',ia>200?ia:'');o.set(this.context,'LegacyContextualDialog',this);return this;};fa.prototype.getCausalElement=function(){'use strict';return ea.getCausalElement.call(this)||this.context;};fa.prototype.listen=function(ga,ha){'use strict';return q.listen(this.getRoot(),ga,ha);};fa.prototype.setOffsetX=function(ga){'use strict';this.offsetX=parseInt(ga,10)||0;this._shown&&this.updatePosition();return this;};fa.prototype.setOffsetY=function(ga){'use strict';this.offsetY=parseInt(ga,10)||0;this._shown&&this.updatePosition();return this;};fa.prototype.setPosition=function(ga){'use strict';this.position=ga;for(var ha in fa.POSITION_TO_CLASS)n.conditionClass(this.getRoot(),fa.POSITION_TO_CLASS[ha],ga==ha);this._updateAlignmentClass();this._shown&&this.updatePosition();this._updateArrow();return this;};fa.prototype.updatePosition=function(){'use strict';if(!this.context)return false;if(this._width)x.set(this._overlay,'width',this._width+'px');var ga=this._fixed?'viewport':'document',ha=y.getElementPosition(this.context,ga),ia=this._scrollParent;if(ia)ha=ha.sub(y.getElementPosition(ia,'document')).add(w.getLeft(ia),w.getTop(ia));var ja=y.getElementDimensions(this.context),ka=this.position=='above'||this.position=='below',la=t.isRTL();if((this.position=='right'||ka&&this.alignH=='right')!=la)ha=ha.add(ja.x,0);if(this.position=='below')ha=ha.add(0,ja.y);var ma=new y(0,0);if(ka&&this.alignH=='center'){ma=ma.add((ja.x-this._width)/2,0);}else{var na=ka?ja.x:ja.y,oa=2*fa.ARROW_INSET;if(na<oa){var pa=na/2-fa.ARROW_INSET;if(ka&&this.alignH=='right'!=la)pa=-pa;ma=ma.add(ka?pa:0,ka?0:pa);}}ma=ma.add(this.offsetX,this.offsetY);if(la)ma=ma.mul(-1,1);ha=ha.add(ma);if(this._fixed)ha=new y(ha.x,ha.y,'document');ha.setElementPosition(this.getRoot());this._adjustVerticalPosition();this._adjustHorizontalPosition();return true;};fa.prototype.scrollTo=function(){'use strict';if(this.context)k.loadModules(["DOMScroll"],(function(ga){ga.scrollTo(this.context,true,true);}).bind(this));};fa.prototype.destroy=function(){'use strict';this.unsubscribe(this._showSubscription);this.unsubscribe(this._hideSubscription);if(this._setContextSubscription){this.unsubscribe(this._setContextSubscription);this._setContextSubscription=null;}this._teardownScrollListener();this._teardownResizeAndReflowListeners();this.context&&o.remove(this.context,'LegacyContextualDialog');ea.destroy.call(this);};fa.prototype._adjustVerticalPosition=function(){'use strict';if(this.position!='left'&&this.position!='right'){x.set(this._overlay,'top','');return;}var ga=this.getRoot(),ha=y.getElementPosition(ga,'viewport').y,ia=y.getElementDimensions(this._overlay).y,ja=y.getViewportDimensions().y,ka=Math.min(Math.max(ha,fa.MIN_TOP_GAP),fa.TOP_MARGIN),la=Math.min(Math.max(0,ha+ia+fa.BOTTOM_MARGIN-ja),Math.max(-ka,ha-ka),ia-2*fa.ARROW_INSET);x.set(this._overlay,'top',-1*la+'px');x.set(this._arrow,'top',fa.ARROW_OFFSET+'px');x.set(this._arrow,'marginTop',la+'px');};fa.prototype._adjustHorizontalPosition=function(){'use strict';if(this.position!='above'&&this.position!='below'||this.alignH!='left'){x.set(this._overlay,'left','');x.set(this._overlay,'right','');return;}var ga=this.getRoot(),ha=y.getElementPosition(ga,'viewport').x,ia=y.getElementDimensions(this._overlay).x,ja=y.getViewportDimensions().x,ka=t.isRTL(),la;if(!ka){la=ha+ia+fa.RIGHT_MARGIN-ja;}else la=fa.LEFT_MARGIN+ia-ha;la=Math.min(Math.max(0,la),ia-2*fa.ARROW_INSET);x.set(this._overlay,ka?'right':'left',-1*la+'px');x.set(this._arrow,ka?'right':'left',fa.ARROW_OFFSET+'px');x.set(this._arrow,ka?'marginRight':'marginLeft',la+'px');};fa.prototype._updateArrow=function(){'use strict';var ga=0;if(this.position=='above'||this.position=='below')switch(this.alignH){case 'center':ga=50;break;case 'right':ga=100;break;}this._renderArrow(fa.POSITION_TO_ARROW[this.position],ga);};fa.prototype._renderArrow=function(ga,ha){'use strict';for(var ia in fa.ARROW_CLASS)n.conditionClass(this._overlay,fa.ARROW_CLASS[ia],ga==ia);n.conditionClass(this._overlay,'uiContextualDialogWithFooterArrowBottom',ga=='bottom'&&this._hasFooter);if(ga=='none')return;if(!this._arrow){this._arrow=p.create('i',{className:'uiContextualDialogArrow'});p.appendContent(this._overlay,this._arrow);}x.set(this._arrow,'top','');x.set(this._arrow,'left','');x.set(this._arrow,'right','');x.set(this._arrow,'margin','');var ja=ga=='top'||ga=='bottom',ka=ja?t.isRTL()?'right':'left':'top';ha=ha||0;x.set(this._arrow,ka,ha+'%');var la=fa.ARROW_LENGTH+fa.ARROW_OFFSET*2,ma=-(la*ha/100-fa.ARROW_OFFSET);x.set(this._arrow,'margin-'+ka,ma+'px');};fa.prototype._updateAlignmentClass=function(){'use strict';n.conditionClass(this.getRoot(),fa.RIGHT_ALIGNED_CLASS,(this.position=='above'||this.position=='below')&&this.alignH=='right');};fa.prototype._setupScrollListener=function(ga){'use strict';this._scrollListener=q.listen(ga||window,'scroll',ca(this._adjustVerticalPosition,this));};fa.prototype._teardownScrollListener=function(){'use strict';if(this._scrollListener){this._scrollListener.remove();this._scrollListener=null;}};fa.prototype._teardownResizeAndReflowListeners=function(){'use strict';if(this._resizeListener){this._resizeListener.remove();this._resizeListener=null;}if(this._reflowSubscription){this._reflowSubscription.unsubscribe();this._reflowSubscription=null;}};fa.getInstance=function(ga){'use strict';var ha=o.get(ga,'LegacyContextualDialog');if(!ha){var ia=v.byClass(ga,'uiOverlay');if(ia)ha=o.get(ia,'overlay');}return ha;};function fa(){'use strict';da.apply(this,arguments);}Object.assign(fa,i,{ARROW_OFFSET:15,ARROW_LENGTH:16,ARROW_INSET:22,TOP_MARGIN:50,BOTTOM_MARGIN:30,LEFT_MARGIN:15,RIGHT_MARGIN:30,MIN_TOP_GAP:5,POSITION_TO_CLASS:{above:'uiContextualDialogAbove',below:'uiContextualDialogBelow',left:'uiContextualDialogLeft',right:'uiContextualDialogRight'},RIGHT_ALIGNED_CLASS:'uiContextualDialogRightAligned',ARROW_CLASS:{bottom:'uiContextualDialogArrowBottom',top:'uiContextualDialogArrowTop',right:'uiContextualDialogArrowRight',left:'uiContextualDialogArrowLeft'},POSITION_TO_ARROW:{above:'bottom',below:'top',left:'right',right:'left'}});Object.assign(fa.prototype,{_scrollListener:null,_scrollParent:null,_width:null,_fixed:false,_hasFooter:false,_showSubscription:null,_hideSubscription:null,_setContextSubscription:null,_resizeListener:null,_reflowSubscription:null});f.exports=fa;},null);