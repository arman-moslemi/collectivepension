import {
    MainButton,
    MainExplanation,
    MainInput,
    MainTable,
    MainModal,
    MainSuccessToast,
  } from "..";
  import SearchIcon from "../../assets/icon/general/SearchIcon";
  import { useState, useEffect } from "react";
  
  const ExpertInsurancePremium = () => {
    const [list, setList] = useState([
      { item1: "1", item2: "1352", item3: "7%" },
      { item1: "2", item2: "1353", item3: "7%" },
      { item1: "3", item2: "1354", item3: "8.5%" },
      { item1: "4", item2: "1355", item3: "8.7%" },
      { item1: "5", item2: "1356", item3: "7.5%" },
    ]);
  
    const [filteredList, setFilteredList] = useState([...list]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      const filtered = list.filter((item) =>
        item.item2.includes(searchTerm.trim())
      );
      setFilteredList(filtered);
    }, [searchTerm, list]);
  
    const [yearList, setYearList] = useState([
      { id: 1, name: "1352" },
      { id: 2, name: "1353" },
      { id: 3, name: "1354" },
      { id: 4, name: "1355" },
      { id: 5, name: "1356" },
      { id: 6, name: "1357" },
    ]);
  
    const [selectedYear, setSelectedYear] = useState("");
    const [enteredRate, setEnteredRate] = useState("");
    const [newYear, setNewYear] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
  
    const titleRow = ["ردیف", "سال", "نرخ حق بیمه"];
  
    const handleAddRate = () => {
        const trimmedYear = selectedYear?.trim?.() || "";
        const trimmedRate = enteredRate?.trim?.() || "";
      
        if (!trimmedYear || !trimmedRate) {
          alert("لطفاً سال و نرخ حق بیمه را وارد کنید");
          return;
        }
      
        const isValidYear = /^\d{4}$/.test(trimmedYear);
        const isValidRate = /^\d+(\.\d+)?%?$/.test(trimmedRate);
      
        if (!isValidYear) {
          alert("سال وارد شده معتبر نیست");
          return;
        }
      
        if (!isValidRate) {
          alert("لطفاً نرخ حق بیمه را به‌درستی وارد کنید، مثلاً 8 یا 8.5");
          return;
        }
      
        const alreadyExists = list.some(item => item.item2 === trimmedYear);
        if (alreadyExists) {
          alert("برای این سال قبلاً نرخ ثبت شده است");
          return;
        }
      
        const updatedList = [
          ...list,
          {
            item1: (list.length + 1).toString(),
            item2: trimmedYear,
            item3: trimmedRate.endsWith('%') ? trimmedRate : trimmedRate + '%',
          },
        ]
          .sort((a, b) => parseInt(a.item2) - parseInt(b.item2))
          .map((item, index) => ({
            ...item,
            item1: (index + 1).toString(),
          }));
      
        setList(updatedList);
        setSelectedYear("");
        setEnteredRate("");
        setShowToast(true);
      };
      
  
    const addNewYearToList = () => {
      const trimmedYear = newYear.trim();
      const isValidYear = /^\d{4}$/.test(trimmedYear);
      if (!isValidYear) {
        alert("لطفاً یک سال معتبر 4 رقمی وارد کنید");
        return false;
      }
  
      if (yearList.some((y) => y.name === trimmedYear)) {
        alert("این سال قبلاً اضافه شده است");
        return false;
      }
  
      const updatedList = [...yearList, { id: yearList.length + 1, name: trimmedYear }].sort(
        (a, b) => parseInt(a.name) - parseInt(b.name)
      );
  
      setYearList(updatedList);
      setNewYear("");
      setShowModal(false);
      setShowToast(true);
      return true;
    };
  
    return (
      <>
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
          <MainExplanation text="کارشناس محترم، لطفاً برای هر سال، نرخ حق بیمه را به‌صورت دقیق ثبت نمایید. توجه داشته باشید با آغاز هر سال جدید، ثبت نرخ مربوط به آن سال الزامی است. همچنین در صورتی که سال مورد نظر شما در لیست وجود نداشت، می‌توانید با استفاده از دکمه 'افزودن سال'، سال جدید را تعریف و سپس نرخ مربوطه را ثبت نمایید." />
  
          <div className="w-[80%] mx-auto my-5 xl:w-full">
            <div className="grid grid-cols-8 items-center gap-2">
              <div className="col-span-3 xl:col-span-8">
                <MainInput
                  label="جستجو"
                  search={true}
                  holder="جستجو بر اساس سال "
                  leftIcon={<SearchIcon />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
  
              <div className="col-span-3 xl:col-span-8">
                <div className="flex xs:flex-wrap">
                <MainInput
  listBoxM1={true}
  label="انتخاب سال"
  listItems={yearList}
  value={selectedYear}
  onChange={(e) => {
    const val = e?.target?.value ?? e;
    setSelectedYear(val);
  }}
/>

                  <div className="mr-2 xs:mr-0 xs:mt-2">
                    <MainInput
                      label="نرخ حق بیمه"
                      holder="% نرخ حق بیمه"
                      value={enteredRate}
                      onChange={(e) => setEnteredRate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
  
              <div className="col-span-2 xl:col-span-8">
                <div className="flex justify-end b1115:justify-center mt-7 mr-2 flex-wrap xs:flex-wrap">
                  <div className="w-[80px]">
                    <MainButton label="ثبت" onClickFunction={handleAddRate} />
                  </div>
                  <div
                    onClick={() => setShowModal(true)}
                    className="border-b border-dashed border-buttonBlue w-[100px] text-center mr-4 xs:mr-2 hover:cursor-pointer"
                  >
                    <span className="text-[15px] text-buttonBlue font-IRANYekanBold">
                      افزودن سال
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="my-5 w-[30%] xl:w-[80%] mx-auto max-h-[400px] ">
              <MainTable
              record2={false}
              record3={false}
              record1={false}
                center1={false}
                ic={false}
                list={filteredList}
                titleRow={titleRow}
              />
            </div>
          </div>
        </div>
  
        {showModal && (
          <MainModal
            big={false}
            value={newYear}
            onChange={(e) => setNewYear(e.target.value)}
            title="افزودن سال"
            setShowModal={() => setShowModal(false)}
            text={
              <div>
                <MainInput
                  label="افزودن سال جدید"
                  holder="مثلا 1352"
                  value={newYear}
                  onChange={(e) => setNewYear(e.target.value)}
                />
              </div>
            }
            modalButton={
              <MainButton
                label="ثبت"
                onClickFunction={() => {
                  addNewYearToList();
                }}
              />
            }
          />
        )}
  
        <MainSuccessToast
          message="عملیات با موفقیت انجام شد!"
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      </>
    );
  };
  
  export default ExpertInsurancePremium;
  