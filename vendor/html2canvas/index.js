export default async function html2canvas() {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext("2d");
  if (context) {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#111111";
    context.font = "16px sans-serif";
    context.fillText("Screenshot fallback mode", 20, 32);
    context.fillText(window.location.href, 20, 56);
  }
  return canvas;
}
