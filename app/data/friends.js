// ===============================================================================
// DATA
// Below data array will hold all firends with profile.
// ===============================================================================
var friendsProfiles = [
	{
		name: "Jennifer Lawrence",
		photo:"https://media.glamour.com/photos/569582385fff94d44eec499d/master/w_1024,c_limit/slideshow-jennifer-lawrence-02-jlaw-main.jpg",
		scores:[1,1,3,1,2,3,4,4,1,5]
	},

	{
		name: "Charlize Theron",
		photo:"http://awallpapersimages.com/wp-content/uploads/2016/07/Charlize-Theron-HD-wallpaper-free-download.jpg",
		scores:[5,1,3,3,2,1,4,5,1,4]
	},

	{
		name: "Natalie Portman",
		photo:"http://cdn5.thr.com/sites/default/files/2015/05/bts_natalie_portman_clean.jpg",
		scores:[4,5,1,1,2,4,4,3,5,3]
	},

	{
		name: "Tom Cruise",
		photo:"https://heightline.com/wp-content/uploads/Tom-Cruise-smile.jpg",
		scores:[3,3,2,4,1,4,3,3,5,2]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsProfiles;