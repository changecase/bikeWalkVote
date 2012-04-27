$(document).ready(function() {
	// json call to twitter to request tweets containing our keyword, in this case '#pdxmayor'
	$.getJSON("http://search.twitter.com/search.json?q=%23pdxmayor&callback=?", function(data) {
		// loop around the result
		$.each(data.results, function() {
			var text = this.text;
	
			if(text.charAt(0) != '@') {
				// construct tweet and add append to our #tweets div
				var tweet = $("<div></div>").addClass('tweet').html(text);
				// analyse our tweet text and turn urls into working links, hash tags into search links, and @replies into profile links.
				tweet.html('<div class="content">' + 
					tweet.html()
					.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>')
					.replace(/(^|\s)#(\w+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>')
					.replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>')
					+ '<br /><a href="http://www.twitter.com/' + this.from_user + '/status/' + this.id_str + '" class="view" target="_blank">' + $.timeSinceTweet(this.created_at) + '</a></div>'
					)
					.prepend('<a href="http://www.twitter.com/' + this.from_user + '" target="_blank"><img src="' + this.profile_image_url + '" width="48" height="48" /></a>')
					// sticks the profile picture before the tweet
					.appendTo('#tweets')
					.fadeIn();
			}
		});
	});
});

(function($) {
	$.timeSinceTweet = function(time) {
		var date = new Date(time);
		var diff = ((new Date()).getTime() - date.getTime()) / 1000;
		var day_diff = Math.floor(diff / 86400);
		
		if (day_diff < 0 || day_diff >= 31 || isNaN(day_diff)) {
			return "View tweet";
		}
		
		if(day_diff == 0) {
			if(diff < 60) {
				return Math.ceil(diff) + " seconds ago";
			}
			else if(diff < 120) {
				return "1 minute ago";
			}
			else if(diff < 3600) {
				return Math.floor( diff / 60 ) + " minutes ago";
			}
			else if(diff < 7200) {
				return "1 hour ago";
			}
			else if(diff < 86400) {
				return Math.floor( diff / 3600 ) + " hours ago";
			}
		}
		
		if(day_diff == 1) {
			return "Yesterday";
		}
		else if(day_diff < 7) {
			return day_diff + " days ago";
		}
		else if(day_diff < 31) {
			return Math.ceil( day_diff / 7 ) + " weeks ago";
		}
		else {
			return "View Tweet";
		}	
	}
})(jQuery);