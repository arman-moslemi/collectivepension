import { useState } from "react";
import { MainButton,MainInput, MainTable, MainExplanation } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import DownSide from "../../assets/icon/general/DownSide";
import { div } from "framer-motion/client";



const cityList = [
    {
      id: 1,
      name: 'دماوند',
      },
    {
      id: 2,
      name: 'فیروزکوه',
     },
    {
      id: 3,
      name: 'ورامین',
      },
    {
      id: 4,
      name: 'پاکدشت',
      },
]


const AddWorkPlace = () => {

    const [mainOpen, setMainOpen] = useState(false);

    let navigate = useNavigate();

    return (
        <div className="w-full rounded-[10px] shadow-firstBoxShadow ">
            <div className="w-full px-[28px] pt-[35px]">
            <div className="w-full grid grid-cols-3 gap-4">
                <div>
                    <MainInput necessary={true} holder={'شماره شناسایی بیمه را وارد کنید'} label={'شماره شناسایی بیمه'}/>
                </div>
                <div>
                    <MainInput necessary={true} listBox={true} listItems={cityList} label={'استان محل اشتغال'}/>
                </div>
                <div>
                    <MainInput necessary={true} listBox={true} listItems={cityList} label={'شهر'}/>
                </div>
                <div>
                    <MainInput necessary={true} holder={'شعبه را وارد کنید'} label={'شعبه'}/>
                </div>
                <div>
                    <MainInput necessary={true} holder={'محل خدمت / نام کارگاه را وارد کنید'} label={'محل خدمت / نام کارگاه '}/>
                </div>
                <div>
                    <MainInput necessary={true} holder={'شماره دستگاه / کارگاه  را وارد کنید'} label={'شماره دستگاه / کارگاه '}/>
                </div>

            </div>
            </div>
            <div className="w-full px-[28px] pt-[24px] pb-7 flex justify-end">
                <div className="w-[151px]"><MainButton label={'افزودن محل کار'}/></div>

            </div>
            
            
           

        </div>
    )
}

export default AddWorkPlace;