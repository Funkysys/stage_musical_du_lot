"use client";
import { createContext } from "react";
import { dataType } from "../../types";

export const DataContext = createContext<{
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  data: dataType[];
  setData: React.Dispatch<React.SetStateAction<dataType[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  changeDataSource: (source: "august" | "july" | "winter") => void;
}>({
  title: "",
  setTitle: () => {},
  data: [],
  setData: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
  changeDataSource: () => {},
});
