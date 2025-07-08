import IcPenIcon from "../../assets/icon/general/IcPenIcon";
import IcReloadIcon from "../../assets/icon/general/IcReloadIcon";


const MainTable = ({list, titleRow, center1, center2, center3,cen4,cen5,cen6, ic,record1,record2,record3,record4,record5,record6}) => {
   
    const lastColIndex = titleRow.reduce((last, curr, i) => curr ? i : last, -1);

    return(
        <div className="w-full overflow-x-auto">
  <div className="min-w-[800px] border-[1px] border-borderGray rounded-[10px] overflow-hidden">
            {ic?
            <table className="min-w-[100%] table-auto">
                <tr className="bg-tableGray h-[66px] ">
                    {titleRow[0]? <td className={`font-IRANYekanBold  text-[12px] ${lastColIndex === 0 ? 'text-center' : 'text-right'} text-right ${center3? 'px-3':'px-2'} whitespace-nowrap w-[40px] pr-4 text-right`}>{titleRow[0]}</td> : null}
                    {titleRow[1]? <td className={`font-IRANYekanBold text-[12px] ${record1 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 1 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[1]}</td> : null}
                    {titleRow[2]? <td className={`font-IRANYekanBold text-[12px] ${record2 ? 'w-[180px]' : 'w-auto'}${lastColIndex === 2 ? 'text-center' : 'text-right'}  ${center2? 'text-center': 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[2]}</td> : null}
                    {titleRow[3]? <td className={`font-IRANYekanBold text-[12px] ${record3 ? 'w-[180px]' : 'w-auto'}${lastColIndex === 3 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[3]}</td> : null}
                    {titleRow[4]? <td className={`font-IRANYekanBold text-[12px] ${record4 ? 'w-[180px]' : 'w-auto'}${lastColIndex === 4 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[4]}</td> : null}
                    {titleRow[5]? <td className={`font-IRANYekanBold text-[12px] ${record5 ? 'w-[180px]' : 'w-auto'}${lastColIndex === 5 ? 'text-center' : 'text-right'} ${center1? 'text-center': 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[5]}</td> : null}
                    {titleRow[6]? <td className={`font-IRANYekanBold text-[12px] ${record6 ? 'w-[180px]' : 'w-auto'}${lastColIndex === 6 ? 'text-center' : 'text-right'} ${center1? 'text-center': 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[6]}</td> : null}
                    {titleRow[7]? <td className={`font-IRANYekanBold text-[12px] ${lastColIndex === 7 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[7]}</td> : null}
                    {titleRow[8]? <td className={`font-IRANYekanBold text-[12px] ${lastColIndex === 8 ? 'text-center' : 'text-right'} ${center3 ? 'px-1' : 'px-2'}`}>{titleRow[8]}</td> : null}
                    {titleRow[9]? <td className={`font-IRANYekanBold text-[12px] ${lastColIndex === 9 ? 'text-center' : 'text-right'} ${center3 ? 'px-1' : 'px-2'} pl-4 `}>{titleRow[9]}</td> : null}
                </tr>
                
                {list.map((item, index) => (
                    <tr key={index} className="h-[58px] border-t-[1px] border-dashed border-borderGray">
                        {item.item1 ? <td className={`font-IRANYekanMedium text-[12px] text-right ${lastColIndex === 0 ? 'text-center' : 'text-right'} ${center3? 'px-3':'px-2'} whitespace-nowrap w-[40px] pr-4 text-right`} >{index+1}</td> : null}
                        {index===0?
                        item.item2 ? <td className={`font-IRANYekanMedium text-[12px] h-[58px] flex items-center ${record1 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 1 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}><p>{item.item2}</p><div className="mr-2 rounded-full bg-redError h-[25px] w-[25px] flex justify-center items-center"><IcPenIcon/></div></td> : null
                        :
                        index===1?
                        item.item2 ? <td className={`font-IRANYekanMedium text-[12px] h-[58px] flex items-center ${record1 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 1 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}><p>{item.item2}</p><div className="mr-2 rounded-full bg-yellowError h-[25px] w-[25px] flex justify-center items-center"><IcReloadIcon/></div></td> : null
                        :
                        index===3?
                        item.item2 ? <td className={`font-IRANYekanMedium text-[12px] h-[58px] flex items-center ${record1 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 1 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}><p>{item.item2}</p><div className="mr-2 rounded-full bg-buttonBlue h-[25px] w-[25px] flex justify-center items-center"><p className="text-white text-[23px]">+</p></div></td> : null
                        :
                        item.item2 ? <td className={`font-IRANYekanMedium text-[12px] ${center3? 'px-1':'px-2'} ${record1 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 1 ? 'text-center' : 'text-right'}`}>{item.item2}</td> : null
                        }
                        {item.item3 ? <td className={`font-IRANYekanMedium text-[12px] ${center3? 'px-1':'px-2'} ${record2 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 2 ? 'text-center' : 'text-right'}`}>{item.item3}</td> : null}
                        {item.item4 ? <td className={`font-IRANYekanMedium text-[12px] ${center3? 'px-1':'px-2'} ${record3 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 3 ? 'text-center' : 'text-right'}`}>{item.item4}</td> : null}
                        {item.item5 ? <td className={`font-IRANYekanMedium text-[12px] ${center3? 'px-1':'px-2'} ${record4 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 4 ? 'text-center' : 'text-right'}`}>{item.item5}</td> : null}
                        {item.item6 ? <td className={`font-IRANYekanMedium text-[12px] ${center3? 'px-1':'px-2'} ${record5 ? 'w-[180px]' : 'w-auto'} ${lastColIndex === 5 ? 'text-center' : 'text-right'}`}>{item.item6}</td> : null}
                        {item.item7 ? <td className={`font-IRANYekanMedium text-[12px] ${center3? 'px-1':'px-2'} ${record6 ? 'w-[180px]' : 'w-auto'}${lastColIndex === 6 ? 'text-center' : 'text-right'}`}>{item.item7}</td> : null}
                        {item.item8 ? <td className={`font-IRANYekanMedium text-[12px] ${center3? 'px-1':'px-2'} ${lastColIndex === 7 ? 'text-center' : 'text-right'}`}>{item.item8}</td> : null}
                        {item.item9 ? <td className={`font-IRANYekanMedium text-[12px] ${center3? 'px-1':'px-2'} ${lastColIndex === 8 ? 'text-center' : 'text-right'}`}>{item.item9}</td> : null}
                        {item.item10 ? <td className={`font-IRANYekanMedium text-[12px]  pl-4 ${lastColIndex === 9 ? 'text-center' : 'text-right'} ${center3 ? 'px-3' : 'px-2'}`}>{item.item10}</td> : null}
                    </tr>
                ))}
            </table>
            :
             <table className={`w-full`}>
                <tr className="bg-tableGray h-[66px] ">
                    {titleRow[0]? <td className={`font-IRANYekanBold  text-[12px] text-right ${lastColIndex === 0 ? 'text-center' : 'text-right'} ${center3? 'px-3':cen4? 'px-5':cen6? 'pl-5': 'px-2'} whitespace-nowrap w-[40px] pr-4 text-right`}>{titleRow[0]}</td> : null}
                    {titleRow[1]? <td className={`font-IRANYekanBold text-[12px] ${record1 ? 'w-[180px]' : 'w-[20px]'} ${lastColIndex === 1 ? 'text-center' : 'text-right'} ${center3? 'px-1':cen4? 'px-5':cen5? 'w-28 pr-14 pl-28': 'px-2'}`}>{titleRow[1]}</td> : null}
                    {titleRow[2]? <td className={`font-IRANYekanBold text-[12px] ${record2 ? 'w-[180px]' : 'w-[20px]'}  ${center2 ? 'text-center' : (lastColIndex === 2 ? 'text-center' : 'text-right')} ${center3 ? 'px-1' : cen4? 'px-5': 'px-2'}`}>{titleRow[2]}</td> : null}
                    {titleRow[3]? <td className={`font-IRANYekanBold text-[12px] ${record3 ? 'w-[180px]' : 'w-[20px]'} ${lastColIndex === 3 ? 'text-center' : 'text-right'} ${center3? 'px-1':cen4? 'px-5': 'px-2'}`}>{titleRow[3]}</td> : null}
                    {titleRow[4]? <td className={`font-IRANYekanBold text-[12px] ${record4 ? 'w-[180px]' : 'w-[80px]'} ${lastColIndex === 4 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[4]}</td> : null}
                    {titleRow[5]? <td className={`font-IRANYekanBold text-[12px] ${record5 ? 'w-[180px]' : 'w-[80px]'} ${lastColIndex === 5 ? 'text-center' : 'text-right'} ${center1 ? 'text-center' : (lastColIndex === 5 ? 'text-center' : 'text-right')} ${center3 ? 'px-1' : 'px-2'}`}>{titleRow[5]}</td> : null}
                    {titleRow[6]? <td className={`font-IRANYekanBold text-[12px] ${record6 ? 'w-[180px]' : 'w-[80px]'} ${lastColIndex === 6 ? 'text-center' : 'text-right'} ${center1 ? 'text-center' : (lastColIndex === 6 ? 'text-center' : 'text-right')} ${center3 ? 'px-1' : 'px-2'}`}>{titleRow[6]}</td> : null}
                    {titleRow[7]? <td className={`font-IRANYekanBold text-[12px] ${lastColIndex === 7 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[7]}</td> : null}
                    {titleRow[8]? <td className={`font-IRANYekanBold text-[12px] ${lastColIndex === 8 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{titleRow[8]}</td> : null}
                    {titleRow[9]? <td className={`font-IRANYekanBold text-[12px] ${lastColIndex === 9 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'} pl-4 `}>{titleRow[9]}</td> : null}
                </tr>
                
                {list.map((item, index) => (
                    <tr key={index} className="h-[58px] border-t-[1px] border-dashed border-borderGray">
                        {item.item1 ? <td className={`font-IRANYekanMedium text-[12px] text-right ${lastColIndex === 0 ? 'text-center' : 'text-right'} ${center3? 'px-3':cen4? 'px-5':cen6? 'pl-5': 'px-2'} whitespace-nowrap w-[40px] pr-4 text-right`}>{index+1}</td> : null}
                        {item.item2 ? <td className={`font-IRANYekanMedium text-[12px] ${record1 ? 'w-[180px]' : 'w-[20px]'} ${lastColIndex === 1 ? 'text-center' : 'text-right'} ${center3? 'px-1':cen4? 'px-5':cen5? 'w-28 pr-14 pl-28': 'px-2'}`}>{item.item2}</td> : null}
                        {item.item3 ? <td className={`font-IRANYekanMedium text-[12px] ${record2 ? 'w-[180px]' : 'w-[20px]'}  ${lastColIndex === 2 ? 'text-center' : 'text-right'} ${center3? 'px-1':cen4? 'px-5': 'px-2'}`}>{item.item3}</td> : null}
                        {item.item4 ? <td className={`font-IRANYekanMedium text-[12px] ${record3 ? 'w-[180px]' : 'w-[20px]'} ${lastColIndex === 3 ? 'text-center' : 'text-right'} ${center3? 'px-1':cen4? 'px-5': 'px-2'}`}>{item.item4}</td> : null}
                        {item.item5 ? <td className={`font-IRANYekanMedium text-[12px] ${record4 ? 'w-[180px]' : 'w-[20px]'} ${lastColIndex === 4 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{item.item5}</td> : null}
                        {item.item6 ? <td className={`font-IRANYekanMedium text-[12px] ${record5 ? 'w-[180px]' : 'w-[20px]'} ${lastColIndex === 5 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{item.item6}</td> : null}
                        {item.item7 ? <td className={`font-IRANYekanMedium text-[12px] ${record6 ? 'w-[180px]' : 'w-[20px]'} ${lastColIndex === 6 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{item.item7}</td> : null}
                        {item.item8 ? <td className={`font-IRANYekanMedium text-[12px] ${lastColIndex === 7 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{item.item8}</td> : null}
                        {item.item9 ? <td className={`font-IRANYekanMedium text-[12px] ${lastColIndex === 8 ? 'text-center' : 'text-right'} ${center3? 'px-1':'px-2'}`}>{item.item9}</td> : null}
                        {item.item10 ? <td className={`font-IRANYekanMedium text-[12px] ${lastColIndex === 9 ? 'text-center' : 'text-right'} ${center3? 'px-3':'px-2'} pl-4`}>{item.item10}</td> : null}
                    </tr>
                ))}
            </table>
            }
        </div>
        </div>
    )
}

export default MainTable;