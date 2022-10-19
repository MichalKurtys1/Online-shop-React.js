const FIREBASE_DOMAIN =
  "https://onlineshop-eb044-default-rtdb.europe-west1.firebasedatabase.app";

export async function getAllItems() {
  const response = await fetch(`${FIREBASE_DOMAIN}/items.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch items.");
  }

  const transformedItems = [];
  for (const key in data) {
    const itemObj = {
      id: key,
      ...data[key],
    };

    transformedItems.push(itemObj);
  }

  return transformedItems;
}
