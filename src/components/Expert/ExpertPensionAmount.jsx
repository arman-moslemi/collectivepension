import { MainButton,MainInput, MainTable, MainExplanation, WorkExperienceWithWebService, TotalWorkRecords } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";


const titleRow = ["ردیف","نام صندوق","مبلغ اعلام شده","تعداد روز"];

const titleRow2 = ["ردیف","نام نماینده","نسبت","شماره حساب","نام بانک","شعبه"];

const list = [
  {
    item1: "1",
    item2: "صندوق بازنشستگی کشوری",
    item3: "1000000 تومان",
    item4: "3560 روز",
  },
  {
    item1: "2",
    item2: "صندوق تامین اجتماعی",
    item3: "25000 تومان",
    item4: "120 روز",
  },
  {
    item1: "3",
    item2: "صندوق بازنشستگان فولاد",
    item3: "در حال بررسی",
    item4: "127 روز",
  }, 
  ];

  const list2 = [
  {
    item1: "1",
    item2: "علی امیری زاده",
    item3: "فرزند",
    item4: "569878959654654654",
    item5: "آینده",
    item6: "28 کوروش",
  },
  {
    item1: "1",
    item2: "علی امیری زاده",
    item3: "فرزند",
    item4: "569878959654654654",
    item5: "آینده",
    item6: "28 کوروش",
  },
  {
    item1: "1",
    item2: "علی امیری زاده",
    item3: "فرزند",
    item4: "569878959654654654",
    item5: "آینده",
    item6: "28 کوروش",
  },
  ];




const ExpertPensionAmountInput = ({another}) => {

    let navigate = useNavigate();

    return (
        <div className="w-full py-4 px-6 lg:px-0">
            <div className="w-full flex justify-center items-center mb-12 mt-8 lg:flex-col">
                <p className="font-IRANYekanExtra text-[18px] lg:text-[16px] text-mainBlue ml-3">مجموع مستمری محاسبه شده :</p>
                <p className="font-IRANYekanExtra text-[20px] lg:text-[18px] text-mainBlue">درحال بررسی</p>
            </div>
            {another? null:
            <div className="w-full flex flex-col items-center justify-center  mb-[22px]">
                <p className="text-[18px] lg:text-[14px] text-mainBlue font-IRANYekanExtra mb-5">اطلاعات حساب بانکی</p>
                <div className="flex justify-center flex-wrap items-center">
                    <div className="ml-[120px] lg:ml-1">
                        <p className="text-[16px] lg:text-[14px] font-IRANYekanExtra">نام بانک</p>
                        <p className="text-[15px] lg:text-[13px] font-IRANYekanMedium">آینده</p>
                    </div>
                    <div className="ml-[120px] lg:ml-1">
                        <p className="text-[16px] lg:text-[14px] font-IRANYekanExtra">شماره حساب</p>
                        <p className="text-[15px] lg:text-[13px] font-IRANYekanMedium">569878959654654654</p>
                    </div>
                    <div>
                        <p className="text-[16px] lg:text-[14px] font-IRANYekanExtra">شعبه</p>
                        <p className="text-[15px] lg:text-[13px] font-IRANYekanMedium">28 کوروش</p>
                    </div>
                </div>
            </div>
            }
            <div className="w-full flex justify-center">
                <div className="w-[75%]"><MainTable cen6={true} list={list} titleRow={titleRow}/></div>
            </div>
            {another?
            <div className="w-full flex flex-col items-center justify-center mt-10">
                <p className="text-[18px] text-mainBlue font-IRANYekanExtra mb-7">بازماندگان</p>
                <div className="w-[90%]"><MainTable cen6={true} list={list2} titleRow={titleRow2}/></div>
            </div>
            :null}
            <div className="mt-[30px] mb-[107px] w-full flex justify-end">
                <div className="w-[190px]"><MainButton  label={'صدور حکم بازنشستگی'}/></div>
            </div>
           

        </div>
    )
}

export default ExpertPensionAmountInput;