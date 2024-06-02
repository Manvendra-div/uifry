import Image from "next/image";
import testimonial from "@/assets/testimonials.svg";
import usermain from "@/assets/usermain.svg";
import usersecondary from "@/assets/usersecondary.svg";
import star from "@/assets/star.svg"
export default function Testimonial() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full mt-20">
      <span className="font-light leading-relaxed">TESTIMONIAL</span>
      <span className="capitalize leading-tight text-5xl font-extrabold w-[35%] text-center">
        what our users say about us?
      </span>
      <div className="flex justify-between items-center w-[80%]">
        <div className="w-[60%]">
          <Image src={testimonial} alt="testimonial" />
        </div>
        <div className="w-[40%] space-y-4">
          <span className="font-bold text-2xl capitalize leading-tight">
            the best financial accounting app ever!
          </span>
          <p className="leading-relaxed">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="flex justify-start items-center space-x-2">
            <Image src={usermain} alt="usermain" />
            <Image src={usersecondary} alt="usersecondary" />
          </div>
          <p className="font-bold">Nick Jones</p>
        </div>
      </div>
      <Image src={star} className="absolute -z-10 -top-10 right-10" alt="star" />
      <Image src={star} width={40} className="absolute -z-10 -rotate-45 left-10 bottom-5" alt="star" />
    </section>
  );
}
