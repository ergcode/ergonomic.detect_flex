!function(){window._DD;var e=window,t=document,n=t.getElementsByTagName("head")[0],a=t.createElement("p"),r=a.style,s="display",i=["flex","-webkit-flex","-ms-flexbox","-webkit-box","-moz-box","table","inline"],l=["flexWrap","WebkitFlexWrap","msFlexWrap"];n.appendChild(a);for(var o=0,m=l.length;o<m;o++)l[o]in r||(i[o]=0);for(var o=0,m=i.length;o<m;o++)if(i[o]&&(r.cssText=s+":"+i[o],(e.getComputedStyle?getComputedStyle(a,null).getPropertyValue(s):a.currentStyle[s])==i[o])){_DD=o+1;break}if(n.removeChild(a),1!=_DD){var d=t.createElement("link"),c=_DD<4?"supportVendor.css":_DD<6?"supportBox.css":_DD<7?"supportTable.css":"supportInline.css";d.type="text/css",d.href=c,d.rel="stylesheet",n.appendChild(d)}e.matchMedia||e.msMatchMedia||e.CSSMediaRule||((d=t.createElement("script")).type="text/javascript",d.src="respond.js",n.appendChild(d))}();