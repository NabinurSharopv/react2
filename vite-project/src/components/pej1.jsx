import React from "react";
import img1 from "../img/img1.jpg"; // Nav.jsx dan 1 daraja yuqoriga chiqib img papkaga kiradi
import img2 from "../img/img3.png"; // Nav.jsx dan 1 daraja yuqoriga chiqib img papkaga kiradi
import img3 from "../img/img4.png"; 

const pej1 = () => {
  return (
    <div className=" grid  items-center justify-center h-auto bg-cover bg-top" style={{ backgroundImage: `url(${img1})` }}>
      <h1
        className=" mt-80 ml-6
    w-[800px] 
    font-bold 
    font-next-art
    text-[50px] 
    tracking-[2%]
    text-white
  "
      >
        Насладись прогулкой в горах с командой единомышленников
      </h1>
      <div className="mt-1 m-6  flex flex items-center justify-center w-[1080px] h-[161px] top-[742px] left-[370px] opacity-100 bg-white/20 rounded-[10px]">
      <div>
        <div
          className="
    w-[220px]
    h-[52px]
    opacity-100
    flex
    items-center
    justify-between
    gap-2
    rounded-[8px]
    px-4
    border
    border-[#E1E3E4]
  "
        >
          <p className="text-[#FDFDFD] w-[210px] h-[24px] opacity-100 font-nunito  font-bold  text-[16px] leading-[150%] tracking-[0px]">
            Локация для тура
          </p>
          <img src={img2} alt="" />
        </div>
        <p className="w-[254px] h-[21px] opacity-100 font-nunito font-normal text-[14px] text-[#FDFDFD] mt-2">выберите из списка</p>
      </div>
      <div>
        <div
          className="
    w-[220px]
    h-[52px]
    opacity-100
    flex
    items-center
    justify-between
    gap-2
    rounded-[8px]
    px-4
    border
    border-[#E1E3E4]
  "
        >
          <p className="text-[#FDFDFD] w-[210px] h-[24px] opacity-100 font-nunito  font-bold  text-[16px] leading-[150%] tracking-[0px]">
          Дата похода
          </p>
          <img src={img3} alt="" />
        </div>
        <p className="w-[254px] h-[21px] opacity-100 font-nunito font-normal text-[14px] text-[#FDFDFD] mt-2">укажите диапазон</p>
      </div>
      <div>
        <div
          className="
    w-[220px]
    h-[52px]
    opacity-100
    flex
    items-center
    justify-between
    gap-2
    rounded-[8px]
    px-4
    border
    border-[#E1E3E4]
  "
        >
          <p className="text-[#FDFDFD] w-[210px] h-[24px] opacity-100 font-nunito  font-bold  text-[16px] leading-[150%] tracking-[0px]">
          Участники
          </p>
          <img src={img2} alt="" />
        </div>
        <p className="w-[254px] h-[21px] opacity-100 font-nunito font-normal text-[14px] text-[#FDFDFD] mt-2">минимум 4 человека</p>
      </div>
      <button   className="bg-[#FDFDFD] w-[213px] h-[52px]  opacity-100  flex items-center  justify-center gap-[10px]  rounded-[4px]   pt-4  pr-9  pb-4 pl-9">
           <p   className="
    w-[141px]
    h-[20px]
    opacity-100
    font-nunito
    font-bold
    text-[16px]
    text-[#1A3E3E]
    leading-[20px]
    tracking-[1.2%]
  ">Найти программу</p>
      </button>
      </div>
    </div>
  );
};
export default pej1;
