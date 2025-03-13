import React, { useEffect, useState } from "react";

export default function Detail({ id }) {
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    const savedAnnonces = JSON.parse(localStorage.getItem("annonces")) || [];
    const foundAnnonce = savedAnnonces.find((a) => a.id === parseInt(id));
    setAnnonce(foundAnnonce);
  }, [id]);

  if (!annonce) {
    return <h1>Annonce non trouvée</h1>;
  }

  return (
    <div>
      <h1>Détail de l'annonce</h1>
      <h2>{annonce.title}</h2>
      <p>{annonce.description}</p>
    </div>
  );
}
