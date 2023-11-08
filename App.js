
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ScrollView, SafeAreaview } from 'react-native';
import PostCard from "./components/PostCard";

export default function App() {
  const [blogPosts, setBlogPost] = useState([])
    // useEffect is being called on different lifecycle of the component
    //1. When components Mounts
    //2. When components unMounts

    //how to get a component to re-render
    //1. Change te state variable
    //2. Change props

    const handleFetchData = () => {
      console.log("fetchin data");


      fetch(" http://192.168.10.185:8080", {
        method: "GET",
        headers: {"Content-type": "application/json"},
      })
      .then((res) => res.json())
      .then((data) => setBlogPost(data))
      .catch((err) => console.log(err));   
    };     
  }
    useEffect(() => {
        fetch('http://192.168.10.185:8080')
           .then(res => res.json())
           .then(data => setBlogPost(data))                  //missing
           .catch(err => console.log(err));
 
    }, []);
  
  
  return (
    <SafeAreaView >      
      <StatusBar style="auto" />
      <view>
        <ScrollView>
             {blogPosts.map((singlePost, index) => {
              
             return <PostCard singlePost={singlePost} index={index} key={singlePost._id} />
             })}
      </ScrollView>
    </View>
  </SafeAreaView>

  );
            }
    


               
                   
          <Text>{singlePost.title}</Text>
          </View>
        )
      })}
     </ScrollView>
    </SafeAreaView>
  )
}


