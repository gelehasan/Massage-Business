import React, { useState } from "react";
import "./style.css";

const AddService = () => {
  const [listor, setListor] = useState([]);
  const [listCount, setListCount] = useState(0);

  const [otherList, setOtherList] = useState([]);
  const [otherListCount, setOtherListCount] = useState(0);

  const handleAddLista = () => {
    setListor([...listor, { id: listCount, value: "" }]);
    setListCount(listCount + 1);
  };

  const handleAddOtherList = () => {
    setOtherList([...otherList, { id: otherListCount, value: "" }]);
    setOtherListCount(otherListCount + 1);
  };

  const handleListaChange = (id, value) => {
    const updatedListor = listor.map((item) =>
      item.id === id ? { ...item, value } : item
    );
    setListor(updatedListor);
  };

  const handleOtherListChange = (id, value) => {
    const updatedOtherList = otherList.map((item) =>
      item.id === id ? { ...item, value } : item
    );
    setOtherList(updatedOtherList);
  };

  return (
    <div className="form-container">
      <form className="service-form">
        <label>Title</label> <br />
        <input id="title" name="title" />
        <br />

        <label>Information om servicen</label>
        <br />
        <label>Paragrph 1</label>
        <br />
        <input type="text" name="info1" />
        <br />

        <label>Paragrph 2</label>
        <br />
        <input type="text" name="info2" />
        <br />

        <label>Vad är special om servicen</label>
        <br />
        <input type="text" name="serviceSpecial" />
        <br />

        <label>Listor</label> <br />
        <button type="button" onClick={handleAddLista}>
          Add a Lista
        </button>
        {listor.map((item) => (
          <div key={item.id}>
            <input
              type="text"
              value={item.value}
              onChange={(e) => handleListaChange(item.id, e.target.value)}
            />
          </div>
        ))}

        <label>Image of Service</label>
        <br />
        <input
          type="text"
          name="imageOfService"
          placeholder="Image of Service"
        />
        <label>Mer information 1</label>
        <br />
        <input type="text" name="merinfo" placeholder="Mer information" />

        {/* Another list here */}
        <label>Other List</label> <br />
        <button type="button" onClick={handleAddOtherList}>
          Add Item
        </button>
        {otherList.map((item) => (
          <div key={item.id}>
            <input
              type="text"
              value={item.value}
              onChange={(e) => handleOtherListChange(item.id, e.target.value)}
            />
            <br />
            
          </div>
        ))}

<label>Bild på tjänsten</label> <br />
            <input
              type="text"
              name="serviceImage"
              placeholder="Service Image"
            />
            <br />

            <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddService;
