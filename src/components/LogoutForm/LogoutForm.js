import { React } from "react";
import { useNavigate } from "react-router-dom";

const LogoutForm = () => {
    const navigate = useNavigate();

    const handleLogout = async (event) => {
        const refresh_token = localStorage.getItem("refresh_token");
        event.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/user/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'refresh_token': refresh_token }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")

            navigate("/login");

        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="logout">
            <form action="">
                <button type="submit" onClick={(event) => handleLogout(event)}>Logout</button>
            </form>

        </div>
    )

}

export default LogoutForm;
