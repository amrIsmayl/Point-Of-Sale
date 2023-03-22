
exports.allRequires = (app) => {
    app.use('/user', require('../components/user/user.api'));
    app.use('/categories', require('../components/category/category.api'));

}