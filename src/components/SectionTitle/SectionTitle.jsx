

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto w-4/12 text-center my-4">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;