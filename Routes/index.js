const {Router} = require("express")
const router = Router()

router.use(require("./ProductRoutes"))

module.exports = router