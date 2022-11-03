module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
    postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    categoryId: {
        type: DataTypes.INTEGER, 
        allowNull:false,
        primaryKey: true,
    }
    }, 
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true, 
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, 
    {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id'
    })

    models.Category.belongsToMany(models.BlogPost, 
        {
        as: 'blog_posts',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id'
        })
    };

    return PostCategory;
  };