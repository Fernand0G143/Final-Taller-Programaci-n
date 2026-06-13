import Image from "next/image";
import "@/app/globals.css";
import PuxadaFrontal from "@/Components/PuxadaFrontal";
import RemanaCurvada from "@/Components/RemanaCurvada";
export default function Home() {
  return (
    <div className="container">
      <div className="titulo">
        <div>Exercícios</div>
        <div className="subtitulo">4</div>
      </div>

      <PuxadaFrontal />
      <RemanaCurvada />
    </div>
  );
}
