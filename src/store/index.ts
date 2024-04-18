import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Result } from "@/types";

interface StoreState {
  results: Result[];
  addResult: (newResult: Result) => void;
  removeResult: (id: string) => void;
}

const useResultsStore = create(
  persist<StoreState>(
    set => ({
      results: [],
      addResult: newResult =>
        set(state => {
          const updatedResults = [newResult, ...state.results];
          return { results: updatedResults };
        }),
      removeResult: id =>
        set(state => {
          const updatedResults = state.results.filter(
            result => result.id !== id,
          );
          return { results: updatedResults };
        }),
    }),
    { name: "results" },
  ),
);

export default useResultsStore;
