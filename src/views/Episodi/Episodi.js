import React, {useState,useEffect} from 'react';
import RMTable from "../../components/RMTable/RMTable";
import RMCardGrid from "../../components/RMCardGrid/RMCardGrid";
import clsx from 'clsx';
import CharacterListData from "../../assets/data/CharacterListData.json"
import InputGroup from "../../components/InputGroup/InputGroup";
import style from "./Episodi.module.css";
function Episodi() {
    let [results, setResults] = React.useState([]);
    let [info, setInfo] = useState([]);
    let { air_date, episode, name } = info;
    let [id, setID] = useState(1);

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.characters.map((x) => {
                    return fetch(x).then((res) => res.json());
                })
            );
            setResults(a);
        })();
    }, [api]);


    const [displayGrid, setDisplayGrid] = useState("true");
    return (
        <div className="container">
            <div className="row mb-3">
                <h1 className="text-center mb-3">
                    Nome episodio :{" "}
                    <span>{name === "" ? "Unknown" : name}</span>
                </h1>
                <h5 className="text-center">
                    Data: {air_date === "" ? "Unknown" : air_date}
                </h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-4">
                    <h4 className="text-center mb-4">Scegli Episodio</h4>
                    <InputGroup name="Episodio" changeID={setID} total={51} />
                </div>
            </div>

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

export default Episodi;