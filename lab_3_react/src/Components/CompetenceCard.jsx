function CompetenceCard(props){
    return(
        <div className="competenceCard">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div>
                Уровень(%):{props.level}
            </div>
            <button className="delBtn" onClick={props.onDelete} >Удалить</button>
        </div>
    )
}

export default CompetenceCard;