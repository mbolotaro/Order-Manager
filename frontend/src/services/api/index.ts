export const api = async (
    method: "POST" | "GET" | "PUT" | "DELETE" | 'PATCH',
    url?: string,
    body?: object,
) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL as string}/${url}`,
      {
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          apikey: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
      }
    );
  
  return response
}