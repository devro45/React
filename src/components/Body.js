import RestaurantCard,{withPromotedCard} from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    const [restaurantList,setRestaurantList]=useState([]);
    const [filteredResList,setFilterResList]=useState([]);

    useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9456906&lng=78.16424780000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  const [initVal,setInitVal]=useState("");
    return restaurantList.length==0?<Shimmer/>:(
        <div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
            <input className="border border-solid border-black" value={initVal} onChange={(e)=>{
              setInitVal(e.target.value);
            }}/>
             </div>
            <button className="m-6 px-2 py-2 bg-green-100 rounded-lg " onClick={()=>{
              const filteredRestaurant=restaurantList.filter((res) => res.info.name.toLowerCase().includes(initVal.toLowerCase()));
              setFilterResList(filteredRestaurant);
              
            }}>Search</button> 
            <button className="m-6 px-2 py-2 bg-red-300 rounded-lg" onClick={()=>{
              const filteredList=restaurantList.filter((res) => res.info.avgRating > 4);
              setFilterResList(filteredList);
            }}>Top Rated Restaurants</button>
            
            </div>
            <div className="flex flex-wrap">
              {
                filteredResList.map(restaurant=>(
                  <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                  <RestaurantCard ResData={restaurant}/>
                  
                  </Link>
                )
                )
              }
            </div>
        </div>
       
    );
}
export default Body;