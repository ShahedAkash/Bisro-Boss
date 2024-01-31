

const MenuItem = ({item}) => {

    const {name, image, price, recipe} = item;

    return (
        <div className="flex space-x-5">
            <img className="w-[120px] rounded-e-full rounded-b-full" src={image} alt="" />
            <div>
                <h3 className="uppercase text-slate-500">{name} -----------</h3>
                <p className="text-sm text-slate-400">{recipe}</p>
            </div>
            <p className="text-yellow-500 w-fit">${price}</p>
        </div>
    );
};

export default MenuItem;