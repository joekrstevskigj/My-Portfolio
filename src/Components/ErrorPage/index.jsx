import { Link } from "react-router-dom";

export default function ErrorPage() {

    return (
        <div>
            <h2>The Page does not exsist yet!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}