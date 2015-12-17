GollumJS.NS(function() {

	this.LocalFilesPlugin = new GollumJS.Class({
		
		Extends: Server.Plugin,

		enable: function (done) {
			console.log ('LocalFilePlugin enable');
			done();
		},

		disable: function (done) {
			console.log ('LocalFilePlugin disable');
			done();
		}

	});

});