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
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsDefault(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsDualRing(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsEllipsis(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsFacebook(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsGrid(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsHeart(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsHourGlass(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsRing(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsRipple(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsRoller(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
  configureLdsSpinner(
    obj: Loader,
    color: string,
    size: string,
    animationDirection: any
  ) {
    return {
      ...obj,
      cssRules: obj.cssRules
        .replaceAll(obj.size, size)
        .replaceAll(obj.color, color),
    };
  }
}
