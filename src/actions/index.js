export const textChange = (text) => {
  return {
    type: 'textarea_changed',
    payload: text
  };
};