/*
var myApp = {};
var mainView = {};
var rightView = {};
var $$ = Dom7;


myApp = new Framework7({
	modalTitle: 'Framework7',
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true,
	angular:true
});

mainView = myApp.addView('.view-main', {
	
});

rightView = myApp.addView('.view-right', {
	name: 'right'
});

mainView.router.load({pageName: 'info'});
*/



// Initialize your app
var myApp = new Framework7({
	// Default title for modals
    modalTitle: 'Framework7',
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true
    // ... other parameters
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
    name: 'right'
});


 

