// import { PLUS_ICON_SVG, STATUS_LABELS, STATUS_OPTIONS, ROW_STATUS_OPTIONS, COL_DEFS, MONTHS, MODEL_MAP } from "../util/define-things.js";

export const buildMainForm = async () => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "main-wrapper");
  
  const h1 = document.createElement("h1");
  h1.textContent = "Sourcer - Sick of Doing it Myself";
  wrapper.appendChild(h1);

//   const header = await buildHeader();
//   const controlBar = await buildControlBar();
//   const filterBar = await buildFilterBar();
//   const table = await buildTable();

//   const gradeOptionsPanel = buildGradeOptionsPanel();

//   const stickyControls = document.createElement("div");
//   stickyControls.className = "sticky-controls";
//   stickyControls.append(controlBar, filterBar, gradeOptionsPanel);

//   const tableWrap = document.createElement("div");
//   tableWrap.classList.add("table-wrap");
//   tableWrap.appendChild(table);

//   wrapper.append(header, stickyControls, tableWrap);

  return wrapper;
};
