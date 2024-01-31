
const SectionTitle = ({heading,SubHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-10 mb-14">
            <p className="text-yellow-600 mb-2 text-sm">--- {SubHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-2 py-4 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;