Step 1:

open android/build.gradle

buildscript {
ext {
buildToolsVersion = "33.0.0"
minSdkVersion = 21
compileSdkVersion = 33
targetSdkVersion = 33

<!-- add these 2 line -->

pdfViewerVersion = "3.2.0-beta.1"
pdfViewerRepo = "com.github.mhiew"

<!-- end of these lines -->

    }

}

Step:2

after the line
includeBuild('../node_modules/react-native-gradle-plugin')

include these line

if (settings.hasProperty("newArchEnabled") && settings.newArchEnabled == "true") {
include(":ReactAndroid")
project(":ReactAndroid").projectDir = file('../node_modules/react-native/ReactAndroid')
include(":ReactAndroid:hermes-engine")
project(":ReactAndroid:hermes-engine").projectDir = file('../node_modules/react-native/ReactAndroid/hermes-engine')
}

step 4

compile the project and run it
