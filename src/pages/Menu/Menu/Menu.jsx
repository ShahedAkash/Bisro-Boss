// Helmet
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const bangla = menu.filter(item => item.category === 'bangla')
    const chinese = menu.filter(item => item.category === 'chinese')
    const setmenu = menu.filter(item => item.category === 'setmenu')
    const continental = menu.filter(item => item.category === 'continental')
    const fastfood = menu.filter(item => item.category === 'fastfood')
    const salad = menu.filter(item => item.category === 'salad')
    const popular = menu.filter(item => item.category === 'popular')
    const dessert = menu.filter(item => item.category === 'dessert')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our menu'}></Cover>
            {/* Main Cover */}
            <SectionTitle SubHeading={'Dont Miss'} heading={'Todays Offer'}></SectionTitle>
            {/* popular meu items */}
            <MenuCategory items={popular}></MenuCategory>
            {/* Chinese menu items */}
            <MenuCategory items={chinese} title="Chinese & Thai Food" img={dessertImg}></MenuCategory>
            {/* continental menu items */}
            <MenuCategory items={continental} title="Continental Food" img={pizzaImg}></MenuCategory>
            {/* fastfood menu items */}
            <MenuCategory items={fastfood} title="Fast Food" img={saladImg}></MenuCategory>
            {/* bangla menu items */}
            <MenuCategory items={bangla} title="Bangla Food" img={soupImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title="Salad & Beverages" img={soupImg}></MenuCategory>
            {/* set Menu menu items */}
            <MenuCategory items={setmenu} title="Set Menu" img={soupImg}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="Dessert & Cofe" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;