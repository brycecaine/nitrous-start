var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,
         loadPlugins: false,
         userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});
 
casper.start('https://www.nitrous.io/app#/boxes', function() {
    console.log('Login page loaded due to redirect from boxes page');

    var user = casper.cli.get('user');
    var pass = casper.cli.get('pass');

    this.fill('form#new_user', { 
        'user[login]': user, 
        'user[password]': pass
     }, true);

     console.log('Login form submitted');
})

casper.waitForUrl('https://www.nitrous.io/app#/boxes',
    function() {
	var filler = casper.evaluate(function(){
            console.log('Boxes page loaded after logging in');
            $('button:contains(Start)').trigger('click');
	});
    },
    function() {
        console.log('Redirect to boxes page timed out after 10 seconds')
    },
    10000
);

casper.run();
