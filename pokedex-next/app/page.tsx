"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      padding: "2rem",
      fontFamily: "Arial",
      textAlign: "center",
    }}>
      <h1>Pokédex da alegria!</h1>
      <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
        Aqui você pode sonhar, pode acreditar, pode alucinar. Use o menu de navegação acima, ou não.
      </p>

      
    </div>
  );
}
