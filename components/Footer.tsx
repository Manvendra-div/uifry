import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center mt-36 mb-10 capitalize">
      <div className="w-[80%] flex justify-between">
        <div className="w-[21%] flex flex-col space-y-4">
          <Image src={logo} alt="logo" />
          <Link className="flex items-center space-x-2" href={"/"}>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9394 0.708984C16.2804 0.708984 17.5704 1.23898 18.5194 2.18998C19.4694 3.13898 20.0004 4.41898 20.0004 5.75898V13.659C20.0004 16.449 17.7304 18.709 14.9394 18.709H5.06043C2.26943 18.709 0.000427246 16.449 0.000427246 13.659V5.75898C0.000427246 2.96898 2.25943 0.708984 5.06043 0.708984H14.9394ZM16.0704 5.90898C15.8604 5.89798 15.6604 5.96898 15.5094 6.10898L11.0004 9.70898C10.4204 10.19 9.58943 10.19 9.00043 9.70898L4.50043 6.10898C4.18943 5.87898 3.75943 5.90898 3.50043 6.17898C3.23043 6.44898 3.20043 6.87898 3.42943 7.17898L3.56043 7.30898L8.11043 10.859C8.67043 11.299 9.34943 11.539 10.0604 11.539C10.7694 11.539 11.4604 11.299 12.0194 10.859L16.5304 7.24898L16.6104 7.16898C16.8494 6.87898 16.8494 6.45898 16.5994 6.16898C16.4604 6.01998 16.2694 5.92898 16.0704 5.90898Z"
                fill="#FF5555"
              />
            </svg>
            <p className="">help@frybix.com</p>
          </Link>
          <Link className="flex items-center space-x-2" href={"/"}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.53174 10.1814C13.5208 14.1693 14.4258 9.5557 16.9656 12.0938C19.4143 14.5417 20.8216 15.0322 17.7192 18.1337C17.3306 18.446 14.8616 22.2032 6.1846 13.5287C-2.49348 4.85298 1.26158 2.38143 1.57397 1.99293C4.68387 -1.11717 5.16586 0.298367 7.61449 2.74631C10.1544 5.28548 5.54266 6.1934 9.53174 10.1814Z"
                fill="#FF5555"
              />
            </svg>
            <p className="">+1234 456 678 89</p>
          </Link>
        </div>
        <div className="w-[18%] flex flex-col space-y-4">
          <p className="fonts-bold text-3xl">Links</p>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Bookings</Link>
          <Link href={"/"}>Blog</Link>
        </div>
        <div className="w-[18%] flex flex-col space-y-4">
          <p className="fonts-bold text-3xl">Legal</p>
          <Link href={"/"}>Terms Of Use</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Cookie Policy</Link>
        </div>
        <div className="w-[18%] flex flex-col space-y-4">
          <p className="fonts-bold text-3xl">Product</p>
          <Link href={"/"}>take tour</Link>
          <Link href={"/"}>live chat</Link>
          <Link href={"/"}>reviewss</Link>
        </div>
        <div className="w-[25%] flex flex-col space-y-4">
          <p className="fonts-bold text-3xl">Newsletter</p>
          <Link href={"/"}>stay up to date</Link>
          <div className="flex items-center bg-gray-100 p-2">
          <input type="text" placeholder="Your Email" className="w-[50%] py-2 px-1 focus:outline-none bg-gray-100"/>
          <button className="px-4 py-3 bg-black text-white rounded-md text-base">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="p-[0.1px] w-[75%] bg-gray-400 mt-10 my-5"/>
      <p className="text-center">Copyright 2022 uifry.com all rights reserved</p>
    </footer>
  );
}
