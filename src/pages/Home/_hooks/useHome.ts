import { TModel3d } from '@/types/model3d.types';

type TAdjust3DProperties = {
  screenPosition?: TModel3d['position'];
  screenScale?: TModel3d['scale'];
  rotation?: TModel3d['rotation'];
};

type TAdjustObjectForScreenSize = {
  mobile?: TAdjust3DProperties;
  desktop?: TAdjust3DProperties;
  initial: {
    screenPosition: TModel3d['position'];
    screenScale: TModel3d['scale'];
    rotation?: TModel3d['rotation'];
  };
};

const useHome = () => {
  const adjustObjectForScreenSize = ({
    initial,
    mobile,
    desktop,
  }: TAdjustObjectForScreenSize) => {
    let screenScale: TModel3d['scale'] = initial.screenScale;
    let screenPosition: TModel3d['position'] = initial.screenPosition;
    let rotation: TModel3d['rotation'] = initial.rotation;

    if (window.innerWidth < 768) {
      screenScale = mobile?.screenScale
        ? mobile.screenScale
        : initial.screenScale;
      screenPosition = mobile?.screenPosition
        ? mobile.screenPosition
        : initial.screenPosition;
      rotation = mobile?.rotation ? mobile.rotation : initial.rotation;
    } else {
      screenScale = desktop?.screenScale
        ? desktop.screenScale
        : initial.screenScale;
      screenPosition = desktop?.screenPosition
        ? desktop.screenPosition
        : initial.screenPosition;
      rotation = desktop?.rotation ? desktop.rotation : initial.rotation;
    }

    return { screenPosition, screenScale, rotation };
  };

  const adjustIslandForScreenSize = () => {
    return adjustObjectForScreenSize({
      initial: {
        screenPosition: [0, -6.5, -43],
        screenScale: [1, 1, 1],
        rotation: [0.1, 4.7, 0],
      },
      mobile: {
        screenScale: [0.9, 0.9, 0.9],
      },
      desktop: {
        screenScale: [1, 1, 1],
      },
    });
  };

  const adjustPlaneForScreenSize = () => {
    return adjustObjectForScreenSize({
      initial: {
        screenPosition: [3, 3, 3],
        screenScale: [0, -4, -4],
      },
      mobile: {
        screenScale: [1.5, 1.5, 1.5],
        screenPosition: [0, -1.5, 0],
      },
    });
  };

  return {
    methods: {
      adjustIslandForScreenSize,
      adjustPlaneForScreenSize,
    },
  };
};

export default useHome;
