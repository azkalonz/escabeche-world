﻿(function(a){a.fn.facebookcomment=function(b){var c={url:document.location,width:580,color:"light",numpost:10};return this.each(function(){if(b){a.extend(c,b)}var d=a(this);var e=[];e.push('<div class="fb-comments" data-href="'+c.url+'" data-num-posts="'+c.numpost+'" data-width="'+c.width+'" data-colorscheme="'+c.color+'"></div>');d.html(e.join(""));if(typeof(FB)!="undefined"){FB.XFBML.parse()}})}})(jQuery);