import React, { useEffect, useState } from "react";
import useNavigate from "../hooks/useNavigate";

export default function Home() {
  const [annonces, setAnnonces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAnnonces = JSON.parse(localStorage.getItem("annonces")) || [];
    setAnnonces(savedAnnonces);
  }, []);

  return (
    <div>
      <h1>Choix de la maison</h1>
      <ul>
        {annonces.map((annonce) => (
          <li key={annonce.id}>
            <h2>{annonce.title}</h2>
            <p>{annonce.description}</p>
            <button onClick={() => navigate(`/detail/${annonce.id}`)}>Voir plus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
