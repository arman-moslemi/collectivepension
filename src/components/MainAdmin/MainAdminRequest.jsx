import { MainButton,MainInput, MainTable } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import { axiosReq } from "../../commons/axiosReq";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { useState, useEffect } from "react";
import { apiAsset } from "../../commons/inFormTypes";


const titleRow = ["ردیف","نام و نام خانوادگی","کدملی","تاریخ ثبت درخواست","صندوق مقصد","وضعیت","مشاهده"];



const MainAdminRequest = () => {

    let navigate = useNavigate();

    const [startDate,
        setStartDate] = useState("");
        const [endDate,
            setEndDate] = useState("");

    const [statues, setStatues] = useState([]);
    const [userInsuranceStatusId, setUserInsuranceStatusId] = useState(0);
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);
    const [row, setRow] = useState(10);
    const [data, setData] = useState([]);
    const [name, setName] = useState("");


    const getProtests = async () => {
        try {

            const response = await axiosReq("SuperAdmins/GetRequestsSP?page=" + page + "&&pageSize=" + row+"&&search="+name+"&&endDate="+endDate+"&&startDate="+startDate+"&&userInsuranceStatusId="+userInsuranceStatusId, "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                setCount(response.data?.count)
                response.data?.data?.map((item, index) => {
                    console.log(88)
                    console.log(item)
                    console.log(88)
                    prot.push({
                        item1: index + 1,
                        item2: item.fullName,
                        item3: item.nationalCode,
                        item4: item.requestDate,
                        item5: item.endingInsuranceName,
                        item6: item.statusDescription,
                        item7: <button 
                        onClick={()=>navigate("/mainAdmin/requestDetail",{state:{id:item.userInsuranceId,statusId:item.userInsuranceStatusId}})}>
                            <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'>
                                <DetailTableIcon/>
                                </div>
                                </button>,
                        
                    })
                })
                setData(prot);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getProtests();
    }, [name, userInsuranceStatusId , page, row, startDate, endDate]);


    const getFiltersStatuses = async () => {
                    try {
            
            
                        const response4 = await axiosReq("SuperAdmins/GetRequestStatuses", "get");

                        console.log(response4);
            
                        if (response4?.status === 200 || response4?.status === 204) {
                            var sta = []
                            response4.data?.map((item, index) => {
                                sta.push({
                                    id: item.userInsuranceStatusId,
                                    name: item.statusDescription,
                                })
                            })
                            setStatues(sta);
                        }
            
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    }
                };
                useEffect(() => {
                    getFiltersStatuses();
                    
                }, []);


                const getExcel = async () => {
        try {

            const response = await axiosReq("SuperAdmins/GetRequestsSPExcel?search="+name+"&&endDate="+endDate+"&&startDate="+startDate+"&&userInsuranceStatusId="+userInsuranceStatusId, "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                alert("موفقیت آمیز")
                                    download(response.data)
                
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
 const download = async (name) => {
        try {
            const response = await axiosReq(`Users/download/${name}`, "get", {
                responseType: "blob", // important!
            });

            if (response.status === 200) {
                // Create a blob from the response
                const blob = new Blob([response.data], { type: response.headers['content-type'] });
                const url = window.URL.createObjectURL(blob);

                // Create a temporary link element
                const a = document.createElement('a');
                a.href = url;
                a.download = name; // you can also extract filename from headers if needed
                document.body.appendChild(a);
                a.click();

                // Cleanup
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
            <div className='w-full grid grid-cols-12 mb-[28px] gap-2'>
             
                <div className='w-full col-span-5 lg:col-span-12 ml-3'><MainInput search={true} onChange={(e)=>setName(e.target.value)} holder={'جستجو بر اساس نام یا کدملی'} leftIcon={<SearchIcon/>}/></div>
                <div className='grid grid-cols-3 gap-1 col-span-6 lg:col-span-12 '>
                    <div className='ml-3 w-full col-span-1 lg:col-span-3'><MainInput holder={'از تاریخ'} value={startDate} onChange={(val1) => setStartDate(val1)} date={true} leftIcon={<DateIcon/>}/></div>
                    <div className='ml-3 w-full col-span-1 lg:col-span-3'><MainInput holder={'تا تاریخ'} value={endDate} onChange={(val2) => setEndDate(val2)} date={true} leftIcon={<DateIcon/>}/></div>
                    <div className='w-full col-span-1 lg:col-span-3'>
                      <MainInput 
                      listBoxM1={true} 
                      listItems={statues} 
                      // For display, pass the selected object (or "" if not selected)
                      value={statues.find(i => String(i.id) === String(userInsuranceStatusId)) || ""}
                      // On change, always store only the id (as string) in Formik
                      onChange={(value) =>
                      setUserInsuranceStatusId(value.id)} 
                      listBoxHolder={'وضعیت'}
                      />
                    </div>
                </div>
            
                <div className="w-full col-span-1 mt-2 lg:col-span-12">
                    <MainButton  onClickFunction={()=>getExcel()} label={'گزارش‌ گیری'}/>
                </div>
            </div>
            <div className='w-full mb-[10px]'>
                <MainTable  ic={false} list={data} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow}/>
            </div>
            
            
        </div>
    )
}

export default MainAdminRequest;