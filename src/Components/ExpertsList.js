import React, { useEffect, useState, useRef } from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  ActivityIndicator,
  IconButton,
  List,
  Text,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers } from '../Store/usersSlice';

/* For onPress event: open link to Stack Overflow profile. */
const openLink = (link) => {
  Linking.openURL(link).catch((err) =>
    console.error('Unable to open link. Check URL.', err)
  );
};

const ExpertsList = () => {
  const dispatch = useDispatch();
  const initialRender = useRef(true);
  const searchQuery = useSelector((state) => state.topicSearch.value);
  const { loading } = useSelector((state) => state.users);
  const users = useSelector(selectAllUsers);
  const [noResultsText, setNoResultsText] = useState('');

  /* Fetch users (but not on initial render). */
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      dispatch(fetchUsers(searchQuery));
    }
  }, [searchQuery]);

  /* Display loading indicator while awaiting API response. */
  if (loading) {
    return <ActivityIndicator size="large" style={styles.activityIndicator} />;
  }

  /* Display suggestion text if API response returns no users. */
  if (!initialRender.current && users.length == 0) {
    setTimeout(
      () =>
        setNoResultsText(
          'No results for this tag on Stack Overflow.' +
            '\nTry "JavaScript" or "PostgreSQL".'
        ),
      1000
    );
    return (
      <View style={styles.noResultsTextContainer}>
        <Text style={styles.noResultsText}>{noResultsText}</Text>
      </View>
    );
  }

  return (
    <View style={styles.componentContainer}>
      <ScrollView>
        {users.map((user) => (
          <List.Item
            key={user.user.user_id}
            title={`${user.user.display_name}`}
            description={`Posts: ${user.post_count}`}
            left={() => (
              <Avatar.Image
                source={{ uri: user.user.profile_image }}
                size={40}
              />
            )}
            right={() => (
              <IconButton
                icon="open-in-new"
                size={20}
                onPress={() => openLink(user.user.link)}
              />
            )}
            onPress={() => openLink(user.user.link)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: '40%',
  },
  componentContainer: {
    flex: 1,
    marginBottom: '10%',
    marginHorizontal: '7.5%',
  },
  noResultsText: {
    flex: 1,
    marginHorizontal: '10%',
    textAlign: 'center',
  },
  noResultsTextContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: '35%',
  },
});

export default ExpertsList;
