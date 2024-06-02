import banner from "@/assets/banner.svg";
import Image from "next/image";
import iosdownloadbtn from "@/assets/downloadiosapp.svg";
import texture from "@/assets/texture.svg";
import star from "@/assets/star.svg";
export default function Banner() {
  return (
    <section className="relative flex justify-center items-center w-full mt-20">
      <div className="w-[80%] relative">
        <Image src={banner} alt="banner" className="w-full" />
        <button className="absolute left-16 bottom-32 hover:shadow-lg hover:opacity-60 transition duration-200">
          <Image src={iosdownloadbtn} alt="Download from IOS" />
        </button>
      </div>
      <Image
        src={texture}
        alt="texture"
        className="absolute -z-10 -left-32 -top-36"
      />
      <Image
        src={star}
        alt="star"
        width={30}
        className="absolute -z-10 -left-2 top-36 -rotate-45"
      />
      <Image
        src={star}
        alt="star"
        className="absolute -z-10 -right-2 -top-10"
      />
    </section>
  );
}
