import React from "react";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "573107148527"; // Reemplaza con tu número real
  const message = "¡Hola! Estoy interesado en sus servicios de maquinaria.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        bg-green-500 text-white
        p-4 rounded-full shadow-lg
        hover:bg-green-600 transition
        flex items-center justify-center
      "
    >
      {/* Ícono SVG de WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.84 7.84 0 0 0 8.004 0C3.584 0 .004 3.58.004 7.998c0 1.41.37 2.785 1.072 3.996L0 16l4.13-1.08A7.97 7.97 0 0 0 8 16h.003c4.42 0 8-3.58 8-7.998 0-2.138-.832-4.145-2.402-5.676ZM8 14.5a6.48 6.48 0 0 1-3.356-.92l-.24-.145-2.472.647.66-2.41-.157-.247A6.47 6.47 0 0 1 1.5 8a6.5 6.5 0 1 1 13 0c0 3.584-2.916 6.5-6.5 6.5Zm3.688-4.765c-.2-.1-1.177-.58-1.36-.647-.182-.067-.316-.1-.45.1-.133.2-.515.647-.632.78-.117.133-.233.15-.433.05-.2-.1-.843-.31-1.604-.99-.593-.528-.994-1.18-1.11-1.38-.117-.2-.012-.308.088-.408.09-.09.2-.233.3-.35.1-.117.133-.2.2-.333.067-.133.033-.25-.017-.35-.05-.1-.45-1.09-.617-1.49-.163-.39-.33-.34-.45-.35l-.383-.007c-.133 0-.35.05-.533.25-.183.2-.7.683-.7 1.663 0 .98.717 1.924.817 2.057.1.133 1.413 2.157 3.43 3.023.48.207.855.33 1.147.422.482.154.92.132 1.268.08.387-.058 1.177-.48 1.343-.943.167-.463.167-.86.117-.943-.05-.083-.183-.133-.383-.233Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;