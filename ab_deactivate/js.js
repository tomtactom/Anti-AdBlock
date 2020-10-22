		var reloadSite = function() {
			window.parent.location.reload(true);
		}

		var adblock = function() {
			document.getElementById('blockerTab_adblock').style='display: flex; background-color: #db5757; color: #ffffff; border-radius: 5px;';
			document.getElementById('blockerTab_adblock_plus').style='display: flex;';
			document.getElementById('blockerTab_adguard').style='display: flex;';
			document.getElementById('blockerTab_ublock_origin').style='display: flex;';
			
			
			document.getElementById('video_adblock').style='display: block;';
			document.getElementById('video_adblock_plus').style='display: none;';
			document.getElementById('video_adguard').style='display: none;';
			document.getElementById('video_ublock_origin').style='display: none;';
		}
		
		var adblockplus = function() {
			document.getElementById('blockerTab_adblock').style='display: flex;';
			document.getElementById('blockerTab_adblock_plus').style='display: flex; background-color: #db5757; color: #ffffff; border-radius: 5px;';
			document.getElementById('blockerTab_adguard').style='display: flex;';
			document.getElementById('blockerTab_ublock_origin').style='display: flex;';
			
			
			document.getElementById('video_adblock').style='display: none;';
			document.getElementById('video_adblock_plus').style='display: block;';
			document.getElementById('video_adguard').style='display: none;';
			document.getElementById('video_ublock_origin').style='display: none;';
		}
		
		var adguard = function() {
			document.getElementById('blockerTab_adblock').style='display: flex;';
			document.getElementById('blockerTab_adblock_plus').style='display: flex;';
			document.getElementById('blockerTab_adguard').style='display: flex;  background-color: #db5757; color: #ffffff; border-radius: 5px;';
			document.getElementById('blockerTab_ublock_origin').style='display: flex;';
			
			
			document.getElementById('video_adblock').style='display: none;';
			document.getElementById('video_adblock_plus').style='display: none;';
			document.getElementById('video_adguard').style='display: block;';
			document.getElementById('video_ublock_origin').style='display: none;';
		}
		
		var ublock = function() {
			document.getElementById('blockerTab_adblock').style='display: flex;';
			document.getElementById('blockerTab_adblock_plus').style='display: flex;';
			document.getElementById('blockerTab_adguard').style='display: flex;';
			document.getElementById('blockerTab_ublock_origin').style='display: flex; background-color: #db5757; color: #ffffff; border-radius: 5px;';
			
			
			document.getElementById('video_adblock').style='display: none;';
			document.getElementById('video_adblock_plus').style='display: none;';
			document.getElementById('video_adguard').style='display: none;';
			document.getElementById('video_ublock_origin').style='display: block;';
		}