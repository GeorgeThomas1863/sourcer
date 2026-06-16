export const EYE_CLOSED_SVG = `
  <svg id= "eye-closed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-label="pwToggle">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-label="pwToggle"/>
    <circle cx="12" cy="12" r="3" data-label="pwToggle"/>
    <path d="M2 2l20 20" data-label="pwToggle"/>
  </svg>
`;

export const EYE_OPEN_SVG = `
  <svg id= "eye-open-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-label="pwToggle">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-label="pwToggle"/>
    <circle cx="12" cy="12" r="3" data-label="pwToggle"/>
  </svg>
`;

export const COLLAPSE_ARROW_ICON = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>`;

export const PLUS_ICON_SVG = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
`;

export const MODEL_MAP = {
  anthropic: [
    { value: "claude-sonnet-4-6", text: "Sonnet 4.6", selected: true },
    { value: "claude-haiku-4-5", text: "Haiku 4.5" },
    { value: "claude-opus-4-8", text: "Opus 4.8" },
    { value: "claude-opus-4-7", text: "Opus 4.7" },
  ],
  openai: [
    { value: "gpt-5.4", text: "GPT-5.4", selected: true },
    { value: "gpt-5.4-mini", text: "GPT-5.4 mini" },
    { value: "gpt-5.5", text: "GPT-5.5" },
  ],
  perplexity: [
    { value: "sonar-pro", text: "Sonar Pro", selected: true },
    { value: "sonar", text: "Sonar" },
    { value: "sonar-reasoning-pro", text: "Sonar Reasoning Pro" },
    { value: "sonar-deep-research", text: "Sonar Deep Research" },
  ],
};
