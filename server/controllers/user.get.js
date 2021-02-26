const User = require('./../models').User;
const TodoItem = require('./../models').TodoItem;
const express = require('express');
const router = express.Router();

router.get('/users/:userId?', async (req, res) => {
  try {
    const filter = {
      order:
        req.query.order === 'reverse'
          ? [['createdAt']]
          : [['createdAt', 'DESC']],
    };

    if (req.query.done)
      filter.where =
        req.query.done === 'done'
        ? { done: true }
        : { done: false };

    const user = await User.findOne({
      where: { id: req.params.userId },
      include: [{
        model: TodoItem,
        as: 'todoItems',
        where: filter.where,
        order: filter.order
      }],
    });
    if (!user) {
      return res.status(404).send({
        message: 'User Not Found',
      });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
