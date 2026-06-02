// Lightweight toast used by the client-side forms. Mirrors the prototype's
// imperative showToast — appends a single reusable element to <body>.

let toastTimer: ReturnType<typeof setTimeout> | undefined;

export function showToast(msg: string) {
  if (typeof document === "undefined") return;
  let el = document.getElementById("proto-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "proto-toast";
    el.className = "proto-toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el!.classList.remove("show"), 3000);
}
