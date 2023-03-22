const { createCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('./category.service');
// const subcategoryRoute = require("../subCategory/subCategory.api");
// const { uploadSingleFile } = require('../../utilts/fileUpload');
const { protectedRoutes, allowedTo } = require('../user/user.auth');
const router = require('express').Router();

// router.post('/categorise',createCategory)
// router.get('/categorise',getCategories)

// router.use('/:categoryId/subcategories', subcategoryRoute)

router.route('/')
    .post(protectedRoutes, allowedTo("user"), createCategory)
    .get(getCategories);
router.route('/:id')
    .get(getCategory)
    .put(protectedRoutes, allowedTo("user"), updateCategory)
    .delete(protectedRoutes, allowedTo("user"), deleteCategory)

module.exports = router;