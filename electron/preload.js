import { useLoading } from "./utils/loading";
import { domReady } from "./utils/dom";

const { appendLoading, removeLoading } = useLoading();

domReady().then(appendLoading);

window.onmessage = (ev) => {
  ev.data.payload === "removeLoading" && removeLoading();
};
