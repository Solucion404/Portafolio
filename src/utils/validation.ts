import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre no puede exceder los 50 caracteres")
        .trim(),
    email: z
        .string()
        .email("Dirección de email no válida")
        .trim(),
    message: z
        .string()
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .max(500, "El mensaje no puede exceder los 500 caracteres")
        .trim(),
    _gotcha: z
        .string()
        .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
