import { buildMainForm } from "./forms/main-form.js";
import { buildAuthForm } from "./forms/auth-form.js";

const displayElement = document.getElementById("display-element");
const authElement = document.getElementById("auth-element");

export const buildAuthDisplay = async () => {
  if (!authElement) return null;

  const authForm = await buildAuthForm();
  if (!authForm) {
    console.log("FAILED TO BUILD AUTH FORM");
    return null;
  }

  authElement.appendChild(authForm);
};

export const buildMainDisplay = async () => {
  if (!displayElement) return null;

  const mainForm = await buildMainForm();
  if (!mainForm) return null;
  displayElement.append(mainForm);

  return true;
};

if (displayElement) buildMainDisplay();
if (authElement) buildAuthDisplay();
