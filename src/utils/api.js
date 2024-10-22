const BASE_URL = "https://panda-market-api.vercel.app/products";

const getBestProducts = async () => {
  const response = await fetch(
    `${BASE_URL}?page=1&pageSize=4&orderBy=favorite`
  );
  const data = response.json();
  return data;
};

const getAllProducts = async ({ page, orderBy }) => {
  const response = await fetch(
    `${BASE_URL}?page=${page}&pageSize=10&orderBy=${orderBy}`
  );
  const data = await response.json();
  return data;
};

export { getBestProducts, getAllProducts };
