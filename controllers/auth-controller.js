import { recordFailedAttempt, clearAttempts } from "../middleware/rate-limit.js";

export const authController = async (req, res) => {
  if (!req.body || !req.body.pw) {
    recordFailedAttempt(req.ip);
    res.json({ success: false, redirect: "/401" });
    return;
  }

  if (req.body.pw !== process.env.PW) {
    recordFailedAttempt(req.ip);
    res.json({ success: false, redirect: "/401" });
    return;
  }

  clearAttempts(req.ip);
  req.session.regenerate((err) => {
    if (err) return res.status(500).json({ success: false, redirect: "/401" });
    req.session.authenticated = true;
    req.session.save((err) => {
      if (err) return res.status(500).json({ success: false, redirect: "/401" });
      res.json({ success: true, redirect: "/" });
    });
  });
};
