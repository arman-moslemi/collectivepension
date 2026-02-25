import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import {
  MainButton, MainModal, ExistingRecordsDetailsMonths,
  ExistingRecordsDetailsMonthsEdit, MainInput, UploadFile
} from "../../components";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { apiAsset, apiUrl } from "../../commons/inFormTypes";
import Cookies from "universal-cookie";

const list = [
  {
    item1: "فروردین",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "اردیبهشت",
    item2: [{ item: "01/01 - 01/31" }, { item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "خرداد",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "تیر",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "مرداد",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "شهریور",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "مهر",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "آبان",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "آذر",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "دی",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "بهمن",
    item2: [{ item: "01/01 - 01/31" }, { item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "اسفند",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },

];

const ExistingRecordsDetails = ({ objMonth, selectedMonthBox }) => {


  const [protestMode, setProtestMode] = useState(false);
  const [data, setData] = useState([]);
  const [protest, setProtest] = useState([]);
  const [showDeclined, setShowDeclined] = useState(false);
  const [file, setFile] = useState();
  const [files, setFiles] = useState([]);
  const [des, setDes] = useState();

  const getInsurancesMonth = async () => {
    try {
      console.log('month')
      console.log(objMonth)
      if (objMonth) {
        const response = await axiosReq("Users/FetchDeclaredDate", "post", {
          InsuranceId: objMonth.InsuranceId,
          InsuranceIdNumber: objMonth.InsuranceIdNumber,
          Branch: objMonth.Branch,
          Workplace: objMonth.Workplace,
          WorkplaceNumber: objMonth.WorkplaceNumber,
          CityId: objMonth.CityId,
          Year: objMonth.Year
        });
        console.log(response)

        if (response?.status === 200 || response?.status === 204) {
          var propss = [];
          response.data.map((item, index) => {
            propss.push({
              item1: item.month,
              item2: item.timeFrames,
              item3: item.duration,
              item4: item.monthId
            })
          })
          setData(propss);
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getInsurancesMonth();
  }, [selectedMonthBox, objMonth]);
  const createProtest = async () => {
    try {
      console.log('month')
      console.log(objMonth)
      console.log(888)
      console.log(protest)
      if (objMonth) {
        // const response = await axiosReq("Users/TimeFrameProtest", "post", {
        const response = await axiosReq("Users/DurationProtest", "post", {
          InsuranceId: objMonth.InsuranceId,
          InsuranceIdNumber: objMonth.InsuranceIdNumber,
          Branch: objMonth.Branch,
          Workplace: objMonth.Workplace,
          WorkplaceNumber: objMonth.WorkplaceNumber,
          CityId: objMonth.CityId,
          Year: objMonth.Year,
          // TimeFrameProtest: protest,
          DurationProtest: protest,
          ProtestDescription: des,
          ProtestFiles: files
        });
        console.log(response)

        if (response?.status === 200 || response?.status === 204) {
          setShowDeclined(false)
          alert("اعتراض شما به سابقه اعلامی این صندوق با موفقیت ثبت شد.نتیجه ی اعتراض شما، از طریق پیامک اطلاع رسانی خواهد شد.")
          window.location.reload()
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    handleFileChange()
  }, [file]);
  const handleFileChange = () => {

    if (file?.length > 0) {
      console.log("change")
      console.log(111)
      setFiles([...files, file])
    }
  }
 const download = async (name) => {
      try {
              const cookies = new Cookies();
          
          // const token = localStorage.getItem('token'); // or wherever you store your token
          const response = await fetch(`${apiUrl}Users/download/${name}`, {
              method: 'GET',
              headers: {
                   'Authorization': `Bearer ${cookies.get('token')}`, // if needed
                  'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
              }
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const blob = await response.blob();
          
          // Get filename from Content-Disposition header
          const contentDisposition = response.headers.get('content-disposition');
          let filename = name;
          if (contentDisposition) {
              const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
              if (filenameMatch && filenameMatch[1]) {
                  filename = filenameMatch[1].replace(/['"]/g, '');
              }
          }
  
          // Ensure filename has correct extension
          if (!filename.endsWith('.xlsx') && !filename.endsWith('.xls')) {
              filename += '.xlsx';
          }
  
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          
          // Cleanup
          setTimeout(() => {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
          }, 100);
          
      } catch (error) {
          console.error("Error downloading file:", error);
      }
  };
  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
      <div className="w-full flex justify-end items-center mb-[21px]">
        {!protestMode ?
          <div className="w-[97px] flex">
            <MainButton onClickFunction={() => setProtestMode(!protestMode)} label={'اعتراض'} red={true} />
          </div> : null}
        <div className={`w-[150px] ${protestMode ? 'flex' : 'hidden'} mr-10`}>

          {protestMode ? <MainButton onClickFunction={() => setShowDeclined(true)} label={'ثبت نهایی اعتراض'} green={true} /> : null}
        </div>
      </div>
      {protestMode ?
        <div className="w-full  grid grid-cols-2 md:grid-cols-1 gap-4">
          {data?.map((item) => {
            return (
              <div><ExistingRecordsDetailsMonthsEdit list2={item} setData={setData} setProtest={setProtest} data={data} /></div>
            )
          })
          }
        </div>
        :

        <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-4">
          {
            data?.map((item) => {
              return (

                <div><ExistingRecordsDetailsMonths list1={item} /></div>
              )
            })
          }
        </div>
      }

      {showDeclined && (

        <MainModal
          big={true}
          title={"ثبت اعتراض"}
          setShowModal={setShowDeclined}
          text={

            <div className="mt-6  p-4">
              <div className="w-full">
                <MainInput
                  longText={true}
                  necessary={true}
                  onChange={(e) => setDes(e.target.value)}
                  label={'توضیح خود را اینجا بنویسید .'}
                  holder={'توضیح خود را اینجا بنویسید .'}
                  max={150} />
                <div className='w-full  items-center mt-4 lg:flex-wrap'>
                  <p className='font-IRANYekanMedium lg:my-2  mb-5 text-[14px] text-mainBlue ml-3'>انتخاب فایل</p>
                  <div><UploadFile small={false} setFile={setFile} /></div>
                </div>
                {
                  files.map((item) => {
                    return (

                      <div onClick={() => download(item)} className="h-[36px] w-fit rounded-full bg-backBlue my-2 flex items-center pr-[20px] pl-[17px]">
                        <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px] cursor-pointer">{item}</p>
                        <ExportAgentFileIIcon />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          }
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={() => createProtest()} label={'ثبت و ارسال'} />
              </div>
            </div>
          }

        />
      )
      }

    </div>
  );
};

export default ExistingRecordsDetails;