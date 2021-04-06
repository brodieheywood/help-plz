import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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
                icon="email"
                size={20}
                onPress={() => alert('pressed')}
              />
            )}
            onPress={() => alert('pressed')}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    paddingTop: '40%',
  },
  componentContainer: {
    flex: 1,
    paddingBottom: '7.5%',
    paddingHorizontal: '7.5%',
  },
});

export default ExpertsList;
