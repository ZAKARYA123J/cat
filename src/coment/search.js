import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbMessageCircle2Filled } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa";


function SearchInput() {
  return (
    <>
    <div className='col d-flex'style={{height:'50px',paddingLeft:'10px'}}>

    <TbMessageCircle2Filled style={{marginTop:'17px'}}/>
    <button>+212 663116836 (Whatsapp)</button>
    <div className='col d-flex justify-content-end' >
    <button style={{marginRight:'10px'}}>Cart :0.00$</button>
    <FaMoneyCheck style={{marginTop:'17px'}} />
    </div>
    </div>
    </>
  );
}

export default SearchInput;
