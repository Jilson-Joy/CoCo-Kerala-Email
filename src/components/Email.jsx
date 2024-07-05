


import React, { useRef, useState } from "react";
import "./Email.css";

function Email() {
  const initialState = {
    name: "Jaimy Joseph",
    title:"Managing Director & CEO",
    phone: "+91 9048244527",
    email: "jaimy.cocokerala.com",
  };

  const [formData, setFormData] = useState(initialState);
  const emailContentRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleCopy = () => {
    if (emailContentRef.current) {
      const range = document.createRange();
      range.selectNode(emailContentRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
      alert('Copied to clipboard');
    }
  };

  return (
    <div className="container">
      <div
        ref={emailContentRef}
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          maxWidth: "600px",
          maxHeight: "150px",
          color: "#000",
        }}
      >
        {/* logo 1 */}
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
          <img
            src="https://i.postimg.cc/s2RHdL1J/COCO-KERALA-header.png"
            alt="Top Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* text */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "3px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <div style={{ fontSize: "14px", padding: "0 9px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
              {formData.name}
            </p>
            <p style={{ marginBottom: "3px", fontSize: "12px" }}>
              {formData.title}
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3px",
                fontSize: "13px",
              }}
            >
              Phone: {formData.phone}
            </p>
            <p style={{ marginBottom: "3px", fontSize: "12px" }}>
              Email:
              <a href={`mailto:${formData.email}`}>{formData.email}</a>
            </p>
          </div>
          <div className="section2" style={{ fontSize: "10.5px" }}>
            <p style={{ marginBottom: "3px" }}>Corporate Office:</p>
            <p style={{ marginBottom: "3px" }}>2nd Floor,K C Tower</p>
            <p style={{ marginBottom: "3px" }}>Padivattom</p>
            <p style={{ marginBottom: "3px" }}>Ernakulam-682024</p>
            <p style={{ marginBottom: "3px" }}>Kerala,India</p>
            <p style={{ marginBottom: "3px" }}>Phone: +91 9048200074</p>
            <p style={{ marginBottom: "3px" }}>
              Email:
              <a
                href="mailto:your.email@company.com"
                style={{ color: "#0000EE" }}
              >
                info@cocokerala.com
              </a>
            </p>
            <p style={{ marginBottom: "3px" }}>
              Website:{" "}
              <a
                href="https://www.yourcompany.com"
                style={{ color: "#0000EE" }}
              >
                www.cocokerala.com
              </a>
            </p>
          </div>
          <div>
            <div className="section1">
              <div>
                <div
                  style={{ flex: "1", padding: "0 9px", fontSize: "10.5px" }}
                >
                  <p style={{ marginBottom: "3px" }}>Mumbai:+919048200085</p>
                  <p style={{ marginBottom: "3px" }}>Kolkatha:+919048299978</p>
                  <p style={{ marginBottom: "3px" }}>Delhi:+919048200086</p>
                  <p style={{ marginBottom: "3px" }}>Surat:+919048200025</p>
                  <p style={{ marginBottom: "3px" }}>Pune:+919048200084</p>
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  textAlign: "right",
                  padding: "0 9px",
                  fontSize: "10.5px",
                }}
              >
                <p style={{ marginBottom: "3px" }}>Ahmedabad:+919048200072</p>
                <p style={{ marginBottom: "3px" }}>Hyderabad:+918714612103</p>
                <p style={{ marginBottom: "3px" }}>Lucknow:+918714669774</p>
                <p style={{ marginBottom: "3px" }}>Rajkot:+918714669771</p>
                <p style={{ marginBottom: "3px" }}>Nagpur:+919048200073</p>
              </div>
            </div>
            <div style={{ flex: "1", padding: "0 9px", fontSize: "11px" }}>
              <p style={{ marginBottom: "3px", whiteSpace: "nowrap" }}>
                Karnataka & Tamilnadu:+918714615177
              </p>
              <p style={{ marginBottom: "3px", whiteSpace: "nowrap" }}>
                MP & Chattisgarh:+918714627900
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "left", marginTop: "3px" }}>
          <img
            src="https://i.postimg.cc/brxbcm5K/COCO-KERALA-68.png"
            alt="Bottom Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      {/* form input */}
      <form
        className="emailform"
        onSubmit={handleSubmit}
        style={{ width:'100%',maxWidth: "600px", maxHeight: "150px" }}
      >
       <div className="signatureform1">
          <div className="emailinput">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="emailinput">
            <label htmlFor="">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="emailinput">
            <label htmlFor=""> Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="emailinput">
            <label htmlFor=""> Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="emailinputButton">
            <button
              type="button"
              onClick={handleReset}
              style={{ backgroundColor: "#f02525", color:'white',fontWeight:'600' }}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleCopy}
              style={{ backgroundColor: "#4ac738",color:'white',fontWeight:'600' }}
            >
              Copy
            </button>
          </div>
       </div>
      </form>
    </div>
  );
}

export default Email;
