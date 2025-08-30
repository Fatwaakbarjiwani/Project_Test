import bg from "../assets/images/bg2.png";
import downGreen from "../assets/downGreen.svg";
import iconCheckin from "../assets/iconCheckin.svg";
import dot from "../assets/dot.svg";
import imageContent4 from "../assets/images/imageContent4.png";
import { dataCard } from "../data/dataCard";
import Card from "../components/Card";
import imageContent6 from "../assets/images/imageContent6.png";
import imageContent6_2 from "../assets/images/imageContent6(2).png";
import iconPetik from "../assets/iconPetik.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import { dataMessage } from "../data/dataMessage.Js";
import MessageCard from "../components/MessageCard";
import imageContent8 from "../assets/images/imageContent8.png";
import imageContent8_2 from "../assets/images/imageContent8(2).png";
import imageContent8_3 from "../assets/images/imageContent8(3).png";
import imageContent9 from "../assets/images/imageContent9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import iconArrow from "../assets/iconArrow.svg";
import lingkaran from "../assets/lingkaran.svg";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* content ke 1 */}
      <div className="w-full sm:min-h-screen flex justify-center items-center relative z-20">
        <img
          src={bg}
          alt="home"
          className="block min-h-[70vh] sm:min-h-auto object-cover object-center"
        />
        <div className="absolute w-full sm:-translate-y-1/8 max-w-full p-4 sm:p-0 max-w-primary sm:mx-auto left-1/2 transform -translate-x-1/2 space-y-4">
          <h1 className="text-white text-20p sm:text-4xl font-bold flex flex-col text-center sm:text-left">
            <span>Make your comfort is</span>
            <span>our happiness</span>
          </h1>
          <p className="text-white text-14p text-justify-center sm:text-justify-start sm:text-lg sm:flex flex-col text-center sm:text-left">
            <span>
              Studio villa made of bamboo, located near the top of Mount
            </span>
            <span>{`Geulis with a stunning 180 degree bird's eye view.`}</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0 justify-center sm:justify-start">
            <button className="text-14p sm:text-base text-primary bg-secondary px-4 py-2 sm:rounded-md w-4/6 sm:w-auto transition-transform duration-300 hover:scale-105 active:scale-95">
              Explore Rooms
            </button>
            <button className="sm:hidden text-secondary bg-primary px-4 py-2 sm:rounded-md w-4/6 sm:w-auto transition-transform duration-300 hover:scale-105 active:scale-95">
              Login
            </button>
          </div>
        </div>
      </div>
      {/* content ke 2 */}
      {/* phone */}
      <div className="max-w-primary sm:hidden mx-4 mt-[-10vh] h-[20vh] z-30 text-2s text-neutral-700 relative bg-white border border-gray-200 shadow rounded-md">
        <div className="flex items-center p-2 justify-between gap-8 border-b border-gray-200 w-full">
          Room
          <img src={downGreen} alt="downGreen" />
        </div>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="flex text-14p items-center p-2 justify-center gap-4 sm:gap-8 border-r border-gray-200 w-full">
            <img src={iconCheckin} alt="downGreen" />
            Check in
          </div>
          <div className="flex text-14p items-center p-2 justify-center gap-4 sm:gap-8 border-gray-200 w-full">
            <img src={iconCheckin} alt="downGreen" />
            Check out
          </div>
        </div>
        <button className=" text-white bg-primary p-2 justify-center gap-8 border-r border-gray-200 w-full py-4 text-center transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
          Check availability
        </button>
      </div>
      {/* desktop */}
      <div className="max-w-primary hidden mx-auto mt-[-10vh] h-[20vh] z-30 text-2s text-neutral-700 relative bg-white border border-gray-200 shadow rounded-md pr-16 py-8 sm:grid grid-cols-4">
        <div className="flex items-center justify-center gap-8 border-r border-gray-200 w-full">
          Room
          <img src={downGreen} alt="downGreen" />
        </div>
        <div className="flex items-center justify-center gap-8 border-r border-gray-200 w-full">
          <img src={iconCheckin} alt="downGreen" />
          Check in
        </div>
        <div className="flex items-center justify-center gap-8 border-r border-gray-200 w-full">
          <img src={iconCheckin} alt="downGreen" />
          Check out
        </div>
        <button className=" text-white bg-primary rounded justify-center gap-8 border-r border-gray-200 w-full py-4 text-center transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
          Check availability
        </button>
      </div>
      {/* content ke 3 */}
      <div className="max-w-primary sm:mx-auto mx-4 pb-4 py-24 relative">
        <h1 className="text-neutral-700 text-20p sm:text-4xl font-semibold">
          About Villa <span className="text-primary">Amadaha</span>
        </h1>
        <img
          className="absolute right-0 bottom-0 hidden sm:block"
          src={dot}
          alt=""
        />
      </div>
      {/* content ke 4 */}
      <div className="max-w-primary sm:mx-auto mx-4 sm:flex items-start gap-32">
        <div className="sm:w-1/3 relative">
          <img
            src={imageContent4}
            className="w-full h-[30vh] object-cover sm:h-auto z-20 relative"
            alt=""
          />
          <div className="hidden sm:block w-full h-full border border-primary z-10 absolute right-[-5%] bottom-[-5%]"></div>
        </div>
        <div className="sm:w-1/2 w-full sm:flex flex-col justify-between py-4 space-y-8 sm:space-y-32">
          <p className="text-neutral-700 text-14p sm:text-2s">
            Villa Amadaha consist of Two Luxury Villas and one Traditional
            Javanese House surrounded by a tranquil rain forest setting,
            traditional Indonesian houses anda a farm overlooking the area.
          </p>
          <div className="flex gap-8">
            <p className="flex flex-col">
              <span className="text-neutral-700 text-20p sm:text-3xl font-semibold">
                +6{" "}
                <span className="text-primary font-normal text-14p sm:text-2s">
                  {" "}
                  /Room
                </span>
              </span>
              <span className="text-neutral-700 text-14p sm:text-2s">
                Room options
              </span>
            </p>
            <p className="flex flex-col">
              <span className="text-neutral-700 text-20p sm:text-3xl font-semibold">
                +2{" "}
                <span className="text-primary font-normal text-14p sm:text-2s">
                  {" "}
                  /Facilities
                </span>
              </span>
              <span className="text-neutral-700 text-14p sm:text-2s">
                Room options
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* content ke 5 */}
      {/* desktop */}
      <div className="max-w-primary hidden sm:block sm:mx-auto mx-4 space-y-8 my-4 sm:my-32">
        <h1 className="text-neutral-700 sm:text-4xl font-semibold text-left sm:text-center">
          Our choise of
          <span className="text-primary"> Villa Studios</span>
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {dataCard.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-primary bg-secondary px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105 active:scale-95">
            Load More
          </button>
        </div>
      </div>
      {/* mobile */}
      <div className="max-w-primary sm:hidden sm:mx-auto mx-4 space-y-8 my-4 sm:my-32">
        <h1 className="text-neutral-700 sm:text-4xl font-semibold text-left sm:text-center">
          Our choise of
          <span className="text-primary"> Villa Studios</span>
        </h1>
        <Swiper
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          modules={[Pagination, FreeMode]}
          className="z-10"
          spaceBetween={12}
          direction="horizontal"
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {dataCard.map((item) => (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center">
          <button className="text-primary bg-secondary py-3 w-1/2 sm:rounded-md transition-transform duration-300 hover:scale-105 active:scale-95">
            Load More
          </button>
        </div>
      </div>
      {/* content ke 6 */}
      <div className="max-w-primary sm:mx-auto mx-4 mt-16 sm:mt-0 relative sm:flex items-start justify-between gap-8">
        <img
          src={dot}
          className="hidden sm:block absolute -left-10 -top-24 z-10"
          alt=""
        />
        <img
          src={dot}
          className="sm:hidden absolute -right-10 top-12 z-10"
          alt=""
        />
        <div className="space-y-4">
          <h1 className="text-neutral-700 text-20p text-center sm:text-left sm:text-4xl font-semibold z-20 relative">
            Various <span className="text-primary">facilities</span> that <br />
            you can enjoy
          </h1>
          <p className="text-neutral-700 text-14p sm:text-2s text-center sm:text-left">
            We bring you together with your dream <br /> holiday
          </p>
          <button className="hidden sm:block bg-primary rounded py-2 px-8 text-white transition-transform duration-300 hover:scale-105 active:scale-95">
            Explore
          </button>
        </div>
        <div className="flex relative justify-between w-full sm:w-1/2">
          <img
            src={dot}
            className="absolute hidden sm:block left-[-10%] bottom-[-20%] z-10"
            alt=""
          />

          <img src={imageContent6} className="w-[48%] z-20 relative" alt="" />
          <img src={imageContent6_2} className="w-[48%] z-20 relative" alt="" />
          <div className="bg-secondary w-full h-full hidden sm:block absolute -right-1/3 -bottom-1/3"></div>
        </div>
        <div className="sm:hidden flex justify-center mt-8">
          <button className="bg-primary py-3 w-1/2 text-14p text-white transition-transform duration-300 hover:scale-105 active:scale-95">
            Explore
          </button>
        </div>
      </div>
      {/* content ke 7 */}
      <div className="max-w-primary sm:mx-auto mx-4">
        <div className="flex justify-between gap-8 my-8 sm:my-32">
          <div className="hidden sm:block w-1/2 relative">
            <img
              src={iconPetik}
              className="bg-secondary rounded-full p-8"
              alt=""
            />
            <h1 className="text-neutral-700 top-14 left-16 bottom-0 text-4xl font-semibold absolute">
              What Our <span className="text-primary">Customer</span> <br /> Are
              Saying
            </h1>
          </div>
          <div className="sm:hidden w-full">
            <h1 className="text-neutral-700 text-20p font-semibold">
              What Our{" "}
              <span className="text-primary relative">
                Customer
                <img
                  src={iconArrow}
                  className="w-full absolute right-0 -bottom-2"
                  alt=""
                />
              </span>{" "}
              <br /> Are Saying
            </h1>
          </div>
          <div className="hidden sm:flex items-end gap-4">
            <div className="flex items-center gap-4">
              <button className="transition-transform duration-300 hover:scale-105 active:scale-95">
                <img src={leftArrow} alt="" />
              </button>
              <button className="transition-transform duration-300 hover:scale-105 active:scale-95">
                <img src={rightArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-3 gap-4 relative">
          <img
            src={dot}
            className="absolute -right-10 -top-20 z-[-10]"
            alt=""
          />
          <img
            src={dot}
            className="absolute -left-10 -bottom-20 z-[-10]"
            alt=""
          />
          {dataMessage.map((item) => (
            <div key={item.id} className="relative z-30">
              <MessageCard item={item} />
            </div>
          ))}
        </div>
        <div className="sm:hidden relative">
          <img
            src={dot}
            className="absolute -left-10 -bottom-5 z-[-10]"
            alt=""
          />
          <Swiper
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            freeMode={true}
            modules={[Pagination, FreeMode]}
            className="z-10"
            spaceBetween={12}
            direction="horizontal"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {dataMessage.map((item) => (
              <SwiperSlide className="pb-2" key={item.id}>
                <MessageCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-end my-2 gap-4">
            <button className="transition-transform duration-300 hover:scale-105 active:scale-95">
              <img src={leftArrow} alt="" />
            </button>
            <button className="transition-transform duration-300 hover:scale-105 active:scale-95">
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* content ke 8 */}
      <div className="max-w-primary sm:mx-auto mx-4 my-16 sm:my-32">
        <h1 className="relative text-neutral-700 text-center mb-4 sm:mb-16 text-20p sm:text-4xl font-semibold">
          Our{" "}
          <span className="text-primary">
            <img
              src={lingkaran}
              className="sm:hidden absolute left-[44%] w-24 top-0"
              alt=""
            />
            Gallery
          </span>
        </h1>
        <div className="flex gap-4 sm:gap-8 items-center relative">
          <img
            src={dot}
            className="hidden sm:block absolute -right-15 -bottom-15 z-[-10]"
            alt=""
          />
          <div className="hidden sm:block bg-secondary w-3/4 z-[-10] h-[60vh] absolute -left-1/5 top-1/3"></div>
          <img
            src={imageContent8_2}
            className="sm:max-h-[80vh] w-1/2 object-cover object-center"
            alt=""
          />
          <div className="w-1/2 gap-2 sm:gap-0 flex sm:h-[80vh] flex-col justify-between sm:max-h-[80vh]">
            <img
              src={imageContent8}
              className="w-full sm:max-h-[38vh] object-cover object-center"
              alt=""
            />
            <div className="relative">
              <img
                src={imageContent8_3}
                className="w-full sm:max-h-[38vh] object-cover object-center"
                alt=""
              />
              <div className="w-full h-full bg-black/50 bottom-0 absolute text-white text-center flex items-center justify-center underline font-light">
                More Photos
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content ke 9 */}
      <div className="relative">
        <img
          src={imageContent9}
          className="h-[30vh] sm:h-auto object-cover object-center"
          alt=""
        />
        <div className="absolute w-full top-1/2 left-1/2 space-y-4 sm:space-y-8 transform -translate-x-1/2 -translate-y-1/2 max-w-primary">
          <h1 className="text-center sm:text-left font-bold text-white text-20p sm:text-4xl flex flex-col sm:gap-4">
            <span>Make your comfort is</span>
            <span>our happiness</span>
          </h1>
          <div className="flex justify-center sm:justify-start">
            <button className="bg-secondary text-14p sm:text-base sm:rounded py-2 px-8 text-primary transition-transform duration-300 hover:scale-105 active:scale-95">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
