import { useMatch } from 'react-router-dom';

export type LinkData = {
  to: string;
  label: string;
};

export const useNavLinksIfRouteMatch = (
  route: string,
  links: LinkData[],
): LinkData[] => (useMatch(route) ? links : []);

export const useNavLinksIfRouteNotMatch = (
  route: string,
  links: LinkData[],
): LinkData[] => (useMatch(route) ? [] : links);
