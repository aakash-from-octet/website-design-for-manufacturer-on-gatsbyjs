import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import items from "../content/items.json";
import { getImage } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import Items from "../components/Items";
import { Helmet } from "react-helmet";

export default function Manufacturing() {
  const pageTitle = "Quality & Innovation in Motor Manufacturing | Alto";

  const itemsImage = useStaticQuery(graphql`
    query {
      items: allFile(filter: { relativePath: { regex: "/^()/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const itmesImagesByPath = {};
  itemsImage.items.edges.forEach(({ node }) => {
    const imagePath = node.relativePath;
    const itemsImage = getImage(node.childImageSharp);
    itmesImagesByPath[imagePath] = itemsImage;
  });
  const manufacture_Item = items.filter(
    (item) => item.id === 1 || item.id === 2
  );
  const scale_Item = items.filter((item) => item.id !== 1 && item.id !== 2);

  return (
    <Layout background="#F5F5F5" color="#3E3E3E">
      <div>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Elevate performance with our expertly manufactured motors for industrial, automotive, and medical applications. Custom solutions for unique needs" />
        </Helmet>
      </div>
      <section id="manufacturingSection" className=" md:mb-[375px]">
        <div className="text-center items-center w-[85%] mx-auto my-[80px] md:mt-[250px] md:mb-[170px]">
          <h2 className="mb-[20px] md:mb-[10px] ">Manufacturing</h2>
          <p className="text-[15px] leading-[20px] tracking-[3%] md:text-xl ">
            Manufacturing Motors with a Focus on Quality and Innovation.
          </p>
        </div>
        <div className="w-[100%] hidden md:block">
          <StaticImage
            src="../images/manufactoring.png"
            alt="image of spare parts"
            width={1600}
            height={180}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[100%] md:hidden">
          <StaticImage
            src="../images/manufacturing_resp.png"
            alt="image of spare parts"
            width={376}
            height={80}
            className="w-[100%] h-[100%]"
          />
        </div>
      </section>

      <section id="howWeHelpSection" className="bg-[#ffffff] pt-[150px] md:pt-[0px] md:bg-[#F5F5F5]">
        <div className="hidden md:block">
          {manufacture_Item.map((info, index) => (
            <Items
              itemsInfo={info}
              key={index}
              itmesImagesByPath={itmesImagesByPath}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[74px] md:hidden">
          <div className="grid grid-cols-1 justify-center items-center  w-[90%] mx-auto">
            <div className="flex flex-col">
              <p className="text-[24px] leading-[28.8px] tracking-[1.5%] text-[#111111] mb-[20px]">
                What we manufacture
              </p>
              <p className="text-[14px] leading-[23px] tracking-[3%] text-[#3e3e3e]">
                We specialise in the manufacturing motors for a wide range of
                applications, including industrial machinery, automotive,
                medical equipment, and more.
              </p>
            </div>
            <div className="justify-self-center">
              <StaticImage
                src="../images/what-manufacture-hd.png"
                alt="image of spare parts"
                width={264}
                height={350}
                className="h-[100%] w-[100%]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 justify-center items-center md:hidden w-[90%] mx-auto">
            <div className="flex flex-col">
              <p className="text-[24px] leading-[28.8px] tracking-[1.5%] text-[#111111] mb-[20px]">
                How we help
              </p>
              <p className="text-[14px] leading-[23px] tracking-[3%] text-[#3e3e3e]">
                Our team of experts works tirelessly to provide customized
                solutions that meet the unique needs of each of our clients. We
                use state-of-the-art technology and cutting-edge techniques to
                ensure that our products are of the highest quality and
                performance.
              </p>
            </div>
            <div className="justify-self-center">
              <StaticImage
                src="../images/how_we_resp.png"
                alt="image of spare parts"
                width={313}
                height={350}
                className="h-[100%] w-[100%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="supportAllScaleSection" className="support bg-[#ffffff] md:bg-[#F5F5F5]">
        <div className="w-[90%] md:w-[w-85%] mx-auto md:text-center md:flex md:flex-col  items-center pt-[150px] md:py-[300px] pb-[116px]">
          <p className="mb-[20px] md:mb-[20px] text-[30px] leading-[36px] tracking-[3%] md:text-[40px] md:leading-[72px] md:tracking-[1.5%]">
            Support at all scales
          </p>
          <p className="text-[14px] leading-[21px] tracking-[3%] md:text-xl md:w-[900px]">
            Whether you are a small business or a large corporation, we are here
            to help. We offer support at all scales, from providing custom
            solutions for individual clients to mass production for large-scale
            operations.
          </p>
          <Link
            to="/product"
            className="inline-block cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[40px] md:mt-[15px] leading-[19.2px]"
          >
            Explore Our Products &nbsp; &rarr;
          </Link>
        </div>
      </section>

      <section id="capabilitiesSection" className="bg-[#F5F5F5] pt-[0px] md:pt-[100px]">
        <div className="hidden md:block">
          {scale_Item.map((info, index) => (
            <Items
              itemsInfo={info}
              key={index}
              itmesImagesByPath={itmesImagesByPath}
            />
          ))}
        </div>

        {/* responsive */}

        <div className="grid grid-cols-1 justify-center items-center md:hidden w-[90%] mx-auto py-[50px]">
          <div className="flex flex-col">
            <p className="text-[30px] leading-[36px] tracking-[1.5%] text-[#111111] mb-[20px]">
              Winding Automation
            </p>
            <p className="text-[14px] leading-[23px] tracking-[3%] text-[#3e3e3e]mb[16px]">
              We have in house Auto winding machine for distributed as well as
              concentrated winding to ensure we can support most type of winding
              topology.
            </p>
            <p className="text-[14px] leading-[23px] tracking-[3%] text-[#3e3e3e]">
              The integration of advanced automation technology enhances
              productivity, reduces labor-intensive processes, and maintains
              consistent quality throughout production.
            </p>
          </div>
          <div className="mt-[34px]">
            <StaticImage
              src="../images/winding-automation.png"
              alt="image of spare parts"
              width={335}
              height={390}
              className="h-[100%] w-[100%]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center items-center md:hidden w-[90%] mx-auto py-[50px]">
          <div className="flex flex-col">
            <p className="text-[30px] leading-[36px] tracking-[1.5%] text-[#111111] mb-[20px]">
              Precision Machining
            </p>
            <p className="text-[14px] leading-[23px] tracking-[3%] text-[#3e3e3e] mb[16px]">
              We utilise CNC turning and grinding machines, as well as Vertical
              machining enter, to achieve exceptional precision in the
              manufacturing of motor components.
            </p>
            <p className="text-[14px] leading-[23px] tracking-[3%] text-[#3e3e3e]">
              These machines enable us to create intricate designs, tight
              tolerances, and smooth finishes, resulting in high-performance
              BLDC motors.
            </p>
          </div>
          <div className="mt-[34px]">
            <StaticImage
              src="../images/regorous_test.png"
              alt="image of spare parts"
              width={335}
              height={390}
              className="h-[100%] w-[100%]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center items-center md:hidden w-[90%] mx-auto py-[50px]">
          <div className="flex flex-col">
            <p className="text-[30px] leading-[36px] tracking-[1.5%] text-[#111111] mb-[20px]">
              Rigorous Testing and Finishing
            </p>
            <p className="text-[14px] leading-[23px] tracking-[3%] text-[#3e3e3e]mb[16px]">
              Our facility is equipped with an automatic motor test panel to
              comprehensively evaluate the performance and functionality of each
              BLDC motor.
            </p>
            <p className="text-[14px] leading-[23px] tracking-[3%] text-[#3e3e3e]">
              Every motor undergoes extensive performance testing, thorough
              inspections, and precise calibration to meet the strictest
              industry standards. With our commitment to excellence, you can
              trust in the reliability, efficiency, and longevity of our motor
              products.
            </p>
          </div>
          <div className="mt-[34px]">
            <StaticImage
              src="../images/finishing.png"
              alt="image of spare parts"
              width={335}
              height={390}
              className="h-[100%] w-[100%]"
            />
          </div>
        </div>
      </section>

      <section id="customizationSection" className="pt-[50px] md:pt-[240px] pb-[100px] bg-[#F5F5F5]">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-[52px] w-[90%] md:w-[85%] mx-auto">
          <div className=" md:py-[75px] ">
            <h2 className="mb-[20px] md:mb-[0px]">Customization</h2>
            <p className="text-[14px] leading-[23px] tracking-[3%]  md:text-[17px] md:leading-[26px] md:tracking-[3%] text-[#3e3e3e]">
              We understand that each client has unique requirements, which is
              why we offer customization services. Our team works closely with
              clients to design and produce motors that meet their specific
              needs and requirements.
            </p>
            <Link
              to="/contactUs"
              className="inline-block cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]"
            >
              Place an enquiry &nbsp; &rarr;
            </Link>
          </div>
          <div className="border-2 border-[#0072DB] hidden md:block w-fit">
            <StaticImage
              src="../images/customization.png"
              alt="machine customization image"
              width={640}
              height={452}
              className=""
            />
          </div>

          <div className="border-2 border-[#0072DB] md:hidden w-fit">
            <StaticImage
              src="../images/cust_resp_new.png"
              alt="machine customization image"
              width={335}
              height={238}
              className=" "
            />
          </div>
        </div>
      </section>
      <section className="py-[100px] md:py-[150px] bg-[#FAFAFA] enquire">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-end md:gap-[100px] w-[90%] md:w-[85%] mx-auto">
          <div className=" pt-[40px]  md:py-[75px] order-2 md:order-1 ">
            <p className="text-[20px] leading-[36px] md:text-[30px] md:leading-[36px] text-[#1c1c1c]">
              Get in touch with us to experience the best in motor industry
              innovation and service.
            </p>
            <Link
              to="/contactUs"
              className="inline-block cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]"
            >
              Enquire Now &nbsp; &rarr;
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <StaticImage
              src="../images/footer-new.png"
              alt="machine customization image"
              width={458}
              height={305}
              className=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
