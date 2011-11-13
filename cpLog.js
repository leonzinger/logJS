var cpLog = {
	init:function(){
		
		this.binds();
	},
	binds:function(){
		window.onerror = function(msg,url,num){
			cpLog.onerror(msg,url,num);
			return !document.location.href.match(/(\?|&)debugJS\w*?=true/);
		}
	},
	onerror:function(msg,url,num){
		this.log.message = msg;
		this.log.url = url;
		this.log.num = num;
		console.log(this.log);
		this.send();
	},
	send:function(){
		$.ajax({
			url:'',
			data:cpLog.log,
			type:"POST"
		})
	},
	log:{
		
	}
}

cpLog.init();