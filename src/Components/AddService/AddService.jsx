import "./style.css"


const AddService = ()=>{

    return(
        <div>
            <form>

            <label>Title</label>
            <input id="title" name="title"/>

            <label>information om servicen</label>
            <label> Paragrph 1</label>
            <input type="text" name="info1" />

            <label> Paragrph 2</label>
            <input type="text" name="info2" />


            <label>Vad är special om servicen</label>
            <input type="text" name="serviceSpecial"/>


            </form>
        </div>
    )
}