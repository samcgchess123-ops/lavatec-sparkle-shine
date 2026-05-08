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
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" width="38" height="38">
        <defs>
          <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163" />
            <stop offset="1" stopColor="#23b33a" />
          </linearGradient>
        </defs>
        <path fill="#fff" d="M87.184 14.2A73.68 73.68 0 0 0 17.87 97.585l-9.783 35.717 36.582-9.6a73.57 73.57 0 0 0 35.2 8.97h.03a73.7 73.7 0 0 0 73.69-73.38 73.18 73.18 0 0 0-21.53-52.1A72.85 72.85 0 0 0 87.184 14.2Zm0 0" />
        <path fill="#fff" d="M87.184 14.2A73.68 73.68 0 0 0 17.87 97.585l-9.783 35.717 36.582-9.6a73.57 73.57 0 0 0 35.2 8.97h.03a73.7 73.7 0 0 0 73.69-73.38 73.18 73.18 0 0 0-21.53-52.1A72.85 72.85 0 0 0 87.184 14.2Zm42.74 104.16c-1.8 5.05-10.49 9.65-14.65 10.27-3.77.56-8.54.8-13.78-0.87a125.84 125.84 0 0 1-12.47-4.62c-21.94-9.49-36.27-31.59-37.36-33.05-1.1-1.47-8.93-11.88-8.93-22.66 0-10.78 5.65-16.1 7.65-18.3a8.09 8.09 0 0 1 5.85-2.74c1.46 0 2.93.02 4.21.08 1.35.06 3.16-.51 4.94 3.77 1.82 4.36 6.19 15.12 6.73 16.21.55 1.1.91 2.38.18 3.85-.73 1.46-1.1 2.38-2.19 3.66-1.1 1.28-2.3 2.86-3.29 3.84-1.1 1.1-2.23 2.28-0.96 4.47 1.28 2.2 5.68 9.37 12.2 15.18 8.37 7.47 15.43 9.78 17.63 10.87 2.19 1.1 3.47.91 4.75-.55 1.28-1.46 5.49-6.4 6.95-8.6 1.46-2.2 2.93-1.83 4.94-1.1 2.01.73 12.77 6.02 14.96 7.11 2.19 1.1 3.66 1.64 4.2 2.56.55.91.55 5.32-1.24 10.46Z" />
      </svg>
    </a>
  );
}
