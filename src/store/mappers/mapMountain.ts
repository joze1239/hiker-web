import { Mountain } from 'types/Mountain';

export const mapMountain = (mountain: any): Mountain => {
  const { id, attributes } = mountain;

  return {
    id,
    ...attributes,
  };
};
