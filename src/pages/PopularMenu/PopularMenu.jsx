
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(data => data.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
            heading='From our Menu'
            subHeading='Popular Items'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;