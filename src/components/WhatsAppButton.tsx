import whatsappLogo from "@/assets/whatsapp-logo.png";

export default function WhatsAppButton() {
  const phone = "573046571420";
  const message = encodeURIComponent("Hola Lavatec, vengo de la página web y me gustaría cotizar un servicio de limpieza");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-2xl shadow-lg hover:scale-110 transition-transform flex items-center justify-center overflow-hidden"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-cover" />
    </a>
  );
}
