import React from 'react';
import Landing from '@/components/Landing.jsx';
import Services from '@/components/Services.jsx';
import Gallery from '@/components/Gallery.jsx';
import Artists from '@/components/Artists.jsx';
import AboutUs from '@/components/AboutUs.jsx';
import GiftVouchersComponent from '@/components/GiftVouchersComponent.jsx';
import Footer from '@/components/Footer.jsx';
import { scrollIntoView } from 'react-scroll-into-view';

export default function Home() {
  return (
    <main>
      <Landing />
      {/* <Flair1 /> */}
      <section style={{ height: '100vh', scrollSnapAlign: 'start' }} className="relative shadow-sm bg-black bg-opacity-20 flex shrink-0 h-[1723px] flex-col mb-11 max-md:max-w-full max-md:-mr-px max-md:mb-10">
        <div class="flex-col items-stretch overflow-hidden relative flex min-h-[1817px] w-full pb-12 px-px max-md:max-w-full">
          <img loading="lazy" srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/465a7ea2-265f-49e7-9a93-ada2413f30af?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/465a7ea2-265f-49e7-9a93-ada2413f30af?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/465a7ea2-265f-49e7-9a93-ada2413f30af?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/465a7ea2-265f-49e7-9a93-ada2413f30af?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/465a7ea2-265f-49e7-9a93-ada2413f30af?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/465a7ea2-265f-49e7-9a93-ada2413f30af?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/465a7ea2-265f-49e7-9a93-ada2413f30af?apiKey=f5b9441429c64a0aaa7125b729b9e51b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/465a7ea2-265f-49e7-9a93-ada2413f30af?apiKey=f5b9441429c64a0aaa7125b729b9e51b&"class="absolute z-[-1] h-full w-full object-cover object-center inset-0" />
        </div>
      </section>
      <Services />
      <Gallery />
      {/* <Flair2 /> */}
      <div class="flex-col items-stretch overflow-hidden relative flex min-h-[1817px] w-full pb-12 px-px max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8795a8af-e338-4ee4-a199-743fd0bb73fe?placeholderIfAbsent=true" class="absolute z-[-1] h-full w-full object-cover object-center inset-0" />
        <section class="relative shadow-sm bg-black bg-opacity-20 flex shrink-0 h-[1723px] flex-col mb-11 max-md:max-w-full max-md:-mr-px max-md:mb-10"></section>
      </div>
      <Artists />
      <AboutUs />
      <GiftVouchersComponent />
      <Footer />
    </main>
  );
}
