import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu =()=>{
    const {resId}=useParams();
    const ResInfo=useRestaurantMenu(resId);
    if(ResInfo==null)return <Shimmer/>
    const myData=ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    return(<div>
        <h1>{ResInfo?.cards[0]?.card?.card?.text}</h1>
        <h3>Restaurant menu</h3>
        <ul> 
        {myData.map((res)=>(<li key={res?.card?.info?.id}>{res?.card?.info?.name}  - {res?.card?.info?.defaultPrice/100  || res?.card?.info?.price/100}rs</li>))}
        </ul>
        
    </div>);
}
export default RestaurantMenu;