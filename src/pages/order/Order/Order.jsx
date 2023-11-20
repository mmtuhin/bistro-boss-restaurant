import { useState } from "react";
import orderPageCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'soup', 'pizza', 'dessert', 'drinks']
  
  const [menu] = useMenu()
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabindex, setTabIndex] = useState(initialIndex)
  console.log(category);

  const desserts = menu.filter(data => data.category === 'dessert')
  const soup = menu.filter(data => data.category === 'soup')
  const pizza = menu.filter(data => data.category === 'pizza')
  const salad = menu.filter(data => data.category === 'salad')
  const drinks = menu.filter(data => data.category === 'drinks')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order food</title>
      </Helmet>
      <Cover img={orderPageCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>

        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel> <OrderTab items={soup}></OrderTab> </TabPanel>
        <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={desserts}></OrderTab></TabPanel>
        <TabPanel> <OrderTab items={drinks}></OrderTab></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
