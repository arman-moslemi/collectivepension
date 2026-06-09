import { MainButton, MainChekbox, MainInput, MainRadioInput, MainTable, } from "../../components";
import Cross from "../../assets/icon/general/Cross";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'jalali-moment';
import Cookies from 'universal-cookie';


const UserRamz = ({ inModal, reCheck, setRecheck, code ,setRamz,ramz}) => {


  const [isLoading, setIsLoading] = useState(true);


  const cookies = new Cookies();

  const titleRow = [
    "ردیف",
    'سال',
    'نوع سابقه',
    'نام شعبه',
    'شماره کارگاه',
    'نام کارگاه',
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',

  ];
  const [dataTable, setDataTable] = useState([]);

  const GetData = async () => {
    try {
      setIsLoading(true);

      // 1. Fetch user insurance data

      const data = await axiosReq("Users/GetTaminRecords?passCode="+code, "get");
      // const data = await axiosReq("Users/GetTaminRecords?nationalCode=0020121873&&passCode=3377360109906", "get");

      // 2. Set initial values from API response
      if (data?.status == 200) {
        console.log(8888)
        console.log(data)
        var prot = []
        data.data?.data?.map((item, index) => {
          prot.push({

            // i: data.Id || 0,
            item1: item.year || 0,
            item2: item.recordType || "",
            item3: item.branchName || '',
            item4: item.workplaceNumber || "",
            item5: item.workplaceName || '',
            item6: item.month1 || 0,
            item7: item.month2 || 0,
            item8: item.month3 || 0,
            item9: item.month4 || 0,
            item10: item.month5 || 0,
            item11: item.month6 || 0,
            item12: item.month7 || 0,
            item13: item.month8 || 0,
            item14: item.month9 || 0,
            item15: item.month10 || 0,
            item16: item.month11 || 0,
            item17: item.month12 || 0,


          })
        })
        setDataTable(prot)

        // Set description if available




      }


    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetData()
  }, [])
  if (isLoading) {
    return <div>Loading...</div>; // Add a proper loading indicator
  }

  return (
    <div className="w-full border-b-[2px] pb-3 border-borderGray">
      <div className={`w-full ${inModal ? 'mb-[22px]' : 'mb-[30px]'}  flex justify-between items-center`}>
        {/* <p className="font-IRANYekanExtra text-[16px] text-mainBlue">اطلاعات فرد در صندوق بازنشستگی مبدا (شماره {number + 1})</p> */}
        {/* {number === 1 || inModal ? null : <button onClick={handleRemoveLastForm}><Cross /></button>} */}
      </div>

      {/* <div className="w-full grid grid-cols-3 gap-4"> */}

      <div className="mb-6 ">
        {/* <UserDataInsuranceOrigin reCheck={reCheck} setRecheck={setRecheck} number={idx + 1} data={data[idx]} handleRemoveLastForm={handleRemoveLastForm} /> */}
        <MainTable list={dataTable} titleRow={titleRow} />
      </div>
    <div className="mt-5 w-full">
                                    <MainChekbox
                                        onChange={() => setRamz(!ramz)}
                                        checked={ramz}
                                        type="button"
                                        label={'موارد فوق الذکر مورد تایید اینجانب می‌باشد.'}
                                    />
                                </div>
      {/* </div> */}
    </div>
  );
};

export default UserRamz;