import { useState } from "react";
import { MainButton, MainInput, MainTable, MainExplanation, ExpertPensionRequestForm, ExpertAllRecordsWithWebService, ExpertAllRecordsNoWebService, ExpertPensionAmount, ExpertPensionAmountInput, ExpertAgents } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
//   


const ExpertRequestsDetails = ({ admin, webService, des, another,id }) => {

  const [expertPensionRequestForm, setExpertPensionRequestForm] = useState(true);
  const [expertAllRecords, setExpertAllRecords] = useState(false);
  const [expertPensionAmount, setExpertPensionAmount] = useState(false);
  const [expertLeftovers, setExpertLeftovers] = useState(false);
  const [expertPensionShift, setExpertPensionShift] = useState(false);

  const expertPensionRequestFormOnClick = () => {
    setExpertPensionRequestForm(true);
    setExpertAllRecords(false);
    setExpertPensionAmount(false);
    setExpertLeftovers(false);
  }
  const expertAllRecordsOnClick = () => {
    setExpertPensionRequestForm(false);
    setExpertAllRecords(true);
    setExpertPensionAmount(false);
    setExpertLeftovers(false);
  }
  const expertPensionAmountOnClick = () => {
    setExpertPensionRequestForm(false);
    setExpertAllRecords(false);
    setExpertPensionAmount(true);
    setExpertLeftovers(false);
  }
  const expertLeftoversOnClick = () => {
    setExpertPensionRequestForm(false);
    setExpertAllRecords(false);
    setExpertPensionAmount(false);
    setExpertLeftovers(true);

  }




  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[17px] pt-[17px] pb-[38px]">
      <div className="w-full mb-6">
        <p className="text-[15px] text-mainBlue font-IRANYekanBold">لطفا جزئیات پرونده را با دقت بررسی کنید.</p>
      </div>
      <div className="w-full px-[20px] mb-[20px]">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[800px] md:min-w-[500px] flex justify-center">
            <div
              onClick={expertPensionRequestFormOnClick}
              className={`w-[186px] h800:w-fit h800:px-3 h800:h-fit h800:py-2 cursor-pointer h-[41px] ${expertPensionRequestForm ? 'bg-buttonBlue' : 'bg-mainBlue'} rounded-t-[6px] ml-4 h800:ml-2 flex justify-center items-center`}
            >
              <p className={`text-[15px] h800:text-[12px] text-white ${expertPensionRequestForm ? 'font-IRANYekanExtra' : 'font-IRANYekanMedium'}`}>
                فرم درخواست مستمری
              </p>
            </div>

            {another && (
              <div
                onClick={expertLeftoversOnClick}
                className={`w-[186px] h800:w-fit h800:px-3 h800:h-fit h800:py-2 cursor-pointer h-[41px] ${expertLeftovers ? 'bg-buttonBlue' : 'bg-mainBlue'} rounded-t-[6px] ml-4 h800:ml-2 flex justify-center items-center`}
              >
                <p className={`text-[15px] h800:text-[12px] text-white ${expertLeftovers ? 'font-IRANYekanExtra' : 'font-IRANYekanMedium'}`}>بازماندگان</p>
              </div>
            )}

            <div
              onClick={expertAllRecordsOnClick}
              className={`w-[186px] h800:w-fit h800:px-3 h800:h-fit h800:py-2 cursor-pointer h-[41px] ${expertAllRecords ? 'bg-buttonBlue' : 'bg-mainBlue'} rounded-t-[6px] ml-4 h800:ml-2 flex justify-center items-center`}
            >
              <p className={`text-[15px] h800:text-[12px] text-white ${expertAllRecords ? 'font-IRANYekanExtra' : 'font-IRANYekanMedium'}`}>کلیه سوابق</p>
            </div>

            <div
              onClick={expertPensionAmountOnClick}
              className={`w-[186px] h800:w-fit h800:px-3 h800:h-fit h800:py-2 cursor-pointer h-[41px] ${expertPensionAmount ? 'bg-buttonBlue' : 'bg-mainBlue'} rounded-t-[6px] ml-4 h800:ml-2 flex justify-center items-center`}
            >
              <p className={`text-[15px] h800:text-[12px] text-white ${expertPensionAmount ? 'font-IRANYekanExtra' : 'font-IRANYekanMedium'}`}>مبلغ مستمری </p>
            </div>
          </div>
        </div>
        <div className="w-full border-b border-[2px] border-dGray"></div>
      </div>


      {expertPensionRequestForm ?
        <div className="w-full px-[16px] pt-[10px] mb-4 lg:px-0">
          <MainExplanation color={'green'}
            text={
              <div>
                <p className="text-mainGreen text-[16px] font-IRANYekanExtra mb-[6px]">نتیجه اولیه بررسی شرایط دریافت مستمری از طریق سامانه :</p>
                <p className="text-[14px] font-IRANYekanBold text-black">در ابتدا درخواست متقاضی به دلیل عدم احراز شرایط لازم، رد شده بود؛ اما با اعلام صندوق جدید و بررسی سوابق مرتبط، شرایط لازم احراز و درخواست در حال حاضر تأیید شده است.</p>
              </div>
            }
          />
        </div>
        : expertAllRecords && webService ?
          <div className="w-full px-[16px] pt-[10px] mb-4 lg:px-0">
            <MainExplanation text={'لطفا سوابق اعلام شده از طریق وب‌سرویس را دقیق بررسی کنید.'} />
          </div>
          : expertAllRecords && !webService && !admin ?
            <div className="w-full px-[16px] pt-[10px] mb-4 lg:px-0">
              <MainExplanation text={'لطفاً اطلاعات مربوط به شرکت یا کارگاه محل اشتغال کاربر (استان، شهر، شعبه، کد پرسنلی بیمه، و نام کارگاه) را به‌دقت وارد کنید. پس از ثبت اطلاعات کارگاه، بازه‌های زمانی اشتغال در آن کارگاه را ثبت نمایید. برای هر بازه‌ی ثبت‌شده، سیستم به‌صورت خودکار سال‌های داخل بازه را محاسبه کرده و فیلدهایی برای وارد کردن دستمزد مشمول کسر حق بیمه در هر سال در اختیار شما قرار می‌دهد.در صورت نیاز، می‌توانید چندین کارگاه را تعریف و برای هرکدام به‌صورت جداگانه بازه‌ها و دستمزدهای مرتبط را وارد کنید. در پایین صفحه، مجموع سوابق اشتغال ثبت‌شده به‌صورت خودکار نمایش داده می‌شود. لطفاً قبل از ثبت نهایی، از صحت بازه‌های زمانی و دستمزدهای وارد شده اطمینان حاصل فرمایید.'} />
            </div>
            : null}



      {expertPensionRequestForm ?

        <div className="w-full">
          <ExpertPensionRequestForm admin={admin} webService={webService} des={des} id={id} />
        </div>

        : (expertAllRecords && webService) || (expertAllRecords && admin) ?

          <div className="w-full">
            <ExpertAllRecordsWithWebService />
          </div>

          : expertAllRecords && !webService && !admin ?

            <div className="w-full">
              <ExpertAllRecordsNoWebService />
            </div>

            : (expertPensionAmount && webService) || (expertPensionAmount && admin) ?

              <div className="w-full">
                <ExpertPensionAmount another={another} />
              </div>

              : expertPensionAmount && !webService ?

                expertPensionShift ?

                  <div className="w-full">
                    <ExpertPensionAmount another={another} />
                  </div>

                  :

                  <div className="w-full">
                    <ExpertPensionAmountInput setShift={setExpertPensionShift} />
                  </div>

                : expertLeftovers ?

                  <div className="w-full">
                    <ExpertAgents admin={admin} webService={webService} des={des} />
                  </div>

                  : null}

    </div>
  )
}

export default ExpertRequestsDetails;