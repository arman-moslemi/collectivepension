import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate, Link } from "react-router-dom";
import { MainInput, MainTable } from "../../components";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DetailTableIcon from '../../assets/icon/general/DetailTableIcon';
import TableRightIcon from '../../assets/icon/general/TableRightIcon';
import TableLeftIcon from '../../assets/icon/general/TableLeftIcon';

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



const titleRow = ["ردیف", "نوع اعتراض", "صندوق", "سال", "تاریخ ثبت", "وضعیت", "مشاهده علت"];

const list = [
  {
    item1: "1",
    item2: "سوابق",
    item3: "بازنشستگی کشوری",
    item4: "1376",
    item5: "1402/02/08",
    item6: <div className='rounded-[50px] bg-yellowTable mx-auto w-[109px] h-[28px] flex justify-center items-center'><p className='font-IRANYekanMedium text-[15px] text-white'>در حال برررسی</p></div>,
    item7: <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div></Link>,
  },
  {
    item1: "1",
    item2: "سوابق",
    item3: "بازنشستگی کشوری",
    item4: "1376",
    item5: "1402/02/08",
    item6: <div className='rounded-[50px] bg-redError mx-auto w-[72px] h-[28px] flex justify-center items-center'>
      <p className='font-IRANYekanMedium text-[15px] text-white'>رد شده</p></div>,
    item7: <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div></Link>,
  },
  {
    item1: "1",
    item2: "سوابق",
    item3: "بازنشستگی کشوری",
    item4: "1376",
    item5: "1402/02/08",
    item6: <div className='rounded-[50px] bg-greenTable mx-auto w-[84px] h-[28px] flex justify-center items-center'><p className='font-IRANYekanMedium text-[15px] text-white'>تایید شده</p></div>,
    item7: <Link to="../../user/viewProtest"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div></Link>,
  },

];

const RegisteredProtests = () => {
  const [data, setData] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [types, setTypes] = useState([]);
  const [statues, setStatues] = useState([]);
  const [id, setId] = useState();
  const [name, setName] = useState(0);
  const [status, setStatus] = useState(0);
  const [type, setType] = useState(0);
  const [text, setText] = useState("");
  const [count, setCount] = useState();
  const [page, setPage] = useState(1);
  const [row, setRow] = useState(10);
  const navigate = useNavigate();

  const getProtests = async () => {
    try {

      const response = await axiosReq("Users/GetProtests?page=" + page + "&&pageSize=" + row , "post", {
  
          InsuranceId: name,
          ProtestLeveId: type,
          ProtestStatusId: status,
          search:text
        
      });
      console.log(response)

      if (response?.status === 200 || response?.status === 204) {
        var prot = []
        setCount(response.data?.count)
        response.data?.data?.map((item, index) => {
          prot.push({
            item1: index + 1,
            item2: item.protestLevel,
            item3: item.insuranceName,
            item4: item.year ? item.year : "..",
            item5: item.protestDate,
            item6: <div className={`rounded-[50px] ${item.statusDescription == "رد اعتراض" ? "bg-redError" : "bg-greenTable"} mx-auto w-[170px] h-[28px] flex justify-center items-center`}><p className='font-IRANYekanMedium text-[15px] text-white'>{item.statusDescription}</p></div>,
            item7: <button onClick={() => navigate("/user/viewProtest", { state: { id: item.protestId } })}><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div></button>,

          })
        })
        setData(prot);
      }

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getProtests();
  }, [name, type, status,page, row]);
const getFilters = async () => {
    try {

      const response = await axiosReq("Insurances/GetInsuranceByUserId", "get");
      console.log(response)

      if (response?.status === 200 || response?.status === 204) {
        var insu = []
        response.data?.map((item, index) => {
          insu.push({
id: item.insuranceId,
            name: item.name,
          })
        })
        setInsurances(insu);
      }
  const response2 = await axiosReq("Users/GetProtestLevels", "get");
      console.log(response)

      if (response2?.status === 200 || response2?.status === 204) {
        var typee = []
        response2.data?.map((item, index) => {
          typee.push({
id: item.protestLevelId,
            name: item.protestLevel,
          })
        })
        setTypes(typee);
      }
  const response3 = await axiosReq("Users/GetProtestStatuses", "get");
      console.log(response)

      if (response3?.status === 200 || response3?.status === 204) {
        var sta = []
        response3.data?.map((item, index) => {
          sta.push({
id: item.protestStatusId,
            name: item.statusDescription,
          })
        })
        setStatues(sta);
      }

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
   useEffect(() => {
    getFilters();
  }, []);
  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white p-[24px]">
      <div className='w-full flex justify-between items-center mb-[20px] flex-wrap'>
        <div className='w-[440px] md:min-w-[80%]'><MainInput search={true} onChange={(e) => setText(e.target.value)}
          holder={'جستجو بر اساس متن اعتراض'} leftIcon={<SearchIcon />} /></div>
        <div className='flex justify-start items-center flex-wrap'>
          <div className='ml-3 w-[150px]'><MainInput onChange={(e) => setName(e.id)} listBoxM1={true} listItems={insurances} listBoxHolder={'نام صندوق'} /></div>
          <div className='ml-3 w-[150px]'><MainInput onChange={(e) => setType(e.id)} listBoxM1={true} listItems={types} listBoxHolder={'نوع اعتراض'} /></div>
          <div className='w-[150px]'><MainInput onChange={(e) => setStatus(e.id)} listBoxM1={true} listItems={statues} listBoxHolder={'وضعیت'} /></div>
        </div>
      </div>
      <div className='w-full mb-[10px]'>
        <MainTable center1={true} list={data} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow} />
      </div>

    </div>
  )
}

export default RegisteredProtests;