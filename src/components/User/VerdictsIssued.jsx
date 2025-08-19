import { useState, useEffect } from 'react';
import { MainTable, MainInput } from "../../components";
import DownloadIcon from '../../assets/icon/general/DownloadIcon';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { apiAsset } from "../../commons/inFormTypes";
import { axiosReq } from "../../commons/axiosReq";



const cityList = [

  {
    id: 1,
    name: 'عشایر',
  },
  {
    id: 2,
    name: 'تامین اجتماعی',
  },
  {
    id: 3,
    name: 'بازنشستگی کشوری',
  },
]

const titleRow = ["ردیف", "نام صندوق", "دانلود حکم"];

const list = [
  {
    item1: "1",
    item2: "بازنشستگی کشوری",
    item3: <div onClick={() => window.location.href = "../../SingleRetriment.html"} className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center'><DownloadIcon /></div>,

  },
  {
    item1: "2",
    item2: "صندوق بیمه اجتماعی کشاورزان، روستاییان و عشایر",
    item3: <div className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center'><DownloadIcon /></div>,

  },
  {
    item1: "3",
    item2: "صندوق تامین اجتماعی",
    item3: <div className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center'><DownloadIcon /></div>,

  },
  {
    item1: "4",
    item2: "حکم مستمری جمع",
    item3: <div className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center'><DownloadIcon /></div>,

  },

];


const VerdictsIssued = () => {

  const [data, setData] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [types, setTypes] = useState([]);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [status, setStatus] = useState(0);

  const [count, setCount] = useState();
  const [page, setPage] = useState(1);
  const [row, setRow] = useState(10);
  const getInsurances = async () => {
    try {

      const response = await axiosReq("Insurances/GetInsuranceByUserId", "get");
      console.log(response)

      if (response?.status === 200 || response?.status === 204) {
        var prot = []
        var typ = []
        response.data?.map((item, index) => {
          prot.push({
            item1: index + 1,
            item2: item.name,
            item3: <div onClick={() => exportDoc(item?.insuranceId)} className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center cursor-pointer'><DownloadIcon /></div>,

          })
          typ.push({ id: item.insuranceId, name: item.name })
        })
        setCount(response.data.length)
        setData(prot);
        setTypes(typ)
        // setDataTable(prot);
      }

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };


  useEffect(() => {
    getInsurances();
  }, []);
  const exportDoc = async (item) => {
    try {

      const response = await axiosReq("Users/GenerateToken?insuranceId=" + item, "post");
      console.log(response)

      if (response?.status === 200 || response?.status === 204) {
        window.location.href = "../../SingleRetrimentUser.html?user=" + response.data;
      }

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white pt-[24px] pb-[100px] px-[230px] lg:px-1">
      {/* <div className='w-full flex justify-end mb-5'>
        <div className='w-[150px]'><MainInput listBoxM1={true} listItems={types} onChange={(e) => setStatus(e.id)} listBoxHolder={'نام صندوق'} /></div>
      </div> */}
      <div className='w-full'>
        <MainTable center2={true} list={data} titleRow={titleRow} count={count} row={10} page={1} />

      </div>

    </div>
  )
}

export default VerdictsIssued;