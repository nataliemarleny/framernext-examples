import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame] = ["Frame"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  const variants = {
    variantA: { scale: 0.75, rotate: 0 },
    variantB: { scale: 1, rotate: 90 }
  };

  return (
    <Frame
      initial={"variantA"}
      whileHover={"variantB"}
      variants={variants}
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
