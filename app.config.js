export default {
  expo: {
    name: "mauroconteeasissue",
    slug: "mauroconteeasissue",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      bundleIdentifier: "com.mauroconteeasissue",
      supportsTablet: true,
      googleServicesFile: process.env.GOOGLE_SERVICE_INFO_PLIST
    },
    android: {
      package: "com.mauroconteeasissue",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON
    },
    web: {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "15bcc2cc-099c-488d-b4d9-9e13e6b1d255"
      }
    },
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ]
    ]
  }
}
