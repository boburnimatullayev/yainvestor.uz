var u_name, email, message, telegram_bot_id = "5698105009:AAEDFa-6Pk3bZZDrAuIEvKlcTCuCAY_m-z0",
	chat_id = 1422299838,
	ready = function() {
		if(document.getElementById("name").value !== "" && document.getElementById("firstname").value !=="" ){
			u_name = document.getElementById("name").value, 
			firstName = document.getElementById("firstname").value, 
			tel = document.getElementById("tel").value, 
			
			message = "Ismi: " + u_name + "\nFamiliya: " + firstName + "\nTel: " + tel

		}
	},
	sendtelegram = function() {
		ready();
		var e = {
			async: !0,
			crossDomain: !0,
			url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"cache-control": "no-cache"
			},
			data: JSON.stringify({
				chat_id: chat_id,
				text: message
			})
		};
		return $.ajax(e).done((function(e) {
			alert("yuborildi")
		})), document.getElementById("name").value = "", document.getElementById("firstname").value = "", document.getElementById("tel").value = "+998", !1
	};





	