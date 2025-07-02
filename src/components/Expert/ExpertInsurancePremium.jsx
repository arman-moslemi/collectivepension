
import {MainButton, MainExplanation,MainInput,MainTable,MainModal} from "..";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import { useState } from "react";
const ExpertInsurancePremium = () =>{
    const [showModal,setShowModal] = useState(false);
    const [yearList, setYearList] = useState([
        { id: 1, name: '1352' },
        { id: 2, name: '1353' },
        { id: 3, name: '1354' },
        { id: 4, name: '1355' },
        { id: 5, name: '1356' },
        { id: 6, name: '1357' }
    ]);
    const [newYear, setNewYear] = useState('');
    const titleRow = [
        "ردیف",
        "سال",
        "نرخ حق بیمه"
    ];
    
    const list = [
        { item1: "1", item2: "1352", item3: "7%" },
        { item1: "2", item2: "1353", item3: "7%" },
        { item1: "3", item2: "1354", item3: "8.5%" },
        { item1: "4", item2: "1355", item3: "8.7%" },
        { item1: "5", item2: "1356", item3: "7.5%" }
    ];

    const addNewYearToList = () => {
        const trimmedYear = newYear.trim();

        // چک کنیم رشته فقط عدد باشه و 4 رقم باشه
        const isValidYear = /^\d{4}$/.test(trimmedYear);

        if (!isValidYear) {
            alert("لطفاً یک سال معتبر 4 رقمی وارد کنید");
            return false;
        }

        if (yearList.some(y => y.name === trimmedYear)) {
            alert("این سال قبلاً اضافه شده است");
            return false;
        }

        const updatedList = [...yearList, { id: yearList.length + 1, name: trimmedYear }]
            .sort((a, b) => parseInt(a.name) - parseInt(b.name));

        setYearList(updatedList);
        setNewYear('');
        setShowModal(false);
        return true;
    };

          
          
    return(
        <>
          <div
            className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
                <MainExplanation text={'کارشناس محترم، لطفاً برای هر سال، نرخ حق بیمه را به‌صورت دقیق ثبت نمایید. توجه داشته باشید با آغاز هر سال جدید، ثبت نرخ مربوط به آن سال الزامی است. همچنین در صورتی که سال مورد نظر شما در لیست وجود نداشت، می‌توانید با استفاده از دکمه "افزودن سال"، سال جدید را تعریف و سپس نرخ مربوطه را ثبت نمایید.'}/>
           <div className="w-[80%] mx-auto my-5">
           <div className="grid grid-cols-8 items-center gap-2">
            <div className="col-span-3">
            <MainInput
                        label={'جستجو'}
                        search={true}
                        holder={"جستجو بر اساس سال "}
                        leftIcon={< SearchIcon />}/>
            </div>
            <div className="col-span-3">
                <div className="flex">
                    <MainInput listBoxM1={true}
                        label={'انتخاب سال'}
                        listItems={yearList}/>
                       <div className="mr-2">
                       <MainInput label={'نرخ حق بیمه'} holder={'% نرخ حق بیمه'} className="mr-2"/>
                       </div>
                </div>
            </div>
            <div className="col-span-2">
            <div className="flex justify-end mt-7 mr-2">
            <div className="w-[80px]">
            <MainButton label={'ثبت'}/>
            </div>
                <div onClick={()=>setShowModal(true)} className="border-b border-dashed border-buttonBlue w-[100px] text-center mr-4 hover:cursor-pointer">
                    <span className="text-[15px] text-buttonBlue font-IRANYekanBold">
                        افزودن سال
                    </span>
                </div>
            </div>
            </div>
            </div>
           <div className="my-5 w-[30%] mx-auto  max-h-[400px] overflow-y-auto">
           <MainTable center1={true} ic={false} list={list} titleRow={titleRow}/>
           </div>
           </div>
            </div>
           {
            showModal ?
            <MainModal
            big={false}
            value={newYear}
  onChange={(e) => setNewYear(e.target.value)}
            title={"افزودن سال"}
            setShowModal={()=>setShowModal(false)}
            text={
                <div className="">
                    <MainInput label={'افزودن سال جدید'} holder={'مثلا 1352'}/>
                </div>
                
                }
            modalButton={<MainButton label={'ثبت'} onClickFunction={()=>addNewYearToList(newYear)}/>}/>
            :
            null
           }
        </>
    )
}

export default ExpertInsurancePremium;