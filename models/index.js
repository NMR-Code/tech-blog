const User = require('./user.js');
const Post = require('./posts.js');
const Comment = require('./comments.js');

Post.belongsTo(User, {
	foreingKey: 'user_id',
});

User.hasMany(Post, {
	foreingKey: 'user_id',
	onDelete: 'CASCADE',
	OnUpdate: 'CASCADE',
});

Comment.belongsTo(Post, {
	foreingKey: 'post_id',
});

Post.hasMany(Comment, {
	foreingKey: 'post_id',
	onDelete: 'CASCADE',
	OnUpdate: 'CASCADE',
});

Comment.belongsTo(User, {
	foreingKey: 'user_id',
});

User.hasMany(Comment, {
	foreingKey: 'user_id',
	onDelete: 'CASCADE',
	OnUpdate: 'CASCADE',
});

module.exports = {
	User,
	Post,
	Comment,
};
