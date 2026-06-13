import React from "react";
import "@/Components/PuxadaFrontal.css";
import Image from 'next/image';

export default function CustomBoxesTable() {
  return (
    <div className="exercise-card">

      <div className="exercise-main-content">
        <Image
          src="/image (1).svg" 
          alt="Ilustración Puxada frontal"
          width={67}
          height={67}
          className="exercise-thumb" 
        />
        
        <div className="exercise-texts">
          <h3 className="exercise-title">Remana curvada</h3>
          <p className="exercise-stats">3 séries x 12 repetições</p>
        </div>
      </div>

   
      <Image
        src="/icons.svg" 
        alt="Ir al ejercicio"
        width={24}
        height={24}
        className="exercise-arrow-icon"
      />
    </div>
  );
}
