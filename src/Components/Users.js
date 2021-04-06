import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectAllUsers } from '../Store/users';

const Users = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);
  const users = useSelector(selectAllUsers);

  const searchQuery = useSelector((state) => state.topicSearch.value); // [1] 

  const initialRender = useRef(true);

  /* Do not fire on initial render */
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
    dispatch(fetchUsers(searchQuery));
    }
  }, [searchQuery]); // [1] fire on searchQuery change only

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <ScrollView>
      {users.map((user) => {
        return (
          <View style={styles.container} key={user.user_id}>
            <View>
              <View style={styles.dataContainer}>
                <Text>
                  {user.user.display_name} {user.user.display_name}
                </Text>
              </View>
              <View style={styles.dataContainer}>
                <Text>{user.user.display_name}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10
  },
  dataContainer: {
    flexDirection: 'row'
  }
});
