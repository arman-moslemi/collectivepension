import { MainInput,MainButton,MainTable,MainModal } from "..";
import { useNavigate,Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
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
    <div className="flex">
                <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backRed flex justify-center items-center ml-1'><DetailTableIcon/></div></Link>
                <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backYellow flex justify-center items-center ml-1'><DetailTableIcon/></div></Link>
                <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-mainBlue flex justify-center items-center ml-1'><DetailTableIcon/></div></Link>

        <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center ml-1'><DetailTableIcon/></div></Link>
    </div>
    ,
  },
  {
    item1: "1",
    item2: "علی علیزاده ",
    item3: "بازنشستگی کشوری",
    item4: "AaliZadeh87",
    item5: "Aa@123456",
    item6: "مدیرعامل",
    item7: "09120478965",
    item8: <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div></Link>,
  },
  {
    item1: "1",
    item2: "علی علیزاده ",
    item3: "بازنشستگی کشوری",
    item4: "AaliZadeh87",
    item5: "Aa@123456",
    item6: "مدیرعامل",
    item7: "09120478965",
    item8: <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div></Link>,
  },
  {
    item1: "1",
    item2: "علی علیزاده ",
    item3: "بازنشستگی کشوری",
    item4: "AaliZadeh87",
    item5: "Aa@123456",
    item6: "مدیرعامل",
    item7: "09120478965",
    item8: <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div></Link>,
  },
  
  ];
const MainAdminAdminList = () => {
 const [showAddModal, setShowAddModal] = useState(false);
    
    const AddModalFunction = () => {
        setShowAddModal(false);
    }
    let navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]">
                <div className="flex justify-between">
                <div className='w-[440px] ml-3'><MainInput search={true} holder={'جستجو بر اساس نام یا کدملی'} leftIcon={<SearchIcon/>}/></div>

                <div className="flex">
                    <div className="w-[120px]">
                    <MainButton label={'+ تعریف ادمین'} onClickFunction={()=>setShowAddModal(true)}/>
                    </div>
                    <div className="w-[120px] mr-3">
                    <MainButton label={'گزارش‌ گیری'}/>
                    </div>
                </div>

                </div>
                <div className='w-full my-[20px]'>
                <MainTable center1={true} ic={false} list={list} titleRow={titleRow}/>
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
        </div>
    )
}

export default MainAdminAdminList;