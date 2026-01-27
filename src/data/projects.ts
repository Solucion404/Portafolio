export interface Project {
    id: number;
    title: string;
    description: string;
    image_url: string;
    tags: string[];
    live_url: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Hotel Santiago (Aún en proceso)",
        description: "Plataforma de reservas optimizada con enfoque en conversión y experiencia de usuario premium para el sector hotelero.",
        image_url: "https://nlezhyvqvxxprbqbydaz.supabase.co/storage/v1/object/public/portfolio-images/Hotel_Santiago.jpg",
        tags: ["Astro", "Tailwind CSS", "UI/UX"],
        live_url: "https://hotel-santiago-yajalon.vercel.app/",
    },
    {
        id: 2,
        title: "Solución404 V1",
        description: "Infraestructura inicial del portafolio con enfoque en automatización y digitalización de negocios.",
        image_url: "https://nlezhyvqvxxprbqbydaz.supabase.co/storage/v1/object/public/portfolio-images/Logosolucion404.png",
        tags: ["Astro", "Supabase", "React"],
        live_url: "#",
    }
];
