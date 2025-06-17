import { useState } from "react";
import "./App.css";

import { usuarios } from "./lib/usuarios";

function App() {
  const [usuariosList, setUsuariosList] = useState(usuarios);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const valor = e.target.value;
    setSearchInput(valor);
    if (valor.trim() === "") {
      setUsuariosList(usuarios); // volta à lista original
    } else {
      setUsuariosList(
        usuarios.filter((user) =>
          user.nome.toLowerCase().includes(valor.toLowerCase())
        )
      );
    }
  };

  console.log(searchInput);
  return (
    <>
      <div className="relative h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto w-full space-y-10">
          <div className="text-3xl font-bold font-mono text-center">
            Filtrar usuários por nome
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Digite o usuário"
              className="outline-1 rounded-full py-2 px-4"
              value={searchInput}
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            {usuariosList &&
              usuariosList.map((user) => (
                <div key={user.id} className="flex gap-2">
                  <div className="text-lg font-bold">{user.nome}</div>
                  <div className="text-lg">{user.email}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
