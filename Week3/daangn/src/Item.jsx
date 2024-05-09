function Item(props){
    return (
        <div className="item">
            <div className="imgContainer">
                <img className="itemImg" src={props.img} alt='img'/>
            </div>
            <div className="itemInfo">
                <span className="itemTitle">{props.title}</span>
                <span className="itemLocation">{props.location}</span>
                <span className="itemWage">{props.wage}</span>
            </div>
        </div>
    );
}

export default Item;