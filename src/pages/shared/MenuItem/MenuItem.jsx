

const MenuItem = ({item}) => {
    console.log(item);
    const {name, image, price, recipe} = item
    return (
        <div className="flex items-center gap-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[80px] h-[80px]" src={image} alt="" />
            <div>
                <div className="flex justify-between">
                    <p>{name}----------------</p>
                    <p className="text-yellow-500">{price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;