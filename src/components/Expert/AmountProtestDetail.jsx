import {useLocation} from "react-router-dom";
import ViewFileIcon from "../../assets/icon/general/ViewFileIcon";
import {MainButton,MainInput,UploadFile} from "..";
import { useState } from "react";
const AmountProtestDetail = () => {
    const location = useLocation();
    const {data} = location.state || {};

    const [showAccepted, setShowAccepted] = useState(false);
    const [showDeclined,setShowDeclined] = useState(false);
    return ( <>
     <div className="grid grid-cols-2 gap-4 border-b-[1px] border-borderGray pb-4">
        <div className="col-span-1">
            <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                نام و نام خانوادگی :
                <span className="font-IRANYekanBold mr-1">
                    {data
                        ?.fullName}
                </span>
            </span>
        </div>
        <div className="col-span-1  flex justify-end">
            <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                تاریخ ثبت اعتراض :
                <span className="font-IRANYekanBold mr-1">
                    {data
                        ?.date}
                </span>
            </span>
        </div>
        <div className="col-span-1">
            <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                کدملی :
                <span className="font-IRANYekanBold mr-1">
                    {data
                        ?.nationalCode}
                </span>
            </span>
        </div>
        <div className="col-span-1  flex justify-end">
            <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                نوع اعتراض :
                <span className="font-IRANYekanBold mr-1">
                    {data
                        ?.protestTypeLabel}
                </span>
            </span>
        </div>

    </div> < div className = "my-4" > <span className="font-IRANYekanExtra text-[15px] text-mainBlue ">

        جزئیات اعتراض ثبت شده
    </span> 
    <br/>
   <div className="my-4">
   <span className="text-mainBlue font-IRANYekanBold text-[14px]">
        مبلغ اعلام شده توسط سامانه : 2300000 تومان
    </span>
    <br/>
    <span className="text-redError font-IRANYekanBold text-[14px]">
        مبلغ اعلام شده توسط کاربر : 2500000 تومان
    </span>
   </div>
    <p className = "mt-5 text-right font-IRANYekanBold text-mainBlue text-[14px]" > با توجه به مدارک بارگزاری شده در پیوست، بازه زمانی بیمه پردازی بنده اشتباه ثبت شده است لطفا مجدد بررسی بفرمایید. </p>
   
    
     < div className = "flex flex-wrap mt-4" > <div
                 className='w-fit h-[28px] bg-tableGray rounded-[50px] flex items-center pl-1 pr-[11px] hover:cursor-pointer'>
                 <p className='font-IRANYekanMedium text-[15px] text-white'>تاریخ شروع بیمه‌پردازی.pdf</p > <div
        className='w-[20px] h-[20px] rounded-full bg-mainBlue flex justify-center items-center mr-[22px]'><ViewFileIcon/></div> </div> </div > </div>
        
        <div className={`flex mt-5 w-full justify-end ${showAccepted || showDeclined ? 'hidden' : 'block' }`}>
            <div className="w-[140px] ml-2">
                <MainButton label={'تایید'} onClickFunction={()=>setShowAccepted(true)}/>
            </div>
            <div className="w-[140px]">
                <MainButton label={'عدم تایید'} red={true} onClickFunction={() =>setShowDeclined(true)}/>
            </div>
        </div>
        {showAccepted ? 
    <>
    <div className="w-full border-t border-t-borderGray p-4">
    <p className = "mt-5 text-right font-IRANYekanBold text-mainBlue text-[14px]" > مبلغ مستمری مجددا محاسبه شده را اینجا ثبت کنید. </p>
            <div className="w-[250px] mt-2">
            <MainInput holder={'12000 تومان'}/>
            </div>
            <div className="w-[140px] mr-auto mt-5">
                <MainButton label={'ثبت و ارسال'}/>
            </div>
    </div>
    </>
    :
    null    
    }            
    {showDeclined ? 
<>
<div className="mt-6 border-t border-t-borderGray p-4">
                    <div className="w-full">
                        <MainInput
                            longText={true}
                            necessary={true}
                            label={'علت رد درخواست خود را بنویسید و در صورت لزوم فایل خود را بارگزاری کنید.'}
                            holder={'توضیح خود را اینجا بنویسید تا برای کاربر ارسال شود.'}/>
                        <div className='w-full flex items-center mt-4'>
                            <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-3'>انتخاب فایل</p>
                            <div><UploadFile small={false}/></div>
                        </div>
                    </div>
                </div>
                <div className="w-[140px] mr-auto mt-5">
                <MainButton label={'ثبت و ارسال'}/>
            </div>
</>
:
null    
}    

         </>
    )
}

export default AmountProtestDetail;