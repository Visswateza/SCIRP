import express from 'express'
import userCtrl from '../controllers/user_con.js'
import authCtrl from '../controllers/auth_con.js'

const router = express.Router()

router.get("/list", userCtrl.list)
router.post("/register", userCtrl.create)

router.route('/api/users/:userId')
  .get(authCtrl.signin, userCtrl.read)
  .put(authCtrl.signin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.signin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router