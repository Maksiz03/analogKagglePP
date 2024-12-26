import { useState } from 'react';

const CompetitionList = () => {
  const initialCompetitions = [
    {
      start_date: '12.12.2024',
      end_date: '30.05.2025',
      title: 'NFL Big Data Bowl 2025',
      description: 'Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ',
      icon: '/nfl.png',
    },
    {
      start_date: '10.01.2025',
      end_date: '20.07.2025',
      title: 'Unlock Global with Gemma',
      description: 'Создайте варианты моделей Gemma для конкретного языка или уникального культурного аспекта',
      icon: '/google.png',
    },
    {
      start_date: '12.12.2024',
      end_date: '30.05.2025',
      title: 'Time Market Data Forecasting',
      description: 'Спрогнозируйте реакцию участников финансового рынка, используя реальные данные.',
      icon: '/market.png',
    },
  ];

  const [competitions, setCompetitions] = useState(initialCompetitions);

  const handleShowMore = () => {
    setCompetitions((prevCompetitions) => [
      ...prevCompetitions,
      ...initialCompetitions, // Add more of the same cards
    ]);
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-[24px] md:text-[32px] font-bold mb-6">Все</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {competitions.map((comp, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{comp.start_date} - {comp.end_date}</span>
                <img src={comp.icon} alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mt-2">{comp.title}</h3>
              <p className="text-sm mt-2">{comp.description}</p>
            </div>
            <button className="bg-[#377dff] text-white px-4 py-2 rounded-full font-bold mt-4 self-start">
              Участвовать
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleShowMore} className="mt-6 bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-bold">
        Показать ещё 100+
      </button>
    </div>
  );
};

export default CompetitionList;
