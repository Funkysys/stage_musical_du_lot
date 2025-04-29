"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { dataType } from "../../types";
import augustData from "../data/detailsAugustData";
import julyData from "../data/detailsJulyData";
import winterData from "../data/detailsWinterData";
import { DataContext } from "./dataContext";

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setData, loading, setLoading, error, setError } =
    useContext(DataContext);
  const [currentData, setCurrentData] = useState<dataType[]>(julyData);
  const [dataSource, setDataSource] = useState<"august" | "july" | "winter">(
    "july"
  );
  const [title, setTitle] = useState<string>("july");

  const memoizedSetLoading = useCallback(setLoading, [setLoading]);
  const memoizedSetError = useCallback(setError, [setError]);

  const changeDataSource = (source: "august" | "july" | "winter") => {
    setDataSource(source);
  };

  useEffect(() => {
    memoizedSetLoading(true);
    try {
      let fetchedData: dataType[] = [];
      if (dataSource === "august") {
        fetchedData = [...augustData];
      } else if (dataSource === "july") {
        fetchedData = [...julyData];
      } else if (dataSource === "winter") {
        fetchedData = [...winterData];
      }
      setCurrentData(fetchedData);
      memoizedSetLoading(false);
    } catch (err) {
      console.log(err);
      memoizedSetError("Failed to fetch data");
      memoizedSetLoading(false);
    }
  }, [dataSource, memoizedSetLoading, memoizedSetError]);

  return (
    <DataContext.Provider
      value={{
        data: currentData,
        setData,
        title,
        setTitle,
        loading,
        setLoading,
        error,
        setError,
        changeDataSource,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
