import { styleCard } from "../utils/constants";
import { IMG_URL } from "../utils/constants";
const RestaurantCard =(props)=>{
    const {ResData}=props;  
  return(
        <div className="m-4 p-4 w-[200px] h-[300px] " style={styleCard}>
            <img className="h-[100px] w-[160px] p-1 rounded-lg" alt="res-logo" src={IMG_URL+ResData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{ResData.info.name}</h3>
            <h4>{ResData.info.cuisines.join(', ')}</h4>
            <h3>{ResData.info.avgRating} stars</h3>
            <h3>{ResData.info.sla.slaString}</h3>
            <h3>{ResData.info.areaName}</h3>
        </div>
    );
}


export const withPromotedCard=(RestaurantCard)=>{
    return (props)=>{
        <div> 
        <label>Promoted</label>
        <RestaurantCard {...props}/>
        </div>
    }
}

export default RestaurantCard;

