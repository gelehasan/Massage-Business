import React, { useState } from "react";
import "./style.css";
import { postFormDataToDatabase } from "../../Firebase/Firebase";
import { AddNewService } from "../../Firebase/Firebase";
const AddService = () => {
  const [formData, setFormData] = useState({
    serviceTitle: "",
    rubrik: "",
    info1: "",
    info2: "",
    specialOmServicen: "",
    listor: [],
    imageOfService: "",
    ovrigtInfomationTitle: "",
    ovrigtInfomation: "",
    otherList: [],
    serviceImage: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    AddNewService(formData)
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form className="service-form" onSubmit={handleSubmit}>
      

        <label>Service Title</label> <br />
        <input
          id="title"
          name="serviceTitle"
          value={formData.serviceTitle}
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
<button type="button" onClick={handleAddLista}>
  Add List Item
</button>
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
<button type="button" onClick={handleAddOtherList}>
  Add Other List Item
</button>
<br />

<label>Ovrigt Information Title</label> <br />
<input
  id="ovrigtInfomationTitle"
  name="ovrigtInfomationTitle"
  value={formData.ovrigtInfomationTitle}
  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
/>
<br />
<label>Ovrigt Information</label> <br />
<textarea
  id="ovrigtInfomation"
  name="ovrigtInfomation"
  value={formData.ovrigtInfomation}
  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
/>
<br />

<label>Service Image</label> <br />
<input
  id="serviceImage"
  name="serviceImage"
  value={formData.serviceImage}
  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
/>
<br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddService;
