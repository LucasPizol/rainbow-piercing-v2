import "./styles.css";
import React from "react";

const MaterialsContent = () => (
  <>
    <span>Titânio</span>
    <span>Aço Cirúrgico</span>
    <span>Ouro</span>
    <span>Prata 925</span>
  </>
);

export const Materials = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        color: "white",
        position: "relative",
        background: "var(--primary)",
        overflow: "hidden",
        width: "100%",
        gap: 30,
      }}
    >
      <div className="paralax-text">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
      <div className="paralax-text" aria-hidden="true">
        <MaterialsContent />
      </div>
    </section>
  );
};
