  /*
  
  YouTube Embed Code
  
  Author:   Amit Agarwal 
  Blog:     www.labnol.org
  Date:     04/15/2013
  
  */

var n="youtube-player";var y=document.createElement('script');y.type="text/javascript";y.src="http://www.youtube.com/iframe_api";var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(y,s);var player;var p=document.getElementById(n);var st=p.getAttribute("startTime");var et=p.getAttribute("endTime");var vi=p.getAttribute("videoID");var ph=p.getAttribute("height");var pw=p.getAttribute("width");function onYouTubeIframeAPIReady(){player=new YT.Player(n,{height:ph,width:pw,playerVars:{'rel':0,'showinfo':0,'hidecontrols':1},events:{'onReady':lv}})}function lv(e){e.target.cueVideoById({videoId:vi,startSeconds:st,endSeconds:et})}