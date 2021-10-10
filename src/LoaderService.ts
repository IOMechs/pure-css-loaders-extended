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
    obj.cssRules = obj.cssRules.replace(/\n/g, '');
    var height, width;
    height = width = parseInt(obj.size)

    const keyFrame0top = height*0.1;
    const keyFrame0height = height - keyFrame0top*2;
    
    const keyFrame100height = keyFrame0height/2;
    const keyFrame100top = (height - keyFrame100height)/2
    
    obj.cssRules = this.replaceKeyframe0Values(
      obj.cssRules,
      keyFrame0top,
      keyFrame0height
    )

    obj.cssRules = this.replaceKeyframe100Values(
      obj.cssRules,
      keyFrame100top,
      keyFrame100height
    )

    obj.cssRules = this.replaceSizeValues(
      obj.cssRules,
      obj.size
    )

    for(const i of Array.from(Array(3).keys())){
      let re = new RegExp(`(\\(${i+1}\\)\\s*{).*?(;\\s*animation)`)

      const pos = Math.floor((width * (0.1 + (0.1 * i*3) ) ))

      obj.cssRules = obj.cssRules
      .replace(
        re, 
        `$1left:${pos}px$2`
      )
    }

    obj.cssRules = obj.cssRules
    .replace(
      /(left:\s*8px;\s*).*(;\s*back)/, 
      `$1width:${width*0.2}px$2`
    )
    
    return {
      ...obj,
      cssRules: obj.cssRules
        // .replaceAll(obj.size, size)
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

  replaceKeyframe0Values(
    cssString: string,
    keyFrametop: number,
    keyFrameheight: number
  ){
    return cssString
      .replace(
        /({\s*0%\s*{).*(}\s*100%)/,
        `$1top:${keyFrametop}px;height:${keyFrameheight}px$2`
      )
  }

  replaceKeyframe100Values(
    cssString: string,
    keyFrametop: number,
    keyFrameheight: number
  ){
    return cssString
      .replace(
        /(50%\s*{\s*).*?(\s*})/,
        `$1top:${keyFrametop}px;height:${keyFrameheight}px$2`
      )
  }

  replaceSizeValues(
    cssString: string,
    size: string,
  ){
    return cssString
      .replace(
        /(relative;\s*).*?(\s*}\.lds)/,
        `$1width:${size};height:${size}$2`
      )
  }
}
