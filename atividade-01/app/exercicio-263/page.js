export default function Exercicio263() {
  const produtos = [
    {
      nome: "Sansália Casual",
      preco: "R$ 199,90",
      imagem: "https://img.lojasrenner.com.br/item/931429850/original/5.jpg",
    },
    {
      nome: "Sandália Verão",
      preco: "R$ 89,90",
      imagem: "https://picsum.photos/id/22/150/150",
    },
    {
      nome: "Bota Urbana",
      preco: "R$ 259,90",
      imagem: "https://picsum.photos/id/23/150/150",
    },
    {
      nome: "Chinelo Slide",
      preco: "R$ 49,90",
      imagem: "https://picsum.photos/id/24/150/150",
    },
    {
      nome: "Sapatênis Clássico",
      preco: "R$ 179,90",
      imagem: "https://picsum.photos/id/25/150/150",
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "20px" }}>
        {produtos.map((p) => (
          <div
            key={p.nome}
            style={{
              backgroundColor: "#b8c99d",
              color: "#595151",
              padding: "15px",
              width: "180px",
              textAlign: "center",
              border: "2px solid #fff5d6 ",
              borderRadius: "12px",
            }}
          >
            <img
              src={p.imagem}
              alt={p.nome}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <p>{p.nome}</p>
            <p>{p.preco}</p>
          </div>
        ))}
      </div>
      <footer
        style={{
          backgroundColor: "#fff5d6",
          color: "#4e5861",
          textAlign: "center",
          padding: "15px",
        }}
      >
        Loja de Calçados Maria Clara
      </footer>
    </div>
  );
}