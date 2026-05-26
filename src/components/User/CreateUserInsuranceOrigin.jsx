import { useState, useEffect } from "react";
import { MainExplanation, MainButton, UserDataInsuranceOrigin, MainModal, MainChekbox, MainTable } from "../../components";
import { useNavigate } from "react-router-dom";
import OkIcon from "../../assets/icon/general/OkIcon";
import { axiosReq } from "../../commons/axiosReq";
import Cookies from 'universal-cookie';
import Trash from "../../assets/icon/main/Trash";
import Pencil from "../../assets/icon/main/Pencil";
const CreateUserInsuranceOrigin = () => {
    const [showUnderTakingModal, setShowUnderTakingModal] = useState(false);
    const cookies = new Cookies();

    let status = cookies.get("Status");
    const [forms, setForms] = useState([0]);
    const underTakingModalFunction = () => {
        if (status > 1) {

            navigate('../dashboard')
        }
        console.log(forms)
        forms.length < 2 ?
            alert("حداقل یک صندوق اضافه کنید") :
            setShowUnderTakingModal(true)

    }
    const titleRow = [
        "ردیف",
        'نام صندوق بازنشستگی',
        'نام دستگاه اجرائی/کارگاه',
        'استان محل اشتغال',
        'شهر',
        'شماره شناسایی بیمه',
        'نوع سابقه',
        'میزان سابقه',
        'شماره دستگاه اجرایی/کارگاه',
        'علت خروج از صندوق ',
        'تاریخ خروج از عضویت صندوق',
        'عملیات'
    ];

    const list = [
        {
            id: "1",
            fullName: "علی علیزاده",
            nationalCode: "0020163258",
            date: "1402/02/08",
            protestType: "RECORD",
            protestTypeLabel: "اعتراض به سابقه اعلامی",
            status: "در انتظار بررسی",
        },
        {
            id: "2",
            fullName: "علی علیزاده",
            nationalCode: "0020163258",
            date: "1402/02/08",
            protestType: "AMOUNT",
            protestTypeLabel: "اعتراض به مبلغ مستمری",
            status: "در انتظار بررسی",
        },
        {
            id: "3",
            fullName: "علی علیزاده",
            nationalCode: "0020163258",
            date: "1402/02/08",
            protestType: "GENERAL",
            protestTypeLabel: "اعتراض به احراز شرایط",
            status: "در انتظار بررسی",
        },
    ];



    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reCheck, setRecheck] = useState(true);
    const [promise, setPromise] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editId, setEditId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const handleAddForm = () => {
        setForms(prev => [...prev, prev.length]);
    };
    const handleRemoveLastForm = () => {
        setForms(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
    };
    const GetData = async () => {
        try {
            setIsLoading(true)
            // 1. Fetch user insurance data
            const userInsuranceRes = await axiosReq("Users/GetUserInsurance?isEndingInsurance=false", "get");
            console.log('User insurance data:', userInsuranceRes.data);

            // 2. Set initial values from API response
            if (userInsuranceRes.data) {

                // setForms(userInsuranceRes.data.length)
                setForms(prev => [...prev, userInsuranceRes.data.length]);
                setData(userInsuranceRes.data)
                var prot = []

                userInsuranceRes.data?.map((item, index) => {
                    prot.push({
                        item1: index + 1,
                        item2: item.name,
                        item3: item.departmentName,
                        item4: item.provinceName,
                        item5: item.cityName,
                        item6: item.insuranceIdNumber,
                        // item6: item.employmentStatus,
                        item7: item.trackRecordType,
                        item8: item.trackRecordDays,
                        item9: item.lastWorkplace,
                        item10: item.quitReason,

                        // item11: item.endDate,
                        item11: item.quitDate,
                        item12: <div className="flex justify-center">

                            <div className="relative group hover:cursor-pointer" onClick={() => { setShowEdit(true); setEditId(index); }}>
                                <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backYellow flex justify-center items-center ml-1'><Pencil /></div>
                                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                                    ویرایش
                                </div>
                            </div>
                            <div className="relative group hover:cursor-pointer" onClick={() => { setShowDelete(true); setDeleteId(item.userInsuranceId); }}>
                                <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backYellow flex justify-center items-center ml-1'><Trash /></div>
                                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                                    حذف
                                </div>
                            </div>
                        </div>
                        ,
                    })
                })
                setDataTable(prot)
            }


            setIsLoading(false)

        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false)

        } finally {
            setIsLoading(false)

        }
    };
     const deleteInsu = async () => {
        const response = await axiosReq("Users/DeleteUserInsurance?UserInsuranceId=" + deleteId, "delete");
        if (response.status == 200) {
          alert("با موفقیت حذف شد")
          setShowDelete(false)
          setRecheck(!reCheck)
    
        }
      }
    useEffect(() => {
        GetData();
    }, [reCheck]);
    if (isLoading) {
        return <div>Loading...</div>; // Add a proper loading indicator
    }
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <div className="flex justify-start px-[32px] items-center overflow-x-auto whitespace-nowrap w-full md:pb-2">
                <div className="flex justify-start items-center">
                    <div className="rounded-full w-[40px] h-[40px] md:w-[35px] md:h-[35px] bg-midGreen flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white"><OkIcon /></p></div>
                    <p className="font-IRANYekanExtra text-[15px] text-midGreen mx-[6px]">اطلاعات هویتی متقاضی</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-midGreen md:w-[10px]"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                    <div className="rounded-full w-[40px] h-[40px] md:w-[35px] md:h-[35px] bg-midGreen flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white"><OkIcon /></p></div>
                    <p className="font-IRANYekanExtra text-[15px] text-midGreen mx-[6px]">اطلاعات در آخرین صندوق بازنشستگی(مقصد)</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-midGreen md:w-[10px]"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-buttonBlue"></div>
                    <div className="rounded-full h-[48px] w-[48px] flex justify-center items-center p-1 border-[1px] border-dashed border-buttonBlue "><div className="w-full h-full rounded-full bg-buttonBlue flex justify-center items-center"><p className="font-IRANYekanExtra text-[18px] text-white">3</p></div></div>
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-[6px]">اطلاعات در صندوق‌ بازنشستگی مبدا</p>
                </div>
            </div>
            <div className="w-full mt-[32px] mb-[40px]"><MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است !'} /></div>
            <div className="px-[40px] w-full z940:px-1">
                <div className="w-full md:col-span-3">
                    <div className="mb-6">
                        <UserDataInsuranceOrigin reCheck={reCheck} setRecheck={setRecheck} number={data?.length + 1} handleRemoveLastForm={handleRemoveLastForm} />
                    </div>
                    <div  className="mb-6 ">
                                    {/* <UserDataInsuranceOrigin reCheck={reCheck} setRecheck={setRecheck} number={idx + 1} data={data[idx]} handleRemoveLastForm={handleRemoveLastForm} /> */}
                                    <MainTable list={dataTable} titleRow={titleRow} />
                                </div>
                    
                </div>
                <div className="w-full flex items-end justify-between my-5 flex-wrap">
                    {/* <div className="w-fit max-w-[434px] ">
                        <p className="font-IRANYekanBold text-[15px] text-mainBlue mb-3">اگر در صندوق مبدا دیگری بیمه پردازی داشتید،روی دکمه زیر کلیک کرده و اطلاعات خود را تکمیل کنید.</p>
                        <div className="w-[217px]"><MainButton onClickFunction={handleAddForm} label={'افزودن صندوق مبدا بعدی'} /></div>
                    </div> */}
                    <div className="flex w-full justify-end z940:mt-5">
                        <div className="w-[140px] ml-4"><MainButton onClickFunction={() => navigate('../createUserInsuranceDes')} label={'گام قبلی'} /></div>
                        <div className="w-[140px]"><MainButton onClickFunction={underTakingModalFunction} label={'گام بعدی'} /></div>
                    </div>

                </div>
                {showUnderTakingModal && (
                    <MainModal
                        title={'تعهدنامه'}
                        // noCross={true}
                        setShowModal={setShowUnderTakingModal}
                        text={
                            <div className="w-full flex flex-col items-center">
                                <p className="font-IRANYekanMedium  text-[14px] text-mainBlue text-justify leading-7">
                                    اینجانب
                                    <span className="font-IRANYekanExtra mx-2"></span>
                                    متعهد می‌گردم در هیچ یک از صندوق‌های بازنشستگی از مزایای مستمری بازنشستگی/ ازکارافتادگی کلی/ بازماندگان استفاده ننموده‌ام و در صورت برقراری مستمری جمع و احراز شرایط برقراری مستمری استحقاقی در هر یک از صندوق‌ها و تمایل به بهره‌مندی از مزایای آن صندوق (بدون احتساب مزایای مستمری جمع)، مراتب انصراف خود را از برقراری مستمری جمع اعلام نمایم.
                                </p>
                                <div className="mt-5 w-full">
                                    <MainChekbox
                                        onChange={() => setPromise(!promise)}
                                        checked={promise}
                                        label={'موارد فوق الذکر مورد تایید اینجانب می‌باشد.'}
                                    />
                                </div>
                            </div>
                        }
                        modalButton={
                            <div className="w-[140px] flex">

                                <MainButton
                                    onClickFunction={() => promise ? navigate('../dashboard') : alert("لطفا موارد را تایید نمایید")}
                                    label={'ثبت و ارسال'}
                                />


                            </div>
                        }
                    />
                )}

            </div>
            {showEdit ? (
           <MainModal
             big={true}
             title={'ویرایش صندوق'}
             setShowModal={() => { setShowEdit(false);  }}
             text={<UserDataInsuranceOrigin reCheck={reCheck} setRecheck={setRecheck} number={editId} data={data[editId]} handleRemoveLastForm={handleRemoveLastForm} /> }
           />
         ) : null}
          {showDelete  ? (
        <MainModal
          big={false}
          title={ "حذف صندوق"}
          setShowModal={() => setShowDelete(false)}
          text={
           "آیا از حذف صندوق انتخاب شده اطمینان دارید؟"
          }
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={deleteInsu} label={"بله"} />
              </div>
              <div className="w-[140px] mr-2">
                <MainButton
                  onClickFunction={() => setShowDelete(false)}
                  red={true}
                  label={"خیر"}
                />
              </div>
            </div>
          }
        />
      ) : null}
        </div>
    );

    
};

export default CreateUserInsuranceOrigin;