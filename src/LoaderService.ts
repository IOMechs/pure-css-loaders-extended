import Loader from './Interfaces/Loader';

export class LoaderService {
  configureLdsCircle(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll('64px', size)
        .replaceAll('#fafafa', color),
    };
  }
}
