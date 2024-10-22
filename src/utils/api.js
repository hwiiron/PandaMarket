const BASE_URL = "https://panda-market-api.vercel.app/products";

const getBestProducts = async () => {
  const response = await fetch(
    `${BASE_URL}?page=1&pageSize=4&orderBy=favorite`
  );
  const data = response.json();
  return data;
};

const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}?page=1&pageSize=10&orderBy=recent`);
  const data = await response.json();
  return data;
};

export { getBestProducts, getAllProducts };
