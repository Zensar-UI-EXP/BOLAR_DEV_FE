'use client';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from 'store/index';
import { increment } from 'store/slices/exampleSlice';

export function useExample() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((s: RootState) => s.example.count);
  return { count, increment: () => dispatch(increment()) };
}
