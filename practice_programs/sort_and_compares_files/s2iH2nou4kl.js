/*!CK:129284984!*//*1444254085,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1byz+"]); }

__d('TrendingHovercard',['cx','csx','CSS','DOM','Parent','$','Banzai','Hovercard','LitestandShareAttachment','LitestandEllipsis','TrendingEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=100,t={},u={getLinksCurrentPosition:function(v){var w=l.byClass(m(v),"_5my2");if(!w)return 0;return Number(w.getAttribute('data-position'));},registerSubtitleHack:function(v,w){var x=k.scry(v,"._6m7")[0];if(!x)return;m(w).onmouseover=function(){var y=function(){var z=p.getNumDescriptionLines(v);if(z&&z>0){j.show(x);q.add(x,z*p.getDescriptionLineHeight());m(w).onmouseover=null;}};setTimeout(y,o.getHideDelay()+s);setTimeout(y,o.getLoadingDelay()+s);};},setDialog:function(v,w,x){var y=[w.subscribe('show',function(){n.post('trending_hovercard',babelHelpers._extends({},x,{trending_event:r.HOVERCARD_LOAD}));t[v]=Date.now();}),w.subscribe('hide',function(){if(t.hasOwnProperty(v)){var z=Date.now()-t[v];if(z<0)z=0;n.post('trending_hovercard',babelHelpers._extends({},x,{time_spent:z,trending_event:r.HOVERCARD_UNLOAD}));delete t[v];}}),w.subscribe('destroy',function(){y.forEach(function(z){return z.unsubscribe();});y=null;})];o.setDialog(v,w);}};f.exports=u;},null);
__d('TrendingHovercardLogger',['TrendingHovercard','TrendingRHCLogger','XPubcontentTrendingHovercardLoggingController','AsyncRequest'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(n,o,p,q,r){var s=j.getURIBuilder().setInt('topic_id',p).setString('source',q).setInt('position',o).setInt('query_id',r).setString('event',n).getURI();new k().setURI(s).send();}var m={registerArticleForClickEvent:function(n,o,p,q,r){n.onclick=function(){var s=String(h.getLinksCurrentPosition(r));if(s>0)i.logHovercardArticleClick(s,o);l('hovercard_article_click',s,o,p,q);};},registerFeedLinkForClickEvent:function(n,o,p,q,r){n.onclick=function(){var s=String(h.getLinksCurrentPosition(r));if(s>0)i.logHovercardFeedClick(s,o);l('hovercard_feed_click',s,o,p,q);};},registerHovercardForClickEvent:function(n,o,p,q,r){n.onclick=function(){var s=String(h.getLinksCurrentPosition(r));if(s>0)i.logHovercardFeedClick(s,o);l('hovercard_context_click',s,o,p,q);};},registerShareForClickEvent:function(n,o,p,q,r){n.onclick=function(){var s=String(h.getLinksCurrentPosition(r));if(s>0)i.logHovercardShare(s,o);l('topic_share',s,o,p,q);};},registerPlayOfHovercardVideoEvent:function(n,o,p,q,r){n.addListener('beginPlayback',function(){l('hovercard_video_played',o,p,q,r);});}};f.exports=m;},null);