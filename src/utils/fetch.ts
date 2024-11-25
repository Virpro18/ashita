export const fetchServer = async (
    ProdUrl: string,
    endPoint: string,
    method: string = "POST", // Menambahkan parameter untuk menentukan metode
    data?: unknown // Data hanya digunakan untuk metode yang memerlukan body
  ) => {
    const baseURL = process.env.NRXT_PUBLIC_DEVELOPMENT_URL || ProdUrl;
  
    // Opsi fetch
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    // Tambahkan body jika data tersedia dan metode mendukungnya
    if (["POST", "PUT", "PATCH"].includes(method.toUpperCase()) && data) {
      options.body = JSON.stringify({ data });
    }
  
    const res = await fetch(`${baseURL}${endPoint}`, options);
  
    // Periksa apakah respons berhasil
    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.statusText}`);
    }
  
    const json = await res.json();
    return json;
  };
  
  export const fetchClient = async (endPoint: string, method: string = "GET", data?: unknown) => {
    // Opsi fetch
    const options: RequestInit = { method };
  
    // Tambahkan body jika data tersedia dan metode mendukungnya
    if (["POST", "PUT", "PATCH"].includes(method.toUpperCase()) && data) {
      options.body = JSON.stringify({ data });
      options.headers = { "Content-Type": "application/json" };
    }
  
    const res = await fetch(endPoint, options);
  
    // Periksa apakah respons berhasil
    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.statusText}`);
    }
  
    const json = await res.json();
    return json;
  };
  