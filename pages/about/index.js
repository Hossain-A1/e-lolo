import SectionTitle from "@/components/SectionTitle";

const About = () => {
  return (
    <div className="wrapper py-10">
     <div className="flex flex-col justify-center items-center gap-2">
     <h2 className="text-violet-300 uppercase font-semibold text-4xl text-center tracking-widest">
 About Us</h2>
   

      <SectionTitle desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nemo facilis similique, nisi quidem magnam corrupti aliquam atque voluptates nihil tempore ut pariatur iure qui incidunt quos eveniet explicabo cupiditate."/>
     </div>
<h2 className="text-xl text-violet-300 uppercase font-semibold  tracking-widest">A Bit About Us</h2>
      <div className="about us w-4/5 space-x-2 py-5 text-justify">
<p>E-Lolo is a website that provides detailed descriptions of products and services. It offers users the ability to compare different products and services side-by-side, as well as read reviews from other customers. Additionally, it provides users with helpful tips and advice on how to make informed purchasing decisions.</p>
<p> E-Lolo is a website dedicated to providing the best quality products at the best prices. We offer a wide selection of products from apparel to electronics. We work hard to ensure that our products are of the highest quality and offer great value for money. We also provide excellent customer service and quick delivery.</p>
      </div>

      <div className="review">

      </div>
      <div className="misson"></div>
      <div className="visson"></div>
    </div>
  )
}

export default About