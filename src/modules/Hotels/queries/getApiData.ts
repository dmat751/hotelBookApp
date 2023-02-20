export const getApiData = async <T>(url: string): Promise<T> => {
  const dataResp = await fetch(url);

  if (!dataResp.ok) {
    throw new Error('Could not fetch data!');
  }

  return await dataResp.json();
};
