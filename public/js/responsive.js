const authElement = document.getElementById("auth-element");
const displayElement = document.getElementById("display-element");

export const clickHandler = async (e) => {
  const clickedElement = e.target;
  const clickId = clickedElement.id;
  const clickType = clickedElement.getAttribute("data-label") ?? clickedElement.closest("[data-label]")?.getAttribute("data-label");

  console.log("CLICK HANDLER");
  console.log(clickType);
  console.log(clickId);
  console.log(clickedElement);

  //   if (clickType === "toggle-menu") {
  //     const menu = document.querySelector(".nav-links");
  //     if (menu) menu.classList.toggle("open");
  //   }

  //   if (clickType === "pwToggle") await runPwToggle();
  //   if (clickType === "auth-submit") await runAuthSubmit();
  //   if (clickType === "search-btn-toggle") await runToggleSearchBtns();
  //   if (clickType === "grade-options-toggle") await runToggleGradeOptions();

  //------

  //   if (clickType === "run-all") await runRunAll();
  //   if (clickType === "check-alive") await runCheckAlive();
};

export const keyHandler = async (e) => {
  if (e.key !== "Enter") return null;
  e.preventDefault();

  const keyElement = e.target;
  const keyId = keyElement.id;

  console.log("KEY HANDLER");
  console.log(keyId);

  //   if (keyId === "auth-pw-input") await runAuthSubmit();

  return true;
};

if (authElement) {
  authElement.addEventListener("click", clickHandler);
  //   authElement.addEventListener("keydown", keyHandler);
}

if (displayElement) {
  displayElement.addEventListener("click", clickHandler);
  //   displayElement.addEventListener("keydown", keyHandler);
  //   displayElement.addEventListener("input", inputHandler);
  //   displayElement.addEventListener("change", changeHandler);
  //   displayElement.addEventListener("contextmenu", contextmenuHandler);
  //   displayElement.addEventListener("focusout", focusoutHandler);
}

// export const inputHandler = async (e) => {
//     const label = e.target.getAttribute("data-label");
//     if (label === "job-search") return await renderRows(getFilteredSortedJobs());
//     if (label === "event-search") return filterEvents();

//     const cell = e.target.closest("[data-field]");
//     if (!cell) return;

//     const field = cell.getAttribute("data-field");
//     if (field === "status") return;

//     const tr = cell.closest("tr[data-id]");
//     if (!tr) return;

//     await runDebouncedFieldSave(tr.dataset.id, field, cell);
//   };

//   export const mousedownHandler = (e) => {
//     if (e.button !== 2) return;
//     const cell = e.target.closest("[contenteditable='true']");
//     if (!cell) return;
//     e.preventDefault();
//   };

//   export const contextmenuHandler = (e) => {
//     const td = e.target.closest("td[data-field]");
//     if (!td) return;
//     if (td.getAttribute("data-field") === "status") return;

//     e.preventDefault();

//     const editableEl = td.querySelector("[contenteditable]") ?? td;
//     if (editableEl.getAttribute("contenteditable") === "true") return;

//     editableEl.setAttribute("contenteditable", "true");
//     editableEl.focus();

//     const range = document.createRange();
//     range.selectNodeContents(editableEl);
//     range.collapse(false);
//     const sel = window.getSelection();
//     sel.removeAllRanges();
//     sel.addRange(range);
//   };

//   export const focusoutHandler = (e) => {
//     if (e.target.getAttribute("contenteditable") === "true") {
//       e.target.setAttribute("contenteditable", "false");
//     }
//   };

// export const changeHandler = async (e) => {
//     const label = e.target.getAttribute("data-label");
//     if (
//       label === "status-filter" ||
//       label === "type-filter" ||
//       label === "hide-dismissed" ||
//       label === "hide-last-week" ||
//       label === "hide-last-two-weeks"
//     )
//       await renderRows(getFilteredSortedJobs());
//     if (label === "event-type-filter" || label === "event-range-filter") filterEvents();
//     if (label === "grade-ai-provider-select") runProviderSelect("grade");
//     if (label === "resume-ai-provider-select") runProviderSelect("resume");

//     if (e.target.getAttribute("data-field") === "status") {
//       const tr = e.target.closest("tr[data-id]");
//       const leadId = tr?.dataset.id;
//       if (!leadId) return;
//       await runStatusChange(leadId, e.target.value, e.target);
//     }

//     if (e.target.getAttribute("data-field") === "event-status") {
//       const tr = e.target.closest("tr[data-id]");
//       const eventId = tr?.dataset.id;
//       if (!eventId) return;
//       await runEventStatusChange(eventId, e.target.value, e.target);
//     }
//   };
