function camelToSentenceCase(camelCaseString) {
  // Insert a space before all uppercase letters
  const spacedString = camelCaseString.replace(/([A-Z])/g, " $1");

  // Capitalize the first character of the resulting string and trim any leading space
  const sentenceCaseString =
    spacedString.charAt(0).toUpperCase() + spacedString.slice(1);

  return sentenceCaseString.trim();
}
