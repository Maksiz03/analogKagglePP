const LearningHero = () => {
  return (
    <div className="relative w-full min-h-[726px] bg-[#00000] overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      <div className="absolute top-14 left-10 z-10">
        <img src="/Union (1).svg" alt="Lightbulb" className="w-[150px] h-auto" />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 translate-x-20 ">
        <img src="/Ellipse 41.svg" alt="Circle" className="w-[300px] h-auto" />
      </div>
      <div className="absolute right-20 top-5 transform -translate-y-1/2 z-10 translate-y-5">
        <img src="/Ellipse 41.svg" alt="Circle" className="w-[150px] h-auto" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto h-full px-4 md:px-8 lg:px-16 z-20 flex flex-col items-center">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl py-4 space-y-4 md:space-y-0">
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-[#141416] font-bold">
              Все курсы
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="flex items-center gap-1 text-[#141416] font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Самые популярные
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center border rounded-full px-3 py-2 bg-white w-full md:w-auto">
            <svg className="w-5 h-5 text-[#141416] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35m-3.65 1.85a7 7 0 1 0-7-7 7 7 0 0 0 7 7z" />
            </svg>
            <input
              type="text"
              placeholder="Найти курс..."
              className="outline-none w-full md:w-auto"
            />
            <button className="ml-2 bg-black rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:grid md:grid-cols-2 gap-8 h-full items-center flex flex-col-reverse md:flex-row">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-[42px] md:text-[56px] lg:text-[72px] leading-tight md:leading-[64px] lg:leading-[84px] font-bold">
              Образовательные курсы <br /> по <span className="text-[#377dff]">машинному обучению</span>
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px]">
              Развивайте свои знания и навыки с лучшими образовательными материалами!
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center">
            <img src="/trace (1) 1.svg" alt="Graduates illustration" className="w-[500px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningHero;
