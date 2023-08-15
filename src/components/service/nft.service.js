export const NFTServices = {
  createNFT: async ({ name, symbol, file }) => {
    const obj = {
      network: "devnet",
      private_key:
        "3Vxkgq1x7KieC9ys4CySx2qubZCmryg5m6eDDaZQdq3XCrfL5fPGi99QqcHwTHXNNxftE5nC9gXE1JX9XcWnqQAR",
      name,
      symbol,
      file,
      royalty: 10,
    };
    const form_data = new FormData();

    for (let key in obj) {
      console.log(key);
      console.log(obj[key]);
      form_data.append(key, obj[key]);
    }

    console.log(obj);
    fetch("https://api.shyft.to/sol/v1/nft/create", {
      method: "POST",
      headers: {
        "x-api-key": "ySFUB6cRBIwKY_kn",
      },
      body: form_data,
    });
  },
};
