import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name ist erforderlich" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" })
    .regex(/^[a-zA-ZäöüÄÖÜß\s\-']+$/, { message: "Name enthält ungültige Zeichen" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "E-Mail ist erforderlich" })
    .email({ message: "Ungültige E-Mail-Adresse" })
    .max(255, { message: "E-Mail darf maximal 255 Zeichen lang sein" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Telefonnummer darf maximal 30 Zeichen lang sein" })
    .regex(/^[-0-9\s()+/]*$/, { message: "Telefonnummer enthält ungültige Zeichen" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, { message: "Nachricht ist erforderlich" })
    .max(1000, { message: "Nachricht darf maximal 1000 Zeichen lang sein" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
