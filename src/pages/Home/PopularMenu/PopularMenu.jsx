
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    /* const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, []) */
    return (
        <section className="mb-20">
            <SectionTitle
                heading={'From Our menu'}
                SubHeading={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-8">
                <button className="btn btn-outline border-0 border-b-4">See Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;