import { create } from "zustand";

interface Result {
  id: string;
  names: {
    male: string;
    female: string;
  };
  similarity: string;
  date: Date;
}

interface StoreState {
  results: Result[];
  addResult: (newResult: Result) => void;
  removeResult: (id: string) => void;
}

const useLoversStore = create<StoreState>(set => ({
  results: [],
  addResult: newResult =>
    set(state => ({ results: [...state.results, newResult] })),
  removeResult: id =>
    set(state => {
      const updatedResults = state.results.filter(result => result.id !== id);
      return { results: updatedResults };
    }),
}));

export default useLoversStore;
