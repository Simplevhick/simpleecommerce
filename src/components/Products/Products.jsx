import Img1 from "../../assets/women/Men9.jpeg";
import Img2 from "../../assets/women/Men2.jpeg";
import Img3 from "../../assets/women/Female9.jpeg";
import Img4 from "../../assets/women/Children10.jpeg";
import Img5 from "../../assets/women/Children9.jpeg";
import { FaStar } from "react-icons/fa6";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 5.0,
    color: "red",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Googles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-shirt",
    rating: 4.4,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-shirt",
    rating: 4.5,
    color: "pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade up" className="text-sm text-[#fea928]">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id{" "}
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductData.map((data) => (
              <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id} 
                className="space-y-3">
                <img
                  src={data.img}
                  alt="pix"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-[#fea928] text-white py-1 px-5 rounded-md">View All Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
