// Define an array of section IDs
const sectionIds = [
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

// Function to fetch and insert section content
const fetchAndInsertId = async (sectionId) => {
  try {
    let url;
    if (
      sectionId === "reactModules" ||
      sectionId === "styling" ||
      sectionId === "reactFramework"
    ) {
      url = `sections/${sectionId}.html`; // Use main URL for certain sections
    } else {
      url = `sections/uicomponents/${sectionId}.html`; // Use sub URL for other sections
    }
    // Fetch section content
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Get HTML content
    const html = await response.text();

    // Insert section content into the corresponding section element
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.innerHTML = html;
      console.log("Content inserted for section:", sectionId);
    } else {
      console.error("Section element not found for section:", sectionId);
    }
  } catch (error) {
    console.error("Error fetching section content:", error.message);
  }
};

// Iterate over each section ID and fetch content
const fetchAllSections = async () => {
  for (const sectionId of sectionIds) {
    await fetchAndInsertId(sectionId);
  }
};

fetchAllSections();
