import React from "react";
import { useLocation } from "react-router-dom";
import { MainModal, MainButton, AcceptedRecordModal, MainInput, UploadFile, roles } from "..";
import { useState, useEffect } from "react";
import ViewFileIcon from '../../assets/icon/general/ViewFileIcon';
import { ViewProtestTable } from "../../components";
import { axiosReq } from "../../commons/axiosReq";
import DateIcon from "../../assets/icon/general/DateIcon";
import { apiAsset } from "../../commons/inFormTypes";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { useNavigate } from "react-router-dom";

const RecordProtestDetail = ({ role,insuName }) => {
    const isAdmin = role === roles.mainAdmin;
    const isExpert = role === roles.expert;
    const titleRow = ["نوع", "سال", "ماه", "بازه بیمه پردازی", "تعداد روز", "وضعیت", "عملیات"];
    const navigate = useNavigate();

    const [showAcceptedContent,
        setShowAcceptedContent] = useState(false);
    const [showDeclineContent,
        setShowDeclineContent] = useState(false);
    const [timeFrames,
        setTimeFrames] = useState(false);
    const [records,
        setRecords] = useState();
    const [reason, setReason] = useState(null);
    const [file, setFile] = useState();
    const [userInsuId, setUserInsuId] = useState();
    const [files, setFiles] = useState([]);
    const handleAccept = () => {

        if (showDeclineContent === true) {
            disApprove()

            setShowAcceptedContent(false)
            setShowModal(false)
        } else if (showAcceptedContent) {
            updateTimeFrame()


        }
        else {
            setShowAcceptedContent(true)
        }
    };
    const handleDecline = () => {
        setShowDeclineContent(true);
    }
    const [showModal,
        setShowModal] = useState(false);

    const ModalFunction = () => {
        setShowModal(false);
        setShowAcceptedContent(false);
    }
    const location = useLocation();
    const { id } = location.state || {};
    const tableData = [
        {

            expertStatus: 'رد شده',
            rows: [//عدد اعلام شده توسط کاربر برای تعداد روز و بازه باید قرمز رنگ باشه
                {
                    type: <> <span className="text-redError">
                        خود اظهاری کاربر
                    </span> </>,
                    year: '1402',
                    month: 'خرداد',
                    range: <>
                        <span className="text-redError">
                            1402/02 / 01 - 1402 / 02 / 31 </span>
                    </>,
                    days: <> <span className="text-redError">
                        30
                    </span> </>,
                },
                {
                    type: 'سابقه اعلام شده',
                    year: '1402',
                    month: 'خرداد',
                    range: '1402/03 / 01 - 1402 / 03 / 31 ',
                    days: '28'
                }
            ]
        }, {

            expertStatus: 'در انتظار بررسی',
            rows: [//عدد اعلام شده توسط کاربر برای تعداد روز و بازه باید قرمز رنگ باشه
                {
                    type: <> <span className="text-redError">
                        خود اظهاری کاربر
                    </span> </>,
                    year: '1402',
                    month: 'اردیبهشت',
                    range: <>
                        <span className="text-redError">
                            1402/02 / 01 - 1402 / 02 / 31 </span>
                    </>,
                    days: <> <span className="text-redError">
                        30
                    </span> </>,
                },
                {
                    type: 'سابقه اعلام شده',
                    year: '1402',
                    month: 'اردیبهشت',
                    range: '1402/03 / 01 - 1402 / 03 / 31 ',
                    days: '28'
                }
            ]
        }
    ];
    const getStatusBgClass = (status) => {
        switch (status) {
            case 'در انتظار بررسی':
                return 'bg-[#FED070] text-white';
            case 'تأیید شده':
                return 'bg-[#11720E] text-white';
            case 'رد شده':
                return 'bg-[#D9004C] text-white';
            default:
                return '';
        }
    };
    const [data, setData] = useState([]);
    const [maindata, setMainData] = useState();

    const getProtests = async () => {
        try {

            const response = await axiosReq("Experts/GetProtestByIdEXP?protestId=" + id, "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                setMainData(response.data)

                setData(response.data?.records);
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        getProtests();
    }, []);
    const updateTimeFrame = async () => {
        try {
            console.log(records)
            console.log(timeFrames)
            var times = [];
            // timeFrames?.map((item) => {
            //     times.push(item.timeFrameId)
            // })
            // var record = [];
            // records?.map((item) => {
            //     record.push({
            //         StartDate: item.startDate,
            //         EndDate: item.endDate
            //     })
            // })
            const response = await axiosReq("Experts/UpdateTimeFrame", "post", {
                // TimeFrameIds: times,
                // UpdateTimeFrames: record,
                // TimeFrameProtestId:'',
                UserInsuranceMonthId: userInsuId,
                Duration: records,
                ProtestId: id
            });
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                alert("با موفقیت انجام شد")
                setShowModal(false)
                setShowAcceptedContent(false)
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        handleFileChange()
    }, [file]);
    const handleFileChange = () => {

        if (file?.length > 0) {
            console.log("change")
            console.log(111)
            setFiles([...files, file])
        }
    }
    const disApprove = async (item) => {
        try {
            const response = await axiosReq("Experts/DenyProtest?protestId=" + id, "put", {
                Reason: reason,
                UserInsuranceFiles: files
            });
            if (response.data) {
                alert("با موفقیت انجام شد");
            }
        } catch (err) {
            console.error("Error fetching form data:", err);
        } finally {
        }
    };

    const download = async (name) => {
        try {
            const response = await axiosReq(`Users/download/${name}`, "get", {
                responseType: "blob", // important!
            });

            if (response.status === 200) {
                // Create a blob from the response
                const blob = new Blob([response.data], { type: response.headers['content-type'] });
                const url = window.URL.createObjectURL(blob);

                // Create a temporary link element
                const a = document.createElement('a');
                a.href = url;
                a.download = name; // you can also extract filename from headers if needed
                document.body.appendChild(a);
                a.click();

                // Cleanup
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };
    return (<>
        <div className="grid grid-cols-2 gap-4 border-b-[1px] border-borderGray pb-4">
            <div className="col-span-1 md:col-span-2">
                <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                    نام و نام خانوادگی :
                    <span className="font-IRANYekanBold mr-1">
                        {maindata
                            ?.fullName}
                    </span>
                </span>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end md:justify-start">
                <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                    تاریخ ثبت اعتراض :
                    <span className="font-IRANYekanBold mr-1">
                        {maindata
                            ?.protestDate}
                    </span>
                </span>
            </div>
            <div className="col-span-1 md:col-span-2">
                <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                    کدملی :
                    <span className="font-IRANYekanBold mr-1">
                        {maindata
                            ?.nationalCode}
                    </span>
                </span>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end md:justify-start">
                <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                    نوع اعتراض :
                    <span className="font-IRANYekanBold mr-1">
                        {maindata
                            ?.protestLevel}
                    </span>
                </span>
            </div>
            {
                isExpert ?

                    null
                    :
                    <div className="col-span-1 md:col-span-2 flex justify-start md:justify-start">
                        <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                            نام صندوق :
                            <span className="font-IRANYekanBold mr-1">
                                {insuName}
                            </span>
                        </span>
                    </div>
            }
        </div> < div className="pt-[17px]" > <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
            جزئیات اعتراض ثبت شده

        </span>
            <div className='w-full my-7 '>
                <ViewProtestTable titleRow={titleRow} data={data} expert={true} setShowModal={setShowModal} setTimeFrames={setTimeFrames} setUserInsuId={setUserInsuId} />

                {/* <table className="min-w-full table-auto text-right">
      <thead>
        <tr className="bg-tableGray h-[60px]">
          <th className="font-IRANYekanBold text-[15px] pr-4">نوع</th>
          <th className="font-IRANYekanBold text-[15px]">سال</th>
          <th className="font-IRANYekanBold text-[15px]">ماه</th>
          <th className="font-IRANYekanBold text-[15px]">بازه بیمه پردازی</th>
          <th className="font-IRANYekanBold text-[15px]">تعداد روز</th>
          <th className="font-IRANYekanBold text-[15px] text-center">وضعیت کارشناس</th>
          <th colSpan={2} className="font-IRANYekanBold text-[15px] text-center pl-4">عملیات</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {group.rows.map((row, rowIndex) => (
              <tr key={`${groupIndex}-${rowIndex}`} className="h-[58px] text-[14px] font-IRANYekanMedium">
                <td className="px-2 py-1 pr-4">{row.type}</td>
                <td className="px-2 py-1">{row.year}</td>
                <td className="px-2 py-1">{row.month}</td>
                <td className="px-2 py-1">{row.range}</td>
                <td className="px-2 py-1">{row.days}</td>

                {rowIndex === 0 && (
                  <>
                    <td rowSpan={group.rows.length} className="px-2 py-1 text-center align-middle rounded-md font-IRANYekanMedium">
                      <div className={`${getStatusBgClass(group.expertStatus)} w-fit px-4 py-1 rounded-full mx-auto`}>
                        {group.expertStatus}
                      </div>
                    </td>
                    <td rowSpan={group.rows.length} colSpan={2} className="px-2 py-1 text-center align-middle pl-4">
                      <button
                        onClick={() => setShowModal(true)}
                        className="w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center"
                      >
                        <DetailTableIcon />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}

            {groupIndex !== tableData.length - 1 && (
              <tr>
                <td colSpan={9}>
                  <div className="border-b-[1px] border-borderGray w-full my-1"></div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table> */}
                {/* </div> */}
            </div>

        </div > {
            showModal && (
                <MainModal
                    big={`${showDeclineContent
                        ? "false"
                        : "true"}`}
                    title={"مشاهده توضیحات کاربر"}
                    setShowModal={ModalFunction}
                    text={<> <p className="text-right">{maindata.description}</p>
                        < div className="flex flex-wrap mt-4" >
                            {
                                maindata?.fileName?.map((item) => {
                                    return (

                                        <div onClick={() => download(item)}
                                            className='w-fit h-[28px] bg-tableGray rounded-[50px] flex items-center pl-1 pr-[11px] hover:cursor-pointer'>
                                            <p className='font-IRANYekanMedium text-[15px] text-white'>{item}</p>
                                            <div
                                                className='w-[20px] h-[20px] rounded-full bg-mainBlue flex justify-center items-center mr-[22px]'><ViewFileIcon /></div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        {showAcceptedContent && (<div className="mt-6"> <AcceptedRecordModal records={records} setRecords={setRecords} /> </div>)
                        }
                        {
                            showDeclineContent && (
                                <div className="mt-6">
                                    <div className="w-full">
                                        <MainInput
                                            longText={true}
                                            onChange={(e) => setReason(e.target.value)}
                                            label={'علت رد درخواست خود را بنویسید و در صورت لزوم فایل خود را بارگزاری کنید.'}
                                            holder={'توضیح خود را اینجا بنویسید تا برای کاربر ارسال شود.'} />
                                        <div className='w-full flex items-center my-4'>
                                            <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-3'>انتخاب فایل</p>
                                            <div><UploadFile small={false} setFile={setFile} /></div>
                                        </div>
                                        {
                                            files.map((item) => {
                                                return (

                                                    <div onClick={() => download(item)} className="h-[36px] w-fit rounded-full bg-backBlue flex items-center pr-[20px] pl-[17px]">
                                                        <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px] cursor-pointer">{item}</p>
                                                        <ExportAgentFileIIcon />
                                                    </div>
                                                )
                                            })
                                        }
                                        <div>
                                            <p className="text-right">با توجه به مدارک بارگزاری شده در پیوست، بازه زمانی بیمه پردازی بنده اشتباه ثبت شده است لطفا مجدد بررسی بفرمایید.</p>

                                        </div>

                                    </div>
                                </div>
                            )
                        } </>}
                    modalButton={
                        isAdmin ?

                            null
                            :
                            <div className="w-full flex justify-center" >
                                <div className="w-[140px]">
                                    <MainButton
                                        onClickFunction={handleAccept}
                                        label={`${showAcceptedContent || showDeclineContent
                                            ? "ثبت"
                                            : "تایید"}`} />
                                </div> < div className={
                                    `w-[140px] mr-2 ${showAcceptedContent || showDeclineContent
                                        ? 'hidden'
                                        : 'block'}`
                                } > <MainButton onClickFunction={handleDecline} red={true} label={"عدم تایید"} /> </div> </div >

                    } />
            )
        } </>
    )
}

export default RecordProtestDetail;