import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const SolarForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pdfVisible, setPdfVisible] = useState(false); // Show PDF button after submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/inquiries/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry. Please try again later.");
      }

      const data = await response.json();

      alert("Inquiry submitted successfully!");
      setPdfVisible(true); // Show the download button after form submission

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });

      if (onClose) onClose();
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setError("Failed to submit inquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    let pathToPdf = 'solar_quotation.pdf';
    const pdfPath = `../../../public/${pathToPdf}`; // Path inside public folder
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pathToPdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="p-4 bg-light border rounded shadow mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Contact Details</h2>
      {error && <p className="text-danger text-center">{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
          <Button variant="danger" onClick={onClose}>
            Close
          </Button>
        </div>
      </Form>

      {pdfVisible && (
        <div className="text-center mt-3">
          <Button variant="success" onClick={handleDownload}>
            Download PDF
          </Button>
        </div>
      )}
    </Container>
  );
};

export default SolarForm;
