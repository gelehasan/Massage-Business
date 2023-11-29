import React, { useState } from "react";
import "./style.css";

const AddService = () => {
  const [listor, setListor] = useState([]);
  const [listCount, setListCount] = useState(0);

  const handleAddLista = () => {
    setListor([...listor, { id: listCount, value: "" }]);
    setListCount(listCount + 1);
  };

  const handleListaChange = (id, value) => {
    const updatedListor = listor.map((item) =>
      item.id === id ? { ...item, value } : item
    );
    setListor(updatedListor);
  };

  return (
    <div>
      <form>
        <label>Title</label> <br />
        <input id="title" name="title" />
        <br />

        <label>information om servicen</label>
        <br />
        <label> Paragrph 1</label>
        <br />
        <input type="text" name="info1" />
        <br />

        <label> Paragrph 2</label>
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
       
      </form>
    </div>
  );
};

export default AddService;
