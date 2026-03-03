import type { StackScreenProps } from '@amazon-devices/react-navigation__stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from '@amazon-devices/react-native-safe-area-context';
import QRCode from '@amazon-devices/react-native-qrcode-svg';
import type { RootStackParamList } from '../navigation/types';
import { FEED_ITEMS } from '../data/feed';

type Props = StackScreenProps<RootStackParamList, 'Detail'>;

export function DetailScreen({ route, navigation }: Props) {
  const { itemId } = route.params;
  const item = FEED_ITEMS.find((i) => i.id === itemId);

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
        {item ? (
          item.id === '1' ? (
            <View style={styles.pairingContainer}>
              <Text style={styles.pairingTitle}>Connect Your Device</Text>
              <Text style={styles.pairingSubtitle}>
                Scan this QR code with your phone to pair with this Fire TV
              </Text>
              <View style={styles.qrWrapper}>
                <QRCode
                  value="https://tinyharvest.app"
                  size={280}
                  ecl="M"
                />
              </View>
              <Text style={styles.pairingCode}>Pairing code: VEGA-7842</Text>
              <Text style={styles.pairingHint}>
                Or visit amazon.com/pair and enter the code above
              </Text>
            </View>
          ) : (
            <>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.summary}>{item.summary}</Text>
              <View style={styles.placeholder}>
                <Text style={styles.placeholderText}>
                  Full content view — ideal for Vega OS / Fire TV detail screen
                </Text>
              </View>
            </>
          )
        ) : (
          <Text style={styles.title}>Item not found</Text>
        )}
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
  category: {
    fontSize: 22,
    fontWeight: '600',
    color: '#a78bfa',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
  },
  summary: {
    fontSize: 26,
    color: '#9ca3af',
    lineHeight: 38,
    marginBottom: 36,
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#252540',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2d2d44',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 36,
  },
  placeholderText: {
    color: '#6b7280',
    fontSize: 24,
    textAlign: 'center',
  },
  pairingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pairingTitle: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
  },
  pairingSubtitle: {
    fontSize: 24,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 500,
  },
  qrWrapper: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    marginBottom: 36,
  },
  pairingCode: {
    fontSize: 28,
    fontWeight: '700',
    color: '#a78bfa',
    letterSpacing: 2,
    marginBottom: 12,
  },
  pairingHint: {
    fontSize: 20,
    color: '#6b7280',
    textAlign: 'center',
  },
});
