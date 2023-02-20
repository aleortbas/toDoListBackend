import express from express;
import { getUser } from "../controllers/users.js"
import { verifyToke } from "../middleware/auth.js";

const router = express.Router();

/* READ */

router.get("/:id", verifyToke, getUser);

/* UPDATE */

router.patch("/:id", verifyToke, addRemoveFriend);

export default router