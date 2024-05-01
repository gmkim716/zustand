import { create } from "zustand";

interface Memo {
  content: string;
  id: number;
}

interface MemoState {
  memoList: Memo[];
  addMemo: (content: string) => void;
  removeMemo: (id: number) => void;
}

export const useMemoStore = create<MemoState>((set) => ({
  // state 정의
  memoList: [],

  // actions 정의
  addMemo: (val: any) =>
    set((prev: any) => ({
      memoList: [
        ...prev.memoList,
        { content: val, id: new Date().getMilliseconds() },
      ],
    })),
  removeMemo: (id: number) =>
    set((prev: any) => ({
      memoList: prev.memoList.filter((e: any) => e.id !== id),
    })),
}));
