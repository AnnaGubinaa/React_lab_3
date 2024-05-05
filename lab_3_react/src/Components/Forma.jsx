import { useState } from "react";

function Forma({ onAddCompetence }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddCompetence({ title, description, level: parseInt(level, 10) });
      setTitle('');
      setDescription('');
      setLevel('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>Управление компетенциями</h1>
        <div className="mb-3">
          <label for ="compTitle">
            Заголовок:
          </label>
          <input
            type="text"
            id="compTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label for ="description">
            Описание: <br />
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="level">
            Уровень(%):
          </label>
          <input
            type="text"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
        <button className="addNewBtn" type="submit">
          Добавить новую компетенцию
        </button>
      </form>
    );
  }
  
  export default Forma;