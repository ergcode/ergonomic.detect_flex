!function(){window._DD;var e=document,t=window.getComputedStyle,l=e.getElementsByTagName("head")[0],a=e.createElement("p"),r=a.style,n="display",i=["flex","-webkit-flex","-ms-flexbox"],o=["flexWrap","WebkitFlexWrap","msFlexWrap"];l.appendChild(a);for(var p=0,s=i.length;p<s;p++)if((!o[p]||o[p]in r)&&(r.cssText=n+":"+i[p],(t?t(a,null).getPropertyValue(n):a.currentStyle[n])==i[p])){_DD=p+1;break}l.removeChild(a)}();