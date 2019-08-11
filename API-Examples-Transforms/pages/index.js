import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame, useMotionValue, useTransform] = [
  "Frame",
  "useMotionValue",
  "useTransform"
].map(c => dynamic(() => import("framer").then(mod => mod[c]), { ssr: false }));

export function MyComponent() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);

  return (
    <Frame
      drag={"x"}
      x={x}
      scale={scale}
      size={150}
      radius={30}
      background={"#fff"}
    />
  );
}
export default function() {
  return (
    <div id="root">
      <MyComponent />
    </div>
  );
}
