import { useState } from "react";
import whatsappLogo from "@/assets/whatsapp-logo.png";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const phone = "573046571420";
  const message = encodeURIComponent(
    "Hola Lavatec, vengo de la página web y me gustaría cotizar un servicio de limpieza"
  );
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat widget */}
      {open && (
        <div className="w-72 rounded-xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#075E54] px-4 py-4 flex items-center gap-3">
            <img
              src={whatsappLogo}
              alt="WhatsApp"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-white">
              <p className="font-semibold text-sm leading-tight">Escríbenos</p>
              <p className="text-xs opacity-90 leading-tight mt-0.5">
                Si tienes alguna pregunta escríbenos para ayudarte.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="bg-[#ECE5DD] px-4 py-4">
            <p className="text-xs text-center text-gray-500 mb-3">
              Generalmente respondemos en minutos
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={whatsappLogo}
                alt="WhatsApp"
                className="w-11 h-11 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-800">Lavatec</p>
                <p className="text-xs text-gray-500">Lavatec</p>
              </div>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-[#25D366] shrink-0"
                fill="currentColor"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.7-1.48 1.35-2.03 1.39-.52.04-1.01.24-3.4-.71-2.89-1.15-4.73-4.11-4.87-4.3-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.25-.28.56-.35.74-.35.19 0 .37 0 .53.01.17.01.4-.06.62.48.23.54.78 1.91.85 2.05.07.14.11.3.02.48-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.28-.12.56.16.28.72 1.18 1.54 1.91 1.05.94 1.95 1.23 2.23 1.37.28.14.44.12.6-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.12.07.67-.18 1.37z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chatea por WhatsApp"
        className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center overflow-hidden bg-[#25D366]"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="white"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            className="w-10 h-10 object-contain"
          />
        )}
      </button>
    </div>
  );
}
