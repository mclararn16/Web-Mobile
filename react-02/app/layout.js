import "./globals.css";
export const metadata = {
 title: "Meu App",
 description: "Demonstração de conceitos de React",
};
export default function RootLayout({ children }) {
 return (
<html lang="pt-br">
<body>{children}</body>
</html>
 );
}