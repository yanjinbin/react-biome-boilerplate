// userStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
	name: "limeimei",
	age: 11,
	family: {
		father: "peter",
		mother: "jenny",
	},
};

const useUserStore = create(
	persist(
		(set) => ({
			userInfo: { ...initialState },
			actions: {
				updateName: (newName) =>
					set((state) => ({
						userInfo: { ...state.userInfo, name: newName },
					})),
				updateAge: (newAge) =>
					set((state) => ({
						userInfo: { ...state.userInfo, age: newAge },
					})),
				updateFamilyInfo: (newFamily) =>
					set((state) => ({
						userInfo: {
							...state.userInfo,
							family: {
								...state.userInfo.family,
								...newFamily,
							},
						},
					})),
				resetUserInfo: () => set({ userInfo: { ...initialState } }),
			},
		}),
		{
			name: "user-storage",
			partialize: (state) => ({ userInfo: state.userInfo }),
		},
	),
);

export const useUserInfo = () => useUserStore((state) => state.userInfo);
export const useUserActions = () => useUserStore((state) => state.actions);
