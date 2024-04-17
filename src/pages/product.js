import React, { useState, useEffect } from "react";
import productItem from "../content/product.json";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

export default function Product() {

  const productCategory = [
    "All Products",
    "BLDC Motors",
    "Induction Motors",
    "BLDC Driver",
    "Accessories",
  ];
  const [items, setItem] = useState(productItem);
  const [activeCategory, setActiveCategory] = useState("All Products");

   // Function to update the URL
   const updateURL = (category) => {
    const url = new URL(window.location.href);
    url.searchParams.set('category', category);
    window.history.pushState({}, '', url);
  };

  const filterProduct = (cateItem) => {
    setActiveCategory(cateItem); // 
    if (cateItem === "All Products") {
      setItem(productItem);
    } else {
      const updatedItem = productItem.filter((currItem) => {
        return currItem.category === cateItem;
      });
      setItem(updatedItem);
    }
    updateURL(cateItem); 
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam && productCategory.includes(categoryParam)) {
      setActiveCategory(categoryParam);

      if (categoryParam === "All Products") {
        setItem(productItem);
      } else {
        const updatedItem = productItem.filter((currItem) => {
          return currItem.category === categoryParam;
        });
        setItem(updatedItem);
      }
    }
  }, []);

  const productImage = useStaticQuery(graphql`
    query {
      productItem: allFile(filter: { relativePath: { regex: "/^()/" } }) {
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

  const productImagesByPath = {};
  productImage.productItem.edges.forEach(({ node }) => {
    const imagePath = node.relativePath;
    const productImage = getImage(node.childImageSharp);
    productImagesByPath[imagePath] = productImage;
  });

 

  const pageTitle = "Explore Innovative Motor Solutions | Alto";

  return (
    <div className="">
      <div>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content="Discover top-tier motor industry innovation and service. Contact us to explore cutting-edge motor solutions for your needs."/>
      
        </Helmet>
      </div>
      <div className="product-bg md:pt-8">
        <Navbar />
        <section>
          <div className="text-center items-center w-[90%] md:w-[85%] mx-auto mt-[80px] pb-[54px] md:mt-[100px] md:pb-[100px]">
            <h2 className="mb-[20px] md:mb-[10px]">Products</h2>
            <p className="text-[15px] leading-[20px] tracking-[3%] md:text-xl ">
              Get in touch with us to experience the best in motor industry
              innovation and service.
            </p>
          </div>
        </section>
      </div>

      <section id="allProductSection" className="">
        <div className="w-[90%] md:w-[85%] mx-auto flex flex-wrap gap-[24px] mb-[40px] pt-[80px]">
          {productCategory.map((info, index) => (
            <button
              key={index}
              onClick={() => filterProduct(info)}
              className={`px-[20px] py-[12px] rounded-[2px] border border-[#dfdfdf] focus:border-[#666666]
      text-[#444444] text-[14px] leading-[16.8px] md:text-[20px] md:leading-[24px] tracking-[3%] ${
        activeCategory === info ? "active-cat" : ""
      }`}
            >
              {info}
            </button>
          ))}
        </div>

        <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[50px] gap-y-[20px] md:gap-y-[60px] mb-[100px] md:mb-[150px] ">
          {items.map((info, index) => (
            <ProductCard
              productInfo={info}
              key={index}
              productImagesByPath={productImagesByPath}
            />
          ))}
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

      <Footer />
    </div>
  );
}
