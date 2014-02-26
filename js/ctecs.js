var myMenu = function(a){
			var m = [ ["index.html","Home"],["opportunities.html","Opportunities"],["events.html","Events"],["resources.html","Resources"],["contact.html","Contact"] ]
			
			var build = new Array("");

			for(pos = 0; pos < m.length; pos++)
				build.push("<li><a href='"+m[pos][0]+"' "  + (( pos + 1 == a  )? "class='myLink'":"" ) +  ">" + m[pos][1] + "</a></li>");
						
			return build.join("");
		}