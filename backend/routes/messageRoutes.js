const express = require("express");
const { sendMessageController, allMessages } = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, sendMessageController);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
