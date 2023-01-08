import PaypalCheckoutButton from "../components/PaypalCheckoutButton";

const Checkout = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <PaypalCheckoutButton currency="MXN" amount={1} showSpinner={true} />
                </div>
            </div>
        </div>
    );
}

export default Checkout;