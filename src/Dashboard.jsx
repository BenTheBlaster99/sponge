import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

function Dashboard(props) {
  const initialCharaters = [
    {
      id: 1,
      name: "Spongebob",
      description: "A sponge who lives in a pineapple",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Patrick",
      description: "Spongebob's best friend",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Squidward",
      description: "Spongebob's neighbor",
      image: "https://via.placeholder.com/150",
    },
  ];
  const [character, setCharacters] = useState(initialCharaters);
  const handleDelete = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const handleSave = (id, newName, newDescription, newImage) => {
    setCharacters(
      characters.map((character) =>
        character.id === id
          ? {
              ...character,
              name: newName,
              description: newDescription,
              imagem: newImage,
            }
          : character
      )
    );
  };
  return (
  <div style={styles.dashboard}>
{characters.map((character)=> (
    <CharacterCard key={character.id} character={character} onDelete={handleDelete} onSave={handleSave}/>
))}

  </div>);
}

const styles = {
    dashboard: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    }
};
export default Dashboard;
