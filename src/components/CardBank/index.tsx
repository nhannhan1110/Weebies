import React from 'react';
import dayjs from "dayjs";

interface Props {
	cardBank: any;
	userName: any;
}

const CardBank = (props: Props) => {
	const { cardBank, userName } = props;
  return (
    <div className="bg-white flex justify-center items-center">
      <div className="space-y-16 flex gap-7">
        <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
          <img
            className="relative object-cover w-full h-full rounded-xl"
            src="https://i.imgur.com/kGkSg1v.png"
          />

<div className="w-full px-6 absolute top-4">
            <div className="flex justify-between">
              <div className="">
                <p className="font-light text-2xl">Standard</p>
              </div>
              <img
                className="w-14 h-14"
                src="https://i.imgur.com/bbPHJVe.png"
              />
            </div>

            <div className="pt-1">
              <p className="font-light">Card Number</p>

              <p className="font-medium tracking-more-wider">
                {cardBank.cardNumber}
              </p>
            </div>
            <div className="pt-4">
              <div className="flex justify-between gap-4 items-center">
                <div className="flex flex-1 gap-5">
                  <div className="">
                    <p className="font-light text-base">{userName}</p>
                    <p className="font-medium tracking-wider text-sm">
                        So TK {cardBank.bankNumber}
                    </p>
                  </div>
                  <div className="">
                    <p className="font-light text-base">Valid</p>
                    <p className="font-medium tracking-wider text-sm">{dayjs(cardBank.createdAt).add(5,'y').format('MM/YY')}</p>
                  </div>
                </div>
				<div className="flex flex-col justify-end">
                  <p className="font-bold italic text-3xl">Visa</p>
                  <p className="font-light tracking-more-wider text-sm">
                    {cardBank.isCreditCard ? "Credit" : "Debit"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
          <img
            className="relative object-cover w-full h-full rounded-xl"
            src="https://i.imgur.com/kGkSg1v.png"
          />
          <div className="absolute top-2 w-full">
            <div className="h-3 w-full flex justify-between items-center px-4">
              <p className="text-xs">GSC1234567-HiCo</p>
              <span className="text-sm">So dien thoai Bank</span>
            </div>
            <div className="h-10 bg-black w-full mt-2"></div>
            <div className="mt-2 px-4">
              <p className="uppercase text-xs">
                <span>Authorized signature</span>( Not valid unless signed )
              </p>
            </div>
            <div className="mt-2 px-4 relative">
              <div className="w-[80%] h-7 bg-white">
                <p className="text-black italic text-right pr-2">
                  {cardBank.cvvNumber}
                </p>
              </div>
              <div className="absolute top-[-5px] left-[1rem] w-[63%] h-10">
                <div className=" flex flex-col justify-around h-full bg-white ">
                  <span className="w-full bg-orange-300 h-1 inline-block"></span>
                  <span className="w-full bg-orange-300 h-1 inline-block"></span>
                  <span className="w-full bg-orange-300 h-1 inline-block"></span>
                  <span className="w-full bg-orange-300 h-1 inline-block"></span>
                </div>
                <p className="absolute top-[50%] translate-y-[-50%] right-[10px] text-base italic text-black">
                  1110
                </p>
              </div>
            </div>
            <div className="mt-10 px-4 flex items-center gap-3">
              <p className="text-2xl text-left">WEEBIES</p>
				
				

								
              <div>
                <p className='text-xs uppercase'>Weebies Bank</p>
                <p className='text-xs uppercase'>Weebies BankCard Center</p>
              </div>
			  </div>
          </div>
        </div>
      </div>
    </div>
  );			
};

export default CardBank;
