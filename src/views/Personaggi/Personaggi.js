import React, {useState} from 'react';
import RMTable from "../../components/RMTable/RMTable";
import RMCardGrid from "../../components/RMCardGrid/RMCardGrid";
import style from "./Personaggi.module.css";
import clsx from 'clsx';
import CharacterListData from "../../assets/data/CharacterListData.json"

function Personaggi() {
    const [displayGrid, setDisplayGrid] = useState("true");
    return (
        <div className="container">

            <div className="row justify-content-center">
                <div className="col">

                    <div className={style.switch}>

                        <div className={clsx(style.option, {[style.active]: displayGrid})}
                             onClick={() => setDisplayGrid(true)}>
                            Grid
                        </div>

                        <div className={clsx(style.option, {[style.active]: !displayGrid})}
                             onClick={() => setDisplayGrid(false)}>
                            Table
                        </div>

                    </div>


                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col">

                    {
                        displayGrid ?
                            <RMCardGrid
                                list={CharacterListData}
                                col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                            /> :
                            <RMTable list={CharacterListData}/>
                    }

                </div>
            </div>

        </div>

    )

}

export default Personaggi;