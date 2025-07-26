
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";

const ViewProtestTable = ({ list1, list2, titleRow, data,expert,setShowModal }) => {
    console.log(list1);
    return (
        <div className="w-full ">
            <div className="w-full border-[1px] border-borderGray rounded-[10px] overflow-hidden">
                <table className={`w-full`}>
                    <thead className="bg-tableGray h-[66px] ">
                        {titleRow[0] ? <td className="font-IRANYekanBold px-10 text-[15px] text-right ">{titleRow[0]}</td> : null}
                        {titleRow[1] ? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[1]}</td> : null}
                        {titleRow[2] ? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[2]}</td> : null}
                        {titleRow[3] ? <td className="font-IRANYekanBold px-10 text-[15px] ">
                            <div className="flex justify-evenly">
                                {titleRow[3]}

                            </div>
                        </td> : null}
                        {titleRow[4] ? <td className="font-IRANYekanBold px-10 text-[15px]">
                            <div className="flex justify-evenly">

                                {titleRow[4]}
                            </div>
                        </td> : null}
                        {titleRow[5] ? <td className={`font-IRANYekanBold text-[15px] text-center pl-20`}>{titleRow[5]}</td> : null}
                        {titleRow[6] ? <td className={`font-IRANYekanBold px-10 text-[15px] `}>{titleRow[6]}</td> : null}
                        {titleRow[7] ? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[7]}</td> : null}
                        {titleRow[8] ? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[8]}</td> : null}
                        {titleRow[9] ? <td className="font-IRANYekanBold px-10 text-[15px]">{titleRow[9]}</td> : null}
                    </thead>

                    <tbody>
                        {
                            data?.map((item, index) => {
                                return (

                                    <tr className="h-[115px] border-t-[1px] border-dashed border-borderGray">
                                        <td className="font-IRANYekanMedium px-10 text-[15px] text-right"><p>خود اظهاری کاربر</p><p className="mt-6">استعلام سیستم</p></td>
                                        <td className="font-IRANYekanMedium px-10 text-[15px] "><p>{item?.protestedDates[0]?.year}</p><p className="mt-6">{item?.declaredDates[0]?.year}</p></td>
                                        <td className="font-IRANYekanMedium px-10 text-[15px] "><p>{item?.protestedDates[0]?.month}</p><p className="mt-6">{item?.declaredDates[0]?.month}</p></td>
                                        <td className="font-IRANYekanMedium px-10 text-[15px] ">
                                            <div >
                                                <div className="flex justify-evenly">

                                                    {item.protestedDates?.map((item1) => {
                                                        return (

                                                            <p className="text-redError ">{item1.timeFrame}</p>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex justify-evenly">
                                                    {item.declaredDates?.map((item2) => {
                                                        return (

                                                            <p className="mt-6">{item2.timeFrame}</p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-IRANYekanMedium px-10 text-[15px] ">
                                            <div className="flex justify-evenly">
                                                {item.protestedDates?.map((item1) => {
                                                    return (
                                                        <p className="text-redError">{item1.duration}</p>
                                                    )
                                                })}
                                            </div>
                                            <div className="flex justify-evenly">

                                                {item.declaredDates?.map((item2) => {
                                                    return (
                                                        <p className="mt-6">{item2.duration}</p>
                                                    )
                                                })}
                                            </div>
                                        </td>
                                        <td className="font-IRANYekanMedium text-[15px] pl-20 "><div className='w-[115px] h-[28px] bg-[#0F956D] rounded-[50px] flex justify-center items-center mx-auto'>
                                            <p className='text-[15px] text-white font-IRANYekanMedium'>{item.protestStatus}</p>
                                        </div>
                                        </td>
                                        {
                                            expert?
                                        <td  className="px-2 py-1 text-center align-middle pl-4">
                      <button
                        onClick={() => setShowModal(true)}
                        className="w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center"
                      >
                        <DetailTableIcon />
                      </button>
                    </td>:null
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ViewProtestTable;