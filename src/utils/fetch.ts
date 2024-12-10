"user server";

export const  fetchServer = async (
  ProdUrl: string,
  endPoint: string,
  method: string = "GET", // Menambahkan parameter untuk menentukan metode
  data?: unknown, // Data hanya digunakan untuk metode yang memerlukan body
  database:string = "projectList"

) => {
  const baseURL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL || ProdUrl;

  // Opsi fetch
  const options: RequestInit = {
    method,
    headers: {
      "authorization":"euyyyyy",
      "Content-Type": "application/json",
    },
  };

  // Tambahkan body jika data tersedia dan metode mendukungnya
  if (["POST", "PUT", "PATCH"].includes(method.toUpperCase()) && data) {
    console.log("eksekusi !GET")
    const datas = {data,database}
    console.log(datas)
    options.body = JSON.stringify({ datas });
  }
  console.log("eksekusi GET")
  // console.log(method)
  // console.log(`${baseURL}${endPoint}`);
  const res = await fetch(`${baseURL}${endPoint}`, options);

  // Periksa apakah respons berhasil
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.statusText}`);
  }

  const json = await res.json();
  return json;
};

