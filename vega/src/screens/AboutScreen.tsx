import type { StackScreenProps } from '@amazon-devices/react-navigation__stack';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from '@amazon-devices/react-native-safe-area-context';
import type { RootStackParamList } from '../navigation/types';
import { TVEventHandler, useTVEventHandler } from '@amazon-devices/react-native-kepler';
import React from 'react';
type Props = StackScreenProps<RootStackParamList, 'About'>;

export function AboutScreen({ navigation }: Props) {

    const [lastEventType, setLastEventType] = React.useState('');

    const myTVEventHandler = (evt: any) => {
        console.log(`eventType: ${evt.eventType} eventKeyAction: ${evt.eventKeyAction}`);
        setLastEventType(evt.eventType);
    };

    useTVEventHandler(myTVEventHandler);

    
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
          onPress={() => navigation.goBack()}
          hasTVPreferredFocus
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>About My Feed</Text>
        <Text style={styles.body}>
          A simple feed app built with React Native and React Navigation. This
          structure is designed to be easily adapted for Amazon Fire TV and Vega
          OS — add focus management and D-pad navigation when you're ready for
          the big screen.
        </Text>

        <View style={styles.lastEventContainer}>
          <Text style={styles.lastEventLabel}>Last remote event</Text>
          <Text style={styles.lastEventValue}>
            {lastEventType || '—'}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Vega OS ready</Text>
          <Text style={styles.infoText}>
            Same screens (Home → Detail, About) work on phone and TV; you'll
            layer on TV-specific focus and remote handling later.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2d2d44',
  },
  backButton: {
    paddingVertical: 12,
    paddingRight: 24,
  },
  backButtonText: {
    color: '#a78bfa',
    fontSize: 28,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.8,
  },
  content: {
    flex: 1,
    padding: 48,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
  },
  body: {
    fontSize: 26,
    color: '#9ca3af',
    lineHeight: 38,
    marginBottom: 36,
  },
  infoBox: {
    backgroundColor: '#252540',
    borderRadius: 16,
    padding: 28,
    borderWidth: 2,
    borderColor: '#3d3d5c',
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#a78bfa',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 22,
    color: '#9ca3af',
    lineHeight: 32,
  },
  lastEventContainer: {
    marginBottom: 36,
    paddingVertical: 24,
    paddingHorizontal: 28,
    borderRadius: 16,
    backgroundColor: '#111827',
    borderWidth: 2,
    borderColor: '#4b5563',
  },
  lastEventLabel: {
    fontSize: 22,
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  lastEventValue: {
    fontSize: 40,
    fontWeight: '800',
    color: '#fde68a',
  },
});
