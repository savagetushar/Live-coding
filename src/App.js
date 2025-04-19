import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = useCallback(async () => {
    if (loading || !hasMore) return;  

    setLoading(true);
    setError('');  

    try {
      const response = await fetch(
        `https://testapi.getlokalapp.com/common/jobs?page=${page}`
      );
      const data = await response.json();


      if (data.results?.length > 0) {
        setJobs((prev) => [...prev, ...data.results]); 
        setPage((prev) => prev + 1); 
      } else {
        setHasMore(false); 
      }
    } catch (err) {
      setError('Failed to fetch jobs.'); 
      console.log(err); 
    } finally {
      setLoading(false); 
      setRefreshing(false); 
    }
  }, [page, loading, hasMore]); 

  useEffect(() => {
    fetchJobs(); 
  }, [fetchJobs]);


  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1); 
    setHasMore(true); 
    fetchJobs(); 
  };


  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  );

  
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#000" style={{ margin: 16 }} />;
  };

  
  const renderEmpty = () => {
    if (loading) return null;
    return <Text style={styles.empty}>No jobs found.</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id?.toString()} 
          renderItem={renderItem}
          onEndReached={fetchJobs} 
          onEndReachedThreshold={0.5} 
          ListFooterComponent={renderFooter} 
          ListEmptyComponent={renderEmpty} 
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} /> 
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
    fontSize: 16,
  },
});

export default App;
