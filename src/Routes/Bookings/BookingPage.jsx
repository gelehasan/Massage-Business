import BookingForm from "../../Components/BookingComponent/BookingDetails";
import { useSelector } from "react-redux";
import { getAllServices } from "../../Store/services/serviceSelector";
import LoadingSpinner from "../../Components/LoadingSpinner/loadingSpinner";
import Footer from "../../Components/Footer/Footer";
const BookingPage = () => {
    const AllServces = useSelector(getAllServices);
    const isServiceLoading = useSelector((state) => state.services.isServiceLoading);


    console.log(AllServces)
    return (
        <>
            {
                isServiceLoading ?
                    <LoadingSpinner />
                    :
                    <BookingForm />

            }

            <Footer />
        </>
    )
}

export default BookingPage;