import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item pt-10 bg-fixed">
            <SectionTitle
                SubHeading={'check it out'}
                heading={'Featured Items'}
            ></SectionTitle>
            <div className="md:flex justify-start items-center pb-16 px-36 text-white bg-slate-300 bg-opacity-30">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil corrupti rerum quia voluptatibus sed sapiente. Necessitatibus dignissimos tempore tempora aperiam doloribus perferendis nostrum explicabo sint nobis sed mollitia, possimus incidunt ullam vel, aut similique dolorum asperiores iure minus? Provident temporibus numquam nemo fugit voluptates est, unde eos sint obcaecati!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;