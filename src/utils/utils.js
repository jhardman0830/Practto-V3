export const toRem = size => `${(size / 16).toFixed(5)}rem`;

export const youtubeEmbedUrl = watchUrl =>
  watchUrl && watchUrl.replace("watch?v=", "embed/");

export const removeDash = string => string.replace(/-/g, " ");

export const addDash = string => string.replace(/ /g, "-");

export const removeSpecialChars = string => string.replace(/[^\w\s]/gi, "");

export const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);
