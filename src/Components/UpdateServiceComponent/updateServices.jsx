import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateServiceFields } from "../../Firebase/Firebase";

const inputFields = {
  serviceTitle: "",
  serviceBackgrundText:"",
  rubrik: "",
  info1: "",
  info2: "",
  rubrik2: "",
  info3:"",
  listor: [],
  imageOfService: "",
  ovrigtInfomation: "",
  otherList: [],
  serviceImage: "",
  prisOchTid:""
}
const UpdateService = ({AllServices})=>{

    const currentUser = useSelector((state)=> state.user.currentUser)
    const {serviceId} = useParams();

    const [formData, setFormData] = useState(AllServices[serviceId].data);

    console.log(formData)
    const Navigate = useNavigate();
    const handleInputChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleAddLista = () => {
      setFormData({
        ...formData,
        listor: [...formData.listor, { id: formData.listor.length, value: "" }],
      });
    };
  
    const handleAddOtherList = () => {
      setFormData({
        ...formData,
        otherList: [...formData.otherList, { id: formData.otherList.length, value: "" }],
      });
    };
  
    const handleListaChange = (id, value) => {
      const updatedListor = formData.listor.map((item) =>
        item.id === id ? { ...item, value } : item
      );
      setFormData({
        ...formData,
        listor: updatedListor,
      });
    };
  
    const handleOtherListChange = (id, value) => {
      const updatedOtherList = formData.otherList.map((item) =>
        item.id === id ? { ...item, value } : item
      );
      setFormData({
        ...formData,
        otherList: updatedOtherList,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
    
      if(currentUser && currentUser.Admin==true){
        try {
          const response = await updateServiceFields(formData)
          console.log(response)
          Navigate("/DashboardLinks")
          window.location.reload();
        
        } catch (error) {
          
        }
      }
    };
  
  
    return (
      <div className="form-container">


 <form className="service-form" onSubmit={handleSubmit}>
          <label>Service Title</label> <br />
          <input
            id="title"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
   
          <label>Service backgrund text</label> <br />
          <input
            id="serviceBackgrundText"
            name="serviceBackgrundText"
            value={formData.serviceBackgrundText}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
  
          <label>Rubrik 1</label> <br />
          <input
            id="rubrik"
            name="rubrik"
            value={formData.rubrik}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
  
          <label>Information 1</label> <br />
          <input
            id="info1"
            name="info1"
            value={formData.info1}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
  
  
          <label>Information 2</label> <br />
          <input
            id="info2"
            name="info2"
            value={formData.info2}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
  
  
          <label>Rubrik 2</label> <br />
          <input
            id="rubrik2"
            name="rubrik2"
            value={formData.rubrik2}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
  
          <label>Information 3</label> <br />
          <input
            id="info3"
            name="info3"
            value={formData.info3}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
          
  
          <label>Listor</label> <br />
          {formData.listor.map((item) => (
            <div key={item.id}>
              <input
                value={item.value}
                onChange={(e) => handleListaChange(item.id, e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddLista} className="btnLists">
            Add List Item
          </button>
          <br />
  
          <label>Bild om tjänsten</label> <br />
          <input
            id="imageOfService"
            name="imageOfService"
            value={formData.imageOfService}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
  
  
          <label>Ovright information</label> <br />
          <input
            id="ovrigtInfomation"
            name="ovrigtInfomation"
            value={formData.ovrigtInfomation}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
          <br />
  
  
  <label>Other List</label> <br />
  {formData.otherList.map((item) => (
    <div key={item.id}>
      <input
        value={item.value}
        onChange={(e) => handleOtherListChange(item.id, e.target.value)}
      />
    </div>
  ))}
  <button type="button" onClick={handleAddOtherList} className="btnLists">
    Add Other List Item
  </button>
  <br />
  
  <label>Service Image</label> <br />
  <input
    id="serviceImage"
    name="serviceImage"
    value={formData.serviceImage}
    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
  />
  <br />
  
  
  <label>Pris Och tid</label> <br />
  <input
    id="prisOchTid"
    name="prisOchTid"
    value={formData.prisOchTid}
    onChange={(e) => handleInputChange(e.target.name, e.target.value)}
    placeholder="Ex: 60min - 650kr"
  />
  <br />
          <button className="addService" type="submit">Submit</button>
        </form>
 
      </div>
    );
}


export default UpdateService;
