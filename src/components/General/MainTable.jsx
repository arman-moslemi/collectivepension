

const MainTable = ({list, titleRow, px1, center1}) => {
    return(
        <div className="w-full ">
        <div className="w-full border-[1px] border-borderGray rounded-[10px] overflow-hidden">
            <table className={`w-full`}>
                <tr className="bg-tableGray h-[66px] ">
                    {titleRow[0]? <td className="font-IRANYekanBold px-10 text-[15px] text-right ">{titleRow[0]}</td> : null}
                    {titleRow[1]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[1]}</td> : null}
                    {titleRow[2]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[2]}</td> : null}
                    {titleRow[3]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[3]}</td> : null}
                    {titleRow[4]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[4]}</td> : null}
                    {titleRow[5]? <td className={`font-IRANYekanBold px-10 text-[15px] ${center1? 'text-center': 'text-right'}`}>{titleRow[5]}</td> : null}
                    {titleRow[6]? <td className={`font-IRANYekanBold px-10 text-[15px] ${center1? 'text-center': 'text-right'}`}>{titleRow[6]}</td> : null}
                    {titleRow[7]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[7]}</td> : null}
                    {titleRow[8]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[8]}</td> : null}
                    {titleRow[9]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[9]}</td> : null}
                </tr>

                {list.map((item, index) => (
                    <tr key={index} className="h-[58px] border-t-[1px] border-dashed border-borderGray">
                        {item.item1 ? <td className="font-IRANYekanMedium px-10 text-[15px] text-right">{index+1}</td> : null}
                        {item.item2 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item2}</td> : null}
                        {item.item3 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item3}</td> : null}
                        {item.item4 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item4}</td> : null}
                        {item.item5 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item5}</td> : null}
                        {item.item6 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item6}</td> : null}
                        {item.item7 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item7}</td> : null}
                        {item.item8 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item8}</td> : null}
                        {item.item9 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item9}</td> : null}
                        {item.item10 ? <td className="font-IRANYekanMedium px-10 text-[15px] ">{item.item10}</td> : null}
                    </tr>
                ))}
            </table>
        </div>
        </div>
    )
}

export default MainTable;