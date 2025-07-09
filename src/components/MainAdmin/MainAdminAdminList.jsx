import { MainInput,MainButton,MainTable,MainModal } from "..";
import { useNavigate,Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import Trash from "../../assets/icon/main/Trash";
import Pencil from "../../assets/icon/main/Pencil";
import Block from "../../assets/icon/main/Block";
import { useState } from "react";
const listItems = [
    {
      id: 1,
      name: 'اول',
      },
    {
      id: 2,
      name: 'دوم',
     },
    {
      id: 3,
      name: 'سوم',
      },
    {
      id: 4,
      name: 'چهارم',
      },
]
const titleRow = ["ردیف","نام و نام خانوادگی","نام صندوق","نام کاربری","رمزعبور","سمت","تلفن همراه","عملیات"];


const MainAdminAdminList = () => {
 const [showAddModal, setShowAddModal] = useState(false);
 const [showDelete,setShowDelete] = useState(false);
 const [showEdit,setShowEdit] = useState(false);
 const [showBlock,setShowBlock] = useState(false);

    const AddModalFunction = () => {
        setShowAddModal(false);
    }
    let navigate = useNavigate();
    const list = [
      {
        item1: "1",
        item2: "علی علیزاده ",
        item3: "بازنشستگی کشوری",
        item4: "AaliZadeh87",
        item5: "Aa@123456",
        item6: "مدیرعامل",
        item7: "09120478965",
        item8: 
        <div className="flex justify-center">
        <div  className="relative group hover:cursor-pointer" onClick={()=>setShowDelete(true)}>
         <div className='w-[38px] h-[38px] mx-auto rounded-full bg-trashBg flex justify-center items-center ml-1'>
           <Trash />
         </div>
         <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
           حذف
         </div>
       </div>
           <div className="relative group hover:cursor-pointer" onClick={()=> setShowEdit(true)}>
           <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backYellow flex justify-center items-center ml-1'><Pencil/></div>
           <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
           ویرایش
         </div>
           </div>
           <div className="relative group hover:cursor-pointer" onClick={()=>setShowBlock(true)} >
           <div className='w-[38px] h-[38px] mx-auto rounded-full bg-blockBg flex justify-center items-center ml-1'><Block/></div>
           <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
           غیرفعال کردن
         </div>
           </div>
       {/* download log is here */}
       <div className="relative group hover:cursor-pointer" >
       <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center ml-1'><DetailTableIcon/></div>
       <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
           مشاهده
         </div>
       </div>
       </div>
        ,
      },
     
      
      ];
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]">
                <div className="grid grid-cols-12 gap-4 justify-between">
                <div className='col-span-8 md:col-span-12 w-full ml-3'><MainInput search={true} holder={'جستجو بر اساس نام یا کدملی'} leftIcon={<SearchIcon/>}/></div>

                <div className="flex col-span-4 mt-2 md:col-span-12 md:justify-center">
                    <div className="w-[120px]">
                    <MainButton label={'+ تعریف ادمین'} onClickFunction={()=>setShowAddModal(true)}/>
                    </div>
                    <div className="w-[120px] mr-3">
                    <MainButton label={'گزارش‌ گیری'}/>
                    </div>
                </div>

                </div>
                <div className='w-full my-[20px]'>
                <MainTable center2={false} record1={true} record2={true} record3={true} record4={false} ic={false} list={list} titleRow={titleRow}/>
            </div>
                </div>
           
                {showAddModal ? <MainModal big={false} title={'تعریف ادمین'} setShowModal={setShowAddModal}
           text={
           <>
             <div className="mb-4 flex justify-between items-center">
                <span className="font-IRANYekanBold text-[15px] text-black">
                  انتخاب صندوق
                </span>
                                <div className="w-[300px]">
                                <MainInput  listBox={true} listItems={listItems} necessary={false} />
                                    </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'نام'} holder={'Ali***'} necessary={true}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'نام خانوادگی'} holder={'Ali***'} necessary={true}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'نام کاربری'} holder={'Aalizadeh'} necessary={true}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'رمزعبور'} holder={'ََAa****'} necessary={true}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'سمت'} holder={'مدیرعامل'} necessary={true}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'تلفن همراه'} holder={'0912******'} necessary={true}/>
                </div>
                                </div>
                                </div>
           </>
           }
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton onClickFunction={AddModalFunction} label={'تعریف ادمین'}/></div>
           </div>}
            /> : null}
            
            {showDelete ? <MainModal big={false} title={'حذف ادمین'} setShowModal={()=>setShowDelete(false)}
           text={
         'آیا از حذف ادمین انتخاب شده اطمینان دارید ؟ '
           }
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton  label={'بله'}/></div>
            <div className="w-[140px] mr-2"><MainButton red={true}  label={'خیر'}/></div>
           </div>}
            /> : null}

{showEdit ? <MainModal big={false} title={'ویرایش ادمین'} setShowModal={() => setShowEdit(false)}
           text={
           <>
             <div className="mb-4 flex justify-between items-center">
                <span className="font-IRANYekanBold text-[15px] text-black">
                  انتخاب صندوق
                </span>
                                <div className="w-[300px]">
                                <MainInput  listBox={true} listItems={listItems} necessary={false} />
                                    </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'نام'} holder={'Ali***'} necessary={false}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'نام خانوادگی'} holder={'Ali***'} necessary={false}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'نام کاربری'} holder={'Aalizadeh'} necessary={false}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'رمزعبور'} holder={'ََAa****'} necessary={false}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'سمت'} holder={'مدیرعامل'} necessary={false}/>
                </div>
                                </div>
                                <div className="col-span-1">
                                <div className="mb-2">
                    <MainInput label={'تلفن همراه'} holder={'0912******'} necessary={false}/>
                </div>
                                </div>
                                </div>
           </>
           }
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton onClickFunction={AddModalFunction} label={'تعریف ادمین'}/></div>
           </div>}
            /> : null}
{showBlock ? <MainModal big={false} title={'غیرفعالسازی ادمین'} setShowModal={()=>setShowBlock(false)}
           text={
         'آیا از غیرفعالسازی ادمین انتخاب شده اطمینان دارید ؟ '
           }
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton  label={'بله'}/></div>
            <div className="w-[140px] mr-2"><MainButton red={true}  label={'خیر'}/></div>
           </div>}
            /> : null}
        </div>
    )
}

export default MainAdminAdminList;