import { useEffect, useRef } from 'react';
import { Application, SPEObject } from '@splinetool/runtime';

interface UseSplineAnimationProps {
  onLoad?: (spline: Application) => void;
  objectName?: string;
}

export function useSplineAnimation({ onLoad, objectName }: UseSplineAnimationProps = {}) {
  const splineRef = useRef<Application>();
  const objectRef = useRef<SPEObject>();

  useEffect(() => {
    if (splineRef.current && objectName) {
      objectRef.current = splineRef.current.findObjectByName(objectName);
    }
  }, [objectName]);

  const handleLoad = (spline: Application) => {
    splineRef.current = spline;
    if (objectName) {
      objectRef.current = spline.findObjectByName(objectName);
    }
    onLoad?.(spline);
  };

  const rotateObject = (x: number, y: number) => {
    if (!objectRef.current) return;
    objectRef.current.rotation.x = x;
    objectRef.current.rotation.y = y;
  };

  const scaleObject = (scale: number) => {
    if (!objectRef.current) return;
    objectRef.current.scale.x = scale;
    objectRef.current.scale.y = scale;
    objectRef.current.scale.z = scale;
  };

  const animateObject = (animation: string) => {
    if (!objectRef.current) return;
    switch (animation) {
      case 'spin':
        objectRef.current.rotation.y += Math.PI * 2;
        break;
      case 'bounce':
        break;
      default:
        break;
    }
  };

  return {
    handleLoad,
    rotateObject,
    scaleObject,
    animateObject,
    objectRef,
    splineRef,
  };
} 