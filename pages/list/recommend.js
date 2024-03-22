import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SegmentedButtons, useTheme,Avatar, Button, Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppStyle from "../css/AppStyle";

import Icon from "react-native-vector-icons/FontAwesome";

const image = {
  uri: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
};

const Exploreimages = {
  uri: "https://s3-alpha-sig.figma.com/img/ce76/4c24/1e90c09c1666c94dec9809d364b906ae?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZggUNx6BKO7Jb3wDl5cY-szAtNqfrM8Jw9yNurOljPpM2Hwlf0ihoEWUPrFngr5jSKUl-bPCHNlJm91YmAhLf7W315yT-v~4uT1Pj57rtJT4pzJJ1UVmt4rcqSbAvQsmJU~AjVG98ywdjiTSZPA2oVJxNTY44K5l~6DGJuW1o9Pe8OeBkSTZ~b4S8WBWrUpbKC4kzl1ikjQ7sRfbAE6kTHyNUhUNW9ymkeGX4npy9sYwhCJHqzeO7jX~-8gRAnHJB3koygTyBvFM3HsxFG8f91zMGzCW7fSJge1gsFKFRAS-ZtgoOevlZsf0a4YLxh0dhVRzFyZlXWrK5ExZNwzABg__",
};



const RecommendPage = () => {
  const [value, setValue] = React.useState("");
  const { colors } = useTheme(); // Get the current theme colors
  const customColor = "#ecffe0";
  const scrollViewRef = useRef(null);

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        const newIndex =
          (scrollViewRef.current.contentOffset?.x || 0) +
          Dimensions.get("window").width;
        scrollViewRef.current.scrollTo({ x: newIndex, animated: true });
      }
    }, 3000); // Adjust the interval duration as needed (e.g., 3000 milliseconds for 3 seconds)
    return () => clearInterval(interval);
  }, []);

  // Dummy card data
  const cards = [
    {
      id: 1,
      title: "Taste of Paradise",
      category: "Main Course",
      deliveryTiming: "30-45 minutes",
    },
    {
      id: 2,
      title: "Taste of Paradise",
      category: "Appetizer",
      deliveryTiming: "25-40 minutes",
    },
    {
      id: 3,
      title: "Taste of Paradise",
      category: "Main Course",
      deliveryTiming: "35-50 minutes",
    },
    {
      id: 4,
      title: "Taste of Paradise",
      category: "Dessert",
      deliveryTiming: "20-35 minutes",
    },
    {
      id: 5,
      title: "Taste of Paradise",
      category: "Main Course",
      deliveryTiming: "30-45 minutes",
    },
    {
      id: 6,
      title: "Taste of Paradise",
      category: "Appetizer",
      deliveryTiming: "25-40 minutes",
    },
    {
      id: 7,
      title: "Taste of Paradise",
      category: "Dessert",
      deliveryTiming: "20-35 minutes",
    },
    {
      id: 8,
      title: "Taste of Paradise",
      category: "Main Course",
      deliveryTiming: "35-50 minutes",
    },
  ];

  const foodData = [
    {
      id: 1,
      name: "Pizza",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 2,
      name: "Burger",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 3,
      name: "Sushi",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 4,
      name: "Pasta",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 5,
      name: "Tacos",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 6,
      name: "Salad",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 7,
      name: "Steak",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 8,
      name: "Sandwich",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 9,
      name: "Soup",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
    {
      id: 10,
      name: "Fries",
      img: "https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85",
    },
  ];


  const renderCards = () => {
    return cards.map((card, index) => (
      <Card
        key={card.id}
        title={card.title}
        deliveryTiming={card.deliveryTiming}
      />
    ));
  };

  const Card = ({ title, deliveryTiming }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log(`Pressed on ${title}`)}
    >
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.overlayTextContainer}>
          <Text style={[styles.overlayText, styles.boldText]}>30% OFF</Text>
        </View>
        <View style={[styles.overlayTextContainer, styles.bottomOverlay]}>
          <Text style={[styles.overlayText, styles.lightText]}>up to $10</Text>
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.foodName}>{title}</Text>
        <View style={styles.reviewcontainerparent}>
          <View style={styles.reviewcontainer}>
            <FontAwesome name="star" size={16} color="gold" />
            <Text style={styles.deliveryTimingrate}>4.3</Text>
          </View>
          <Text style={styles.deliveryTiming}>{deliveryTiming}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container2}>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
          </View>
          <Text style={styles.text2}>FOR YOU</Text>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
          </View>
        </View>
        <View style={styles.segmentContainer}>
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: "Recommended",
                label: "Recommended",
                icon: <Icon name="star" size={18} color="#454545" />,
              },
              {
                value: "Favorites",
                label: "Favorites",
                icon: <FontAwesome name="heart" size={20} color="red" />,
              },
            ]}
            style={[
              styles.segmentedButtons,
              { borderRadius: 20, backgroundColor: colors.surface },
            ]} // Apply custom styles
            activeColor={customColor} // Use activeColor prop to apply custom color
          />
        </View>
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.scrollViewContent}>{renderCards()}</View>
          </ScrollView>
        </View>
          <Secondcard/>
          <ExploreSection/>
          <WhatsonMind/>
          <OfferImages />
          <FiltersFood/>

      
      </ScrollView>
    </SafeAreaView>
  );
};

const Secondcard = () =>{


  const cards = [
    {
      id: 1,
      title: "Taste of Paradise",
      category: "Main Course",
      deliveryTiming: "30-45 minutes",
    },
    {
      id: 2,
      title: "Taste of Paradise",
      category: "Appetizer",
      deliveryTiming: "25-40 minutes",
    },
    {
      id: 3,
      title: "Taste of Paradise",
      category: "Main Course",
      deliveryTiming: "35-50 minutes",
    },
    {
      id: 4,
      title: "Taste of Paradise",
      category: "Dessert",
      deliveryTiming: "20-35 minutes",
    },
    {
      id: 5,
      title: "Taste of Paradise",
      category: "Main Course",
      deliveryTiming: "30-45 minutes",
    },
    {
      id: 6,
      title: "Taste of Paradise",
      category: "Appetizer",
      deliveryTiming: "25-40 minutes",
    },
    {
      id: 7,
      title: "Taste of Paradise",
      category: "Dessert",
      deliveryTiming: "20-35 minutes",
    },
    {
      id: 8,
      title: "Taste of Paradise",
      category: "Main Course",
      deliveryTiming: "35-50 minutes",
    },
  ];
  const renderCards = () => {
    return cards.map((card, index) => (
      <Card
        key={card.id}
        title={card.title}
        deliveryTiming={card.deliveryTiming}
      />
    ));
  };

  const Card = ({ title, deliveryTiming }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log(`Pressed on ${title}`)}
    >
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.overlayTextContainer}>
          <Text style={[styles.overlayText, styles.boldText]}>30% OFF</Text>
        </View>
        <View style={[styles.overlayTextContainer, styles.bottomOverlay]}>
          <Text style={[styles.overlayText, styles.lightText]}>up to $10</Text>
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.foodName}>{title}</Text>
        <View style={styles.reviewcontainerparent}>
          <View style={styles.reviewcontainer}>
            <FontAwesome name="star" size={16} color="gold" />
            <Text style={styles.deliveryTimingrate}>4.3</Text>
          </View>
          <Text style={styles.deliveryTiming}>{deliveryTiming}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return(
    <View>
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.scrollViewContent}>{renderCards()}</View>
    </ScrollView>
  </View>
  )
}

const ExploreSection = () =>{

 
  const cards = [
    {
      id: 1,
      title: "Offers",
      deliveryTiming: "Flat Discounts",
      imgUrl:"https://s3-alpha-sig.figma.com/img/ce76/4c24/1e90c09c1666c94dec9809d364b906ae?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZggUNx6BKO7Jb3wDl5cY-szAtNqfrM8Jw9yNurOljPpM2Hwlf0ihoEWUPrFngr5jSKUl-bPCHNlJm91YmAhLf7W315yT-v~4uT1Pj57rtJT4pzJJ1UVmt4rcqSbAvQsmJU~AjVG98ywdjiTSZPA2oVJxNTY44K5l~6DGJuW1o9Pe8OeBkSTZ~b4S8WBWrUpbKC4kzl1ikjQ7sRfbAE6kTHyNUhUNW9ymkeGX4npy9sYwhCJHqzeO7jX~-8gRAnHJB3koygTyBvFM3HsxFG8f91zMGzCW7fSJge1gsFKFRAS-ZtgoOevlZsf0a4YLxh0dhVRzFyZlXWrK5ExZNwzABg__"
    },
    {
      id: 2,
      title: "Sandwiches",
      deliveryTiming: "Sandwiches",
      imgUrl:"https://s3-alpha-sig.figma.com/img/e882/29f0/66dea9f670eefdf82bbe6eb9f303981e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4LYJ6oGU-aMxe4SNmAHwOdi~~J8WuECD1HQ6atvE9PebRkvgQAob0FMltnVw1FdDbj~te5LlKLQ0gZjGV0C7YKyFK~ntNmhTAiU7F6yKDbyDBuZrmyI6-v0Ls0kXADPmXRRiLlwz3VynCcTJufeI8JvwT3sTZ7HMaryYbbVTPJ7zoW~ILwmf6ASIhSvPXLsa-3ZsdsIv9HXJ33gZ41PPmxeF8IqTTW6d2ytPOZefRr3LU4nKc3TMvwCeA~eZCZy6khunv7rD03W1D~HPFwjE8pu52fhRYERQmDa-BYlGWE-mcsMDxP9yUMpavaRkT4S7lwYF9XJ5tZH3g3PKTcDlg__"
    },
    {
      id: 3,
      title: "Home",
      deliveryTiming: "Curries",
      imgUrl:"https://s3-alpha-sig.figma.com/img/efe7/596d/270a7665b5679e013aadc6562065033d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ih8b-6OGsaIEhoMXPezAM9tSiDqNZsRse7RTgBLowDLvXKplrFqjsiPs5hlLlUV2zQSZUs2FT0ACLmDTawqpyAZa-ULjfVrEZlVXgf2TAW-OHl-wKkaSqJXO8Zu4ghmGl9kH9Nn-AsEU6w14YFJZBJlAg9bEZ13iD9Ut80SxEKwQUrjp-rDQC~UlGGGQJJZHOuEryNT7-mwH2yk3cS~cYLOlps5WEwTxDJgDaU0zQNa5Zu0IFY2Llr19ewHNOe8X6fkxmv4Nql~3QZEeHd5VAW2~ulOi9b3xzRyHftXt5F7xPEHj7k5aV7GTDSwZuEDgGGrC8tzT2EhTm1mX~F~Eeg__"
    }
  ];
  const renderCards = () => {
    return cards.map((card, index) => (
      <Card
        key={card.id}
        title={card.title}
        deliveryTiming={card.deliveryTiming}
        imgUrl={card.imgUrl}
      />
    ));
  };

  const Card = ({ title, deliveryTiming,category,imgUrl }) => (
    <View 
    style={styles.exploreCard}
    onPress={() => console.log(`Pressed on ${title}`)}
  >
     <View style={styles.exploreImageWrapper}>
      <Image source={{ uri:imgUrl }} style={styles.exploreImage} resizeMode="contain"/>
    </View>
    <View style={styles.exploreContent}>
      <Text style={styles.exploreFoodName}>{title}</Text>
      <View style={styles.exploreReviewContainerParent}>
        <View style={styles.exploreReviewContainer}>
          <Text style={styles.exploreDeliveryTimingRate}>{deliveryTiming}</Text>
        </View>
      </View>
    </View>
  </View >
  );

  return(
    <View>
      <View>
          <View style={styles.container2}>
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
            </View>
            <Text style={styles.text2}>Explore</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
            </View>
          </View>
        </View>
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.scrollViewContent}>{renderCards()}</View>
    </ScrollView>
  </View>
  )
}


// whats on your mind section

const WhatsonMind = () =>{

  const createStaggeredData = (data) => {
    const staggeredData = [];
    let column1 = [];
    let column2 = [];
  
    data.forEach((item, index) => {
      if (index % 2 === 0) {
        column1.push(item);
      } else {
        column2.push(item);
      }
    });
  
    for (let i = 0; i < Math.max(column1.length, column2.length); i++) {
      if (column1[i]) staggeredData.push(column1[i]);
      if (column2[i]) staggeredData.push(column2[i]);
    }
  
    return staggeredData;
  };
  

  const imagesData = [
    {
      id: 1,
      url: 'https://img.freepik.com/free-photo/fried-shrimp-prawn-cake-white-plate_74190-2585.jpg?w=1380&t=st=1710935380~exp=1710935980~hmac=c789e503fdc34735dc971dea58f1f5d459bc8e67fc46f1f8f0e1f8a2a61e1eb7',
    },
    {
      id: 2,
      url: 'https://img.freepik.com/free-photo/fried-chicken-french-fries-white-plate_74190-2598.jpg?w=1380&t=st=1710934996~exp=1710935596~hmac=fb4fc8cae0d27f140bfa31439c8e5adb45941b548f20163eb6b7d1234bf2d2e6',
    },
    {
      id: 3,
      url: 'https://img.freepik.com/premium-photo/pork-meatballs-with-tomato-sauce-oregano-leaves-spices-herbs-blue-ceramic-plate-isolated-white-background_71985-4090.jpg?w=1380',
    },
    {
      id: 4,
      url: 'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=1380&t=st=1710935018~exp=1710935618~hmac=f4c38887f85836e1fb7466b99dba4ad32c487987bff8a9852f18cf8c5d772342',
    },
    {
      id: 5,
      url: 'https://img.freepik.com/premium-photo/fresh-salad-with-chicken-liver-mushrooms-vegetables_80510-212.jpg?w=1060',
    },
    {
      id: 6,
      url: 'https://img.freepik.com/free-photo/fried-shrimp-prawn-cake-white-plate_74190-2585.jpg?w=1380&t=st=1710935380~exp=1710935980~hmac=c789e503fdc34735dc971dea58f1f5d459bc8e67fc46f1f8f0e1f8a2a61e1eb7',
    },
    {
      id: 7,
      url: 'https://img.freepik.com/free-photo/fried-chicken-french-fries-white-plate_74190-2598.jpg?w=1380&t=st=1710934996~exp=1710935596~hmac=fb4fc8cae0d27f140bfa31439c8e5adb45941b548f20163eb6b7d1234bf2d2e6',
    },
    {
      id: 8,
      url: 'https://img.freepik.com/premium-photo/pork-meatballs-with-tomato-sauce-oregano-leaves-spices-herbs-blue-ceramic-plate-isolated-white-background_71985-4090.jpg?w=1380',
    },
    {
      id: 9,
      url: 'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=1380&t=st=1710935018~exp=1710935618~hmac=f4c38887f85836e1fb7466b99dba4ad32c487987bff8a9852f18cf8c5d772342',
    },
    {
      id: 10,
      url: 'https://img.freepik.com/premium-photo/fresh-salad-with-chicken-liver-mushrooms-vegetables_80510-212.jpg?w=1060',
    },
  ];

  const renderImage = ({ item }) => (
    <Image source={{ uri: item.url }} style={styles.sliderimage} />
  );

  return(
    <View>
       <View>
          <View style={styles.container2}>
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
            </View>
            <Text style={styles.text2}>WHAT'S ON YOUR MIND?</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
            </View>
          </View>
        </View>

      <View style={styles.slidercontainer}>
       <FlatList
      data={createStaggeredData(imagesData)}
      renderItem={renderImage}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />

<FlatList
      data={createStaggeredData(imagesData)}
      renderItem={renderImage}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
    
    </View>
    </View>
  )
}
// offer slider component
const OfferImages = () => {
  const scrollViewRef = useRef(null);

  // offer images slider
  const offerImages = [
    "https://fusion-crm.s3-accelerate.amazonaws.com/FusionKitchen/offerBanners/169165109454.png",
    "https://fusion-crm.s3-accelerate.amazonaws.com/FusionKitchen/offerBanners/17007615873888.png",
    "https://fusion-crm.s3-accelerate.amazonaws.com/FusionKitchen/offerBanners/17007584955694.jpg",
    
  ];
  return (
    <View>
      <View style={styles.container2}>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
        </View>
        <Text style={styles.text2}>HIGHLIGHTS FOR YOU</Text>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {offerImages.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.offerimage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


// filter section
const FiltersFood = () => {
  // Sample data for food filters
  const filtersData = [
    { id: 1, name: 'Sort', icon:<Ionicons name="filter-sharp" size={14} color="black" /> },
    { id: 2, name: 'Offers',icon:<MaterialCommunityIcons name="crown-circle" size={24} color="gold" /> },
    { id: 3, name: 'Nearest' },
    { id: 4, name: 'Great Offers' },
    { id: 5, name: 'Rating 4.0+' },
    { id: 6, name: 'Pure Veg' },
    { id: 7, name: 'Non-Veg' },
  ];
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


  const renderFilterItem = ({ item }) => (
    <TouchableOpacity style={styles.filterItem}>
      <Text style={styles.filtericon}>{item.icon}</Text>
      <Text style={styles.filterText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
          <View style={styles.container2}>
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
            </View>
            <Text style={styles.text2}>ALL RESTAURENTS</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line}></View>
            </View>
          </View>
        </View>
      <FlatList
        data={filtersData}
        renderItem={renderFilterItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "white",
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 0,
  },
  text: {
    color: "#454545",
    paddingHorizontal: 7,
    fontWeight: "400",
    fontSize: 15,
    letterSpacing: 1,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  line2: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 0,
  },
  text2: {
    color: "#454545",
    paddingHorizontal: 7,
    fontWeight: "400",
    fontSize: 15,
    letterSpacing: 1,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  lineContainer: {
    flex: 1,
    marginHorizontal: "5%", // 5% gap on each side
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
    width: "100%", // Line takes 90% width
  },
  text2: {
    color: "#454545",
    paddingHorizontal: 0,
    fontWeight: "400",
    fontSize: 15,
    letterSpacing: 1,
  },
  segmentContainer: {
    alignItems: "center",
    margin: 10,
  },
  segmentedButtons: {
    width: "70%",
  },
  icon: {
    color: "red",
  },
  scrollViewContent: {
    flexDirection: "row",
  },

  card: {
    width: Dimensions.get("window").width / 2.4 - 10, // Adjust width to accommodate margins
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10, 
    marginTop: 10,
    overflow: "hidden", 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  imageWrapper: {
    position: "relative",
    borderTopLeftRadius: 10,
    overflow: "hidden", 
    
  },
  image: {
    width: "100%", // Image takes up full width of the wrapper
    height: 95, // Fixed height for the image
  },
  overlayTextContainer: {
    position: "absolute",
    top: 47, // Adjust top position as needed
    left: 0,
    right: 80,
    alignItems: "center",
  },
  overlayText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Dark semi-transparent overlay
  },
  bottomOverlay: {
    top: "auto",
    bottom: 10, // Adjust bottom position as needed
  },
  textContent: {
    padding: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  lightText: {
    fontWeight: "500",
    fontSize: 15,
    paddingLeft:6
  },
  foodName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#214357",
    // fontFamily: AppStyles.font.family,
    // fontFamily: 'Product Sans Medium',
  },
  reviewcontainerparent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    // marginHorizontal: 10,
    // marginBottom: 10,
  },
  reviewcontainer: {
    flexDirection: "row",
    gap: 7,
  },
  deliveryTimingrate: {
    fontSize: 12,
    fontWeight: "400",
    color: "#454545",
  },
  deliveryTiming: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6F6F6F",
    borderLeftWidth: 1,
    paddingLeft: 5,
  },

  scrollView: {
    overflow: "hidden", // Hide the bottom scrollbar
  },
  imageContainer: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  offerimage: {
    width: "95%",
    height: 200,
    resizeMode: "contain",
  },

  //   filter styles

  // recommend styles

  // explore styles
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  exploreCard: {
    width: Dimensions.get("window").width / 3-12,
    // width: windowWidth / 3 - 20, // Adjusted width for three cards in a row
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 5, // Reduced margin
    marginBottom: 10,
    marginTop: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop:15,
    marginBottom:15
  },
  exploreImageWrapper: {
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Center the image vertically
    overflow: 'hidden',
  },
  exploreImage: {
    width: "80%", // Adjusted width to fit the card
    height: 90,
  },
  exploreContent: {
    padding: 10,
  },
  exploreFoodName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#214357",
    textAlign: "center",
  },
  exploreReviewContainerParent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  exploreReviewContainer: {
    flexDirection: "row",
    gap: 7,
   
  },
  exploreDeliveryTimingRate: {
    fontSize: 12,
    fontWeight: "400",
    color: "#454545",
    textAlign: "center",
  },

  // what's on your mind styles
  slidercontainer:{
    flex: 1,
    marginTop:10
  },
  sliderimage:{
    width: Dimensions.get('window').width / 3, // Adjust width to show 2 images in a row
    height: 100, // Adjust height as needed
    resizeMode: 'contain',
  },
    // filters styles
    filterItem: {
      marginTop:20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      padding: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 5,
      backgroundColor: '#fff',
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    filterText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
    },
    filtericon:{
      marginRight:5,
      tintColor: '#333',
    },

    // food cards
    Foodcardcard: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    Foodcardimage: {
      width: '80%',
      height: 150,
      borderRadius: 10,
    },
    content: {
      flex: 1,
      marginLeft: 10,
    },
    restaurantName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cuisine: {
      fontSize: 14,
      color: '#777',
      marginTop: 5,
    },
    distance: {
      fontSize: 14,
      color: '#777',
      marginTop: 5,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFD700', // Golden color
      marginLeft: 5,
    },
 
});

export default RecommendPage;
