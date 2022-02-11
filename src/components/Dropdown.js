import { useState } from "react";
import CreoWhite from "../assets/creo-white.png"

const Dropdown = ({dropdownTitle, dropdownAmount}) =>{

    const [status, setStatus] = useState(false);

    const changeStatus = () =>{
        console.log(status);
        if (status === false){
            setStatus(true);
        }
        else{
            setStatus(false);
        }
        console.log(status);
    }

   
    const [vesting, updateVesting] = useState([
        {
            title: "TGE", amount: "0.00", desc:"", status: "CLAIMED"
        },
        {
            title: "1st Redeem", amount: "0.00", desc:"Claimable on 01/14/2022 (12:12 ICT)", status: "CLAIM"
        },
        {
            title: "2nd Redeem", amount: "0.00", desc:"Claimable on 05/14/2022 (12:12 ICT)", status: "LOCKED"
        },
        {
            title: "3rd Redeem", amount: "0.00", desc:"Claimable on 05/14/2022 (12:12 ICT)", status: "LOCKED"
        },
    ]);

    const updateStatusVesting = (y) =>{
        console.log(y.target.id);
        updateVesting(
            vesting.map(x => 
                x.title === y.target.id && x.status==="CLAIM"
                ? {...x, status : "CLAIMED"} 
                : x 
        )) 
    }
    return(
        <div className="adjust-top">
            <div className="vesting-program-title-wrap">
                <div>
                    <img src={CreoWhite} alt=""/>
                    <span>{dropdownTitle}</span>
                </div>
                <div >
                    <span>{dropdownAmount}</span>
                </div>
            </div>
            <div>
                <button className="btn-vesting-program" onClick={changeStatus}>{
                    !status ?<i class="fa-solid fa-chevron-down"></i> :<i class="fa-solid fa-xmark"></i>
                }
                
                </button>
                <div className={!status?"vesting-list":"vesting-list active"}>
                    {vesting.map((vesting) => (
                        <div className="item-list">
                            <span>{vesting.title}</span>
                            <div>
                                <span>{vesting.amount}</span>
                                <span>{vesting.desc}</span>
                            </div>
                            <button id={vesting.title} onClick={updateStatusVesting} className={vesting.status==="CLAIM"?"btn-claim claim":vesting.status==="LOCKED"?"btn-claim locked":"btn-claim claimed"}>
                            {vesting.status} </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );

}

export default Dropdown;