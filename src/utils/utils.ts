const VAR_REGEX = /{{\s*[\w_]+\s*}}/g;
export const matchVariable = (variable?: string): string => {
  if (!variable) return ""; // Si no se añaden {{variables}}, lo deja vacio
  return variable.replace(
    VAR_REGEX,
    (match) =>
      `<span class="bg-green-100 text-green-600 font-semibold">${match}</span>`
  );
};

// El backend no incluye el created_at para acceder a la fecha de creacion. Entonces, simulo la fecha de forma aleatoria durante los ultimos 12 meses
export const formatDate = (): string => {
  let date: Date;

  // Fecha aleatoria dentro de los ultimos 12 meses (30 * 12)
  const days = Math.floor(Math.random() * 360);
  date = new Date();
  date.setDate(date.getDate() - days);

  return date.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};
