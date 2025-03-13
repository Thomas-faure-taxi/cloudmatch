import React, { useState } from "react";
import useNavigate from "../hooks/useNavigate";

export default function AddAnnonce() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnnonce = {
      id: Date.now(), // Utilisation de l'horodatage comme ID unique
      title,
      description,
    };
    // Ajouter l'annonce à la liste des annonces (pour l'exemple, nous utilisons localStorage)
    const annonces = JSON.parse(localStorage.getItem("annonces")) || [];
    annonces.push(newAnnonce);
    localStorage.setItem("annonces", JSON.stringify(annonces));
    navigate("/");
  };

  return (
    <div>
      <h1>Ajouter une annonce</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description :</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Ajouter l'annonce</button>
      </form>
    </div>
  );
}
