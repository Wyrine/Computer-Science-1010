/*!CK:489096816!*//*1448853586,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["QTD0d"]); }

__d("TimelineSeenStateConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={FT_TIMELINE_HASH_IDENTIFIER_KEY:"thid"};},null);
__d("TimelineViewportTrackingLogType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={IMPRESSION:"impression",DURATION:"duration"};},null);
__d('ComposerXEmptyAttachment',['ComposerXAttachment'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this._root=l;if(m)this.attachmentClassName=m;}k.prototype.getRoot=function(){'use strict';return this._root;};f.exports=k;},null);
__d('ProfileInfoRequestNoteFlyout',['CSS','csx','DOM','Event','LayerDestroyOnHide','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o,p){'use strict';this.$ProfileInfoRequestNoteFlyout1=p;this.$ProfileInfoRequestNoteFlyout2=j.scry(this.$ProfileInfoRequestNoteFlyout1.getContentRoot(),"._958")[0];m(k.listen(o,'click',this.$ProfileInfoRequestNoteFlyout3.bind(this)));m(this.$ProfileInfoRequestNoteFlyout1.subscribe('success',this.$ProfileInfoRequestNoteFlyout4.bind(this)));m(this.$ProfileInfoRequestNoteFlyout1.subscribe('hide',this.$ProfileInfoRequestNoteFlyout5.bind(this)));m(this.$ProfileInfoRequestNoteFlyout1.subscribe('error',this.$ProfileInfoRequestNoteFlyout6.bind(this)));}n.prototype.$ProfileInfoRequestNoteFlyout3=function(o){'use strict';this.$ProfileInfoRequestNoteFlyout1.show();o.kill();};n.prototype.$ProfileInfoRequestNoteFlyout6=function(o,p){'use strict';j.setContent(this.$ProfileInfoRequestNoteFlyout2,p.response.errorDescription);h.show(this.$ProfileInfoRequestNoteFlyout2);return false;};n.prototype.$ProfileInfoRequestNoteFlyout5=function(){'use strict';h.hide(this.$ProfileInfoRequestNoteFlyout2);};n.prototype.$ProfileInfoRequestNoteFlyout4=function(){'use strict';this.$ProfileInfoRequestNoteFlyout1.enableBehavior(l);this.$ProfileInfoRequestNoteFlyout1.hide();};f.exports=n;},null);
__d('TimelineContextItemLogger',['BanzaiLogger','Event','FBJSON','Parent','Run','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o='MTimelineXContextItemsLoggerConfig',p='impression',q='click',r='context_item_url',s='event',t="_md0",u=[];function v(x,y,z){var aa=j.parse(x.getAttribute('data-store'));aa[s]=y;if(z)aa[r]=z;h.log(o,aa);}var w={logWhenVisible:function(x){if(!u.length)l.onLeave(function(){u=[];});u.push(x);},logWhenClicked:function(x){n(i.listen(x,'click',function(y){var z=y.getTarget();if(z.nodeName!=='A')return;var aa=k.byClass(z,t);aa&&v(aa,q,z.href);}));},listenToExpand:function(x){n(x.addListener('expanded',function(){while(u.length)v(u.pop(),p);}));}};f.exports=w;},null);
__d('TimelineSecondaryColumnUnitList',['CSS','DOM','Event','Run','csx','cx','mixInEventEmitter'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=30;function p(q,r){'use strict';var s=j.listen(r,'click',(function(){this.$TimelineSecondaryColumnUnitList1=i.scry(q,"._16f_");this.$TimelineSecondaryColumnUnitList2();i.remove(r);this.emit('expanded');}).bind(this));k.onLeave(s.remove.bind(s));}p.prototype.$TimelineSecondaryColumnUnitList2=function(){'use strict';if(!this.$TimelineSecondaryColumnUnitList1.length)return;h.removeClass(this.$TimelineSecondaryColumnUnitList1.shift(),"_16f_");setTimeout(this.$TimelineSecondaryColumnUnitList2.bind(this),o);};n(p,{expanded:true});f.exports=p;},null);
__d('TimelineCapsule',['Arbiter','CSS','DataStore','DOM','DOMQuery','DOMScroll','Parent','TimelineConstants','TimelineLegacySections','Vector','$','csx','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=(function(){var v={},w={};function x(z){l.scry(z,"._3ram").forEach(function(aa){var ba=aa.getAttribute('data-endmarker'),ca=aa.getAttribute('data-pageindex'),da=function(){if(!aa.parentNode)return;j.set(o.DS_LOADED,z.id,ca);k.remove(aa);h.inform(o.SECTION_FULLY_LOADED,{scrubberKey:ba,pageIndex:ca,capsuleID:z.id,childCount:z.childNodes.length});};if(p.get(ba)){da();}else var ea=h.subscribe(o.SECTION_REGISTERED,function(fa,ga){if(ga.scrubberKey===ba){da();ea.unsubscribe();}});});h.inform('TimelineCapsule/balanced',{capsule:z});}function y(z,aa){var ba=n.byAttribute(z,'data-size');if(ba)if(i.hasClass(z.parentNode,'timelineReportContent')){aa(z);}else aa(ba);}return {removeUnit:function(z){y(z,function(aa){k.remove(aa);});},removeUnitWithID:function(z){u.removeUnit(r(z));},hideUnit:function(z){y(z,function(aa){i.addClass(aa,'fbTimelineColumnHidden');});},undoHideUnit:function(z,aa){k.remove(n.byClass(aa,'hiddenText'));y(z,function(ba){i.removeClass(ba,'fbTimelineColumnHidden');});},unplacehold:function(z){var aa=r(z);aa.style.top=null;i.removeClass(aa,'visiblePlaceholder');i.removeClass(aa,'placeholder');var ba=n.byClass(aa,'fbTimelineCapsule');delete v[ba.id][z];u.balanceCapsule(ba);},scrollToCapsule:function(z){if(!w.hasOwnProperty(z.id)){var aa=q.getElementPosition(z.parentNode);m.scrollTo(new q(q.getScrollPosition().x,aa.y-o.SCROLL_TO_OFFSET,'document'));w[z.id]=true;}},loadTwoColumnUnits:function(z,aa,ba){var ca=r(z);t(function(){var da=n.byClass(ca,'fbTimelineSection');if(da&&!aa){var ea=l.find(ca,"._2t4u"),fa=l.find(ca,"._2t4v"),ga=fa.offsetHeight-ea.offsetHeight;j.set(o.DS_COLUMN_HEIGHT_DIFFERENTIAL,ba,ga);}},x.bind(null,ca));}};})();f.exports=u;},null);
__d('TimelineUnitSelector',['DOMQuery','csx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={getUnitsWithTime:function(k){return h.scry(k,"._5jmm[data-time]");}};f.exports=j;},null);
__d('TimelineComposerUtilities',['Event','Arbiter','Bootloader','CSS','DOM','DOMQuery','Parent','TimelineUnitSelector','Vector','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=86400*31,s=86400000,t={listenToSetEstimatedDate:function(u,v){return i.subscribe('ComposerXTimelineTagger/init',function(w,x){if(m.contains(u,x.datePickerElement)){t.setEstimatedDate(x.datePickerInstance,v());x.composerTimelineTagger.switchToTagger('date');}});},listenToPublish:function(u,v){if(u.root)u=u.root;return i.subscribe('composer/publish',function(event,w){if(w.composer_id===u.id)j.loadModules(["TimelineStoryPublisher"],function(x){x.publish(w);v&&v();});});},listenToAnotherComposerOpen:function(u,v){return i.subscribe('composer/mutate',function(w,x){if(x!==u)v();});},listenToCancel:function(u,v){return h.listen(u,'click',function(event){if(n.byClass(event.getTarget(),"_306"))v();});},setEstimatedDate:function(u,v){var w,x;if(v&&k.hasClass(v,'fbTimelineCapsule')){w=v.getAttribute('data-start');x=v.getAttribute('data-end');if(w&&x){var y=new Date(x*1000),z=new Date();if(y>z){u.setDate(z.getFullYear(),z.getMonth()+1,z.getDate());}else if(x-w>2*r){u.setDate(y.getFullYear());}else u.setDate(y.getFullYear(),y.getMonth()+1);}return;}var aa=n.byClass(v,'fbTimelineCapsule');if(aa){w=aa.getAttribute('data-start');x=aa.getAttribute('data-end');var ba=p.getElementPosition(v).y,ca=[x,null],da=[w,null],ea=o.getUnitsWithTime(aa);for(var fa=0;fa<ea.length;fa++){var ga=ea[fa],ha=l.scry(ga.parentNode,'.spinePointer')[0];if(!ha)continue;var ia=p.getElementPosition(ha).y;if(ia<=ba){if(!ca[1]||ia>ca[1])ca=[ga.getAttribute('data-time'),ia];}else if(!da[1]||ia<da[1])da=[ga.getAttribute('data-time'),ia];}if(ca[0]!==null&&da[0]!==null){var ja=Math.round((parseInt(ca[0],10)+parseInt(da[0],10))/2)*1000;ja=Math.min(new Date()-s,ja);u.setDateWithTimestamp(ja);}}}};f.exports=t;},null);
__d('TimelineSection',['Arbiter','CSS','DOM','Parent','ScrollingPager','TimelineConstants','TimelineLegacySections','TimelineScrubberKey','UIPagelet'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();function q(r,s,t,u,v){'use strict';this.$TimelineSection1=r;this.$TimelineSection2=u;this.$TimelineSection3=s;this.$TimelineSection4=null;this.$TimelineSection5=null;this.$TimelineSection6=true;this.$TimelineSection7=true;this.$TimelineSection8=s!==o.RECENT_ACTIVITY;this.$TimelineSection9=v;this.$TimelineSection10=t;this.$TimelineSection11={};this.$TimelineSection12=false;this.$TimelineSection13=[];this.$TimelineSection14=false;}q.prototype.load=function(r,s){'use strict';if(this.$TimelineSection2){this.activateContentScrollLoad();return;}var t=this.$TimelineSection10;h.inform(m.SECTION_LOADING,{data:t,scrubberKey:this.$TimelineSection3});this.$TimelineSection2=true;i.removeClass(this.$TimelineSection1,'fbTimelineTimePeriodUnexpanded');i.removeClass(this.$TimelineSection1,'fbTimelineTimePeriodSuppressed');var u=n.shouldForceNoFriendActivity();t=babelHelpers._extends({},t,{highlight_unit_data:r,parent_key:this.$TimelineSection4,force_no_friend_activity:u});i.addClass(this.$TimelineSection1,'fbTimelineSectionLoading');this.$TimelineSection6=false;this.activateContentScrollLoad();if(s){this.$TimelineSection1.style.minHeight=window.innerHeight+'px';h.subscribeOnce(m.SECTION_FULLY_LOADED,(function(v,w){if(w.scrubberKey===this.$TimelineSection3){this.$TimelineSection1.style.minHeight='';n.destroyOnVisible(this.$TimelineSection3);}}).bind(this));}n.addLoadPagelet(this.$TimelineSection3,p.loadFromEndpoint('ProfileTimelineSectionPagelet',this.$TimelineSection1.id,t,{usePipe:true,jsNonblock:true,constHeight:true,append:false}));n.collapsePlaceHolderHeaders();};q.prototype.preload=function(){'use strict';i.addClass(this.$TimelineSection1,'fbTimelineTimePeriodSuppressed');i.removeClass(this.$TimelineSection1,'fbTimelineTimePeriodUnexpanded');var r=j.find(this.$TimelineSection1,'span.sectionLabel');if(r.getAttribute('data-original-label')){j.setContent(r,r.getAttribute('data-original-label'));r.removeAttribute('data-original-label');}};q.prototype.unload=function(){'use strict';if(!this.$TimelineSection2||!this.$TimelineSection8)return;this.$TimelineSection2=false;n.cancelLoadPagelet(this.$TimelineSection3);i.addClass(this.$TimelineSection1,'fbTimelineTimePeriodUnexpanded');i.removeClass(this.$TimelineSection1,'fbTimelineTimePeriodSuppressed');if(this.$TimelineSection1.nextSibling&&i.hasClass(this.$TimelineSection1.nextSibling,'fbTimelineSection')){j.setContent(this.$TimelineSection1,this.$TimelineSection1.nextSibling);i.show(this.$TimelineSection1.firstChild);}else j.empty(this.$TimelineSection1);this.deactivateScrollLoad();};q.prototype.canScrollLoad=function(){'use strict';return this.$TimelineSection6;};q.prototype.activateScrollLoad=function(){'use strict';this.$TimelineSection6=true;i.removeClass(this.$TimelineSection1,'fbTimelineTimePeriodSuppressed');i.addClass(this.$TimelineSection1,'fbTimelineTimePeriodUnexpanded');var r=n.getOnVisible(this.$TimelineSection3);if(r)r.reset();return this;};q.prototype.deactivateScrollLoad=function(){'use strict';if(!this.$TimelineSection2){this.$TimelineSection6=false;i.removeClass(this.$TimelineSection1,'fbTimelineTimePeriodUnexpanded');i.addClass(this.$TimelineSection1,'fbTimelineTimePeriodSuppressed');var r=n.getOnVisible(this.$TimelineSection3);if(r)r.remove();}j.scry(this.$TimelineSection1,'.fbTimelineSectionExpandPager').forEach(function(s){var t=l.getInstance(s.id);t&&t.removeOnVisible();var u=k.byClass(s,'stat_elem');if(u)i.removeClass(u,'async_saving');});return this;};q.prototype.canContentScrollLoad=function(){'use strict';return this.$TimelineSection7;};q.prototype.activateContentScrollLoad=function(){'use strict';this.$TimelineSection7=true;return this;};q.prototype.deactivateContentScrollLoad=function(){'use strict';this.$TimelineSection7=false;return this;};q.prototype.getNode=function(){'use strict';return this.$TimelineSection1;};q.prototype.getScrubberKey=function(){'use strict';return this.$TimelineSection3;};q.prototype.getParentKey=function(){'use strict';return this.$TimelineSection4;};q.prototype.setParentKey=function(r){'use strict';this.$TimelineSection4=r;return this;};q.prototype.addSubSection=function(r,s){'use strict';if(!Array.isArray(this.$TimelineSection5))this.$TimelineSection5=[];if(Array.isArray(this.$TimelineSection5))this.$TimelineSection5[r]=s;return this;};q.prototype.getSubSections=function(){'use strict';return this.$TimelineSection5;};q.prototype.isLoaded=function(){'use strict';return this.$TimelineSection2;};q.prototype.isRightColumnFinished=function(){'use strict';return this.$TimelineSection12;};q.prototype.setRightColumnFinished=function(){'use strict';this.$TimelineSection12=true;return this;};q.prototype.getHistoricUnitCount=function(){'use strict';return this.$TimelineSection9;};q.prototype.expand=function(r){'use strict';if(!this.$TimelineSection2)return this;var s=j.find(this.$TimelineSection1,'.fbTimelineSectionExpander');i.addClass(s.firstChild,'async_saving');r&&i.addClass(r,'async_saving');h.inform(m.SECTION_EXPAND,this.$TimelineSection3);j.scry(this.$TimelineSection1,'.fbTimelineCapsule').forEach(j.remove);this.$TimelineSection11.new_expand=true;n.cancelLoadPagelet(this.$TimelineSection3);n.addLoadPagelet(this.$TimelineSection3,p.loadFromEndpoint('ProfileTimelineSectionPagelet',s.id,this.$TimelineSection11,{usePipe:true,jsNonblock:true,constHeight:true}));return this;};q.prototype.isPermalinkPeriod=function(){'use strict';return !!this.$TimelineSection10.is_permalink_period;};q.prototype.isHidden=function(){'use strict';return this.$TimelineSection14;};q.prototype.hide=function(){'use strict';this.$TimelineSection14=true;i.hide(j.find(this.$TimelineSection1,'.fbTimelineSection'));return this;};q.prototype.isHiddenFromView=function(){'use strict';return (!this.$TimelineSection2||this.$TimelineSection14||i.hasClass(this.$TimelineSection1,'fbTimelineTimePeriodUnexpanded'));};q.prototype.hasPendingCallbacks=function(){'use strict';return this.$TimelineSection13.length>0;};q.prototype.queueDisplayCallback=function(r,s){'use strict';this.$TimelineSection13[r]=s;return this;};q.prototype.runPendingDisplayCallbacks=function(){'use strict';while(this.hasPendingCallbacks()){var r=this.$TimelineSection13.shift();if(r)r();}return this;};f.exports=q;},null);
__d('TimelineContentLoader',['Arbiter','CSS','DOM','DOMScroll','Event','OnVisible','Parent','ProfileTimelineUILogger','ScrollingPager','TimelineComponentKeys','TimelineConstants','TimelineController','TimelineDOMID','TimelineGating','TimelineLegacySections','TimelineScrubberKey','TimelineSection','TimelineSmartInsert','Vector','$','arrayContains','createArrayFromMixed','csx','debounce','ge','queryThenMutateDOM','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha){if(c.__markCompiled)c.__markCompiled();var ia=false,ja=null,ka={},la={},ma=[],na={},oa=null,pa=null,qa=80,ra=250,sa=500;function ta(){if(ia)return;s.register(q.CONTENT,za);pa=h.subscribe(r.SECTION_EXPAND,function(ab,bb){za.navigateToSection(bb);});ia=true;}var ua=ea(function(ab,bb,cb){var db=v.get(ab).getHistoricUnitCount();bb-=db;cb-=1;if(db==-1||cb<=0||bb<0)return;var eb=za.getNextSectionKey(ab);if(eb){v.get(eb).load();ua(eb,bb,cb);}},sa);function va(ab,bb){if(!bb)bb=0;if(bb<qa&&!ab())setTimeout(va.bind(null,ab,bb+1),ra);}function wa(ab){va(function(){if(ab===w.WAY_BACK)return true;var bb=za.getNextSectionKey(ab);if(bb){ya(bb);return true;}return false;});}function xa(ab,bb,cb){va(function(){if(bb===w.WAY_BACK)return true;var db=za.getNextSectionKey(bb);if(db){v.addOnVisible(db,new m(ab,ya.bind(null,db),false,cb||1000));return true;}return false;});}function ya(ab){var bb=v.get(ab);if(bb&&bb.canScrollLoad()){bb.load();if(oa)ua(ab,oa.required_units,oa.max_parallelism);}}var za={CURRENT_SECTION_OFFSET:150,registerTimePeriod:function(ab,bb,cb,db,eb,fb,gb){ta();if(ba(ma,bb))return;if(la)Object.assign(cb||{},la);var hb=new x(ab,bb,cb,db,gb);if(!eb){v.setMainSectionOrder(bb,fb);ka[bb]=true;}else{hb.setParentKey(eb);var ib=v.get(eb);if(ib)ib.addSubSection(fb,hb);}v.set(bb,hb);za.checkCurrentSectionChange();h.inform(r.SECTION_REGISTERED,{scrubberKey:bb,section:hb});},reset:function(){v.removeAllOnVisibles();v.cancelLoadPagelets();for(var ab in na){na[ab].unsubscribe();delete na[ab];}pa&&pa.unsubscribe();pa=null;v.removeAll();ja=null;ka={};la={};ma=[];ia=false;},checkCurrentSectionChange:function(){var ab=null;ga(function(){ab=za.getCurrentSection();},function(){var bb=ja&&ja.getScrubberKey();if(ab&&ab.getScrubberKey()!==bb&&!ab.isPermalinkPeriod()){ja=ab;var cb=ab.getScrubberKey(),db=ab.getParentKey();if(!db){db=cb;cb=null;}s.sectionHasChanged(db,cb);}});},setParallelLoadConfig:function(ab){oa=ab;},getCurrentSection:function(){var ab={},bb=v.getAll();for(var cb in bb){var db=bb[cb];if(!db||db.isHiddenFromView())continue;var eb=z.getElementPosition(db.getNode(),'viewport').y;if(db.getScrubberKey()===w.RECENT_ACTIVITY)eb--;if(eb<za.CURRENT_SECTION_OFFSET)ab[eb]=db;}var fb=Math.max.apply(null,Object.keys(ab)),gb=v.getMainSectionOrder(),hb=fb==-Infinity;if(!hb){return ab[fb];}else if(gb[0])return v.get(gb[0]);return null;},getLastVisibleSection:function(){var ab=v.getMainSectionOrder();for(var bb=ab.length-1;bb>=0;bb--){var cb=v.get(ab[bb]);if(cb&&!cb.isHiddenFromView())return cb;}return null;},getRecentActivitySection:function(){return v.get(w.RECENT_ACTIVITY);},capsuleForCurrentSection:function(){var ab=za.getCurrentSection();return ab&&j.scry(ab.getNode(),'.fbTimelineCapsule')[0];},enableScrollLoad:function(ab,bb,cb,db){ab=aa(ab);var eb=n.byClass(ab,'fbTimelineSection')||ab.parentNode,fb=eb&&j.scry(eb,'.fbTimelineCapsule')[0];if(!fb)return;if(cb===null){xa(ab,bb,db);}else s.runOnceWhenSectionFullyLoaded(xa.bind(null,ab,bb,db),bb,cb);},expandSectionOnClick:function(ab,bb){l.listen(ab,'click',function(cb){cb.prevent();v.get(bb).expand();});},expandSubSectionsOnClick:function(ab,bb){l.listen(ab,'click',function(cb){cb.prevent();o.logSectionExpanderClick(bb);v.cancelLoadPagelet(bb);var db=v.get(bb),eb=db.getSubSections();if(eb&&eb.length)za.navigateToSection(eb[0].getScrubberKey());});},getNextSectionKey:function(ab){var bb=v.getMainSectionOrder();for(var cb=0;cb<bb.length-1;cb++)if(bb[cb]==ab){while(cb<bb.length-1&&!bb[cb+1])cb++;return bb[cb+1];}var db=v.get(ab);if(!db||!db.getParentKey())return;var eb=v.get(db.getParentKey());if(!eb)return;var fb=eb.getSubSections(),gb=fb[fb.length-1];if(db.getScrubberKey()===gb.getScrubberKey())return za.getNextSectionKey(db.getParentKey());for(var hb=0;hb<fb.length-1;hb++)if(fb[hb].getScrubberKey()==ab)return fb[hb+1].getScrubberKey();},hideSection:function(ab){var bb=v.get(ab);if(bb)bb.hide();var cb=s.getCurrentScrubber();if(cb){var db=null;if(!ka[ab]){db=s.getCurrentScrubber().getSubnav(bb.getParentKey(),ab);}else db=s.getCurrentScrubber().getNav(ab);db&&i.hide(db);}var eb=s.getCurrentStickyHeaderNav();eb&&eb.removeTimePeriod(ab);},loadSectionOnClick:function(ab,bb){l.listen(ab,'click',function(cb){cb.prevent();v.get(bb).load();});},removeSection:function(ab){v.removeOnVisible(ab);v.remove(ab);delete ka[ab];var bb=s.getCurrentStickyHeaderNav();bb&&bb.removeTimePeriod(ab);ma.push(ab);},removeSectionParent:function(ab){j.remove(aa(ab).parentNode);},navigateToSection:function(ab,bb,cb){bb=!!bb;var db=ab,eb=v.get(ab);if(!eb)return;if(!eb.isLoaded()){y.enable();j.scry(aa(t.TAB_CONTENT),'.fbTimelineShowOlderSections').forEach(j.remove);}if(!ka[ab]){if(!eb.isLoaded())eb.getNode().style.minHeight=z.getViewportDimensions().y+'px';var fb=h.subscribe(r.SECTION_FULLY_LOADED,function(pb,qb){if(qb.scrubberKey===ab){eb.getNode().style.minHeight='';fb.unsubscribe();}});db=eb.getParentKey();var gb=v.get(db);if(gb){var hb=gb.getNode();if(!i.hasClass(hb,'fbTimelineSectionExpanded')){k.scrollTo(hb,0);i.addClass(hb,'fbTimelineSectionExpanded');j.scry(hb,'.fbTimelineCapsule').forEach(j.remove);j.scry(hb,'div.fbTimelineSectionExpandPager').forEach(j.remove);j.scry(hb,'div.fbTimelineContentHeader').forEach(j.remove);j.scry(hb,"._5vf").forEach(function(pb){if(!pb.getAttribute('data-subsection'))j.remove(pb);});}}var ib=za.getNextSectionKey(db),jb=v.getOnVisible(ib);if(jb)jb.setBuffer(0);}var kb=v.getMainSectionOrder();for(var lb=0;lb<kb.length;lb++){var mb=kb[lb];if(!mb)continue;if(mb==db)break;v.get(mb).deactivateScrollLoad().deactivateContentScrollLoad();}eb.load(cb,true);v.collapsePlaceHolderHeaders();var nb=z.getScrollPosition().x,ob=z.getElementPosition(eb.getNode()).y;if(!bb)k.scrollTo(new z(nb,ob-r.SCROLL_TO_OFFSET,'document'),!u.noScrollAnimation,false,false,0,function(){var pb=z.getElementPosition(eb.getNode()).y;k.scrollTo(new z(nb,pb-r.SCROLL_TO_OFFSET,'document'),false);if(ab!==w.RECENT_ACTIVITY){var qb=j.scry(eb.getNode(),'h3.uiHeaderTitle')[0];if(qb){qb.tabIndex=0;qb.focus();}}});},appendContentAfterLoad:function(ab,bb,cb){s.runOnceWhenSectionFullyLoaded(j.appendContent.bind(null,aa(ab),bb),cb,'0');},markSectionAsLoaded:function(ab,bb,cb){s.runOnceWhenSectionFullyLoaded(function(){fa(ab)&&i.removeClass(aa(ab).parentNode,'fbTimelineSectionLoading');},bb,cb);},scrollToTimeline:function(ab,bb){s.runOnceWhenSectionFullyLoaded(function(){var cb=aa('fbTimelineHeadline');ha(function(){k.scrollTo(cb);});},ab,bb);},suppressSectionsAbove:function(ab){var bb,cb,db=v.getMainSectionOrder();for(var eb=0;eb<db.length;eb++){var fb=db[eb];if(!fb)continue;bb=v.get(fb).getNode();cb=null;if(ca(ab.parentNode.children).indexOf(ab)<=ca(bb.parentNode.children).indexOf(bb)){cb=fb;break;}v.get(fb).deactivateScrollLoad();}if(cb)za.navigateToSection(cb,true);},forceNoFriendActivity:function(){v.forceNoFriendActivity();},removeDupes:function(ab){var bb=fa(ab);if(!bb)return;var cb=j.scry(bb,'li.fbTimelineUnit'),db={};for(var eb=0;eb<cb.length;eb++){var fb=cb[eb];if(fb.id&&fb.id.startsWith('tl_unit_')){var gb=fb.id.substring(8,fb.id.length),hb=j.scry(fb,'div.timelineUnitContainer');if(hb.length>0)gb=gb+hb[0].getAttribute('data-time');if(db.hasOwnProperty(gb)){fb.id='dupe_unit_'+Math.random();fb.className="hidden_elem";}else db[gb]=1;}}},removeLoadingState:function(ab){fa(ab)&&i.removeClass(aa(ab),'fbTimelineSectionLoading');},updatePagerAfterLoad:function(ab,bb,cb,db,eb){var fb=p.getInstance(ab.firstChild.id);if(!fb){na[ab.firstChild.id]=h.subscribe(p.REGISTERED,function(hb,ib){na[ab.firstChild.id].unsubscribe();delete na[ab.firstChild.id];if(ib.id===ab.firstChild.id)za.updatePagerAfterLoad(ab,bb,cb,db,eb);});return;}var gb=fb.getHandler();fb.setHandler(function(hb){i.addClass(ab,'async_saving');gb(hb);});s.runOnceWhenSectionFullyLoaded(function(){i.removeClass(ab,'fbTimelineHiddenPager');fb.checkBuffer();},cb,db);if(eb)s.runOnceWhenSectionFullyLoaded(s.adjustScrollingPagerBuffer.bind(null,ab.firstChild.id,cb),cb,db);},repositionDialog:function(ab){h.subscribe(r.SECTION_LOADED,function(){ab.updatePosition();});},rightColumnFinished:function(ab){var bb=v.get(ab);bb.setRightColumnFinished();},loadNextSection:function(ab){wa(ab);}};f.exports=za;},null);
__d('TimelineLogging',['TimelineComponentKeys','TimelineController','reportData'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=false,l=0,m=null,n=null,o={init:function(p){if(k)return;l=p;i.register(h.LOGGING,this);},reset:function(){k=false;l=0;m=null;},log:function(p,q){q.profile_id=l;j(p,{gt:q});},logSectionChange:function(p,q){var r={timeline_section_change:1,key:p};if(m&&p==m){r.timeline_scrubber=1;m=null;}if(n&&p==n){r.sticky_header_nav=1;n=null;}o.log('timeline',r);},logScrubberClick:function(p){m=p;},logStickyHeaderNavClick:function(p){n=p;}};f.exports=o;},null);
__d('TimelineStickyHeaderComposerX',['Arbiter','Bootloader','ComposerXController','CSS','DOMQuery','Event','Parent','Run','TimelineComposerUtilities','TimelineContentLoader','TimelineStickyHeader','Vector','csx','cx','getElementText','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x=800;function y(aa){return aa&&aa.getContext&&n.byClass(aa.getContext(),"_2wp");}function z(aa){'use strict';this._composerRoot=aa;this._tokens=[p.listenToSetEstimatedDate(this._composerRoot,q.capsuleForCurrentSection),p.listenToPublish(this._composerRoot,this._close.bind(this)),h.subscribe('PhotoSnowlift.OPEN',this._close.bind(this)),h.subscribe('TimelineMLE/mleFlyoutShown',(function(ba,ca){if(y(ca)===this._composerRoot)j.reset(this._composerRoot);}).bind(this)),h.subscribe('composer/initializedAttachment',(function(ba,ca){if(ca.composerRoot===this._composerRoot){this._registerClickToDismiss();if(!ca.isInitial)this._closeMLE();}else this._close();}).bind(this)),h.subscribe(r.ADJUST_WIDTH,this._toggleNarrowMode.bind(this))];this._clickCancelToken=p.listenToCancel(this._composerRoot,this._close.bind(this));o.onLeave((function(){while(this._tokens.length)this._tokens.pop().unsubscribe();this._clearClickDismissToken();if(this._clickCancelToken){this._clickCancelToken.remove();this._clickCancelToken=null;}}).bind(this));}z.prototype._toggleNarrowMode=function(event,aa){'use strict';if(this._isNarrowMode)return;i.loadModules(["Tooltip"],(function(ba){w((function(){this._isNarrowMode=s.getElementDimensions(aa).x+s.getElementDimensions(this._composerRoot).x>x;}).bind(this),(function(){if(!this._isNarrowMode)return;k.addClass(this._composerRoot,"_2wq");var ca=l.scry(this._composerRoot,"._9lb");for(var da=0;da<ca.length;da++){var ea=ca[da],fa=v(ea);ba.set(ea,fa);}}).bind(this));}).bind(this));return false;};z.prototype._registerClickToDismiss=function(){'use strict';var aa=k.hasClass(l.find(this._composerRoot,"._yq"),"_519b");if(!aa){this._clearClickDismissToken();return;}this._clickDismissToken=m.listen(document.body,'click',(function(ba){var ca=n.byClass(ba.getTarget(),"_2wp");if(!ca){this._close();this._clearClickDismissToken();}}).bind(this));};z.prototype._clearClickDismissToken=function(){'use strict';if(this._clickDismissToken){this._clickDismissToken.remove();this._clickDismissToken=null;}};z.prototype._close=function(){'use strict';this._clearClickDismissToken();this._closeMLE();j.reset(this._composerRoot);};z.prototype._closeMLE=function(){'use strict';i.loadModules(["TimelineMLE"],(function(aa){var ba=aa.getFlyout();if(y(ba)===this._composerRoot)aa.hideFlyout();}).bind(this));};f.exports=z;},null);
__d('TimelineStickyColumn',['Arbiter','CSS','DOMQuery','Event','Run','Style','TimelineComponentKeys','TimelineConstants','TimelineContentLoader','TimelineController','UITinyViewportAction','Vector','csx','queryThenMutateDOM','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=100,x=15,y=15,z=35,aa="._2t4u",ba="._5nb8",ca="._2t4v",da=false,ea={},fa=null,ga=null,ha=null,ia=null,ja,ka,la,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta;function ua(){var nb;v('ModalLayer',function(ob){return nb=ob;});if(nb)return !!nb.getTopmostModalLayer();return false;}function va(){ja=p.getCurrentSection();ka=p.getRecentActivitySection();if(!ja||!ja.isRightColumnFinished())return;var nb,ob;if(ea.hasDecoupledColumns){nb=hb(ka);ob=fb(ka);}else{ob=fb(ja);nb=gb(ja);}ma=nb?nb.offsetHeight:0;na=ob?ob.offsetHeight:0;oa=s.getViewportDimensions().y;sa=nb?s.getElementPosition(nb).y:0;la=p.getLastVisibleSection();pa=ja.getNode().offsetHeight;ta=document.body.clientWidth<document.body.scrollWidth;}function wa(){if(ua())return false;if(!ea.hasDecoupledColumns&&ja)return ja.isRightColumnFinished();if(ka&&ja===ka&&qa>=ra)return ka.isRightColumnFinished();return true;}function xa(){if(!ja)return;if(!ea.hasDecoupledColumns&&ia&&ia!==ja){var nb=fb(ia);if(nb)ib(nb,'','','');}ra=qa;qa=s.getScrollPosition().y;var ob;if(ea.hasDecoupledColumns){ob=fb(ka);}else ob=fb(ja);if(!ob)return;if(ta){ib(ob,'','','');return;}if(wa()){ya(ob);ia=bb(ob)==='fixed'?ja:null;}}function ya(nb){if(na>=ma||ma<=oa)return;var ob=sa-jb();if(qa<=ob){ib(nb,'','','');return;}var pb=y+z,qb=qa+oa-pb,rb=qa+na+jb(),sb=sa+pa;if(ja===la)sb+=z;if(!ea.hasDecoupledColumns&&sb<=Math.min(rb,qb)){ib(nb,'absolute','',y+'px');return;}var tb=oa-y-jb();if(na<=tb){ib(nb,'fixed',jb()+'px','');return;}if(qa<ra){za(nb);}else ab(nb);}function za(nb){var ob=false;if(bb(nb)==='absolute'){var pb=sa+ma-jb(),qb=qa+jb()-sa;if(!!db(nb)&&qb<=db(nb)){ob=true;}else if(nb.style.bottom!==''&&qa<=pb-na)ob=true;}if(ob){ib(nb,'fixed',jb()+'px','');return;}if(bb(nb)==='absolute'&&!!db(nb))return;if(cb(nb)){if(db(nb)>=jb())return;var rb=oa-z,sb=qa-sa-(na-rb);if(!ea.hasDecoupledColumns&&ja===ka)sb+=w;if(ra)sb+=ra-qa;ib(nb,'absolute',sb+'px','');return;}}function ab(nb){var ob,pb,qb=false;if(!cb(nb)){ob=db(nb);pb=eb(nb);if(ob>0||pb===0){var rb=qa+oa+z,sb=sa+ob+na-z;if(rb>=sb)qb=true;}}if(!qb)if(qa===ra||!cb(nb))return;if(qb){ob=oa-na-y-z;ib(nb,'fixed',ob+'px','');return;}if(cb(nb)&&db(nb)>=jb()){ob=qa-sa+jb();if(ra)ob+=ra-qa;ib(nb,'absolute',ob+'px','');}}function bb(nb){switch(nb.style.position){case 'absolute':case 'static':return nb.style.position;default:return i.hasClass(nb,'fixed_always')?'fixed':'static';}}function cb(nb){switch(bb(nb)){case 'absolute':case 'static':return false;default:return true;}}function db(nb){return nb.style.top?parseInt(nb.style.top,10):0;}function eb(nb){return nb.style.bottom?parseInt(nb.style.bottom,10):0;}function fb(nb){if(nb)return j.scry(nb.getNode(),ca)[0];return null;}function gb(nb){if(nb)return j.scry(nb.getNode(),aa)[0];return null;}function hb(nb){if(nb)return j.scry(nb.getNode(),ba)[0];return null;}function ib(nb,ob,pb,qb){m.set(nb,'bottom',qb);if(ob==='fixed'){i.addClass(nb,'fixed_always');m.set(nb,'position','');}else{i.removeClass(nb,'fixed_always');m.set(nb,'position',ob);}m.set(nb,'top',pb);h.inform('reflow');}function jb(){return r.isTiny()?x:w;}function kb(){u(va,xa);}function lb(){da=false;ia=null;while(fa&&fa.length)fa.pop().remove();fa=null;if(ga)ga.unsubscribe();if(ha)ha.unsubscribe();}var mb={init:function(nb){if(!da){da=true;ea=nb;fa=[k.listen(window,'scroll',kb),k.listen(window,'resize',kb)];ga=h.subscribe(o.SECTION_FULLY_LOADED,kb);ha=h.subscribe(o.UNIT_SEGMENT_LOADED,kb);l.onLeave(lb);q.register(n.STICKY_COLUMN,this);}},adjust:function(){if(da){va();xa();}}};f.exports=mb;},null);
__d('TimelineViewportTracking',['Arbiter','Banzai','DOM','TimelineSeenStateConstants','TimelineViewportTrackingLogType','ViewportTracking','$','csx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s;q=babelHelpers.inherits(t,m);r=q&&q.prototype;t.prototype.getAllStories=function(){'use strict';var u=j.scry(this.getStream(),"._5pat"),v=[];for(var w=0;w<u.length;w++)if(this.getStoryID(u[w]))v.push(u[w]);return v;};t.prototype.getStream=function(){'use strict';if(!this.$TimelineViewportTracking1)this.$TimelineViewportTracking1=n('timeline_tab_content');return this.$TimelineViewportTracking1;};t.prototype.getStoryID=function(u){'use strict';var v=JSON.parse(u.getAttribute('data-ft'));if(v){var w=k.FT_TIMELINE_HASH_IDENTIFIER_KEY;return v[w];}return null;};t.prototype.getDataToLog=function(u){'use strict';var v=JSON.parse(u.getAttribute('data-ft'));return {ft:v,log_type:l.IMPRESSION};};t.prototype.getTimetrackingDataToLog=function(u){'use strict';var v=r.getTimetrackingDataToLog.call(this,u);v.log_type=l.DURATION;return v;};t.prototype.sendDataToLog=function(u,v,w,x){'use strict';if(!v.ft)return;var y={};if(x)y.retry=x;if(w)y.delay=2000;i.post('timeline_feed_tracking',v,y);};t.prototype.getDataFromConfig=function(u){'use strict';this.timeout=u.record_delay;this.isSeenStateLoggingEnabled=u.is_seen_state_logging_enabled;this.isTimetrackingEnabled=u.is_timetracking_enabled;this.vpvdDebug=!!u.vpvd_debug;p(h.subscribe(['TimelineConstants/unitSegmentLoaded'],(function(){this.invalidateAllStoriesCache();this.invalidateVisibleStoriesCache();}).bind(this)));};t.prototype.getTimeout=function(){'use strict';return this.timeout;};t.prototype.cleanup=function(){'use strict';s=null;r.cleanup.call(this);};function t(){'use strict';q.apply(this,arguments);}f.exports={getInstance:function(){return s;},init:function(u){if(s)return;s=new t();s.init(u);}};},null);