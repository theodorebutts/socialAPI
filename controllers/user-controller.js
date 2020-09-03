const { User } = require('../models')
const { db } = require('../models/User')

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .popilate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbSocialData => res.json(dbSocialData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            })
    },
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select(dbSocialData => res.json(dbSocialData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            })
    },
    createUser({ body }, res) {
        User.create(body)
            .then(dbSocialData => res.json(dbSocialData))
            .catch(err => res.status(400).json(err))
    },
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbSocialData => {
                if (!dbSocialData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbSocialData);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbSocialData => {
                if (!dbSocialData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbSocialData);
            })
            .catch(err => res.status(400).json(err));
    }
}

module.exports = userController