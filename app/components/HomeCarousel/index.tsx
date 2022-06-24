import Image from "next/image";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const bannersImage = [
  "https://cdn.discordapp.com/attachments/753143980681592867/989684752938328074/unknown.png",
  "https://cdn.discordapp.com/attachments/753143980681592867/989685490619924542/unknown.png",
];

const HomeCarousel = () => {
  return (
    <div className="w-full">
      <Slider {...settings}>
        {bannersImage.map((banner) => (
          <div
            key={banner}
            className="w-full h-[200px] bg-red-500 rounded-lg relative"
          >
            <Image
              alt="lomba"
              layout="fill"
              className="rounded-lg"
              src={banner}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
