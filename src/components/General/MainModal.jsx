import Cross from "../../assets/icon/general/Cross";

const MainModal = ({title,text,modalButton,noCross,setShowModal,big}) => {
    return(
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className={`relative mx-auto mb-10 mt-10 ${big? 'w-[65%] max-h-[750px] overflow-auto' : 'w-[35%]'}`}>

              <div className="border-0 rounded-[6px]  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {title ? 
                <div className="w-full h-[76px] border-b-[1px] p-[25px] border-borderGray flex justify-between items-center">
                    <p className="font-IRANYekanBold text-[20px] text-mainBlue">{title}</p>
                    {noCross ? null :
                    <button onClick={()=>setShowModal(false)}><Cross/></button>
                    }
                </div>
                : 
                <div className="w-full  border-b-[1px] px-[15px] py-[10px] border-borderGray flex justify-between items-center">
                    <p className="font-IRANYekanBold text-[20px] text-mainBlue"></p>
                    {noCross ? null :
                    <button onClick={()=>setShowModal(false)}><Cross/></button>
                    }
                </div> }
                <div className="p-[25px] w-full">
                    <p className="font-IRANYekanBold text-[15px]">{text}</p>
                </div>
                <div className="pt-[20px] pb-[30px] px-[25px] w-full flex justify-center">{modalButton}</div>
                 
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
    )
}

export default MainModal;