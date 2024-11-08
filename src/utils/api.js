const BASE_URL = "https://panda-market-api.vercel.app/products";

const getBestProducts = async (pageSize) => {
  const response = await fetch(
    `${BASE_URL}?page=1&pageSize=${pageSize}&orderBy=favorite`
  );
  const data = response.json();
  return data;
};

const getAllProducts = async ({ page, orderBy, pageSize }) => {
  const response = await fetch(
    `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const data = await response.json();
  return data;
};

export { getBestProducts, getAllProducts };
