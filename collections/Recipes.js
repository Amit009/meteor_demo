Recipes = new Mongo.Collection('recipes');

// secure allow to insert data
Recipes.allow({
	insert: function (userId, doc) {
		return !!userId;
	}
});

// Ingredient Schema
Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type:String
	}
})


// Schema for autoform generation 
RecipeSchema = new SimpleSchema({
	name:{
		type:String,
		label:"Name"
	},
	desc: {
		type:String,
		label:"Description"
	},
	Ingredients: {
		type: [Ingredient]
	},
	inMenu: {
		type: Boolean,
		defaultValue:false,
		optional:true,
		autoform: {
			type:"hidden"
		}
	},
	author: {
		type:String,
		label:"Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type:"hidden"
		}
	},
	createdAt: {
		type:Date,
		label:"Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type:"hidden"
		}

	}
});

Recipes.attachSchema( RecipeSchema );