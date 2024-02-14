import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

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
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title={'Order Food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Bangla Food</Tab>
                    <Tab>Chinese & Thai Food</Tab>
                    <Tab>Set Menu</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Continental Food</Tab>
                    <Tab>Fast Food</Tab>
                    <Tab>Signature Food</Tab>
                    <Tab>Dessert & Cofe</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={bangla}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={chinese}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={setmenu}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={continental}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={fastfood}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={popular}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;