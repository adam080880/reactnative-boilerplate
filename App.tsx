import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from 'react-native';
import {baseContainerStyle} from './src/utils/default';
import Welcome from './src/screens/Welcome';

export default class App extends React.Component {
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.baseContainer}>
          <SafeAreaView style={styles.baseContainer}>
            <Welcome />
          </SafeAreaView>
        </Layout>
      </ApplicationProvider>
    );
  }
}

const styles: any = StyleSheet.create({
  ...baseContainerStyle(),
});
