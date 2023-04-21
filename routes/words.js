import { Router } from 'express'
import * as wordsCtrl from '../controllers/words.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, wordsCtrl.new)
router.get('/index', isLoggedIn, wordsCtrl.index)

export {
  router
}
