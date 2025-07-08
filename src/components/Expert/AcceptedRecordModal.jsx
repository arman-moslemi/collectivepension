import {MainInput, MainButton} from "..";
import DateIcon from "../../assets/icon/general/DateIcon";
import {useState, useEffect} from "react";
const AcceptedRecordModal = () => {
    const [startDate,
        setStartDate] = useState("");
    const [endDate,
        setEndDate] = useState("");
    const [records,
        setRecords] = useState([]);
    const [dateError,
        setDateError] = useState("");
    const [showTotal,
        setShowTotal] = useState(false);
    const [totalError,
        setTotalError] = useState("");
    const parseDate = (str) => {
        if (!str) 
            return null;
        const parts = str.split('/');
        if (parts.length !== 3) 
            return null;
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        return new Date(year, month, day);
    };

    const resetTime = (date) => {
        if (!date) 
            return null;
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        return d;
    };

    const addNewRow = () => {
        const start = resetTime(parseDate(startDate));
        const end = resetTime(parseDate(endDate));

        if (!start || !end) {
            setDateError("لطفا هر دو تاریخ را وارد کنید.");
            return;
        }

        if (start >= end) {
            setDateError("تاریخ شروع باید قبل از تاریخ پایان باشد.");
            return;
        }

        setDateError("");
        setRecords((prev) => [
            ...prev, {
                startDate,
                endDate
            }
        ]);
        setStartDate("");
        setEndDate("");
    };

    useEffect(() => {
        setDateError("");
    }, [startDate, endDate]);
    return ( <> <div className="w-full border-t border-t-borderGray p-4 z-1000 lg:px-0">
        <span className="font-IRANYekanMedium text-[15px] text-mainBlue lg:mt-2 lg:pt-2">
            بازه یا بازه‌های جدید را در این ماه، با توجه به اعتراض کاربر ثبت کنید.

        </span>
        <div className="my-5">
            {/* فرم ورود بازه جدید */}
            <div className="grid grid-cols-4 gap-4 w-[80%] mx-auto mb-4 lg:w-full">
                <div className="col-span-1 lg:col-span-4">
                    <MainInput
                        date={true}
                        leftIcon={< DateIcon />}
                        value={startDate}
                        onChange={(val) => setStartDate(val)}
                        error={dateError}/>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <MainInput
                        date={true}
                        leftIcon={< DateIcon />}
                        value={endDate}
                        onChange={(val) => setEndDate(val)}
                        error={dateError}/>
                </div>
                <div className="col-span-2 flex lg:col-span-4">
                    <div className="w-[140px] ml-2 mt-2">
                        <MainButton label="افزودن بازه جدید" onClickFunction={addNewRow}/>
                    </div>
                    <div className="w-[140px] mt-2">
                        <MainButton
                            label="محاسبه مجموع سابقه"
                            onClickFunction={() => {
                            if (records.length === 0) {
                                setTotalError("ابتدا بازه زمانی را ثبت نمایید.");
                                return;
                            }
                            setShowTotal(true);
                            setTotalError("");
                        }}/>

                    </div>
                </div>
            </div>
            {totalError && (
                <p className="text-errorRed text-sm mt-1 text-center">
                    {totalError}
                </p>
            )}
            {dateError && (
                <p className="text-errorRed text-sm mt-1 text-right w-[80%] mx-auto">
                    تاریخ شروع باید قبل از تاریخ پایان باشد.
                </p>
            )}

            {records.length > 0 && (
                <table
                    className="w-[80%] mx-auto mt-4 border border-borderGray text-[14px] font-IRANYekanMedium">
                    <thead className="bg-bgGray text-center">
                        <tr>
                            <th className="py-2 border border-borderGray">ردیف</th>
                            <th className="py-2 border border-borderGray">تاریخ شروع</th>
                            <th className="py-2 border border-borderGray">تاریخ پایان</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {records.map((item, i) => (
                            <tr key={i}>
                                <td className="py-2 border border-borderGray">{i + 1}</td>
                                <td className="py-2 border border-borderGray">{item.startDate}</td>
                                <td className="py-2 border border-borderGray">{item.endDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>

        {showTotal
            ? <> <div className="flex justify-center">
                <span className="text-mainBlue font-IRANYekanExtra">
                    مجموع سوابق :
                    <span className="font-IRANYekanBold">
                        28 روز
                    </span>
                </span>
            </div> </>    
    : null}
    </div> </>
    )
}

export default AcceptedRecordModal;