export const prerender = false;
import type { APIRoute } from "astro";
import { Resend } from "resend";
import { supabase } from "../../lib/supabase";
import { contactSchema } from "../../utils/validation";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        // 1. Validar datos con Zod
        const validatedData = contactSchema.safeParse(data);

        if (!validatedData.success) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: validatedData.error.issues[0].message,
                }),
                { status: 400 }
            );
        }

        const { name, email, message, _gotcha } = validatedData.data;

        // 2. Anti-Spam (Honeypot)
        if (_gotcha && _gotcha.length > 0) {
            // Éxito falso silencioso para los bots
            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Mensaje procesado (bot trap)",
                }),
                { status: 200 }
            );
        }

        // 3. Acción 1: Guardar en DB (Supabase)
        const { error: dbError } = await supabase
            .from("messages")
            .insert([{ name, email, message }]);

        if (dbError) {
            console.error("Supabase Error:", dbError);
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Error al guardar en base de datos. Inténtelo de nuevo.",
                }),
                { status: 500 }
            );
        }

        // 4. Acción 2: Enviar Email con Resend
        const { error: emailError } = await resend.emails.send({
            from: "Solución404 Web <contacto@solucion404.com>",
            to: "solucion404.dev@gmail.com",
            replyTo: email,
            subject: `Nuevo Lead Web: ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #00E055;">Nuevo mensaje de contacto</h2>
          <p>Has recibido un nuevo lead desde el formulario de la web.</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #00E055;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">
            Este mensaje fue enviado desde el formulario de contacto de Solución404.
            Puedes responder directamente a este correo para contactar con el cliente.
          </p>
        </div>
      `,
        });

        if (emailError) {
            console.error("Resend Error:", emailError);
            // Opcional: Podríamos retornar éxito aquí porque ya se guardó en DB, 
            // pero el usuario quiere la notificación inmediata.
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "¡Mensaje recibido correctamente!",
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("API Error:", error);
        return new Response(
            JSON.stringify({
                success: false,
                error: "Ocurrió un error inesperado. Inténtelo de nuevo.",
            }),
            { status: 500 }
        );
    }
};
