import React from 'react'
import img1 from '../img/img1.jpg'; // Nav.jsx dan 1 daraja yuqoriga chiqib img papkaga kiradi
import img2 from '../img/img2.png';

const Nav = () => {
  return (
    <nav className="flex items-center justify-around w-full h-[72px] bg-cover bg-top" style={{ backgroundImage: `url(${img1})` }}>
    <div>
        <img src={img2} alt="" />
    </div>
    <ul className="flex gap-[69px]">
        <li className="w-[69px] h-[25px] font-sans font-semibold text-[18px] leading-[100%]  text-white">Главная</li>
        <li className="w-[69px] h-[25px] font-sans font-semibold text-[18px] leading-[100%]  text-white">Прогида</li>
        <li className="w-[69px] h-[25px] font-sans font-semibold text-[18px] leading-[100%]  text-white">Стоимость</li>
        <li className="w-[69px] h-[25px] font-sans font-semibold text-[18px] leading-[100%]  text-white">Блог</li>
        <li className="w-[69px] h-[25px] font-sans font-semibold text-[18px] leading-[100%]   text-white">Контакты</li>
    </ul>
    <button className="w-[157px] h-[44px] opacity-100 rounded-[4px] px-[24px] py-[12px] font-sans font-semibold text-[16px] leading-[20px] tracking-[1.2%] text-white bg-[#1A3E3E] flex items-center justify-center gap-[10px]">Консультация</button>
  </nav>
  )
}

export default Nav
