import { useState, useEffect } from "react";
import { MainInput, MainButton, MainTable, MainModal } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import { axiosReq } from "../../commons/axiosReq";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import Trash from "../../assets/icon/main/Trash";
import Pencil from "../../assets/icon/main/Pencil";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Block from "../../assets/icon/main/Block";
import UnBlock from "../../assets/icon/main/UnBlock";
import { apiAsset } from "../../commons/inFormTypes";
const listItems = [
  {
    id: 1,
    name: 'اول',
  },
  {
    id: 2,
    name: 'دوم',
  },
  {
    id: 3,
    name: 'سوم',
  },
  {
    id: 4,
    name: 'چهارم',
  },
]
const titleRow = ["ردیف", "نام و نام خانوادگی", "نام صندوق", "نام کاربری", "سمت", "تلفن همراه", "عملیات"];


const MainAdminAdminList = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
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
  const [rawAdminList, setRawAdminList] = useState([]);
  const [editAdminData, setEditAdminData] = useState(null);
  const [blockResponse, setBlockResponse] = useState("");
  const [reportResponse, setReportResponse] = useState("");

  const blockedAdmin = rawAdminList.find(admin => admin.adminId === blockId);


  useEffect(() => {
    const fetchInsurances = async () => {
      try {
        const response = await axiosReq("Insurances/GetInsurances", "get");
        if (response?.status === 200 && Array.isArray(response.data)) {
          setInsuranceList(
            response.data.map(item => ({
              id: item.insuranceId,
              name: item.name,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching insurances:", error);
      }
    };
    fetchInsurances();
  }, []);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      if (showEdit && editId) {
        const found = rawAdminList.find(item => item.adminId === editId);
        console.log(found)


        if (found)
          setEditAdminData(found);
      }
    };
    fetchAdminDetails();
  }, [showEdit, editId, rawAdminList]);



  const getProtests = async () => {
    try {

      const response = await axiosReq("SuperAdmins/GetAdmins?page=" + page + "&&pageSize=" + row + "&&search=" + name, "get");
      console.log("Response from GetAdmins API:");
      console.log(response)

      if (response?.status === 200 || response?.status === 204) {
        var prot = []
        setCount(response.data?.count)
        const rawList = response.data?.data || [];
        setRawAdminList(rawList); // ✅ Store full data
        response.data?.data?.map((item, index) => {
          console.log(88)
          console.log(item)
          console.log(88)
          prot.push({
            item1: index + 1,
            item2: item.fullName,
            item3: item.insuranceName,
            item4: item.username,
            item5: item.position,
            item6: item.mobileNumber,
            item7: <div className="flex justify-center">

              <div className="relative group hover:cursor-pointer" onClick={() => { setShowEdit(true); setEditId(item.adminId); }}>
                <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backYellow flex justify-center items-center ml-1'><Pencil /></div>
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-10 whitespace-nowrap">
                  ویرایش
                </div>
              </div>
              <div className="relative group hover:cursor-pointer" onClick={() => { setShowBlock(true); setBlockId(item.adminId); }} >
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
              {/* <div className="relative group hover:cursor-pointer" onClick={() => handleAdminReport(item.adminId)} >
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

  const AddModalFunction = () => {
    setShowAddModal(false);
  }
  let navigate = useNavigate();

  const adminSchema = Yup.object().shape({

    fund: Yup.number().min(1, 'لطفا صندوق   را انتخاب کنید').required('لطفا صندوق   را انتخاب کنید'),
    firstName: Yup.string().required("نام الزامی است"),
    lastName: Yup.string().required("نام خانوادگی الزامی است"),
    username: Yup.string().required("نام کاربری الزامی است"),
    password: Yup.string().required("رمزعبور الزامی است"),
    position: Yup.string().required("سمت الزامی است"),
    mobile: Yup.string().required("تلفن همراه الزامی است"),
  });
  const adminSchema2 = Yup.object().shape({

    firstName: Yup.string().required("نام الزامی است"),
    lastName: Yup.string().required("نام خانوادگی الزامی است"),
    username: Yup.string().required("نام کاربری الزامی است"),
    position: Yup.string().required("سمت الزامی است"),
    mobile: Yup.string().required("تلفن همراه الزامی است"),
  });

  const handleSubmit = async (values, { setSubmitting, validationSchema }) => {
    console.log("Form values:", values);
    try {
      const response = await axiosReq("SuperAdmins/CreateAdmin", "post", {
        insuranceId: values.fund,
        name: values.firstName,
        family: values.lastName,
        username: values.username,
        password: values.password,
        position: values.position,
        mobileNumber: values.mobile,
      });
      setCreateAdminResponse(response.data);
      alert(createAdminResponse);
      if (response?.status === 200) {
        setShowAddModal(false);
        getProtests();
        // resetForm();
      }
    } catch (error) {
      console.error("Error creating admin:", error);
    }
    setSubmitting(false);
  }

  const handleEditSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axiosReq("SuperAdmins/UpdateAdmin", "post", {
        adminId: editId,
        name: values.firstName,
        family: values.lastName,
        username: values.username,
        password: values.password, // You can skip sending this if blank
        position: values.position,
        mobileNumber: values.mobile,
      });

      if (response?.status === 200) {
        alert("ادمین با موفقیت ویرایش شد.");
        setShowEdit(false);
        setEditAdminData(null);
        getProtests(); // refresh admin list
      } else {
        alert("خطا در ویرایش ادمین");
      }
    } catch (error) {
      console.error("Error editing admin:", error);
      alert("خطایی رخ داده است.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBlock = async () => {
    try {
      const response = await axiosReq("SuperAdmins/AdminLimitation?adminId=" + blockId, "post", {
        AdminId: blockId,
      });
      // setBlockResponse(response.data);
      alert(response.data);
      if (response?.status === 200) {
        setShowBlock(false);
        getProtests();
      }
    } catch (error) {
      console.error("Error blocking admin:", error);
    }
  }
  const handleAdminReport = async (id) => {
    try {
      const response = await axiosReq("SuperAdmins/GetAdminReport?adminId="+id, "get");
      setReportResponse(response.data);
      alert("ok" + response.data);
      if (response?.status === 200) {
        getProtests();
      }
    } catch (error) {
      console.error("Error reporting admin:", error);
    }
  }

  const getExcel = async () => {
    try {

      const response = await axiosReq("SuperAdmins/GetAdminsExcel?search=" + name, "get");
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
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
      <div className="w-full mb-[15px]">
        <div className="grid grid-cols-12 gap-4 justify-between">
          <div className='col-span-8 md:col-span-12 w-full ml-3'><MainInput onChange={(e) => setName(e.target.value)} search={true} holder={'جستجو بر اساس نام یا کدملی'} leftIcon={<SearchIcon />} /></div>

          <div className="flex col-span-4 mt-2 md:col-span-12 md:justify-center">
            <div className="w-[120px]">
              <MainButton label={'+ تعریف ادمین'} onClickFunction={() => setShowAddModal(true)} />
            </div>
            <div className="w-[120px] mr-3">
              <MainButton onClickFunction={() => getExcel()} label={'گزارش‌ گیری'} />
            </div>
          </div>

        </div>
        <div className='w-full my-[20px]'>
          <MainTable center2={false} record1={true} record2={true} record3={true} record4={false} ic={false} list={data} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow} />
        </div>
      </div>

      {showAddModal ? (
        <MainModal
          big={false}
          title={"تعریف ادمین"}
          setShowModal={setShowAddModal}
          text={
            <Formik
              initialValues={{
                fund: 0,
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                position: "",
                mobile: "",
              }}
              validationSchema={adminSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values, errors, touched }) => (
                <Form>
                  <div className="mb-4 flex justify-between items-center">
                    <span className="font-IRANYekanBold min-w-[110px] text-[15px] text-black">
                      انتخاب صندوق
                    </span>
                    <div className="w-full">
                      <MainInput
                        listBox={true}
                        listItems={insuranceList}
                        necessary={false}
                        // For display, pass the selected object (or "" if not selected)
                        value={insuranceList.find(i => String(i.id) === String(values.fund)) || ""}
                        // On change, always store only the id (as string) in Formik
                        onChange={(value) =>
                          setFieldValue("fund", value.id)}
                        error={errors.fund && touched.fund}
                        errorText={errors.fund}

                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1">
                      <div className="mb-2">
                        <MainInput
                          label={"نام"}
                          holder={"Ali***"}
                          necessary={true}
                          value={values.firstName}
                          onChange={e => setFieldValue("firstName", e.target.value)}
                        />
                        <ErrorMessage name="firstName" component="div" className="text-redError text-xs mt-1" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-2">
                        <MainInput
                          label={"نام خانوادگی"}
                          holder={"Ali***"}
                          necessary={true}
                          value={values.lastName}
                          onChange={e => setFieldValue("lastName", e.target.value)}
                        />
                        <ErrorMessage name="lastName" component="div" className="text-redError text-xs mt-1" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-2">
                        <MainInput
                          label={"نام کاربری"}
                          holder={"Aalizadeh"}
                          necessary={true}
                          value={values.username}
                          onChange={e => setFieldValue("username", e.target.value)}
                        />
                        <ErrorMessage name="username" component="div" className="text-redError text-xs mt-1" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-2">
                        <MainInput
                          label={"رمزعبور"}
                          holder={"ََAa****"}
                          necessary={true}
                          value={values.password}
                          onChange={e => setFieldValue("password", e.target.value)}
                        />
                        <ErrorMessage name="password" component="div" className="text-redError text-xs mt-1" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-2">
                        <MainInput
                          label={"سمت"}
                          holder={"مدیرعامل"}
                          necessary={true}
                          value={values.position}
                          onChange={e => setFieldValue("position", e.target.value)}
                        />
                        <ErrorMessage name="position" component="div" className="text-redError text-xs mt-1" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-2">
                        <MainInput
                          label={"تلفن همراه"}
                          holder={"0912******"}
                          necessary={true}
                          value={values.mobile}
                          onChange={e => setFieldValue("mobile", e.target.value)}
                        />
                        <ErrorMessage name="mobile" component="div" className="text-redError text-xs mt-1" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center mt-4">
                    <div className="w-[140px]">
                      <MainButton type="submit"
                        label={"تعریف ادمین"}
                      //  disabled={isSubmitting} 
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          }
        />
      ) : null}


      {showEdit && editAdminData ? (
        <MainModal
          big={false}
          title={'ویرایش ادمین'}
          setShowModal={() => { setShowEdit(false); setEditAdminData(null); }}
          text={
            <Formik
              initialValues={{
                firstName: editAdminData.name || "",
                lastName: editAdminData.family || "",
                username: editAdminData.username || "",
                password: "", // leave empty unless changed
                position: editAdminData.position || "",
                mobile: editAdminData.mobileNumber || "",
              }}
              validationSchema={adminSchema2}
              onSubmit={handleEditSubmit}
              enableReinitialize
            >
              {({ setFieldValue, values, errors, touched, isSubmitting }) => (
                <Form>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 mb-2">
                      <MainInput
                        label={"نام"}
                        holder={"Ali***"}
                        necessary={true}
                        value={values.firstName}
                        onChange={e => setFieldValue("firstName", e.target.value)}
                      />
                      <ErrorMessage name="firstName" component="div" className="text-redError text-xs mt-1" />
                    </div>

                    <div className="col-span-1 mb-2">
                      <MainInput
                        label={"نام خانوادگی"}
                        holder={"Ali***"}
                        necessary={true}
                        value={values.lastName}
                        onChange={e => setFieldValue("lastName", e.target.value)}
                      />
                      <ErrorMessage name="lastName" component="div" className="text-redError text-xs mt-1" />
                    </div>

                    <div className="col-span-1 mb-2">
                      <MainInput
                        label={"نام کاربری"}
                        holder={"Aalizadeh"}
                        necessary={true}
                        value={values.username}
                        onChange={e => setFieldValue("username", e.target.value)}
                      />
                      <ErrorMessage name="username" component="div" className="text-redError text-xs mt-1" />
                    </div>

                    <div className="col-span-1 mb-2">
                      <MainInput
                        label={"رمزعبور"}
                        holder={"******"}
                        necessary={false}
                        value={values.password}
                        onChange={e => setFieldValue("password", e.target.value)}
                      />
                      <ErrorMessage name="password" component="div" className="text-redError text-xs mt-1" />
                    </div>

                    <div className="col-span-1 mb-2">
                      <MainInput
                        label={"سمت"}
                        holder={"مدیرعامل"}
                        necessary={true}
                        value={values.position}
                        onChange={e => setFieldValue("position", e.target.value)}
                      />
                      <ErrorMessage name="position" component="div" className="text-redError text-xs mt-1" />
                    </div>

                    <div className="col-span-1 mb-2">
                      <MainInput
                        label={"تلفن همراه"}
                        holder={"0912******"}
                        necessary={true}
                        value={values.mobile}
                        onChange={e => setFieldValue("mobile", e.target.value)}
                      />
                      <ErrorMessage name="mobile" component="div" className="text-redError text-xs mt-1" />
                    </div>
                  </div>

                  <div className="w-full flex justify-center mt-4">
                    <div className="w-[140px]">
                      <MainButton type="submit" label={"ویرایش ادمین"} disabled={isSubmitting} />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          }
        />
      ) : null}
      {showBlock && blockedAdmin ? (
        <MainModal
          big={false}
          title={blockedAdmin.isLimited ? "فعالسازی ادمین" : "غیرفعالسازی ادمین"}
          setShowModal={() => setShowBlock(false)}
          text={
            blockedAdmin.isLimited
              ? "آیا از فعالسازی ادمین انتخاب شده اطمینان دارید؟"
              : "آیا از غیرفعالسازی ادمین انتخاب شده اطمینان دارید؟"
          }
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[140px]">
                <MainButton onClickFunction={handleBlock} label={"بله"} />
              </div>
              <div className="w-[140px] mr-2">
                <MainButton
                  onClickFunction={() => setShowBlock(false)}
                  red={true}
                  label={"خیر"}
                />
              </div>
            </div>
          }
        />
      ) : null}
    </div>
  )
}

export default MainAdminAdminList;