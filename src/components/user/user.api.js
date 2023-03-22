const { signIn } = require('./user.auth');
const { createUsers, getAllUsers, getSpecificUser, updateSpecificUser, deleteUser, changePassword } = require('./user.service');

const router = require('express').Router();


router.route('/')
    .post(createUsers)
    .get(getAllUsers)
router.route("/:id")
    .get(getSpecificUser)
    .put(updateSpecificUser)
    .delete(deleteUser);
router.patch('/changePassword/:id', changePassword);
router.post('/signin', signIn)

module.exports = router;
