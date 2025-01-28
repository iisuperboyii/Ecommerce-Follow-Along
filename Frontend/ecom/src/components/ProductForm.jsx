import { useState } from "react";

const ProductForm = () => {
    const [formData, setFormData] = useState({
        productName: "",
        productDescription: "",
        productPrice: "",
        productImage: null, 
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            setFormData({
                ...formData,
                [name]: files[0], 
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { productName, productDescription, productPrice, productImage } = formData;
        

        if (!productName || !productDescription || !productPrice || !productImage) {
            setError('All fields are required');
            return;
        } else {
            setError('');
        }

        alert("Product added successfully!");

        console.log(formData)
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        boxSizing: "border-box",
    };

    const formStyle = {
        width: "100%",
        maxWidth: "360px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    };

    const headingStyle = {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333",
    };

    const inputContainerStyle = {
        marginBottom: "15px",
    };

    const inputStyle = {
        width: "100%",
        maxWidth: "300px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px",
    };

    const labelStyle = {
        marginBottom: "5px",
        display: "block",
        fontWeight: "bold",
        color: "#555",
    };

    const errorStyle = {
        color: "red",
        marginBottom: "15px",
        fontSize: "14px",
    };

    const buttonStyle = {
        padding: "12px",
        width: "100%",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        textAlign: "center",
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2 style={headingStyle}>Add Product</h2>
                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="productName">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="productDescription">
                        Product Description:
                    </label>
                    <input
                        type="text"
                        id="productDescription"
                        name="productDescription"
                        value={formData.productDescription}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="productPrice">
                        Product Price:
                    </label>
                    <input
                        type="text"
                        id="productPrice"
                        name="productPrice"
                        value={formData.productPrice}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                <div style={inputContainerStyle}>
                    <label style={labelStyle} htmlFor="productImage">
                        Product Image:
                    </label>
                    <input
                        type="file"
                        id="productImage"
                        name="productImage"
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                {error && <p style={errorStyle}>{error}</p>}
                <button type="submit" style={buttonStyle}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
