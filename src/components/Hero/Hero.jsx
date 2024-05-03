import Image1 from "../../assets/hero/womenbg.png";
import Image2 from "../../assets/hero/thebg.png";
import Image3 from "../../assets/hero/Children5.jpeg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His wife will forever be changed dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His wife will forever be changed dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His wife will forever be changed dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

// const Hero = ({ handleOrderPopup }) => {
const Hero = () => {  
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[600px] w-[600px] bg-[#d7af74] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p 
                  data-aos="fade up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm">{data.description}</p>
                  <div
                  data-aos="fade up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  >
                    {/* <button className="bg-gradient-to-r from-[#fea928] to-[#ed8900] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" onClick={handleOrderPopup}> */}
                    <button className="bg-gradient-to-r from-[#fea928] to-[#ed8900] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="pix"
                      className="w-[550px] h-[50px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
