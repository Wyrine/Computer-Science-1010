/*!CK:3477540817!*//*1448259382,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["TItkv"]); }

__d("ProfileIntroCardLoggerEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ABOUT_NUX_DISMISS:"about_nux_dismiss",ABOUT_NUX_IMPRESSION:"about_nux_impression",BIO_ADD_CLICK:"bio_add_click",BIO_ADD_PROMPT_IMPRESSION:"bio_add_prompt_impression",BIO_EDIT_CANCEL_CLICK:"bio_edit_cancel_click",BIO_EDIT_CLICK:"bio_edit_click",BIO_EDIT_SAVE_CLICK:"bio_edit_save_click",BIO_IMPRESSION:"bio_impression",CONTEXT_ITEM_ADD_CLICK:"context_item_add_click",CONTEXT_ITEM_ADD_PROMPT_IMPRESSION:"context_item_add_prompt_impression",CONTEXT_ITEM_EDIT_CLICK:"context_item_edit_click",CONTEXT_ITEM_IMPRESSION:"context_item_impression",CONTEXT_ITEM_VIEW_CLICK:"context_item_view_click",FAVORITES_ADD_CLICK:"favorites_add_click",FAVORITES_ADD_PROMPT_IMPRESSION:"favorites_add_prompt_impression",FAVORITES_EDIT_CLICK:"favorites_edit_click",FAVORITES_IMPRESSION:"favorites_impression",FEATURED_PHOTOS_ADD_CLICK:"fav_photos_add_click",FEATURED_PHOTOS_ADD_PROMPT_IMPRESSION:"fav_photos_add_prompt_impression",FEATURED_PHOTOS_ADD_IN_EDITING_VIEW_CLICK:"fav_photos_add_in_editing_view_click",FEATURED_PHOTOS_ADD_IN_EDITING_VIEW_TILE_CLICK:"fav_photos_add_in_editing_view_tile_click",FEATURED_PHOTOS_EDIT_CANCEL_CLICK:"fav_photos_edit_cancel_click",FEATURED_PHOTOS_EDIT_CLICK:"fav_photos_edit_click",FEATURED_PHOTOS_EDIT_SAVE_CLICK:"fav_photos_edit_save_click",FEATURED_PHOTOS_IMPRESSION:"fav_photos_impression",FEATURED_PHOTOS_REPLACE_IN_EDITING_VIEW_TILE_CLICK:"fav_photos_replace_in_editing_view_tile_click",FEATURED_PHOTOS_SELECT_FROM_FB_CLICK:"fav_photos_select_from_fb_click",FEATURED_PHOTOS_UPLOAD_CLICK:"fav_photos_upload_click",INTRO_CARD_EXPANSION:"intro_card_expansion",INTRO_CARD_IMPRESSION:"intro_card_impression",NUX_DISMISS:"nux_dismiss",NUX_IMPRESSION:"nux_impression",SELF_ITEM_VIEW_CLICK:"self_item_view_click",BIO_CREATE_MUTATION:"bio_create_mutation",BIO_UPDATE_MUTATION:"bio_update_mutation",BIO_DELETE_MUTATION:"bio_delete_mutation",PHOTO_CREATE_MUTATION:"photo_create_mutation",PHOTO_DELETE_MUTATION:"photo_delete_mutation"};},null);
__d("ProfileIntroCardParams",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ABOUT_IDS:"about_ids",BIO:"bio",FAVORITE:"favorite",PHOTO_ID:"photo_id",PUBLISH_TO_FEED:"publish_to_feed"};},null);
__d("ProfileIntroCardStrings",["fbt"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={PLACEHOLDER:h._("Enter text here"),EDIT:h._("Edit"),EDIT_BIO:h._("Edit Bio"),CANCEL:h._("Cancel"),SAVE:h._("Save"),POST_TO_FEED:h._("Post to News Feed"),getRemainingCharacters:function(j){return h._("{remainingCharacters} characters left",[h.param("remainingCharacters",j)]);}};f.exports=i;},null);
__d('ReactTransitionChildMapping',['flattenChildren'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={getChildMapping:function(j){if(!j)return j;return h(j);},mergeChildMappings:function(j,k){j=j||{};k=k||{};function l(t){if(k.hasOwnProperty(t)){return k[t];}else return j[t];}var m={},n=[];for(var o in j)if(k.hasOwnProperty(o)){if(n.length){m[o]=n;n=[];}}else n.push(o);var p,q={};for(var r in k){if(m.hasOwnProperty(r))for(p=0;p<m[r].length;p++){var s=m[r][p];q[m[r][p]]=l(s);}q[r]=l(r);}for(p=0;p<n.length;p++)q[n[p]]=l(n[p]);return q;}};f.exports=i;},null);
__d('ReactTransitionGroup',['React','ReactTransitionChildMapping','Object.assign','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'ReactTransitionGroup',propTypes:{component:h.PropTypes.any,childFactory:h.PropTypes.func},getDefaultProps:function(){return {component:'span',childFactory:k.thatReturnsArgument};},getInitialState:function(){return {children:i.getChildMapping(this.props.children)};},componentWillMount:function(){this.currentlyTransitioningKeys={};this.keysToEnter=[];this.keysToLeave=[];},componentDidMount:function(){var m=this.state.children;for(var n in m)if(m[n])this.performAppear(n);},componentWillReceiveProps:function(m){var n=i.getChildMapping(m.children),o=this.state.children;this.setState({children:i.mergeChildMappings(o,n)});var p;for(p in n){var q=o&&o.hasOwnProperty(p);if(n[p]&&!q&&!this.currentlyTransitioningKeys[p])this.keysToEnter.push(p);}for(p in o){var r=n&&n.hasOwnProperty(p);if(o[p]&&!r&&!this.currentlyTransitioningKeys[p])this.keysToLeave.push(p);}},componentDidUpdate:function(){var m=this.keysToEnter;this.keysToEnter=[];m.forEach(this.performEnter);var n=this.keysToLeave;this.keysToLeave=[];n.forEach(this.performLeave);},performAppear:function(m){this.currentlyTransitioningKeys[m]=true;var n=this.refs[m];if(n.componentWillAppear){n.componentWillAppear(this._handleDoneAppearing.bind(this,m));}else this._handleDoneAppearing(m);},_handleDoneAppearing:function(m){var n=this.refs[m];if(n.componentDidAppear)n.componentDidAppear();delete this.currentlyTransitioningKeys[m];var o=i.getChildMapping(this.props.children);if(!o||!o.hasOwnProperty(m))this.performLeave(m);},performEnter:function(m){this.currentlyTransitioningKeys[m]=true;var n=this.refs[m];if(n.componentWillEnter){n.componentWillEnter(this._handleDoneEntering.bind(this,m));}else this._handleDoneEntering(m);},_handleDoneEntering:function(m){var n=this.refs[m];if(n.componentDidEnter)n.componentDidEnter();delete this.currentlyTransitioningKeys[m];var o=i.getChildMapping(this.props.children);if(!o||!o.hasOwnProperty(m))this.performLeave(m);},performLeave:function(m){this.currentlyTransitioningKeys[m]=true;var n=this.refs[m];if(n.componentWillLeave){n.componentWillLeave(this._handleDoneLeaving.bind(this,m));}else this._handleDoneLeaving(m);},_handleDoneLeaving:function(m){var n=this.refs[m];if(n.componentDidLeave)n.componentDidLeave();delete this.currentlyTransitioningKeys[m];var o=i.getChildMapping(this.props.children);if(o&&o.hasOwnProperty(m)){this.performEnter(m);}else this.setState(function(p){var q=j({},p.children);delete q[m];return {children:q};});},render:function(){var m=[];for(var n in this.state.children){var o=this.state.children[n];if(o)m.push(h.cloneElement(this.props.childFactory(o),{ref:n,key:n}));}return h.createElement(this.props.component,this.props,m);}});f.exports=l;},null);
__d('ReactCSSTransitionGroupChild',['React','ReactDOM','CSSCore','ReactTransitionEvents','onlyChild'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=17,n=h.createClass({displayName:'ReactCSSTransitionGroupChild',propTypes:{name:h.PropTypes.oneOfType([h.PropTypes.string,h.PropTypes.shape({enter:h.PropTypes.string,leave:h.PropTypes.string,active:h.PropTypes.string}),h.PropTypes.shape({enter:h.PropTypes.string,enterActive:h.PropTypes.string,leave:h.PropTypes.string,leaveActive:h.PropTypes.string,appear:h.PropTypes.string,appearActive:h.PropTypes.string})]).isRequired,appear:h.PropTypes.bool,enter:h.PropTypes.bool,leave:h.PropTypes.bool,appearTimeout:h.PropTypes.number,enterTimeout:h.PropTypes.number,leaveTimeout:h.PropTypes.number},transition:function(o,p,q){var r=i.findDOMNode(this);if(!r){if(p)p();return;}var s=this.props.name[o]||this.props.name+'-'+o,t=this.props.name[o+'Active']||s+'-active',u=null,v=function(w){if(w&&w.target!==r)return;clearTimeout(u);j.removeClass(r,s);j.removeClass(r,t);k.removeEndEventListener(r,v);if(p)p();};j.addClass(r,s);this.queueClass(t);if(q){u=setTimeout(v,q);}else k.addEndEventListener(r,v);},queueClass:function(o){this.classNameQueue.push(o);if(!this.timeout)this.timeout=setTimeout(this.flushClassNameQueue,m);},flushClassNameQueue:function(){if(this.isMounted())this.classNameQueue.forEach(j.addClass.bind(j,i.findDOMNode(this)));this.classNameQueue.length=0;this.timeout=null;},componentWillMount:function(){this.classNameQueue=[];},componentWillUnmount:function(){if(this.timeout)clearTimeout(this.timeout);},componentWillAppear:function(o){if(this.props.appear){this.transition('appear',o,this.props.appearTimeout);}else o();},componentWillEnter:function(o){if(this.props.enter){this.transition('enter',o,this.props.enterTimeout);}else o();},componentWillLeave:function(o){if(this.props.leave){this.transition('leave',o,this.props.leaveTimeout);}else o();},render:function(){return l(this.props.children);}});f.exports=n;},null);
__d('ReactCSSTransitionGroup',['React','Object.assign','ReactTransitionGroup','ReactCSSTransitionGroupChild'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();function l(n){var o='transition'+n+'Timeout',p='transition'+n;return function(q){if(q[p])if(q[o]==null){return new Error(o+' wasn\'t supplied to ReactCSSTransitionGroup: '+'this can cause unreliable animations and won\'t be supported in '+'a future version of React. See '+'https://fb.me/react-animation-transition-group-timeout for more '+'information.');}else if(typeof q[o]!=='number')return new Error(o+' must be a number (in milliseconds)');};}var m=h.createClass({displayName:'ReactCSSTransitionGroup',propTypes:{transitionName:k.propTypes.name,transitionAppear:h.PropTypes.bool,transitionEnter:h.PropTypes.bool,transitionLeave:h.PropTypes.bool,transitionAppearTimeout:l('Appear'),transitionEnterTimeout:l('Enter'),transitionLeaveTimeout:l('Leave')},getDefaultProps:function(){return {transitionAppear:false,transitionEnter:true,transitionLeave:true};},_wrapChild:function(n){return h.createElement(k,{name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave,appearTimeout:this.props.transitionAppearTimeout,enterTimeout:this.props.transitionEnterTimeout,leaveTimeout:this.props.transitionLeaveTimeout},n);},render:function(){return h.createElement(j,i({},this.props,{childFactory:this._wrapChild}));}});f.exports=m;},null);
__d('ProfileIntroCardPublishToFeedToggle.react',['ProfileIntroCardStrings','React','ReactComponentWithPureRenderMixin','FBToggleSwitch.react','InputLabel.react','XUIGrayText.react','classWithMixins','cx','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r;q=babelHelpers.inherits(s,n(i.Component,p(j)));r=q&&q.prototype;function s(t){'use strict';r.constructor.call(this,t);this.state={isActive:this.props.active,isEditMode:false};}s.prototype.render=function(){'use strict';return (i.createElement(l,{className:this.props.className},i.createElement(k,{animate:true,checked:this.state.isActive,onToggle:(function(t){return this.setState({isActive:t},(function(){return this.props.onToggle(t);}).bind(this));}).bind(this)}),i.createElement('label',null,i.createElement(m,{className:"_2ffa"+(this.state.isActive?' '+"_tj_":''),weight:'normal'},h.POST_TO_FEED))));};f.exports=s;},null);
__d('ProfileIntroCardBioEditForm.react',['AsyncRequest','Keys','ProfileIntroCardParams','ProfileIntroCardStrings','React','XProfileIntroCardSaveBioAsyncController','Image.react','LeftRight.react','ProfileIntroCardPublishToFeedToggle.react','ReactCSSTransitionGroup','XUIGrayText.react','XUIButton.react','cx','xuiglyph'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w,x=4,y=2000,z=500;v=babelHelpers.inherits(aa,l.Component);w=v&&v.prototype;function aa(ba){'use strict';w.constructor.call(this,ba);this.state={isSaving:false,placeholderIndex:0,publishToFeed:false,text:this.props.initialText||''};this.$ProfileIntroCardBioEditForm1=this.$ProfileIntroCardBioEditForm1.bind(this);this.$ProfileIntroCardBioEditForm2=this.$ProfileIntroCardBioEditForm2.bind(this);this.$ProfileIntroCardBioEditForm3=this.$ProfileIntroCardBioEditForm3.bind(this);this.$ProfileIntroCardBioEditForm4=this.$ProfileIntroCardBioEditForm4.bind(this);}aa.prototype.componentDidMount=function(){'use strict';var ba=this.props.placeholders;if(ba.length>1)this.$ProfileIntroCardBioEditForm5=setInterval((function(){return this.setState({placeholderIndex:(this.state.placeholderIndex+1)%ba.length});}).bind(this),y);};aa.prototype.componentWillUnmount=function(){'use strict';if(this.$ProfileIntroCardBioEditForm5){clearInterval(this.$ProfileIntroCardBioEditForm5);this.$ProfileIntroCardBioEditForm5=null;}};aa.prototype.render=function(){'use strict';var ba=this.props.placeholders[this.state.placeholderIndex],ca=null;if(!this.state.text)ca=l.createElement(q,{transitionEnterTimeout:z,transitionLeaveTimeout:z,transitionName:'fade'},l.createElement(r,{className:"_4zxn",key:'placeholder'+this.state.placeholderIndex},ba));var da=this.props.canPublishToFeed,ea=l.createElement(r,{className:"_4qpq"+(!da?' '+"_3-8h":''),display:'block'},this.$ProfileIntroCardBioEditForm6()),fa=null;if(da)fa=l.createElement(o,{className:"_5njd _2ph-"},l.createElement(p,{onToggle:(function(ga){return this.setState({publishToFeed:ga});}).bind(this)}),ea);return (l.createElement('form',{className:(this.state.isSaving?"async_saving":'')+(' '+"_4xd8")+(' '+"_3-97")+(' '+"_3-8y"),method:'post',onChange:this.$ProfileIntroCardBioEditForm3,onKeyDown:this.$ProfileIntroCardBioEditForm1,onPaste:this.$ProfileIntroCardBioEditForm4,onSubmit:this.$ProfileIntroCardBioEditForm2},l.createElement('textarea',{autoFocus:true,className:"_4xd9",name:j.BIO,onChange:this.$ProfileIntroCardBioEditForm3,placeholder:ba,ref:'textArea',rows:x,value:this.state.text}),ca,fa,l.createElement(o,{className:"_4xda _2phz"},da?null:ea,l.createElement('div',null,l.createElement(r,{className:"_3hrq _3-91"},l.createElement(n,{className:"_2e6o _3-8_",src:u({name:'notifications',shade:'dark',size:'small'})}),this.props.publicString),l.createElement(s,{label:k.CANCEL,onClick:this.props.onCancel,type:'button'}),l.createElement(s,{disabled:this.$ProfileIntroCardBioEditForm7(),label:k.SAVE,use:'confirm'})))));};aa.prototype.$ProfileIntroCardBioEditForm1=function(ba){'use strict';if(ba.which===i.RETURN)ba.preventDefault();};aa.prototype.$ProfileIntroCardBioEditForm3=function(){'use strict';var ba=this.refs.textArea.value;if(this.$ProfileIntroCardBioEditForm8){ba=ba.replace(/\n+/g,' ');this.$ProfileIntroCardBioEditForm8=false;}this.setState({text:ba});};aa.prototype.$ProfileIntroCardBioEditForm4=function(){'use strict';this.$ProfileIntroCardBioEditForm8=true;};aa.prototype.$ProfileIntroCardBioEditForm2=function(ba){'use strict';var ca=m.getURIBuilder().getURI();this.setState({isSaving:true});var da={};da[j.BIO]=this.state.text;if(this.state.publishToFeed)da[j.PUBLISH_TO_FEED]=true;new h().setURI(ca).setData(da).setHandler((function(){return this.setState({isSaving:false});}).bind(this)).send();ba.preventDefault();};aa.prototype.$ProfileIntroCardBioEditForm7=function(){'use strict';return this.state.text.length>this.props.maxLength;};aa.prototype.$ProfileIntroCardBioEditForm6=function(){'use strict';return this.props.maxLength-this.state.text.length;};f.exports=aa;},null);
__d('ProfileIntroCardBio.react',['ProfileIntroCardLogger','ProfileIntroCardLoggerEvent','ProfileIntroCardLoggerKey','React','Image.react','Link.react','ProfileIntroCardBioEditForm.react','ProfileIntroCardStrings','TextWithEmoticons.react','TooltipLink.react','cx','xuiglyph'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t,u;t=babelHelpers.inherits(v,k.Component);u=t&&t.prototype;function v(w){'use strict';u.constructor.call(this,w);this.state={isEditMode:false};}v.prototype.render=function(){'use strict';if(this.state.isEditMode)return (k.createElement(n,{canPublishToFeed:this.props.canPublishToFeed,initialText:this.props.bio,maxLength:this.props.maxLength,onCancel:(function(){return this.setState({isEditMode:false});}).bind(this),placeholders:this.props.placeholders,publicString:this.props.publicString}));if(!this.props.bio)return (k.createElement(m,{className:"_zho _2pi4",onClick:this.$ProfileIntroCardBio1.bind(this,i.BIO_ADD_CLICK)},k.createElement(l,{alt:o.EDIT_BIO,className:"_zhp _3-91",src:s({name:'plus',shade:'accent',size:'small'})}),k.createElement('span',null,this.props.addBioPrompt)));return (k.createElement('div',{className:"_4ihn _2pi9 _2pi5"},k.createElement(p,{renderEmoji:true,renderEmoticons:true,text:this.props.bio}),k.createElement(q,{className:"_1-gu _2p2g",onClick:this.$ProfileIntroCardBio1.bind(this,i.BIO_EDIT_CLICK),tooltip:o.EDIT},k.createElement('i',{className:"_2p2h"}))));};v.prototype.$ProfileIntroCardBio1=function(w){'use strict';var x={};x[j.EVENT]=w;h.logClick(x);this.setState({isEditMode:true});};f.exports=v;},null);