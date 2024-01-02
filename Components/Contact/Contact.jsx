import React, { useState } from "react";
import GithubIcon from '../../public/images/github-icon.svg'
import youtube from '../../public/youtube.png'
import instagram from '../../public/instagram.png'
import facebook from '../../public/facebook.png'
import telegram from '../../public/telegram.png'
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      name: e.target.subject.value,
      msg: e.target.message.value,
    };

    axios.post('/api/send/Sendemail',data).then(res=>{
        if(res.data.success==true)
        {
         setEmailSubmitted(true);
        }
    })

  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-[#ffdb1a] my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ffdb1a] mb-4 max-w-md">
          {" "}
          For inquiries about UG TRADING services or operational details,
          please leave a message. We will promptly respond and ensure you receive
          the information you need. Thank you
        </p>
        <div className="socials flex flex-row gap-2">
          {/* <Link href="github.com">
            <Image height={15} width={20}  src={GithubIcon} alt="Github Icon" />
          </Link> */}
          <Link href="https://www.youtube.com/@YMPGHORY4289">
            <Image height={15} width={20} src={youtube} alt="Github Icon" />
          </Link>
          <Link href="https://www.instagram.com/usman777681/">
            <Image height={15} width={20} src={instagram} alt="Github Icon" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61551249801661">
            <Image height={15} width={20} src={facebook} alt="Github Icon" />
          </Link>
          <Link href="https://t.me/+8UTo0gEoydlhZTE0">
            <Image height={15} width={20} src={telegram} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-[#ffdb1a] text-2xl mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-[#ffdb1a] block mb-2 text-sm font-bold "
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-transparent font-bold  border border-[#33353F] placeholder-[#ffdb1a] focus:border-[#ffdb1a] text-gray-100 text-xl rounded-lg block w-full p-2.5"
                placeholder="ug-trading.services"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-[#ffdb1a] font-bold  block text-sm mb-2  "
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-transparent focus:border-[#ffdb1a] font-bold  border border-[#33353F] placeholder-[#ffdb1a] text-gray-100 text-xl rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-[#ffdb1a] block text-sm mb-2 font-bold "
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-transparent border focus:border-[#ffdb1a] focus:border-2 border-[#33353F] placeholder-[#ffdb1a] text-gray-100 text-xl rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-transparent border-[1px] border-[#33353F] hover:bg-[#33353F]  text-[#ffdb1a] font-bold py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
