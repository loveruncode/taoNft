import React, { useState } from "react";
import { NFTServices } from "./service/nft.service";

export default function CreateNFT() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [file, setFile] = useState(null);

  const handleCreate = () => {
    NFTServices.createNFT({ name, symbol, file });
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.currentTarget.value)}
      />
      <input type="file" onChange={(e) => setFile(e.currentTarget.files[0])} />

      <button onClick={handleCreate}>create</button>
    </div>
  );
}
