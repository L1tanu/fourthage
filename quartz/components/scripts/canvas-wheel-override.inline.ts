function overrideCanvasWheel() {
  const containers = document.querySelectorAll<HTMLElement>(".canvas-container");
  for (const container of Array.from(containers)) {
    if (container.dataset.wheelOverride === "true") continue;
    container.dataset.wheelOverride = "true";

    container.addEventListener(
      "wheel",
      (e: WheelEvent) => {
        const scrollable =
          e.target instanceof HTMLElement ? e.target.closest(".canvas-node-content") : null;
        if (scrollable) {
          const canScroll = scrollable.scrollHeight > scrollable.clientHeight;
          if (canScroll) {
            const atTop = scrollable.scrollTop <= 0;
            const atBottom =
              scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 1;
            if (!(atTop && e.deltaY < 0) && !(atBottom && e.deltaY > 0)) return;
          }
        }
        if (e.ctrlKey) return; // let the plugin's own zoom-on-ctrl+wheel run

        e.stopImmediatePropagation(); // block the plugin's own zoom-only handler
        e.preventDefault();

        const viewport = container.querySelector<HTMLElement>(".canvas-viewport");
        if (!viewport) return;
        const matrix = new DOMMatrixReadOnly(getComputedStyle(viewport).transform);
        const x = matrix.e - e.deltaX;
        const y = matrix.f - e.deltaY;
        viewport.style.transform = `translate(${x}px, ${y}px) scale(${matrix.a})`;
      },
      { capture: true, passive: false },
    );
  }
}

document.addEventListener("nav", overrideCanvasWheel);
document.addEventListener("render", overrideCanvasWheel);