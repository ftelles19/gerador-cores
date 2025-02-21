import React, { useState } from "react";

const ColorGenerator = () => {
  const [color, setColor] = useState("#ffffff");
  const [copiedHex, setCopiedHex] = useState(false);
  const [copiedRgb, setCopiedRgb] = useState(false);

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
    setCopiedHex(false);
    setCopiedRgb(false);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "hex") {
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 1500);
    } else {
      setCopiedRgb(true);
      setTimeout(() => setCopiedRgb(false), 1500);
    }
  };

  const hexToRgb = (hex) => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div 
      style={{ 
        backgroundColor: color, 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        transition: "background-color 1s ease", // Animação suave
      }}
    >
      <h1>Gerador de Cores</h1>
      <p>Cor atual: <strong>{color}</strong></p>
      <p>Formato RGB: <strong>{hexToRgb(color)}</strong></p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={generateColor} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Gerar Nova Cor
        </button>
        <button onClick={() => copyToClipboard(color, "hex")} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Copiar Hexadecimal
        </button>
        <button onClick={() => copyToClipboard(hexToRgb(color), "rgb")} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Copiar RGB
        </button>
      </div>

      {copiedHex && <p style={{ marginTop: "10px", color: "green", fontSize: "20px" }}>Cor no formato Hexadecimal copiada!</p>}
      {copiedRgb && <p style={{ marginTop: "10px", color: "green", fontSize: "20px" }}>Cor no formato RGB copiada!</p>}
    </div>
  );
};

export default ColorGenerator;
