import BookingForm from "../../Components/BookingComponent/BookingDetails";
import { useSelector } from "react-redux";
import { getAllServices } from "../../Store/services/serviceSelector";
import LoadingSpinner from "../../Components/LoadingSpinner/loadingSpinner";
const BookingPage = ()=>{
    const AllServces = useSelector(getAllServices);
    const isServiceLoading = useSelector((state)=> state.services.isServiceLoading);


    console.log(AllServces)
    return(
        <>
        {
            isServiceLoading ?
            <LoadingSpinner />
            :
            <BookingForm />

        }
        
        </>
    )
}

export default BookingPage;