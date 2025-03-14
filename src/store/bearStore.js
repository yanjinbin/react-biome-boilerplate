import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBearStore = create(
	persist(
		(set) => ({
			bears: 0,
			actions: {
				removeBears: () => set({ bears: 0 }),
				addBears: (deltaBears) =>
					set((state) => ({ bears: state.bears + deltaBears })),
				updateBears: (newBears) => set({ bears: newBears }),
			},
		}),
		{
			name: "bear storage",
		},
	),
);

export const useBears = () => useBearStore((state) => state.bears);
