import React, { useState } from "react";

function CharacterCard({ character, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(character.description);
  const [newImage, setNewImage] = useState(character.image);

  const handleSave = () => {
    onSave(character.id, newName, newDescription, newImage);
    setIsEditing(false);
  };
  return (
    <div style={style.card}>
      {!isEditing ? (
        <>
          <img
            src={character.image}
            alt={character.name}
            style={styles.image}
          />{" "}
          <h3>{character.name}</h3>
          <p>{character.description}</p>{" "}
          <input
            type="button"
            onClick={() => setIsEditing(true)}
            value="Edit"
          />{" "}
          <input
            type="button"
            value="Delete"
            onClick={() => onDelete(character.id)}
          />
        </>
      ) : (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="text"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
          <button onClick={handleSave}>Save Changes</button>
        </>
      )}
    </div>
  );
}
const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        width: '200px',
    },
    image: {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
    }
}
export default CharacterCard;
