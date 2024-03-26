class Storage {
  setItem(key, value) {
    if (!value) return null;
    localStorage.setItem(key, JSON.stringify(value));
    return null;
  }

  getItem(key) {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : {};
  }
}

export default new Storage();
