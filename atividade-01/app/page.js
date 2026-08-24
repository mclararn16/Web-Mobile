import Link from "next/link";

export default function Home() {
  const exercicios = [
    { href: "/exercicio-210", label: "Exercício da Pg. 210" },
    { href: "/exercicio-231", label: "Exercício da Pg. 231" },
    { href: "/exercicio-246", label: "Exercício da Pg. 246" },
    { href: "/exercicio-263", label: "Exercício da Pg. 263" },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Atividade de HTML/CSS em React + Next.js</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {exercicios.map((ex) => (
          <li key={ex.href} style={{ margin: "12px 0" }}>
            <Link href={ex.href} style={{ fontSize: "18px", color: "#3d7b80" }}>
              {ex.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}