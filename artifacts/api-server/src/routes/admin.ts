import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { AdminLoginBody } from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

function getAdminPassword(): string {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) {
    logger.warn("ADMIN_PASSWORD env var is not set");
    return "";
  }
  return pw;
}

function validateToken(req: { headers: Record<string, string | string[] | undefined> }): boolean {
  const token = req.headers["x-admin-token"];
  if (!token || Array.isArray(token)) return false;
  return token === getAdminPassword();
}

router.post("/admin/login", async (req, res): Promise<void> => {
  const parsed = AdminLoginBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  if (parsed.data.password !== getAdminPassword()) {
    req.log.warn("Failed admin login attempt");
    res.status(401).json({ error: "Invalid password" });
    return;
  }

  req.log.info("Admin login successful");
  res.json({ token: getAdminPassword() });
});

router.get("/admin/contacts", async (req, res): Promise<void> => {
  if (!validateToken(req as Parameters<typeof validateToken>[0])) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const contacts = await db
    .select()
    .from(contactsTable)
    .orderBy(desc(contactsTable.createdAt));

  res.json(contacts);
});

export default router;
