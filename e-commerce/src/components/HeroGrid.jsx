import React from "react";

function HeroGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-16 min-h-[60vh] md:min-h-[80vh] gap-4 mt-4">
      <div className="relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden">
        <img
          src="/Images/img5.jpg"
          className="w-full h-full object-cover aspect-[16/9] md:aspect-[21/9] rounded-2xl"
          alt="Hero"
        />
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            Color of <br /> Summer <br /> Outfit
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
            100+ Collections for your <br /> outfit inspirations <br />
            in this summer
          </p>
        </div>
      </div>

      <div className="col-span-1 grid grid-rows-2 gap-4">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/Images/img4.jpg"
            alt="Featured Product"
            className="w-full h-full object-cover aspect-[16/9] rounded-2xl"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Outdoor <br /> Active
            </h1>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/Images/img2.jpg"
            alt="Featured Product"
            className="w-full h-full object-cover aspect-[16/9] rounded-2xl"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              Casual <br /> Comfort
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroGrid;
