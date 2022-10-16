export const fetchData = async (
  url: string,
  setState: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const response = await fetch(url);
    setState(await response.json());
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = async (url: string) => {
  try {
    await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};
