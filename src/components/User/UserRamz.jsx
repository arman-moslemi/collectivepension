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

      // 2. Set initial values from API response
      if (data?.status == 200) {
        console.log(8888)
        console.log(data)
        var prot = []
        data.data?.map((item, index) => {
          prot.push({

            // i: data.Id || 0,
            item1: data.Year || 0,
            item2: data.RecordType || "",
            item3: data.BranchName || '',
            item4: data.WorkplaceNumber || 0,
            item5: data.WorkplaceName || '',
            item6: data.Month1 || '',
            item7: data.Month2 || '',
            item8: data.Month3 || '',
            item9: data.Month4 || 0,
            item10: data.Month5 || '',
            item11: data.Month6 || '',
            item12: data.Month7 || '',
            item13: data.Month8 || '',
            item14: data.Month9 || '',
            item15: data.Month10 || '',
            item16: data.Month11 || '',
            item17: data.Month12 || '',


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