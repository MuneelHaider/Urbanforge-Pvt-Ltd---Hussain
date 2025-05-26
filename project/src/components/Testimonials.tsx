import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Urban Forge took our farmhouse project to the next level. From the boundary wall to the complete construction, their team delivered with transparency, punctuality, and craftsmanship. We couldn’t be more satisfied.",
    name: "Musarat Naqvi",
    title: "Pakistan Naval Farms",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The Commercial Hub in Jand was a massive undertaking, but Urban Forge handled it with expertise. Their modern designs, quality control, and commitment to timelines made them a trusted partner for our development.",
    name: "Malik Sheheryar Jamshaid",
    title: "Real Estate Developer",
    image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "I hired Urban Forge for a full renovation at Minister Enclave, and they exceeded expectations. Their professionalism, discretion, and attention to heritage detailing were remarkable. I’d recommend them to anyone.",
    name: "Hanif Abbasi",
    title: "Minister, Pakistan Railway",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "We needed reliable tile work done in G-16 and Urban Forge delivered flawlessly. Their finishing, communication, and pricing transparency stood out from the rest. I’ll definitely hire them again for future projects.",
    name: "Sardar Ahmed",
    title: "Homeowner",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Urban Forge managed my house renovation with complete professionalism. They were responsive, respectful, and turned my vision into reality with minimal disruption. Their team’s craftsmanship is top-notch and I highly recommend thier services.",
    name: "Syed Daniyal",
    title: "Homeowner",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-primary text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-xl text-gray-300 mb-12">
          What our clients say about working with Urban Forge.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-md bg-white text-gray-800 rounded-xl p-8 mx-auto shadow-md">
                <Quote className="h-10 w-10 text-sand mb-6" />
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center justify-center">
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
