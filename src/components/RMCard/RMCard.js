import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import style from "../RMCard/RMCard.module.css"
import {characterDefaultImage} from "../../utility/utility";
import {NavLink} from "react-router-dom";
function RMCard(props) {
    const {name, number, image, species, status} = props;
    return (
        <NavLink to={`/Personaggi/${number}`}>
            <Card className={style.card}>
                <CardImg onError={(event) => characterDefaultImage(event)} loading="lazy" className={style.image} top
                         width="100%" src={image} alt={name}/>
                <CardBody className="text-center">
                    <CardTitle tag="h5" className={`h3 ${style.title}`}>{name}</CardTitle>
                    <CardText>
                        <p className={style.types}>{number}</p>
                    </CardText>
                    <div className={style.types}>
                        {species}
                    </div>
                    <div className={style.types}>
                        {status}
                    </div>
                </CardBody>
            </Card>
        </NavLink>
    )
}

export default RMCard;