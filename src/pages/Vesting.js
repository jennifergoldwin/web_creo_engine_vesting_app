import { Table } from "react-bootstrap";
import "../App.css"
import { useModal } from 'react-hooks-use-modal';

const Vesting = () =>{
    const [ModalAddVesting, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });

    const [ModalSetTGE, openTGE, closeTGE] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    

    return(
        <main>
            <div className="element-wrap-background-1">
                <div className="element-wrap-background-2" >
                <section>
                    <div className="container adjust-vesting-section">
                        <div className="row">
                            <div className="col-lg-6" >
                                <div className="bg-all bottom-range ">
                                    <div className="bg-title">
                                        <h4>INFO</h4>
                                    </div>

                                    <div className="bg-field-wrap">
                                        <div className="row" >
                                            <div className="col-md-6 label-text">
                                                <span>
                                                    TGE Date
                                                </span>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="desc-field">
                                                    <span>04/01/2022, 17:44 ICT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-field-wrap">
                                        <div className="row" >
                                            <div className="col-md-6 label-text">
                                                <span>
                                                    Number Of Contract
                                                </span>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="desc-field">
                                                    <span>3</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-field-wrap">
                                        <div className="row" >
                                            <div className="col-md-6 label-text">
                                                <span>
                                                    Total Amount
                                                </span>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="desc-field">
                                                    <span>333999999.90000004</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-all bottom-range">
                                    <div className="bg-title-admin">
                                        <h4>ADMIN</h4>
                                        <button className="btn-add-vesting ">+ ADD ADMIN</button>
                                    </div>
                                    <div className="bg-field-wrap">
                                        <div className="custom-height"></div>
                                    </div>
                                </div>

                                <div className="adjust-btn-tge">
                                    <button onClick={openTGE} className="btn-set-tge-date"><i class="fa-solid fa-calendar"></i>Set TGE Date</button>
                                </div>
                                <ModalSetTGE>
                                    <div className="bg-set-vesting">
                                        <div className="set-vesting-title">
                                            <span>SET TGE</span>
                                            <button className="btn-close-set-vesting" onClick={closeTGE}><i class="fa-solid fa-xmark"></i></button>
                                        </div>

                                        <div className="input-field-wrap">
                                            <label>
                                                Set TGE Date
                                                <input type="datetime-local" ></input>
                                            </label>
                                        </div>
                                        <div className="btn-approv-set-container">    
                                            <button onClick={closeTGE} className="btn-approv-set"><span>SET</span></button>
                                        </div>
                                    </div>
                                </ModalSetTGE>

                            </div>
                            <div className="col-lg-6">
                                <div className="bg-all">
                                    <div className="field-wrap">
                                        <span className="font-field">VESTING SMART CONTRACT</span>
                                        <button className="btn-add-vesting" onClick={open}>+ ADD VESTING</button>
                                    </div>

                                    <ModalAddVesting>
                                        <div className="bg-set-vesting">
                                            <div className="set-vesting-title">
                                                <span>SET VESTING</span>
                                                <button className="btn-close-set-vesting" onClick={close}><i class="fa-solid fa-xmark"></i></button>
                                            </div>
                                            <div className="input-field-wrap">
                                                <label>
                                                    Description
                                                    <input type="text" name="desc"></input>
                                                </label>
                                                <label>
                                                    Total CREO
                                                    <input type="number" name="total"></input>
                                                </label>
                                                <label>
                                                    Receiver Address 
                                                    <input type="text" name="address"></input>
                                                </label>
                                                <label>
                                                    TGE
                                                    <input type="number" name="tge"></input>
                                                </label>
                                                <label>
                                                    Vesting Period
                                                    <input type="number" name="period"></input>
                                                </label>
                                                <label>
                                                    Vesting Period Liquidity Count
                                                    <input type="number" name="count"></input>
                                                </label>
                                            </div>

                                            <div className="btn-approv-set-container">
                                                <button className="btn-approv-set"><i class="fa-solid fa-check"></i><span>APPROVE</span></button>
                                                <button className="btn-approv-set"><span>SET</span></button>
                                            </div>
                                            
                                        </div>
                                    </ModalAddVesting>

                                    <Table responsive striped bordered >
                                            <thead>
                                                <tr>
                                                    <th>DESCRIPTION</th>
                                                    <th>AMOUNT</th>
                                                    <th>TGE AMOUNT</th>
                                                    <th>VESTING PERIOD</th>
                                                    <th>PERIODIC AMOUNT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>TESTING CREO LIQUIDITY</td>
                                                    <td>100,000,000</td>
                                                    <td>0.00 CREO</td>
                                                    <td>1 DAYS</td>
                                                    <td>0.00 CREO</td>
                                                </tr>

                                                <tr>
                                                    <td>TESTING CREO LIQUIDITY</td>
                                                    <td>100,000,000</td>
                                                    <td>0.00 CREO</td>
                                                    <td>1 DAYS</td>
                                                    <td>0.00 CREO</td>
                                                </tr>

                                                <tr>
                                                    <td>TESTING CREO LIQUIDITY</td>
                                                    <td>100,000,000</td>
                                                    <td>0.00 CREO</td>
                                                    <td>1 DAYS</td>
                                                    <td>0.00 CREO</td>
                                                </tr>
                                            </tbody>
                                    </Table>              
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                </div>
            </div>
            
        </main>

    );

}

export default Vesting;