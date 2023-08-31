const logger = () => (next) => (action) => {
  console.group(action.type);
  const result = next(action);
  return result;
};

export default logger;
