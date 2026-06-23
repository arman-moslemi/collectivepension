import { useState } from "react";
import { MainAdminRequestsDetails, MainTopAll, ExpertRequestsDetails } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";
import { useLocation } from "react-router-dom";


const MainAdminRequestsDetailsPage = () => {

    const [adminRole, setAdminRole] = useState(true);
    const [withWebService, setWithWebService] = useState(false);
    const [desBox, setDesBox] = useState(true);
    const [anotherPerson, setAnotherPerson] = useState(true);
    const { state } = useLocation();
    console.log(99)
    console.log(state)
    return (
        <div className="b1115:pl-[20px] md:py-[25px] pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'مشاهده درخواست بازنشستگی'} icon={<PensionRequestIcon color={'#0a2867'} />} role={'mainAdmin'} adminRole={adminRole} /></div>
            <div className="w-full">
                <ExpertRequestsDetails admin={adminRole} webService={withWebService} des={desBox} another={anotherPerson} id={state?.id} statusId={state?.statusId} />
            </div>
        </div>
    );
};

export default MainAdminRequestsDetailsPage;