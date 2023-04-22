import { Router } from 'express'
import * as wordsCtrl from '../controllers/words.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, wordsCtrl.index)
router.get('/new', isLoggedIn, wordsCtrl.new)
router.get('/random', wordsCtrl.random)
router.get('/:wordId', isLoggedIn, wordsCtrl.show)
router.get('/:wordId/edit', isLoggedIn, wordsCtrl.edit)
router.post('/', isLoggedIn, wordsCtrl.create)
router.post('/:wordId/comments', isLoggedIn, wordsCtrl.createComment)
router.put('/:wordId', isLoggedIn, wordsCtrl.update)
router.delete('/:wordId', isLoggedIn, wordsCtrl.delete)
router.delete('/:wordId/comments/:commentId', isLoggedIn, wordsCtrl.deleteComment)

export {
  router
}
