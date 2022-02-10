import { useState, useEffect } from "react";
import { allHotels } from "../actions/hotel";
import SmallCard from "../components/cards/SmallCard";
//import {Helmet} from 'react-helmet';
import "./Home.css";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    let res = await allHotels();
    setHotels(res.data);
  };

  return (
    <>
    
         <div className ="head">
        <h2>hotels</h2>
        </div>
        
      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {hotels.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
      
    </>
  );
};
<footer>
    <div class="whitebar">
      <div class="copyright_text">
      Copyright © 1996–2022
      Booking.com™. All rights reserved.
      </div>
      </div>
    </footer>
export default Home;
