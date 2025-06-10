import React, { useCallback, useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
// import { endpoint } from "@/src/config";
// import Button from "./Button";
import Styles from "./Styles/ImageUpload..module.css";
import { apiUrl } from "../../commons/inFormTypes";
import axios from "axios";
// import { Typography } from '@mui/material';

const UploadFile = (props) => {
  const [previewUrl, setPreviewUrl] = useState(props.prev);
  // console.log(2222222);
  // console.log(props.prev);
  const [file, setFile] = useState();
  const [imageClick, setImageClick] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    setPreviewUrl(props.prev);
  }, [props.prev]);

  useEffect(() => {
    if (previewUrl) {
      if (props.checkUrl) {
        props.checkUrl(previewUrl.includes("undefined"));
      }
    }
  }, [previewUrl]);

  useEffect(() => {
    if (props.deleteImage === true) {
      setPreviewUrl("undefined");
    }
  }, [props.deleteImage]);

  useEffect(() => {
    if (!file) {
      return;
    }
    setPreviewUrl(props.prev);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  const onDrop = useCallback(async (acceptedFiles) => {
    const formData = new FormData();
    console.log(acceptedFiles[0].name.split('.')[1])
    // formData.append(
    //   "operations",
    //   '{ "query": "mutation ($file: Upload!,$imageAlt:String!) { createImage(image:{file: $file, alt:$imageAlt}) { id , url,alt } }", "variables": { "file": null ,"imageAlt":"imageAlt"} }'
    // );
    // formData.append("map", '{ "0": ["variables.file"]}');
    // formData.append("0", acceptedFiles[0]);

    // fetch(apiUrl+"Organizations/PostSingleFile", {
    //   method: "POST",
    //   body: formData,
    //   redirect: "follow",
    // },{
    //     headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // })
    //   .then((result) => result.json())
    //   .then((data) => {
    //     console.log("FormData", data);
    //     console.log(data?.data?.createImage);
    //     props.img(data?.data?.createImage?.id);
    //   });
    if (acceptedFiles[0].size < 1000001) {
      // if (acceptedFiles[0].name.split('.')[1] == "pdf") {
        setFile(acceptedFiles[0]);
        console.log(acceptedFiles[0])
        formData.append("FileDetails", acceptedFiles[0]);
        // formData.append("FileTypeId", props.FileTypeID);
        // formData.append("OrganizationId", props.OrganizationID);

       const dataFile= await axios.post(apiUrl + "Admins/UploadPhoto", formData, {
      //  const dataFile= await axios.post("https://api.amirhosseinmofid.ir/api/Organizations/UploadPhoto", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + props.token,
          }
          ,
        });
        if (dataFile?.status == 200 || dataFile?.status == 204 || dataFile?.status == 201) {
          // const pieces = dataFile?.data?.split('/')
          console.log(dataFile?.data)
          props.setPhoto(dataFile?.data)
          alert("فایل با موفقیت آپلود شد")
          // props.setFiles(true)
         }
         else {
           alert("آپلود فایل با خطا شد")
   
         }
      
    }
    else {
      props.setTitle("حجم باید کمتر از ۵۰۰kb باشد")
      props.setOpen(true)

    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  useEffect(() => {
    if (props.editdetect && imageClick === true) {
      props.editdetect(false);
    }
  }, [previewUrl]);

  return (
    <>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive && "isActive"} `}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          // <p>Drag 'n' drop some files here, or click to select files</p>
          // <a  style={{
          //   borderRadius:50,
          //   marginBottom:10
          // }}>choose file</a>
          <div
            className={`${Styles["image-upload__preview"]} bg-backGray cursor-pointer rounded-full border-[1px] border-dashed border-darkGray ${props.small? 'w-[346px]' : 'w-[463px]'} h-[36px]`}
            style={{ display: 'flex', flexDirection: 'column' }}
          // onClick={pickImageHandler}
          >
            {
              !previewUrl ?
                <div className="px-5 h-full flex items-center">
                    <div className="flex items-center">
                        <svg width="15" height="15" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 2C28 0.89543 27.1046 0 26 0C24.8954 0 24 0.89543 24 2V36.1613C23.1396 35.2881 22.1167 34.0027 20.6281 32.1253L16.9005 27.4241C16.2142 26.5586 14.9563 26.4132 14.0908 27.0995C13.2252 27.7858 13.0799 29.0437 13.7662 29.9092L17.5695 34.706C18.9913 36.4993 20.1646 37.9791 21.2147 39.0333C22.2923 40.1151 23.4884 41.0118 25.0169 41.2554C25.3425 41.3072 25.671 41.3333 26 41.3333C26.329 41.3333 26.6575 41.3072 26.9831 41.2554C28.5116 41.0118 29.7077 40.1151 30.7853 39.0333C31.8354 37.9791 33.0087 36.4993 34.4305 34.706L38.2338 29.9092C38.9201 29.0437 38.7748 27.7858 37.9093 27.0995C37.0437 26.4132 35.7858 26.5585 35.0995 27.4241L31.3719 32.1253C29.8833 34.0027 28.8604 35.2881 28 36.1613V2Z" fill="#7b7b7d" />
                  <path d="M48.9334 22.1322C48.2701 21.249 47.0163 21.0708 46.1332 21.7342C45.25 22.3976 45.0718 23.6513 45.7352 24.5345C47.1578 26.4285 48 28.7796 48 31.3333V34C48 36.5538 47.9938 37.5978 47.8605 38.4396C47.0924 43.289 43.289 47.0924 38.4396 47.8604C37.5978 47.9938 36.5538 48 34 48H18C15.4462 48 14.4022 47.9938 13.5604 47.8604C8.71098 47.0924 4.90763 43.289 4.13955 38.4396C4.00623 37.5978 4.00002 36.5538 4.00002 34V31.3333C4.00002 28.7796 4.84222 26.4285 6.26484 24.5345C6.92822 23.6513 6.75004 22.3976 5.86687 21.7342C4.98369 21.0708 3.72996 21.249 3.06658 22.1322C1.14153 24.695 2.22147e-05 27.8838 2.22147e-05 31.3333L1.09296e-05 34.2155C-0.000169315 36.4875 -0.000278989 37.8715 0.188801 39.0653C1.22796 45.6263 6.37367 50.772 12.9347 51.8112C14.1285 52.0003 15.5125 52.0002 17.7845 52H34.2155C36.4875 52.0002 37.8715 52.0003 39.0653 51.8112C45.6264 50.772 50.7721 45.6263 51.8112 39.0653C52.0003 37.8715 52.0002 36.4875 52 34.2155L52 31.3333C52 27.8838 50.8585 24.695 48.9334 22.1322Z" fill="#7b7b7d" />
                </svg>
                <p className="font-IRANYekanMedium text-[12px] text-darkGray mr-1">فایل خود را انتخاب کنید</p>
                    </div>
                    <p className="font-IRANYekanMedium text-[12px] text-darkGray mr-2">(فرمت قابل قبول jpg,Pdf,png)</p>
                </div>
                
                :
                null
            }


            {previewUrl && !previewUrl.includes("undefined") && (
              <>
              <img
                src={previewUrl}
                alt="Preview"
                style={props.userImageStyle}
                onClick={() => setImageClick(true)}
              />
              {/* <p>{file?.name}</p> */}
              </>
            )}
            {!previewUrl && (
              <div className={`${Styles.imageU}`}>
                <i
                  class="fa fa-picture-o"
                  aria-hidden="true"
                  style={{ color: "#808080", fontSize: 40 }}
                ></i>
                {/* <br />
                <p
                  style={{
                    color: "#808080",
                    fontSize: 13,
                    fontFamily: "medium",
                  }}
                >
                  Upload thumbnail
                </p> */}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default UploadFile;