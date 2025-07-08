import React from "react";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import {useLocation} from "react-router-dom";
import {MainModal, MainButton, AcceptedRecordModal, MainInput, UploadFile} from "..";
import {useState} from "react";
import ViewFileIcon from '../../assets/icon/general/ViewFileIcon';

const RecordProtestDetail = () => {
    const [showAcceptedContent,
        setShowAcceptedContent] = useState(false);
    const [showDeclineContent,
        setShowDeclineContent] = useState(false);
    const handleAccept = () => {
        if (showDeclineContent === true) {
            setShowAcceptedContent(false)
            setShowModal(false)
        } else {
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
    const {data} = location.state || {};
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
    return ( <> <div className="grid grid-cols-2 gap-4 border-b-[1px] border-borderGray pb-4">
        <div className="col-span-1 md:col-span-2">
            <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                نام و نام خانوادگی :
                <span className="font-IRANYekanBold mr-1">
                    {data
                        ?.fullName}
                </span>
            </span>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-end md:justify-start">
            <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                تاریخ ثبت اعتراض :
                <span className="font-IRANYekanBold mr-1">
                    {data
                        ?.date}
                </span>
            </span>
        </div>
        <div className="col-span-1 md:col-span-2">
            <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                کدملی :
                <span className="font-IRANYekanBold mr-1">
                    {data
                        ?.nationalCode}
                </span>
            </span>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-end md:justify-start">
            <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                نوع اعتراض :
                <span className="font-IRANYekanBold mr-1">
                    {data
                        ?.protestTypeLabel}
                </span>
            </span>
        </div>

    </div> < div className = "pt-[17px]" > <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
        جزئیات اعتراض ثبت شده

    </span> <div className="w-full overflow-x-auto mt-6">
  <div className="min-w-[900px] w-[80%] mx-auto border-[1px] border-borderGray rounded-[10px] overflow-hidden">
    <table className="min-w-full table-auto text-right">
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
    </table>
  </div>
</div>

       </div > {
        showModal && (
            <MainModal
                big={`${showDeclineContent
                ? "false"
                : "true"}`}
                title={"مشاهده توضیحات کاربر"}
                setShowModal={ModalFunction}
                text={<> <p className="text-right">با توجه به مدارک بارگزاری شده در پیوست، بازه زمانی
                بیمه پردازی بنده اشتباه ثبت شده است لطفا مجدد بررسی بفرمایید.</p> < div className = "flex flex-wrap mt-4" > <div
                className='w-fit h-[28px] bg-tableGray rounded-[50px] flex items-center pl-1 pr-[11px] hover:cursor-pointer'>
                <p className='font-IRANYekanMedium text-[15px] text-white'>تاریخ شروع بیمه‌پردازی.pdf</p>
                <div
                    className='w-[20px] h-[20px] rounded-full bg-mainBlue flex justify-center items-center mr-[22px]'><ViewFileIcon/></div>
            </div> </div> {showAcceptedContent && ( <div className="mt-6"> <AcceptedRecordModal /> </div>)
        }
        {
            showDeclineContent && (
                <div className="mt-6">
                    <div className="w-full">
                        <MainInput
                            longText={true}
                            label={'علت رد درخواست خود را بنویسید و در صورت لزوم فایل خود را بارگزاری کنید.'}
                            holder={'توضیح خود را اینجا بنویسید تا برای کاربر ارسال شود.'}/>
                        <div className='w-full flex items-center mt-4'>
                            <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-3'>انتخاب فایل</p>
                            <div><UploadFile small={false}/></div>
                        </div>
                    </div>
                </div>
            )
        } </>}
                modalButton={<div className = "w-full flex justify-center" > <div className="w-[140px]">
                <MainButton
                    onClickFunction={handleAccept}
                    label={`${showAcceptedContent || showDeclineContent
                    ? "ثبت"
                    : "تایید"}`}/>
            </div> < div className = {
                `w-[140px] mr-2 ${showAcceptedContent || showDeclineContent
                    ? 'hidden'
                    : 'block'}`
            } > <MainButton onClickFunction={handleDecline} red={true} label={"عدم تایید"}/> </div> </div >}/>
        )
    } </>
    )
}

export default RecordProtestDetail;