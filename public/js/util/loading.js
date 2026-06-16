const buildLoadingOverlay = () => {
  const overlay = document.createElement("div");
  overlay.id = "loading-overlay";
  overlay.className = "loading-overlay";

  const content = document.createElement("div");
  content.className = "loading-content";

  const spinner = document.createElement("div");
  spinner.className = "spinner";

  const statusDisplay = document.createElement("div");
  statusDisplay.id = "process-status";
  statusDisplay.classList.add("process-status", "status-hidden");
  const statusText = document.createElement("span");
  statusText.classList.add("status-text");
  statusDisplay.appendChild(statusText);

  const stopBtn = document.createElement("button");
  stopBtn.className = "stop-btn";
  stopBtn.textContent = "Stop";
  stopBtn.addEventListener("click", async () => {
    await fetch("/stop", { method: "POST" });
    hideLoadStatus();
  });

  const dismissBtn = document.createElement("button");
  dismissBtn.className = "dismiss-btn hidden";
  dismissBtn.textContent = "Done";
  dismissBtn.addEventListener("click", () => hideLoadStatus());

  content.append(spinner, statusDisplay, stopBtn, dismissBtn);
  overlay.appendChild(content);

  return overlay;
};

export const showLoadStatus = () => {
  let overlay = document.getElementById("loading-overlay");
  if (!overlay) {
    overlay = buildLoadingOverlay();
    document.body.append(overlay);
  }
  overlay.querySelector(".spinner").classList.remove("spinner-done");
  overlay.querySelector(".stop-btn").classList.remove("hidden");
  overlay.querySelector(".dismiss-btn").classList.add("hidden");
  overlay.classList.add("active");
};

export const showDismissButton = () => {
  const overlay = document.getElementById("loading-overlay");
  if (!overlay) return;
  overlay.querySelector(".spinner").classList.add("spinner-done");
  overlay.querySelector(".stop-btn").classList.add("hidden");
  overlay.querySelector(".dismiss-btn").classList.remove("hidden");
};

export const hideLoadStatus = () => {
  const overlay = document.getElementById("loading-overlay");
  if (!overlay) return;
  overlay.classList.remove("active");
};
