import { MainInput } from "..";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";



const ExpertAgentForm = ({}) => {

    return (
        <div className="w-full grid grid-cols-3 gap-4">
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
                <MainInput label={'شماره شناسنامه '} value={'8888'}/>
            </div>
            <div>
                <MainInput label={'جنسیت'} value={'مرد'}/>
            </div>
            <div>
                <MainInput label={'شماره تلفن ثابت '} value={'02144665522'}/>
            </div>
            <div>
                <MainInput label={'شماره تلفن همراه'} value={'09123333333'}/>
            </div>
            <div className="col-span-3">
                <MainInput label={'آدرس'} value={'تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'}/>
            </div>
            <div>
                <p className="font-IRANYekanBold text-[16px] text-mainBlue mb-2">مدارک </p>
                <div className="h-[48px] w-fit rounded-full bg-backBlue flex items-center pr-[20px] pl-[17px]">
                    <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px]">گواهی انحصار وراثت</p>
                    <ExportAgentFileIIcon/>
                </div>
            </div>
        </div>
    )
}

export default ExpertAgentForm;