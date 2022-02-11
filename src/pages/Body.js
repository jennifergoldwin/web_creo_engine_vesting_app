import React from "react"
import Coin from "../assets/coin.png"
import CreoField from "../components/CreoField"
import Dropdown from "../components/Dropdown"


const Body = () =>{
    return (
        <main>
            <div className="element-wrap-background-1">
                <div className="element-wrap-background-2" >
                    <section className="bg-claim-token">
                        <div className="container bg-token-container bg-all">
                            <div className="wrap-all">
                                <div className="token-title-wrap">
                                    <div>
                                        <img src={Coin} alt=""/>
                                    </div>
                                    <h2 className="font-field">Claim Your Token</h2>
                                </div>
                                <div className="width-child">
                                    <div className="row row-wrap">
                                        <CreoField fieldTitle={"Total CREO Owned"}/>
                                        <CreoField fieldTitle={"Total CREO Locked"}/>     
                                    </div>
                                    <div className="wrap-dropdown-container">
                                        <span className=" token-title-wrap font-field font-size">Vesting Program</span>
                                        <Dropdown dropdownTitle={"Vesting No.1"} dropdownAmount={"0.00"}/>
                                        <Dropdown dropdownTitle={"Vesting No.2"} dropdownAmount={"0.00"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>

    )

}

export default Body;