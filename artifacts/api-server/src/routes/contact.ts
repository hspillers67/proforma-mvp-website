import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [contact] = await db
    .insert(contactsTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company ?? null,
      phone: parsed.data.phone ?? null,
      projectType: parsed.data.projectType ?? null,
      message: parsed.data.message,
    })
    .returning();

  req.log.info({ contactId: contact.id }, "New contact submission");

  res.status(201).json(contact);
});

export default router;
