import { MainInput, MainButton, MainTable, MainModal } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import Trash from "../../assets/icon/main/Trash";
import Pencil from "../../assets/icon/main/Pencil";
import Block from "../../assets/icon/main/Block";
import { useState } from "react";

const titleRow = ["ردیف", "نام و نام خانوادگی", "کدملی", "تاریخ تولد", "تلفن همراه", "عملیات"];

const MainAdminUserList = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showViewLogModal, setShowViewLogModal] = useState(false);

  const AddModalFunction = () => setShowAddModal(false);
  const DeleteModalFunction = () => setShowDeleteModal(false);
  const EditModalFunction = () => setShowEditModal(false);
  const BlockModalFunction = () => setShowBlockModal(false);
  const ViewLogModalFunction = () => setShowViewLogModal(false);
  const list = [
    {
      item1: "1",
      item2: "علی علیزاده",
      item3: "0020478569",
      item4: "1352/05/12",
      item5: "09120748639",
      item6: (
        <div className="flex justify-center space-x-2">
          <div
            className="relative group cursor-pointer"
            onClick={() => setShowDeleteModal(true)}
          >
            <div className="w-[38px] h-[38px] ml-2 rounded-full bg-trashBg flex justify-center items-center">
              <Trash />
            </div>
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
              حذف
            </div>
          </div>

          <div
            className="relative group cursor-pointer"
            onClick={() => setShowEditModal(true)}
          >
            <div className="w-[38px] h-[38px] rounded-full bg-backYellow flex justify-center items-center">
              <Pencil />
            </div>
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
              ویرایش
            </div>
          </div>

          <div
            className="relative group cursor-pointer"
            onClick={() => setShowBlockModal(true)}
          >
            <div className="w-[38px] h-[38px] rounded-full bg-blockBg flex justify-center items-center">
              <Block />
            </div>
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
              غیرفعال کردن
            </div>
          </div>

          <div
            className="relative group cursor-pointer"
            onClick={() => setShowViewLogModal(true)}
          >
            <div className="w-[38px] h-[38px] rounded-full bg-backBlue flex justify-center items-center">
              <DetailTableIcon />
            </div>
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
              مشاهده فعالیت
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
      <div className="w-full mb-[15px]">
        <div className="flex justify-between">
          <div className="w-[440px] ml-3">
            <MainInput
              search={true}
              holder={"جستجو بر اساس نام یا کدملی"}
              leftIcon={<SearchIcon />}
            />
          </div>

          <div className="flex">
            <div className="w-[120px]">
              <MainButton label={"+ تعریف کاربر"} onClickFunction={() => setShowAddModal(true)} />
            </div>
            <div className="w-[120px] mr-3">
              <MainButton label={"گزارش‌ گیری"} />
            </div>
          </div>
        </div>

        <div className="w-full my-[20px]">
          <MainTable center2={false} ic={false} list={list} titleRow={titleRow} />
        </div>
      </div>

      {showAddModal && (
        <MainModal
          big={false}
          title={"تعریف کاربر"}
          setShowModal={setShowAddModal}
          text={
            <>
              <div className="grid grid-cols-2 gap-2">
                {/* فیلدهای تعریف کاربر */}
                <div className="col-span-1 mb-2">
                  <MainInput label={"نام"} holder={"علی***"} necessary={true} />
                </div>
                <div className="col-span-1 mb-2">
                  <MainInput label={"نام خانوادگی"} holder={"امیری***"} necessary={true} />
                </div>
                <div className="col-span-1 mb-2">
                  <MainInput label={"کدملی"} holder={"******02"} necessary={true} />
                </div>
                <div className="col-span-1 mb-2">
                  <MainInput label={"تاریخ تولد"} holder={"1352/05/05"} necessary={true} />
                </div>
                <div className="col-span-1 mb-2">
                  <MainInput label={"شماره تلفن همراه"} holder={"ََ******091"} necessary={true} />
                </div>
                <div className="col-span-1 mb-2">
                  <MainInput label={"رمزعبور"} holder={"******"} necessary={true} />
                </div>
                <div className="col-span-1 mb-2">
                  <MainInput label={"تکرار رمزعبور"} holder={"******"} necessary={true} />
                </div>
              </div>
            </>
          }
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={AddModalFunction} label={"تعریف کاربر"} />
              </div>
            </div>
          }
        />
      )}

      {showDeleteModal && (
        <MainModal
          big={false}
          title={"حذف کاربر"}
          setShowModal={setShowDeleteModal}
          text={<p className="text-center">آیا از حذف این کاربر مطمئن هستید؟</p>}
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={DeleteModalFunction} label={"بله"} />
                
              </div>
              <div className="w-[140px] mr-2">
                <MainButton onClickFunction={DeleteModalFunction} red={true} label={"خیر"} />
                
              </div>
            </div>
          }
        />
      )}
       {showEditModal && (
        <MainModal
          big={false}
          title={"ویرایش کاربر"}
          setShowModal={setShowEditModal}
          text={
            <>
              <div className="grid grid-cols-2 gap-4">
                
                <div className="col-span-1 mb-2">
                  <div className="flex flex-col">
                    <span className="font-IRANYekanBold text-mainBlue">
                      نام
                    </span>
                    <div className="border-borderGray border px-2 h-[48px] mt-2 items-center align-middle flex rounded-[6px]">
                      <span className="font-IRANYekanMedium text-[14px]">
                        علی
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-2">
                <div className="flex flex-col">
                    <span className="font-IRANYekanBold text-mainBlue">
                      نام خانوادگی
                    </span>
                    <div className="border-borderGray border px-2 h-[48px] mt-2 items-center align-middle flex rounded-[6px]">
                      <span className="flex align-middle font-IRANYekanMedium text-[14px]">
                        علیزاده
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-2">
                <div className="flex flex-col">
                    <span className="font-IRANYekanBold text-mainBlue">
                      کدملی
                    </span>
                    <div className="border-borderGray border px-2 h-[48px] mt-2 items-center align-middle flex rounded-[6px]">
                      <span className="flex items-center font-IRANYekanMedium text-[14px]">
                        0027653456
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-2">
                <div className="flex flex-col">
                    <span className="font-IRANYekanBold text-mainBlue">
                      تاریخ تولد
                    </span>
                    <div className="border-borderGray border px-2 h-[48px] mt-2 items-center align-middle flex rounded-[6px]">
                      <span className="flex items-center font-IRANYekanMedium text-[14px]">
                        1352/08/12
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-2">
                <div className="flex flex-col">
                    <span className="font-IRANYekanBold text-mainBlue">
                      شماره تلفن همراه
                    </span>
                    <div className="border-borderGray border px-2 h-[48px] mt-2 items-center align-middle flex rounded-[6px]">
                      <span className="flex items-center font-IRANYekanMedium text-[14px]">
                        09126543456
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-2">
                <div className="flex flex-col">
                    <span className="font-IRANYekanBold text-mainBlue">
                      رمزعبور
                    </span>
                    <div className="border-borderGray border px-2 h-[48px] mt-2 items-center align-middle flex rounded-[6px]">
                      <span className="flex items-center font-IRANYekanMedium text-[14px]">
                        ******
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-2">
                <div className="flex flex-col">
                    <span className="font-IRANYekanBold text-mainBlue">
                      تکرار رمزعبور
                    </span>
                    <div className="border-borderGray border px-2 h-[48px] mt-2 items-center align-middle flex rounded-[6px]">
                      <span className="flex items-center font-IRANYekanMedium text-[14px]">
                        ****
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={EditModalFunction} label={"ویرایش کاربر"} />
              </div>
            </div>
          }
        />
      )}
         {showBlockModal && (
        <MainModal
          big={false}
          title={"غیرفعال کردن کاربر"}
          setShowModal={setShowBlockModal}
          text={<p className="text-center">آیا از غیرفعال سازی این کاربر مطمئن هستید؟</p>}
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={BlockModalFunction} label={"بله"} />
                
              </div>
              <div className="w-[140px] mr-2">
                <MainButton onClickFunction={BlockModalFunction} red={true} label={"خیر"} />
                
              </div>
            </div>
          }
        />
      )}
       {showViewLogModal && (
        <MainModal
          big={false}
          title={"لاگ کاربر"}
          setShowModal={setShowBlockModal}
          text={<p className="text-center">لاگ کاربر اینجا قرار می گیرد...</p>}
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={ViewLogModalFunction} label={"دانلود"} />
                
              </div>
              
            </div>
          }
        />
      )}
    </div>
  );
};

export default MainAdminUserList;
