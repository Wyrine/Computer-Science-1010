/*!CK:568270170!*//*1449002764,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["s7Wzd"]); }

__d('UFIRootRegistry',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=[],j={registerController:function(k,l){h[k]=l;},registerSnowliftNode:function(k){i.push(k.root.id);},cleanupSnowliftNodes:function(){i.forEach(function(k){return h[k]&&h[k]();});h={};i=[];}};f.exports=j;},null);