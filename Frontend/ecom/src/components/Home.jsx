import { useNavigate } from "react-router-dom";
import productData from "./data.json";
import Cart from "./Cart";

function Home() {
    const navigate = useNavigate();

    const navBarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        position: "sticky",
        top: "0",
        width: "100%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        zIndex: 10,
    };

    const logoStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
    };

    const linkContainerStyle = {
        display: "flex",
        gap: "20px",
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    };

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        boxSizing: "border-box",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
    };

    const cartStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive layout
        gap: "30px",
        padding: "40px",
        backgroundColor: "#f1f1f1",
    };

    return (
        <div>
            <nav style={navBarStyle}>
                <div style={logoStyle} onClick={() => navigate("/")}>
                    E-Commerce
                </div>
                <div style={linkContainerStyle}>
                    <span style={linkStyle} onClick={() => navigate("/signup")}>
                        Sign Up
                    </span>
                    <span style={linkStyle} onClick={() => navigate("/login")}>
                        Login
                    </span>
                </div>
            </nav>
            <div style={containerStyle}>
                <h1>Welcome to E-Commerce</h1>
            </div>
            <div style={cartStyle}>
                {productData?.map((product) => (
                    <Cart key={product.id} product={product}></Cart>
                ))}
            </div>
        </div>
    );
}

export default Home;