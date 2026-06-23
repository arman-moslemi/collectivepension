import Cross from "../../assets/icon/general/Cross";

const Alert = ({ title, text, modalButton, noCross, setShowModal, big,error }) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none"
            >
                <div className={` mx-auto mb-10 mt-10 absolute top-[220px] right-[1%] ${big ? 'w-[65%] max-h-[750px] overflow-auto' : 'w-fit'}`}>
                    <div class={`${error?"bg-[#CF0404]":"bg-mainGreen"} text-white px-4 py-3 rounded-[10px] relative" role="alert"`}>
                        <strong class="font-bold">{title}</strong>
                        <span class="block sm:inline">{text}</span>
                        {/* <span class="absolute top-0 bottom-0 left-0 px-4 py-3">
                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span> */}
                    </div>

                </div>
            </div>
            {/* <div className="opacity-5 fixed inset-0 z-40 bg-black"></div> */}
        </>
    )
}

export default Alert;