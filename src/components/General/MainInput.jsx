import { useState } from 'react'
import {  Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import SelectBoxIcon from "../../assets/icon/general/SelectBoxIcon";
import SelectBoxIcon2 from "../../assets/icon/general/SelectBoxIcon2";




const MainInput = ({label,leftIcon,necessary,disable,value,holder,listBox,listBoxM1,listItems,listBoxHolder,longText,search,Custom1}) => {

    const [selectedNumberOfContents, setSelectedNumberOfContents] = useState("")

    return (
        <div className="w-full ">
            <div className="flex">
            <label className="font-IRANYekanBold text-[16px] text-mainBlue">{label}</label>
            {necessary?
            <p className="font-IRANYekanBold text-[16px] text-errorRed mr-[2px]">*</p>
            :null}
            </div>
            {disable?
            <div className="border-[1px] bg-disableGray h-[48px] w-full mt-2 border-borderGray rounded-[6px] flex justify-start items-center px-2">
            <input className="h-[34px] w-full focus-visible:outline-none font-IRANYekanBold text-[16px] text-darkGray" value={value} type="text" disabled name="" id="" />
            <div className="mr-3">{leftIcon}</div>
            </div>
            :
            listBox?
            <div className='w-full mt-2 '>
                <Listbox value={selectedNumberOfContents} onChange={setSelectedNumberOfContents}>
                    {/* <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label> */}
                    <div className="relative w-full">
                    <ListboxButton className="relative w-full h-[48px] cursor-default rounded-md bg-white py-1 px-2 text-right  ring-[1px] ring-inset ring-borderGray focus:outline-none  focus:ring-indigo-500 sm:text-sm/6">
                        <span className="flex items-center">
                        {selectedNumberOfContents.name ?
                        <span className="ml-3 block truncate font-IRANYekanMedium text-[16px]">{selectedNumberOfContents.name}</span>
                    
                    :
                    listBoxHolder?
                    <span className="ml-3 block truncate font-IRANYekanMedium text-[16px] text-darkGray">{listBoxHolder}</span>
                    :
                    <span className="ml-3 block truncate font-IRANYekanMedium text-[16px] text-darkGray">انتخاب کنید</span>
                    }    
                            
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                            <SelectBoxIcon aria-hidden="true"/>
                        </span>
                    </ListboxButton>

                    <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {listItems.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              className="group relative cursor-default select-none py-[7px] px-3 text-gray-900 border-b-[1px] border-black/5 text-[12px] data-[focus]:bg-bgGray"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-IRANYekanMedium text-[14px]  group-data-[selected]:font-IRANYekanBold">
                  {item.name}
                </span>
              </div>
            </ListboxOption>
          ))}
                    </ListboxOptions>
                    </div>
                </Listbox>
            </div>
            :
            listBoxM1?
            <div className='w-full mt-2 '>
                <Listbox value={selectedNumberOfContents} onChange={setSelectedNumberOfContents}>
                    {/* <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label> */}
                    <div className="relative w-full">
                    <ListboxButton className="relative w-full h-[48px] cursor-default rounded-md bg-white shadow-searchShadow py-1 px-2 text-right  ring-[1px] ring-inset ring-borderGray focus:outline-none  focus:ring-indigo-500 sm:text-sm/6">
                        <span className="flex items-center">
                        {selectedNumberOfContents.name ?
                        <span className="ml-3 block truncate font-IRANYekanExtra text-mainBlue text-[15px]">{selectedNumberOfContents.name}</span>
                    
                    :
                    listBoxHolder?
                    <span className="ml-3 block truncate font-IRANYekanExtra text-mainBlue text-[15px] ">{listBoxHolder}</span>
                    :
                    <span className="ml-3 block truncate font-IRANYekanExtra text-mainBlue text-[15px] ">انتخاب کنید</span>
                    }    
                            
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                            <SelectBoxIcon2 aria-hidden="true"/>
                        </span>
                    </ListboxButton>

                    <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {listItems.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              className="group relative cursor-default select-none py-[7px] px-3 text-gray-900 border-b-[1px] border-black/5 text-[12px] data-[focus]:bg-bgGray"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-IRANYekanMedium text-[14px]  group-data-[selected]:font-IRANYekanBold">
                  {item.name}
                </span>
              </div>
            </ListboxOption>
          ))}
                    </ListboxOptions>
                    </div>
                </Listbox>
            </div>
            :
            longText?
              <textarea className="border-[1px] p-2 w-full mt-2 border-borderGray rounded-[6px] focus-visible:outline-none font-IRANYekanMedium text-[16px]" value={value} placeholder={holder} rows={5} name="" id=""></textarea>
            :
            search?
            <div className="border-[1px] h-[48px] w-full mt-2 border-borderGray rounded-[50px] shadow-searchShadow flex justify-start items-center px-4">
            <input className="h-[34px] w-full focus-visible:outline-none font-IRANYekanMedium text-[13px]" placeholder={holder} type="text" name="" id="" />
            <div className="mr-3">{leftIcon}</div>
            </div>
            :
            Custom1?
            <div className="border-[1px] h-[32px] w-full border-borderGray rounded-[6px]  flex justify-start items-center px-[15px]">
            <input className="h-[21px] border-b-[1px] w-full focus-visible:outline-none font-IRANYekanMedium text-[11px]" placeholder={holder} type="text" name="n" id="n" />
            </div>
            :
            <div className="border-[1px] h-[48px] w-full mt-2 border-borderGray rounded-[6px] flex justify-start items-center px-2">
            <input className="h-[34px] w-full focus-visible:outline-none font-IRANYekanMedium text-[16px]" placeholder={holder} value={value} type="text" name="" id="" />
            <div className="mr-3">{leftIcon}</div>
            </div>

            }
            
        </div>
    );
  };
  
  export default MainInput;