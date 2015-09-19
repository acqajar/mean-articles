var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
	author: String,
	title: String,
	content: String,
	votes: {
		type: Number,
		default: 0
	},
	created_at: Date
})



// after done saving, go onto the next i.e. callback
ArticleSchema.pre('save', function(next){
	this.created_at = new Date();
	next();
})


//  export a mongoose model. call it Article and the value = ArticleSchema
module.exports = mongoose.model('Article', ArticleSchema);