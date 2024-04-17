import React, { useState } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

export default function ContactUs() {
  const pageTitle = "Get in Touch for Motor Solutions | Alto";

  const [verified, setVerified] = useState(false);
  // set captcha
  function onChange(value) {
    setVerified(true);
  }

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qgn89hp", //service id
        "template_6me1ov8", //template id
        form.current,
        "DJhfYZe9Tp7M8wIFW" //public key
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }

  return (
    <Layout background="" color="#3E3E3E">
      <div>
        <Helmet>
          <title>{pageTitle}</title>
          <meta
            name="description"
            content="Contact us for expert motor solutions. We're here to assist with innovative motor technology and customized solutions."
          />
        </Helmet>
      </div>

      <section className="pt-[50px] md:pt-[100px] w-[90%] md:w-[85%] mx-auto">
        <div>
          <p className="text-[30px] leading-[36px] md:text-[50px] md:leading-[55px] mb-[12px]">
            No Challenge Is Too Big Or Small
          </p>
          <p classname="text-[17px] leading-[36px] tracking-[3%] text-[#3E3E3E]">
            Tell us what you need below, or send us an{" "}

            <a href="mailto:sales@altomotors.in" className="text-[#3188EE] underline">email.</a>{" "}
            {/* <a
              href="mailto:sales@altomotors.in"
              className="text-[#3188EE] underline"
            >
              email
            </a>{" "} */}

          </p>
        </div>

        <div className="pt-[40px] grid grid-cols-1 md:grid-cols-2 gap-[100px] md:gap-[64px]">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="flex flex-col gap-[20px] form-container"
          >
            <div>
              <input
                className="py-[10px] px-[20px] border border-[#D5D5D5] form-input "
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                required
              ></input>
            </div>
            <div>
              <input
                className="py-[10px] px-[20px] border border-[#D5D5D5] form-input "
                type="text"
                name="compnay"
                id="compnay"
                placeholder="Company"
              ></input>
            </div>
            <div>
              <input
                className="py-[10px] px-[20px] border border-[#D5D5D5] form-input "
                type="email"
                name="email"
                id="email"
                placeholder="Email ID"
                required
              ></input>
            </div>
            <div>
              <input
                className="py-[10px] px-[20px] border border-[#D5D5D5] form-input "
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                required
              ></input>
            </div>

            <div>
              <textarea
                rows={8}
                name="description"
                className="py-[10px] px-[20px] border border-[#D5D5D5] form-input"
                placeholder="Requirement description..."
                required
              ></textarea>
            </div>
            {/* test */}
            <ReCAPTCHA
              sitekey="6Lf1SO8oAAAAAMCWuZWnrWh7umfl2Xtfn9v0D4_d"
              className="mt-[20px]"
              onChange={onChange}
            />

            <div>
              <button
                disabled={!verified}
                type="submit"
                className=" py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium leading-[19.2px]"
              >
                Send Enquiry &nbsp; &rarr;
              </button>
            </div>
          </form>

          <div className="hidden md:block">
            <StaticImage
              src="../images/contact-us-new.png"
              alt="image of spare parts"
              width={545}
              height={652}
              className=""
            />
          </div>
        </div>

        <div className="pt-[100px] md:pt-[100px]">
          <div>
            <p className=" pb-[30px] text-[18px] leading-[19.8px] md:text-[20px] md:leading-[22px] text-[#222222]">
              Reach Out To Us
            </p>
            <div className="flex reachout md:justify-between md:items-center gap-[40px] md:gap-[60px]">
              <div className="md:w-[355px]">
                <p className="text-[15px] md:text-[16px] leading-[36px] text-[#555555]">
                  Address
                </p>
                {/* <a href="https://www.google.com/maps?q=Mototechnika+(alto+motors)+Plot+No+1706,+Road-N,+Phase+IV,+GIDC,+Wadhwan,+Gujarat+363035" class="map-link" onclick="poptastic(this.href); return false;" style="display: inline;">View map</a> */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps?q=Mototechnika+(alto+motors)+Plot+No+1706,+Road-N,+Phase+IV,+GIDC,+Wadhwan,+Gujarat+363035"
                  className="hover:text-[#820808] text-[17px] leading-[22.1px] md:text-[20px] md:leading-[26px] tracking-[5%] text-[#222222] "
                >
                  Plot No-1706, Road-N <br />
                  Phase-IV, GIDC Wadhwan-363035
                  <br /> Gujarat, India
                </a>
              </div>
              <div className="md:w-[355px]">
                <p className="text-[15px] md:text-[16px] leading-[36px] text-[#555555]">
                  Phone
                </p>
                <p className="text-[17px] leading-[22.1px] md:text-[20px] md:leading-[26px] tracking-[5%] text-[#222222]">
                  <Link
                    className="hover:text-[#820808]"
                    to="tel:+91 9712973929"
                  >
                    +91 9712973929
                  </Link>{" "}
                  <br />
                  {/* <Link className="hover:text-[#820808]" to="tel:+91 2752243351">+91 2752243351</Link> */}
                </p>
              </div>
              <div className="md:w-[355px]">
                <p className="text-[15px] md:text-[16px] leading-[36px] text-[#555555]">
                  Email
                </p>
                <p className="text-[17px] leading-[22.1px] md:text-[20px] md:leading-[26px] tracking-[5%] text-[#222222] ">
                  <Link
                    className="hover:text-[#820808]"
                    to="mailto:sales@altomotors.in"
                  >
                    sales@altomotors.in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <p className="text-[15px]  md:text-[16px] leading-[36px] text-[#555555]">
              Logistic Connectivity
            </p>
            <div className="text-[#222222] flex justify-between md:items-center gap-[40px] md:gap-[60px]">
              <div className="w-[355px] grid grid-cols-1">
                <p className="order-2 md:order-1 font-normal text-[13px] leading-[17px] md:font-medium md:text-[18px] md:leading-[23.4px] tracking-[5%] mb-[6px] md:mb-[10px] ">
                  Ahmedabad International Airport
                </p>
                <p className="order-1 md:order-2 text-[17px] leading-[22px] md:text-[20px] md:leading-[26px] tracking-[5%]">
                  140KM
                </p>
              </div>
              <div className="w-[355px] grid grid-cols-1">
                <p className="order-2 md:order-1 font-normal text-[13px] leading-[17px] md:font-medium md:text-[18px] md:leading-[23.4px] tracking-[5%] mb-[6px] md:mb-[10px] ">
                  Kandla/Mundra Port
                </p>
                <p className="order-1 md:order-2 text-[17px] leading-[22px] md:text-[20px] md:leading-[26px] tracking-[5%]">
                  270KM
                </p>
              </div>
              <div className="w-[355px] grid grid-cols-1">
                <p className="order-2 md:order-1 font-normal text-[13px] leading-[17px] md:font-medium md:text-[18px] md:leading-[23.4px] tracking-[5%] mb-[6px] md:mb-[10px] ">
                  JNPT Port
                </p>
                <p className="order-1 md:order-2 text-[17px] leading-[22px] md:text-[20px] md:leading-[26px] tracking-[5%]">
                  670 KM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[30px] mb-[50px] md:my-[130px] w-[90%] md:w-[85%] mx-auto">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787.640372273051!2d71.66135985753!3d22.726589486555007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395940d5e1400001%3A0xd208c7d9727d55b6!2sMototechnika%20(alto%20motors)!5e0!3m2!1sen!2sin!4v1691124318755!5m2!1sen!2sin"
          width="100%"
          height="507"
          style={{ border: "0", borderRadius: "2px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Layout>
  );
}
