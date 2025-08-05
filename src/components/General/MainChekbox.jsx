const MainChekbox = ({ label, checked, onChange }) => {
    return (
        <div className="w-full flex justify-start items-center ">
            <input
                type="checkbox"
                className="w-4 h-4 border-2 border-borderGray rounded-md"
                checked={checked}
                onChange={onChange}
            />
            <label className="font-IRANYekanBold text-[16px] text-mainBlue mr-2">{label}</label>
        </div>
    );
};

export default MainChekbox;