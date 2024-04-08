// Function to fetch HTML content from a file asynchronously
const fetchHTML = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return await response.text();
};

// Function to display HTML content in a specific section
const displayHTML = (sectionId, htmlContent) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.innerHTML = htmlContent;
  } else {
    console.error(`Section with id '${sectionId}' not found.`);
  }
};

// Function to generate and display all modules
const generateModules = async () => {
  const sections = [
    "reactModules",
    "styling",
    "reactFramework",
    // "uiComponents",
    // Do not include above id as it'll be fetched in sub URL
    "basicC",
    "interactiveC",
    "complexC",
    "dataPresentationC",
    "contentC",
    "userInteractionC",
    "engagementC",
    "errorLoadingC",
    "eCommerceC",
    "informationC",
    "navigationUtilityC",
    "userInteractionFeaturesC",
    "complianceC",
    "socialC",
    "authenticationC",
  ];

  for (const sectionId of sections) {
    let url;
    if (
      sectionId.startsWith("basicC") ||
      sectionId.startsWith("interactiveC") ||
      sectionId.startsWith("complexC") ||
      sectionId.startsWith("dataPresentationC") ||
      sectionId.startsWith("contentC") ||
      sectionId.startsWith("userInteractionC") ||
      sectionId.startsWith("engagementC") ||
      sectionId.startsWith("errorLoadingC") ||
      sectionId.startsWith("eCommerceC") ||
      sectionId.startsWith("informationC") ||
      sectionId.startsWith("navigationUtilityC") ||
      sectionId.startsWith("userInteractionFeaturesC") ||
      sectionId.startsWith("complianceC") ||
      sectionId.startsWith("socialC") ||
      sectionId.startsWith("authenticationC")
    ) {
      url = `sections/uicomponents/${sectionId}.html`;
    } else {
      url = `sections/${sectionId}.html`;
    }

    try {
      const htmlContent = await fetchHTML(url);
      displayHTML(sectionId, htmlContent);
    } catch (error) {
      console.error(
        `Error fetching or displaying HTML for section '${sectionId}':`,
        error
      );
    }
  }
};

// Call the function to generate and display modules
generateModules();
