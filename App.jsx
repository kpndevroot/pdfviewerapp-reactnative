import {View, Text, Platform, Button} from 'react-native';
import React, {useState} from 'react';
import PDFView from 'react-native-view-pdf';
const resources = {
  file:
    Platform.OS === 'ios'
      ? 'downloadedDocument.pdf'
      : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};
const App = () => {
  const resourceType = 'url';
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(current => !current);
  };
  return (
    <View style={{flex: 1}}>
      {/* Some Controls to change PDF resource */}

      <Button
        onPress={handleToggle}
        title={`${visible === false ? 'openPdf' : 'closePdf'}`}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {visible && (
        <PDFView
          fadeInDuration={250.0}
          style={{flex: 1}}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={error => console.log('Cannot render PDF', error)}
        />
      )}
    </View>
  );
};

export default App;
