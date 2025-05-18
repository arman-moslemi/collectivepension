import { Link, useNavigate } from 'react-router-dom';

const MainTopAll = ({role,icon,title,text}) => {
    return (
        <div className="flex w-full justify-between items-center">
            <div className="flex justify-start items-center">
                <div>{icon}</div>
                <p className="font-IRANYekanExtra text-mainBlue text-[15px] mr-2">{title}</p>
            </div>
            <div className='flex items-center'>
                <Link className="font-IRANYekanMedium text-[12px] text-mainBlue border-b-[1px] border-dashed border-mainBlue pb-[2px]">راهنمای استفاده از سامانه</Link>
                <div className="w-[320px] h-[40px] bg-white py-[7px] px-[10px] rounded-[6px] mr-[11px]">
                    {role === 'user' ? 
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex justify-start items-center'>
                            <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>علی علیزاده</p>
                            <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-1'>(کاربر اصلی)</p>
                        </div>
                        <Link className='font-IRANYekanMedium text-[12px] text-mainBlue border-b-[1px] border-dashed border-mainBlue pb-[2px]'>تغییر نقش</Link>
                    </div>
                :null }
                </div>

            </div>
            
        </div>
    );
  };
  
  export default MainTopAll;