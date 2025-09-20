import { MainInput, MainButton, MainTable, MainModal, MainChekbox } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { axiosReq } from "../../commons/axiosReq";
import Pencil from "../../assets/icon/main/Pencil";
import Block from "../../assets/icon/main/Block";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import UnBlock from "../../assets/icon/main/UnBlock";
import { apiAsset } from "../../commons/inFormTypes";

const titleRow = ["ردیف", "نام و نام خانوادگی", "کدملی", "تاریخ تولد", "تلفن همراه", "عملیات"];

const MainAdminUserList = () => {

  const [showDelete, setShowDelete] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [row, setRow] = useState(10);
  const [count, setCount] = useState();
  const [data, setData] = useState([]);
  const [insuranceList, setInsuranceList] = useState([]);
  const [createAdminResponse, setCreateAdminResponse] = useState("");
  const [editId, setEditId] = useState("");
  const [blockId, setBlockId] = useState("");
  const [rawUserList, setRawUserList] = useState([]);
  const [reportResponse, setReportResponse] = useState("");
  const [editUserData, setEditUserData] = useState(null);
  const [blockIsAgent, setBlockIsAgent] = useState("");
  const [editIsAgent, setEditIsAgent] = useState("");
  const [blockIsLimited, setBlockIsLimited] = useState("");



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

  const blockedUser = rawUserList.find(user => user.id === blockId);

  const getProtests = async () => {
    try {

      const response = await axiosReq("SuperAdmins/GetAllUsers?page=" + page + "&&pageSize=" + row + "&&search=" + name, "get");
      console.log("Response from GetAllUsers API:");
      console.log(response)

      if (response?.status === 200 || response?.status === 204) {
        var prot = []
        setCount(response.data?.count)
        const rawList = response.data?.data || [];
        setRawUserList(rawList); // ✅ Store full data
        response.data?.data?.map((item, index) => {
          console.log(88)
          console.log(item)
          console.log(88)
          prot.push({
            item1: index + 1,
            item2: item.fullName,
            item3: item.nationalCode,
            item4: item.birthDate,
            item5: item.mobileNumber,
            item6: <div className="flex justify-center">

              <div className="relative group hover:cursor-pointer" onClick={() => { setShowEditModal(true); setEditId(item.id); setEditIsAgent(item.isAgent); }}>
                <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backYellow flex justify-center items-center ml-1'><Pencil /></div>
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                  ویرایش
                </div>
              </div>
              <div className="relative group hover:cursor-pointer" onClick={() => { setShowBlockModal(true); setBlockId(item.id); setBlockIsAgent(item.isAgent); setBlockIsLimited(item.isLimited); }} >
                <div className={`w-[38px] h-[38px] mx-auto rounded-full ${item.isLimited ? 'bg-blockBg' : 'bg-backRed'}  flex justify-center items-center ml-1`}>{item.isLimited ? <UnBlock /> : <Block />}</div>
                {item.isLimited ?
                  <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                    فعال کردن
                  </div>
                  :
                  <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                    غیرفعال کردن
                  </div>
                }
              </div>
              {/* download log is here */}
              {/* <div className="relative group hover:cursor-pointer" onClick={() => handleUserReport(item.id, item.isAgent)} >
                <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center ml-1'><DetailTableIcon /></div>
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                  مشاهده
                </div>
              </div> */}
            </div>,

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
  }, [name, page, row]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (showEditModal && editId) {
        const found = rawUserList.find(item => item.id === editId);
        console.log(found)
        console.log('slm');


        if (found)
          setEditUserData(found);
      }
    };
    fetchUserDetails();
  }, [showEditModal, editId, rawUserList]);


  const userSchema = Yup.object().shape({
    nationalCode: Yup.string().required("کدملی الزامی است"),
    birthDate: Yup.string().required("تاریخ تولد الزامی است"),
    mobile: Yup.string().required("شماره تلفن همراه الزامی است"),
    password: Yup.string().required("رمزعبور الزامی است"),
    isAgent: Yup.boolean(),
    agentNationalCode: Yup.string().when("isAgent", {
      is: true,
      then: (schema) => schema.required("کدملی متوفی الزامی است"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    agentBirthDate: Yup.string().when("isAgent", {
      is: true,
      then: (schema) => schema.required("تاریخ تولد متوفی الزامی است"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
  });
  const userEditSchema = Yup.object().shape({
    mobile: Yup.string().required("شماره تلفن همراه الزامی است"),
    password: Yup.string(), // not required
  });


  const handleAddUser = async (values, { setSubmitting, resetForm }) => {
    try {
      await axiosReq("SuperAdmins/CreateUser", "post", {
        nationalCode: values.nationalCode,
        birthDate: values.birthDate,
        mobileNumber: values.mobile,
        password: values.password,
        deceasedNationalCode: values.isAgent ? values.agentNationalCode : undefined,
        deceasedBirthDate: values.isAgent ? values.agentBirthDate : undefined,
      });
      setShowAddModal(false);
      getProtests();
      resetForm();
    } catch (error) {
      console.error("Error creating user:", error);
    }
    setSubmitting(false);
  };

  const handleEditUser = async (values, { setSubmitting }) => {
    try {
      await axiosReq(`SuperAdmins/UpdateUser`, "post", {
        id: editId,
        isAgent: editIsAgent,
        mobileNumber: values.mobile,
        password: values.password || "", // optional
      });
      setShowEditModal(false);
      getProtests(); // Refresh list
    } catch (error) {
      console.error("Error updating user:", error);
    }
    setSubmitting(false);
  };

  const handleBlock = async (id, isAgent) => {
    try {
      const response = await axiosReq("SuperAdmins/UserLimitation?Id=" + id + "&isAgent=" + isAgent, "post");
      // setBlockResponse(response.data);
      alert(response.data);
      if (response?.status === 200) {
        setShowBlockModal(false);
        getProtests();
      }
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  }



  const getExcel = async () => {
    try {

      const response = await axiosReq("SuperAdmins/GetAllUsersExcel?search=" + name, "get");
      console.log(response)
      if (response?.status === 200 || response?.status === 204) {
        alert("موفقیت آمیز")
        window.open(apiAsset + response.data, '_blank')

      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUserReport = async (id, isAgent) => {
    try {
      const response = await axiosReq("SuperAdmins/GetUserReport", "get", {
        id: id,
        isAgent: isAgent,
      });
      setReportResponse(response.data);
      // alert("ok" + reportResponse);
      if (response?.status === 200) {
        getProtests();
      }
    } catch (error) {
      console.error("Error reporting user:", error);
    }
  }

  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
      <div className="w-full mb-[15px]">
        <div className="flex justify-between">
          <div className="w-[440px] ml-3">
            <MainInput
              search={true}
              onChange={(e) => setName(e.target.value)}
              holder={"جستجو بر اساس نام یا کدملی"}
              leftIcon={<SearchIcon />}
            />
          </div>

          <div className="flex">
            <div className="w-[120px]">
              <MainButton label={"+ تعریف کاربر"} onClickFunction={() => setShowAddModal(true)} />
            </div>
            <div className="w-[120px] mr-3">
              <MainButton onClickFunction={() => getExcel()} label={"گزارش‌ گیری"} />
            </div>
          </div>
        </div>

        <div className="w-full my-[20px]">
          <MainTable center2={false} ic={false} list={data} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow} />
        </div>
      </div>

      {showAddModal && (
        <MainModal
          big={false}
          title={"تعریف کاربر"}
          setShowModal={setShowAddModal}
          text={
            <Formik
              initialValues={{
                nationalCode: "",
                birthDate: "",
                mobile: "",
                password: "",
                isAgent: false,
                agentNationalCode: "",
                agentBirthDate: "",
              }}
              validationSchema={userSchema}
              onSubmit={handleAddUser}
            >
              {({ isSubmitting, setFieldValue, values, errors, touched }) => (
                <Form>
                  <div className="grid grid-cols-10 gap-2">
                    <div className="col-span-4 mb-2">
                      <MainInput
                        label={"کدملی"}
                        holder={"******02"}
                        necessary={true}
                        value={values.nationalCode}
                        onChange={e => setFieldValue("nationalCode", e.target.value)}
                      />
                      {touched.nationalCode && errors.nationalCode && (
                        <div className="text-errorRed text-xs mt-1">{errors.nationalCode}</div>
                      )}
                    </div>

                    <div className="col-span-4 mb-2">
                      <MainInput
                        label={"تاریخ تولد"}
                        holder={"1352/05/05"}
                        necessary={true}
                        value={values.birthDate}
                        onChange={value => setFieldValue("birthDate", value)}
                        date={true}
                      />
                      {touched.birthDate && errors.birthDate && (
                        <div className="text-errorRed text-xs mt-1">{errors.birthDate}</div>
                      )}
                    </div>
                    <div className={`col-span-2 ${(touched.nationalCode && errors.nationalCode) || (touched.birthDate && errors.birthDate) ? 'mb-7' : 'mb-2'}  flex items-end`}>
                      <MainButton label={"استعلام"} />
                    </div>
                    <div className="col-span-5 mb-2">
                      <MainInput
                        label={'نام'}
                        disable={true}
                      />
                    </div>
                    <div className="col-span-5 mb-2">
                      <MainInput
                        label={'نام خانوادگی'}
                        disable={true}
                      />
                    </div>

                    <div className="col-span-5 mb-2">
                      <MainInput
                        label={"شماره تلفن همراه"}
                        holder={"ََ******091"}
                        necessary={true}
                        value={values.mobile}
                        onChange={e => setFieldValue("mobile", e.target.value)}
                      />
                      {touched.mobile && errors.mobile && (
                        <div className="text-errorRed text-xs mt-1">{errors.mobile}</div>
                      )}
                    </div>

                    <div className="col-span-5 mb-3">
                      <MainInput
                        label={"رمزعبور"}
                        holder={"******"}
                        necessary={true}
                        value={values.password}
                        onChange={e => setFieldValue("password", e.target.value)}
                      />
                      {touched.password && errors.password && (
                        <div className="text-errorRed text-xs mt-1">{errors.password}</div>
                      )}
                    </div>

                    <div className="col-span-10 mb-3">
                      <MainChekbox
                        label={"این کاربر نماینده متوفی است."}
                        checked={values.isAgent}
                        onChange={e => {
                          const checked = e.target.checked;
                          setFieldValue("isAgent", checked);
                          if (!checked) {
                            setFieldValue("agentNationalCode", "");
                            setFieldValue("agentBirthDate", "");
                          }
                        }}
                      />
                    </div>

                    {values.isAgent && (
                      <>
                        <div className="col-span-5 mb-2">
                          <MainInput
                            label={"کدملی متوفی"}
                            holder={"******02"}
                            necessary={true}
                            value={values.agentNationalCode}
                            onChange={e => setFieldValue("agentNationalCode", e.target.value)}
                          />
                          {touched.agentNationalCode && errors.agentNationalCode && (
                            <div className="text-errorRed text-xs mt-1">{errors.agentNationalCode}</div>
                          )}
                        </div>

                        <div className="col-span-5 mb-2">
                          <MainInput
                            label={"تاریخ تولد متوفی"}
                            holder={"1352/05/05"}
                            necessary={true}
                            value={values.agentBirthDate}
                            onChange={value => setFieldValue("agentBirthDate", value)}
                            date={true}
                          />
                          {touched.agentBirthDate && errors.agentBirthDate && (
                            <div className="text-errorRed text-xs mt-1">{errors.agentBirthDate}</div>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="w-full flex justify-center mt-4">
                    <div className="w-[140px]">
                      <MainButton type="submit" label={"تعریف کاربر"} disabled={isSubmitting} />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          }
        />
      )}



      {showEditModal && editUserData && (
        <MainModal
          big={false}
          title={"ویرایش کاربر"}
          setShowModal={setShowEditModal}
          text={
            <Formik
              enableReinitialize
              initialValues={{
                mobile: editUserData.mobileNumber || "",
                password: "",
              }}
              validationSchema={userEditSchema}
              onSubmit={handleEditUser}
            >
              {({ values, setFieldValue, isSubmitting, touched, errors }) => (
                <Form>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 mb-2">
                      <MainInput
                        label={"شماره تلفن همراه"}
                        holder={"ََ******091"}
                        necessary={true}
                        value={values.mobile}
                        onChange={e => setFieldValue("mobile", e.target.value)}
                        error={touched.mobile && errors.mobile}
                      />
                      {touched.mobile && errors.mobile && (
                        <div className="text-errorRed text-xs mt-1">{errors.mobile}</div>
                      )}
                    </div>
                    <div className="col-span-1 mb-2">
                      <MainInput
                        label={"رمزعبور"}
                        holder={"******"}
                        necessary={false}
                        value={values.password}
                        onChange={e => setFieldValue("password", e.target.value)}
                        error={touched.password && errors.password}
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center mt-4">
                    <div className="w-[140px]">
                      <MainButton type="submit" label={"ویرایش کاربر"} disabled={isSubmitting} />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          }
        />
      )}

      {showBlockModal ? (
        <MainModal
          big={false}
          title={blockIsLimited ? "فعالسازی ادمین" : "غیرفعالسازی ادمین"}
          setShowModal={() => setShowBlockModal(false)}
          text={
            blockIsLimited
              ? "آیا از فعالسازی ادمین انتخاب شده اطمینان دارید؟"
              : "آیا از غیرفعالسازی ادمین انتخاب شده اطمینان دارید؟"
          }
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={() => handleBlock(blockId, blockIsAgent)} label={"بله"} />
              </div>
              <div className="w-[140px] mr-2">
                <MainButton
                  onClickFunction={() => setShowBlockModal(false)}
                  red={true}
                  label={"خیر"}
                />
              </div>
            </div>
          }
        />
      ) : null}
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
