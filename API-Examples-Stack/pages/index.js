import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame, Stack] = ["Frame", "Stack"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  return (
    <Stack size={150} gap={10} direction={"horizontal"}>
      <Frame size={40} background={"#fff"} radius={40} />
      <Frame size={40} background={"#fff"} radius={40} />
      <Frame size={40} background={"#fff"} radius={40} />
    </Stack>
  );
}

export default function() {
  return (
    <div id="root">
      <MyComponent />
    </div>
  );
}
