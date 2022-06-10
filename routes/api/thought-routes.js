const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/comments/<userId>
router.route('/:userId').post(addThought);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thougths/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thougthId/:reactionId').delete(removeReaction);

module.exports = router;