import "./style.css"


const AddService = ()=>{

    return(
        <div>
            <form>

            <label>Title</label> <br/>
            <input id="title" name="title"/><br/>

            <label>information om servicen</label><br/>
            <label> Paragrph 1</label><br/>
            <input type="text" name="info1" /><br/>

            <label> Paragrph 2</label><br/>
            <input type="text" name="info2" /><br/>


            <label>Vad är special om servicen</label><br/>
            <input type="text" name="serviceSpecial"/><br/>


            </form>
        </div>
    )
}


export default AddService;