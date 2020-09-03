const router = require('express').Router

const {
    getAllUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;