import { MainInput } from "..";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { apiAsset } from "../../commons/inFormTypes";



const ExpertAgentForm = ({ formData }) => {

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'نام'} value={formData?.name} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'نام خانوادگی '} value={formData?.family} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'نام پدر'} value={formData?.fatherName} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'تاریخ تولد'} value={formData?.birthDate} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'کدملی'} value={formData?.nationalCode} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'شماره شناسنامه '} value={formData?.idcardNumber} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'جنسیت'} value={formData?.isMan ? "مرد" : "زن"} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'شماره تلفن ثابت '} value={formData?.phoneNumber} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'شماره تلفن همراه'} value={formData?.mobileNumber} />
            </div>
            <div className="col-span-3">
                <MainInput label={'آدرس'} value={formData?.address} />
            </div>
            <div >
                <p className="font-IRANYekanBold text-[16px]  text-mainBlue mb-2">مدارک </p>
                <div className="flex">
                {
                    formData?.inheritanceDoc?.map((item) => {
                        return (

                            <div onClick={() => window.open(apiAsset + item, '_blank')}  className="h-[48px] w-fit lg:w-max rounded-full bg-backBlue
                            flex items-center pr-[20px] pl-[17px] mx-3 cursor-pointer">
                                <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px]">{item}</p>
                                <ExportAgentFileIIcon />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default ExpertAgentForm;