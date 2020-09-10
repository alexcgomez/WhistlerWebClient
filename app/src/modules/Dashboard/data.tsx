export default [
  {
    name: "Site1",
    url: "mysite1.url.com",
    whistlerApi: {
      // Data coming from Whistler API
      cms: "WordPress",
      version: "3.0.11",
      latestRelease: "3.2.3", // ---> It could be retrieved from LatestReleases Table
      scannedAt: { Date },
      snapshotUrl:
        "https://i.pinimg.com/originals/7f/f6/82/7ff682ca54c549258bddca9ebc9761b4.jpg",
    },
    status: "Pending Update", // (latestAvail > version)
    severity: "LOW", // To check if it's a security upgrade
    upgradedAt: { Date }, // ---> Identified from backend as soon as new CMS version is detected.
  },
  {
    name: "Site2",
    url: "mysite2.url.com",
    whistlerApi: {
      cms: "Drupal",
      version: "7.58",
      latestRelease: "7.71",
      scannedAt: { Date },
      snapshotUrl:
        "https://i.pinimg.com/originals/4c/c7/79/4cc779016cde5fa190a3b853f10aa933.png",
    },
    status: "Pending Update",
    severity: "HIGH",
    upgradedAt: { Date },
  },
  {
    name: "Site3",
    url: "mysite3.url.com",
    whistlerApi: {
      cms: "WordPress",
      version: "3.2.3",
      latestRelease: "3.2.3",
      scannedAt: { Date },
      snapshotUrl:
        "https://i.pinimg.com/originals/7f/f6/82/7ff682ca54c549258bddca9ebc9761b4.jpg",
    },
    status: "Up to date", // (latestAvail = version)
    severity: "LOW", // To check if it's a security upgrade
    upgradedAt: { Date }, // ---> Identified from backend as soon as new CMS version is detected.
  },
];

// Scan frequency to be done every day at night, no need to customize
// then we could provide a button to force a new scanning on demand


// ----- Table Sites -----
//    name: SITE_NAME
//    url: SITE_URL
//    cms: CMS_NAME
//    version: CURRENT_VERSION
//    latestRelease: LATEST_VERSION_AVAIL
//    scannedAt: DATE
//    snapshotUrl: SITE_SNAPSHOT
//    status: (calculated at frontend?)
//    severity: [HIGH,MID,LOW]
//    upgradedAt: LAST_SITE_UPGRADED_DATE (manually or from backend?)

// ----- Table LatestReleases -----
//    id: CMS_NAME >> select from Sites[cms], unique
//    version: RELEASE_VERSION
//    type: [SECURITY,MAINTENANCE]
//    details: RELEASE_DESCRIPTION
//    severity: [HIGH,MID,LOW]
//    url: RELEASE_URL
//    scannedAt: DATE