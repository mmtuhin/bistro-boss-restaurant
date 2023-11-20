import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import banner from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menucategory from "../MenuCategory/Menucategory";
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(data => data.category === 'dessert')
    const soup = menu.filter(data => data.category === 'soup')
    const pizza = menu.filter(data => data.category === 'pizza')
    const salad = menu.filter(data => data.category === 'salad')
    const offered = menu.filter(data => data.category === 'offered')
    
    return (
        <div>
             <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={banner} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            <Menucategory items={offered}></Menucategory>

            <Menucategory items={desserts} coverImg={desertImg} title='dessert'></Menucategory>

            <Menucategory items={pizza} coverImg={pizzaImg} title='pizza'></Menucategory>
            <Menucategory items={soup} coverImg={soupImg} title='soup'></Menucategory>
            <Menucategory items={salad} coverImg={saladImg} title='salad'></Menucategory>
            
        </div>
    );
};

export default Menu;