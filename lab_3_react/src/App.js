import { useState } from "react";
import Forma from "./Components/Forma";
import CompetenceCard from "./Components/CompetenceCard";
import "./App.css";

function App() {
  const data = [
    { id: 1, title: 'CSS', description: 'CSS — язык каскадных стилей, который задаёт визуальное оформление для HTML, SVG и других языков разметки', level: '35' },
    { id: 2, title: 'HTML', description: 'HTML — язык разметки для создания структуры веб-страницы и представления контента.', level: '80' },
    { id: 3, title: 'JavaScript', description: 'JavaScript — язык программирования широкого спектра. На нём можно как создавать динамические интерфейсы, так и работать с базами данных и операционными системами.', level: '20' }
  ];

  const [showCompetences, setShowCompetences] = useState(false); // Создаем хук для скрытия/показа карточек
  const [competences, setCompetences] = useState(data.map((item, index) => ({
    ...item,
    id: index + 1
  })));

  const handleShowCompetences = () => { // Функция для кнопки
    setShowCompetences(!showCompetences)
  }

  const onAddClick = (newCompetence) => {
    setCompetences([...competences, { id: competences.length + 1, ...newCompetence }]);
  };

  const handleDeleteCompetence = (id) => {
    setCompetences(competences.filter((competence) => competence.id !== id));
  };


  return (
    <>
      <div >
        <div className="container">
          <button className="btn" onClick={handleShowCompetences}>
            {showCompetences ? 'Убрать компетенции' : 'Показать компетенции'}
          </button>
        </div>

        {/* Если переменная состояния showCompetences = true, рендерится блок со списком компетенций*/}
        {showCompetences && (
          <div >
            <h2>Список компетенций:</h2>
            <ul>
              {competences.map((competence) => (
                <li key={competence.id} >
                  <CompetenceCard
                    title={competence.title}
                    description={competence.description}
                    level={competence.level}
                    onDelete={() => handleDeleteCompetence(competence.id)}
                  />
                </li>
              ))}
            </ul>
            <div className="container"><Forma onAddCompetence={onAddClick} /></div>
          </div>
        )}
      </div>
    </>
  )
}
export default App;

