import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame, useCycle] = ["Frame", "useCycle"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  const [animate, cycle] = useCycle(
    { scale: 1.5, rotate: 0 },
    { scale: 1.0, rotate: 90 }
  );
  return (
    <Frame
      animate={animate}
      onTap={() => cycle()}
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
