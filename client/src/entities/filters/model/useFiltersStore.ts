import { create } from "zustand";
import type { FilterState } from "../types/models";

export const useFiltersStore = create<FilterState>()((set) => ({
  filters: {
    statuses: [],
    categories: [],
    priorities: [],
  },

  setFilters: (values, type) => {
    set((state) => ({ filters: { ...state.filters, [type]: values } }));
  },

  resetFilters: () => {
    set(() => ({
      filters: {
        statuses: [],
        categories: [],
        priorities: [],
      },
    }));
  },
}));
