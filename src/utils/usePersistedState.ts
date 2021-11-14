import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { PersistenceService } from '@/services/Persistence';

const persistenceService = new PersistenceService();

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = persistenceService.get(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    persistenceService.set(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
