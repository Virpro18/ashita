import { ReactNode, Children } from "react";

// Tipe properti untuk fungsi
interface EachUtilsProps<T> {
  of: T[]; // Array data untuk dirender
  render: (item: T, index: number) => ReactNode; // Fungsi untuk merender setiap item
}

// Fungsi utilitas yang menggunakan Children.toArray untuk membuat elemen aman
function eachUtils<T>({ of, render }: EachUtilsProps<T>): ReactNode[] {
  return Children.toArray(of.map((item, index) => render(item, index)));
}

export default eachUtils;
