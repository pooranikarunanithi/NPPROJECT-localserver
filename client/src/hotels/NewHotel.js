import {useState} from "react";
import {toast} from "react-toastify";
//import AlgoliaPlaces from 'algolia-places-react';
import { DatePicker, Select } from "antd";
import { createHotel } from "../actions/hotel";
import {useSelector} from "react-redux";
import HotelCreateForm from "../components/forms/HotelCreateForm";
import {Helmet} from 'react-helmet';


const { Option } = Select;

const NewHotel = () => {
  const { user } = useSelector((state) => ({ ...state }));
const {token}= user; 

  const  [values,setValues] =useState({
    title:"",
    content:"",
    location:"",
    image:"",
    price:"",
    from:"",
    to:"",
    bed:"",

  }); 
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );

  const{title,content,location,image,price,from,to,bed} = values;

 
   
  const handleSubmit= async(e)=>{
    e.preventDefault();
    // console.log(values);
    let hotelData = new FormData();
    hotelData.append("title", title);
    hotelData.append("content", content);
    hotelData.append("location", location);
    hotelData.append("price", price);
    image && hotelData.append("image", image);
    hotelData.append("from", from);
    hotelData.append("to", to);
    hotelData.append("bed", bed);

    console.log([...hotelData]);


   try {
      let res = await createHotel(token, hotelData);
      console.log("HOTEL CREATE RES", res);
      toast.success("New hotel is posted");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
 
};
const handleImageChange = (e) => {
  //console.log(e.target.files[0]);
  setPreview(URL.createObjectURL(e.target.files[0]));
  setValues({ ...values, image: e.target.files[0] });
}


const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
}


return (
 
  <>
   
     <div className="container-fluid p-3 text-center">
        <h2>Add Hotels</h2>
      </div>
    <div className="container-fluid ">
    <div style={{  justifyContent:'center', alignItems:'center'}}>
              </div>
      <div className="row">
        <div className="col-md-7">
          <br />
         <HotelCreateForm
         
         values={values}
         setValues={setValues}
         handleChange={handleChange}
         handleImageChange={handleImageChange}
         handleSubmit={handleSubmit}
         
         
         />
        </div>
        <div className="col-md-2">
          <img
            src={preview}
            alt="preview_image"
            className="img img-fluid m-2"
          />
         {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
        
        </div>
      </div>
    </div>
  </>
);
};

export default NewHotel;
