JCEMediaBox.Popup.setAddons('flash',{flash:function(v){if(/\.swf\b/.test(v)){return{type:'flash'}}},youtube:function(v){if(/youtube(.+)\/(.+)/.test(v)){if(/v=/g.test(v)){s=v.replace(/(.+)v=([^&\/]+)/g,'v/$2')}else{s='v'+v.substring(v.lastIndexOf('/'))}return{width:425,height:350,type:'flash','wmode':'opaque','src':v.replace(/(youtube([^\/]+)\/)(.+)/,function(a,b){return b+s})}}},metacafe:function(v){if(/metacafe(.+)\/(watch|fplayer)\/(.+)/.test(v)){var s=JCEMediaBox.trim(v);if(!/\.swf/i.test(s)){if(s.charAt(s.length-1)=='/'){s=s.substring(0,s.length-1)}s=s+'.swf'}return{width:400,height:345,type:'flash',attributes:{'wmode':'opaque','src':s.replace(/watch/i,'fplayer')}}}},dailymotion:function(v){if(/dailymotion(.+)\/(swf|video)\//.test(v)){var s=JCEMediaBox.trim(v);s=s.replace(/_(.*)/,'');return{width:420,height:339,type:'flash','wmode':'opaque','src':s.replace(/video/i,'swf')}}},googlevideo:function(v){if(/google(.+)\/(videoplay|googleplayer\.swf)\?docid=(.+)/.test(v)){return{width:425,height:326,type:'flash','id':'VideoPlayback','wmode':'opaque','src':v.replace(/videoplay/g,'googleplayer.swf')}}},vimeo:function(v){if(/vimeo.com\/([0-9]+)/.test(v)){return{width:400,height:320,type:'flash','wmode':'opaque','src':v.replace(/vimeo.com\/([0-9]+)/,'vimeo.com/moogaloop.swf?clip_id=$1')}}},twitvid:function(v){if(/twitvid(.+)\/(.+)/.test(v)){var s='http://www.twitvid.com/player/';return{width:425,height:344,type:'flash','allowFullScreen':true,'allowscriptaccess':'always','allowNetworking':'all','wmode':'transparent','src':v.replace(/(.+)twitvid([^\/]+)\/(.+)/,function(a,b,c,d){return s+d})}}}});JCEMediaBox.Popup.setAddons('image',{image:function(v){if(/\.(jpg|jpeg|png|gif|bmp|tif)$/i.test(v)){return{type:'image'}}},twitpic:function(v){if(/twitpic(.+)\/(.+)/.test(v)){return{type:'image'}}}});