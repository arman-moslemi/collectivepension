

const ViewProtestTable = ({list1,list2, titleRow, px1, center1}) => {
    console.log(list1);
    return(
        <div className="w-full ">
        <div className="w-full border-[1px] border-borderGray rounded-[10px] overflow-hidden">
            <table className={`w-full`}>
                <thead className="bg-tableGray h-[66px] ">
                    {titleRow[0]? <td className="font-IRANYekanBold px-10 text-[15px] text-right ">{titleRow[0]}</td> : null}
                    {titleRow[1]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[1]}</td> : null}
                    {titleRow[2]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[2]}</td> : null}
                    {titleRow[3]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[3]}</td> : null}
                    {titleRow[4]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[4]}</td> : null}
                    {titleRow[5]? <td className={`font-IRANYekanBold text-[15px] text-center pl-20`}>{titleRow[5]}</td> : null}
                    {titleRow[6]? <td className={`font-IRANYekanBold px-10 text-[15px] `}>{titleRow[6]}</td> : null}
                    {titleRow[7]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[7]}</td> : null}
                    {titleRow[8]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[8]}</td> : null}
                    {titleRow[9]? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[9]}</td> : null}
                </thead>

                <tbody>
                    <tr className="h-[115px] border-t-[1px] border-dashed border-borderGray">
                        <td className="font-IRANYekanMedium px-10 text-[15px] text-right"><p>{list1[0].item1}</p><p className="mt-6">{list2[0].item1}</p></td>
                        <td className="font-IRANYekanMedium px-10 text-[15px] "><p>{list1[0].item2}</p><p className="mt-6">{list2[0].item2}</p></td>
                        <td className="font-IRANYekanMedium px-10 text-[15px] "><p>{list1[0].item3}</p><p className="mt-6">{list2[0].item3}</p></td>
                        <td className="font-IRANYekanMedium px-10 text-[15px] "><p className="text-redError">{list1[0].item4}</p><p className="mt-6">{list2[0].item4}</p></td>
                        <td className="font-IRANYekanMedium px-10 text-[15px] "><p className="text-redError">{list1[0].item5}</p><p className="mt-6">{list2[0].item5}</p></td>
                        <td className="font-IRANYekanMedium text-[15px] pl-20 "><div className='w-[115px] h-[28px] bg-[#0F956D] rounded-[50px] flex justify-center items-center mx-auto'><p className='text-[15px] text-white font-IRANYekanMedium'>تایید شده</p></div></td>
                        
                    </tr>
                </tbody>
                  
            </table>
        </div>
        </div>
    )
}

export default ViewProtestTable;