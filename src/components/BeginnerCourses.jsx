import { useState } from 'react';

const BeginnerCourses = () => {
  const courses = [
    {
      title: 'Введение в программирование',
      description: 'Начните с Python, если у вас нет опыта программирования.',
      image: '/Vector.svg',
    },
    {
      title: 'Визуализация данных',
      description: 'Создавайте отличные визуализации данных. Отличный способ увидеть всю мощь программирования!',
      image: '/trace (4) 1.svg',
    },
    {
      title: 'Введение в SQL',
      description: 'Изучите SQL для работы с базами данных, используя Google BigQuery.',
      image: '/trace (5) 1.svg',
    },
    {
      title: 'Продвинутый Python',
      description: 'Углубитесь в Python и узнайте о продвинутых функциях.',
      image: '/advanced-python.svg',
    },
    {
      title: 'Data Science',
      description: 'Основы Data Science и работа с большими данными.',
      image: '/data-science.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, courses.length - maxVisible));
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8 lg:px-16 bg-[#c5e4ff]">
      <h2 className="text-[22px] md:text-[32px] font-bold mb-6">Для начинающих</h2>
      <div className="flex justify-between w-full max-w-6xl mb-4">
        <button onClick={prevSlide} className="text-2xl" disabled={currentIndex === 0}>
          &larr;
        </button>
        <button onClick={nextSlide} className="text-2xl" disabled={currentIndex === courses.length - maxVisible}>
          &rarr;
        </button>
      </div>
      <div className="flex gap-4 overflow-hidden">
        {courses.slice(currentIndex, currentIndex + maxVisible).map((course, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 shadow-md flex flex-col items-center w-[350px] h-[450px]">
            <img src={course.image} alt={course.title} className="w-full h-[150px] object-contain mb-4" />
            <h3 className="text-lg font-bold">{course.title}</h3>
            <p className="text-sm mt-2 text-center">{course.description}</p>
            <button className="bg-black text-white px-4 py-2 rounded-full font-bold mt-auto">Начать</button>
          </div>
        ))}
      </div>
      <div className="flex mt-4 space-x-2">
        {Array(Math.ceil(courses.length / maxVisible)).fill().map((_, index) => (
          <span key={index} className={`h-2 w-2 rounded-full ${currentIndex / maxVisible === index ? 'bg-black' : 'bg-gray-400'}`}></span>
        ))}
      </div>
    </div>
  );
};

export default BeginnerCourses;
