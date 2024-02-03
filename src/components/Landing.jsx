import React from "react";

function Landing() {
  return (
    <section
      className="bg-white flex flex-col items-stretch relative"
      style={{ height: "100vh", scrollSnapType: "y mandatory" }}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/914ab501-80b6-4b68-bae6-79230b7c0bb5?apiKey=f5b9441429c64a0aaa7125b729b9e51b&"
        className="aspect-[2.81] object-cover object-center w-full lightgray_50%_/_cover_no-repeat] overflow-hidden min-h-[512px] items-stretch pb-12 max-md:max-w-full relative z-20"
        alt="Tattoo Studio"
      />
      <h1
        className="text-white font-kamikaze text-center text-black text-stroke z-30 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-4 text-8xl"
      >
        Samurai Ink Studio
      </h1>
      <div className="self-center flex ml-0 w-[963px] max-w-full items-stretch justify-between gap-3 mt-3.5 mb-14 px-5 max-md:flex-wrap max-md:justify-center max-md:mb-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0522bc2d-b2d8-4085-bda5-d42dda0d005e?placeholderIfAbsent=true"
          className="aspect-[0.64] object-contain object-center w-full overflow-hidden"
          alt="Tattoo Design"
        />
        <div className="items-stretch flex basis-[0%] flex-col self-start">
          <div className="bg-red-600 flex shrink-0 h-[105px] flex-col" />
        </div>
        <div className="text-black text-xl leading-7 grow shrink basis-auto mt-36 self-end max-md:max-w-full max-md:mt-10">
          At Samurai Tattoo Studio, we merge the ancient traditions of the samurai with the modern artistry of tattooing. Our skilled artists specialize in stunning, custom tattoo designs that reflect the spirit, honor, and strength of the samurai. Whether you seek a bold warrior motif or a delicate cherry blossom, we are dedicated to delivering exceptional craftsmanship and an unforgettable experience. Step into our studio and let us bring your vision to life, capturing the essence of the samurai in every stroke of ink.
        </div>
      </div>
    </section>
  );
}

export default Landing;
