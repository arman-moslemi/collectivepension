import IcPenIcon from "../../assets/icon/general/IcPenIcon";
import IcReloadIcon from "../../assets/icon/general/IcReloadIcon";


const MainTable = ({list, titleRow, center1, center2, center3, ic}) => {
    return(
        <div className="w-full ">
        <div className="w-full border-[1px] border-borderGray rounded-[10px] overflow-hidden">
            {ic?
            <table className={`w-full`}>
                <tr className="bg-tableGray h-[66px] ">
                    {titleRow[0]? <td className={`font-IRANYekanBold  text-[15px] text-right ${center3? 'px-3':'px-10'}`}>{titleRow[0]}</td> : null}
                    {titleRow[1]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[1]}</td> : null}
                    {titleRow[2]? <td className={`font-IRANYekanBold text-[15px] ${center2? 'text-center': 'text-right'} ${center3? 'px-1':'px-10'}`}>{titleRow[2]}</td> : null}
                    {titleRow[3]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[3]}</td> : null}
                    {titleRow[4]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[4]}</td> : null}
                    {titleRow[5]? <td className={`font-IRANYekanBold text-[15px] ${center1? 'text-center': 'text-right'} ${center3? 'px-1':'px-10'}`}>{titleRow[5]}</td> : null}
                    {titleRow[6]? <td className={`font-IRANYekanBold text-[15px] ${center1? 'text-center': 'text-right'} ${center3? 'px-1':'px-10'}`}>{titleRow[6]}</td> : null}
                    {titleRow[7]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[7]}</td> : null}
                    {titleRow[8]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[8]}</td> : null}
                    {titleRow[9]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[9]}</td> : null}
                </tr>
                
                {list.map((item, index) => (
                    <tr key={index} className="h-[58px] border-t-[1px] border-dashed border-borderGray">
                        {item.item1 ? <td className={`font-IRANYekanMedium text-[15px] text-right ${center3? 'px-3':'px-10'}`}>{index+1}</td> : null}
                        {index===0?
                        item.item2 ? <td className={`font-IRANYekanMedium text-[15px] h-[58px] flex items-center ${center3? 'px-1':'px-10'}`}><p>{item.item2}</p><div className="mr-2 rounded-full bg-redError h-[25px] w-[25px] flex justify-center items-center"><IcPenIcon/></div></td> : null
                        :
                        index===1?
                        item.item2 ? <td className={`font-IRANYekanMedium text-[15px] h-[58px] flex items-center ${center3? 'px-1':'px-10'}`}><p>{item.item2}</p><div className="mr-2 rounded-full bg-yellowError h-[25px] w-[25px] flex justify-center items-center"><IcReloadIcon/></div></td> : null
                        :
                        index===3?
                        item.item2 ? <td className={`font-IRANYekanMedium text-[15px] h-[58px] flex items-center ${center3? 'px-1':'px-10'}`}><p>{item.item2}</p><div className="mr-2 rounded-full bg-buttonBlue h-[25px] w-[25px] flex justify-center items-center"><p className="text-white text-[23px]">+</p></div></td> : null
                        :
                        item.item2 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item2}</td> : null
                        }
                        {item.item3 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item3}</td> : null}
                        {item.item4 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item4}</td> : null}
                        {item.item5 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item5}</td> : null}
                        {item.item6 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item6}</td> : null}
                        {item.item7 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item7}</td> : null}
                        {item.item8 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item8}</td> : null}
                        {item.item9 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item9}</td> : null}
                        {item.item10 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-3':'px-10'}`}>{item.item10}</td> : null}
                    </tr>
                ))}
            </table>
            :
             <table className={`w-full`}>
                <tr className="bg-tableGray h-[66px] ">
                    {titleRow[0]? <td className={`font-IRANYekanBold  text-[15px] text-right ${center3? 'px-3':'px-10'}`}>{titleRow[0]}</td> : null}
                    {titleRow[1]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[1]}</td> : null}
                    {titleRow[2]? <td className={`font-IRANYekanBold text-[15px] ${center2? 'text-center': 'text-right'} ${center3? 'px-1':'px-10'}`}>{titleRow[2]}</td> : null}
                    {titleRow[3]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[3]}</td> : null}
                    {titleRow[4]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[4]}</td> : null}
                    {titleRow[5]? <td className={`font-IRANYekanBold text-[15px] ${center1? 'text-center': 'text-right'} ${center3? 'px-1':'px-10'}`}>{titleRow[5]}</td> : null}
                    {titleRow[6]? <td className={`font-IRANYekanBold text-[15px] ${center1? 'text-center': 'text-right'} ${center3? 'px-1':'px-10'}`}>{titleRow[6]}</td> : null}
                    {titleRow[7]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[7]}</td> : null}
                    {titleRow[8]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[8]}</td> : null}
                    {titleRow[9]? <td className={`font-IRANYekanBold text-[15px] ${center3? 'px-1':'px-10'}`}>{titleRow[9]}</td> : null}
                </tr>
                
                {list.map((item, index) => (
                    <tr key={index} className="h-[58px] border-t-[1px] border-dashed border-borderGray">
                        {item.item1 ? <td className={`font-IRANYekanMedium text-[15px] text-right ${center3? 'px-3':'px-10'}`}>{index+1}</td> : null}
                        {item.item2 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item2}</td> : null}
                        {item.item3 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item3}</td> : null}
                        {item.item4 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item4}</td> : null}
                        {item.item5 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item5}</td> : null}
                        {item.item6 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item6}</td> : null}
                        {item.item7 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item7}</td> : null}
                        {item.item8 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item8}</td> : null}
                        {item.item9 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-1':'px-10'}`}>{item.item9}</td> : null}
                        {item.item10 ? <td className={`font-IRANYekanMedium text-[15px] ${center3? 'px-3':'px-10'}`}>{item.item10}</td> : null}
                    </tr>
                ))}
            </table>
            }
        </div>
        </div>
    )
}

export default MainTable;