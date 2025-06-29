import { MainButton,MainInput, MainTable, MainExplanation, MainRadioInput } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";


const ExpertPensionRequestForm = () => {

    let navigate = useNavigate();

    return (
        <div className="w-full">
            <div className="w-full px-[73px] mb-6">
                <p className="text-[18px] font-IRANYekanExtra">اطلاعات فرد در صندوق بازنشستگی مقصد</p>
            </div>
            <div className="w-full px-[120px] mb-8 grid grid-cols-3 gap-4">
                <div>
                    <MainInput label={'نام'} value={'علی'}/>
                </div>
                <div>
                    <MainInput label={'نام خانوادگی '} value={'علیزاده تهرانی'}/>
                </div>
                <div>
                    <MainInput label={'نام پدر'} value={'محمد هادی'}/>
                </div>
                <div>
                    <MainInput label={'تاریخ تولد'} value={'1346/04/16'}/>
                </div>
                <div>
                    <MainInput label={'کدملی'} value={'0020456787'}/>
                </div>
                <div>
                    <MainInput label={'شماره شناسنامه '} value={'مثلا 8888'}/>
                </div>
                <div>
                    <MainInput label={'جنسیت'} value={'مرد'}/>
                </div>
                <div>
                    <MainInput label={'شماره تلفن ثابت '} value={'مثلا 02144665522'}/>
                </div>
                <div>
                    <MainInput label={'شماره تلفن همراه'} value={'مثلا 09123333333'}/>
                </div>
                <div className="col-span-3">
                    <MainInput label={'آدرس'} value={'مثلا تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'}/>
                </div>
                <div className="col-span-2">
                    <MainRadioInput title={'نوع درخواست مستمری جمع'} text1={'بازنشستگی'} text2={'از کار افتادگی کلی'} ml={'100'} mr={'30'}/>
                </div>
                <div className="col-span-1">
                    <MainInput label={'کد پرسنلی'} value={'مثلا 09123333333'}/>
                </div>

            </div>
            <div className="w-full px-[120px] mb-8 grid grid-cols-3 gap-4">
                <div>
                    <MainInput label={'نام'} value={'علی'}/>
                </div>
                <div>
                    <MainInput label={'نام خانوادگی '} value={'علیزاده تهرانی'}/>
                </div>
                <div>
                    <MainInput label={'نام پدر'} value={'محمد هادی'}/>
                </div>
                <div>
                    <MainInput label={'تاریخ تولد'} value={'1346/04/16'}/>
                </div>
                <div>
                    <MainInput label={'کدملی'} value={'0020456787'}/>
                </div>
                <div>
                    <MainInput label={'شماره شناسنامه '} value={'مثلا 8888'}/>
                </div>
                <div>
                    <MainInput label={'جنسیت'} value={'مرد'}/>
                </div>
                <div>
                    <MainInput label={'شماره تلفن ثابت '} value={'مثلا 02144665522'}/>
                </div>
                <div>
                    <MainInput label={'شماره تلفن همراه'} value={'مثلا 09123333333'}/>
                </div>
                <div className="col-span-3">
                    <MainInput label={'آدرس'} value={'مثلا تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'}/>
                </div>
                <div className="col-span-2">
                    <MainRadioInput title={'نوع درخواست مستمری جمع'} text1={'بازنشستگی'} text2={'از کار افتادگی کلی'} ml={'100'} mr={'30'}/>
                </div>
                <div className="col-span-1">
                    <MainInput label={'کد پرسنلی'} value={'مثلا 09123333333'}/>
                </div>

            </div>


        </div>
    )
}

export default ExpertPensionRequestForm;