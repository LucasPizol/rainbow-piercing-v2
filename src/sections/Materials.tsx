import "./styles.css";

const MATERIALS = [
  "Titânio",
  "Aço Cirúrgico",
  "Ouro",
  "Prata 925",
  "Material Descartável",
];

const MaterialsContent = () => (
  <>
    {MATERIALS.map((material) => (
      <span key={material}>{material}</span>
    ))}
  </>
);

/** Faixa em marquee: a primeira cópia é lida por leitores de tela, o resto é enfeite. */
const MARQUEE_COPIES = 10;

export const Materials = () => {
  return (
    <section
      className="materials-strip"
      aria-label="Materiais que trabalhamos"
    >
      {Array.from({ length: MARQUEE_COPIES }).map((_, index) => (
        <div
          key={index}
          className="paralax-text"
          aria-hidden={index > 0 || undefined}
        >
          <MaterialsContent />
        </div>
      ))}
    </section>
  );
};
