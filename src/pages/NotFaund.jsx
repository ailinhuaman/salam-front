import React from "react";
import Navbar from "../components/Navbar";

function NotFaund() {
  return (
    <div className="bg-[#87ceeb] w-full h-screen flex flex-col justify-center items-center">
      <Navbar />
     <h2 className="text-3xl capitalize font-bold"> ¡pagina no encontrada! :(</h2>

    </div>
  );
}

export default NotFaund;
