import React, { useEffect, useRef } from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  ActivityIndicator,
  IconButton,
  List,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers } from '../Store/usersSlice';

const ExpertsList = () => {
  const dispatch = useDispatch();
  const initialRender = useRef(true);
  const searchQuery = useSelector((state) => state.topicSearch.value);
  const { loading } = useSelector((state) => state.users);
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false; //do not fire on initial render
    } else {
      dispatch(fetchUsers(searchQuery));
    }
  }, [searchQuery]);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.activityIndicator} />;
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
                onPress={() =>
                  Linking.openURL(user.user.link).catch((err) =>
                    console.error('An error occurred', err)
                  )
                }
              />
            )}
            onPress={() =>
              Linking.openURL(user.user.link).catch((err) =>
                console.error('An error occurred', err)
              )
            }
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
});

export default ExpertsList;
