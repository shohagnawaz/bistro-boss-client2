import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
// import bgImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-10"
            // style={{backgroundImage: `url(${bgImg})`}}
        >
            <SectionTitle 
                subHeading={"Check It Out"} 
                heading={"Featured Items"}>
            </SectionTitle>
            <div className="flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-10 px-36"> 
                <div><img src={featuredImg} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magnam minus consectetur molestiae quasi dolorem, ex iure 
                        quibusdam quae numquam voluptate sit unde optio tenetur 
                        voluptatibus amet? Quasi atque iusto quos.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>            
        </div>
    );
};

export default Featured;