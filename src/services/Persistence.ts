import Cookies from 'js-cookie';

export class PersistenceService {
  get(key: string) {
    return Cookies.get(key);
  }

  set(key: string, value: string) {
    Cookies.set(key, value);
  }
}
