import * as React from 'react';

function Artists() {
  return (
    <section className="flex flex-col items-center px-5 bg-white">
      <h1>
        <span className="text-red-600 text-zinc-50 text-7xl leading-[118px]" style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}>
          The
        </span>
        <span className="text-zinc-50 text-7xl leading-[118px]" style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}>
          Artists
        </span>
      </h1>
      <p className="text-black text-xl leading-7 self-stretch w-full -mr-5 mt-16 max-md:max-w-full max-md:mt-10">
        Our studio is home to a select group of 8 skilled artists, each with their own distinct style and deep appreciation for Japanese culture. With unwavering dedication to craftsmanship, we bring to life tattoos that honor the timeless elegance of samurai warriors, geishas, and the rich folklore of Japan. Experience the transformative power of ink at Samurai Ink and discover a new level of self-expression.
      </p>
      <div className="self-stretch w-full -mr-5 mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-5">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/213fd44b-f289-4a05-b043-0509bd8bbe5e?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/213fd44b-f289-4a05-b043-0509bd8bbe5e?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/213fd44b-f289-4a05-b043-0509bd8bbe5e?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/213fd44b-f289-4a05-b043-0509bd8bbe5e?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/213fd44b-f289-4a05-b043-0509bd8bbe5e?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/213fd44b-f289-4a05-b043-0509bd8bbe5e?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/213fd44b-f289-4a05-b043-0509bd8bbe5e?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/213fd44b-f289-4a05-b043-0509bd8bbe5e?apiKey=f5b9441429c64a0aaa7125b729b9e51b&"className="aspect-[0.9] object-contain object-center w-full overflow-hidden" />
              <div className="text-black text-center text-xl font-bold leading-7 self-center mt-10">
                <span className="font-bold">Hiroshi Tanaka</span>
                <br />
                <span className="">Founder &amp; Artist</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-5">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3f1bfa3-9b8d-458c-b077-99f407b3e713?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3f1bfa3-9b8d-458c-b077-99f407b3e713?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3f1bfa3-9b8d-458c-b077-99f407b3e713?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3f1bfa3-9b8d-458c-b077-99f407b3e713?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3f1bfa3-9b8d-458c-b077-99f407b3e713?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3f1bfa3-9b8d-458c-b077-99f407b3e713?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3f1bfa3-9b8d-458c-b077-99f407b3e713?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3f1bfa3-9b8d-458c-b077-99f407b3e713?apiKey=f5b9441429c64a0aaa7125b729b9e51b&"className="aspect-[0.9] object-contain object-center w-full overflow-hidden" />
              <div className="text-black text-center text-xl font-bold leading-7 self-center mt-10">
                <span className="font-bold">Ayumi Nakamura</span>
                <br />
                <span className="">Studio Manager</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-5">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5031b55c-1212-42db-976d-699371f3ca35?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5031b55c-1212-42db-976d-699371f3ca35?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5031b55c-1212-42db-976d-699371f3ca35?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5031b55c-1212-42db-976d-699371f3ca35?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5031b55c-1212-42db-976d-699371f3ca35?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5031b55c-1212-42db-976d-699371f3ca35?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5031b55c-1212-42db-976d-699371f3ca35?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5031b55c-1212-42db-976d-699371f3ca35?apiKey=f5b9441429c64a0aaa7125b729b9e51b&"className="aspect-[0.9] object-contain object-center w-full overflow-hidden" />
              <div className="text-black text-center text-xl font-bold leading-7 self-center mt-10">
                <span className="font-bold">William ‘Billy’ Hayashi</span>
                <br />
                <span className="">Tattoo Artist</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-5">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e7abb73f-ad56-4aea-bbab-876472397ef9?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7abb73f-ad56-4aea-bbab-876472397ef9?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7abb73f-ad56-4aea-bbab-876472397ef9?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7abb73f-ad56-4aea-bbab-876472397ef9?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7abb73f-ad56-4aea-bbab-876472397ef9?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7abb73f-ad56-4aea-bbab-876472397ef9?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7abb73f-ad56-4aea-bbab-876472397ef9?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7abb73f-ad56-4aea-bbab-876472397ef9?apiKey=f5b9441429c64a0aaa7125b729b9e51b&"className="aspect-[0.9] object-contain object-center w-full overflow-hidden" />
              <div className="text-black text-center text-xl font-bold leading-7 self-center mt-10">
                <span className="font-bold">Nina Vasquez</span>
                <br />
                <span className="">Tattoo Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artists;
