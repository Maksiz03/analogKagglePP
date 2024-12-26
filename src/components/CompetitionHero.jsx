const CompetitionsHero = () => {
  return (
    <div className="relative w-full min-h-[600px] md:h-[726px] bg-[#c5e4ff] overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      <div style={{ bottom: '15px' }} className="absolute left-20 z-50">
        <img
          src="/Union.svg"
          alt="Decorative shape"
          className="w-[150px] h-auto"
        />
      </div>

      <div className="absolute left-20 top-1/2 transform -translate-y-1/2 z-10">
        <img
          src="/Ellipse 41.svg"
          alt="Decorative ellipse"
          className="w-[5px] md:w-[160px] h-auto"
        />
      </div>
      <div className="absolute top-10 right-10 z-10">
        <img
          src="/Union (1).svg"
          alt="Decorative shape"
          className="w-[80px] md:w-[150px] h-auto"
        />
      </div>

      {/* White Rectangle with Rounded Corners */}
      <div className="absolute inset-0 flex justify-center items-center z-15">
        <div className="bg-white w-[90%] h-[80%] md:w-[70%] md:h-[80%] shadow-lg rounded-xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto h-full px-4 md:px-8 lg:px-16 z-20 flex flex-col items-center">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl py-4 space-y-4 md:space-y-0">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-[#141416] font-bold">
              Все соревнования <span>▼</span>
            </button>
            <button className="flex items-center gap-2 text-[#141416] font-bold">
              Самые популярные <span>★</span>
            </button>
          </div>
          <div className="flex items-center border rounded-full px-3 py-2 bg-white w-full md:w-auto">
            <input
              type="text"
              placeholder="Найти соревнование..."
              className="outline-none w-full md:w-auto"
            />
            <button className="ml-2">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[#141416]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-4.35-4.35m-3.65 1.85a7 7 0 1 0-7-7 7 7 0 0 0 7 7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:grid md:grid-cols-2 gap-8 h-full items-center flex flex-col-reverse md:flex-row">
          {/* Left Column - Larger Image, Shifted Left */}
          <div className="flex justify-center items-center md:justify-end">
            <img
              src="/Group 362.svg"
              alt="Competition illustration"
              className="w-[100%] md:w-[140%] h-auto max-w-none md:mr-[20px]"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] leading-tight md:leading-[56px] lg:leading-[72px] font-bold">
              Участвуй в соревнованиях <br /> по <span className="text-[#377dff]">машинному обучению</span>
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]">
              Развивайте свои навыки работы с данными, участвуя в наших увлекательных конкурсах.
              Обратитесь за помощью к документации или узнайте о соревнованиях сообщества.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-8 w-full max-w-4xl text-center">
          <h2 className="text-[24px] md:text-[32px] font-bold mb-4">
            Что говорят наши участники
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-[14px] md:text-[16px]">
                Это была отличная возможность улучшить свои навыки и познакомиться с новыми людьми в отрасли.
              </p>
              <span className="block mt-2 font-bold">— Иван Петров</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-[14px] md:text-[16px]">
                Соревнования были сложными, но очень полезными. Я многому научился!
              </p>
              <span className="block mt-2 font-bold">— Анна Смирнова</span>
            </div>
          </div>
        </div>

        {/* Additional Info Button */}
        <div className="mt-8">
          <button className="bg-[#ff7d37] text-white px-6 py-2 rounded-full font-bold">
            Узнать больше о соревнованиях
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsHero;
