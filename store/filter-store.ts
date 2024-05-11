import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface FilterState
{
    minRevenue: string | null;
    maxRevenue: string | null;
    sort: string | null;
    startDate: string | null;
    endDate: string | null;
    setFilter: (filterState: Partial<FilterState>) => void;
}

const initialState: FilterState = {
    minRevenue: null,
    maxRevenue: null,
    sort: null,
    startDate: null,
    endDate: null,
    setFilter: () => { },
};

export const useFilterStore = create<FilterState>()(
    devtools(
        (set) => ({
            ...initialState,
            setFilter: (filterState: Partial<FilterState>) => set(filterState),
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
