import {
  Alert,
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const GRID_GAP = 2;
const GRID_COLUMNS = 3;
const GRID_SIZE = (SCREEN_WIDTH - GRID_GAP * 2) / GRID_COLUMNS;

const POSTS = [
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
  'https://images.unsplash.com/photo-1529626455594-4ff0802fb7?w=600',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600',
  'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600',
];

const HIGHLIGHTS = [
  { label: 'OOTD', color: '#E1306C' },
  { label: 'Events', color: '#F77737' },
  { label: 'BTS', color: '#FCAF45' },
  { label: 'Fits', color: '#833AB4' },
];

export default function Index() {
  const handleAlertPress = () => {
    Alert.alert('Alert Button pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="dark" />

      <View style={styles.topBar}>
        <Text style={styles.topBarIcon}>☰</Text>
        <View style={styles.usernameRow}>
          <Text style={styles.username}>ootd_everyday</Text>
          <Text style={styles.usernameChevron}> ▾</Text>
        </View>
        <View style={styles.topBarRight}>
          <Text style={styles.topBarIcon}>＋</Text>
          <Text style={styles.topBarIconMenu}>≡</Text>
        </View>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.statsRow}>
            <View style={styles.avatarRing}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{'OO\nTD'}</Text>
              </View>
            </View>

            <View style={styles.stats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>53</Text>
                <Text style={styles.statLabel}>posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>12.4K</Text>
                <Text style={styles.statLabel}>followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>312</Text>
                <Text style={styles.statLabel}>following</Text>
              </View>
            </View>
          </View>

          <Text style={styles.displayName}>OOTD Everyday</Text>
          <Text style={styles.category}>Clothing (Brand)</Text>
          <Text style={styles.bio}>Fit check! ✨</Text>
          <Text style={styles.bio}>You know we&apos;ll hype you up.</Text>
          <Text style={styles.link}>linktr.ee/ootdeveryday</Text>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Share profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButtonSmall}>
              <Text style={styles.actionButtonText}>▾</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.highlightsScroll}
            contentContainerStyle={styles.highlightsContent}
          >
            {HIGHLIGHTS.map((item) => (
              <View key={item.label} style={styles.highlightItem}>
                <View style={[styles.highlightCircle, { borderColor: item.color }]}>
                  <View style={[styles.highlightInner, { backgroundColor: item.color }]} />
                </View>
                <Text style={styles.highlightLabel}>{item.label}</Text>
              </View>
            ))}
            <View style={styles.highlightItem}>
              <View style={styles.highlightAdd}>
                <Text style={styles.highlightAddIcon}>＋</Text>
              </View>
              <Text style={styles.highlightLabel}>New</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.tabs}>
          <View style={[styles.tab, styles.tabActive]}>
            <Text style={[styles.tabIcon, styles.tabIconActive]}>▦</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabIcon}>▶</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabIcon}>👤</Text>
          </View>
        </View>

        <View style={styles.grid}>
          {POSTS.map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              style={[
                styles.gridImage,
                {
                  width: GRID_SIZE,
                  height: GRID_SIZE,
                  marginRight: index % GRID_COLUMNS === GRID_COLUMNS - 1 ? 0 : GRID_GAP,
                  marginBottom: GRID_GAP,
                },
              ]}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.alertFooter}>
        <Button title="Alert" onPress={handleAlertPress} color="#0095F6" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DBDBDB',
  },
  topBarIcon: {
    fontSize: 22,
    color: '#262626',
    width: 28,
  },
  topBarIconMenu: {
    fontSize: 24,
    color: '#262626',
    marginLeft: 14,
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: '700',
    color: '#262626',
  },
  usernameChevron: {
    fontSize: 14,
    color: '#262626',
    marginTop: 2,
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
  },
  profileSection: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarRing: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 2,
    borderColor: '#E1306C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 28,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#2C9BD6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#262626',
  },
  statLabel: {
    fontSize: 13,
    color: '#262626',
    marginTop: 2,
  },
  displayName: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '700',
    color: '#262626',
  },
  category: {
    fontSize: 14,
    color: '#8E8E8E',
    marginTop: 2,
  },
  bio: {
    fontSize: 14,
    lineHeight: 18,
    color: '#262626',
    marginTop: 2,
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00376B',
    marginTop: 4,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 14,
    gap: 6,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
  },
  actionButtonSmall: {
    width: 36,
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
  },
  highlightsScroll: {
    marginTop: 16,
    marginHorizontal: -16,
  },
  highlightsContent: {
    paddingHorizontal: 16,
  },
  highlightItem: {
    alignItems: 'center',
    width: 68,
    marginRight: 16,
  },
  highlightCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    opacity: 0.25,
  },
  highlightAdd: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightAddIcon: {
    fontSize: 28,
    color: '#262626',
  },
  highlightLabel: {
    fontSize: 12,
    color: '#262626',
    marginTop: 6,
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DBDBDB',
    marginTop: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: '#262626',
  },
  tabIcon: {
    fontSize: 22,
    color: '#8E8E8E',
  },
  tabIconActive: {
    color: '#262626',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridImage: {
    backgroundColor: '#EFEFEF',
  },
  alertFooter: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#DBDBDB',
    backgroundColor: '#FFFFFF',
  },
});
