import React, { useState } from "react";
import "./style.css";

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddService;
