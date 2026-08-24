export default function Exercicio231() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#e35241",
          width: "700px",
          padding: "0px",
          margin: "0 auto",
        }}
      >
        Div vermelha (padding 0)
      </div>
      <div
        style={{
          backgroundColor: "#b5cc6a",
          width: "700px",
          padding: "25px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        Div verde (padding 25px)
      </div>
      <p style={{ textAlign: "center", maxWidth: "700px", margin: "20px auto" }}>
      </p>
    </div>
  );
}