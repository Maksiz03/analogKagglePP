import { useState } from 'react';
import CompetitionCard from './CompetitionCard';

// Competitions.jsx
const CompetitionTabsNow = () => {
  const competitions = [
    
    {
      start_date: '10.01.2025',
      end_date: '20.07.2025',
      title: 'Unlock Global with Gemma',
      description: 'Создайте варианты моделей Gemma для конкретного языка или уникального культурного аспекта',
      icon: '/gemma.png',
    },
    {
      start_date: '12.12.2024',
      end_date: '30.05.2025',
      title: 'NFL Big Data Bowl 2025',
      description: 'Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ',
      icon: '/nfl.png',
    },
    {
      start_date: '12.12.2024',
      end_date: '30.05.2025',
      title: 'NFL Big Data Bowl 2025',
      description: 'Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ',
      icon: '/tmd.png',
    },
    {
      start_date: '05.04.2025',
      end_date: '25.09.2025',
      title: 'Data Science Hackathon',
      description: 'Соревнование для решения сложных задач с использованием анализа данных.',
      icon: '/hackathon.png',
    },
    {
      start_date: '01.03.2025',
      end_date: '15.08.2025',
      title: 'AI for Good Challenge',
      description: 'Используйте AI для решения глобальных проблем и выиграйте уникальные призы.',
      icon: '/ai.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, competitions.length - maxVisible));
  };

  return (
    <div className="flex flex-col min-h-[578px] items-center justify-center gap-4 md:gap-8 px-4 md:px-8 lg:px-[160px] py-8">
      <h1 className="text-[32px] md:text-[48px] font-bold text-center">
        Ближайшие соревнования
      </h1>
      <div className="flex justify-between w-full max-w-4xl">
        <button
          onClick={prevSlide}
          className="border-[#E6E8EC] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center"
          disabled={currentIndex === 0}
        >
          <img src="/Left arrow.svg" alt="Scroll left" />
        </button>
        <button
          onClick={nextSlide}
          className="border-[#E6E8EC] w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center"
          disabled={currentIndex === competitions.length - maxVisible}
        >
          <img src="/Right arrow.svg" alt="Scroll right" />
        </button>
      </div>
      <div className="flex gap-4 overflow-hidden">
        {competitions.slice(currentIndex, currentIndex + maxVisible).map((comp, index) => (
          <CompetitionCard
            key={index}
            start_date={comp.start_date}
            end_date={comp.end_date}
            title={comp.title}
            description={comp.description}
            icon={comp.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CompetitionTabsNow;